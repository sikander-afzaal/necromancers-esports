import { useState } from "react";
import InputBox from "../../components/InputBox";

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
    <div className="flex w-[90%] mx-auto justify-start items-center flex-col">
      <h3 className="uppercase text-primary text-2xl sm:text-4xl lg:text-[42px] font-medium ">
        Need help
      </h3>
      <h2 className="uppercase text-white font-bold text-[50px] sm:text-[80px] lg:text-[124px] leading-[1] ">
        Contact Us
      </h2>
      <form
        onSubmit={submitHandler}
        className="w-full max-w-[500px] flex justify-start mt-10 items-center flex-col gap-8"
      >
        <InputBox
          inputType="text"
          name="name"
          handler={handler}
          value={formData.name}
          label="Name"
          placeholder="Enter your name here"
        />
        <InputBox
          inputType="email"
          name="email"
          handler={handler}
          value={formData.email}
          label="Email Address"
          placeholder="Enter your email here"
        />
        <div className="flex justify-start w-full items-start flex-col gap-2">
          <label
            htmlFor="msg"
            className="uppercase text-white font-medium text-2xl"
          >
            Message
          </label>
          <textarea
            id="msg"
            name="message"
            placeholder="Enter your message here"
            onChange={handler}
            className="w-full pt-3 resize-none h-[150px] pl-3 bg-transparent border border-secondary text-white placeholder:text-white rounded-md text-lg font-medium focus:border-primary transition-all duration-300 outline-none border-solid"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary border-none mt-[20px] cursor-pointer relative isolate text-tertiary uppercase text-[22px] font-bold h-[60px] w-full max-w-[200px] overflow-hidden group"
        >
          Send
          <span className="absolute transition-transform duration-[0.4s] translate-y-full group-hover:translate-y-0 delay-200 group-hover:duration-[0.6s] group-hover:delay-[0s] w-full h-full left-0 top-0 bg-[#90eb00] ease pointer-events-none -z-20"></span>
          <span className="absolute transition-transform duration-[0.6s]  w-full h-full left-0 top-0 bg-[#88de00] translate-y-full group-hover:translate-y-0 ease group-hover:duration-[0.4s] group-hover:delay-[0.2s]  pointer-events-none -z-10"></span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
