
# GeneratorCompareResponse

Generator Compare Response used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`compareRun` | [GeneratorCompareRun](GeneratorCompareRun.md)
`jobs` | [Array&lt;GeneratorJobEnvelope&gt;](GeneratorJobEnvelope.md)

## Example

```typescript
import type { GeneratorCompareResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "compareRun": null,
  "jobs": null,
} satisfies GeneratorCompareResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorCompareResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
