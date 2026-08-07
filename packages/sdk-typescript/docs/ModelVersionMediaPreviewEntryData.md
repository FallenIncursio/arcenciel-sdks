
# ModelVersionMediaPreviewEntryData

Visible image or video metadata. Scheduled video records may have private generation fields redacted.

## Properties

Name | Type
------------ | -------------
`cfg` | number
`createdAt` | Date
`description` | string
`dislikeCount` | number
`fileName` | string
`filePath` | string
`heartCount` | number
`id` | string
`likeCount` | number
`metadata` | string
`negativePrompt` | string
`prompt` | string
`rating` | string
`sampler` | string
`seed` | number
`steps` | number
`title` | string
`updatedAt` | Date
`dislike` | number
`heart` | number
`like` | number
`streamManifestPath` | string
`tags` | Array&lt;string&gt;
`uploader` | [User](User.md)

## Example

```typescript
import type { ModelVersionMediaPreviewEntryData } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "cfg": null,
  "createdAt": null,
  "description": null,
  "dislikeCount": null,
  "fileName": null,
  "filePath": null,
  "heartCount": null,
  "id": null,
  "likeCount": null,
  "metadata": null,
  "negativePrompt": null,
  "prompt": null,
  "rating": null,
  "sampler": null,
  "seed": null,
  "steps": null,
  "title": null,
  "updatedAt": null,
  "dislike": null,
  "heart": null,
  "like": null,
  "streamManifestPath": null,
  "tags": null,
  "uploader": null,
} satisfies ModelVersionMediaPreviewEntryData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelVersionMediaPreviewEntryData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
