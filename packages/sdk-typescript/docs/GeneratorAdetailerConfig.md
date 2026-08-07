
# GeneratorAdetailerConfig

ADetailer configuration for post-processing passes. Allowed detectors/orders are exposed by `GET /api/generator/options` under `limits`.

## Properties

Name | Type
------------ | -------------
`adetailerAttentionCouplePolicy` | string
`adetailerDenoise` | number
`adetailerMaskMode` | string
`adetailerTiming` | string
`attentionCouplePolicy` | string
`confidence` | number
`denoise` | number
`detectionOrder` | string
`detector` | string
`dilate` | number
`dropSize` | number
`enabled` | boolean
`iou` | number
`maskBlur` | number
`maskMode` | string
`maxDetections` | number
`model` | string
`negativePrompt` | string
`positivePrompt` | string
`timing` | string

## Example

```typescript
import type { GeneratorAdetailerConfig } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "adetailerAttentionCouplePolicy": null,
  "adetailerDenoise": null,
  "adetailerMaskMode": null,
  "adetailerTiming": null,
  "attentionCouplePolicy": null,
  "confidence": null,
  "denoise": null,
  "detectionOrder": null,
  "detector": null,
  "dilate": null,
  "dropSize": null,
  "enabled": null,
  "iou": null,
  "maskBlur": null,
  "maskMode": null,
  "maxDetections": null,
  "model": null,
  "negativePrompt": null,
  "positivePrompt": null,
  "timing": null,
} satisfies GeneratorAdetailerConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorAdetailerConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
