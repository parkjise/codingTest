import React from "react";
const posts = [
  { id: 1, title: "리액트 공부", author: "김철수", date: "2026-05-01" },
  { id: 2, title: "자바스크립트 정리", author: "이영희", date: "2026-05-02" },
];
const PostList = () => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>작성자: {post.author}</p>
          <p>작성일: {post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
