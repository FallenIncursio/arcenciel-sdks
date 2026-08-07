
# DeveloperNotificationSummary


## Properties

Name | Type
------------ | -------------
`byCategory` | [{ [key: string]: DeveloperNotificationCount; }](DeveloperNotificationCount.md)
`byType` | [{ [key: string]: DeveloperNotificationCount; }](DeveloperNotificationCount.md)
`total` | number
`unread` | number

## Example

```typescript
import type { DeveloperNotificationSummary } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "byCategory": null,
  "byType": null,
  "total": 12,
  "unread": 3,
} satisfies DeveloperNotificationSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperNotificationSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
