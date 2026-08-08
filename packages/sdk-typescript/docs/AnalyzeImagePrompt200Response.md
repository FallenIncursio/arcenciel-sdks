
# AnalyzeImagePrompt200Response

Fields describing 200 response for api images id prompt analysis in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`analyzerVersion` | string
`description` | Array&lt;string&gt;
`dialect` | string
`groups` | [Array&lt;AnalyzeImagePrompt200ResponseGroupsInner&gt;](AnalyzeImagePrompt200ResponseGroupsInner.md)
`summary` | [AnalyzeImagePrompt200ResponseSummary](AnalyzeImagePrompt200ResponseSummary.md)

## Example

```typescript
import type { AnalyzeImagePrompt200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "analyzerVersion": 1.0.1,
  "description": null,
  "dialect": null,
  "groups": null,
  "summary": null,
} satisfies AnalyzeImagePrompt200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyzeImagePrompt200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
