import BottomHeader from "../../layout/BottomHeader";

const About = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col sm:pb-[60px] justify-start items-start  w-full">
        <div className="flex lg:sticky top-0 bg-bodyBg aspect-square min-h-[600px] max-h-[800px] lg:max-h-none lg:h-screen bg-cover bg-center justify-start items-center w-full lg:max-w-[450px] 2xl:-w-[745px]"></div>
        <div className="flex py-[40px] sm:py-[95px] w-full px-5 sm:px-[50px] xl:px-[90px] 2xl:px-[120px] justify-start items-start flex-col gap-10">
          <h2 className="text-[1.8rem] sm:text-[2.5rem] xl:text-[4rem] uppercase font-bold text-tertiary">
            About Us
          </h2>
          <p className="text-tertiary text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim en veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip.
          </p>
          <h2 className="text-[1.8rem] sm:text-[2.5rem] xl:text-[4rem] uppercase font-bold text-tertiary">
            WHY NECROMANCERS?
          </h2>
          <p className="text-tertiary text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo lorem inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur.
          </p>
          <div className="flex sm:flex-row flex-col justify-start gap-6 sm:gap-16 xl:gap-28 items-start sm:items-center min-w-full">
            <div className="flex justify-start items-center gap-5">
              <img
                src="/controller-green.svg"
                className="w-[30px] object-contain aspect-square"
                alt=""
              />
              <div className="flex items-start flex-col justify-start gap-1">
                <h4 className="text-tertiary font-bold text-xl leading-[1]">
                  979
                </h4>
                <p className="text-info uppercase text-xl font-bold leading-[1]">
                  MATCHES
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#88df00"
                className="w-[30px] h-[30px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                />
              </svg>

              <div className="flex items-start flex-col justify-start gap-1">
                <h4 className="text-tertiary font-bold text-xl leading-[1]">
                  34
                </h4>
                <p className="text-info uppercase text-xl font-bold leading-[1]">
                  Trophies
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#88df00"
                className="w-[30px] h-[30px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>

              <div className="flex items-start flex-col justify-start gap-1">
                <h4 className="text-tertiary font-bold text-xl leading-[1]">
                  82.1
                </h4>
                <p className="text-info uppercase text-xl font-bold leading-[1]">
                  Win Ratio
                </p>
              </div>
            </div>
          </div>
          <div className="relative max-w-[675px]  mt-5 sm:mt-10 isolate w-full">
            <img src="/about.jpg" className="w-full  max-h-[515px]" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-12 cursor-pointer h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>

            <div className="absolute top-0 w-full h-full left-0 z-10 bg-black opacity-60"></div>
          </div>
        </div>
      </div>
      <BottomHeader />
    </>
  );
};

export default About;
