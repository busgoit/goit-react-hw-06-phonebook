import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/store';
// import PropTypes from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';
import {
  ContactsList,
  Contact,
  Name,
  Number,
  Button,
  Info,
} from './Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalisedFilter = filter.toLowerCase().trim();

    return [...contacts].filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const onBtnClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {filteredContacts.length !== 0 ? (
        <ContactsList>
          {filteredContacts.map(({ id, name, number }) => (
            <Contact key={id}>
              <Name>{name}: </Name>
              <Number>{number}</Number>
              <Button type="button" onClick={() => onBtnClick(id)}>
                <TiDeleteOutline />
              </Button>
            </Contact>
          ))}
        </ContactsList>
      ) : (
        <Info>No contacts in your Phonebook!</Info>
      )}
    </>
  );
};

export default Contacts;

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
