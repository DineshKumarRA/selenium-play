# yaml-language-server: $schema=https://docs.renovatebot.com/renovate-schema.json

allowedPostUpgradeCommands:
  - "^bazel run -- @pnpm//:pnpm install --dir $PWD --lockfile-only"
onboardingConfigFileName: renovate.json
