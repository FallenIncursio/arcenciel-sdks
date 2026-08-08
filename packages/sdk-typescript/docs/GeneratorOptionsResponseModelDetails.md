
# GeneratorOptionsResponseModelDetails

Structured model details details for this generator options response.

## Properties

Name | Type
------------ | -------------
`adetailer` | [Array&lt;GeneratorOptionsResponseModelDetailsAdetailerInner&gt;](GeneratorOptionsResponseModelDetailsAdetailerInner.md)
`checkpoints` | [Array&lt;GeneratorOptionsResponseModelDetailsCheckpointsInner&gt;](GeneratorOptionsResponseModelDetailsCheckpointsInner.md)
`controlnets` | [Array&lt;GeneratorOptionsResponseModelDetailsControlnetsInner&gt;](GeneratorOptionsResponseModelDetailsControlnetsInner.md)
`loras` | [Array&lt;GeneratorOptionsResponseModelDetailsLorasInner&gt;](GeneratorOptionsResponseModelDetailsLorasInner.md)
`upscale` | [Array&lt;GeneratorOptionsResponseModelDetailsUpscaleInner&gt;](GeneratorOptionsResponseModelDetailsUpscaleInner.md)
`vae` | [Array&lt;GeneratorOptionsResponseModelDetailsVaeInner&gt;](GeneratorOptionsResponseModelDetailsVaeInner.md)

## Example

```typescript
import type { GeneratorOptionsResponseModelDetails } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "adetailer": null,
  "checkpoints": null,
  "controlnets": null,
  "loras": null,
  "upscale": null,
  "vae": null,
} satisfies GeneratorOptionsResponseModelDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorOptionsResponseModelDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
