
# User

Uploader accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`email` | string
`id` | number
`profilePicture` | string
`role` | string
`username` | string

## Example

```typescript
import type { User } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "id": null,
  "profilePicture": null,
  "role": null,
  "username": null,
} satisfies User

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as User
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


