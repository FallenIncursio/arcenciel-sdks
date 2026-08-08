
# SelfProfile

Fields describing self profile in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`apiKeys` | [Array&lt;ApiKey&gt;](ApiKey.md)
`articleCount` | number
`bio` | string
`civitaiApiKey` | string
`createdAt` | Date
`dateFormat` | string
`discordLinked` | boolean
`email` | string
`followersCount` | number
`hasCivitaiApiKey` | boolean
`id` | number
`imageCount` | number
`isFollowed` | boolean
`modelCount` | number
`profileBanner` | string
`profilePicture` | string
`role` | string
`sfwMode` | boolean
`socialLinks` | [Array&lt;SelfProfileSocialLinksInner&gt;](SelfProfileSocialLinksInner.md)
`trackDownloads` | boolean
`uploads` | [Uploads](Uploads.md)
`username` | string
`videoCount` | number

## Example

```typescript
import type { SelfProfile } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "apiKeys": null,
  "articleCount": null,
  "bio": null,
  "civitaiApiKey": null,
  "createdAt": null,
  "dateFormat": null,
  "discordLinked": null,
  "email": null,
  "followersCount": null,
  "hasCivitaiApiKey": null,
  "id": null,
  "imageCount": null,
  "isFollowed": null,
  "modelCount": null,
  "profileBanner": null,
  "profilePicture": null,
  "role": null,
  "sfwMode": null,
  "socialLinks": null,
  "trackDownloads": null,
  "uploads": null,
  "username": null,
  "videoCount": null,
} satisfies SelfProfile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SelfProfile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
