
# DeveloperStyleMatch


## Properties

Name | Type
------------ | -------------
`id` | number
`image` | [Image](Image.md)
`layerScores` | { [key: string]: number; }
`score` | number

## Example

```typescript
import type { DeveloperStyleMatch } from '@arcenciel/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 108,
  "image": null,
  "layerScores": null,
  "score": 0.93,
} satisfies DeveloperStyleMatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeveloperStyleMatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
