import MainDownloader from "./components/MainDownloader";
import Title from "./components/Title";
import "./style/style.css";

function App() {
  return (
    <>
      <div className="slider-thumb">
        <Title />
        <MainDownloader />
      </div>
    </>
  );
}

export default App;
