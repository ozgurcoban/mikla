import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    margin-bottom: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    text-align: center;
  }
`;
