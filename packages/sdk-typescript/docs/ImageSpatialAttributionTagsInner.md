
# ImageSpatialAttributionTagsInner

Structured tags item details for this tags.

## Properties

Name | Type
------------ | -------------
`distribution` | string
`focus` | number
`index` | number
`name` | string
`score` | number

## Example

```typescript
import type { ImageSpatialAttributionTagsInner } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "distribution": null,
  "focus": null,
  "index": null,
  "name": null,
  "score": null,
} satisfies ImageSpatialAttributionTagsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImageSpatialAttributionTagsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
