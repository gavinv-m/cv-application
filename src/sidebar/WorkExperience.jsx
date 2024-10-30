import Input from './InputField';

export default function WorkExperience({ workExperience, updateField }) {
  return (
    <div className="work-exp">
      <div className="work-exp-header">
        {/* TODO: Add svg for work experience */}
        <h2>Work Experience</h2>
      </div>

      {workExperience.map((experience) => {
        return (
          <div key={experience.key}>
            <Input
              placeholder="Position"
              value={experience.position}
              onChange={(e) =>
                updateField(experience.key, 'position', e.target.value)
              }
            ></Input>
            <Input
              placeholder="Company"
              value={experience.company}
              onChange={(e) =>
                updateField(experience.key, 'company', e.target.value)
              }
            ></Input>
            <Input
              placeholder="Start Month/Year"
              value={experience.startDate}
              onChange={(e) =>
                updateField(experience.key, 'startDate', e.target.value)
              }
            ></Input>
            <Input
              placeholder="End Month/Year"
              value={experience.endDate}
              onChange={(e) =>
                updateField(experience.key, 'endDate', e.target.value)
              }
            ></Input>
          </div>
        );
      })}
    </div>
  );
}
