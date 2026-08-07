
# GeneratorOptionsResponseSettings

Settings accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`defaults` | { [key: string]: any; }
`retentionOptions` | Array&lt;number&gt;

## Example

```typescript
import type { GeneratorOptionsResponseSettings } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "defaults": null,
  "retentionOptions": null,
} satisfies GeneratorOptionsResponseSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorOptionsResponseSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
