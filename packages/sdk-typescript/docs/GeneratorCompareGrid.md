
# GeneratorCompareGrid

Fields describing generator compare grid in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`downloadUrl` | string
`height` | number
`previewHeight` | number
`previewRelativePath` | string
`previewUpdatedAt` | number
`previewWidth` | number
`reason` | string
`relativePath` | string
`status` | string
`updatedAt` | number
`url` | string
`width` | number

## Example

```typescript
import type { GeneratorCompareGrid } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "downloadUrl": null,
  "height": null,
  "previewHeight": null,
  "previewRelativePath": null,
  "previewUpdatedAt": null,
  "previewWidth": null,
  "reason": null,
  "relativePath": null,
  "status": null,
  "updatedAt": null,
  "url": null,
  "width": null,
} satisfies GeneratorCompareGrid

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorCompareGrid
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
