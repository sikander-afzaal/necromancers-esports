import { Route } from "react-router";
import { Routes } from "react-router-dom";
// import Header from "./layout/Header";
import Contact from "./pages/Contact/Contact";
import Landing from "./pages/Landing/Landing";

const App = () => {
  return (
    <div className=" justify-center items-start  w-full ">
      {/* <Header /> */}
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </div>
  );
};

export default App;
