
# DeveloperPinnedTemplatesResponse


## Properties

Name | Type
------------ | -------------
`message` | string
`modelIds` | Array&lt;number&gt;
`models` | [Array&lt;Model&gt;](Model.md)

## Example

```typescript
import type { DeveloperPinnedTemplatesResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": Pinned templates updated,
  "modelIds": [12,18],
  "models": null,
} satisfies DeveloperPinnedTemplatesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperPinnedTemplatesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
