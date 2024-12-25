module.exports = {
  platform: "github",
  repositories: ["DineshKumarRA/selenium-play"],
  allowPostUpgradeCommandTemplating: true,
  "allowedPostUpgradeCommands": [
    "^REPIN=1 bazel run @maven//:pin",
    "^bazel run -- @pnpm//:pnpm install --dir $PWD --lockfile-only",
    "^CARGO_BAZEL_REPIN=true bazel sync --only=crates",
    "^bazel run //py:requirements.update"
  ],
  trustLevel: "high"
};
