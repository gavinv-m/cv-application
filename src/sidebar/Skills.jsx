import renderInput from './InputField';
import AddButton from './Button';

export default function Skills({ skills, updateField, add }) {
  const section = 'skills';

  return (
    <div className="skills">
      <div className="skills-header">
        {/* TODO: Add skills svg */}
        <h2>Skills</h2>
      </div>
      <div>
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
        <AddButton section={section} add={add}></AddButton>
      </div>
    </div>
  );
}
