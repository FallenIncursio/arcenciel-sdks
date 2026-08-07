
# GeneratorTagSuggestionsResponse

Generator Tag Suggestions Response used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`tags` | [Array&lt;GeneratorTagSuggestion&gt;](GeneratorTagSuggestion.md)

## Example

```typescript
import type { GeneratorTagSuggestionsResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "tags": null,
} satisfies GeneratorTagSuggestionsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorTagSuggestionsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
