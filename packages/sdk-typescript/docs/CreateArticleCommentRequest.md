
# CreateArticleCommentRequest


## Properties

Name | Type
------------ | -------------
`content` | string
`parentComment` | number

## Example

```typescript
import type { CreateArticleCommentRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "content": Beautiful composition!,
  "parentComment": null,
} satisfies CreateArticleCommentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateArticleCommentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
