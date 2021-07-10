import { Form, Label, Input, Button, ContainerForm } from './PhoneBookForm.styles';
import { RiUserLine, RiPhoneLine, RiUserAddLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const PhoneBookForm = ({ onSetUserInfo, onAddContact, name, number }) => {
  return (
    <Form onSubmit={onAddContact} action="">
      <ContainerForm htmlFor="">
        <Input
          onInput={onSetUserInfo}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder="Name"
          autoComplete="off"
          maxLength="40"
          required
        />
        <Label>
          <RiUserLine size="25" />
          Name
        </Label>
      </ContainerForm>
      <ContainerForm htmlFor="">
        <Input
          onInput={onSetUserInfo}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="111-11-11"
          autoComplete="off"
          maxLength="15"
          required
        />
        <Label>
          <RiPhoneLine size="25" />
          Number
        </Label>
      </ContainerForm>
      <Button type="submit">
        <RiUserAddLine />
        Add contact
      </Button>
    </Form>
  );
};

PhoneBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Input.propTypes = {
  onInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PhoneBookForm;
