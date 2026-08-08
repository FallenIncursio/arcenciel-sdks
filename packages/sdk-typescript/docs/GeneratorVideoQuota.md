
# GeneratorVideoQuota

Fields describing generator video quota in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`limit` | number
`pending` | number
`pendingLimit` | number
`remaining` | number
`resetAt` | Date
`tier` | string
`unlimitedOverride` | boolean
`used` | number

## Example

```typescript
import type { GeneratorVideoQuota } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "limit": null,
  "pending": null,
  "pendingLimit": null,
  "remaining": null,
  "resetAt": null,
  "tier": null,
  "unlimitedOverride": null,
  "used": null,
} satisfies GeneratorVideoQuota

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoQuota
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
