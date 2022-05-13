import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar>
        <Home />
        <About/>
        <Services/>
        <Contact/>
        <Login/>
      </Navbar>
    </>
  );
}

export default App;
