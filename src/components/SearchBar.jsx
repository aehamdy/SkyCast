/* eslint-disable react/prop-types */
import { useState } from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

function SearchBar(props) {
  const { setStatus, API, setErrorMessage } = props;

  const [inputValue, setInputValue] = useState();

  const validateInputValue = () => {
    setStatus({});
    setErrorMessage("");

    if (inputValue === "") {
      setErrorMessage("Input field cannot be empty");
    } else if (/\d/.test(inputValue)) {
      setErrorMessage("City names cannot contain numbers!");
    } else {
      getWeatherData();
    }
  };

  async function getWeatherData() {
    try {
      const response = await fetch(
        `${API.base}${inputValue}&appid=${API.key}&units=metric`
      );
      if (!response.ok) {
        throw new Error(`Request failed with status ` + response.status);
      }
      const data = await response.json();
      console.log(data);
      setStatus(data);
    } catch (error) {
      setErrorMessage(`Request failed.\nPlease check the entered value.`);
      // console.log("Error:", error.message);
    }
  }

  return (
    <div className="relative w-56 mx-auto">
      <SearchInput setInputValue={setInputValue} />
      <SearchButton validateInputValue={validateInputValue} />
    </div>
  );
}

export default SearchBar;
