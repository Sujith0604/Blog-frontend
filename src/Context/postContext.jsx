import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export function PostContextProvider({ children }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getAllPost = async () => {
      const res = await fetch("http://localhost:3000/createpost");
      const data = await res.json();
      setPost(data);
    };
    getAllPost();
  }, []);

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
}
