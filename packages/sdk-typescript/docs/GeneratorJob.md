
# GeneratorJob

Generator Job used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`adetailer` | [GeneratorAdetailerConfig](GeneratorAdetailerConfig.md)
`attempts` | number
`attentionCouple` | [GeneratorJobAttentionCouple](GeneratorJobAttentionCouple.md)
`batchSize` | number
`cancelled` | boolean
`cfg` | number
`comfy` | [GeneratorJobComfy](GeneratorJobComfy.md)
`controlnets` | [Array&lt;GeneratorJobControlnetsInner&gt;](GeneratorJobControlnetsInner.md)
`createdAt` | number
`deletedAt` | number
`deletedByUserId` | number
`denoise` | number
`diagnostics` | [GeneratorJobDiagnostics](GeneratorJobDiagnostics.md)
`error` | string
`expiresAt` | number
`extraSeed` | [GeneratorJobExtraSeed](GeneratorJobExtraSeed.md)
`extraSeedStrength` | number
`height` | number
`id` | string
`imagePath` | string
`loraName` | string
`loras` | [Array&lt;GeneratorJobLorasInner&gt;](GeneratorJobLorasInner.md)
`metadata` | { [key: string]: any; }
`mode` | string
`modelCapabilities` | Array&lt;string&gt;
`modelName` | string
`negativePrompt` | string
`outputToken` | string
`outputs` | [Array&lt;GeneratorJobOutputsInner&gt;](GeneratorJobOutputsInner.md)
`outputsExpiredAt` | number
`position` | number
`priority` | number
`progress` | [GeneratorJobProgress](GeneratorJobProgress.md)
`prompt` | string
`promptControl` | [GeneratorJobPromptControl](GeneratorJobPromptControl.md)
`publishedOutputs` | Array&lt;string&gt;
`queueEtaMs` | number
`rfShift` | number
`role` | string
`safety` | [GeneratorSafetySnapshot](GeneratorSafetySnapshot.md)
`samplerName` | string
`scaleFactor` | number
`scheduler` | string
`seed` | [GeneratorCompareRunSeed](GeneratorCompareRunSeed.md)
`status` | string
`steps` | number
`storage` | [GeneratorStorageStatus](GeneratorStorageStatus.md)
`taggerTags` | Array&lt;string&gt;
`tags` | Array&lt;string&gt;
`updatedAt` | number
`upscaleModelName` | string
`upscaleProfiles` | [Array&lt;GeneratorJobUpscaleProfilesInner&gt;](GeneratorJobUpscaleProfilesInner.md)
`upscaleTargetHeight` | number
`upscaleTargetWidth` | number
`userId` | number
`vaeName` | string
`weight` | number
`width` | number

## Example

```typescript
import type { GeneratorJob } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "adetailer": null,
  "attempts": null,
  "attentionCouple": null,
  "batchSize": null,
  "cancelled": null,
  "cfg": null,
  "comfy": null,
  "controlnets": null,
  "createdAt": null,
  "deletedAt": null,
  "deletedByUserId": null,
  "denoise": null,
  "diagnostics": null,
  "error": null,
  "expiresAt": null,
  "extraSeed": null,
  "extraSeedStrength": null,
  "height": null,
  "id": null,
  "imagePath": null,
  "loraName": null,
  "loras": null,
  "metadata": null,
  "mode": null,
  "modelCapabilities": null,
  "modelName": null,
  "negativePrompt": null,
  "outputToken": null,
  "outputs": null,
  "outputsExpiredAt": null,
  "position": null,
  "priority": null,
  "progress": null,
  "prompt": null,
  "promptControl": null,
  "publishedOutputs": null,
  "queueEtaMs": null,
  "rfShift": null,
  "role": null,
  "safety": null,
  "samplerName": null,
  "scaleFactor": null,
  "scheduler": null,
  "seed": null,
  "status": null,
  "steps": null,
  "storage": null,
  "taggerTags": null,
  "tags": null,
  "updatedAt": null,
  "upscaleModelName": null,
  "upscaleProfiles": null,
  "upscaleTargetHeight": null,
  "upscaleTargetWidth": null,
  "userId": null,
  "vaeName": null,
  "weight": null,
  "width": null,
} satisfies GeneratorJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
