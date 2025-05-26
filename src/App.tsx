import { BrowserRouter } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import "./App.css";
import Footer from "./components/Footer";
import ColorSchemesExample from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <ColorSchemesExample />
        <main>
        
         
          <RoutesView />
        </main>
         <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
