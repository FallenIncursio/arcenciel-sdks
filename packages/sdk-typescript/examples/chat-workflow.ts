import { ArcEnCielClient } from '../src/index.js'

const environment = (globalThis as typeof globalThis & { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {}
const apiKey = environment.ARCENCIEL_API_KEY
const threadId = Number(environment.ARCENCIEL_CHAT_THREAD_ID ?? 0)

async function main(): Promise<void> {
  if (!apiKey) throw new Error('ARCENCIEL_API_KEY is required')

  const client = new ArcEnCielClient({ apiKey })
  const inbox = await client.call(() => client.chat.listChatThreads({ folder: 'inbox', limit: 10 }))
  console.log(inbox.data.map(thread => ({ id: thread.id, title: thread.title, unread: thread.hasUnread })))

  if (threadId > 0) {
    const created = await client.call(() =>
      client.chat.createChatMessage({
        threadId,
        idempotencyKey: crypto.randomUUID(),
        content: 'SDK v1.7 chat example',
      })
    )
    console.log({ createdMessageId: created.id, requestIdHint: 'Inspect ArcEnCielError.requestId on failures.' })
  }
}

void main()
