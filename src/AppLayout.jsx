import { Outlet } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";

export default function AppLayout() {
  return (
    <div className=" font-serif">
      <Header />
      <main className="mt-[80px] md:mt-[100px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
