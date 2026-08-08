
# GeneratorUploadTouchResponse

Fields describing generator upload touch response in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`expiresAt` | Date
`missing` | Array&lt;string&gt;
`touched` | number
`ttlSeconds` | number

## Example

```typescript
import type { GeneratorUploadTouchResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "expiresAt": null,
  "missing": null,
  "touched": null,
  "ttlSeconds": null,
} satisfies GeneratorUploadTouchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorUploadTouchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
