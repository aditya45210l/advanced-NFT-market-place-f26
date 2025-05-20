import { ChangeEvent } from "react";

const InputL = ({
  lable,
  placeholder,
  type,
  value,
  Onchange,
}: {
  lable: string;
  placeholder: string;
  type?: string;
  value?: string;
  Onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-violet-600 font-medium text-sm">{lable}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={Onchange}
        className="bg-white py-2 px-3 border border-zinc-300 placeholder:text-zinc-500 text-zinc-900 shadow-xs rounded-lg focus:ring-[4px] focus:ring-violet-400/15 focus:outline-none"
      />

      {/* taking token id as a input*/}
    </div>
  );
};
export default InputL;
