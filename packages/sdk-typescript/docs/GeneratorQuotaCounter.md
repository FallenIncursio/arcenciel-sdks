
# GeneratorQuotaCounter

Structured daily details for this quota.

## Properties

Name | Type
------------ | -------------
`limit` | number
`remaining` | number
`used` | number

## Example

```typescript
import type { GeneratorQuotaCounter } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "limit": null,
  "remaining": null,
  "used": null,
} satisfies GeneratorQuotaCounter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorQuotaCounter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
