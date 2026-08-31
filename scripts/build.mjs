import { spawnSync } from "node:child_process";

const cli = process.env.VERCEL
  ? "node_modules/next/dist/bin/next"
  : "node_modules/vinext/dist/cli.js";

const result = spawnSync(process.execPath, [cli, "build"], {
  env: process.env,
  stdio: "inherit",
});

process.exit(result.status ?? 1);
