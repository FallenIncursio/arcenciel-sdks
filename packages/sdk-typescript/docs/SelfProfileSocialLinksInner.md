
# SelfProfileSocialLinksInner

Social Links item used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`icon` | string
`id` | number
`order` | number
`url` | string

## Example

```typescript
import type { SelfProfileSocialLinksInner } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "icon": null,
  "id": null,
  "order": null,
  "url": null,
} satisfies SelfProfileSocialLinksInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SelfProfileSocialLinksInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
