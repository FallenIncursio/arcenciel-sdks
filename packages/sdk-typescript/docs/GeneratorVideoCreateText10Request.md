
# GeneratorVideoCreateText10Request

Text-to-video request for approximately ten seconds and two credits.

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

## Example

```typescript
import type { GeneratorVideoCreateText10Request } from '@arcenciel/sdk'

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
} satisfies GeneratorVideoCreateText10Request

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoCreateText10Request
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
