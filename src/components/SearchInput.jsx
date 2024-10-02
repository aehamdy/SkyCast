/* eslint-disable react/prop-types */
function SearchInput({ setInputValue }) {
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type="search"
      name="search-input"
      onChange={handleInputValue}
      className="w-full py-2 ps-2 pe-[4.2rem] rounded-xl outline-none"
    />
  );
}

export default SearchInput;
