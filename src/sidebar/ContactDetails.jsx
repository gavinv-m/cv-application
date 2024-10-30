import Input from './InputField';

export default function ContactDetails({ details, updateField }) {
  const section = 'contactDetails';

  return (
    <div className="contact-details">
      <div className="contact-details-header">
        {/* TODO: Add svg contact card */}
        <h2>Contact Details</h2>
      </div>
      <Input
        type="email"
        placeholder="Email"
        value={details.email}
        onChange={(e) => {
          updateField(section, 'email', e.target.value);
        }}
      ></Input>
      <div className="cell-location">
        <Input
          type="tel"
          placeholder="Enter mobile phone number"
          value={details.number}
          onChange={(e) => {
            updateField(section, 'number', e.target.value);
          }}
        ></Input>
        <Input
          type="text"
          placeholder="City, Country"
          onChange={(e) => {
            updateField(section, 'location', e.target.value);
          }}
        ></Input>
      </div>
    </div>
  );
}
