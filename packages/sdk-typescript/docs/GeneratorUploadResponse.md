
# GeneratorUploadResponse

Generator Upload Response used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`expiresAt` | Date
`mimeType` | string
`originalName` | string
`path` | string
`size` | number
`ttlSeconds` | number

## Example

```typescript
import type { GeneratorUploadResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "expiresAt": null,
  "mimeType": null,
  "originalName": null,
  "path": null,
  "size": null,
  "ttlSeconds": null,
} satisfies GeneratorUploadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorUploadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
