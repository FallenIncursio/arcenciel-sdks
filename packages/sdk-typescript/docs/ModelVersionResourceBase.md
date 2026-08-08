
# ModelVersionResourceBase

Structured required item details for this required.

## Properties

Name | Type
------------ | -------------
`confidence` | number
`edgeId` | number
`evidence` | object
`id` | number
`kind` | string
`management` | [ModelVersionResourceBaseManagement](ModelVersionResourceBaseManagement.md)
`source` | string
`status` | string
`strength` | number
`targetType` | string

## Example

```typescript
import type { ModelVersionResourceBase } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "confidence": null,
  "edgeId": null,
  "evidence": null,
  "id": null,
  "kind": null,
  "management": null,
  "source": null,
  "status": null,
  "strength": null,
  "targetType": null,
} satisfies ModelVersionResourceBase

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelVersionResourceBase
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
