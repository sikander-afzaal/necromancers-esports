import {
  faDiscord,
  faFacebookF,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import InputBox from "../../components/InputBox";
import BottomHeader from "../../layout/BottomHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex pt-[70px] sm:pt-0 sm:pb-[50px] lg:flex-row flex-col-reverse gap-8 lg:gap-0 w-full justify-start items-start">
        <div className="w-full lg:sticky flex justify-start items-start top-0 lg:min-h-screen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.0945291570047!2d-73.97949619999999!3d40.75786635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fedd6dd4e1%3A0xa800943585f6e146!2sDiamond%20District%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1676738655819!5m2!1sen!2s"
            loading="lazy"
            className="w-full aspect-square lg:h-screen lg:max-h-none lg:aspect-auto max-h-[500px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex min-h-screen px-5 sm:px-10 xl:px-[70px] 2xl:px-[120px] py-8 lg:py-[95px] justify-start items-start flex-col gap-5 w-full">
          <h2 className="text-[2.5rem] lg:text-[4rem] mb-[30px] lg:mb-[70px] uppercase font-bold text-tertiary">
            Contact Us
          </h2>
          <div className="flex justify-start items-start flex-col w-full gap-7 lg:gap-8">
            <h3 className="text-tertiary uppercase font-bold text-[1.75rem]">
              Contact Info
            </h3>
            <p className="text-tertiary font-normal">
              If you have any questions, just send us and email and don’t forget
              to follow and like all our social accounts to keep updated!
            </p>
            <a
              className="flex justify-start items-start flex-col gap-0  text-tertiary uppercase font-bold text-base hover:opacity-50 transition-all duration-300"
              href="mailto:INQUIRIES@NECROMANCERS.COM"
            >
              <span className="text-info text-[0.875rem] leading-[0] mb-1">
                General Inquiries
              </span>
              <span>
                INQUIRIES<span className="text-primary">@</span>NECROMANCERS.COM
              </span>
            </a>
            <div className="flex justify-start items-center gap-2">
              <a
                href="#"
                target={"blank"}
                className="w-10 text-white bg-[#224bc0] h-10 flex justify-center items-center transition-all duration-300 hover:opacity-50"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#"
                target={"blank"}
                className="w-10 h-10 text-white bg-[#09aafe] flex justify-center items-center transition-all duration-300 hover:opacity-50"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                target={"blank"}
                className="w-10 text-white bg-[#5e22e4] h-10 flex justify-center items-center transition-all duration-300 hover:opacity-50"
              >
                <FontAwesomeIcon icon={faTwitch} />
              </a>
              <a
                href="#"
                target={"blank"}
                className="w-10 h-10 text-white bg-[#7289da] flex justify-center items-center transition-all duration-300 hover:opacity-50"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </div>
          <div className="flex justify-start mt-[40px] lg:mt-[60px] items-start flex-col w-full gap-7 lg:gap-8">
            <h3 className="text-tertiary leading-[1] uppercase font-bold text-[1.75rem]">
              JOIN OUR TEAM
            </h3>
            <p className="text-tertiary font-normal">
              We’re always looking for new talent to join our teams. If you
              wanna join us, just send us and email and we’ll get back to you!
            </p>
            <a
              className="flex justify-start items-start flex-col gap-0  text-tertiary uppercase font-bold text-base hover:opacity-50 transition-all duration-300"
              href="mailto:MP-RECRUIT@NECROMANCERS.COM"
            >
              <span className="text-info text-[0.875rem] leading-[0] mb-1">
                MAX PARKER - RECRUITER
              </span>
              <span>
                MP-RECRUIT<span className="text-primary">@</span>
                NECROMANCERS.COM
              </span>
            </a>
            <a
              className="flex justify-start items-start flex-col gap-0  text-tertiary uppercase font-bold text-base hover:opacity-50 transition-all duration-300"
              href="mailto:PARTNERS@NECROMANCERS.COM"
            >
              <span className="text-info text-[0.875rem] leading-[0] mb-1">
                BE OUR PARTNER!
              </span>
              <span>
                PARTNERS<span className="text-primary">@</span>NECROMANCERS.COM
              </span>
            </a>
          </div>
          <form
            onSubmit={submitHandler}
            className="w-full  flex justify-start mt-[40px] lg:mt-[60px] items-start flex-col gap-8"
          >
            <h3 className="text-tertiary font-bold uppercase text-[1.7rem] sm:text-[2.875rem]">
              Send us a message
            </h3>
            <div className="flex sm:flex-row flex-col justify-center items-center w-full gap-8 sm:gap-5">
              <InputBox
                inputType="text"
                name="name"
                handler={handler}
                value={formData.name}
                placeholder="Your Name"
              />
              <InputBox
                inputType="email"
                name="email"
                handler={handler}
                value={formData.email}
                placeholder="Your Email"
              />
            </div>
            <div className="flex justify-start w-full items-start flex-col gap-2">
              <textarea
                name="message"
                placeholder="Your Message"
                onChange={handler}
                className="w-full  pt-3 resize-none h-[163px]  bg-transparent border-b border-[#dfe0e5] text-tertiary placeholder:text-[#dfe0e5]  text-xl font-medium focus:border-primary transition-all duration-300 outline-none border-solid"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#5e627e]  hover:bg-[#a3ff12] transition-all duration-300 border-none self-end mt-[20px] cursor-pointer text-white uppercase text-xl hover:text-tertiary  font-bold h-[56px] w-full max-w-[216px] "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <BottomHeader />
    </>
  );
};

export default Contact;
