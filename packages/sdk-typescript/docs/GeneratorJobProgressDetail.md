
# GeneratorJobProgressDetail

Detail accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`elapsedMs` | number
`max` | number
`nodeId` | string
`ratio` | number
`source` | string
`timeoutMs` | number
`value` | number

## Example

```typescript
import type { GeneratorJobProgressDetail } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "elapsedMs": null,
  "max": null,
  "nodeId": null,
  "ratio": null,
  "source": null,
  "timeoutMs": null,
  "value": null,
} satisfies GeneratorJobProgressDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJobProgressDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
