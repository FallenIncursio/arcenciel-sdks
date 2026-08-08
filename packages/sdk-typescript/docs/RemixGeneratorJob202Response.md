
# RemixGeneratorJob202Response

202 response for api generator jobs id remix value documented for this operation.

## Properties

Name | Type
------------ | -------------
`job` | [GeneratorJob](GeneratorJob.md)
`position` | number
`queueEtaMs` | number
`remixedFrom` | string

## Example

```typescript
import type { RemixGeneratorJob202Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "job": null,
  "position": null,
  "queueEtaMs": null,
  "remixedFrom": null,
} satisfies RemixGeneratorJob202Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RemixGeneratorJob202Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
