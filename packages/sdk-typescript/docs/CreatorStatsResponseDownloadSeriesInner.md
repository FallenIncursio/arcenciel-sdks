
# CreatorStatsResponseDownloadSeriesInner

Download Series item used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`count` | number
`date` | Date
`events` | number
`uniqueDownloaders` | number

## Example

```typescript
import type { CreatorStatsResponseDownloadSeriesInner } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "date": null,
  "events": null,
  "uniqueDownloaders": null,
} satisfies CreatorStatsResponseDownloadSeriesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatorStatsResponseDownloadSeriesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
