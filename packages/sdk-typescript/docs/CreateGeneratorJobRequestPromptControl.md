
# CreateGeneratorJobRequestPromptControl

Enables ComfyUI Prompt Control scheduling and alternates, for example `[red hair:blue hair:0.5]`. If omitted, the backend auto-enables Prompt Control when clear schedule syntax is detected. Send `false` or `{ \"mode\": \"disabled\" }` to force plain prompt encoding. Unsupported Prompt Control model/wildcard/NODE syntax is rejected.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`mode` | string

## Example

```typescript
import type { CreateGeneratorJobRequestPromptControl } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "mode": null,
} satisfies CreateGeneratorJobRequestPromptControl

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateGeneratorJobRequestPromptControl
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
