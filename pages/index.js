import React from "react";
import Link from "next/Link";
import "tailwindcss/tailwind.css";

const Index = () => {
  return (
    <div>
      <p className="text-center mt-12">
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir sua opinião.
      </p>
      <div className="text-center my-12 ">
        <Link href="/pesquisa">
          <a className="bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow">
            Dar opinião ou sugestão
          </a>
        </Link>
      </div>
      <p className="text-center my-12">Mensagem do desconto</p>
    </div>
  );
};

export default Index;
