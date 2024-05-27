import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate, useParams } from "react-router-dom";

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

export default function EditPost() {
  const [title, setTitle] = useState(null);
  const [summary, setSummary] = useState(null);
  const [content, setContent] = useState(null);
  const [file, setFile] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/createpost");
      const data = await res.json();
      setTitle(data[0].title);
      setSummary(data[0].summary);
      setContent(data[0].content);
    };
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("summary", summary);
      formData.append("content", content);
      formData.append("id", id);
      if (file?.[0]) {
        formData.append("file", file?.[0]);
      }

      const response = await fetch("http://localhost:3000/createpost", {
        credentials: "include",
        method: "PATCH",
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
    return <Navigate to="/singlepost/:id" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Summary</label>
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary"
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            value={file}
            onChange={(e) => setFile(e.target.files)}
          />
        </div>
        <div>
          <ReactQuill
            modules={modules}
            value={content}
            onChange={(newValue) => setContent(newValue)}
            formats={formats}
          />
        </div>
        <div>
          <button>Edit post</button>
        </div>
      </form>
    </div>
  );
}
