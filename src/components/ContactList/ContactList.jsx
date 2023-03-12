import PropTypes from 'prop-types';
import { List, ListItem, ContsctBtn, PhoneNumber } from './ContactList.styled';

const ContactList = ({ options, onDelete } ) => {
    return (
        <List>
            {options.map(option => (
            <ListItem key={option.id}>
                    <span>{option.name}: </span><PhoneNumber>{option.number}</PhoneNumber>
                    <ContsctBtn type="button" onClick={() => onDelete(option.id)}>Delete</ContsctBtn>
            </ListItem>
            ))}
        </List>
    )
}

export default ContactList; 

ContactList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape).isRequired,
    onDelete: PropTypes.func.isRequired,
}