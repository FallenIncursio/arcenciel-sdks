
# GeneratorVideoOptionsResponse

Fields describing generator video options response in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`aspectRatios` | [Array&lt;GeneratorVideoAspectRatioOption&gt;](GeneratorVideoAspectRatioOption.md)
`capabilities` | [GeneratorVideoCapabilities](GeneratorVideoCapabilities.md)
`defaults` | [GeneratorVideoDefaults](GeneratorVideoDefaults.md)
`durationOptions` | [Array&lt;GeneratorVideoDurationOption&gt;](GeneratorVideoDurationOption.md)
`estimateModifiers` | [GeneratorVideoEstimateModifiers](GeneratorVideoEstimateModifiers.md)
`limits` | [GeneratorVideoLimits](GeneratorVideoLimits.md)
`modes` | [Array&lt;GeneratorVideoModeOption&gt;](GeneratorVideoModeOption.md)
`promptPresets` | [Array&lt;GeneratorVideoPromptPreset&gt;](GeneratorVideoPromptPreset.md)
`quota` | [GeneratorVideoQuota](GeneratorVideoQuota.md)
`resolutionBuckets` | [Array&lt;GeneratorVideoResolutionBucketOption&gt;](GeneratorVideoResolutionBucketOption.md)
`resolutions` | [Array&lt;GeneratorVideoLegacyResolution&gt;](GeneratorVideoLegacyResolution.md)

## Example

```typescript
import type { GeneratorVideoOptionsResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "aspectRatios": null,
  "capabilities": null,
  "defaults": null,
  "durationOptions": null,
  "estimateModifiers": null,
  "limits": null,
  "modes": null,
  "promptPresets": null,
  "quota": null,
  "resolutionBuckets": null,
  "resolutions": null,
} satisfies GeneratorVideoOptionsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoOptionsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
