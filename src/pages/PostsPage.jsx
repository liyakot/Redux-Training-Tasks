import React from "react";
import PostItem from "../components/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/post/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="container">
      <h1 className="header">Redux Toolkit Async Thunk</h1>
      <div className="posts">
        <p
          onClick={() => dispatch(getPosts())}
          type="submit"
          className="posts_button"
        >
          Get posts
        </p>
        <div>
          {posts?.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
