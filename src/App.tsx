import Header from "./layout/Header";
import Landing from "./pages/Landing/Landing";

const App = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto__1fr] gap-y-[60px] lg:gap-y-[80px] justify-center items-start min-h-screen w-full bg-bodyBg bg-cover bg-center bg-no-repeat">
      <Header />
      <Landing />
    </div>
  );
};

export default App;
