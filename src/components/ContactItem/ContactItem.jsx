import PropTypes from 'prop-types';
import { StyledLI } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contactsOperations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <StyledLI>
      <p>
        <span className="name">{name}:</span>
        <span className="number">{number}</span>
      </p>

      <button type="button" onClick={() => dispatch(deleteContactThunk(id))}>
        Delete
      </button>
    </StyledLI>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
