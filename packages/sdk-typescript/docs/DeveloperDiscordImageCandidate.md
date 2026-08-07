
# DeveloperDiscordImageCandidate


## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`disabledReason` | string
`dislikeCount` | number
`fileName` | string
`filePath` | string
`heartCount` | number
`height` | number
`id` | number
`isAlreadyAttached` | boolean
`isAttachable` | boolean
`likeCount` | number
`matchedHashes` | Array&lt;string&gt;
`title` | string
`uploadSource` | string
`uploadedViaDiscord` | boolean
`variants` | { [key: string]: any; }
`width` | number

## Example

```typescript
import type { DeveloperDiscordImageCandidate } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "disabledReason": null,
  "dislikeCount": 0,
  "fileName": portrait.webp,
  "filePath": uploads/images/portrait.webp,
  "heartCount": 2,
  "height": 1024,
  "id": 108,
  "isAlreadyAttached": false,
  "isAttachable": true,
  "likeCount": 4,
  "matchedHashes": ["0123456789abcdef"],
  "title": Portrait sample,
  "uploadSource": discord,
  "uploadedViaDiscord": true,
  "variants": null,
  "width": 1024,
} satisfies DeveloperDiscordImageCandidate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperDiscordImageCandidate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
