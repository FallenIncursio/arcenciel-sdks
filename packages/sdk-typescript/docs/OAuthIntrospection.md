
# OAuthIntrospection

Fields describing oauth introspection in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`active` | boolean
`clientId` | string
`exp` | number
`iat` | number
`iss` | string
`scope` | string
`sub` | string
`tokenType` | string
`username` | string

## Example

```typescript
import type { OAuthIntrospection } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "active": null,
  "clientId": null,
  "exp": null,
  "iat": null,
  "iss": null,
  "scope": null,
  "sub": null,
  "tokenType": null,
  "username": null,
} satisfies OAuthIntrospection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthIntrospection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
