import Contact from 'components/Contact/Contact';
import css from './ContactList.module.scss';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter)
  );
  return (
    <ol className={css.contactList}>
      {[...filterContacts]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
    </ol>
  );
};

export default ContactList;
