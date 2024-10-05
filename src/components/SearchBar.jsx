/* eslint-disable react/prop-types */
import { useState } from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

function SearchBar(props) {
  const { setStatus, setNextDaysData, API, setErrorMessage } = props;

  const [inputValue, setInputValue] = useState("");

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
      setStatus(data);

      const lat = data.coord.lat; //get latitude of country
      const lon = data.coord.lon; //get longitude of country
      getNextFiveDays(lat, lon);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(`Request failed.\nPlease check the entered value.`);
    }
  }

  // function to get next five days weather (5 days are the maximum period for this API)
  const getNextFiveDays = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40&appid=${API.key}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ` + response.status);
      }
      const data = await response.json();
      setNextDaysData(data);
      // console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="relative w-56 mx-auto">
      <SearchInput
        setInputValue={setInputValue}
        validateInputValue={validateInputValue}
      />
      <SearchButton validateInputValue={validateInputValue} />
    </div>
  );
}

export default SearchBar;
