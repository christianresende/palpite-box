import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

const Sobre = () => {
  return (
    <div>
      <PageTitle title="Sobre" />
      <h1 className="text-center font-bold">Sobre</h1>
      <p className="mx-auto text-center">
        Somos um espaço especializado em beleza e bem-estar, alinhando, cada vez
        mais, vaidade com saúde.{" "}
      </p>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};
export default Sobre;
