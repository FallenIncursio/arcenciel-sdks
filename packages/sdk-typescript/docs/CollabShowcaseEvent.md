
# CollabShowcaseEvent

Collab Showcase Event used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`id` | number
`releaseAt` | Date
`slug` | string
`status` | string
`title` | string
`url` | string

## Example

```typescript
import type { CollabShowcaseEvent } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "releaseAt": null,
  "slug": null,
  "status": null,
  "title": null,
  "url": null,
} satisfies CollabShowcaseEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollabShowcaseEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
