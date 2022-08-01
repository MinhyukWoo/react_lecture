import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "우민혁",
    comment: "안녕하세요, 우민혁입니다.",
  },
  {
    name: "우준혁",
    comment: "안녕!",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
