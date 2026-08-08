
# GeneratorPublishResponse

Fields describing generator publish response in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`alreadyPublished` | Array&lt;string&gt;
`alreadyPublishedCount` | number
`count` | number
`images` | Array&lt;{ [key: string]: any; }&gt;

## Example

```typescript
import type { GeneratorPublishResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "alreadyPublished": null,
  "alreadyPublishedCount": null,
  "count": null,
  "images": null,
} satisfies GeneratorPublishResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorPublishResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
