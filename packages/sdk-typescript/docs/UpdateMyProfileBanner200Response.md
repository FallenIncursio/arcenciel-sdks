
# UpdateMyProfileBanner200Response

Fields describing 200 response for api users me banner in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`message` | string
`profileBanner` | string

## Example

```typescript
import type { UpdateMyProfileBanner200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": Profile banner updated successfully,
  "profileBanner": null,
} satisfies UpdateMyProfileBanner200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateMyProfileBanner200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
