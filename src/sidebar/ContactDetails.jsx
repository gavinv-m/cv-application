import renderInput from './InputField';
import ContactsIcon from './ContactsIcon';

export default function ContactDetails({ details, updateField }) {
  const section = 'contactDetails';

  return (
    <div className="contact-details">
      <div className="contact-details-header">
        <ContactsIcon></ContactsIcon>
        <h2>Contact Details</h2>
      </div>
      {renderInput('Email', details.email, (e) => {
        updateField(section, 'email', e.target.value);
      })}
      <div className="cell-location">
        {renderInput('Enter mobile phone number', details.number, (e) => {
          updateField(section, 'number', e.target.value);
        })}
        {renderInput('City, Country', details.location, (e) => {
          updateField(section, 'location', e.target.value);
        })}
      </div>
    </div>
  );
}
