
# CollabShowcase

Collab Showcase used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`collab` | [CollabShowcaseEvent](CollabShowcaseEvent.md)
`entries` | [Array&lt;CollabShowcaseEntry&gt;](CollabShowcaseEntry.md)

## Example

```typescript
import type { CollabShowcase } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "collab": null,
  "entries": null,
} satisfies CollabShowcase

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollabShowcase
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
