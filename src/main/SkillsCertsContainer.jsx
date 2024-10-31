export default function SkillsCertsContainer({ skills, certifications }) {
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
      <div className="certifications-container">
        <h3>Certifications</h3>
        <ul>
          {certifications.map((certification) => (
            <li key={certification.key}>{certification.certification}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
