
# GeneratorVideoResolutionBucketOption

Fields describing generator video resolution bucket option in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`estimate` | [GeneratorVideoEstimateRange](GeneratorVideoEstimateRange.md)
`label` | string
`value` | number

## Example

```typescript
import type { GeneratorVideoResolutionBucketOption } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "estimate": null,
  "label": null,
  "value": null,
} satisfies GeneratorVideoResolutionBucketOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoResolutionBucketOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
