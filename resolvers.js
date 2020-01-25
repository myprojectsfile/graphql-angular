import { gql } from "apollo-server-express";

var courseData = [
  {
    id: "1",
    title: "Designing Migrations for Microsoft Azure",
    author: "Greg Shields",
    description:
      "This course explores the migration strategies for business applications that are making a move to Microsoft Azure",
    topic: "Microsoft Azure",
    url:
      "https://www.pluralsight.com/courses/microsoft-azure-migrations-designing",
    voteCount: 0
  },
  {
    id: "2",
    title: "Microservices DevOps",
    author: "James Millar",
    description:
      "Deploying and monitoring real-world microservices requires a thorough knowledge of Microservices DevOps",
    topic: "DevOps",
    url: "https://www.pluralsight.com/courses/microservices-devops",
    voteCount: 0
  },
  {
    id: "3",
    title: "PowerShell and Regular Expressions",
    author: "Jeff Hicks",
    description:
      "Many IT Pros, at least those from the Windows world, think regular expressions are hard, or don't know why they might want to use them",
    topic: "PowerShell",
    url: "https://www.pluralsight.com/courses/powershell-regular-expressions",
    voteCount: 0
  }
];
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    allCourses: (root, { searchTerm }) => {
      return courseData;
    },
    course: (root, { id }) => {
      const course = courseData.filter(course => {
        return course.id === id;
      })[0];
      return course;
    }
  },
  Mutation: {
    upvote: (root, { id }) => {
      const course = courseData.filter(course => {
        return course.id === id;
      })[0];
      course.voteCount++;
      return course;
    },
    downvote: (root, { id }) => {
      const course = courseData.filter(course => {
        return course.id === id;
      })[0];
      course.voteCount--;
      return course;
    },
    addCourse: (root, { title, author, description, topic, url }) => {
      return null;
    }
  }
};

export default resolvers;
