
# InterrogateGeneratorImage200Response

Fields describing 200 response for api generator autotag interrogate in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`rating` | string
`source` | string
`tagCount` | number
`tags` | Array&lt;string&gt;

## Example

```typescript
import type { InterrogateGeneratorImage200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "rating": null,
  "source": null,
  "tagCount": null,
  "tags": null,
} satisfies InterrogateGeneratorImage200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InterrogateGeneratorImage200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
