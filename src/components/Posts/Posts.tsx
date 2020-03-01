// import React from 'react';
// import styled from 'styled-components';
// import { graphql, StaticQuery } from 'gatsby';

// import Section from '../Section';
// import Content from '../Content';

// interface Post {
//   node: {
//     title: string;
//     uniqueSlug: string;
//     virtuals: {
//       tags: [
//         {
//           name: string;
//         }
//       ];
//     };
//   };
// }

// const Posts = () => (
//   <Section title="Recent Posts">
//     <PostsWrapper>
//       <StaticQuery
//         query={graphql`
//           query {
//             allMediumPost(
//               limit: 5
//               sort: { fields: [createdAt], order: DESC }
//             ) {
//               edges {
//                 node {
//                   title
//                   uniqueSlug
//                   virtuals {
//                     tags {
//                       name
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         `}
//         render={data => {
//           const posts = data.allMediumPost.edges;

//           if (!posts) {
//             return <p>Loading...</p>;
//           }

//           return posts.map(({ node }: Post) => (
//             <Content
//               key={node.title}
//               title={node.title}
//               slug={node.uniqueSlug}
//               tags={node.virtuals.tags.map(tag => tag.name)}
//             />
//           ));
//         }}
//       />
//     </PostsWrapper>
//   </Section>
// );

// export default Posts;

// const PostsWrapper = styled.div``;
