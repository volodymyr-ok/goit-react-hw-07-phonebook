import PropTypes from 'prop-types';
import { StyledLI } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ name, number }) => {
  const dispatch = useDispatch();

  return (
    <StyledLI>
      <p>
        <span className="name">{name}:</span>
        <span className="number">{number}</span>
      </p>

      <button type="button" onClick={() => dispatch(deleteContact(name))}>
        Delete
      </button>
    </StyledLI>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
