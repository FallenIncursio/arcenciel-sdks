
# Model

Fields describing model in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`description` | string
`descriptionImages` | [Array&lt;ModelDescriptionImage&gt;](ModelDescriptionImage.md)
`id` | number
`tags` | [Array&lt;Tag&gt;](Tag.md)
`title` | string
`type` | string
`uploader` | [User](User.md)
`uploaderId` | number
`versions` | [Array&lt;Version&gt;](Version.md)

## Example

```typescript
import type { Model } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "descriptionImages": null,
  "id": null,
  "tags": null,
  "title": null,
  "type": null,
  "uploader": null,
  "uploaderId": null,
  "versions": null,
} satisfies Model

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Model
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
