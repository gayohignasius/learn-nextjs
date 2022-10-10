import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = (props) => {
  const { postsList } = props;
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {postsList.map((post) => {
        return (
          <div
            key={post.id}
            style={{ width: "150px", margin: "10px", cursor: "pointer" }}
          >
            <div className="card">
              <div className="card-body">{post.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;

export async function getStaticProps() {
  const postsList = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data)
    .catch((err) => []);
  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  };
}
