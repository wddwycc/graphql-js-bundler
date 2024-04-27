import { DocumentNode } from "graphql";

declare global {
  interface Window {
    __GRAPHQL__: {
      /**
       * @param source GraphQL source
       * @returns GraphQL AST JSON
       */
      parse: (source: string) => string;
    };
  }
}
