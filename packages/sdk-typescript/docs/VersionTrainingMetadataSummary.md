
# VersionTrainingMetadataSummary

Training Metadata Summary accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`dataset` | [VersionTrainingMetadataSummaryDataset](VersionTrainingMetadataSummaryDataset.md)
`extractedAt` | Date
`run` | [VersionTrainingMetadataSummaryRun](VersionTrainingMetadataSummaryRun.md)
`schemaVersion` | number
`source` | string
`tagsTop` | [Array&lt;VersionTrainingMetadataSummaryTagsTopInner&gt;](VersionTrainingMetadataSummaryTagsTopInner.md)

## Example

```typescript
import type { VersionTrainingMetadataSummary } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "dataset": null,
  "extractedAt": null,
  "run": null,
  "schemaVersion": null,
  "source": null,
  "tagsTop": null,
} satisfies VersionTrainingMetadataSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VersionTrainingMetadataSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


