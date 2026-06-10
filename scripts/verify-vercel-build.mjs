import { existsSync, readFileSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    env: { ...process.env, ...options.env },
    stdio: "inherit",
    shell: false,
  });

  if (result.status !== 0) {
    fail(`${command} ${args.join(" ")} failed`);
  }
}

function assertExists(path, label) {
  if (!existsSync(join(root, path))) {
    fail(`${label} is missing at ${path}`);
  }
}

for (const staleFile of ["bun.lock", "bun.lockb", "bunfig.toml"]) {
  if (existsSync(join(root, staleFile))) {
    fail(`${staleFile} is not allowed in this npm/Vercel project`);
  }
}

const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
if (!packageJson.packageManager?.startsWith("npm@")) {
  fail('package.json must pin an npm packageManager, for example "npm@10.9.8"');
}

if (JSON.stringify(packageJson).includes("@lovable.dev/")) {
  fail("package.json still references @lovable.dev packages");
}

assertExists("package-lock.json", "npm lockfile");
assertExists("vite.config.ts", "Vite config");
assertExists("vercel.json", "Vercel config");

rmSync(join(root, ".output"), { recursive: true, force: true });
rmSync(join(root, ".vercel", "output"), { recursive: true, force: true });
rmSync(join(root, "node_modules", ".nitro"), { recursive: true, force: true });

run("npm", ["run", "build"], { env: { VERCEL: "1" } });

assertExists(".vercel/output/config.json", "Vercel routing config");
assertExists(".vercel/output/static", "Vercel static output");
assertExists(".vercel/output/functions/__server.func/index.mjs", "Vercel server function");
assertExists(".vercel/output/functions/__server.func/.vc-config.json", "Vercel function config");

const functionConfig = readFileSync(
  join(root, ".vercel/output/functions/__server.func/.vc-config.json"),
  "utf8",
);

if (!functionConfig.includes("nodejs22.x")) {
  fail("Vercel server function is not configured for nodejs22.x");
}

console.log("Vercel build output verified.");
