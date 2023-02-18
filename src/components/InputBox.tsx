type Props = {
  label: string;
  inputType: string;
  name: string;
  placeholder: string;
  value: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBox = ({
  label,
  inputType,
  name,
  placeholder,
  value,
  handler,
}: Props) => {
  return (
    <div className="flex justify-start w-full items-start flex-col gap-2">
      <label
        htmlFor={label}
        className="text-white uppercase font-medium text-2xl"
      >
        {label}
      </label>
      <input
        onChange={handler}
        type={inputType}
        value={value}
        id={label}
        name={name}
        placeholder={placeholder}
        className="w-full h-[50px] pl-3 bg-transparent border border-secondary text-white placeholder:text-white rounded-md text-lg font-medium focus:border-primary transition-all duration-300 outline-none border-solid"
      />
    </div>
  );
};

export default InputBox;
