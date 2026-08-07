
# GeneratorJobDiagnostics

Diagnostics accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`adetailer` | { [key: string]: any; }
`adetailerBridge` | [GeneratorJobDiagnosticsAdetailerBridge](GeneratorJobDiagnosticsAdetailerBridge.md)
`attentionCouple` | { [key: string]: any; }
`historyTimeoutMs` | number
`workflowCaptured` | boolean

## Example

```typescript
import type { GeneratorJobDiagnostics } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "adetailer": null,
  "adetailerBridge": null,
  "attentionCouple": null,
  "historyTimeoutMs": null,
  "workflowCaptured": null,
} satisfies GeneratorJobDiagnostics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJobDiagnostics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
