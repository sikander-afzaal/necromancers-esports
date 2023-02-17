const Landing = () => {
  return (
    <div className="flex justify-start items-center flex-col">
      <h3 className="uppercase text-primary text-2xl sm:text-4xl lg:text-[42px] font-medium ">
        ESPORTS AND STREAMING
      </h3>
      <h2 className="uppercase text-white font-bold text-[50px] sm:text-[80px] lg:text-[124px] leading-[1] ">
        NECROMANCERS
      </h2>
      <button className="bg-primary border-none mt-[50px] cursor-pointer relative isolate text-tertiary uppercase text-lg sm:text-[22px] font-bold h-[60px] sm:h-[70px] w-[220px] sm:w-[275px] overflow-hidden group">
        Start Browsing!
        <span className="absolute transition-transform duration-[0.4s] translate-y-full group-hover:translate-y-0 delay-200 group-hover:duration-[0.6s] group-hover:delay-[0s] w-full h-full left-0 top-0 bg-[#90eb00] ease pointer-events-none -z-20"></span>
        <span className="absolute transition-transform duration-[0.6s]  w-full h-full left-0 top-0 bg-[#88de00] translate-y-full group-hover:translate-y-0 ease group-hover:duration-[0.4s] group-hover:delay-[0.2s]  pointer-events-none -z-10"></span>
      </button>
    </div>
  );
};

export default Landing;
