import Input from './InputField';

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
            <Input
              placeholder="School/ University"
              value={qualification.school}
              onChange={(e) =>
                updateField(
                  section,
                  'school',
                  e.target.value,
                  qualification.key,
                )
              }
            ></Input>
            <Input
              placeholder="Degree (Year Qualified)"
              value={qualification.degree}
              onChange={(e) =>
                updateField(
                  section,
                  'degree',
                  e.target.value,
                  qualification.key,
                )
              }
            ></Input>
          </div>
        );
      })}
    </div>
  );
}
