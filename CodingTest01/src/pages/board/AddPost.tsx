import { useState } from "react";

// 1. 게시글 객체의 타입(인터페이스) 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

const AddPost = () => {
  // 2. 모든 상태와 핸들러 함수를 컴포넌트 내부로 이동
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  // posts 상태에 Post[] 타입을 지정하여 에러 방지
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = () => {
    if (!title.trim() || !content.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      title,
      content,
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <input value={title} placeholder="제목" onChange={handleTitleChange} />
      {/* 3. textarea에도 value 속성 추가 */}
      <textarea
        value={content}
        placeholder="내용"
        onChange={handleContentChange}
      />
      <button onClick={handleAddPost}>등록</button>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AddPost;
