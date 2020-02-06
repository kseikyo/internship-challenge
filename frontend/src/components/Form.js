import React, { useState } from 'react';
import { TextField, Button, FormControl, Input, InputLabel, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function Form() {

  const [name, setName] = useState('Jane doe');
  const [email, setEmail] = useState('janedoe@email.com');
  const [github, setGithub] = useState('github.com/Janedoe');
  const [birthdate, setBirthdate] = useState(new Date());
  const [cpf, setCpf] = useState('');
  const [city, setCity] = useState('Curitiba');
  const [state, setState] = useState('Paraná');

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    inputField: {
      width: '20rem'
    },
  }));

  const classes = useStyles();

  const handleChange = event => {
    // Event may be null due to deleting all characters on date picker
    if(!event) return;
    
    if (!event.target) setBirthdate(event);
    else {

      const name = event.target.name;
      const value = event.target.value;

      if (name === "name") setName(value);
      else if (name === "email") setEmail(value);
      else if (name === "github") setGithub(value);
      else if (name === "city") setCity(value);
      else if (name === "state") setState(value);
      else if (name === "cpf") {
        const new_value = value.replace(/^([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}?[0-9]{2})$/);
        setCpf(new_value);
      }
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl className={classes.inputField}>
            <InputLabel htmlFor="component-simple">Full name</InputLabel>
            <Input id="name" name="name" value={name} onChange={handleChange} />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.inputField}>
            <InputLabel htmlFor="component-simple">Email</InputLabel>
            <Input id="email" name="email" type="email" value={email} onChange={handleChange} />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.inputField}
              margin="normal"
              id="date-picker-dialog"
              label="Birthdate"
              format="MM/dd/yyyy"
              value={birthdate}
              onChange={handleChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.inputField}>
            <InputLabel htmlFor="component-simple">Individual Registry (CPF)</InputLabel>
            <Input id="cpf" name="cpf" type="number" value={cpf} onChange={handleChange} />
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}
