import { useState } from 'react';
import Header from './sidebar/Header';
import PersonalDetails from './sidebar/PersonalDetails';
import ContactDetails from './sidebar/ContactDetails';
import WorkExperience from './sidebar/WorkExperience';
import Education from './sidebar/Education';
import Skills from './sidebar/Skills';

export default function App() {
  // prettier-ignore
  const [personalDetails, setPersonalDetails] = useState({firstName: '', lastName: '', 
    career: '', profile: ''});

  const [workExperience, setWorkExperience] = useState([
    // prettier-ignore
    { position: '', company: '', startDate: '', 
        endDate: '', description: '', key: crypto.randomUUID() },
  ]);

  // prettier-ignore
  const [contactDetails, setContactDetails] = useState(
    {email: '', number: '', location: ''});

  const [education, setEducation] = useState([
    { school: '', degree: '', key: crypto.randomUUID() },
  ]);

  const [skills, setSkills] = useState([
    { skill: '', key: crypto.randomUUID() },
  ]);

  const updateExp = function updateExperience(key, field, newValue) {
    setWorkExperience((prev) => {
      return prev.map((experience) => {
        return experience.key === key
          ? { ...experience, [field]: newValue }
          : experience;
      });
    });
  };

  const updatePersonal = function updatePersonalInfo(field, newValue) {
    setPersonalDetails({ ...personalDetails, [field]: newValue });
  };

  const updateContacts = function updateContactInfo(field, newValue) {
    setContactDetails({ ...contactDetails, [field]: newValue });
  };

  const updateEdu = function updateEducation(key, field, newValue) {
    setEducation((prev) => {
      return prev.map((qualification) => {
        return qualification.key === key
          ? { ...qualification, [field]: newValue }
          : qualification;
      });
    });
  };

  const updateSkills = function updateSkillSection(key, newValue) {
    setSkills((prev) => {
      return prev.map((skill) => {
        return skill.key === key ? { skill: newValue } : skill;
      });
    });
  };

  return (
    <>
      <aside>
        <Header></Header>
        <PersonalDetails
          details={personalDetails}
          updateField={updatePersonal}
        ></PersonalDetails>
        <ContactDetails
          details={contactDetails}
          updateField={updateContacts}
        ></ContactDetails>
        <WorkExperience
          workExperience={workExperience}
          updateField={updateExp}
        ></WorkExperience>
        <Education
          qualifications={education}
          updateField={updateEdu}
        ></Education>
        <Skills skills={skills} updateField={updateSkills}></Skills>
      </aside>
      <main></main>
    </>
  );
}
