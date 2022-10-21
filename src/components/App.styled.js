import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 700px;
`;

const Title = styled.h1`
  font-family: ${p => p.theme.font.main};
  font-size: 40px;
  margin-bottom: 20px;
`;

const ContactsTitle = styled.h2`
  font-family: ${p => p.theme.font.main};
  font-size: 30px;

  margin-bottom: 15px;
`;

export { Container, Title, ContactsTitle };
