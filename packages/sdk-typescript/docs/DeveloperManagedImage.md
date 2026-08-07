
# DeveloperManagedImage


## Properties

Name | Type
------------ | -------------
`fileName` | string
`filePath` | string
`height` | number
`id` | number
`rating` | string
`variants` | { [key: string]: any; }
`width` | number

## Example

```typescript
import type { DeveloperManagedImage } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "fileName": 108.webp,
  "filePath": uploads/images/108.webp,
  "height": 1024,
  "id": 108,
  "rating": safe,
  "variants": null,
  "width": 1024,
} satisfies DeveloperManagedImage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperManagedImage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
