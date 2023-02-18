import { useState } from "react";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavbarDropDown from "../components/NavbarDropDown";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className="w-[90%] mx-auto justify-between lg:justify-center mt-[30px] items-center flex">
      {headerToggle && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-[80]"></div>
      )}
      <Link to="/">
        <img
          src="/logo.png"
          className="object-contain w-full max-w-[80px] lg:hidden block"
          alt=""
        />
      </Link>
      <nav
        className={`flex justify-start pb-[3rem] pt-[6rem] overflow-y-auto lg:overflow-visible h-screen w-full max-w-[500px] lg:w-auto lg:max-w-none lg:h-auto lg:p-0 px-[2rem] lg:justify-center lg:static fixed z-[80] items-center sm:items-start lg:items-center gap-8 lg:gap-12 lg:flex-row flex-col transition-all duration-1000 top-0 lg:bg-transparent bg-dark ${
          headerToggle ? "right-0" : "-right-[700px]"
        }`}
      >
        <Link
          to="/"
          className="uppercase text-lg lg:text-base lg:h-[80px] flex justify-center items-center font-bold text-white hover:text-primary transition-all duration-300 leading-[1]"
        >
          Home
        </Link>
        <NavbarDropDown
          headerToggle={setHeaderToggle}
          text="Contact"
          dropItems={[
            { name: "Contact", link: "/contact" },
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
          ]}
        />
        <NavbarDropDown
          headerToggle={setHeaderToggle}
          text="Matches"
          dropItems={[
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
          ]}
        />
        <img
          src="/logo.png"
          className="object-contain w-full max-w-[200px] lg:block hidden"
          alt=""
        />
        <NavbarDropDown
          headerToggle={setHeaderToggle}
          text="News"
          dropItems={[
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
          ]}
        />
        <NavbarDropDown
          headerToggle={setHeaderToggle}
          text="Features"
          dropItems={[
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
          ]}
        />
        <NavbarDropDown
          headerToggle={setHeaderToggle}
          text="Shop"
          dropItems={[
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
            { name: "Team Selection", link: "" },
          ]}
          last
        />
      </nav>
      <FontAwesomeIcon
        onClick={() => setHeaderToggle((prev) => !prev)}
        className="text-white relative z-[90] text-2xl cursor-pointer lg:hidden block"
        icon={headerToggle ? faXmark : faBars}
      />
    </header>
  );
};

export default Header;
