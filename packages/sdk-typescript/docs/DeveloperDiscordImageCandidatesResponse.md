
# DeveloperDiscordImageCandidatesResponse


## Properties

Name | Type
------------ | -------------
`alreadyAttachedCount` | number
`attachableCount` | number
`items` | [Array&lt;DeveloperDiscordImageCandidate&gt;](DeveloperDiscordImageCandidate.md)
`totalFound` | number

## Example

```typescript
import type { DeveloperDiscordImageCandidatesResponse } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "alreadyAttachedCount": 0,
  "attachableCount": 1,
  "items": null,
  "totalFound": 1,
} satisfies DeveloperDiscordImageCandidatesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperDiscordImageCandidatesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
