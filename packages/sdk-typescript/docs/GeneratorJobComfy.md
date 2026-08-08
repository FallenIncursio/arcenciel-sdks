
# GeneratorJobComfy

Structured comfy details for this generator job.

## Properties

Name | Type
------------ | -------------
`messages` | Array&lt;{ [key: string]: any; }&gt;
`nodeErrors` | Array&lt;{ [key: string]: any; }&gt;
`status` | string

## Example

```typescript
import type { GeneratorJobComfy } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "messages": null,
  "nodeErrors": null,
  "status": null,
} satisfies GeneratorJobComfy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJobComfy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
