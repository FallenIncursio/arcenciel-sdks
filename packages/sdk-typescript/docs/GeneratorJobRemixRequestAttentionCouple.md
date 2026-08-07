
# GeneratorJobRemixRequestAttentionCouple

Regional prompt payload. Supports up to 2 regions. Accepted prompt split forms include `left || right` and exactly two non-empty lines.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`globalPromptWeight` | number
`regions` | [Array&lt;GeneratorJobRemixRequestAttentionCoupleRegionsInner&gt;](GeneratorJobRemixRequestAttentionCoupleRegionsInner.md)

## Example

```typescript
import type { GeneratorJobRemixRequestAttentionCouple } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "globalPromptWeight": null,
  "regions": null,
} satisfies GeneratorJobRemixRequestAttentionCouple

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJobRemixRequestAttentionCouple
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
