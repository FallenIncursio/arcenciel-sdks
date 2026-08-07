
# VersionTrainingMetadataSummaryDataset

Dataset accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`dirs` | [Array&lt;VersionTrainingMetadataSummaryDatasetDirsInner&gt;](VersionTrainingMetadataSummaryDatasetDirsInner.md)
`totalImages` | number

## Example

```typescript
import type { VersionTrainingMetadataSummaryDataset } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "dirs": null,
  "totalImages": null,
} satisfies VersionTrainingMetadataSummaryDataset

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VersionTrainingMetadataSummaryDataset
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
