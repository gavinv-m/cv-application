import { useState } from 'react';
import Header from './sidebar/Header';
import PersonalDetails from './sidebar/PersonalDetails';
import ContactDetails from './sidebar/ContactDetails';
import WorkExperience from './sidebar/WorkExperience';

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

  const update = function updateExperience(key, field, newValue) {
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
          updateField={update}
        ></WorkExperience>
      </aside>
      <main></main>
    </>
  );
}
