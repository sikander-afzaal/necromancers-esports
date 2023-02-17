import {
  faFacebookSquare,
  faTwitter,
  faTwitch,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import GlitchSocialTab from "../../components/GlitchSocialTab";

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
      <div className="flex justify-center items-center gap-12 lg:gap-16 lg:flex-row flex-col mt-16 lg:mt-28">
        <GlitchSocialTab
          name="Facebook"
          url="#"
          accName="NECROGAME"
          icon={faFacebookSquare}
        />
        <GlitchSocialTab
          name="Twitter"
          url="#"
          accName="Necrotwt"
          icon={faTwitter}
        />
        <GlitchSocialTab
          name="Twitch"
          url="#"
          accName="Necroplays"
          icon={faTwitch}
        />
        <GlitchSocialTab
          name="Discord"
          url="#"
          accName="Necrochat"
          icon={faDiscord}
        />
      </div>
    </div>
  );
};

export default Landing;
