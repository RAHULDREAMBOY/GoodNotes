import React from "react";
import { getInitials } from "../../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 font-medium bg-slate-100">
        {getInitials("Robert Baratheon")}
      </div>
      <div>
        <p className="text-sm font-medium">Robert </p>
      </div>
      <button
        className="text-sm bg-red-500 px-2  py-1 rounded-md text-white hover:opacity-80"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileInfo;
