
# DeveloperNotificationPage


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;DeveloperNotification&gt;](DeveloperNotification.md)
`hasMore` | boolean
`limit` | number
`nextCursor` | string

## Example

```typescript
import type { DeveloperNotificationPage } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "hasMore": false,
  "limit": 50,
  "nextCursor": null,
} satisfies DeveloperNotificationPage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperNotificationPage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
