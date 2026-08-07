
# GeneratorVideoSafetyOutput

Generator Video Safety Output used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`blocklistMatches` | Array&lt;string&gt;
`blocklisted` | boolean
`csam` | boolean
`csamMinorMatches` | Array&lt;string&gt;
`csamSexualMatches` | Array&lt;string&gt;
`error` | string
`nsfw` | boolean
`nsfwMatches` | Array&lt;string&gt;
`path` | string
`rating` | string
`tags` | Array&lt;string&gt;

## Example

```typescript
import type { GeneratorVideoSafetyOutput } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "blocklistMatches": null,
  "blocklisted": null,
  "csam": null,
  "csamMinorMatches": null,
  "csamSexualMatches": null,
  "error": null,
  "nsfw": null,
  "nsfwMatches": null,
  "path": null,
  "rating": null,
  "tags": null,
} satisfies GeneratorVideoSafetyOutput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorVideoSafetyOutput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
