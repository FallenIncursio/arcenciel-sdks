
# GeneratorStorageStatus

Generator Storage Status used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`errors` | [Array&lt;GeneratorStorageStatusErrorsInner&gt;](GeneratorStorageStatusErrorsInner.md)
`status` | string
`storedAt` | number

## Example

```typescript
import type { GeneratorStorageStatus } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "errors": null,
  "status": null,
  "storedAt": null,
} satisfies GeneratorStorageStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorStorageStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
