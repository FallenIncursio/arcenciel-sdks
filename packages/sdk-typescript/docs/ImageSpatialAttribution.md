
# ImageSpatialAttribution

Fields describing image spatial attribution in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`algorithmVersion` | string
`atlasUrl` | string
`columns` | number
`completedAt` | Date
`device` | string
`durationMs` | number
`height` | number
`mapSize` | number
`message` | string
`modelVersion` | string
`requestAccess` | [ImageSpatialAttributionRequestAccess](ImageSpatialAttributionRequestAccess.md)
`requestedAt` | Date
`retryAfterMs` | number
`rows` | number
`status` | string
`tags` | [Array&lt;ImageSpatialAttributionTagsInner&gt;](ImageSpatialAttributionTagsInner.md)
`width` | number

## Example

```typescript
import type { ImageSpatialAttribution } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "algorithmVersion": null,
  "atlasUrl": null,
  "columns": null,
  "completedAt": null,
  "device": null,
  "durationMs": null,
  "height": null,
  "mapSize": null,
  "message": null,
  "modelVersion": null,
  "requestAccess": null,
  "requestedAt": null,
  "retryAfterMs": null,
  "rows": null,
  "status": null,
  "tags": null,
  "width": null,
} satisfies ImageSpatialAttribution

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImageSpatialAttribution
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
