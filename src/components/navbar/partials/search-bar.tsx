import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-[#E4E4E7] rounded-full flex__center px-4 py-1 text-sm gap-1">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent border-none outline-none"
      />
      <img src="/assets/search.svg" alt="icon search" width={16} height={16} />
    </div>
  );
};

export default SearchBar;
