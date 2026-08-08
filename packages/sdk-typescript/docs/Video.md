
# Video

Fields describing video in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`description` | string
`dislike` | number
`filePath` | string
`heart` | number
`id` | string
`like` | number
`streamManifestPath` | string
`tags` | Array&lt;string&gt;
`title` | string
`updatedAt` | Date
`uploader` | [User](User.md)

## Example

```typescript
import type { Video } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "description": null,
  "dislike": null,
  "filePath": null,
  "heart": null,
  "id": null,
  "like": null,
  "streamManifestPath": null,
  "tags": null,
  "title": null,
  "updatedAt": null,
  "uploader": null,
} satisfies Video

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Video
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
