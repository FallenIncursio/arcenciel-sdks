
# Article

Fields describing article in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`bumpedAt` | Date
`content` | string
`contentBumpedAt` | Date
`createdAt` | Date
`id` | number
`tags` | Array&lt;string&gt;
`thumbnailFile` | string
`title` | string
`updatedAt` | Date

## Example

```typescript
import type { Article } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "bumpedAt": null,
  "content": null,
  "contentBumpedAt": null,
  "createdAt": null,
  "id": null,
  "tags": null,
  "thumbnailFile": null,
  "title": null,
  "updatedAt": null,
} satisfies Article

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Article
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
