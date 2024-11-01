import renderInput from './InputField';
import AddButton from './Button';
import DeleteIcon from './icons/DeleteIcon';
import SkillsIcon from './SkillsIcon';

export default function Skills({ skills, updateField, add, remove }) {
  const section = 'skills';

  return (
    <div className="skills">
      <div className="skills-header">
        <SkillsIcon></SkillsIcon>
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
              {skills.length > 1 && (
                <DeleteIcon
                  remove={remove}
                  section={section}
                  itemKey={skill.key}
                ></DeleteIcon>
              )}
            </div>
          );
        })}
        <AddButton section={section} add={add}></AddButton>
      </div>
    </div>
  );
}
