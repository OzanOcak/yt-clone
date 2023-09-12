import { ReactElement } from "react";

interface Props {
  children: ReactElement;
  text?: string;
}
const HoverSideIcon = ({ children, text }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center mx-1 px-2 py-3.5 bg-gray-300/0 hover:bg-gray-500/40 rounded-lg">
      <div className="relative text-white ">{children}</div>
      <p className="text-white text-[9px] py-1">{text}</p>
    </div>
  );
};

export default HoverSideIcon;
