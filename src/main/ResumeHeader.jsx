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
          {/* TODO: Add email SVG */}
          <span>{contactDetails.email}</span>
        </div>
        <div className="number-container">
          {/* TODO: Add number svg */}
          <span>{contactDetails.number}</span>
        </div>
        <div className="location-container">
          {/* TODO: Add location svg */}
          <span>{contactDetails.location}</span>
        </div>
      </div>
    </div>
  );
}
