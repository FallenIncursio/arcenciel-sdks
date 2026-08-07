
# DeveloperChatUser


## Properties

Name | Type
------------ | -------------
`badges` | [Array&lt;DeveloperChatBadge&gt;](DeveloperChatBadge.md)
`id` | number
`namecardPreference` | string
`profilePicture` | string
`profilePictureRating` | string
`role` | string
`username` | string

## Example

```typescript
import type { DeveloperChatUser } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "badges": null,
  "id": 42,
  "namecardPreference": aurora,
  "profilePicture": /uploads/profile/42.webp,
  "profilePictureRating": SAFE,
  "role": CREATOR,
  "username": aurora,
} satisfies DeveloperChatUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
