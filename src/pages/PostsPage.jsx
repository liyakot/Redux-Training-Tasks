import React from "react";
import PostItem from "../components/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/post/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      <h1>Redux Toolkit Async Thunk</h1>
      <button onClick={() => dispatch(getPosts())} type="submit" className="">
        Get posts
      </button>
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
