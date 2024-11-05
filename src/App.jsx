import '../src/styles/sidebar.css';
import '../src/styles/main.css';
import { useState, useRef } from 'react';
import Header from './sidebar/Header';
import PersonalDetails from './sidebar/PersonalDetails';
import ContactDetails from './sidebar/ContactDetails';
import WorkExperience from './sidebar/WorkExperience';
import Education from './sidebar/Education';
import Skills from './sidebar/Skills';
import ResumeHeader from './main/ResumeHeader';
import ResumeMain from './main/ResumeMain';
import Certifications from './sidebar/Certifications';
import { placeholderText } from './placeholder-text';
import html2pdf from 'html2pdf.js';

export default function App() {
  const [resumeData, setResumeData] = useState({
    // prettier-ignore
    personalDetails: {firstName: 'Jane', lastName: 'Doe', 
      career: 'Architect', profile: `${placeholderText}`},
    // prettier-ignore
    workExperience: [{ position: '', company: '', startDate: '', 
      endDate: '', description: '', key: crypto.randomUUID() }],

    contactDetails: {
      email: 'janedoe@example.com',
      number: '+1 (555) 123-4567',
      location: 'Metropolis',
    },
    education: [{ school: '', degree: '', key: crypto.randomUUID() }],
    skills: [{ skill: '', key: crypto.randomUUID() }],
    certifications: [{ certification: '', key: crypto.randomUUID() }],
  });
  const [image, setImage] = useState(null);

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

  const downloadPDF = () => {
    const element = document.querySelector('.resume');
    const opt = {
      margin: 1,
      filename: 'CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().from(element).set(opt).save();
  };

  const uploadImage = () => {
    const input = document.querySelector('input[type="file"]');
    const image = input.files[0];

    if (image && image.type.startsWith('image/')) {
      const imageSrc = URL.createObjectURL(image);
      setImage(imageSrc);
    } else {
      console.log(
        'No image file selected or the selected file is not an image.',
      );
    }
  };

  // prettier-ignore
  const { personalDetails, workExperience, contactDetails, 
    education, skills, certifications } =
    resumeData;

  return (
    <>
      <aside>
        <Header downloadPDF={downloadPDF}></Header>
        <PersonalDetails
          details={personalDetails}
          updateField={update}
          uploadImage={uploadImage}
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
          remove={removeEntry}
        ></Education>
        <Skills
          skills={skills}
          updateField={update}
          add={addEntry}
          remove={removeEntry}
        ></Skills>
        <Certifications
          certifications={certifications}
          updateField={update}
          add={addEntry}
          remove={removeEntry}
        ></Certifications>
      </aside>
      <main>
        <div className="resume">
          <ResumeHeader
            personalDetails={personalDetails}
            contactDetails={contactDetails}
            image={image}
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
