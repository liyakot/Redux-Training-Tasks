import React from "react";
import { deletePostById } from "../features/post/postSlice";
import { useDispatch } from "react-redux";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      {post.title}
      <button onClick={() => dispatch(deletePostById(post.id))}>Delete</button>
    </div>
  );
};

export default PostItem;
