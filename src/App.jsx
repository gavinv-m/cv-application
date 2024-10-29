import Header from './sidebar/Header';
import PersonalDetails from './sidebar/PersonalDetails';

export default function App() {
  return (
    <>
      <aside>
        <Header></Header>
        <PersonalDetails></PersonalDetails>
      </aside>
      <main></main>
    </>
  );
}
