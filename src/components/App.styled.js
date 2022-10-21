const { default: styled } = require('styled-components');

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
  margin-bottom: 20px;
`;

const ContactsTitle = styled.h2`
  font-family: 'Courier New', Courier, monospace;
  font-size: 30px;

  margin-bottom: 15px;
`;

export { Container, Title, ContactsTitle };
