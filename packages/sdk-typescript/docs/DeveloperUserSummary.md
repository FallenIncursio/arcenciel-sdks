
# DeveloperUserSummary

Public user identity fields safe for attribution. New presentation fields may be added.

## Properties

Name | Type
------------ | -------------
`badges` | Array&lt;{ [key: string]: any; }&gt;
`id` | number
`namecardPreference` | string
`preferredBadge` | { [key: string]: any; }
`preferredBadgeId` | number
`profilePicture` | string
`profilePictureRating` | string
`username` | string

## Example

```typescript
import type { DeveloperUserSummary } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "badges": null,
  "id": null,
  "namecardPreference": null,
  "preferredBadge": null,
  "preferredBadgeId": null,
  "profilePicture": null,
  "profilePictureRating": null,
  "username": null,
} satisfies DeveloperUserSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperUserSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
