import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: IconDefinition;
  url: string;
  name: string;
  accName: string;
};

const GlitchSocialTab = ({ icon, url, name, accName }: Props) => {
  return (
    <a
      href={url}
      target="blank"
      className="flex justify-start cursor-pointer group items-center gap-4"
    >
      <div className="relative isolate">
        <FontAwesomeIcon
          icon={icon}
          className="text-[#f0f] group-hover:animate-glitch1 text-4xl absolute -z-20 left-0 top-0 opacity-80"
        />
        <FontAwesomeIcon
          icon={icon}
          className="text-[#0ff] text-4xl absolute group-hover:animate-glitch2 -z-10 left-0 top-0 opacity-80"
        />
        <FontAwesomeIcon icon={icon} className="text-primary text-4xl" />
      </div>
      <div className="flex justify-start items-start flex-col gap-1">
        <p className="text-white uppercase font-medium text-xs leading-[1]">
          {name}
        </p>
        <p className="text-white uppercase font-bold text-[26px] leading-[1]">
          {accName}
        </p>
      </div>
    </a>
  );
};

export default GlitchSocialTab;
