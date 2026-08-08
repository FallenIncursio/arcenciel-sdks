
# GeneratorVideoSseJobEvent

Fields describing generator video sse job event in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`job` | [GeneratorVideoJob](GeneratorVideoJob.md)

## Example

```typescript
import type { GeneratorVideoSseJobEvent } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "job": null,
} satisfies GeneratorVideoSseJobEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoSseJobEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
