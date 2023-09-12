import HoverIcon from "../icons/HoverIcon";
import Microphone from "../icons/Microphone";
import Search from "../components/Search";
import CreateIcon from "../icons/CreateIcon";
import NotificationIcon from "../icons/NotificationIcon";
import SideBarIcon from "../icons/SideBarIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import { useState } from "react";
import BackIcon from "../icons/BackIcon";
import SearchIcon from "../icons/SearchIcon";
import Img from "../assets/img-containers/Img";

interface Props {
  openSide: boolean;
  setOpenSide: (openSide: boolean) => void;
}

const TopNavBar = ({ openSide, setOpenSide }: Props) => {
  const [search, setSearch] = useState<boolean>(false);
  return (
    <>
      {!search ? (
        <div className="h-14 w-full fixed bg-black flex px-6 py-2  justify-between items-center z-10">
          <div className="flex  py-2 gap-6 ">
            <div onClick={() => setOpenSide(!openSide)}>
              <HoverIcon children={<SideBarIcon />} />
            </div>
            <div className="pt-1">
              <YoutubeIcon />
            </div>
          </div>

          <div className="flex justify-between  items-center w-[50%] sm:w-[60%] md:w-[80%]">
            <div className="flex gap-1 md:gap-4">
              <Search search={search} setSearch={setSearch} />
              <div className="text-lg p-[.2px] bg-gray-400/40 rounded-full">
                <HoverIcon
                  children={<Microphone />}
                  text="Search with your voice"
                />
              </div>
            </div>

            <div className="flex gap-.5 md:gap-4">
              <HoverIcon children={<CreateIcon />} text="Create" />
              <HoverIcon children={<NotificationIcon />} text="Notification" />
              <Img />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-14 w-full fixed bg-black flex px-6 py-2  justify-between items-center">
          <div onClick={() => setSearch(!search)} className="flex w-[10%]">
            <HoverIcon children={<BackIcon />} text="Back" />
          </div>
          <div className="w-[70%]">
            <div className=" flex relative w-[240px] h-10 border border-gray-500 rounded-3xl text-gray-500">
              <p className="p-2">Search</p>
              <div className="absolute right-0  px-4 py-2 rounded-r-3xl bg-slate-300/20">
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className="w-[12%]">
            <HoverIcon
              children={<Microphone />}
              text="Search with your voice"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavBar;
