
# GeneratorJobProgress

Generator Job Progress used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`detail` | [GeneratorJobProgressDetail](GeneratorJobProgressDetail.md)
`etaMs` | number
`percent` | number
`phase` | string
`updatedAt` | number

## Example

```typescript
import type { GeneratorJobProgress } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "detail": null,
  "etaMs": null,
  "percent": null,
  "phase": null,
  "updatedAt": null,
} satisfies GeneratorJobProgress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJobProgress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
