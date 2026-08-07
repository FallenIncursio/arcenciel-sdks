
# GeneratorSafetySnapshot

Generator Safety Snapshot used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`error` | string
`outputs` | { [key: string]: any; }
`reason` | string
`status` | string
`updatedAt` | number

## Example

```typescript
import type { GeneratorSafetySnapshot } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "error": null,
  "outputs": null,
  "reason": null,
  "status": null,
  "updatedAt": null,
} satisfies GeneratorSafetySnapshot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorSafetySnapshot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
