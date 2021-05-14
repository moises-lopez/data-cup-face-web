import logo from "./logo.svg";
import "./App.css";
import WebcamComponent from "./components/WebcamComponent";
import EmotionsPage from "./pages/EmotionsPage";

function App() {
  return (
    <div className="App">
      <WebcamComponent></WebcamComponent>
      <EmotionsPage></EmotionsPage>
    </div>
  );
}

export default App;
