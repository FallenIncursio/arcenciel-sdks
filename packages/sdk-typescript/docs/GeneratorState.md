
# GeneratorState

Fields describing generator state in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`allowModeratorsWhenDisabled` | boolean
`enabled` | boolean
`message` | string
`regionalPromptsAdminsOnly` | boolean

## Example

```typescript
import type { GeneratorState } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "allowModeratorsWhenDisabled": null,
  "enabled": null,
  "message": null,
  "regionalPromptsAdminsOnly": null,
} satisfies GeneratorState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
