import { ReactElement } from "react";

interface Props {
  children: ReactElement;
  text?: string;
}
const SideNavIcon = ({ children, text }: Props) => {
  return (
    <div className="flex justify-start items-center py-.5 mx-3  bg-gray-300/0 hover:bg-gray-500/40  rounded-lg ">
      <div className="relative mx-4 text-white ">{children}</div>
      <p className="text-white text-[12px] px-2 py-3 ">{text}</p>
    </div>
  );
};

export default SideNavIcon;
