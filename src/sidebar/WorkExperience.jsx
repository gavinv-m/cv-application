import Input from './InputField';

export default function WorkExperience({ workExperience, updateField }) {
  const section = 'workExperience';

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
                updateField(section, 'position', e.target.value, experience.key)
              }
            ></Input>
            <Input
              placeholder="Company"
              value={experience.company}
              onChange={(e) =>
                updateField(section, 'company', e.target.value, experience.key)
              }
            ></Input>
            <Input
              placeholder="Start Month/Year"
              value={experience.startDate}
              onChange={(e) =>
                updateField(
                  section,
                  'startDate',
                  e.target.value,
                  experience.key,
                )
              }
            ></Input>
            <Input
              placeholder="End Month/Year"
              value={experience.endDate}
              onChange={(e) =>
                updateField(section, 'endDate', e.target.value, experience.key)
              }
            ></Input>
          </div>
        );
      })}
    </div>
  );
}
