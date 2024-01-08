import React, { FC } from "react";
import { LiaFireSolid } from "react-icons/lia";

interface titleProps {
  children: React.ReactNode;
}

const Title: FC<titleProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-3 w-full lg:pt-0 py-5">
      <LiaFireSolid className="text-yellow-400 text-4xl" />
      <p className="capitalize text-white font-primary text-2xl lg:min-w-[300px]">
        {children}
      </p>
      <hr className="opacity-20 w-full" />
    </div>
  );
};

export default Title;
