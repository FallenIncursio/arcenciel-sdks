
# GeneratorPresetExportPreset

Structured preset details for this generator preset export.

## Properties

Name | Type
------------ | -------------
`description` | string
`name` | string
`payload` | { [key: string]: any; }

## Example

```typescript
import type { GeneratorPresetExportPreset } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "name": null,
  "payload": null,
} satisfies GeneratorPresetExportPreset

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorPresetExportPreset
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
