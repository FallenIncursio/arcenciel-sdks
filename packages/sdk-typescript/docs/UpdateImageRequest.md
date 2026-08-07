
# UpdateImageRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`cfg` | number
`description` | string
`negativePrompt` | string
`prompt` | string
`sampler` | string
`seed` | string
`steps` | number
`title` | string

## Example

```typescript
import type { UpdateImageRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "cfg": null,
  "description": null,
  "negativePrompt": null,
  "prompt": null,
  "sampler": null,
  "seed": null,
  "steps": null,
  "title": null,
} satisfies UpdateImageRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateImageRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
