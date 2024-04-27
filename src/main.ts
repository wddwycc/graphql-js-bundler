import { parse } from "graphql";

window.__GRAPHQL__ = {
  parse: (source: string) => {
    const ast = parse(source);
    return JSON.stringify(ast, null, 2);
  },
};
