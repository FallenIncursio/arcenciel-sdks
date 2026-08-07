
# GeneratorVideoModeOption

Generator Video Mode Option used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`id` | string
`label` | string
`unavailableReason` | string

## Example

```typescript
import type { GeneratorVideoModeOption } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "id": null,
  "label": null,
  "unavailableReason": null,
} satisfies GeneratorVideoModeOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoModeOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
