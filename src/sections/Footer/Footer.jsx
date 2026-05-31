import "./Footer.css";

const socialLinks = [
  {
    icon: "fab fa-github",
    label: "GitHub",
    href: "https://github.com/jacksonjlgravino",
  },
  {
    icon: "fab fa-linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/jackson-gravino",
  },
  {
    icon: "fab fa-youtube",
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCuxdIvvTAu9u9-epyn34nQA",
  },
];

const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col footer-brand">
          <span className="footer-logo">Jackson Gravino</span>
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className="footer-social-link"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col footer-nav">
          <span className="footer-col-title">Navegação</span>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Jackson Gravino. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
