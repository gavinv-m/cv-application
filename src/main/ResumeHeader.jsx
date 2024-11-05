import EmailIcon from './icons/EmailIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationIcon from './icons/LocationIcon';

export default function ResumeHeader({
  personalDetails,
  contactDetails,
  image,
}) {
  return (
    <div className="resume-header">
      <div className="profile-card">
        <div className="name-career-container">
          <div className="name-container">
            <h1 className="first-name">{personalDetails.firstName}</h1>
            <h1 className="last-name">{personalDetails.lastName}</h1>
          </div>
          {personalDetails.career !== '' && (
            <h2 className="career">{personalDetails.career}</h2>
          )}
        </div>
        <div className="image-container">
          {image !== null && <img src={image}></img>}
        </div>
      </div>
      <p>{personalDetails.profile}</p>

      {(contactDetails.email ||
        contactDetails.number ||
        contactDetails.location) && (
        <div className="contacts-container">
          <div className="email-container">
            {contactDetails.email && <EmailIcon />}
            <span>{contactDetails.email}</span>
          </div>
          <div className="number-container">
            {contactDetails.number && <PhoneIcon />}
            <span>{contactDetails.number}</span>
          </div>
          <div className="location-container">
            {contactDetails.location && <LocationIcon />}
            <span>{contactDetails.location}</span>
          </div>
        </div>
      )}
    </div>
  );
}
