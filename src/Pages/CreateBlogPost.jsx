import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { NavLink, Navigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function CreateBlogPost() {
  const titleRef = useRef();
  const summaryRef = useRef();
  const contentRef = useRef();
  const fileRef = useRef();
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const summary = summaryRef.current.value;
    const content = contentRef.current.value;
    const file = fileRef.current.files[0];

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("summary", summary);
      formData.append("content", content);
      formData.append("file", file);

      const response = await fetch("http://localhost:3000/createpost", {
        credentials: "include",
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setRedirect(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className=" flex flex-col gap-5">
      <div className=" flex items-center justify-center  bg-[url('/images/pexels-justus-255580-790359.jpg')] bg-fixed bg-cover bg-center h-lvh ">
        <div className=" flex items-center justify-center flex-col gap-10">
          <h1 className=" font-bold md:text-4xl text-3xl flex flex-col gap-3 items-center justify-center">
            <span>Create your own Blog</span> <span>and let other know</span>
          </h1>
          <p className=" text-center md:text-start text-[17px] font-thin">
            This helps the people to know morw about your adventure and
            experience
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-5 items-center justify-center md:h-[600px]  p-2  md:p-4">
        <div className=" text-xl font-bold ">CREATE YOUR OWN POST</div>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-4 md:h-[500px] md:justify-between md:p-4 border "
        >
          <div className=" flex flex-col md:flex-row w-full justify-between items-center">
            <label>Title</label>
            <input
              type="text"
              ref={titleRef}
              placeholder="title"
              className=" border p-4"
            />
          </div>
          <div className=" flex flex-col md:flex-row w-full justify-between items-center">
            <label>Summary</label>
            <input
              type="text"
              ref={summaryRef}
              placeholder="Summary"
              className=" border p-4"
            />
          </div>
          <div className=" flex flex-col md:flex-row w-full justify-between items-center">
            <label>Image</label>
            <input type="file" ref={fileRef} className=" border p-4" />
          </div>
          <div className=" flex flex-col md:flex-row w-full justify-between items-center">
            <label>Content</label>
            <ReactQuill modules={modules} ref={contentRef} formats={formats} />
          </div>
          <div>
            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md">
              create post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
