
# Uploads

Structured uploads details for this self profile.

## Properties

Name | Type
------------ | -------------
`articles` | [Array&lt;ApiKey&gt;](ApiKey.md)
`images` | [Array&lt;ApiKey&gt;](ApiKey.md)
`models` | [Array&lt;User&gt;](User.md)
`videos` | [Array&lt;ApiKey&gt;](ApiKey.md)

## Example

```typescript
import type { Uploads } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "articles": null,
  "images": null,
  "models": null,
  "videos": null,
} satisfies Uploads

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Uploads
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
