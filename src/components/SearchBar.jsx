/* eslint-disable react/prop-types */
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

function SearchBar(props) {
  const { setInputValue, myFunc } = props;

  return (
    <div className="relative w-56 mx-auto">
      <SearchInput setInputValue={setInputValue} />
      <SearchButton myFunc={myFunc} />
    </div>
  );
}

export default SearchBar;
