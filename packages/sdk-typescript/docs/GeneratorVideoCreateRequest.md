
# GeneratorVideoCreateRequest

Mode- and duration-specific video request. Unsupported mode, source-frame, duration, and bucket combinations are excluded by the schema.

## Properties

Name | Type
------------ | -------------
`audioEnabled` | boolean
`negativePrompt` | string
`prompt` | string
`promptPreset` | string
`seed` | string
`sfwMode` | boolean
`steps` | number
`aspectRatio` | string
`frames` | number
`mode` | string
`resolutionBucket` | number
`lastFrameImagePath` | string
`sourceImagePath` | string

## Example

```typescript
import type { GeneratorVideoCreateRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "audioEnabled": null,
  "negativePrompt": null,
  "prompt": null,
  "promptPreset": null,
  "seed": null,
  "sfwMode": null,
  "steps": null,
  "aspectRatio": null,
  "frames": null,
  "mode": null,
  "resolutionBucket": null,
  "lastFrameImagePath": null,
  "sourceImagePath": null,
} satisfies GeneratorVideoCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
