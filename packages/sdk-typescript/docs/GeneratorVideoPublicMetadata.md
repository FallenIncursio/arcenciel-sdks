
# GeneratorVideoPublicMetadata

Generator Video Public Metadata used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`aspectRatio` | string
`audioEnabled` | boolean
`creditCost` | number
`resolutionBucket` | number
`sfwMode` | boolean
`sourceFit` | string

## Example

```typescript
import type { GeneratorVideoPublicMetadata } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "aspectRatio": null,
  "audioEnabled": null,
  "creditCost": null,
  "resolutionBucket": null,
  "sfwMode": null,
  "sourceFit": null,
} satisfies GeneratorVideoPublicMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoPublicMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
