import 'reflect-metadata';
import express from 'express';
import { createServer } from 'http';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { resolvers } from './graphql';
import { prisma } from './prisma';

const PORT = process.env.PORT || 4000;

const start = async () => {
  const app = express();
  app.use(cors());
  const schema = await buildSchema({
    resolvers,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: () => ({ prisma }),
    introspection: true,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: '/api',
  });

  app.get('/', (req, res) => {
    res.send('Hello world!');
  });

  app.listen(8080, () => {
    console.log('Server started');
  });
};

start();
