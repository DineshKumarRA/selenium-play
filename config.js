module.exports = {
  platform: 'github',
  onboardingConfig: {
    "extends": [
      "config:base"
    ]
  },
  enabledManagers: [ "bazel", "bazel-module", "bazelisk", "nuget", "maven", "npm", "pip_requirements", "pip_setup", "bundler", "ruby-version", "cargo" ],
  allowedPostUpgradeCommands: [
    "^REPIN=1 bazel run @maven//:pin$",
    "^bazel run -- @pnpm//:pnpm install --dir $PWD --lockfile-only$",
    "^CARGO_BAZEL_REPIN=true bazel sync --only=crates$",
    "^bazel run //py:requirements.update$"
  ]
};
