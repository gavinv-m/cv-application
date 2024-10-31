import renderInput from './InputField';
import AddButton from './Button';
import DeleteIcon from './icons/DeleteIcon';

export default function Education({ qualifications, updateField, add }) {
  const section = 'education';

  return (
    <div className="education">
      <div className="education-header">
        {/* TODO: Add edu svg */}
        <h2>Education</h2>
      </div>
      <div>
        {qualifications.map((qualification) => {
          return (
            <div key={qualification.key}>
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
              {qualifications.length > 1 && <DeleteIcon></DeleteIcon>}
            </div>
          );
        })}
        <AddButton section={section} add={add}></AddButton>
      </div>
    </div>
  );
}
