
# DeveloperVideoMutationResponse


## Properties

Name | Type
------------ | -------------
`message` | string
`video` | [Video](Video.md)

## Example

```typescript
import type { DeveloperVideoMutationResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": Video updated,
  "video": null,
} satisfies DeveloperVideoMutationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperVideoMutationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
