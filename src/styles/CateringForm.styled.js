import styled from 'styled-components';

export const Card = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid lightGray;
  border-radius: 1rem;
  padding: 2rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const Div = styled.div`
  border: medium none !important;
  min-width: 100%;
  width: 100%;
  padding: 10px;

  label {
    display: block;
    margin: 1rem 0 0.5rem 0;
  }
`;

export const Textarea = styled.textarea`
  height: 100px;
  max-width: 100%;
  resize: none;
`;

export const Button = styled.button``;
