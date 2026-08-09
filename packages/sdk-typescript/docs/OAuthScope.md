
# OAuthScope

Fields describing oauth scope in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`description` | string
`name` | string
`risk` | string
`title` | string
`value` | number

## Example

```typescript
import type { OAuthScope } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "description": Read visible models, versions, files, and download metadata.,
  "name": models:read,
  "risk": null,
  "title": Read models,
  "value": 4,
} satisfies OAuthScope

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthScope
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
