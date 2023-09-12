import HoverIcon from "../icons/HoverIcon";
import SearchIcon from "../icons/SearchIcon";

interface Props {
  search: boolean;
  setSearch: (search: boolean) => void;
}

const Search = ({ search, setSearch }: Props) => {
  return (
    <div>
      <div className=" hidden md:flex relative w-[400px] lg:w-[500px] xl:w-[600px] h-10 border border-gray-500 rounded-3xl text-gray-500">
        <p className="p-2">Search</p>
        <div className="absolute right-0  px-4 py-1 rounded-r-3xl bg-slate-300/20">
          <HoverIcon children={<SearchIcon />} text="Search" />
        </div>
      </div>
      <div className="right-2 p-2 md:hidden" onClick={() => setSearch(!search)}>
        <HoverIcon children={<SearchIcon />} text="Search" />
      </div>
    </div>
  );
};

export default Search;
