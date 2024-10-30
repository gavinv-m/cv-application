import Input from './InputField';

export default function Skills({ skills, updateField }) {
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
                updateField(skill.key, e.target.value);
              }}
            ></Input>
          </div>
        );
      })}
    </div>
  );
}
