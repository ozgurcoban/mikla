import React from 'react';
import styled from 'styled-components';

export const LinkCardContainer = () => {
  return (
    <Section>
      <h1>
        Välkommen till <br />
        MiklaGård
      </h1>
      <p>Välj kategori</p>

      <article className='link-1'>Pizza</article>
      <article>Grill & Meze</article>
      <article>Catering1</article>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  h1 {
    text-align: center;
    line-height: 1.4;
    font-size: 1.5rem;
  }

  article {
    padding: 1.5rem;
    margin: 1rem;
  }
`;
