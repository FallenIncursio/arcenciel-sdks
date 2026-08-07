
# DeveloperStyleSearchMeta


## Properties

Name | Type
------------ | -------------
`availableLayers` | Array&lt;string&gt;
`backendKey` | string
`defaultLayers` | Array&lt;string&gt;
`disabled` | boolean
`elapsedSeconds` | number
`inverted` | boolean
`page` | number
`pageSize` | number
`queriedCount` | number
`requestedLayers` | Array&lt;string&gt;
`serviceHealthy` | boolean
`skippedCount` | number
`sourceType` | string
`totalMatches` | number

## Example

```typescript
import type { DeveloperStyleSearchMeta } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "availableLayers": ["style"],
  "backendKey": clip,
  "defaultLayers": ["style"],
  "disabled": false,
  "elapsedSeconds": 0.18,
  "inverted": false,
  "page": 0,
  "pageSize": 24,
  "queriedCount": 1600,
  "requestedLayers": ["style"],
  "serviceHealthy": true,
  "skippedCount": 0,
  "sourceType": upload,
  "totalMatches": 1,
} satisfies DeveloperStyleSearchMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperStyleSearchMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
