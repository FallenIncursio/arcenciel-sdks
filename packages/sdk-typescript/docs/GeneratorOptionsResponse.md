
# GeneratorOptionsResponse

Fields describing generator options response in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`limits` | [GeneratorOptionsResponseLimits](GeneratorOptionsResponseLimits.md)
`modelCapabilities` | { [key: string]: Array&lt;string&gt;; }
`modelDetails` | [GeneratorOptionsResponseModelDetails](GeneratorOptionsResponseModelDetails.md)
`models` | [GeneratorOptionsResponseModels](GeneratorOptionsResponseModels.md)
`quota` | [GeneratorQuotaSnapshot](GeneratorQuotaSnapshot.md)
`rfRequiredNotes` | { [key: string]: Array&lt;string&gt;; }
`settings` | [GeneratorOptionsResponseSettings](GeneratorOptionsResponseSettings.md)

## Example

```typescript
import type { GeneratorOptionsResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "limits": null,
  "modelCapabilities": null,
  "modelDetails": null,
  "models": null,
  "quota": null,
  "rfRequiredNotes": null,
  "settings": null,
} satisfies GeneratorOptionsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorOptionsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
