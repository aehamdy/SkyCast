/* eslint-disable react/prop-types */
function SearchButton({ validateInputValue }) {
  const handleButtonClick = () => {
    validateInputValue();
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className="absolute end-0 top-0 h-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-2.5 rounded-e-xl outline-none"
    >
      Search
    </button>
  );
}

export default SearchButton;
