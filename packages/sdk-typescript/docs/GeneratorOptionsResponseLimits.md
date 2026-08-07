
# GeneratorOptionsResponseLimits

Limits accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`adetailerAttentionCouplePolicies` | Array&lt;string&gt;
`adetailerAttentionCouplePolicyDefault` | string
`adetailerDetectionOrderDefault` | string
`adetailerDetectionOrders` | Array&lt;string&gt;
`adetailerDetectors` | Array&lt;string&gt;
`adetailerEnabled` | boolean
`adetailerMaskModeDefault` | string
`adetailerMaskModes` | Array&lt;string&gt;
`adetailerModels` | Array&lt;string&gt;
`compareEnabled` | boolean
`maxBatchSize` | number
`maxCfg` | number
`maxCompareTargets` | number
`maxPixels` | number
`maxResolution` | number
`maxScaleFactor` | number
`maxSteps` | number
`maxUpscaleProfiles` | number
`maxWeight` | number
`samplers` | Array&lt;string&gt;
`schedulers` | Array&lt;string&gt;

## Example

```typescript
import type { GeneratorOptionsResponseLimits } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "adetailerAttentionCouplePolicies": null,
  "adetailerAttentionCouplePolicyDefault": null,
  "adetailerDetectionOrderDefault": null,
  "adetailerDetectionOrders": null,
  "adetailerDetectors": null,
  "adetailerEnabled": null,
  "adetailerMaskModeDefault": null,
  "adetailerMaskModes": null,
  "adetailerModels": null,
  "compareEnabled": null,
  "maxBatchSize": null,
  "maxCfg": null,
  "maxCompareTargets": null,
  "maxPixels": null,
  "maxResolution": null,
  "maxScaleFactor": null,
  "maxSteps": null,
  "maxUpscaleProfiles": null,
  "maxWeight": null,
  "samplers": null,
  "schedulers": null,
} satisfies GeneratorOptionsResponseLimits

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorOptionsResponseLimits
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
