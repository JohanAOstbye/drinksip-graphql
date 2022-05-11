import 'reflect-metadata';
import express from 'express';
import { createServer } from 'http';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from '../graphql';
import { prisma } from '../prisma';

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
    // path: '/graphql',
  });

  // 8
  httpServer.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(
      `Server listening on http::/localhost:4000${apolloServer.graphqlPath}`
    )
  );
};

startServer();
