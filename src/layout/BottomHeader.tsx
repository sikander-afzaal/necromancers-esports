import {
  faChevronLeft,
  faChevronRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebookF,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarDropDown from "../components/NavbarDropDown";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type linkTypes = {
  name: string;
  url: string;
};

type MenuAccordianMobileProps = {
  btnText: string;
  links: linkTypes[];
  setHeader: React.Dispatch<React.SetStateAction<boolean>>;
};
type DropDownDesktopProps = {
  headerToggle: boolean;
};

const BottomHeader = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [togglePagesMenu, setTogglePagesMenu] = useState(false);
  const [toggleSocialMenu, setToggleSocialMenu] = useState(false);
  const [toggleContactMenu, setToggleContactMenu] = useState(false);
  const [togglePartnerMenu, setTogglePartnerMenu] = useState(false);
  return (
    <>
      <div className="fixed w-full flex justify-center items-center bottom-full translate-y-full sm:translate-y-0 z-[91] sm:bottom-0 left-0 bg-dark h-[72px] mid:h-[100px]">
        <div
          className={`flex h-full justify-end mid:justify-between items-center w-full `}
        >
          <Link className="left-3 absolute -bottom-3 sm:bottom-5" to={"/"}>
            <img
              src="/logo.png"
              className={`w-[80px] sm:w-[100px] mid:w-[130px] 2xl:w-[200px] object-contain ${
                headerToggle
                  ? "-translate-y-3 opacity-0"
                  : "translate-y-0 opacity-100"
              } transition-all duration-300`}
              alt=""
            />
          </Link>
          <nav
            className={`hidden mid:flex h-full justify-start items-center pl-[150px] 2xl:pl-[250px] gap-10 2xl:gap-16 ${
              headerToggle
                ? "-translate-y-3 opacity-0"
                : "translate-y-0 opacity-100"
            } transition-all duration-300`}
          >
            <Link
              to="/"
              className="uppercase text-lg lg:text-base h-full flex justify-center items-center font-bold text-white hover:text-primary transition-all duration-300 leading-[1]"
            >
              Home
            </Link>
            <NavbarDropDown
              top
              text="Contact"
              dropItems={[
                { name: "Contact", link: "/contact" },
                { name: "Team Selection", link: "" },
                { name: "Team Selection", link: "" },
                { name: "Team Selection", link: "" },
              ]}
            />
            <NavbarDropDown
              top
              text="Matches"
              dropItems={[
                { name: "Contact", link: "/contact" },
                { name: "Team Selection", link: "" },
                { name: "Team Selection", link: "" },
                { name: "Team Selection", link: "" },
              ]}
            />
            <NavbarDropDown
              top
              text="News"
              dropItems={[
                { name: "Contact", link: "/contact" },
                { name: "Team Selection", link: "" },
                { name: "Team Selection", link: "" },
                { name: "Team Selection", link: "" },
              ]}
            />
            <NavbarDropDown
              top
              text="Features"
              dropItems={[
                { name: "Contact", link: "/contact" },
                { name: "Team Selection", link: "" },
                { name: "Team Selection", link: "" },
                { name: "Team Selection", link: "" },
              ]}
            />
            <NavbarDropDown
              top
              text="Shop"
              dropItems={[
                { name: "Contact", link: "/contact" },
                { name: "Team Selection", link: "" },
                { name: "Team Selection", link: "" },
                { name: "Team Selection", link: "" },
              ]}
            />
          </nav>
          <div className="flex justify-center items-center gap-3 mid:gap-8">
            <AnimatePresence mode="wait">
              {headerToggle && window.innerWidth > 640 ? (
                //desktop header part which animates in ------------------------------
                window.innerWidth > 640 && (
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 12, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    key={"bottom-items1"}
                    className="flex justify-start items-center gap-5 mid:gap-8"
                  >
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src="/user.jpg"
                        className="object-contain w-[40px] aspect-square"
                        alt=""
                      />
                      <div className="flex justify-start items-start flex-col gap-1">
                        <p className="text-[#5e627e] text-[0.75rem] font-bold uppercase leading-[1]">
                          HELLO!
                        </p>
                        <p className="text-white font-bold uppercase text-[.875rem] leading-[1]">
                          JAMES SPIEGEL
                        </p>
                      </div>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 mid:w-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className=" w-6 mid:w-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </motion.div>
                )
              ) : (
                <motion.div
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  initial={window.innerWidth > 640 && { y: -12, opacity: 0 }}
                  animate={window.innerWidth > 640 && { y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  key="bottom-items"
                  className="flex justify-start items-center gap-2 mid:gap-8"
                >
                  {/* //mobile header part which animates in--------------------  */}
                  {headerToggle && window.innerWidth < 640 && (
                    <motion.div
                      initial={{ y: -12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      key={"bottom-items1"}
                      className="flex justify-start items-center gap-5 mid:gap-8"
                    >
                      <img
                        src="/controller.svg"
                        className="w-6 object-contain"
                        alt=""
                      />
                    </motion.div>
                  )}

                  <div className="relative h-[60px] mid:h-[80px] w-[50px] hidden sm:flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="text-primary absolute top-1 right-0 text-xs"
                    />
                    <img
                      src="/thumbs-up.png"
                      alt=""
                      className="object-contain w-[24px] mid:w-[45px]"
                    />
                  </div>
                  <div className="relative h-[60px] mid:h-[80px] w-[50px] flex justify-center items-center">
                    <p className="text-primary absolute top-1 right-0 text-base font-medium leading-[1]">
                      2
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 mid:w-9 aspect-square"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-center items-center w-[50px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 mid:w-9 aspect-square"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {/* //header toggle icon  */}
            <div
              onClick={() => setHeaderToggle((prev) => !prev)}
              className="cursor-pointer w-[72px] mid:w-[100px] aspect-square bg-primary flex justify-center items-center flex-col "
            >
              <div className="w-[18px] mid:w-[28px] relative h-[14px] mid:h-[24px]">
                <div
                  className={`bg-dark h-[2px] mid:h-[4px] w-full ${
                    headerToggle
                      ? "top-[6px] mid:top-[10px] rotate-45"
                      : "top-[0px] rotate-0"
                  }  absolute transition-all duration-300`}
                ></div>
                <div
                  className={`bg-dark h-[2px] mid:h-[4px] w-full ${
                    headerToggle ? "opacity-0" : "opacity-100"
                  } top-[6px] mid:top-[10px] absolute transition-all duration-300`}
                ></div>
                <div
                  className={`bg-dark h-[2px] mid:h-[4px] w-full  ${
                    headerToggle
                      ? "top-[6px] mid:top-[10px] -rotate-45"
                      : "top-[12px] mid:top-[20px] rotate-0"
                  } absolute  transition-all duration-300`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //desktop menu --------------------- */}
      <div className="sm:block w-full hidden">
        <DropDownDesktop headerToggle={headerToggle} />
      </div>
      {/* //mobile drop down --------------------- */}
      <AnimatePresence mode="wait">
        {headerToggle && (
          <motion.div
            transition={{ duration: 0.3, ease: "easeInOut" }}
            key={"mobile-menu"}
            initial={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: -100, opacity: 0 }}
            className="flex sm:hidden justify-start items-start flex-col w-full h-screen top-0 left-0 fixed pt-[102px] bg-dark z-[90] overflow-y-auto"
          >
            {/* //main pages menu --------- */}
            <div className="flex min-h-max  flex-col justify-start items-center  bg-transparent w-full">
              <button
                onClick={() => setTogglePagesMenu((prev) => !prev)}
                className="flex min-h-[53px] justify-between items-center w-full py-4 px-6 border-b border-solid border-[#242633] uppercase text-white text-sm font-bold"
              >
                Main Links
                <FontAwesomeIcon
                  className="text-primary text-xs"
                  icon={togglePagesMenu ? faMinus : faPlus}
                />
              </button>
              <div
                className={`flex justify-start h-full w-full ${
                  togglePagesMenu ? "max-h-[90000px]" : "max-h-0"
                }  items-start flex-col transition-all duration-1000`}
              >
                <MenuAccordianMobile
                  btnText="Main Pages"
                  links={[
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                  ]}
                  setHeader={setHeaderToggle}
                />
                <MenuAccordianMobile
                  btnText="Team Pages"
                  links={[
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                  ]}
                  setHeader={setHeaderToggle}
                />
                <MenuAccordianMobile
                  btnText="Player Pages"
                  links={[
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                  ]}
                  setHeader={setHeaderToggle}
                />
                <MenuAccordianMobile
                  btnText="Match Pages"
                  links={[
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                  ]}
                  setHeader={setHeaderToggle}
                />
                <MenuAccordianMobile
                  btnText="Shop Pages"
                  links={[
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                    { name: "Landing Page", url: "#" },
                  ]}
                  setHeader={setHeaderToggle}
                />
              </div>
            </div>
            {/* // social links menu --------- */}
            <div className="flex min-h-max flex-col h-max justify-start items-center  bg-transparent w-full">
              <button
                onClick={() => setToggleSocialMenu((prev) => !prev)}
                className="flex min-h-[53px] border-b border-solid border-[#242633] justify-between items-center bg-dark w-full py-4 px-6  uppercase text-white text-xs font-bold"
              >
                Social Links{" "}
                <FontAwesomeIcon
                  className="text-primary text-xs"
                  icon={toggleSocialMenu ? faMinus : faPlus}
                />
              </button>
              <div
                className={`flex w-full justify-start items-start min-h-max transition-all duration-1000 flex-col ${
                  toggleSocialMenu ? "max-h-[9000px]" : "max-h-0"
                }`}
              >
                <a
                  href="#"
                  target={"blank"}
                  className="flex justify-start gap-4 min-h-[53px] items-center bg-dark w-full py-4 px-6  uppercase text-white text-sm font-bold border-b border-solid border-[#242633]"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-sm text-[#224bc0]"
                  />
                  Facebook
                </a>
                <a
                  href="#"
                  target={"blank"}
                  className="flex justify-start min-h-[53px] gap-4 items-center bg-dark w-full py-4 px-6  uppercase text-white text-sm font-bold border-b border-solid border-[#242633]"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-sm text-[#09aafe]"
                  />
                  Twitter
                </a>
                <a
                  href="#"
                  target={"blank"}
                  className="flex justify-start min-h-[53px] gap-4 items-center bg-dark w-full py-4 px-6  uppercase text-white text-sm font-bold border-b border-solid border-[#242633]"
                >
                  <FontAwesomeIcon
                    icon={faTwitch}
                    className="text-sm text-[#5e22e4]"
                  />
                  Twitch
                </a>
                <a
                  href="#"
                  target={"blank"}
                  className="flex justify-start min-h-[53px] gap-4 items-center bg-dark w-full py-4 px-6  uppercase text-white text-sm font-bold border-b border-solid border-[#242633]"
                >
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className="text-sm text-[#7289da]"
                  />
                  Discord
                </a>
              </div>
            </div>
            {/* // contact menu --------- */}
            <div className="flex min-h-max  flex-col  justify-start items-center  bg-transparent w-full">
              <button
                onClick={() => setToggleContactMenu((prev) => !prev)}
                className="flex border-b min-h-[53px] border-solid border-[#242633] justify-between items-center bg-dark w-full py-4 px-6  uppercase text-white text-xs font-bold"
              >
                Get In Touch!{" "}
                <FontAwesomeIcon
                  className="text-primary text-xs"
                  icon={toggleContactMenu ? faMinus : faPlus}
                />
              </button>
              <div
                className={`flex w-full justify-start h-full items-start transition-all duration-1000 flex-col ${
                  toggleContactMenu ? "max-h-[9000px]" : "max-h-0"
                }`}
              >
                <a
                  className="flex justify-start min-h-[53px] border-b border-solid border-[#242633] py-4 px-6 items-start flex-col gap-0  text-white uppercase font-bold text-xs hover:opacity-50 transition-all duration-300 w-full"
                  href="mailto:MP-RECRUIT@NECROMANCERS.COM"
                >
                  <span className="text-secondary uppercase text-[0.675rem] leading-[0] mb-1">
                    Max parker - recruiter
                  </span>
                  <span>
                    MP-RECRUIT<span className="text-primary">@</span>
                    NECROMANCERS.COM
                  </span>
                </a>
                <a
                  className="flex justify-start min-h-[53px] border-b border-solid w-full border-[#242633] py-4 px-6 items-start flex-col gap-0  text-white uppercase font-bold text-xs hover:opacity-50 transition-all duration-300"
                  href="mailto:MP-RECRUIT@NECROMANCERS.COM"
                >
                  <span className="text-secondary uppercase text-[0.675rem] leading-[0] mb-1">
                    Max parker - recruiter
                  </span>
                  <span>
                    MP-RECRUIT<span className="text-primary">@</span>
                    NECROMANCERS.COM
                  </span>
                </a>
                <a
                  className="flex justify-start min-h-[53px] py-4 border-b border-solid border-[#242633] w-full px-6 items-start flex-col gap-0  text-white uppercase font-bold text-xs hover:opacity-50 transition-all duration-300"
                  href="mailto:MP-RECRUIT@NECROMANCERS.COM"
                >
                  <span className="text-secondary uppercase text-[0.675rem] leading-[0] mb-1">
                    Max parker - recruiter
                  </span>
                  <span>
                    MP-RECRUIT<span className="text-primary">@</span>
                    NECROMANCERS.COM
                  </span>
                </a>
              </div>
            </div>
            {/* // partners menu --------- */}
            <div className="flex min-h-max  flex-col justify-start items-center  bg-transparent w-full">
              <button
                onClick={() => setTogglePartnerMenu((prev) => !prev)}
                className="flex border-b min-h-[53px] border-solid border-[#242633] justify-between items-center bg-dark w-full py-4 px-6  uppercase text-white text-xs font-bold"
              >
                Our partners{" "}
                <FontAwesomeIcon
                  className="text-primary text-xs"
                  icon={togglePartnerMenu ? faMinus : faPlus}
                />
              </button>
              <div
                className={`flex bg-dark w-full overflow-hidden h-full justify-start items-start transition-all duration-1000 flex-col ${
                  togglePartnerMenu ? "max-h-[9000px]" : "max-h-0"
                }`}
              >
                <div className="w-full py-6 px-4">
                  <Splide
                    options={{
                      autoplay: true,
                      width: "100%",
                      gap: "0rem",
                      perPage: 1,
                      type: "loop",
                      arrows: true,
                      pagination: false,
                    }}
                    hasTrack={false}
                    aria-label="..."
                  >
                    <SplideTrack>
                      <SplideSlide>
                        <img className="mx-auto" src="/partner.png" alt="" />
                      </SplideSlide>
                    </SplideTrack>
                    <div className="splide__arrows w-full absolute top-1/2 -translate-y-1/2 left-0 flex justify-between items-center gap-2">
                      <button className="splide__arrow splide__arrow--prev static opacity-100 translate-y-0 bg-transparent">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-white text-xs"
                        />
                      </button>
                      <button className="splide__arrow splide__arrow--next static opacity-100 bg-transparent translate-y-0">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-white text-xs"
                        />
                      </button>
                    </div>
                  </Splide>
                </div>
              </div>
            </div>
            <button className="flex border-b min-h-[53px] border-solid border-[#242633] justify-between items-center bg-dark w-full py-4 px-6  uppercase text-white text-xs font-bold">
              Account Settings{" "}
            </button>
            <button className="flex border-b min-h-[53px] border-solid border-[#242633] justify-between items-center bg-dark w-full py-4 px-6  uppercase text-white text-xs font-bold">
              Logout{" "}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

//main menu Desktop
const DropDownDesktop = ({ headerToggle }: DropDownDesktopProps) => {
  const [selectedMenu, setSelectedMenu] = useState("");
  return (
    <AnimatePresence>
      {headerToggle && (
        <motion.div
          transition={{ duration: 0.5, ease: "easeInOut" }}
          key={"desktop-menu"}
          initial={{ translateY: 100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: 100, opacity: 0 }}
          className="z-[90] px-[20px] lg:px-[72px] flex justify-between items-start overflow-y-auto py-[72px] mid:py-[100px]  h-screen w-full fixed top-0 left-0 bg-dark"
        >
          {/* //desktop menu left side with animation -------------- */}
          <AnimatePresence mode="popLayout">
            {!selectedMenu ? (
              <motion.div
                transition={{ duration: 0.7, ease: "easeInOut" }}
                key={"main-menu"}
                initial={{
                  rotateY: 35,
                  opacity: 0,
                  translateZ: -200,
                  translateX: 100,
                  transformPerspective: 1500,
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                  translateZ: 0,
                  translateX: 0,
                  transformPerspective: 1500,
                  origin: "center",
                }}
                exit={{
                  rotateY: 35,
                  opacity: 0,
                  translateZ: -400,
                  translateX: 100,
                  transformPerspective: 1500,
                }}
                className="flex  justify-start items-start flex-col gap-6 w-full"
              >
                <p className="text-white uppercase bold text-[2.875rem] 2xl:text-[64px] hover:text-primary transition-all duration-300 cursor-pointer font-bold">
                  HOME
                </p>
                <p
                  onClick={() => setSelectedMenu("team")}
                  className="text-white uppercase bold text-[2.875rem] 2xl:text-[64px] hover:text-primary transition-all duration-300 cursor-pointer font-bold"
                >
                  Teams{" "}
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primary w-[25px] ml-2"
                  />
                </p>
                <p
                  onClick={() => setSelectedMenu("matches")}
                  className="text-white uppercase bold text-[2.875rem] 2xl:text-[64px] hover:text-primary transition-all duration-300 cursor-pointer font-bold"
                >
                  Matches{" "}
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primary w-[25px] ml-2"
                  />
                </p>
                <p className="text-white uppercase bold text-[2.875rem] 2xl:text-[64px] hover:text-primary transition-all duration-300 cursor-pointer font-bold">
                  News
                </p>
                <p
                  onClick={() => setSelectedMenu("features")}
                  className="text-white uppercase bold text-[2.875rem] 2xl:text-[64px] hover:text-primary transition-all duration-300 cursor-pointer font-bold"
                >
                  Features{" "}
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primary w-[25px] ml-2"
                  />
                </p>
                <p
                  onClick={() => setSelectedMenu("shop")}
                  className="text-white uppercase bold text-[2.875rem] 2xl:text-[64px] hover:text-primary transition-all duration-300 cursor-pointer font-bold"
                >
                  Shop{" "}
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primary w-[25px] ml-2"
                  />
                </p>
              </motion.div>
            ) : (
              <motion.div
                transition={{ duration: 0.7, ease: "easeInOut" }}
                key={"sub-menu-1"}
                initial={{
                  translateX: 200,
                  opacity: 0,
                }}
                animate={{
                  translateX: 0,
                  opacity: 1,
                }}
                exit={{
                  translateX: 200,
                  opacity: 0,
                }}
                className="flex justify-start items-start flex-col gap-6 w-full"
              >
                <p
                  onClick={() => setSelectedMenu("")}
                  className="text-secondary uppercase bold text-[2.875rem] 2xl:text-[64px] hover:text-white transition-all duration-300 cursor-pointer mb-10 flex justify-center items-center gap-4 font-bold"
                >
                  <FontAwesomeIcon className="text-4xl" icon={faChevronLeft} />{" "}
                  Back
                </p>
                <p className="text-white uppercase bold text-[1.375rem] hover:text-primary transition-all duration-300 cursor-pointer font-bold">
                  Team Selection{" "}
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primary w-[25px] ml-2"
                  />
                </p>
                <p className="text-white uppercase bold text-[1.375rem] hover:text-primary transition-all duration-300 cursor-pointer font-bold">
                  Matches{" "}
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primary w-[25px] ml-2"
                  />
                </p>
                <p className="text-white uppercase bold text-[1.375rem] hover:text-primary transition-all duration-300 cursor-pointer font-bold">
                  News
                </p>
                <p className="text-white uppercase bold text-[1.375rem] hover:text-primary transition-all duration-300 cursor-pointer font-bold">
                  Features{" "}
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primary w-[25px] ml-2"
                  />
                </p>
                <p className="text-white uppercase bold text-[1.375rem] hover:text-primary transition-all duration-300 cursor-pointer font-bold">
                  Shop{" "}
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primary w-[25px] ml-2"
                  />
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex max-w-[400px] lg:max-w-none justify-start items-start flex-col gap-20 w-full">
            {/* //join team and contact info section ------------------ */}
            <div className="flex lg:flex-row flex-col justify-start items-start gap-16">
              <div className="flex justify-start  items-start flex-col w-full gap-7 lg:gap-8">
                <h3 className="text-white leading-[1] uppercase font-bold text-[1.75rem]">
                  JOIN OUR TEAM
                </h3>
                <p className="text-[#c6cbea] font-normal">
                  We’re always looking for new talent to join our teams. If you
                  wanna join us, just send us and email and we’ll get back to
                  you!
                </p>
                <a
                  className="flex justify-start items-start flex-col gap-0  text-white uppercase font-bold text-base hover:opacity-50 transition-all duration-300"
                  href="mailto:MP-RECRUIT@NECROMANCERS.COM"
                >
                  <span className="text-secondary text-[0.875rem] leading-[0] mb-1">
                    MAX PARKER - RECRUITER
                  </span>
                  <span>
                    MP-RECRUIT<span className="text-primary">@</span>
                    NECROMANCERS.COM
                  </span>
                </a>
                <a
                  className="flex justify-start items-start flex-col gap-0  text-white uppercase font-bold text-base hover:opacity-50 transition-all duration-300"
                  href="mailto:PARTNERS@NECROMANCERS.COM"
                >
                  <span className="text-secondary text-[0.875rem] leading-[0] mb-1">
                    BE OUR PARTNER!
                  </span>
                  <span>
                    PARTNERS<span className="text-primary">@</span>
                    NECROMANCERS.COM
                  </span>
                </a>
              </div>
              <div className="flex justify-start items-start flex-col w-full gap-7 lg:gap-8">
                <h3 className="text-white uppercase font-bold leading-[1] text-[1.75rem]">
                  Contact Info
                </h3>
                <p className="text-[#c6cbea] font-normal">
                  If you have any questions, just send us and email and don’t
                  forget to follow and like all our social accounts to keep
                  updated!
                </p>
                <a
                  className="flex justify-start items-start flex-col gap-0  text-white uppercase font-bold text-base hover:opacity-50 transition-all duration-300"
                  href="mailto:INQUIRIES@NECROMANCERS.COM"
                >
                  <span className="text-secondary text-[0.875rem] leading-[0] mb-1">
                    General Inquiries
                  </span>
                  <span>
                    INQUIRIES<span className="text-primary">@</span>
                    NECROMANCERS.COM
                  </span>
                </a>
                <div className="flex justify-start items-center gap-5">
                  <a
                    href="#"
                    target={"blank"}
                    className=" text-primary  flex justify-center items-center transition-all duration-300 hover:opacity-50"
                  >
                    <FontAwesomeIcon className="text-xl" icon={faFacebookF} />
                  </a>
                  <a
                    href="#"
                    target={"blank"}
                    className=" text-primary  flex justify-center items-center transition-all duration-300 hover:opacity-50"
                  >
                    <FontAwesomeIcon className="text-xl" icon={faTwitter} />
                  </a>
                  <a
                    href="#"
                    target={"blank"}
                    className=" text-primary  flex justify-center items-center transition-all duration-300 hover:opacity-50"
                  >
                    <FontAwesomeIcon className="text-xl" icon={faTwitch} />
                  </a>
                  <a
                    href="#"
                    target={"blank"}
                    className=" text-primary  flex justify-center items-center transition-all duration-300 hover:opacity-50"
                  >
                    <FontAwesomeIcon className="text-xl" icon={faDiscord} />
                  </a>
                </div>
              </div>
            </div>
            {/* //partners --------------- */}
            <div className="w-full flex pb-5 justify-start items-start flex-col gap-10">
              <h3 className="text-white leading-[1] uppercase font-bold text-[1.75rem]">
                Our Partners
              </h3>

              <Splide
                options={{
                  autoplay: true,
                  width: "100%",
                  gap: "2rem",
                  perPage: 3,
                  type: "loop",
                  arrows: true,
                  pagination: false,
                  breakpoints: {
                    1024: {
                      perPage: 2,
                    },
                  },
                }}
                hasTrack={false}
                aria-label="..."
              >
                <SplideTrack>
                  <SplideSlide>
                    <img src="/partner.png" alt="" />
                  </SplideSlide>
                </SplideTrack>
                <div className="splide__arrows absolute bottom-[200%] left-[180px] flex justify-center items-center gap-2">
                  <button className="splide__arrow splide__arrow--prev static opacity-100 translate-y-0 bg-transparent">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-white"
                    />
                  </button>
                  <button className="splide__arrow splide__arrow--next static opacity-100 bg-transparent translate-y-0">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-white"
                    />
                  </button>
                </div>
              </Splide>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

//sub menu of main pages -------------
const MenuAccordianMobile = ({
  btnText,
  links,
  setHeader,
}: MenuAccordianMobileProps) => {
  const [toggleMainMenu, setToggleMainMenu] = useState(false);
  return (
    <div className="flex border-b border-solid border-[#242633] flex-col overflow-hidden justify-start items-center  bg-transparent w-full">
      <button
        onClick={() => setToggleMainMenu((prev) => !prev)}
        className="flex justify-between items-center bg-dark w-full py-4 px-6  uppercase text-white text-xs font-bold"
      >
        {btnText}{" "}
        <FontAwesomeIcon
          className="text-primary text-xs"
          icon={toggleMainMenu ? faMinus : faPlus}
        />
      </button>
      <div
        className={`flex w-full justify-start items-start transition-all duration-1000 flex-col ${
          toggleMainMenu ? "max-h-[9000px]" : "max-h-0"
        }`}
      >
        {links.map((elem, idx) => {
          return (
            <a
              onClick={() => setHeader(false)}
              className=" bg-dark w-full py-2 px-6 uppercase text-white text-[10px] font-bold"
              href={elem.url}
              key={idx + btnText}
            >
              {elem.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BottomHeader;
