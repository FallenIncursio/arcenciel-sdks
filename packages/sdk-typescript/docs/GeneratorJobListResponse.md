
# GeneratorJobListResponse

Fields describing generator job list response in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`jobs` | [Array&lt;GeneratorJobListItem&gt;](GeneratorJobListItem.md)
`nextCursor` | string

## Example

```typescript
import type { GeneratorJobListResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "jobs": null,
  "nextCursor": null,
} satisfies GeneratorJobListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJobListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
