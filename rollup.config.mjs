import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/main.ts",
  output: {
    file: "dist/graphql.js",
    format: "iife",
  },
  plugins: [
    typescript(),
    nodeResolve(),
    replace({
      "globalThis.process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};
