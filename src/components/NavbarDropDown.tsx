import { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type dropItems = {
  name: string;
  link: string;
};

type Props = {
  text: string;
  dropItems: dropItems[];
  last?: boolean;
  headerToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarDropDown = ({ text, dropItems, last, headerToggle }: Props) => {
  const [activeDrop, setActiveDrop] = useState(false);
  return (
    <div className="flex  relative w-full flex-col justify-start lg:min-h-0 min-h-max lg:h-[80px] items-center sm:items-start">
      <button
        onMouseEnter={() => {
          if (window.innerWidth <= 1024) return;
          setActiveDrop(true);
        }}
        onMouseLeave={() => {
          if (window.innerWidth <= 1024) return;
          setActiveDrop(false);
        }}
        onClick={() => {
          setActiveDrop((prev) => !prev);
        }}
        className={`uppercase leading-[1]  text-lg lg:text-base h-auto lg:h-full flex justify-center gap-2 items-center font-bold  hover:text-primary transition-all duration-300 ${
          activeDrop ? "text-primary" : "text-white"
        }`}
      >
        {text}{" "}
        <FontAwesomeIcon
          icon={activeDrop ? faMinus : faPlus}
          className="text-primary w-[10px] pb-1"
        />
      </button>
      <div
        onMouseEnter={() => {
          if (window.innerWidth <= 1024) return;
          setActiveDrop(true);
        }}
        onMouseLeave={() => {
          if (window.innerWidth <= 1024) return;
          setActiveDrop(false);
        }}
        className={`w-full lg:w-[280px]  flex justify-start items-start  overflow-hidden lg:overflow-visible  ${
          activeDrop
            ? "max-h-[2000px] lg:max-h-none lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto"
            : "max-h-0 lg:max-h-none lg:pointer-events-none lg:opacity-0 lg:translate-y-[100px]"
        } transition-all duration-700 lg:duration-300 z-[100] static lg:absolute top-[100%] ${
          last ? "lg:right-0" : "lg:-left-5"
        }  `}
      >
        <div
          className={`flex justify-start w-full items-center sm:items-start flex-col bg-dark `}
        >
          {dropItems.map((item, index) => {
            return (
              <Link
                onClick={() => {
                  headerToggle(false);
                  setActiveDrop(false);
                }}
                key={index + item.name}
                to={item.link}
                className="flex justify-center sm:justify-start items-center lg:px-[34px] min-h-[55px] lg:min-h-[70px] border-b-[#242633] text-sm font-bold border-solid border-b-2 text-white hover:text-primary transition-all duration-200 uppercase w-full"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarDropDown;
