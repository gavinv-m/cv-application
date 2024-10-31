import ExpEduContainer from '../../ExpEduContainer';
import SkillsCertsContainer from './SkillsCertsContainer';

export default function ResumeMain({ experience, education, skills }) {
  return (
    <div className="resume-main">
      <ExpEduContainer
        experience={experience}
        education={education}
      ></ExpEduContainer>
      <SkillsCertsContainer skills={skills}></SkillsCertsContainer>
    </div>
  );
}
