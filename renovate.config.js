module.exports = {
  platform: "github",
  repositories: ["DineshKumarRA/selenium-play"],
  allowPostUpgradeCommandTemplating: true,
  allowedPostUpgradeCommands: [
    "^bazel run -- @pnpm//:pnpm install --dir $PWD --lockfile-only$"
  ],
  trustLevel: "high",
  // logLevel: "debug",
  // logFile: "/var/log/renovate-bot.log",
  baseBranches: ["main"],
  enabledManagers: ["npm", "dockerfile"],
};
