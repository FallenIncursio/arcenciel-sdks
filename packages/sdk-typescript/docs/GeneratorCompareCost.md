
# GeneratorCompareCost

Generator Compare Cost used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`budgetProfile` | string
`dailyUsage` | number
`estimatedGpuMs` | number
`estimatedVramMb` | number
`jobs` | number
`queueSlots` | number
`weight` | number

## Example

```typescript
import type { GeneratorCompareCost } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "budgetProfile": null,
  "dailyUsage": null,
  "estimatedGpuMs": null,
  "estimatedVramMb": null,
  "jobs": null,
  "queueSlots": null,
  "weight": null,
} satisfies GeneratorCompareCost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorCompareCost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
