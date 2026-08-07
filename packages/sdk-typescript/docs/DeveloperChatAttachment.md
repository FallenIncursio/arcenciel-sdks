
# DeveloperChatAttachment


## Properties

Name | Type
------------ | -------------
`bytes` | number
`createdAt` | Date
`durationMs` | number
`filePath` | string
`height` | number
`id` | number
`kind` | string
`mimeType` | string
`width` | number

## Example

```typescript
import type { DeveloperChatAttachment } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "bytes": 182430,
  "createdAt": null,
  "durationMs": null,
  "filePath": /uploads/chat/thread-81/image.webp?token=temporary,
  "height": 1024,
  "id": 901,
  "kind": IMAGE,
  "mimeType": image/webp,
  "width": 1024,
} satisfies DeveloperChatAttachment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatAttachment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
