import { NavLink } from "react-router-dom";

export default function PostComp({
  _id,
  title,
  summary,
  content,
  cover,
  createdAt,
  author,
}) {
  return (
    <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row">
      <div className=" flex lg:w-[50%] items-center justify-center">
        <NavLink to={`/singlepost/${_id}`}>
          <img
            className=" lg:h-[500px]"
            src={"http://localhost:3000/" + cover}
          />
        </NavLink>
      </div>
      <div className=" flex lg:w-[50%] flex-col  gap-5 lg:gap-0 p-4 justify-between">
        <NavLink to={`/singlepost/${_id}`}>
          <h1 className=" text-3xl font-thin capitalize">{title}</h1>
        </NavLink>
        <p className=" font-thin text-xl italic">{summary}</p>
        <p dangerouslySetInnerHTML={{ __html: content.substring(0, 150) }} />
        <p className="font-semibold text-[15px]  ">{createdAt}</p>
        <p className=" font-semibold text-[15px] capitalize">
          Author : {author?.username}
        </p>
        <div>
          <NavLink to={`/singlepost/${_id}`}>
            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
