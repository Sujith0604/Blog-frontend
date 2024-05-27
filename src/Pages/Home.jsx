import { NavLink } from "react-router-dom";
import SmallCarousal from "./SmallCarousal";

export default function Home() {
  return (
    <div className=" flex flex-col gap-10 p-4 ">
      <div className="flex items-center justify-center bg-[url('/images/pexels-quang-nguyen-vinh-222549-3355480.jpg')] bg-fixed bg-cover bg-center h-lvh shadow-inner">
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
          <div>
            <NavLink
              to="/createBlog"
              className="bg-red-500 text-white font-semibold p-4"
            >
              Explore More
            </NavLink>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center gap-5 md:gap-0 justify-center md:flex-row ">
        <div className=" flex items-center justify-center md:w-[50%]">
          <img
            className=" md:h-[600px]"
            src="/images/pexels-photopatea-1893158.jpg"
          />
        </div>
        <div className="flex flex-col md:w-[50%] items-center md:items-start gap-10 ">
          <h1 className=" font-thin text-4xl flex flex-col gap-2 items-center md:items-start">
            <span>Welcome to</span> <span>the Nature Blog</span>
          </h1>
          <p className=" text-center md:text-start text-[17px] font-thin">
            This blog mainly concentrates on the natures beauty and the birds
            that live there. So if you are intrested to explore the nautre go
            through our blog post.{" "}
          </p>
          <p>-Sujith Karthikaiselvan</p>
          <div className=" flex items-center justify-center gap-5">
            <div className="flex flex-col gap-5">
              <p className="font-thin">Birds Blog</p>
              <p className="font-thin">Places</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-thin">Animals</p>
              <p className="font-thin">Scenary</p>
            </div>
          </div>
          <div>
            <NavLink
              to="/post"
              className="bg-red-500 text-white font-semibold p-4"
            >
              Explore More
            </NavLink>
          </div>
        </div>
      </div>

      <div className=" flex flex-col p-4 gap-5 justify-center">
        <div className=" text-3xl font-thin">BLOGS</div>
        <SmallCarousal />
      </div>

      <div className=" flex flex-col gap-5 items-center justify-center">
        <div className="flex items-center text-center md:text-start justify-center italic font-thin text-4xl">
          "The more you explore the nautre the more you get to know about
          yourself"
        </div>
        <div className=" flex items-center justify-between flex-wrap md:flex-none gap-5 md:h-[400px] ">
          <div>
            <img
              className="md:h-[250px] md:w-[400px]"
              src="/images/pexels-pixabay-302304.jpg"
            />
          </div>
          <div>
            {" "}
            <img
              className="md:h-[250px] md:w-[400px]"
              src="/images/pexels-pixabay-247376.jpg"
            />
          </div>
          <div>
            {" "}
            <img
              className="md:h-[250px] md:w-[400px]"
              src="/images/pexels-pixabay-65289.jpg"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around flex-wrap gap-5 md:gap-0">
        <div className=" h-[400px] border w-[400px] flex flex-col items-center justify-center p-4 gap-10">
          <h1 className=" text-3xl font-thin">Animal blog</h1>
          <p className=" text-center font-thin text-[15px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>
          <div>
            <NavLink
              to="/post"
              className="bg-red-500 text-white font-semibold p-4"
            >
              Visit Blog
            </NavLink>
          </div>
        </div>
        <div className=" h-[400px] border  w-[400px] flex flex-col items-center justify-center p-4 gap-10 ">
          <h1 className=" text-3xl font-thin">Nature blog</h1>
          <p className="  text-center font-thin text-[15px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>
          <div>
            <NavLink
              to="/post"
              className="bg-red-500 text-white font-semibold p-4"
            >
              Visit Blog
            </NavLink>
          </div>
        </div>
        <div className=" h-[400px] border  w-[400px] flex flex-col items-center justify-center p-4 gap-10 ">
          <h1 className=" text-3xl font-thin">Bird blog</h1>
          <p className=" text-center font-thin text-[15px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>
          <div>
            <NavLink
              to="/post"
              className="bg-red-500 text-white font-semibold p-4"
            >
              Visit Blog
            </NavLink>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center  bg-[url('/images/pexels-justus-255580-790359.jpg')] bg-fixed bg-cover bg-center h-lvh ">
        <div className=" flex items-center justify-center flex-col gap-10">
          <h1 className=" font-thin text-4xl flex flex-col gap-3 items-center justify-center">
            <span>Create your own Blog</span> <span>and let other know</span>
          </h1>
          <p className=" text-center md:text-start text-[17px] font-thin">
            This helps the people to know morw about your adventure and
            experience
          </p>
          <div>
            <NavLink
              to="/createBlog"
              className="bg-red-500 text-white font-semibold p-4"
            >
              Explore More
            </NavLink>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-5 items-center justify-center italic text-xl font-thin h-[400px]">
        <span>
          "Every morning was a cheerful invitation to make my life of equal
          simplicity, and I may say innocence, with Nature herself."
        </span>{" "}
        <span>–Henry David Thoreau</span>
      </div>

      <div className=" flex gap-10 md:gap-0 items-center justify-around flex-wrap">
        <img
          className="md:h-[400px]"
          src="/images/pexels-yigithan02-772992.jpg"
        />
        <img
          className="md:h-[400px]"
          src="/images/pexels-valeriiamiller-2914796.jpg"
        />
        <img className="md:h-[400px]" src="/images/pexels-pixabay-52509.jpg" />
        <img
          className="md:h-[400px]"
          src="/images/pexels-michael-block-1691617-3225517.jpg"
        />
        <img
          className="md:h-[400px]"
          src="/images/pexels-quang-nguyen-vinh-222549-3355480.jpg"
        />
        <img
          className="md:h-[400px]"
          src="/images/pexels-eberhardgross-707344.jpg"
        />
        <img
          className="md:h-[400px]"
          src="/images/pexels-ebrubodyy-20322761.jpg"
        />
      </div>
      <div className="  flex items-center justify-center bg-[url('/images/pexels-eberhardgross-707344.jpg')] bg-fixed bg-cover bg-center h-lvh shadow-inner">
        <div className=" flex items-center justify-center flex-col gap-10">
          <h1 className=" font-bold text-4xl flex flex-col gap-3 items-center justify-center">
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
    </div>
  );
}
