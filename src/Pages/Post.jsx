import { useContext } from "react";
import PostComp from "../UIcomponents/PostComp";
import { PostContext } from "../Context/postContext";

export default function Post() {
  const { post } = useContext(PostContext);

  return (
    <div className=" flex flex-col gap-10">
      <div className="flex items-center justify-center bg-[url('/images/pexels-eberhardgross-707344.jpg')] bg-fixed bg-cover bg-center h-lvh shadow-inner">
        <div className=" flex items-center justify-center flex-col gap-10">
          <h1 className=" font-bold md:text-4xl text-3xl flex flex-col gap-3 items-center justify-center">
            <span>Create your own Blog</span> <span>and let other know</span>
          </h1>
          <p
            className=" text-center md:text-start text-xl
           font-semibold "
          >
            This helps the people to know morw about your adventure and
            experience
          </p>
        </div>
      </div>
      <div className=" flex items-center justify-center h-[100px] text-3xl font-semibold">
        BLOGS
      </div>
      <div className=" flex flex-col gap-10  p-4">
        {post?.map((post, index) => (
          <PostComp key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
