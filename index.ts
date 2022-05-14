import 'reflect-metadata';
import express from 'express';
import { createServer } from 'http';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { resolvers } from './graphql';
import { prisma } from './prisma';
import { CustomAllResolver } from './custom/customResolver';

const PORT = process.env.PORT || 4000;

const start = async () => {
  const app = express();
  app.use(cors());
  const schema = await buildSchema({
    resolvers: [...resolvers, CustomAllResolver],
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
    res.send('Moren din!');
  });

  app.listen(8080, () => {
    console.log('Server started');
  });
};

start();
