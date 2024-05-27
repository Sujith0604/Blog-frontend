import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const AppLayout = lazy(() => import("./AppLayout"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const LoadingPage = lazy(() => import("./Pages/LoadingPage"));
const CreateBlogPost = lazy(() => import("./Pages/CreateBlogPost"));
const Post = lazy(() => import("./Pages/Post"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));
const SinglePost = lazy(() => import("./Pages/SinglePost"));
const EditPost = lazy(() => import("./Pages/EditPost"));
export default function App() {
  return (
    <div>
      <Suspense fallback=<LoadingPage />>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createBlog" element={<CreateBlogPost />} />
            <Route path="/post" element={<Post />} />
            <Route path="/singlepost/:id" element={<SinglePost />} />
            <Route path="/editpost/:id" element={<EditPost />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
