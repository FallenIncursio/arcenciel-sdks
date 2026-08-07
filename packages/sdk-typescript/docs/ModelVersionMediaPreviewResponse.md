
# ModelVersionMediaPreviewResponse

Lightweight visible media grouped by model version for carousel and picker integrations.

## Properties

Name | Type
------------ | -------------
`limit` | number
`modelId` | number
`versions` | [Array&lt;ModelVersionMediaPreviewResponseVersionsInner&gt;](ModelVersionMediaPreviewResponseVersionsInner.md)

## Example

```typescript
import type { ModelVersionMediaPreviewResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "limit": null,
  "modelId": null,
  "versions": null,
} satisfies ModelVersionMediaPreviewResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelVersionMediaPreviewResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
