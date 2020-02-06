import React from 'react';
import Container from '@material-ui/core/Container';
import Form from './components/Form';

function App() {
  const container_style = {
    display: 'flex',
    boxShadow: '5px 5px 5px #98989fff',
    padding: '5rem',
    placeContent: 'center',
  }

  return (
      <Container style={container_style} fixed>
        <Form />
      </Container>
  );
}

export default App;
