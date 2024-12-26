module.exports = {
  platform: 'github',
  onboardingConfig: {
    "extends": [
      "config:base"
    ]
  },
  enabledManagers: [ "bazel", "bazel-module", "bazelisk", "nuget", "maven", "npm", "pip_requirements", "pip_setup", "bundler", "ruby-version", "cargo" ],
  autodiscover: true,
  allowedPostUpgradeCommands: [
    '^sudo apt update$',
    '^sudo apt install openjdk-11-jdk -y$',
    '^sudo apt install curl gnupg -y$',
    '^curl -fsSL https:\/\/bazel.build\/bazel-release.pub.gpg \| gpg --dearmor > bazel-archive-keyring.gpg$',
    '^sudo mv bazel-archive-keyring.gpg \/usr\/share\/keyrings\/$',
    '^echo "deb \[signed-by=\/usr\/share\/keyrings\/bazel-archive-keyring.gpg\] https:\/\/storage.googleapis.com\/bazel-apt stable jdk1.8" \| sudo tee \/etc\/apt\/sources.list.d\/bazel.list > \/dev\/null$',
    '^sudo apt install bazel -y$',
    '^REPIN=1 bazel run @maven\/\/:pin$',
    '^bazel run -- @pnpm\/\/:pnpm install --dir \$PWD --lockfile-only$',
    '^CARGO_BAZEL_REPIN=true bazel sync --only=crates$',
    '^bazel run //py:requirements.update$'
  ]
};
