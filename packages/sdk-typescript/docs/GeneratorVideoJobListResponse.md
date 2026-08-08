
# GeneratorVideoJobListResponse

Fields describing generator video job list response in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`jobs` | [Array&lt;GeneratorVideoJob&gt;](GeneratorVideoJob.md)
`nextCursor` | string
`quota` | [GeneratorVideoQuota](GeneratorVideoQuota.md)

## Example

```typescript
import type { GeneratorVideoJobListResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "jobs": null,
  "nextCursor": null,
  "quota": null,
} satisfies GeneratorVideoJobListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoJobListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
