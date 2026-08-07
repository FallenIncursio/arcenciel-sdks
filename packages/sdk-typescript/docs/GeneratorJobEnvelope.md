
# GeneratorJobEnvelope

Generator Job Envelope used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`job` | [GeneratorJob](GeneratorJob.md)
`position` | number
`queueEtaMs` | number

## Example

```typescript
import type { GeneratorJobEnvelope } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "job": null,
  "position": null,
  "queueEtaMs": null,
} satisfies GeneratorJobEnvelope

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJobEnvelope
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
