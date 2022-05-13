import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";

const publicRoute=[
  {id:1 , path : '/', name: "Home", Component: Home},
  {id:2 , path : '/about', name: "About", Component: About},
  {id:3 , path : '/services', name: "Services", Component: Services},
  {id:4 , path : '/contact', name: "Contact", Component: Contact},
  {id:5 , path : '/login', name: "Login", Component: Login},
]

function App() {
  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({id, path, Component})=><Route key={id} path={path} element={<Component />}/>)}
      </Routes>
    </Navbar>
  );
}

export default App;
