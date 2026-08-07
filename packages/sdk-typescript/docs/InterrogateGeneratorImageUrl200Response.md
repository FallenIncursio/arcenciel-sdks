
# InterrogateGeneratorImageUrl200Response

200 response for api generator autotag interrogate url used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`contentType` | string
`imageUrl` | string
`rating` | string
`size` | number
`source` | string
`tagCount` | number
`tags` | Array&lt;string&gt;

## Example

```typescript
import type { InterrogateGeneratorImageUrl200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "contentType": null,
  "imageUrl": null,
  "rating": null,
  "size": null,
  "source": null,
  "tagCount": null,
  "tags": null,
} satisfies InterrogateGeneratorImageUrl200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InterrogateGeneratorImageUrl200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
