import { BrowserRouter } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import Footer from "./components/Footer";
import NavbarComp from "./components/NavBar";
import "./styles/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from "sonner";
import MembersProvider from "./context/members/MembersProvider";
import TournamentsProvider from './context/tournaments/TournamentsProvider';

function App() {
  return (
    <BrowserRouter>
      <MembersProvider>
        <TournamentsProvider>
          <div className="App">
            <NavbarComp />
            <main>
              <Toaster richColors />
              <RoutesView />
            </main>
            <Footer />
          </div>
        </TournamentsProvider>
      </MembersProvider>
    </BrowserRouter>
  );
}

export default App;
