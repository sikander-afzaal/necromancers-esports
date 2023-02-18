type Props = {
  inputType: string;
  name: string;
  placeholder: string;
  value: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBox = ({ inputType, name, placeholder, value, handler }: Props) => {
  return (
    <div className="flex justify-start w-full items-start flex-col gap-2">
      <input
        onChange={handler}
        type={inputType}
        value={value}
        name={name}
        placeholder={placeholder}
        className="w-full pb-[12px]  bg-transparent border-b border-[#dfe0e5] text-tertiary placeholder:text-[#dfe0e5]  text-xl font-medium focus:border-primary transition-all duration-300 outline-none border-solid"
      />
    </div>
  );
};

export default InputBox;
