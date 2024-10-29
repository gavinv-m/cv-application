export default function PersonalDetails() {
  return (
    <>
      <div className="personal-details-header">
        {/* TODO: Add SVG */}
        <h2>Personal Details</h2>
      </div>
      <div className="name-container">
        <input type="text" placeholder="First name" maxLength={30} />
        <input type="text" placeholder="Last Name" maxLength={50} />
      </div>
      <input
        type="text"
        placeholder="Enter your career title (e.g., Accountant, Architect)"
      />
      {/* TODO: Option for user to add pfp */}
      <textarea
        name="personalProfile"
        placeholder="Write your personal profile here..."
        maxLength={400}
      ></textarea>
    </>
  );
}
