
# ScheduleModelVersionRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`publishAt` | Date
`supporterEarlyAccessEnabled` | boolean

## Example

```typescript
import type { ScheduleModelVersionRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "publishAt": null,
  "supporterEarlyAccessEnabled": null,
} satisfies ScheduleModelVersionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleModelVersionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
