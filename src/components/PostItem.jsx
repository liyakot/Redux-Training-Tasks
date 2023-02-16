import React from "react";
import { deletePostById } from "../features/post/postSlice";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <p className="text"> {post.title}</p>

      <FaTrashAlt
        className="button_icon button_icon_todo"
        onClick={() => dispatch(deletePostById(post.id))}
      />
    </div>
  );
};

export default PostItem;
