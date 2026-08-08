
# CreateGeneratorJobRequestLorasInner

Loras item associated with this loras; preserve server-returned values when passing them to another operation.

## Properties

Name | Type
------------ | -------------
`name` | string
`weight` | number

## Example

```typescript
import type { CreateGeneratorJobRequestLorasInner } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "weight": null,
} satisfies CreateGeneratorJobRequestLorasInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateGeneratorJobRequestLorasInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
