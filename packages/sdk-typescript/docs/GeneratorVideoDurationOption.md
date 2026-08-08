
# GeneratorVideoDurationOption

Fields describing generator video duration option in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`creditCost` | number
`durationSeconds` | number
`estimateFactor` | number
`frames` | number
`label` | string
`maxResolutionBucket` | number

## Example

```typescript
import type { GeneratorVideoDurationOption } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "creditCost": null,
  "durationSeconds": null,
  "estimateFactor": null,
  "frames": null,
  "label": null,
  "maxResolutionBucket": null,
} satisfies GeneratorVideoDurationOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoDurationOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
