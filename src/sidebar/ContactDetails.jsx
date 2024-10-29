export default function ContactDetails() {
  return (
    <div className="contact-details">
      <div className="contact-details-header">
        {/* TODO: Add svg contact card */}
        <h2>Contact Details</h2>
      </div>
      <input type="email" placeholder="Email" />
      <div className="cell-location">
        <input type="tel" placeholder="Enter mobile phone number" />
        <input type="text" placeholder="City, Country" />
      </div>
    </div>
  );
}
