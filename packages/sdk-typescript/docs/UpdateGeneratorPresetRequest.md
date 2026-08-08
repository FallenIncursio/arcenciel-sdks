
# UpdateGeneratorPresetRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`description` | string
`isPublic` | boolean
`name` | string
`payload` | { [key: string]: any; }

## Example

```typescript
import type { UpdateGeneratorPresetRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "isPublic": null,
  "name": null,
  "payload": null,
} satisfies UpdateGeneratorPresetRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateGeneratorPresetRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
