
# GetModelVersionTrainingMetadata200Response

200 response for api models model Id versions version Id training metadata raw used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`metadata` | object
`source` | string
`versionId` | number

## Example

```typescript
import type { GetModelVersionTrainingMetadata200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "metadata": null,
  "source": null,
  "versionId": null,
} satisfies GetModelVersionTrainingMetadata200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetModelVersionTrainingMetadata200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
