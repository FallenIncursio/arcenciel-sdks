import { ArcEnCielClient, verifyWebhookSignature } from '../src/index.js'

const apiKey = process.env.ARCENCIEL_API_KEY
if (!apiKey) throw new Error('Set ARCENCIEL_API_KEY with WebhooksRead for this read-only example.')

const client = new ArcEnCielClient({ apiKey })
const [catalog, endpoints] = await Promise.all([
  client.call(() => client.webhooks.listWebhookEventTypes()),
  client.call(() => client.webhooks.listWebhookEndpoints()),
])

console.log(`Available webhook events: ${catalog.data.map(event => `${event.type}@${event.version}`).join(', ')}`)
console.log(`Owned webhook endpoints: ${endpoints.data.length}`)

// A receiver must preserve the exact request bytes before JSON parsing.
// Replace these fixture values with the raw body, signature header, and
// write-only signing secret held by your server-side secret manager.
const fixtureBody = '{"id":"evt_example","type":"webhook.test"}'
const fixtureSignature = 't=0,v1=' + '0'.repeat(64)
const fixtureSecret = 'whsec_replace_with_server_secret'
console.log(`Synthetic signature accepted: ${await verifyWebhookSignature(fixtureBody, fixtureSignature, fixtureSecret)}`)
