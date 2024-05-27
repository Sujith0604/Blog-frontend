import { useRef, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

export default function Register() {
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      setRedirect(true);
    } catch (error) {
      alert("Registeration failed");
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }
  return (
    <div className=" flex flex-col  items-center justify-center  bg-[url('/images/pexels-quang-nguyen-vinh-222549-3355480.jpg')] bg-fixed bg-cover bg-center h-lvh ">
      <div className=" bg-white text-black p-4">
        <form
          onSubmit={handleSubmit}
          className="  flex flex-col gap-3 items-center justify-center md:p-4"
        >
          <div className=" flex w-full gap-5 justify-between items-center">
            <label className=" font-bold text-xl">Username</label>
            <input
              ref={userRef}
              placeholder="Enter your name"
              type="text"
              name="username"
              className=" border p-4"
            />
          </div>
          <div className=" flex w-full gap-5 justify-between items-center">
            <label className=" font-bold text-xl">Email</label>
            <input
              ref={emailRef}
              placeholder="Enter your Email"
              type="email"
              name="email"
              className=" border p-4"
            />
          </div>
          <div className=" flex w-full gap-5 justify-between items-center">
            <label className=" font-bold text-xl">password</label>
            <input
              ref={passwordRef}
              placeholder="Enter your password"
              type="password"
              name="password"
              className=" border p-4"
            />
          </div>
          <div>
            <button
              className=" bg-red-400 p-4 border font-bold rounded-md"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div className=" font-semibold  flex flex-col items-center justify-center gap-4">
          <p>Already have an account?</p>
          <p>
            <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
