import React from "react";
import Link from "next/link";

const Pesquisa = () => {
  return (
    <div>
      <div className="pt-6">
        <h1 className="font-bold my-4 text-2xl text-center">
          Críticas e sugestões
        </h1>
        <p className="text-center mb-6">
          O restaurante X sempre busca por atender melhor seus clientes. <br />
          Por isso, estamos sempre abertos a ouvir sua opinião.
        </p>
      </div>
      <div className="w-48 mx-auto">
        <label className="font-bold">Seu nome:</label>
        <input
          className="p-4 my-2 block shadow-lg bg-blue-100 rounded-lg"
          type="text"
          placeholder="Digite seu nome"
        />
      </div>
      <div className="w-48 mx-auto">
        <label className="font-bold">E-mail:</label>
        <input
          className="p-4 my-2 block shadow-lg bg-blue-100 rounded-lg"
          type="email"
          placeholder="Digite seu e-mail"
        />
      </div>
      <div className="w-48 mx-auto">
        <label className="font-bold">Whatsapp:</label>
        <input
          className="p-4 my-2 block shadow-lg bg-blue-100 rounded-lg"
          type="text"
          placeholder="Seu Whatsapp"
        />
      </div>
      <div className="w-48 mx-auto">
        <label className="font-bold">Sua crítica ou sugestão:</label>
        <input
          className="p-4 my-2 block shadow-lg bg-blue-100 rounded-lg"
          type="text"
          placeholder="Digite sua sugestão"
        />
      </div>
    </div>
  );
};
export default Pesquisa;
