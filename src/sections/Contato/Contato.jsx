import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contato.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const socialLinks = [
  {
    icon: "fas fa-envelope",
    label: "jacksonjlgravino@gmail.com",
    href: "mailto:jacksonjlgravino@gmail.com",
  },
  {
    icon: "fab fa-linkedin",
    label: "Jackson Gravino",
    href: "https://linkedin.com/in/jackson-gravino",
  },
  {
    icon: "fab fa-youtube",
    label: "Canal no YouTube",
    href: "https://www.youtube.com/channel/UCuxdIvvTAu9u9-epyn34nQA",
  },
  {
    icon: "fab fa-github",
    label: "jacksonjlgravino",
    href: "https://github.com/jacksonjlgravino",
  },
];

export default function Contato() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="content-section contato-section">
      <h2>Entre em Contato</h2>

      <div className="contato-wrapper">
        {/* Links sociais */}
        <div className="contato-links">
          <p className="contato-intro">
            Aberto a oportunidades e conversas. Me chame por qualquer canal
            abaixo.
          </p>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="contato-item"
            >
              <i className={link.icon}></i>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Formulário */}
        <form ref={formRef} onSubmit={handleSubmit} className="contato-form">
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="name"
              placeholder="Seu nome"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="message"
              rows={5}
              placeholder="Sua mensagem..."
              required
            />
          </div>

          <button
            type="submit"
            className="cta-button"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status === "success" && (
            <p className="form-feedback success">
              <i className="fas fa-check-circle"></i> Mensagem enviada com
              sucesso!
            </p>
          )}
          {status === "error" && (
            <p className="form-feedback error">
              <i className="fas fa-times-circle"></i> Algo deu errado. Tente
              novamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
