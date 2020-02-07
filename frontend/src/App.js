import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Form from './components/Form';
import Tab from './components/Tab';

function App() {
  const form_style = {
    display: 'flex',
    boxShadow: '5px 5px 35px 2px #212121',
    padding: '3.5rem',
    borderRadius: '5px'
    //#98989fff
  }

  const container_style = {
    display: 'flex',
    width: '75vw',
    height: '50vh',
    padding: '5rem',
    marginLeft: '10rem',
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
        <Container style={form_style} fixed>
          {!page ?
            <Form /> 
            : null
          }
        </Container>
      </div>
      </>
  );
}

export default App;
