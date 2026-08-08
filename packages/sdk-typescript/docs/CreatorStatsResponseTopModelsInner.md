
# CreatorStatsResponseTopModelsInner

Structured top models item details for this top models.

## Properties

Name | Type
------------ | -------------
`downloads` | number
`events` | number
`modelId` | number
`title` | string
`uniqueDownloaders` | number

## Example

```typescript
import type { CreatorStatsResponseTopModelsInner } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "downloads": null,
  "events": null,
  "modelId": null,
  "title": null,
  "uniqueDownloaders": null,
} satisfies CreatorStatsResponseTopModelsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatorStatsResponseTopModelsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
