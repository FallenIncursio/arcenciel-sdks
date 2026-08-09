
# GetOAuthAuthorizationServerMetadata200Response

Fields describing 200 response for well known oauth authorization server in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`authorizationEndpoint` | string
`authorizationResponseIssParameterSupported` | boolean
`codeChallengeMethodsSupported` | Array&lt;string&gt;
`grantTypesSupported` | Array&lt;string&gt;
`introspectionEndpoint` | string
`introspectionEndpointAuthMethodsSupported` | Array&lt;string&gt;
`issuer` | string
`responseTypesSupported` | Array&lt;string&gt;
`revocationEndpoint` | string
`revocationEndpointAuthMethodsSupported` | Array&lt;string&gt;
`scopesSupported` | Array&lt;string&gt;
`serviceDocumentation` | string
`tokenEndpoint` | string
`tokenEndpointAuthMethodsSupported` | Array&lt;string&gt;

## Example

```typescript
import type { GetOAuthAuthorizationServerMetadata200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "authorizationEndpoint": null,
  "authorizationResponseIssParameterSupported": true,
  "codeChallengeMethodsSupported": ["S256"],
  "grantTypesSupported": ["authorization_code","refresh_token"],
  "introspectionEndpoint": null,
  "introspectionEndpointAuthMethodsSupported": ["client_secret_basic"],
  "issuer": https://arcenciel.io,
  "responseTypesSupported": ["code"],
  "revocationEndpoint": null,
  "revocationEndpointAuthMethodsSupported": ["none","client_secret_basic"],
  "scopesSupported": ["profile:read","models:read","offline_access"],
  "serviceDocumentation": https://arcenciel.io/developers/oauth,
  "tokenEndpoint": null,
  "tokenEndpointAuthMethodsSupported": ["none","client_secret_basic"],
} satisfies GetOAuthAuthorizationServerMetadata200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetOAuthAuthorizationServerMetadata200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
