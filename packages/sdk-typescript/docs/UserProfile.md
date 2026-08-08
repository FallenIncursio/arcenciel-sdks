
# UserProfile

Fields describing user profile in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`articleCount` | number
`bio` | string
`createdAt` | Date
`followersCount` | number
`id` | number
`imageCount` | number
`isFollowed` | boolean
`modelCount` | number
`profileBanner` | string
`profilePicture` | string
`role` | string
`socialLinks` | [Array&lt;SelfProfileSocialLinksInner&gt;](SelfProfileSocialLinksInner.md)
`username` | string
`videoCount` | number

## Example

```typescript
import type { UserProfile } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "articleCount": null,
  "bio": null,
  "createdAt": null,
  "followersCount": null,
  "id": null,
  "imageCount": null,
  "isFollowed": null,
  "modelCount": null,
  "profileBanner": null,
  "profilePicture": null,
  "role": null,
  "socialLinks": null,
  "username": null,
  "videoCount": null,
} satisfies UserProfile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserProfile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
