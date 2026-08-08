
# DownloadGeneratorVideoJob403Response

403 response for api generator video jobs id download value documented for this operation.

## Properties

Name | Type
------------ | -------------
`error` | string
`errorCode` | string
`safetyReason` | string
`safetyStatus` | string
`details` | { [key: string]: any; }
`message` | string
`retryable` | boolean

## Example

```typescript
import type { DownloadGeneratorVideoJob403Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "error": Request could not be completed.,
  "errorCode": REQUEST_FAILED,
  "safetyReason": null,
  "safetyStatus": null,
  "details": null,
  "message": Request could not be completed.,
  "retryable": false,
} satisfies DownloadGeneratorVideoJob403Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DownloadGeneratorVideoJob403Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
