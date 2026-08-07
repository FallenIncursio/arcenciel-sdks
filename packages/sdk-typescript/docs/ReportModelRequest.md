
# ReportModelRequest


## Properties

Name | Type
------------ | -------------
`comment` | string
`reason` | string
`subReason` | string

## Example

```typescript
import type { ReportModelRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "comment": This upload impersonates another creator and copies their metadata.,
  "reason": MISLEADING,
  "subReason": IMPERSONATION,
} satisfies ReportModelRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReportModelRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
