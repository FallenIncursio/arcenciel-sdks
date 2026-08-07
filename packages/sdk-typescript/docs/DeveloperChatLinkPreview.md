
# DeveloperChatLinkPreview


## Properties

Name | Type
------------ | -------------
`creator` | string
`description` | string
`domain` | string
`faviconUrl` | string
`id` | number
`imagePath` | string
`imageUrl` | string
`kind` | string
`originalDomain` | string
`originalUrl` | string
`siteName` | string
`title` | string
`url` | string
`wasShortened` | boolean

## Example

```typescript
import type { DeveloperChatLinkPreview } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "creator": aurora,
  "description": A visibility-checked preview.,
  "domain": example.com,
  "faviconUrl": null,
  "id": 108,
  "imagePath": /uploads/images/108.thumbnail.webp,
  "imageUrl": null,
  "kind": IMAGE,
  "originalDomain": example.com,
  "originalUrl": null,
  "siteName": Example,
  "title": Evening portrait,
  "url": https://arcenciel.io/images/108,
  "wasShortened": false,
} satisfies DeveloperChatLinkPreview

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperChatLinkPreview
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
