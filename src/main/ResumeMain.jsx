import ExpEduContainer from './ExpEduContainer';
import SkillsCertsContainer from './SkillsCertsContainer';

export default function ResumeMain({
  experience,
  education,
  skills,
  certifications,
}) {
  return (
    <div className="resume-main">
      <ExpEduContainer
        experience={experience}
        education={education}
      ></ExpEduContainer>
      <SkillsCertsContainer
        skills={skills}
        certifications={certifications}
      ></SkillsCertsContainer>
    </div>
  );
}
