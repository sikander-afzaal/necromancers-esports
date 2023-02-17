import Header from "./layout/Header";

const App = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto 1fr] justify-center items-start min-h-screen w-full bg-bodyBg bg-cover bg-center bg-no-repeat">
      <Header />
    </div>
  );
};

export default App;
