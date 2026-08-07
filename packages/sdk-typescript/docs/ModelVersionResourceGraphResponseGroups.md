
# ModelVersionResourceGraphResponseGroups

Groups accepted or returned by this contract.

## Properties

Name | Type
------------ | -------------
`compatible` | [Array&lt;ModelVersionLocalResource&gt;](ModelVersionLocalResource.md)
`external` | [Array&lt;ModelVersionExternalResource&gt;](ModelVersionExternalResource.md)
`recommended` | [Array&lt;ModelVersionLocalResource&gt;](ModelVersionLocalResource.md)
`required` | [Array&lt;ModelVersionLocalResource&gt;](ModelVersionLocalResource.md)
`sampleUsed` | [Array&lt;ModelVersionLocalResource&gt;](ModelVersionLocalResource.md)

## Example

```typescript
import type { ModelVersionResourceGraphResponseGroups } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "compatible": null,
  "external": null,
  "recommended": null,
  "required": null,
  "sampleUsed": null,
} satisfies ModelVersionResourceGraphResponseGroups

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelVersionResourceGraphResponseGroups
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
