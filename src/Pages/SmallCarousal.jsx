import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { PostContext } from "../Context/postContext";
export default function SmallCarousal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { post } = useContext(PostContext);

  if (!post) return "";

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {post.flatMap((item, index) => {
          return (
            <div>
              <div
                className=" flex flex-col  gap-5 md:w-[320px] h-[500px] md:h-[600px]"
                key={index}
              >
                <img
                  className=" h-[300px]"
                  src={"http://localhost:3000/" + item.cover}
                />
                <div className="flex flex-col gap-5 ">
                  <h3 className=" capitalize font-thin text-2xl">
                    {item.title}
                  </h3>
                  <p className=" font-thin text-[15px]">{item.summary}</p>

                  <div>
                    <NavLink
                      className="bg-red-500 text-white font-semibold p-4"
                      to="/post"
                    >
                      View Post
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
