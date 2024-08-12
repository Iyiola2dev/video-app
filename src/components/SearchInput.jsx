import React from "react";

const SearchInput = ({id, onChange }) => {
  return (
    <>
      <input
        type="text"
        id={id}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-200 w-[97%] p-2 pl-7 rounded-3xl border-none my-3 "
        placeholder="Search"
      />
    </>
  );
};

export default SearchInput;
