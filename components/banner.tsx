import React from "react";
import Button from "./ui/button";
import { FaPlay } from "react-icons/fa";

function Banner() {
  return (
    <div className="relative md:top-[-115px] lg:top-[-115px] top-0 h-[600px] flex flex-row items-center">
      <div className="bg-primary-banner bg-cover bg-center bg-fixed w-full h-full absolute"></div>
      <div className="w-full h-full absolute bg-gradient-to-r -from--darkbg to-gradient-1 via-gradient-2 to-gradient-3"></div>
      <div className="container mx-auto relative px-6 lg:px-16">
        <h2 className="font-secundary font-bold text-3xl text-white leading-none uppercase">
          Filmes online
        </h2>
        <h1 className="font-secundary font-bold text-7xl leading-none uppercase from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          The Flash
        </h1>
        <div className="max-w-[500px] leading-5 pt-4 pb-8">
          <p className="font-primary text-white text-sm ">
            Quando Barry usa seus superpoderes para viajar no tempo e mudar os
            eventos do passado. Mas quando tenta salvar sua família e acaba, sem
            querer, alterando o futuro, Barry fica preso em uma realidade na
            qual o General Zod está de volta, ameaçando colocar o mundo em
            risco, e não há super-heróis a quem recorrer.
          </p>
        </div>
        <Button type="primary" href="/">
          <FaPlay /> Trailer
        </Button>
      </div>
    </div>
  );
}

export default Banner;
