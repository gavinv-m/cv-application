import EmailIcon from './icons/EmailIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationIcon from './icons/LocationIcon';

export default function ResumeHeader({ personalDetails, contactDetails }) {
  return (
    <div className="resume-header">
      <div>
        <div className="name-container">
          <h1 className="first-name">{personalDetails.firstName}</h1>
          <h1 className="last-name">{personalDetails.lastName}</h1>
        </div>
        <h2 className="career">{personalDetails.career}</h2>
        <p>{personalDetails.profile}</p>
      </div>
      <div className="contact-details">
        <div className="email-container">
          {contactDetails.email !== '' && <EmailIcon></EmailIcon>}
          <span>{contactDetails.email}</span>
        </div>
        <div className="number-container">
          {contactDetails.number !== '' && <PhoneIcon></PhoneIcon>}
          <span>{contactDetails.number}</span>
        </div>
        <div className="location-container">
          {contactDetails.location !== '' && <LocationIcon></LocationIcon>}
          <span>{contactDetails.location}</span>
        </div>
      </div>
    </div>
  );
}
