
# GeneratorVideoLimits

Fields describing generator video limits in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`cfg` | number
`fps` | number
`frames` | Array&lt;number&gt;
`maxOutputBytes` | number
`maxPixels` | number
`maxSourceBytes` | number
`maxSourcePixels` | number
`maxSteps` | number
`minSteps` | number
`negativePromptChars` | number
`promptChars` | number
`retentionDays` | number

## Example

```typescript
import type { GeneratorVideoLimits } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "cfg": null,
  "fps": null,
  "frames": null,
  "maxOutputBytes": null,
  "maxPixels": null,
  "maxSourceBytes": null,
  "maxSourcePixels": null,
  "maxSteps": null,
  "minSteps": null,
  "negativePromptChars": null,
  "promptChars": null,
  "retentionDays": null,
} satisfies GeneratorVideoLimits

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoLimits
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
