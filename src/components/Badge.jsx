import { Mail } from "lucide-react";
import React from "react";

const Badge = ({ number }) => {
  return (
    <div>
      <div className=" relative w-[40px] mt-3">
        <Mail width={40} color="green" />
        <p className=" absolute -right-0 -top-2 text-red-500 rounded-full p-[2px] bg-blue-300 text-[10px] ">
          {number}
        </p>
      </div>
    </div>
  );
};

export default Badge;
