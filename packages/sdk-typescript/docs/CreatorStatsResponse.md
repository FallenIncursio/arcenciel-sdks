
# CreatorStatsResponse

Aggregated creator engagement and download statistics for the applied time range.

## Properties

Name | Type
------------ | -------------
`appliedRange` | [CreatorStatsAppliedRange](CreatorStatsAppliedRange.md)
`comments` | number
`downloadEventsTotal` | number
`downloadPerformance` | [CreatorStatsResponseDownloadPerformance](CreatorStatsResponseDownloadPerformance.md)
`downloadSeries` | [Array&lt;CreatorStatsResponseDownloadSeriesInner&gt;](CreatorStatsResponseDownloadSeriesInner.md)
`downloadsTotal` | number
`favorites` | [CreatorStatsResponseFavorites](CreatorStatsResponseFavorites.md)
`followers` | number
`meta` | [CreatorStatsResponseMeta](CreatorStatsResponseMeta.md)
`rangeBounds` | [CreatorStatsRangeBounds](CreatorStatsRangeBounds.md)
`reactions` | [CreatorStatsResponseReactions](CreatorStatsResponseReactions.md)
`topModels` | [Array&lt;CreatorStatsResponseTopModelsInner&gt;](CreatorStatsResponseTopModelsInner.md)
`uniqueDownloadersTotal` | number
`uniqueDownloads` | number

## Example

```typescript
import type { CreatorStatsResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "appliedRange": null,
  "comments": null,
  "downloadEventsTotal": null,
  "downloadPerformance": null,
  "downloadSeries": null,
  "downloadsTotal": null,
  "favorites": null,
  "followers": null,
  "meta": null,
  "rangeBounds": null,
  "reactions": null,
  "topModels": null,
  "uniqueDownloadersTotal": null,
  "uniqueDownloads": null,
} satisfies CreatorStatsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatorStatsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
