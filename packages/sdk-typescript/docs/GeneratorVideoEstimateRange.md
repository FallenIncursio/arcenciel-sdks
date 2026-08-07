
# GeneratorVideoEstimateRange

Generator Video Estimate Range used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`confidence` | string
`maxSeconds` | number
`minSeconds` | number
`sampleCount` | number

## Example

```typescript
import type { GeneratorVideoEstimateRange } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "confidence": null,
  "maxSeconds": null,
  "minSeconds": null,
  "sampleCount": null,
} satisfies GeneratorVideoEstimateRange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoEstimateRange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
