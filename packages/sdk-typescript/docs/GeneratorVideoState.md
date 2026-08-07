
# GeneratorVideoState

Generator Video State used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`audience` | string
`canEnqueue` | boolean
`enabled` | boolean
`message` | string
`staffOnly` | boolean
`visible` | boolean

## Example

```typescript
import type { GeneratorVideoState } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "audience": null,
  "canEnqueue": null,
  "enabled": null,
  "message": null,
  "staffOnly": null,
  "visible": null,
} satisfies GeneratorVideoState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
