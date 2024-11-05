export default function ExpEduContainer({ experience, education }) {
  return (
    <div className="exp-edu-container">
      <div className="exp-container">
        {experience.some(
          (exp) =>
            exp.position ||
            exp.company ||
            exp.startDate ||
            exp.endDate ||
            exp.description,
        ) && (
          <>
            <h3>Experience</h3>
            <div className="experience-group">
              {experience.map((exp) => {
                return (
                  <div className="experience-section" key={exp.key}>
                    <h4>{exp.position}</h4>
                    <h5>{`${exp.company} | ${exp.startDate} - ${exp.endDate}`}</h5>
                    <p>{exp.description}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <div className="edu-container">
        {education.some((edu) => edu.school || edu.degree) && (
          <>
            <h3>Education</h3>
            <div className="education-section-group">
              {education.map((edu) => {
                return (
                  <div className="education-section" key={edu.key}>
                    <h4>{edu.school}</h4>
                    <h5>{edu.degree}</h5>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
