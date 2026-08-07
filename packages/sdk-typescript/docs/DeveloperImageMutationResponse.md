
# DeveloperImageMutationResponse


## Properties

Name | Type
------------ | -------------
`image` | [Image](Image.md)
`message` | string

## Example

```typescript
import type { DeveloperImageMutationResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "image": null,
  "message": Image updated successfully,
} satisfies DeveloperImageMutationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperImageMutationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
