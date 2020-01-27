import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import mongoose from "mongoose";
import cors from "cors";

const server = new ApolloServer({ typeDefs, resolvers });
mongoose.connect("mongodb://localhost/graphqlserver");
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected to mongodb database: graphqlserver");
});

const app = express();
app.use(cors());

server.applyMiddleware({ app });

app.listen(4000, () => console.log("Express Server Running On Port 4000"));
