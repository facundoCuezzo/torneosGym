import { BrowserRouter } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import Footer from "./components/Footer";
import NavbarComp from "./components/NavBar";
import "./styles/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComp />
        <main>
          <Toaster richColors />
          <RoutesView />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
