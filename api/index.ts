import 'reflect-metadata';
import express from 'express';
import { createServer } from 'http';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import cors from 'cors';
import { resolvers } from '../graphql';
import { prisma } from '../prisma';
import { Express } from 'express-serve-static-core';

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());
export const httpServer = createServer(app);

const startServer = async (app: Express, httpServer: http.Server) => {
  const schema = await buildSchema({
    resolvers,
  });

  const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: () => ({ prisma }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
  });
};

startServer(app, httpServer);

export default httpServer;
