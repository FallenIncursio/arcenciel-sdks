
# GeneratorModelCatalogEntry

Generator Model Catalog Entry used by the Arc en Ciel API contract.

## Properties

Name | Type
------------ | -------------
`baseModel` | string
`coverImage` | string
`coverRating` | string
`favoriteCount` | number
`modelCapabilities` | Array&lt;string&gt;
`modelId` | number
`modelTags` | Array&lt;string&gt;
`modelTitle` | string
`modelType` | string
`modelVersionCount` | number
`modelVersionRank` | number
`name` | string
`precision` | string
`previewImage` | string
`previewRating` | string
`rfRequiredNotes` | Array&lt;string&gt;
`triggerPrompts` | Array&lt;string&gt;
`uploaderId` | number
`uploaderProfilePicture` | string
`uploaderUsername` | string
`versionId` | number
`versionName` | string

## Example

```typescript
import type { GeneratorModelCatalogEntry } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "baseModel": null,
  "coverImage": null,
  "coverRating": null,
  "favoriteCount": null,
  "modelCapabilities": null,
  "modelId": null,
  "modelTags": null,
  "modelTitle": null,
  "modelType": null,
  "modelVersionCount": null,
  "modelVersionRank": null,
  "name": null,
  "precision": null,
  "previewImage": null,
  "previewRating": null,
  "rfRequiredNotes": null,
  "triggerPrompts": null,
  "uploaderId": null,
  "uploaderProfilePicture": null,
  "uploaderUsername": null,
  "versionId": null,
  "versionName": null,
} satisfies GeneratorModelCatalogEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratorModelCatalogEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
