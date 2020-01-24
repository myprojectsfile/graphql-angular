import { gql } from "apollo-server-express";
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    course: () => "Hello world!"
  }
};

export default resolvers;
