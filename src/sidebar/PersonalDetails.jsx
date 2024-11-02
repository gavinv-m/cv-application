import renderInput from './InputField';
import PersonalCard from './icons/PersonalCard';

export default function PersonalDetails({ details, updateField, uploadImage }) {
  const section = 'personalDetails';

  return (
    <div className="personal-details">
      <div className="personal-details-header">
        <PersonalCard></PersonalCard>
        <h2>Personal Details</h2>
      </div>
      <div className="name-container">
        {renderInput('First name', details.firstName, (e) => {
          updateField(section, 'firstName', e.target.value);
        })}
        {renderInput('Last name', details.lastName, (e) => {
          updateField(section, 'lastName', e.target.value);
        })}
      </div>
      {renderInput(
        'Enter your career title (e.g., Accountant, Architect)',
        details.career,
        (e) => {
          updateField(section, 'career', e.target.value);
        },
      )}
      <label htmlFor="fileInput">Upload Image (Optional)</label>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={() => {
          uploadImage();
        }}
      />

      <textarea
        name="personalProfile"
        placeholder="Write your personal profile here..."
        maxLength={400}
        onChange={(e) => {
          updateField(section, 'profile', e.target.value);
        }}
      ></textarea>
    </div>
  );
}
