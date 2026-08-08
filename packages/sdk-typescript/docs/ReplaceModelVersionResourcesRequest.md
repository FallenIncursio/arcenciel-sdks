
# ReplaceModelVersionResourcesRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`replace` | boolean
`resources` | Array&lt;object&gt;

## Example

```typescript
import type { ReplaceModelVersionResourcesRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "replace": null,
  "resources": null,
} satisfies ReplaceModelVersionResourcesRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReplaceModelVersionResourcesRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
