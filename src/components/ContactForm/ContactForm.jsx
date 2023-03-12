import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FormContainer, Label, Input, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';

const nameContact = nanoid();
const numberContact = nanoid();

const initialValues = {
    name: '',
    number: ''
}

const Phonebook = ({addNewContact}) => {

 const handleSubmit = (values, { resetForm }) => {
    addNewContact({ ...values, id: nanoid() });
    resetForm();
  };

  return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <FormContainer autoComplete='off'>
          <Label
            htmlFor={nameContact}
            >
              Name
            </Label>
            <Input
                id={nameContact}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <Label
              htmlFor={numberContact}
            >
              Number
            </Label>
          <Input
              id={numberContact}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <Button
              type='submit'
            >
              Add contact
            </Button> 
          </FormContainer>
        </Formik>
    )  
}

export default Phonebook;


Phonebook.propTypes = {
  addNewContact: PropTypes.func.isRequired,
}