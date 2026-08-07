
# CreateGeneratorCompareRunRequestAttentionCouple

Regional prompt payload. API clients must provide explicit `maskPath` values.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`globalPromptWeight` | number
`regions` | [Array&lt;CreateGeneratorCompareRunRequestAttentionCoupleRegionsInner&gt;](CreateGeneratorCompareRunRequestAttentionCoupleRegionsInner.md)

## Example

```typescript
import type { CreateGeneratorCompareRunRequestAttentionCouple } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "globalPromptWeight": null,
  "regions": null,
} satisfies CreateGeneratorCompareRunRequestAttentionCouple

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateGeneratorCompareRunRequestAttentionCouple
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
