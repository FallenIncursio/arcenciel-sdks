
# SearchGeneratorCheckpoints200Response

200 response for api generator models checkpoints used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`baseModel` | string
`entries` | [Array&lt;GeneratorModelCatalogEntry&gt;](GeneratorModelCatalogEntry.md)
`limit` | number
`query` | string

## Example

```typescript
import type { SearchGeneratorCheckpoints200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "baseModel": null,
  "entries": null,
  "limit": null,
  "query": null,
} satisfies SearchGeneratorCheckpoints200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchGeneratorCheckpoints200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
