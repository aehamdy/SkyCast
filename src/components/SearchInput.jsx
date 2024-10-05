/* eslint-disable react/prop-types */
function SearchInput({ setInputValue, validateInputValue }) {
  const handleInputValue = (e) => {
    const value = e.target.value.trim();
    setInputValue(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      validateInputValue();
    }
  };

  return (
    <input
      type="search"
      name="search-input"
      onChange={handleInputValue}
      onKeyDown={handleKeyDown}
      className="w-full py-2 ps-2 pe-[4.2rem] rounded-xl outline-none"
    />
  );
}

export default SearchInput;
