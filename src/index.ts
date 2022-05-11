import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { resolvers } from '../graphql';
import { prisma } from '../prisma';
import { createServer } from 'http';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  const schema = await buildSchema({
    resolvers,
  });

  const apolloServer = new ApolloServer({
    schema,

    context: () => ({ prisma }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: '/api',
  });

  // 8
  httpServer.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`Server listening on localhost:4000${apolloServer.graphqlPath}`)
  );
};

startServer();
