
# VersionTrainingMetadataSummaryRun

Run accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`batchSize` | number
`epoch` | number
`learningRate` | number
`optimizer` | string
`resolution` | string
`scheduler` | string
`steps` | number
`textEncoderLearningRate` | number
`totalEpochs` | number
`unetLearningRate` | number

## Example

```typescript
import type { VersionTrainingMetadataSummaryRun } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "batchSize": null,
  "epoch": null,
  "learningRate": null,
  "optimizer": null,
  "resolution": null,
  "scheduler": null,
  "steps": null,
  "textEncoderLearningRate": null,
  "totalEpochs": null,
  "unetLearningRate": null,
} satisfies VersionTrainingMetadataSummaryRun

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VersionTrainingMetadataSummaryRun
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


