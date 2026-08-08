
# GeneratorVideoDefaults

Fields describing generator video defaults in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`aspectRatio` | string
`audioEnabled` | boolean
`cfg` | number
`fps` | number
`frames` | number
`imageAspectRatio` | string
`mode` | string
`negativePrompt` | string
`resolutionBucket` | number
`samplerName` | string
`scheduler` | string
`sfwMode` | boolean
`steps` | number

## Example

```typescript
import type { GeneratorVideoDefaults } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "aspectRatio": null,
  "audioEnabled": null,
  "cfg": null,
  "fps": null,
  "frames": null,
  "imageAspectRatio": null,
  "mode": null,
  "negativePrompt": null,
  "resolutionBucket": null,
  "samplerName": null,
  "scheduler": null,
  "sfwMode": null,
  "steps": null,
} satisfies GeneratorVideoDefaults

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoDefaults
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
