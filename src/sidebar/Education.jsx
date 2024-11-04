import renderInput from './InputField';
import AddButton from './Button';
import DeleteIcon from './icons/DeleteIcon';
import EducationIcon from './icons/EducationIcon';

export default function Education({
  qualifications,
  updateField,
  add,
  remove,
}) {
  const section = 'education';

  return (
    <div className="education">
      <div className="education-header">
        <EducationIcon></EducationIcon>
        <h2>Education</h2>
      </div>
      <div>
        {qualifications.map((qualification) => {
          return (
            <div className="education-group" key={qualification.key}>
              {renderInput('School/ University', qualification.school, (e) =>
                updateField(
                  section,
                  'school',
                  e.target.value,
                  qualification.key,
                ),
              )}
              {renderInput(
                'Degree (Year Qualified)',
                qualification.degree,
                (e) =>
                  updateField(
                    section,
                    'degree',
                    e.target.value,
                    qualification.key,
                  ),
              )}
              <div className="delete-wrapper">
                {qualifications.length > 1 && (
                  <DeleteIcon
                    remove={remove}
                    section={section}
                    itemKey={qualification.key}
                  ></DeleteIcon>
                )}
              </div>
            </div>
          );
        })}
        <AddButton section={section} add={add}></AddButton>
      </div>
    </div>
  );
}
