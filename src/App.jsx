import { useState } from 'react';
import Header from './sidebar/Header';
import PersonalDetails from './sidebar/PersonalDetails';
import ContactDetails from './sidebar/ContactDetails';
import WorkExperience from './sidebar/WorkExperience';
import Education from './sidebar/Education';
import Skills from './sidebar/Skills';
import ResumeHeader from './main/ResumeHeader';
import ResumeMain from './main/ResumeMain';
import Certifications from './sidebar/Certifications';

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
    certifications: [{ certification: '', key: crypto.randomUUID() }],
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

  const addEntry = (section) => {
    setResumeData((prev) => {
      // Limit entries in sections
      if (
        (section === 'workExperience' && prev[section].length >= 2) ||
        (section === 'education' && prev[section].length >= 2) ||
        (section === 'skills' && prev[section].length >= 7) ||
        (section === 'certifications' && prev[section].length >= 5)
      ) {
        return prev; // Return the previous state without adding a new entry
      }

      const newEntry = {
        key: crypto.randomUUID(),
        // prettier-ignore
        ...(section === 'workExperience' && {position: '', company: '', startDate: '', 
          endDate: '', description: ''}),
        ...(section === 'education' && { school: '', degree: '' }),
        ...(section === 'skills' && { skill: '' }),
        ...(section === 'certifications' && { certification: '' }),
      };

      return { ...prev, [section]: [...prev[section], newEntry] };
    });
  };

  const removeEntry = (section, key) => {
    setResumeData((prev) => {
      return {
        ...prev,
        [section]: prev[section].filter((item) => item.key !== key),
      };
    });
  };

  // prettier-ignore
  const { personalDetails, workExperience, contactDetails, 
    education, skills, certifications } =
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
          add={addEntry}
          remove={removeEntry}
        ></WorkExperience>
        <Education
          qualifications={education}
          updateField={update}
          add={addEntry}
        ></Education>
        <Skills skills={skills} updateField={update} add={addEntry}></Skills>
        <Certifications
          certifications={certifications}
          updateField={update}
          add={addEntry}
        ></Certifications>
      </aside>
      <main>
        <div className="resume">
          <ResumeHeader
            personalDetails={personalDetails}
            contactDetails={contactDetails}
          ></ResumeHeader>
          <ResumeMain
            experience={workExperience}
            education={education}
            skills={skills}
            certifications={certifications}
          ></ResumeMain>
        </div>
      </main>
    </>
  );
}
