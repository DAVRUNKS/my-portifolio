import { BsWhatsapp } from "react-icons/bs";

import "./WhatsApp.css";

const WhatsApp = () => {
  const text = " Hello I'm interested in your services!";
  return (
    <a
      href={`https://wa.me/+256700403669?text=${text}`}
      className="btnWsp"
      target="_blank"
      rel="noreferrer"
    >
      <BsWhatsapp className="btnWsp"/>
    </a>
  );
};

export default WhatsApp;


