
# GeneratorJobRemixRequestControlnetsInner

Structured controlnets item details for this controlnets.

## Properties

Name | Type
------------ | -------------
`end` | number
`imagePath` | string
`model` | string
`modelName` | string
`start` | number
`strength` | number

## Example

```typescript
import type { GeneratorJobRemixRequestControlnetsInner } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "end": null,
  "imagePath": null,
  "model": null,
  "modelName": null,
  "start": null,
  "strength": null,
} satisfies GeneratorJobRemixRequestControlnetsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJobRemixRequestControlnetsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
