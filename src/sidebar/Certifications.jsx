import renderInput from './InputField';
import AddButton from './Button';

export default function Certifications({ certifications, updateField, add }) {
  const section = 'certifications';

  return (
    <div className="certifications">
      <div className="certifications-header">
        {/* TODO: Add certification svg */}
        <h2>Certifications</h2>
      </div>
      <div>
        {certifications.map((certification) => (
          <input
            key={certification.key}
            type="text"
            placeholder="Enter certification name (e.g., Project Management Professional)"
            value={certification.certification}
            maxLength={30}
            onChange={(e) =>
              updateField(
                section,
                'certification',
                e.target.value,
                certification.key,
              )
            }
          />
        ))}
      </div>
      <AddButton section={section} add={add}></AddButton>
    </div>
  );
}