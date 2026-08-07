
# GeneratorCompareRun

Generator Compare Run used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`completedCount` | number
`cost` | [GeneratorCompareCost](GeneratorCompareCost.md)
`count` | number
`createdAt` | number
`failedCount` | number
`grid` | [GeneratorCompareGrid](GeneratorCompareGrid.md)
`id` | string
`modelNames` | Array&lt;string&gt;
`pendingCount` | number
`seed` | [GeneratorCompareRunSeed](GeneratorCompareRunSeed.md)
`status` | string
`updatedAt` | number

## Example

```typescript
import type { GeneratorCompareRun } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "completedCount": null,
  "cost": null,
  "count": null,
  "createdAt": null,
  "failedCount": null,
  "grid": null,
  "id": null,
  "modelNames": null,
  "pendingCount": null,
  "seed": null,
  "status": null,
  "updatedAt": null,
} satisfies GeneratorCompareRun

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorCompareRun
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
