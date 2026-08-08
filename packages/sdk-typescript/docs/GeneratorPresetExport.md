
# GeneratorPresetExport

Fields describing generator preset export in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`exportedAt` | Date
`preset` | [GeneratorPresetExportPreset](GeneratorPresetExportPreset.md)
`version` | number

## Example

```typescript
import type { GeneratorPresetExport } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "exportedAt": null,
  "preset": null,
  "version": null,
} satisfies GeneratorPresetExport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorPresetExport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
