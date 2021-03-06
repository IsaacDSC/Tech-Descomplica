import "reflect-metadata";
require("dotenv").config();
import { join } from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";
import { ApolloServer } from "apollo-server";


const PORT = process.env.PORT || 3001;

const schema = loadSchemaSync(join(__dirname, "./Modules/**/schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
});
const resolversArray = loadFilesSync(
  join(__dirname, "./Modules/**/resolvers.ts")
);
const resolvers = mergeResolvers(resolversArray);
const schemaWithResolvers = addResolversToSchema({ schema, resolvers });


const server = new ApolloServer({
  schema: schemaWithResolvers,
  healthCheckPath: "/status",
  onHealthCheck: (req) => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve(req);
      } else {
        reject(req);
      }
    });
  },
});

server.listen(PORT, () => {
  return console.info(`Server on ${PORT}`);
});

