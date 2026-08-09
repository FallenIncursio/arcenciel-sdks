
# OAuthTokenResponse

Fields describing oauth token response in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`accessToken` | string
`expiresIn` | number
`refreshToken` | string
`scope` | string
`tokenType` | string

## Example

```typescript
import type { OAuthTokenResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "accessToken": aec_oat_opaque-token-shown-once,
  "expiresIn": null,
  "refreshToken": aec_ort_rotating-token-shown-once,
  "scope": models:read offline_access,
  "tokenType": null,
} satisfies OAuthTokenResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthTokenResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
