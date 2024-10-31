import ExpEduContainer from '../../ExpEduContainer';

export default function ResumeMain({ experience, education }) {
  return (
    <div className="resume-main">
      <ExpEduContainer
        experience={experience}
        education={education}
      ></ExpEduContainer>
      <div className="skills-certs-container"></div>
    </div>
  );
}
