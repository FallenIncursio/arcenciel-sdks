
# GetHistoricalCollabOverview200Response

Fields describing 200 response for api collabs history overview in Developer API requests and responses.

## Properties

Name | Type
------------ | -------------
`collabCount` | number
`creatorCount` | number
`endYear` | number
`majorCount` | number
`miniCount` | number
`participantCount` | number
`startYear` | number
`submissionCount` | number

## Example

```typescript
import type { GetHistoricalCollabOverview200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "collabCount": null,
  "creatorCount": null,
  "endYear": null,
  "majorCount": null,
  "miniCount": null,
  "participantCount": null,
  "startYear": null,
  "submissionCount": null,
} satisfies GetHistoricalCollabOverview200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetHistoricalCollabOverview200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
