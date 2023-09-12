import { ReactElement, useState } from "react";

interface Props {
  children: ReactElement;
  text?: string;
}
const HoverIcon = ({ children, text }: Props) => {
  const [info, setInfo] = useState<boolean>(false);
  return (
    <div
      className="relative text-white p-1 bg-gray-300/0 hover:bg-gray-700/10 rounded-full"
      onMouseEnter={() => setInfo(true)}
      onMouseLeave={() => setInfo(false)}
    >
      {children}
      {text
        ? info && (
            <p className="absolute  mt-6 -ml-2 px-2 py-3 bg-gray-400 rounded-md text-xs whitespace-nowrap">
              {text}
            </p>
          )
        : null}
    </div>
  );
};

export default HoverIcon;
