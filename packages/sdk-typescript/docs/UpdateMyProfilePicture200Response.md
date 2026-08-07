
# UpdateMyProfilePicture200Response

200 response for api users me profile picture used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`message` | string
`profilePicture` | string

## Example

```typescript
import type { UpdateMyProfilePicture200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": Profile picture updated successfully,
  "profilePicture": null,
} satisfies UpdateMyProfilePicture200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateMyProfilePicture200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
