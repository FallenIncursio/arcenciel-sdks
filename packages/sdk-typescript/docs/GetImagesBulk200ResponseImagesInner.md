
# GetImagesBulk200ResponseImagesInner

Structured images item details for this images.

## Properties

Name | Type
------------ | -------------
`cfg` | number
`filePath` | string
`id` | number
`negativePrompt` | string
`prompt` | string
`sampler` | string
`seed` | string
`steps` | number

## Example

```typescript
import type { GetImagesBulk200ResponseImagesInner } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "cfg": null,
  "filePath": null,
  "id": null,
  "negativePrompt": null,
  "prompt": null,
  "sampler": null,
  "seed": null,
  "steps": null,
} satisfies GetImagesBulk200ResponseImagesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetImagesBulk200ResponseImagesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
