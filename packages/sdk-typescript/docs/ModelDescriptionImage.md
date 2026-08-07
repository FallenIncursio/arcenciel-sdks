
# ModelDescriptionImage

Description Images item used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`fileName` | string
`filePath` | string
`height` | number
`id` | number
`modelId` | number
`rating` | string
`variants` | [Array&lt;ModelDescriptionImageVariantsInner&gt;](ModelDescriptionImageVariantsInner.md)
`width` | number

## Example

```typescript
import type { ModelDescriptionImage } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "fileName": null,
  "filePath": null,
  "height": null,
  "id": null,
  "modelId": null,
  "rating": null,
  "variants": null,
  "width": null,
} satisfies ModelDescriptionImage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelDescriptionImage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
