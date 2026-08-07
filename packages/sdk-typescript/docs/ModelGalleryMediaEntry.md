
# ModelGalleryMediaEntry

One mixed-media gallery entry. Use kind as the discriminator before reading data.

## Properties

Name | Type
------------ | -------------
`data` | [ModelGalleryMediaEntryData](ModelGalleryMediaEntryData.md)
`kind` | string

## Example

```typescript
import type { ModelGalleryMediaEntry } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "kind": null,
} satisfies ModelGalleryMediaEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelGalleryMediaEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


