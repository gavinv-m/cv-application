import renderInput from './InputField';

export default function Skills({ skills, updateField }) {
  const section = 'skills';

  return (
    <div className="skills">
      <div className="skills-header">
        {/* TODO: Add skills svg */}
        <h2>Skills</h2>
      </div>
      {skills.map((skill) => {
        return (
          <div key={skill.key}>
            {renderInput(
              '(e.g., JavaScript, Communication, Leadership)',
              skill.skill,
              (e) => {
                updateField(section, 'skill', e.target.value, skill.key);
              },
              { maxLength: 30 },
            )}
          </div>
        );
      })}
    </div>
  );
}
