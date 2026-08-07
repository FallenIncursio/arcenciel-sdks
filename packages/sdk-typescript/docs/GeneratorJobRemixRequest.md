
# GeneratorJobRemixRequest

Same override fields as `POST /api/generator/jobs`.

## Properties

Name | Type
------------ | -------------
`adetailer` | [GeneratorAdetailerConfig](GeneratorAdetailerConfig.md)
`adetailerDetectionOrder` | string
`adetailerNegative` | string
`adetailerPositive` | string
`attentionCouple` | [GeneratorJobRemixRequestAttentionCouple](GeneratorJobRemixRequestAttentionCouple.md)
`batchSize` | number
`cfg` | number
`controlnets` | [Array&lt;GeneratorJobRemixRequestControlnetsInner&gt;](GeneratorJobRemixRequestControlnetsInner.md)
`denoise` | number
`extraSeed` | [GeneratorJobRemixRequestExtraSeed](GeneratorJobRemixRequestExtraSeed.md)
`extraSeedStrength` | number
`height` | number
`imagePath` | string
`loraName` | string
`loras` | [Array&lt;CreateGeneratorJobRequestLorasInner&gt;](CreateGeneratorJobRequestLorasInner.md)
`metadata` | { [key: string]: any; }
`mode` | string
`modelName` | string
`negativePrompt` | string
`presetId` | number
`prompt` | string
`promptControl` | [GeneratorJobRemixRequestPromptControl](GeneratorJobRemixRequestPromptControl.md)
`retentionDays` | number
`rfShift` | number
`samplerName` | string
`scaleFactor` | number
`scheduler` | string
`schedulerName` | string
`seed` | [GeneratorJobRemixRequestSeed](GeneratorJobRemixRequestSeed.md)
`sfwMode` | boolean
`steps` | number
`tags` | Array&lt;string&gt;
`upscaleProfiles` | [Array&lt;GeneratorJobRemixRequestUpscaleProfilesInner&gt;](GeneratorJobRemixRequestUpscaleProfilesInner.md)
`vaeName` | string
`width` | number

## Example

```typescript
import type { GeneratorJobRemixRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "adetailer": null,
  "adetailerDetectionOrder": null,
  "adetailerNegative": null,
  "adetailerPositive": null,
  "attentionCouple": null,
  "batchSize": null,
  "cfg": null,
  "controlnets": null,
  "denoise": null,
  "extraSeed": null,
  "extraSeedStrength": null,
  "height": null,
  "imagePath": null,
  "loraName": null,
  "loras": null,
  "metadata": null,
  "mode": null,
  "modelName": null,
  "negativePrompt": null,
  "presetId": null,
  "prompt": null,
  "promptControl": null,
  "retentionDays": null,
  "rfShift": null,
  "samplerName": null,
  "scaleFactor": null,
  "scheduler": null,
  "schedulerName": null,
  "seed": null,
  "sfwMode": null,
  "steps": null,
  "tags": null,
  "upscaleProfiles": null,
  "vaeName": null,
  "width": null,
} satisfies GeneratorJobRemixRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJobRemixRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
