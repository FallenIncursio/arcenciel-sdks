
# DeveloperIllegalContentNoticeCreateResponse


## Properties

Name | Type
------------ | -------------
`accessCode` | string
`lookupUrl` | string
`publicId` | string
`status` | string
`targetLabel` | string
`targetType` | string

## Example

```typescript
import type { DeveloperIllegalContentNoticeCreateResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "accessCode": null,
  "lookupUrl": https://arcenciel.io/report-illegal-content?case=ICN-9A2C13,
  "publicId": ICN-9A2C13,
  "status": SUBMITTED,
  "targetLabel": Evening portrait,
  "targetType": IMAGE,
} satisfies DeveloperIllegalContentNoticeCreateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperIllegalContentNoticeCreateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
