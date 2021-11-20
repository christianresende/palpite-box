import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto text-center text-white font-bold">
        {" "}
        Projeto desenvolvido por: Christian Resende /{" "}
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/christian-resende/"
        >
          Linkedin
        </a>{" "}
        /
        <a
          className="hover:underline"
          href="https://github.com/christianresende"
        >
          {" "}
          GitHub
        </a>{" "}
        <div className="mt-2">
          <img className="w-40 inline p-4" src="/logo_semana_fsm.png" />
          <img className="w-40 inline p-4" src="/logo_devpleno.png" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
