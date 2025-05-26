import { BrowserRouter } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <RoutesView />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
