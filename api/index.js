"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const type_graphql_1 = require("type-graphql");
const apollo_server_express_1 = require("apollo-server-express");
const graphql_1 = require("../graphql");
const prisma_1 = require("../prisma");
const PORT = process.env.PORT || 4000;
const startServer = async () => {
    const app = (0, express_1.default)();
    const httpServer = (0, http_1.createServer)(app);
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: graphql_1.resolvers,
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        context: () => ({ prisma: prisma_1.prisma }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: '/api',
    });
    // 8
    httpServer.listen({ port: process.env.PORT || 4000 }, () => console.log(`Server listening on http::/localhost:4000${apolloServer.graphqlPath}`));
};
startServer();
