
# GeneratorQuotaBudgets

Budgets accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`gpuMs` | [GeneratorQuotaBudgetBucket](GeneratorQuotaBudgetBucket.md)
`profile` | string
`vramMb` | [GeneratorQuotaBudgetBucket](GeneratorQuotaBudgetBucket.md)

## Example

```typescript
import type { GeneratorQuotaBudgets } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "gpuMs": null,
  "profile": null,
  "vramMb": null,
} satisfies GeneratorQuotaBudgets

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorQuotaBudgets
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
