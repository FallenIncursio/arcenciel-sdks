
# DeveloperVersionCreatedResponse


## Properties

Name | Type
------------ | -------------
`message` | string
`versionId` | number

## Example

```typescript
import type { DeveloperVersionCreatedResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": New version created,
  "versionId": 321,
} satisfies DeveloperVersionCreatedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperVersionCreatedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
