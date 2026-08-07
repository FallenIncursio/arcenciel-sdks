
# CreateIllegalContentNoticeRequest


## Properties

Name | Type
------------ | -------------
`attachments` | Array&lt;Blob&gt;
`category` | string
`description` | string
`evidence` | string
`goodFaithConfirmed` | boolean
`jurisdiction` | string
`legalBasis` | string
`reporterEmail` | string
`reporterName` | string
`targetTypeHint` | string
`targetUrl` | string

## Example

```typescript
import type { CreateIllegalContentNoticeRequest } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "attachments": null,
  "category": PRIVACY_OR_DOOXING,
  "description": null,
  "evidence": null,
  "goodFaithConfirmed": null,
  "jurisdiction": null,
  "legalBasis": null,
  "reporterEmail": null,
  "reporterName": null,
  "targetTypeHint": IMAGE,
  "targetUrl": null,
} satisfies CreateIllegalContentNoticeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateIllegalContentNoticeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
