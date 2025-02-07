import React, { InputHTMLAttributes } from "react";
import { Icons } from "../utils/icons";
import { motion } from "framer-motion";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  error: string;
  placeholder: string;
  showPassword?: boolean;
  togglePassword?: () => void;
}

const Input = ({
  label,
  value,
  error,
  placeholder,
  showPassword,
  togglePassword,
  ...props
}: Props) => {
  return (
    <div className="flex relative flex-col space-y-0">
      <label>{label}</label>
      <input
        className="border border-slate-700 rounded-sm w-full text-slate-800 px-4 py-2"
        value={value}
        placeholder={placeholder}
        {...props}
      />{" "}
      {props.name?.toLowerCase().includes("password") &&
        (showPassword ? (
          <Icons.eyeOff
            onClick={togglePassword}
            className="top-[40%] cursor-pointer z-10 text-[#b5aae3] w-10 pl-3 pr-3 h-9 absolute right-0"
          />
        ) : (
          <Icons.eye
            onClick={togglePassword}
            className="top-[40%] cursor-pointer z-10 text-[#b5aae3] w-10 pl-3 pr-3 h-9 absolute right-0"
          />
        ))}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-4 items-center text-[.7rem] text-red-600"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;
