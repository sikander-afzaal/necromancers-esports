import { useInView } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import BottomHeader from "../../layout/BottomHeader";

const About = () => {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container);
  const [matchesVal, setMatchesVal] = useState(0);
  const [trophies, setTrophies] = useState(0);
  const [win, setWin] = useState(0);
  const layer1 = useRef<HTMLDivElement>(null);
  const layer2 = useRef<HTMLDivElement>(null);
  const layer3 = useRef<HTMLDivElement>(null);
  const layer4 = useRef<HTMLDivElement>(null);
  const layer5 = useRef<HTMLDivElement>(null);
  const layer6 = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  // ---gsap refs ---------------------------------------------
  const heading = useRef<HTMLDivElement>(null);
  const mainCont = useRef<HTMLDivElement>(null);
  const mapImage = useRef<HTMLDivElement>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const whyCont1 = useRef<HTMLDivElement>(null);
  const whyCont2 = useRef<HTMLDivElement>(null);
  const whyCont3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!layer1.current) return;
      layer1.current.style.opacity = "1";
      if (!layer2.current) return;
      layer2.current.style.opacity = "1";
      if (!layer3.current) return;
      layer3.current.style.opacity = "1";
      if (!layer4.current) return;
      layer4.current.style.opacity = "1";
      if (!layer5.current) return;
      layer5.current.style.opacity = "1";
      if (!layer6.current) return;
      layer6.current.style.opacity = "1";
      if (!img.current) return;
      img.current.style.opacity = "1";
      img.current.style.transform = "scale(1) translate(-50%,-50%)";
    }, 700);

    return () => {
      if (!layer1.current) return;
      layer1.current.style.opacity = "0";
      if (!layer2.current) return;
      layer2.current.style.opacity = "0";
      if (!layer3.current) return;
      layer3.current.style.opacity = "0";
      if (!layer4.current) return;
      layer4.current.style.opacity = "0";
      if (!layer5.current) return;
      layer5.current.style.opacity = "0";
      if (!layer6.current) return;
      layer6.current.style.opacity = "0";
      if (!img.current) return;
      img.current.style.opacity = "0";
      img.current.style.transform = "scale(1.2) translate(-50%,-50%)";
    };
  }, []);
  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      setMatchesVal((prev) => {
        return (prev += 20);
      });
    }, 20);
    if (matchesVal >= 980) {
      clearTimeout(timeout);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [matchesVal, isInView]);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      setTrophies((prev) => {
        return (prev += 2);
      });
    }, 20);
    if (trophies >= 34) {
      clearTimeout(timeout);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [trophies, isInView]);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      setWin((prev) => {
        return (prev += 0.5);
      });
    }, 5);
    if (win >= 82.5) {
      clearTimeout(timeout);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [win, isInView]);

  // ---gsap --------------------------------------------------------------
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const time2 = gsap.timeline({
        scrollTrigger: {
          trigger: mainCont.current,
          start: window.innerWidth > 640 ? "top top" : "top 100px",
          end:
            window.innerWidth > 1024
              ? `+=${window.innerHeight * 0.7}px`
              : `+=${window.innerHeight * 0.4}px`,
          scrub: 2,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        },
      });
      time2.to(heading.current, { marginBottom: 0 });
    }, heading);
    const contextMap = gsap.context(() => {
      gsap.to(mapImage.current, {
        scrollTrigger: {
          trigger: mapContainer.current,
          start: "top 70%",
          end: window.innerWidth > 640 ? "+=800px" : "+=300px",
          scrub: 2,
          // markers: true,
        },
        scale: 1,
      });
    }, mapImage);
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 640px)", () => {
      const contextWhy = gsap.context(() => {
        const timeline = gsap.timeline({
          defaults: { duration: 1 },
          scrollTrigger: {
            trigger: mapContainer.current,
            start: "bottom 40%",
            end: "bottom top",
            scrub: 2,
            // markers: true,
          },
        });
        timeline
          .fromTo(
            whyCont1.current,
            { x: -300, opacity: 0 },
            { x: 0, opacity: 1 }
          )
          .fromTo(
            whyCont2.current,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1 }
          )
          .fromTo(
            whyCont3.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1 }
          );
      }, mapImage);
    });
    return () => {
      contextMap.revert();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="flex lg:flex-row flex-col sm:pb-[60px] justify-start items-start  w-full">
        <div className="flex mt-[60px] sm:mt-0 overflow-hidden relative lg:sticky top-0 bg-bodyBg aspect-square  max-h-[700px] lg:max-h-none lg:h-screen bg-cover bg-center justify-start items-center w-full lg:w-[calc(100%_-_206px)] 1440:w-[68.175%] ">
          <img
            ref={img}
            src="/logo.png"
            className="w-[60%] absolute object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[0.5s] ease delay-[0.4s] z-10 opacity-0 scale-[1.2]"
            alt=""
          />
          {/* layer 1 ------------------------------------ */}
          <div
            ref={layer1}
            className="opacity-0 bg-aboutLayer1 bg-[#487500] absolute left-[53%] bottom-0 w-[49%] h-[73%] -skew-x-[20deg] -skew-y-[20deg] -translate-x-1/2 transition-all duration-[0.8s] ease-layers"
          ></div>
          {/* layer 2 ------------------------------------ */}
          <div
            ref={layer2}
            className="opacity-0 bg-aboutLayer2 bg-[#7dcd00] absolute left-[43%] bottom-0 w-[49%] h-[65%] -skew-x-[20deg] -skew-y-[20deg] -translate-x-1/2 transition-all duration-[0.8s] ease-layers"
          ></div>
          {/* layer 3 ------------------------------------ */}
          <div
            ref={layer3}
            className="opacity-0 bg-aboutLayer3 overflow-hidden bg-[#85da00] absolute left-[55%] bottom-0 w-[42%] h-full -skew-x-[20deg] -skew-y-[20deg] -translate-x-1/2 transition-all duration-[0.8s] ease-layers delay-[0.15s]"
          >
            <div className="absolute right-1/2 top-0 w-1/2 bottom-0 bg-[#ffffff66] mix-blend-overlay"></div>
            <div className="absolute left-0 top-0 bottom-0 bg-hexagon -right-1/2 skew-x-[20deg] skew-y-[20deg] bg-no-repeat bg-center mix-blend-overlay"></div>
            <div className="absolute left-1/2 top-0 w-[2px] h-[25%] bg-[#f3ff38]"></div>
          </div>
          {/* layer 4 ------------------------------------ */}
          <div
            ref={layer4}
            className="opacity-0  bg-[#f3ff38] absolute left-[89%] top-[4%] w-[2px] h-[42%] -skew-x-[20deg] -skew-y-[20deg] -translate-x-1/2 transition-all duration-[0.8s] ease-layers delay-[0.15s]"
          ></div>
          {/* layer 5 ------------------------------------ */}
          <div
            ref={layer5}
            className="opacity-0  bg-[#f3ff38] absolute left-[11%] bottom-0 w-[2px] h-[42%] -skew-x-[20deg] -skew-y-[20deg] -translate-x-1/2 transition-all duration-[0.8s] ease-layers delay-[0.15s]"
          ></div>
          {/* layer 6 ------------------------------------ */}
          <div
            ref={layer6}
            className="opacity-0  bg-transparent bg-aboutLayer6 bg-[32px__32px] mix-blend-overlay absolute left-0 bottom-[13%]  w-[58%] h-[120px] clip "
          ></div>
        </div>
        <div className="flex pb-[40px] sm:pb-[95px] w-full px-5 sm:px-[50px] xl:px-[90px] 2xl:px-[120px] justify-start items-start flex-col gap-5 sm:gap-10">
          <div ref={mainCont} className="w-full">
            <h2
              ref={heading}
              className=" mb-[40vh] lg:mb-[70vh]  mt-5 w-full leading-[1]  text-center text-[4rem] xl:text-[7rem] uppercase font-bold text-tertiary"
            >
              About Us
            </h2>
          </div>

          <p className="text-tertiary -mt-8 text-xl xl:text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim en veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip.
          </p>
          {/* //map ------------ */}
          <div
            ref={mapContainer}
            className="relative sm:my-0  my-6 w-full max-w-[920px] isolate pb-[53.2%]"
          >
            <div
              ref={mapImage}
              className="absolute scale-0 bg-map bg-center bg-contain bg-no-repeat opacity-40 left-0 top-0 w-full h-full -z-10"
            ></div>
            <div className="absolute flex justify-start gap-2 bottom-[58%] left-[26%] items-start flex-col  z-10">
              <div className="flex justify-start items-center gap-2">
                <img
                  src="/logo.png"
                  className="object-contain w-[22px] sm:w-[32px]"
                  alt=""
                />
                <div className="flex justify-start items-start flex-col">
                  <p className="uppercase text-tertiary text-sm sm:text-xl font-bold leading-[1]">
                    NECROMANCERS
                  </p>
                  <p className="uppercase text-info text-[10px] sm:text-sm font-bold leading-[1]">
                    United States
                  </p>
                </div>
              </div>
              <div className="relative w-[20px] sm:w-[30px] aspect-square rounded-full bg-tertiary flex justify-center items-center">
                <div className="bg-primary w-[8px] sm:w-[12px] aspect-square rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex justify-start gap-2 bottom-[25%] right-[12%] items-end flex-col  z-10">
              <div className="flex justify-start items-center gap-2">
                <div className="flex justify-start items-end flex-col">
                  <p className="uppercase text-tertiary text-sm sm:text-xl font-bold leading-[1]">
                    NECROMANCERS
                  </p>
                  <p className="uppercase text-info text-[10px] sm:text-sm font-bold leading-[1]">
                    Australia (SOON!)
                  </p>
                </div>
                <img
                  src="/logo.png"
                  className="object-contain w-[22px] sm:w-[32px]"
                  alt=""
                />
              </div>
              <div className="relative w-[20px] sm:w-[30px] aspect-square rounded-full bg-tertiary flex justify-center items-center">
                <div className="bg-primary w-[8px] sm:w-[12px] aspect-square rounded-full"></div>
              </div>
            </div>
          </div>
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
          <div
            ref={container}
            className="flex sm:flex-row flex-col justify-start gap-6 sm:gap-16 xl:gap-28 items-start sm:items-center min-w-full"
          >
            <div
              ref={whyCont1}
              className="flex justify-start items-center gap-5"
            >
              <img
                src="/controller-green.svg"
                className="w-[30px] object-contain aspect-square"
                alt=""
              />
              <div className="flex items-start flex-col justify-start gap-1">
                <h4 className="text-tertiary font-bold text-xl leading-[1]">
                  {matchesVal}
                </h4>
                <p className="text-info uppercase text-xl font-bold leading-[1]">
                  MATCHES
                </p>
              </div>
            </div>
            <div
              ref={whyCont2}
              className="flex justify-start items-center gap-5"
            >
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
                  {trophies}
                </h4>
                <p className="text-info uppercase text-xl font-bold leading-[1]">
                  Trophies
                </p>
              </div>
            </div>
            <div
              ref={whyCont3}
              className="flex justify-start items-center gap-5"
            >
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
                  {win}
                </h4>
                <p className="text-info uppercase text-xl font-bold leading-[1]">
                  Win Ratio
                </p>
              </div>
            </div>
          </div>
          <div className="relative   mt-5 sm:mt-10 isolate w-full">
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
