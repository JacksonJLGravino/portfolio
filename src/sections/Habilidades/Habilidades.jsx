import "./Habilidades.css";

const skillCategories = [
  {
    title: "Front-end & Mobile",
    skills: ["HTML", "CSS", "JavaScript", "React", "React Native"],
  },
  {
    title: "Back-end (Foco atual)",
    skills: ["Node.js", "TypeScript", "Express", "MongoDB", "MySQL", "Python"],
  },
  {
    title: "Dados & Outros",
    skills: ["Git", "GitHub", "Figma", "VSCode", "Data Analytics"],
  },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="content-section habilidades-section">
      <h2>Minhas Habilidades</h2>
      <div className="skills-container">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
