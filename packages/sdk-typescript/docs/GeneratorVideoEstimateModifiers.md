
# GeneratorVideoEstimateModifiers

Generator Video Estimate Modifiers used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`audio` | number
`defaultSteps` | number
`imageToVideo` | number
`lastFrame` | number

## Example

```typescript
import type { GeneratorVideoEstimateModifiers } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "audio": null,
  "defaultSteps": null,
  "imageToVideo": null,
  "lastFrame": null,
} satisfies GeneratorVideoEstimateModifiers

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoEstimateModifiers
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
