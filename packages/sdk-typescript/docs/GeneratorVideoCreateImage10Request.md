
# GeneratorVideoCreateImage10Request

Approximately ten-second I2V request with a required first frame, optional last frame, and two-credit cost.

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
`lastFrameImagePath` | string
`mode` | string
`resolutionBucket` | number
`sourceImagePath` | string

## Example

```typescript
import type { GeneratorVideoCreateImage10Request } from '@arcenciel/sdk'

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
  "lastFrameImagePath": null,
  "mode": null,
  "resolutionBucket": null,
  "sourceImagePath": null,
} satisfies GeneratorVideoCreateImage10Request

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoCreateImage10Request
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
