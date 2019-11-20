"use strict";

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const LaunchAPI = require("./datasources/launch");

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    launchAPI: new LaunchAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
