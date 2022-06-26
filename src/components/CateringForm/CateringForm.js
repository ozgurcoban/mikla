import CateringFrom from './CateringForm.css';

import {
  Card,
  Div,
  Button,
  Form,
  Textarea,
} from '../../styles/CateringForm.styled';

// https://codepen.io/Ranjith_/pen/abwzrxN

const CateringForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  };
  return (
    <Card>
      <h3>Catering</h3>
      <h4>
        Vi erbjuder catering för små och stora tillställningar. Fyll i
        formuläret nedan så hör vi av oss så snart som möjligt.
      </h4>
      <Form id='contact' action='' method='post'>
        <Div>
          <label htmlFor='first-name'>Förnamn</label>
          <input
            placeholder='Förnamn'
            type='text'
            required
            autofocus
            id='first-name'
          />
        </Div>
        <Div>
          <label htmlFor='last-name'>Förnamn</label>
          <input
            placeholder='Efternamn'
            type='text'
            required
            id='last-name'
          ></input>
        </Div>
        <Div>
          <label htmlFor='email'>Email</label>
          <input placeholder='E-post' type='email' id='email' required />
        </Div>
        <Div>
          <label htmlFor='phone'>Telefonnummer</label>
          <input placeholder='Telefonnummer' type='tel' required id='phone' />
        </Div>
        <Div className='catering-form--number-input'>
          <label for='numbers'>Antal gäster</label>
          <input type='number' id='numbers' required />
        </Div>
        <Div>
          <label htmlFor='message'>Meddelande</label>
          <Textarea
            placeholder='Skriv ditt meddelande här...'
            required
            id='message'
          ></Textarea>
        </Div>
        <Div>
          <Button
            name='submit'
            type='submit'
            id='contact-submit'
            data-submit='...Sending'
          >
            Skicka
          </Button>
        </Div>
      </Form>
    </Card>
  );
};

export default CateringForm;
