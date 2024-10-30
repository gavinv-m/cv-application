import Input from './InputField';

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
            <Input
              placeholder="(e.g., JavaScript, Communication, Leadership)"
              maxLength={30}
              onChange={(e) => {
                updateField(section, 'skill', e.target.value, skill.key);
              }}
            ></Input>
          </div>
        );
      })}
    </div>
  );
}
