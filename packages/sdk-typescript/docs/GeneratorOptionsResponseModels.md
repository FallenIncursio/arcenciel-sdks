
# GeneratorOptionsResponseModels

Structured models details for this generator options response.

## Properties

Name | Type
------------ | -------------
`adetailer` | Array&lt;string&gt;
`checkpoints` | Array&lt;string&gt;
`controlnets` | Array&lt;string&gt;
`loras` | Array&lt;string&gt;
`upscale` | Array&lt;string&gt;
`vae` | Array&lt;string&gt;

## Example

```typescript
import type { GeneratorOptionsResponseModels } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "adetailer": null,
  "checkpoints": null,
  "controlnets": null,
  "loras": null,
  "upscale": null,
  "vae": null,
} satisfies GeneratorOptionsResponseModels

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorOptionsResponseModels
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
