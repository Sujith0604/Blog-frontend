import { useContext, useRef, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUserInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
          setRedirect(true);
          emailRef.current.value = "";
          passwordRef.current.value = "";
        });
      } else {
        alert("Email or password is incorrect");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div className=" flex flex-col  items-center justify-center  bg-[url('/images/pexels-quang-nguyen-vinh-222549-3355480.jpg')] bg-fixed bg-cover bg-center h-lvh ">
      <div className=" bg-white text-black md:p-4">
        <form
          onSubmit={handleSubmit}
          className=" md:h-[250px]  flex flex-col gap-3 items-center justify-center p-4"
        >
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
              Login
            </button>
          </div>
        </form>
        <div className=" font-semibold  flex flex-col items-center justify-center gap-4">
          <p>Dont have an account?</p>
          <p>
            <NavLink to="/register">Register</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
