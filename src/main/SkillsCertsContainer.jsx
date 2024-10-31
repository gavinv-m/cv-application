export default function SkillsCertsContainer({ skills }) {
  return (
    <div className="skills-certs-container">
      <div className="skills-container">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill.key}>{skill.skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
