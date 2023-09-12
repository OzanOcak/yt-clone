import { useState } from "react";
import History from "../icons/History";
import Home from "../icons/Home";
import HoverIcon from "../icons/HoverIcon";
import LessLibrary from "../icons/LessLibrary";
import Library from "../icons/Library";
import LikedVideos from "../icons/LikedVideos";
import MoreLibrary from "../icons/MoreLibrary";
import Shorts from "../icons/Shorts";
import SideBarIcon from "../icons/SideBarIcon";
import SideNavIcon from "../icons/SideNavIcon";
import Subcriptions from "../icons/Subcriptions";
import WatchLater from "../icons/WatchLater";
import YourVideos from "../icons/YourVideos";
import YoutubeIcon from "../icons/YoutubeIcon";
import MyList from "../icons/MyList";

interface Props {
  openSide: boolean;
  setOpenSide: (openSide: boolean) => void;
}

const SideNavPage = ({ openSide, setOpenSide }: Props) => {
  const [more, setMore] = useState<boolean>(false);
  return (
    <div
      className={`absolute flex   md:w-full h-[calc(100%_+_36px)] text-white z-10`}
    >
      <div className=" flex flex-1 flex-col h-screen md:h-full w-[240px]  bg-black mb-4  py-3  ">
        <div className="flex fixed mb-12 z-10">
          <div className="px-6 " onClick={() => setOpenSide(!openSide)}>
            <HoverIcon children={<SideBarIcon />} />
          </div>
          <div className=" pt-1">
            <YoutubeIcon />
          </div>
        </div>
        <div className="flex flex-col flex-1 mt-16">
          <SideNavIcon children={<Home />} text="Home" />
          <SideNavIcon children={<Shorts />} text="Shorts" />
          <SideNavIcon children={<Subcriptions />} text="Subcriptions" />
          <hr className="text-gray-300/30 mx-2 my-4" />
          <SideNavIcon children={<Library />} text="Library" />
          <SideNavIcon children={<History />} text="History" />
          <SideNavIcon children={<YourVideos />} text="Your Videos" />
          <SideNavIcon children={<WatchLater />} text="Watch Later" />
          <SideNavIcon children={<LikedVideos />} text="Liked Videos" />
          {more && <SideNavIcon children={<MyList />} text="CPU Design" />}
          {more && <SideNavIcon children={<MyList />} text="React" />}
          {!more ? (
            <div onClick={() => setMore(!more)}>
              <SideNavIcon children={<MoreLibrary />} text="More Library" />
            </div>
          ) : (
            <div onClick={() => setMore(!more)}>
              <SideNavIcon children={<LessLibrary />} text="Less Library" />
            </div>
          )}
          <hr className="text-gray-300/30 mx-2 my-4" />
        </div>
      </div>
      <div
        className="w-[calc(100%_-_240px)] bg-gray-700/50"
        onClick={() => setOpenSide(!openSide)}
      ></div>
    </div>
  );
};

export default SideNavPage;
