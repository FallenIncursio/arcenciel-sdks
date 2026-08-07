
# DeveloperNoticeReviewResponse


## Properties

Name | Type
------------ | -------------
`message` | string
`publicId` | string
`status` | string

## Example

```typescript
import type { DeveloperNoticeReviewResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": Review requested.,
  "publicId": ICN-9A2C13,
  "status": SUBMITTED,
} satisfies DeveloperNoticeReviewResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperNoticeReviewResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
