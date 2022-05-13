import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";

const publicRoute=[
  {path : '/', name: "Home", Component: Home},
  {path : '/about', name: "About", Component: About},
  {path : '/services', name: "Services", Component: Services},
  {path : '/contact', name: "Contact", Component: Contact},
  {path : '/login', name: "Login", Component: Login},
]

function App() {
  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({path, Component}, index)=><Route key={index} path={path} element={<Component />}/>)}
      </Routes>
    </Navbar>
  );
}

export default App;
