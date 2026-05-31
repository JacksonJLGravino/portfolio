import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-photo-container">
          <img
            src="https://github.com/jacksonjlgravino.png"
            alt="Foto de Perfil de Jackson Gravino"
            className="profile-photo"
          />
        </div>

        <div className="hero-text">
          <h1>
            Olá, eu sou <span>Jackson Gravino</span>
          </h1>
          <p>
            Desenvolvedor Full stack com Node.js, experiência em Front-end e
            Mobile, e visão analítica de dados.
          </p>
          <a href="#projetos" className="cta-button">
            Ver Projetos
          </a>
        </div>
      </div>
    </section>
  );
}
