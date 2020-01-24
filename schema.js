import { gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Course {
    id: String
    title: String
    author: String
    description: String
    topic: String
    url: String
    voteCount: Int
  }

  type Query {
    allCourses(searchTerm: String): [Course]
    course(id: String): Course
  }

  type Mutation {
    addCourse(id: String): Course
  }
`;

export default typeDefs;
