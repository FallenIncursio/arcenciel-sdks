
# CreatorStatsResponseDownloadPerformance

Structured download performance details for this creator stats response.

## Properties

Name | Type
------------ | -------------
`returningDownloaderRate` | number
`returningDownloaders` | number

## Example

```typescript
import type { CreatorStatsResponseDownloadPerformance } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "returningDownloaderRate": null,
  "returningDownloaders": null,
} satisfies CreatorStatsResponseDownloadPerformance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatorStatsResponseDownloadPerformance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
