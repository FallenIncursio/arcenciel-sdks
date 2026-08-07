
# PublishGeneratorJobRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`outputs` | Array&lt;string&gt;

## Example

```typescript
import type { PublishGeneratorJobRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "outputs": null,
} satisfies PublishGeneratorJobRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublishGeneratorJobRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
