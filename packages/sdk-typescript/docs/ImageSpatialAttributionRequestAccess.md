
# ImageSpatialAttributionRequestAccess

Structured request access details for this image spatial attribution.

## Properties

Name | Type
------------ | -------------
`accessTier` | string
`canRequest` | boolean
`freeLimit` | number
`reason` | string
`remaining` | number

## Example

```typescript
import type { ImageSpatialAttributionRequestAccess } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "accessTier": null,
  "canRequest": null,
  "freeLimit": null,
  "reason": null,
  "remaining": null,
} satisfies ImageSpatialAttributionRequestAccess

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImageSpatialAttributionRequestAccess
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
