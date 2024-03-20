import React from "react";

const SearchBar = () => {
  return (
    <section className="justify-end gap-2 flex__center">
      <div className="bg-[#E4E4E7] rounded-full flex__center justify-between px-6 py-2 text-sm gap-1 w-1/2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent border-none outline-none"
        />
        <img
          src="/assets/search.svg"
          alt="icon search"
          width={16}
          height={16}
        />
      </div>
    </section>
  );
};

export default SearchBar;
