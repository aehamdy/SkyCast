import { useState } from "react";
import "./App.css";
// import House from "../public/house.png";
import CurrentDayWeather from "./components/CurrentDayWeather";
import SearchBar from "./components/SearchBar";

function App() {
  const [inputValue, setInputValue] = useState("");

  const myFunc = () => {
    console.log(inputValue);
  };

  return (
    <>
      <div
        className="realtive h-screen bg-no-repeat bg-center pt-10"
        style={{ backgroundImage: "url('/starry-night.png')" }}
      >
        <SearchBar setInputValue={setInputValue} myFunc={myFunc} />
        <CurrentDayWeather />

        {/* <img
          src={House}
          alt="house-image"
          className="absolute w-2/5 top-1/2 start-1/2 -translate-y-1/4 -translate-x-1/2"
        /> */}
      </div>
    </>
  );
}

export default App;
