import React from "react";
import Link from "next/Link";
import "tailwindcss/tailwind.css";
import useSWR from "swr";
import PageTitle from "../components/PageTitle";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
  const { data, error } = useSWR("/api/get-promo", fetcher);

  return (
    <div>
      <PageTitle title="Home" />
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
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon && (
        <p className="text-center my-12">{data.message}</p>
      )}
    </div>
  );
};

export default Index;
