import { ArcEnCielClient } from '../src/index.js'

const apiKey = process.env.ARCENCIEL_API_KEY
if (!apiKey) throw new Error('Set ARCENCIEL_API_KEY with FeedbackRead for this read-only example.')

const client = new ArcEnCielClient({ apiKey })
const feedback = await client.call(() => client.feedback.listMyFeedback())
const notices = await client.call(() => client.trustSafety.listMyIllegalContentNotices())

console.log(`Own feedback cases: ${feedback.length}`)
console.log(`Own illegal-content notices: ${notices.length}`)

if (feedback[0]) {
  const detail = await client.call(() => client.feedback.getFeedback({ publicId: feedback[0].publicId }))
  console.log(`${detail.publicId}: ${detail.status} — ${detail.title}`)
}

if (notices[0]) {
  const detail = await client.call(() => client.trustSafety.getIllegalContentNotice({ publicId: notices[0].publicId }))
  console.log(`${detail.publicId}: ${detail.status} — ${detail.targetType}`)
}
