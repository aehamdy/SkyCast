import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

function SearchBar() {
  return (
    <div className="relative w-56 mx-auto">
      <SearchInput />
      <SearchButton />
    </div>
  );
}

export default SearchBar;
