
# OAuthClientPublic

Fields describing oauth client public in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`allowOfflineAccess` | boolean
`allowedScopes` | Array&lt;string&gt;
`description` | string
`homepageUrl` | string
`id` | string
`name` | string
`owner` | [OAuthClientPublicOwner](OAuthClientPublicOwner.md)
`type` | string

## Example

```typescript
import type { OAuthClientPublic } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "allowOfflineAccess": true,
  "allowedScopes": ["models:read","models:write"],
  "description": Publishes approved creator content.,
  "homepageUrl": https://app.example.com/,
  "id": aec_client_C1J4K7h2S6p9Q3m8,
  "name": Example creator dashboard,
  "owner": null,
  "type": null,
} satisfies OAuthClientPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthClientPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
