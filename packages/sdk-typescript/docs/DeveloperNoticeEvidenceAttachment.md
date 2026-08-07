
# DeveloperNoticeEvidenceAttachment


## Properties

Name | Type
------------ | -------------
`downloadPath` | string
`fileName` | string
`id` | string
`mimeType` | string
`sizeBytes` | number
`uploadedAt` | Date

## Example

```typescript
import type { DeveloperNoticeEvidenceAttachment } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "downloadPath": /api/illegal-content-notices/ICN-9A2C13/attachments/ev-01HZX3,
  "fileName": evidence.png,
  "id": ev-01HZX3,
  "mimeType": image/png,
  "sizeBytes": 248122,
  "uploadedAt": 2026-08-07T10:00Z,
} satisfies DeveloperNoticeEvidenceAttachment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperNoticeEvidenceAttachment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
