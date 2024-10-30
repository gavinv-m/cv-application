import { useState } from 'react';
import Header from './sidebar/Header';
import PersonalDetails from './sidebar/PersonalDetails';
import ContactDetails from './sidebar/ContactDetails';
import WorkExperience from './sidebar/WorkExperience';
import Education from './sidebar/Education';
import Skills from './sidebar/Skills';

export default function App() {
  const [resumeData, setResumeData] = useState({
    // prettier-ignore
    personalDetails: {firstName: '', lastName: '', 
      career: '', profile: ''},
    // prettier-ignore
    workExperience: [{ position: '', company: '', startDate: '', 
      endDate: '', description: '', key: crypto.randomUUID() }],

    contactDetails: { email: '', number: '', location: '' },
    education: [{ school: '', degree: '', key: crypto.randomUUID() }],
    skills: [{ skill: '', key: crypto.randomUUID() }],
  });

  const update = function updateField(section, field, newValue, key = null) {
    setResumeData((prev) => {
      if (key !== null) {
        return {
          ...prev,
          [section]: prev[section].map((item) => {
            return item.key === key ? { ...item, [field]: newValue } : item;
          }),
        };
      }
      return { ...prev, [section]: { ...prev[section], [field]: newValue } };
    });
  };

  const { personalDetails, workExperience, contactDetails, education, skills } =
    resumeData;

  return (
    <>
      <aside>
        <Header></Header>
        <PersonalDetails
          details={personalDetails}
          updateField={update}
        ></PersonalDetails>
        <ContactDetails
          details={contactDetails}
          updateField={update}
        ></ContactDetails>
        <WorkExperience
          workExperience={workExperience}
          updateField={update}
        ></WorkExperience>
        <Education qualifications={education} updateField={update}></Education>
        <Skills skills={skills} updateField={update}></Skills>
      </aside>
      <main></main>
    </>
  );
}
