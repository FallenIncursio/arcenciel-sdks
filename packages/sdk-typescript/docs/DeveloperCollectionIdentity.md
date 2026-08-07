
# DeveloperCollectionIdentity


## Properties

Name | Type
------------ | -------------
`id` | number
`slug` | string

## Example

```typescript
import type { DeveloperCollectionIdentity } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 84,
  "slug": portrait-workflow,
} satisfies DeveloperCollectionIdentity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperCollectionIdentity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
