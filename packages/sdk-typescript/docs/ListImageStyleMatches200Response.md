
# ListImageStyleMatches200Response

Fields describing 200 response for api images id style matches in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`matches` | [Array&lt;Image&gt;](Image.md)
`meta` | object

## Example

```typescript
import type { ListImageStyleMatches200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "matches": null,
  "meta": null,
} satisfies ListImageStyleMatches200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListImageStyleMatches200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
