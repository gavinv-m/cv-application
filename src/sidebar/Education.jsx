import Input from './InputField';

export default function Education({ qualifications, updateField }) {
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
                updateField(qualification.key, 'school', e.target.value)
              }
            ></Input>
            <Input
              placeholder="Degree (Year Qualified)"
              value={qualification.degree}
              onChange={(e) =>
                updateField(qualification.key, 'degree', e.target.value)
              }
            ></Input>
          </div>
        );
      })}
    </div>
  );
}
