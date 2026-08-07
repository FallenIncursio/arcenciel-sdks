
# GeneratorVideoCapabilities

Generator Video Capabilities used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`audioOutput` | boolean
`imageInput` | boolean
`lastFrameInput` | boolean
`ready` | boolean

## Example

```typescript
import type { GeneratorVideoCapabilities } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "audioOutput": null,
  "imageInput": null,
  "lastFrameInput": null,
  "ready": null,
} satisfies GeneratorVideoCapabilities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoCapabilities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
