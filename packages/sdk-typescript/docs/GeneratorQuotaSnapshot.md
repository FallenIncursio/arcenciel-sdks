
# GeneratorQuotaSnapshot

Quota accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`budgets` | [GeneratorQuotaBudgets](GeneratorQuotaBudgets.md)
`daily` | [GeneratorQuotaCounter](GeneratorQuotaCounter.md)
`nextDailyReliefAt` | number
`pending` | [GeneratorQuotaCounter](GeneratorQuotaCounter.md)
`role` | string
`supporter` | boolean
`supporterPreview` | [GeneratorQuotaSnapshotSupporterPreview](GeneratorQuotaSnapshotSupporterPreview.md)
`windowMs` | number
`windowResetsAt` | number
`windowStartedAt` | number

## Example

```typescript
import type { GeneratorQuotaSnapshot } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "budgets": null,
  "daily": null,
  "nextDailyReliefAt": null,
  "pending": null,
  "role": null,
  "supporter": null,
  "supporterPreview": null,
  "windowMs": null,
  "windowResetsAt": null,
  "windowStartedAt": null,
} satisfies GeneratorQuotaSnapshot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorQuotaSnapshot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
