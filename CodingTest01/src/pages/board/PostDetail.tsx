import React, { useState } from "react";
const posts = [
  { id: 1, title: "리액트 공부", content: "리액트 useState 정리" },
  { id: 2, title: "자바스크립트", content: "배열 메서드 정리" },
];
// 게시글의 타입을 정의합니다.
interface PostType {
  id: number;
  title: string;
  content: string;
}

const PostDetail = () => {
  // 제네릭(<>)을 사용하여 null이거나 PostType 객체가 들어올 수 있다고 알려줍니다.
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);
  
  const handleClick = (id: number) => {
    // 1. 전체 배열(posts)이 아니라, 클릭한 id와 일치하는 '단일 게시물'을 찾습니다.
    const clickedPost = posts.find((post) => post.id === id) || null;
    // 2. 찾은 단일 게시물을 상태로 설정합니다.
    setSelectedPost(clickedPost);
  };
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <button onClick={() => handleClick(post.id)}>{post.title}</button>
        </div>
      ))}
      {selectedPost && (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
