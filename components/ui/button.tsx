import Link from "next/link";
import React, { FC } from "react";

type typeButton = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type: typeButton;
  href: string;
}

const Button: FC<ButtonProps> = ({ children, className, type, href }) => {
  return (
    <Link
      href={href}
      className={`${
        type === "primary" ? "bg-primary" : "bg-transparent border-white border"
      } text-white relative rounded-3xl uppercase text-sm flex items-center justify-center gap-4 h-[50px] w-full max-w-[200px]`}
    >
      {children}
    </Link>
  );
};

export default Button;
