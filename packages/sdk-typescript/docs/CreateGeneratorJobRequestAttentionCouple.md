
# CreateGeneratorJobRequestAttentionCouple

Regional prompt payload (max 2 regions). UI clients typically derive prompts from `[R1]/[R2]` or `left || right` syntax and auto-generate masks. The parser also accepts exactly two non-empty prompt lines (`line1\\nline2`) as region prompts. API clients must still provide explicit `maskPath` values. ADetailer normalization during regional prompts is controlled by `adetailer.attentionCouplePolicy`. Default policy is `strict-face-bbox` for lower cross-region face bleed. During regional prompts, backend keeps ADetailer split-wildcard prompt modes (`[SEP]`) with normalized wildcard ordering. For `adetailer.positivePrompt`, backend canonicalizes `left || right`, two-line splits (`left\\nright`), and `[R1] ... [R2] ...` into `left [SEP] right`. If `adetailer.positivePrompt` is omitted, backend may derive a split detailer prompt from the region prompts. In strict mode, backend forwards regional masks to ADetailer for per-region crop clamping.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`globalPromptWeight` | number
`regions` | [Array&lt;CreateGeneratorJobRequestAttentionCoupleRegionsInner&gt;](CreateGeneratorJobRequestAttentionCoupleRegionsInner.md)

## Example

```typescript
import type { CreateGeneratorJobRequestAttentionCouple } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "globalPromptWeight": null,
  "regions": null,
} satisfies CreateGeneratorJobRequestAttentionCouple

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateGeneratorJobRequestAttentionCouple
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
