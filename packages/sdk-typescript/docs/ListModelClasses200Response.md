
# ListModelClasses200Response

200 response for api models classes used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`classes` | [Array&lt;ListModelClasses200ResponseClassesInner&gt;](ListModelClasses200ResponseClassesInner.md)

## Example

```typescript
import type { ListModelClasses200Response } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "classes": null,
} satisfies ListModelClasses200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListModelClasses200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
