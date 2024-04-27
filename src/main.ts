import { parse } from "graphql";

window.__GRAPHQL__ = {
  parse: (source: string) => {
    return parse(source);
  },
};
