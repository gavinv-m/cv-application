import Input from './InputField';

export default function PersonalDetails({ details, updateField }) {
  const section = 'personalDetails';

  return (
    <div className="personal-details">
      <div className="personal-details-header">
        {/* TODO: Add SVG */}
        <h2>Personal Details</h2>
      </div>
      <div className="name-container">
        <Input
          placeholder="First name"
          maxLength={30}
          value={details.firstName}
          onChange={(e) => {
            updateField(section, 'firstName', e.target.value);
          }}
        ></Input>
        <Input
          placeholder="Last Name"
          maxLength={50}
          value={details.lastName}
          onChange={(e) => {
            updateField(section, 'lastName', e.target.value);
          }}
        ></Input>
      </div>
      <Input
        placeholder="Enter your career title (e.g., Accountant, Architect)"
        value={details.career}
        onChange={(e) => {
          updateField(section, 'career', e.target.value);
        }}
      ></Input>
      {/* TODO: Option for user to add pfp */}
      <textarea
        name="personalProfile"
        placeholder="Write your personal profile here..."
        maxLength={400}
      ></textarea>
    </div>
  );
}
