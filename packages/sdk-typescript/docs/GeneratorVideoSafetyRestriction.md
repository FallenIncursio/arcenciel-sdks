
# GeneratorVideoSafetyRestriction

Fields describing generator video safety restriction in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`error` | string
`errorCode` | string
`safetyReason` | string
`safetyStatus` | string

## Example

```typescript
import type { GeneratorVideoSafetyRestriction } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "error": null,
  "errorCode": null,
  "safetyReason": null,
  "safetyStatus": null,
} satisfies GeneratorVideoSafetyRestriction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoSafetyRestriction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
