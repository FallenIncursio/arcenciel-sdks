
# ModelVersionResourcePreviewImage

Structured preview image details for this required item.

## Properties

Name | Type
------------ | -------------
`filePath` | string
`height` | number
`id` | number
`rating` | string
`variants` | Array&lt;object&gt;
`width` | number

## Example

```typescript
import type { ModelVersionResourcePreviewImage } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "filePath": null,
  "height": null,
  "id": null,
  "rating": null,
  "variants": null,
  "width": null,
} satisfies ModelVersionResourcePreviewImage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelVersionResourcePreviewImage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
