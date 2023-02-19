import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarDropDown from "../components/NavbarDropDown";

const BottomHeader = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="fixed w-full flex justify-center items-center bottom-0 left-0 bg-dark h-[100px]">
      <div className={`flex h-full justify-between items-center w-full `}>
        <img
          src="/logo.png"
          className={`w-[200px] absolute bottom-5 object-contain ${
            headerToggle
              ? "-translate-y-3 opacity-0"
              : "translate-y-0 opacity-100"
          } transition-all duration-300`}
          alt=""
        />
        <nav
          className={`flex h-full justify-start items-center pl-[250px] gap-16 ${
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
        <div className="flex justify-center items-center gap-8">
          <AnimatePresence mode="wait">
            {headerToggle ? (
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 12, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                key={"bottom-items1"}
                className="flex justify-start items-center gap-8"
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
                  className="w-9 h-9"
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
                  className="w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                transition={{ duration: 0.3, ease: "easeInOut" }}
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                key="bottom-items"
                className="flex justify-start items-center gap-8"
              >
                <div className="relative h-[80px] w-[50px] flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primary absolute top-0 right-0 text-xs"
                  />
                  <img
                    src="/thumbs-up.png"
                    alt=""
                    className="object-contain w-[45px]"
                  />
                </div>
                <div className="relative h-[80px] w-[50px] flex justify-center items-center">
                  <p className="text-primary absolute top-0 right-0 text-base font-medium leading-[1]">
                    2
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-9 h-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
          {/* //header toggle icon  */}
          <div
            onClick={() => setHeaderToggle((prev) => !prev)}
            className="cursor-pointer w-[100px] aspect-square bg-primary flex justify-center items-center flex-col "
          >
            <div className="w-[28px] relative h-[24px]">
              <div
                className={`bg-dark h-[4px] w-full ${
                  headerToggle ? "top-[10px] rotate-45" : "top-[0px] rotate-0"
                }  absolute transition-all duration-300`}
              ></div>
              <div
                className={`bg-dark h-[4px] w-full ${
                  headerToggle ? "opacity-0" : "opacity-100"
                } top-[10px] absolute transition-all duration-300`}
              ></div>
              <div
                className={`bg-dark h-[4px] w-full  ${
                  headerToggle ? "top-[10px] -rotate-45" : "top-[20px] rotate-0"
                } absolute  transition-all duration-300`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
