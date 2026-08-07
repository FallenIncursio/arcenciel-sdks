
# UpdateMyProfileRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`bio` | string
`nsfwAgeVerified` | boolean
`sfwMode` | boolean
`trackDownloads` | boolean
`username` | string

## Example

```typescript
import type { UpdateMyProfileRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "bio": null,
  "nsfwAgeVerified": null,
  "sfwMode": null,
  "trackDownloads": null,
  "username": null,
} satisfies UpdateMyProfileRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateMyProfileRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
