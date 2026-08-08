#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs'

const write = (path, content) => writeFileSync(path, `${content.trim()}\n`)
const insertOnce = (path, anchor, addition) => {
  const source = readFileSync(path, 'utf8')
  if (source.includes(addition.trim())) return
  if (!source.includes(anchor)) throw new Error(`Compatibility alias anchor is missing in ${path}: ${anchor}`)
  writeFileSync(path, source.replace(anchor, `${anchor}${addition}`))
}

write(
  'packages/sdk-typescript/src/models/UserProfileSocialLinksInner.ts',
  `/**
 * @deprecated Use SelfProfileSocialLinksInner. This alias preserves the SDK 1.0.0 generated export.
 */
export type { SelfProfileSocialLinksInner as UserProfileSocialLinksInner } from './SelfProfileSocialLinksInner.js'
export {
  instanceOfSelfProfileSocialLinksInner as instanceOfUserProfileSocialLinksInner,
  SelfProfileSocialLinksInnerFromJSON as UserProfileSocialLinksInnerFromJSON,
  SelfProfileSocialLinksInnerFromJSONTyped as UserProfileSocialLinksInnerFromJSONTyped,
  SelfProfileSocialLinksInnerToJSON as UserProfileSocialLinksInnerToJSON,
  SelfProfileSocialLinksInnerToJSONTyped as UserProfileSocialLinksInnerToJSONTyped,
} from './SelfProfileSocialLinksInner.js'
`
)
insertOnce(
  'packages/sdk-typescript/src/models/index.ts',
  "export * from './UserProfile.js';\n",
  "export * from './UserProfileSocialLinksInner.js';\n"
)
write(
  'packages/sdk-typescript/docs/UserProfileSocialLinksInner.md',
  `# UserProfileSocialLinksInner

Deprecated compatibility alias for [SelfProfileSocialLinksInner](SelfProfileSocialLinksInner.md). It remains exported so SDK 1.0.0
imports continue to compile; new integrations should use the canonical name.
`
)

write(
  'packages/sdk-python/arcenciel/generated/models/user_profile_social_links_inner.py',
  `"""Compatibility alias retained from SDK 1.0.0."""

from arcenciel.generated.models.self_profile_social_links_inner import (
    SelfProfileSocialLinksInner,
)

UserProfileSocialLinksInner = SelfProfileSocialLinksInner

__all__ = ["UserProfileSocialLinksInner"]
`
)
insertOnce(
  'packages/sdk-python/arcenciel/generated/models/__init__.py',
  'from arcenciel.generated.models.user_profile import UserProfile\n',
  'from arcenciel.generated.models.user_profile_social_links_inner import UserProfileSocialLinksInner\n'
)
insertOnce('packages/sdk-python/arcenciel/generated/__init__.py', '    "UserProfile",\n', '    "UserProfileSocialLinksInner",\n')
insertOnce(
  'packages/sdk-python/arcenciel/generated/__init__.py',
  'from arcenciel.generated.models.user_profile import UserProfile as UserProfile\n',
  'from arcenciel.generated.models.user_profile_social_links_inner import UserProfileSocialLinksInner as UserProfileSocialLinksInner\n'
)
write(
  'packages/sdk-python/docs/UserProfileSocialLinksInner.md',
  `# UserProfileSocialLinksInner

Deprecated compatibility alias for [SelfProfileSocialLinksInner](SelfProfileSocialLinksInner.md). It remains importable so SDK 1.0.0
integrations continue to work; new integrations should use the canonical name.
`
)
