import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'store/contactsReducer/contactsReducer';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleRemove = id => {
    dispatch(removeContact(id));
  };

  return (
    <li>
      {name} : {number}
      <button data-nanoid={id} onClick={() => handleRemove(id)}>
        Remove
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
