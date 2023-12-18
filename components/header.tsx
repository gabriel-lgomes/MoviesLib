"use client";

import Image from "next/image";
import Link from "next/link";
import Input from "./ui/input";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

function Header() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Movies",
      href: "/movies",
    },
    {
      name: "Series",
      href: "/series",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="md:relative lg:relative fixed z-50 top-0 w-full  px-6 py-8">
      <div className="container mx-auto lg:px-16 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Image
            src="/assets/images/logo.png"
            width={124}
            height={35}
            alt="Logo MoviesLib"
          />
          <ul className="lg:flex md:flex hidden gap-10">
            {navLinks.map(({ name, href }) => (
              <li key={name} className="text-gray-50 font-thin">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex lg:flex hidden items-center gap-6 transition-all">
          <Input
            icon={<IoIosSearch />}
            type="text"
            name="Search"
            required={true}
            placeholder="Search"
          />
          <ul>
            <li className="text-gray-50 font-thin flex items-center gap-5">
              <Link href="/login" className="text-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Foto usuário"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden lg:hidden flex items-center justify-between">
          <div className="text-gray-50 text-4xl">
            {showMenu ? (
              <IoMdClose
                className="transition-all"
                onClick={() => setShowMenu(false)}
              />
            ) : (
              <IoIosMenu
                className="transition-all"
                onClick={() => setShowMenu(true)}
              />
            )}
          </div>
          <div
            className={`fixed top-24 left-0 z-50 bg-black bg-opacity-75 w-screen h-full transition-opacity duration-300 ${
              showMenu ? `opacity-100` : `opacity-0 pointer-events-none`
            }`}
          >
            <div className="px-3 bg-black">
              <div className="flex items-center gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Foto usuário"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <p className="text-gray-50 text-xl">Olá, Gabriel!</p>
              </div>
            </div>
            <ul className="gap-10 text-center bg-black">
              {navLinks.map(({ name, href }) => (
                <li
                  key={name}
                  className=" border-b-white border-b text-gray-50 py-4 font-thin text-xl"
                >
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
            <div className="pb-10 pt-6 px-4 bg-black">
              <Input
                icon={<IoIosSearch />}
                type="text"
                name="Search"
                required={true}
                placeholder="Search"
                className="py-4 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
