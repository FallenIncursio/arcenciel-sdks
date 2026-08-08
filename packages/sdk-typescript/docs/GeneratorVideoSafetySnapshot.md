
# GeneratorVideoSafetySnapshot

Fields describing generator video safety snapshot in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`error` | string
`outputs` | [{ [key: string]: GeneratorVideoSafetyOutput; }](GeneratorVideoSafetyOutput.md)
`reason` | string
`review` | [GeneratorVideoSafetyReview](GeneratorVideoSafetyReview.md)
`sfwMode` | boolean
`status` | string
`updatedAt` | number

## Example

```typescript
import type { GeneratorVideoSafetySnapshot } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "error": null,
  "outputs": null,
  "reason": null,
  "review": null,
  "sfwMode": null,
  "status": null,
  "updatedAt": null,
} satisfies GeneratorVideoSafetySnapshot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoSafetySnapshot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
