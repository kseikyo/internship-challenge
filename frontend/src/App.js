import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Form from './components/forms/Form';
import Tab from './components/misc/Tab';
import Table from './components/registrations/Table';

function App() {
  const form_style = {
    boxShadow: '5px 5px 35px 2px #212121',
    padding: '2.5rem',
    borderRadius: '15px',
  }

  const container_style = {
    display: 'flex',
    width: '90vw',
    height: '50vh',
    marginTop: '10em',
    marginLeft: '5em',
    placeContent: 'center',
    alignItems: 'center'
  }

  const [page, setPage] = useState(0);
  const handleChange = (event, newValue) => {
    setPage(newValue);
  };

  return (
    <>
      <Tab value={page} handleChange={handleChange}/>
      <div style={container_style}>
        <Container style={form_style} maxWidth="lg" >
          {!page ?
            <Form /> 
            : <Table />
          }
        </Container>
      </div>
      </>
  );
}

export default App;
