
# GeneratorModelCatalog

Fields describing generator model catalog in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`adetailer` | [Array&lt;GeneratorModelCatalogEntry&gt;](GeneratorModelCatalogEntry.md)
`checkpoints` | [Array&lt;GeneratorModelCatalogEntry&gt;](GeneratorModelCatalogEntry.md)
`loras` | [Array&lt;GeneratorModelCatalogEntry&gt;](GeneratorModelCatalogEntry.md)

## Example

```typescript
import type { GeneratorModelCatalog } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "adetailer": null,
  "checkpoints": null,
  "loras": null,
} satisfies GeneratorModelCatalog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorModelCatalog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
