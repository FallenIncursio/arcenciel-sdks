
# ModelGalleryResponse

Stable paginated response envelope for a model\'s visible image and video gallery.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;ModelGalleryMediaEntry&gt;](ModelGalleryMediaEntry.md)
`limit` | number
`page` | number
`pinned` | [Array&lt;Image&gt;](Image.md)
`totalCount` | number
`totalPages` | number

## Example

```typescript
import type { ModelGalleryResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "limit": null,
  "page": null,
  "pinned": null,
  "totalCount": null,
  "totalPages": null,
} satisfies ModelGalleryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelGalleryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


