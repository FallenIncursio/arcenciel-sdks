
# GeneratorPreset

Generator Preset used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`description` | string
`id` | number
`isPublic` | boolean
`name` | string
`ownerId` | number
`payload` | { [key: string]: any; }
`updatedAt` | Date

## Example

```typescript
import type { GeneratorPreset } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "description": null,
  "id": null,
  "isPublic": null,
  "name": null,
  "ownerId": null,
  "payload": null,
  "updatedAt": null,
} satisfies GeneratorPreset

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorPreset
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
