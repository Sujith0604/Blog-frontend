import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <hr />
      <div className=" flex h-[60px] items-center justify-center text-2xl italic font-semibold">
        "Nature is not a place to visit, it is home."
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between p-4">
        <div className=" flex flex-col gap-10 items-center  justify-center  md:w-[50%]">
          <div className=" font-bold text-xl capitalize">The nature</div>
          <div className=" flex items-center justify-center gap-5">
            <InstagramIcon />
            <FacebookIcon />
            <XIcon />
          </div>
          <div className=" flex gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/post">Post</NavLink>
            <NavLink to="/createBlog">Create</NavLink>
          </div>
        </div>
        <div className=" flex flex-col gap-10   items-center justify-center md:w-[50%]">
          <div className=" text-xl font-semibold">"We expore We conquer."</div>
          <div className=" flex items-center justify-center gap-5">
            <CallIcon />
            <EmailIcon />
            <WhatsAppIcon />
          </div>
          <div className=" flex gap-5">
            <NavLink to="#">Policies</NavLink>
            <NavLink to="#">Terms and conditions</NavLink>
            <NavLink to="#">Since 2010</NavLink>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center font-semibold text-xl capitalize h-[50px] p-4">
        Powered by accurate
      </div>
    </>
  );
}
