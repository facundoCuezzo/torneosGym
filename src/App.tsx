import ColorSchemesExample from './components/NavBar'
import './App.css'
import Footer from './components/Footer'
import { BrowserRouter } from "react-router-dom";


function App() {


  return (
    
       <BrowserRouter>
          <div className="App">

            <ColorSchemesExample />
            <Footer />
            
          </div>
    </BrowserRouter>
   
  )
}

export default App
