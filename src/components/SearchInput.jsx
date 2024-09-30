/* eslint-disable react/prop-types */
function SearchInput({ setInputValue }) {
  return (
    <input
      type="search"
      name="search-input"
      onChange={(e) => setInputValue(e.target.value)}
      className="w-full py-2 ps-2 pe-[4.2rem] rounded-xl outline-none"
    />
  );
}

export default SearchInput;
