const CategoryBar = () => {
  const list: string[] = ["React", "JavaScript", "TypeScript"];

  return (
    <div className="h-16 w-[96%] flex items-center  overflow-hidden bg-black text-white mt-[8px]  py-2 ">
      {list.map((i) => {
        return (
          <p className="mx-3  px-2 py-1 bg-gray-700/50 hover:bg-gray-700/80  rounded-lg">
            {i}
          </p>
        );
      })}
    </div>
  );
};

export default CategoryBar;
