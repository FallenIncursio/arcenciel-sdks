
# DeveloperIllegalContentNoticeDetail


## Properties

Name | Type
------------ | -------------
`acknowledgedAt` | Date
`category` | string
`createdAt` | Date
`decidedAt` | Date
`decisionAction` | string
`publicId` | string
`reporterMessage` | string
`reviewRequestedAt` | Date
`reviewRequestedBy` | string
`status` | string
`targetLabel` | string
`targetType` | string
`targetUrl` | string
`updatedAt` | Date
`affectedUserMessage` | string
`canRequestReview` | boolean
`decisionReason` | string
`description` | string
`evidence` | string
`evidenceAttachments` | [Array&lt;DeveloperNoticeEvidenceAttachment&gt;](DeveloperNoticeEvidenceAttachment.md)
`jurisdiction` | string
`legalBasis` | string
`reviewRequestMessage` | string
`reviewedBy` | [DeveloperNoticeReviewer](DeveloperNoticeReviewer.md)
`targetId` | number
`targetTypeHint` | string

## Example

```typescript
import type { DeveloperIllegalContentNoticeDetail } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "acknowledgedAt": null,
  "category": PRIVACY_OR_DOOXING,
  "createdAt": 2026-08-07T10:00Z,
  "decidedAt": null,
  "decisionAction": NONE,
  "publicId": ICN-9A2C13,
  "reporterMessage": null,
  "reviewRequestedAt": null,
  "reviewRequestedBy": REPORTER,
  "status": SUBMITTED,
  "targetLabel": Evening portrait,
  "targetType": IMAGE,
  "targetUrl": https://arcenciel.io/images/108,
  "updatedAt": 2026-08-07T10:00Z,
  "affectedUserMessage": null,
  "canRequestReview": false,
  "decisionReason": null,
  "description": The published image contains personal information without consent.,
  "evidence": The attached screenshot marks the relevant area.,
  "evidenceAttachments": null,
  "jurisdiction": DE,
  "legalBasis": Applicable national privacy law.,
  "reviewRequestMessage": null,
  "reviewedBy": null,
  "targetId": 108,
  "targetTypeHint": IMAGE,
} satisfies DeveloperIllegalContentNoticeDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperIllegalContentNoticeDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
