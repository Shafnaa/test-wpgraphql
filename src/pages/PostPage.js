import React from "react";
import { Link } from "react-router-dom";
import PostPageContent from "../components/PostPageContent";
import { data } from "../dummy-data/post";
import { gql, useQuery } from "@apollo/client";

const GET_POST_BY_SLUG = gql`
  query MyQuery($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      date
      content
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          slug
          name
        }
      }
    }
  }
`;

export default function PostPage(props) {
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: {
      slug: props.match.params.slug
    }
  });
  const postFound = Boolean(data?.post);

  return (
    <div className="page-container">
      <Link to="/">← Home</Link>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : !postFound ? (
        <p>Post could not be found.</p>
      ) : (
        <PostPageContent post={data.post} />
      )}
    </div>
  );
}
