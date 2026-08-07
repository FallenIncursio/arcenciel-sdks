
# ApiKey

Api Keys item used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`expiresAt` | Date
`id` | number
`lastUsedAt` | Date
`name` | string
`preview` | string
`revokedAt` | Date
`scopeMask` | number
`usageCount` | number

## Example

```typescript
import type { ApiKey } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "expiresAt": null,
  "id": null,
  "lastUsedAt": null,
  "name": null,
  "preview": null,
  "revokedAt": null,
  "scopeMask": null,
  "usageCount": null,
} satisfies ApiKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
