
# TouchGeneratorUploads404Response

404 response for api generator uploads touch value documented for this operation.

## Properties

Name | Type
------------ | -------------
`error` | string
`errorCode` | string
`safetyReason` | string
`safetyStatus` | string
`expiresAt` | Date
`missing` | Array&lt;string&gt;
`touched` | number
`ttlSeconds` | number

## Example

```typescript
import type { TouchGeneratorUploads404Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "error": null,
  "errorCode": null,
  "safetyReason": null,
  "safetyStatus": null,
  "expiresAt": null,
  "missing": null,
  "touched": null,
  "ttlSeconds": null,
} satisfies TouchGeneratorUploads404Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TouchGeneratorUploads404Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
