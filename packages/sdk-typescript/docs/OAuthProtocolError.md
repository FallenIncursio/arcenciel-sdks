
# OAuthProtocolError

Fields describing oauth protocol error in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`error` | string
`errorDescription` | string

## Example

```typescript
import type { OAuthProtocolError } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "error": invalid_grant,
  "errorDescription": Authorization code is invalid or expired.,
} satisfies OAuthProtocolError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthProtocolError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
