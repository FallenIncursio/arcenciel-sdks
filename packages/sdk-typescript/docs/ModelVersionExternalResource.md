
# ModelVersionExternalResource

External item associated with this external; preserve server-returned values when passing them to another operation.

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
`baseModel` | string
`downloadUrl` | string
`externalResourceId` | number
`fileName` | string
`modelType` | string
`provider` | string
`title` | string
`url` | string
`versionName` | string

## Example

```typescript
import type { ModelVersionExternalResource } from '@arcenciel/sdk'

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
  "baseModel": null,
  "downloadUrl": null,
  "externalResourceId": null,
  "fileName": null,
  "modelType": null,
  "provider": null,
  "title": null,
  "url": null,
  "versionName": null,
} satisfies ModelVersionExternalResource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelVersionExternalResource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
