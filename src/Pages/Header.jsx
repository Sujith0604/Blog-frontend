import { useContext, useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/userContext";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  let [open, setOpen] = useState(false);

  useEffect(() => {
    const user = async () => {
      const res = await fetch("http://localhost:3000/profile", {
        credentials: "include",
      });
      const data = await res.json();
      setUserInfo(data);
    };

    user();
  }, []);

  const logout = () => {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo([]);
  };

  const username = userInfo?.user?.username;

  return (
    <div className="shadow-md w-full fixed z-50 top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white  py-4 md:px-10 px-7 h-[80px] md:h-[100px]">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          The Nature
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <NavLink
              to="/"
              className="text-gray-800 hover:text-blue-400 duration-500"
            >
              Home
            </NavLink>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <NavLink
              to="/post"
              className="text-gray-800 hover:text-blue-400 duration-500"
            >
              Post
            </NavLink>
          </li>

          {username ? (
            <>
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <NavLink
                  to="/createBlog"
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  Create
                </NavLink>
              </li>
              <button
                onClick={logout}
                className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
              >
                Logout
              </button>
            </>
          ) : (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <NavLink
                className="text-gray-800 hover:text-blue-400 duration-500"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
        {/* button */}
      </div>
    </div>
  );
}
