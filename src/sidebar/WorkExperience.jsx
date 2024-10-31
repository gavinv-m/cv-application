import renderInput from './InputField';
import AddButton from './Button';

export default function WorkExperience({ workExperience, updateField, add }) {
  const section = 'workExperience';

  return (
    <div className="work-exp">
      <div className="work-exp-header">
        {/* TODO: Add svg for work experience */}
        <h2>Work Experience</h2>
      </div>

      <div>
        {workExperience.map((experience) => {
          return (
            <div key={experience.key}>
              {renderInput('Position', experience.position, (e) =>
                updateField(
                  section,
                  'position',
                  e.target.value,
                  experience.key,
                ),
              )}
              {renderInput('Company', experience.company, (e) =>
                updateField(section, 'company', e.target.value, experience.key),
              )}
              {renderInput('Start Month/Year', experience.startDate, (e) =>
                updateField(
                  section,
                  'startDate',
                  e.target.value,
                  experience.key,
                ),
              )}
              {renderInput('End Month/Year', experience.endDate, (e) =>
                updateField(section, 'endDate', e.target.value, experience.key),
              )}
              <textarea
                name="responsibilities"
                placeholder="Describe your key responsibilities and achievements in this role..."
                maxLength={400}
                onChange={(e) => {
                  updateField(
                    section,
                    'description',
                    e.target.value,
                    experience.key,
                  );
                }}
              ></textarea>
            </div>
          );
        })}
        <AddButton section={section} add={add}></AddButton>
      </div>
    </div>
  );
}
