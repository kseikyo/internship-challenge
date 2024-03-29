import cities from '../../assets/Cidades.json';
import states from '../../assets/Estados.json';
import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Select from './Select';
import Input from './Input';
import { citiesFilter } from '../misc/citiesFilter';
import { changeHandler } from '../misc/changeHandler';
import { statesFilter } from '../misc/statesFilter';
import SaveIcon from '@material-ui/icons/Save';
import {
  Button,
  FormControl,
  Grid,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default class Form extends Component {
  /* The form component
   * 
   * It maintains all the values needed for creating a new Register inside FormControls.
   * In the submitHandler it retrieves data using the formRef, appends the birthdate value
   * because the formRef doesn't keep it's value. After that it uses the fetch api to POST
   * the data to the server.
   */

  constructor(props) {
    super(props);
    this.state = {
      rendered: [],
      formControls: {
        name: 'Jane doe',
        email: 'janedoe@email.com',
        github: 'github.com/Janedoe',
        birthdate: new Date().toISOString(),
        cpf: '65001866723',
        city: '',
        state: '',
      } 
    }
    this.formRef = React.createRef();
    this.citiesFilter = citiesFilter.bind(this);
    this.statesFilter = statesFilter.bind(this);
  }

  checkEmpty(arr) {
    let empty = "";
    for(let entry of arr) {
      if(!entry[1]) 
        empty += (`${entry[0].toUpperCase()} is empty!\n`)
    }
    return empty;
  }

  serializeForm(form) {
    let arr = {};
    for(let entry of form) {
      arr[entry[0]] = entry[1];
    }
    return arr;
  }

  submitHandler = (event) => {
    event.preventDefault();

    const url = new URL("http://localhost:3333/users");

    let form = new FormData(this.formRef.current);
    let birthdate = this.state.formControls.birthdate;

    form.append("birthdate", birthdate);

    let empty = this.checkEmpty(form.entries()).replace(',', '');
    
    if(empty[0]) {
      alert(empty);
      return;
    }

    let headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }

    let body = this.serializeForm(form.entries());

    fetch(url, {
      method: "post",
      headers: headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.status !== 200 && response.status !== 201) 
          alert('Incorret data.');
      
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);
        alert('Record registerd succesfully!');
      })
      .catch(err => {
        console.log(err);
      });

  }

  async updateCities(event) {
    const value = event.target.value;
    await this.statesFilter(states, value);
    await this.citiesFilter(cities, this.state.formControls.state);
  }


  render() {

    const handleChange = changeHandler.bind(this);
    const updateCities = this.updateCities.bind(this);
    const { formControls } = this.state;

    return (
      <form
        ref={this.formRef}
        style={{ flexGrow: 1 }} 
        noValidate={true}
        autoComplete="off"
        >
        <Grid 
          container 
          spacing={4}
          >
          <Input
            label="Full name"
            formControls={formControls.name}
            handleChange={handleChange}
            id="name"
            name="name"
          />
          <Input
            label="Email"
            formControls={formControls.email}
            handleChange={handleChange}
            type="email"
            id="email"
            name="email"
          />
          <Grid
            item 
            xs={12} 
            sm={6}
            >
            <MuiPickersUtilsProvider 
              utils={DateFnsUtils}
              >
              <FormControl 
                required
                >
                <KeyboardDatePicker
                  disableToolbar
                  style={{width: '13em'}}
                  inputVariant="outlined"
                  id="birthdate"
                  label="Birthdate"
                  format="MM/dd/yyyy"
                  value={formControls.birthdate}
                  onChange={handleChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </FormControl>
            </MuiPickersUtilsProvider>
          </Grid>
          <Input
            label="Individual Registry (CPF)"
            formControls={formControls.cpf}
            handleChange={handleChange}
            type="number"
            id="cpf"
            name="cpf"
          />
          <Select
            label="State"
            onChange={updateCities}
            options={states}
            inputProps={{
              name: 'state',
              id: 'state'
            }}
          />
          <Select
            label="City"
            onChange={handleChange}
            options={this.state.rendered}
            inputProps={{
              name: 'city',
              id: 'city'
            }}
          />
          <Input
            label="Github URL"
            formControls={formControls.github}
            handleChange={handleChange}
            id="github"
            name="github"
          />
          <Grid 
            item 
            xs={12} 
            sm={12}
            >
            <Button 
              variant="outlined" 
              type="submit" 
              startIcon={<SaveIcon />}
              onClick={this.submitHandler}
              >
                Save
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}