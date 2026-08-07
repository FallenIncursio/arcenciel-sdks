
# GeneratorJobControlnetsInner

Controlnets item used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`end` | number
`imagePath` | string
`model` | string
`start` | number
`strength` | number

## Example

```typescript
import type { GeneratorJobControlnetsInner } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "end": null,
  "imagePath": null,
  "model": null,
  "start": null,
  "strength": null,
} satisfies GeneratorJobControlnetsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJobControlnetsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
