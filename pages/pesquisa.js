import React, { useState } from "react";
import PageTitle from "../components/PageTitle";

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: "",
    Email: "",
    Whatsapp: "",
    Nota: "",
    Sugestão: "",
  });
  const notas = [0, 1, 2, 3, 4, 5];
  const [sucess, setSucess] = useState(false);
  const [retorno, setRetorno] = useState({});
  const save = async () => {
    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const data = await response.json();
      setSucess(true);
      setRetorno(data);
    } catch (err) {}
  };
  const onChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.name;
    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };

  return (
    <div>
      <div className="pt-6">
        <PageTitle title="Pesquisa" />
        <h1 className="font-bold my-4 text-2xl text-center">
          Críticas e sugestões
        </h1>
        <p className="text-center mb-6">
          A clínica Chris Monteiro sempre busca por atender melhor seus
          clientes. <br />
          Nos dê sua opinião e sugestão para melhorar nossos serviços.
        </p>
      </div>

      {!sucess && (
        <div className="w-48 mx-auto">
          <label className="font-bold">Seu nome:</label>
          <input
            className="p-4 my-2 block shadow-lg bg-blue-100 rounded-lg"
            type="text"
            placeholder="Digite seu nome"
            onChange={onChange}
            name="Nome"
            value={form.Nome}
            required
          />
          <label className="font-bold">E-mail:</label>
          <input
            className="p-4 my-2 block shadow-lg bg-blue-100 rounded-lg"
            type="email"
            placeholder="Digite seu e-mail"
            onChange={onChange}
            name="Email"
            value={form.Email}
            required
          />
          <label className="font-bold">Whatsapp:</label>
          <input
            className="p-4 my-2 block shadow-lg bg-blue-100 rounded-lg"
            type="text"
            placeholder="Seu Whatsapp"
            onChange={onChange}
            name="Whatsapp"
            value={form.Whatsapp}
            required
          />
          <label className="font-bold">Sua crítica ou sugestão:</label>
          <input
            className="p-4 my-2 block shadow-lg bg-blue-100 rounded-lg"
            type="text"
            placeholder="Digite sua sugestão"
            onChange={onChange}
            name="Sugestão"
            value={form.Sugestão}
            required
          />
          <label className="font-bold ">Nota:</label>
          <div className="flex">
            {notas.map((nota) => {
              return (
                <label className="block w-1/6 text-center ">
                  {" "}
                  {nota} <br />
                  <input
                    type="radio"
                    name="Nota"
                    value={nota}
                    onChange={onChange}
                    required
                  />{" "}
                </label>
              );
            })}
          </div>
          <div class="botao">
            <button
              className="bg-blue-400 px-6 py-4 font-bold rounded-lg  shadow-lg hover:shadow m-3 items-center"
              onClick={save}
            >
              {" "}
              Salvar{" "}
            </button>
          </div>
        </div>
      )}
      {sucess && (
        <div calssName="w-1/5 mx-auto">
          <p className="text-center mb-6 bf-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
            {" "}
            Obrigado por contribuir com sua sugestão ou crítica!
          </p>
          {retorno.showCupom && (
            <div className="text-center border shadow p-4 mb-4">
              Seu Cupom: <br />
              <span className="font-bold text-2xl">{retorno.Cupom}</span>
            </div>
          )}
          {retorno.showPromo && (
            <div className="text-center border shadow p-4 mb-4">
              <span className="font-bold block mb-2">{retorno.Promo}</span>
              <br />
              <span className="italic">
                Tire um print ou foto desta tela e apresente ao estabelecimento.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Pesquisa;
