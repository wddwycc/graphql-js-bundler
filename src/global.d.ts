import { DocumentNode } from "graphql";

declare global {
  interface Window {
    __GRAPHQL__: {
      parse: (source: string) => DocumentNode;
    };
  }
}
