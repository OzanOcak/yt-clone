import Home from "../icons/Home";
import HoverSideIcon from "../icons/HoverSideIcon";
import Library from "../icons/Library";
import Shorts from "../icons/Shorts";
import Subcriptions from "../icons/Subcriptions";

const SideNavBar = () => {
  return (
    <div className="hidden md:flex flex-col w-[80px]  bg-black mt-9 py-6">
      <div className="">
        <HoverSideIcon children={<Home />} text="Home" />
        <HoverSideIcon children={<Shorts />} text="Shorts" />
        <HoverSideIcon children={<Subcriptions />} text="Subcriptions" />
        <HoverSideIcon children={<Library />} text="Library" />
      </div>
    </div>
  );
};

export default SideNavBar;
