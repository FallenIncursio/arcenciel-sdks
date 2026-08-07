
# GeneratorVideoSafetyReview

Generator Video Safety Review used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`actorId` | number
`actorRole` | string
`locked` | boolean
`note` | string
`reason` | string
`reviewedAt` | number
`status` | string

## Example

```typescript
import type { GeneratorVideoSafetyReview } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "actorId": null,
  "actorRole": null,
  "locked": null,
  "note": null,
  "reason": null,
  "reviewedAt": null,
  "status": null,
} satisfies GeneratorVideoSafetyReview

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoSafetyReview
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
