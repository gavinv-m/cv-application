import Header from './sidebar/Header';
import PersonalDetails from './sidebar/PersonalDetails';
import ContactDetails from './sidebar/ContactDetails';

export default function App() {
  return (
    <>
      <aside>
        <Header></Header>
        <PersonalDetails></PersonalDetails>
        <ContactDetails></ContactDetails>
      </aside>
      <main></main>
    </>
  );
}
