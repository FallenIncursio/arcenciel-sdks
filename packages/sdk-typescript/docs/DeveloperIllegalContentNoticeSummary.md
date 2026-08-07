
# DeveloperIllegalContentNoticeSummary


## Properties

Name | Type
------------ | -------------
`acknowledgedAt` | Date
`category` | string
`createdAt` | Date
`decidedAt` | Date
`decisionAction` | string
`publicId` | string
`reporterMessage` | string
`reviewRequestedAt` | Date
`reviewRequestedBy` | string
`status` | string
`targetLabel` | string
`targetType` | string
`targetUrl` | string
`updatedAt` | Date

## Example

```typescript
import type { DeveloperIllegalContentNoticeSummary } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "acknowledgedAt": null,
  "category": PRIVACY_OR_DOOXING,
  "createdAt": 2026-08-07T10:00Z,
  "decidedAt": null,
  "decisionAction": NONE,
  "publicId": ICN-9A2C13,
  "reporterMessage": We received your notice.,
  "reviewRequestedAt": null,
  "reviewRequestedBy": REPORTER,
  "status": SUBMITTED,
  "targetLabel": Evening portrait,
  "targetType": IMAGE,
  "targetUrl": https://arcenciel.io/images/108,
  "updatedAt": 2026-08-07T10:00Z,
} satisfies DeveloperIllegalContentNoticeSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperIllegalContentNoticeSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
