import renderInput from './InputField';
import AddButton from './Button';
import DeleteIcon from './icons/DeleteIcon';
import ExperienceIcon from './icons/ExperienceIcon';

// prettier-ignore
export default function WorkExperience({ workExperience, updateField, add, remove }) {
  const section = 'workExperience';

  return (
    <div className="work-exp">
      <div className="work-exp-header">
        <ExperienceIcon></ExperienceIcon>
        <h2>Work Experience</h2>
      </div>

      <div>
        {workExperience.map((experience, index) => {
          return (
            <div className='experience-container' key={experience.key}>
              <div className='experience-header'>
                {workExperience.length > 1 && <h3>Experience {index + 1}</h3>}
                {workExperience.length > 1
                && <DeleteIcon remove={remove} section={section} itemKey={experience.key} ></DeleteIcon>}
              </div>
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
