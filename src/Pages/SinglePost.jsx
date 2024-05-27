import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UserContext } from "../Context/userContext";

export default function SinglePost() {
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  const [post, setPost] = useState();

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`http://localhost:3000/singlepost/${id}`);
      const data = await res.json();
      setPost(data);
    };
    getPost();
  }, []);

  if (!post) return "";

  return (
    <div className=" flex flex-col gap-5 p-4">
      {userInfo.user._id === post.author._id && (
        <div className=" flex items-center flex-col gap-5 justify-center">
          <h1 className=" text-2xl font-thin">Do you want to edit the post?</h1>

          <NavLink
            className="bg-red-500 text-white font-semibold p-4"
            to={`/editpost/${post._id}`}
          >
            Edit
          </NavLink>
        </div>
      )}
      <div className=" flex flex-col gap-10 items-center justify-center">
        <div>
          <img
            className="h-[450px]"
            src={`http://localhost:3000/${post.cover}`}
          />
        </div>
        <h1 className=" text-3xl font-thin capitalize">{post.title}</h1>
        <p
          className=" text-center text-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
