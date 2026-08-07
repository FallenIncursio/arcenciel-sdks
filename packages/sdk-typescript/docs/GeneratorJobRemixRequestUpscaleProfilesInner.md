
# GeneratorJobRemixRequestUpscaleProfilesInner

Upscale Profiles item used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`denoise` | number
`model` | string
`modelName` | string
`upscaleModelName` | string

## Example

```typescript
import type { GeneratorJobRemixRequestUpscaleProfilesInner } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "denoise": null,
  "model": null,
  "modelName": null,
  "upscaleModelName": null,
} satisfies GeneratorJobRemixRequestUpscaleProfilesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJobRemixRequestUpscaleProfilesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
