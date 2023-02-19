import { Route } from "react-router";
import { Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Landing from "./pages/Landing/Landing";

const App = () => {
  return (
    <div className=" justify-center items-start  w-full ">
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<About />} path="/about" />
      </Routes>
    </div>
  );
};

export default App;
