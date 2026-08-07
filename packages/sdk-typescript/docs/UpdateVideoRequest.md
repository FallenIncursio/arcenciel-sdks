
# UpdateVideoRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`cfg` | number
`description` | string
`negativePrompt` | string
`prompt` | string
`rating` | string
`sampler` | string
`seed` | string
`steps` | number
`tags` | string
`title` | string

## Example

```typescript
import type { UpdateVideoRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "cfg": null,
  "description": null,
  "negativePrompt": null,
  "prompt": null,
  "rating": null,
  "sampler": null,
  "seed": null,
  "steps": null,
  "tags": null,
  "title": null,
} satisfies UpdateVideoRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateVideoRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
