import renderInput from './InputField';
import AddButton from './Button';
import DeleteIcon from './icons/DeleteIcon';

export default function Certifications({
  certifications,
  updateField,
  add,
  remove,
}) {
  const section = 'certifications';

  return (
    <div className="certifications">
      <div className="certifications-header">
        {/* TODO: Add certification svg */}
        <h2>Certifications</h2>
      </div>
      <div>
        {certifications.map((certification) => (
          <div key={certification.key}>
            <input
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
            {certifications.length > 1 && (
              <DeleteIcon
                remove={remove}
                section={section}
                itemKey={certification.key}
              >
                {' '}
              </DeleteIcon>
            )}
          </div>
        ))}
      </div>
      <AddButton section={section} add={add}></AddButton>
    </div>
  );
}
