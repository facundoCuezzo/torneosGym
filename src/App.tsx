import { BrowserRouter } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import Footer from "./components/Footer";
import NavbarComp from "./components/NavBar";
import "./styles/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from "sonner";
import MembersProvider from "./context/members/MembersProvider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComp />
        <main>
          <Toaster richColors />
          <MembersProvider>
            <RoutesView />
          </MembersProvider>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
