export default function ExpEduContainer({ experience, education }) {
  return (
    <div className="exp-edu-container">
      <div className="exp-container">
        <h3>Experience</h3>
        {experience.map((exp) => {
          return (
            <div key={exp.key}>
              <h4>{exp.position}</h4>
              <h5>{`${exp.company} | ${exp.startDate} - ${exp.endDate}`}</h5>
              <p>{exp.description}</p>
            </div>
          );
        })}
      </div>
      <div className="edu-container">
        <h3>Education</h3>
        {education.map((edu) => {
          return (
            <div key={edu.key}>
              <h4>{edu.school}</h4>
              <h5>{edu.degree}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
