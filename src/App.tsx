import { BrowserRouter } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import "./App.css";
import ColorSchemesExample from "./components/NavBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/Footer";

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
