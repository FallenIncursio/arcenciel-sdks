
# GeneratorVideoJob

Fields describing generator video job in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`cfg` | number
`completedAt` | Date
`createdAt` | Date
`creditCost` | number
`downloadUrl` | string
`durationSeconds` | number
`error` | string
`estimatedCompletionMs` | number
`estimatedRemainingMs` | number
`estimatedRenderMs` | number
`expiresAt` | Date
`finalizationMs` | number
`firstFrameUrl` | string
`fps` | number
`frames` | number
`hasFirstFrame` | boolean
`hasLastFrame` | boolean
`height` | number
`id` | string
`lastFrameUrl` | string
`metadata` | [GeneratorVideoPublicMetadata](GeneratorVideoPublicMetadata.md)
`mode` | string
`negativePrompt` | string
`outputBytes` | number
`outputDurationSeconds` | number
`outputUrl` | string
`position` | number
`processingMs` | number
`progress` | number
`progressMessage` | string
`prompt` | string
`promptPreset` | string
`queueEtaMs` | number
`queueWaitMs` | number
`remoteRenderMs` | number
`safety` | [GeneratorVideoSafetySnapshot](GeneratorVideoSafetySnapshot.md)
`samplerName` | string
`scheduler` | string
`seed` | string
`startedAt` | Date
`status` | string
`steps` | number
`taggerTags` | Array&lt;string&gt;
`totalElapsedMs` | number
`width` | number

## Example

```typescript
import type { GeneratorVideoJob } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "cfg": null,
  "completedAt": null,
  "createdAt": null,
  "creditCost": null,
  "downloadUrl": null,
  "durationSeconds": null,
  "error": null,
  "estimatedCompletionMs": null,
  "estimatedRemainingMs": null,
  "estimatedRenderMs": null,
  "expiresAt": null,
  "finalizationMs": null,
  "firstFrameUrl": null,
  "fps": null,
  "frames": null,
  "hasFirstFrame": null,
  "hasLastFrame": null,
  "height": null,
  "id": null,
  "lastFrameUrl": null,
  "metadata": null,
  "mode": null,
  "negativePrompt": null,
  "outputBytes": null,
  "outputDurationSeconds": null,
  "outputUrl": null,
  "position": null,
  "processingMs": null,
  "progress": null,
  "progressMessage": null,
  "prompt": null,
  "promptPreset": null,
  "queueEtaMs": null,
  "queueWaitMs": null,
  "remoteRenderMs": null,
  "safety": null,
  "samplerName": null,
  "scheduler": null,
  "seed": 42,
  "startedAt": null,
  "status": null,
  "steps": null,
  "taggerTags": null,
  "totalElapsedMs": null,
  "width": null,
} satisfies GeneratorVideoJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
