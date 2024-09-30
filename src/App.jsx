import "./App.css";
import House from "../public/house.png";

function App() {
  return (
    <>
      <div
        className="realtive h-screen bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/starry-night.png')" }}
      >
        <img
          src={House}
          alt="house-image"
          className="absolute w-2/5 top-1/2 start-1/2 -translate-y-1/4 -translate-x-1/2"
        />
      </div>
    </>
  );
}

export default App;
