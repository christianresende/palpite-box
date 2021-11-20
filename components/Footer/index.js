import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto text-center text-white font-bold">
        {" "}
        Desenvolvido por: Christian Resende <br />
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
      </div>
    </div>
  );
};
export default Footer;
