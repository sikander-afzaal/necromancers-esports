import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Header from "./layout/Header";
import Contact from "./pages/Contact/Contact";
import Landing from "./pages/Landing/Landing";

const App = () => {
  return (
    <div className="grid grid-cols-1 pb-10 grid-rows-[auto__1fr] gap-y-[50px] lg:gap-y-[80px] justify-center items-start min-h-screen w-full bg-bodyBg bg-cover bg-center bg-no-repeat">
      <Header />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </div>
  );
};

export default App;
