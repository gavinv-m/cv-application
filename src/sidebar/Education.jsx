import renderInput from './InputField';

export default function Education({ qualifications, updateField }) {
  const section = 'education';

  return (
    <div className="education">
      <div className="education-header">
        {/* TODO: Add edu svg */}
        <h2>Education</h2>
      </div>
      {qualifications.map((qualification) => {
        return (
          <div key={qualification.key}>
            {renderInput('School/ University', qualification.school, (e) =>
              updateField(section, 'school', e.target.value, qualification.key),
            )}
            {renderInput('Degree (Year Qualified)', qualification.degree, (e) =>
              updateField(section, 'degree', e.target.value, qualification.key),
            )}
          </div>
        );
      })}
    </div>
  );
}
