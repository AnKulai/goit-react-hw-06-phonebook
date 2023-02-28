import ContactList from './ContactList/ContactList';
import Filterblock from './Filterblock/Filterblock';
import Phonebook from './Phonebook/Phonebook';
import Section from './Section/Section';

const App = () => {
  return (
    <>
      <Section title="PhoneBook">
        <Phonebook />
        <Filterblock title="Filter by Name" />
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </>
  );
};

export default App;
