
# DeveloperFeedbackAttachment


## Properties

Name | Type
------------ | -------------
`downloadPath` | string
`expiresAt` | Date
`fileName` | string
`id` | string
`mimeType` | string
`sizeBytes` | number

## Example

```typescript
import type { DeveloperFeedbackAttachment } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "downloadPath": /api/feedback/FB-9A2C13/attachments/cm4attachment01,
  "expiresAt": 2026-08-07T10:00Z,
  "fileName": console-log.txt,
  "id": cm4attachment01,
  "mimeType": text/plain,
  "sizeBytes": 1842,
} satisfies DeveloperFeedbackAttachment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperFeedbackAttachment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
