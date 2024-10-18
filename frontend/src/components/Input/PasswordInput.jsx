import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShownPassword, setIsShownPassword] = useState(false);

  const togglePassword = () => {
    setIsShownPassword(!isShownPassword);
  };
  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        type={isShownPassword ? "text" : "password"}
        value={value}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
        onChange={onChange}
        placeholder={placeholder || "Password"}
      />
      {isShownPassword ? (
        <FaRegEye
          size={22}
          className="text-primary cursor-pointer"
          onClick={() => togglePassword()}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-slate-400 cursor-pointer"
          onClick={() => togglePassword()}
        />
      )}
    </div>
  );
};

export default PasswordInput;
