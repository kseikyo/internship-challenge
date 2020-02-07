import cities from '../assets/Cidades.json';
import states from '../assets/Estados.json';
import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Select from './Select';
import Input from './Input';
import { citiesFilter } from './citiesFilter';
import { changeHandler } from './changeHandler';
import { statesFilter } from './statesFilter';
import {
  Button,
  FormControl,
  Grid
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: [],
      loaded: false,
      formControls: {
        name: 'Jane doe',
        email: 'janedoe@email.com',
        github: 'github.com/Janedoe',
        birthdate: new Date(),
        cpf: '',
        city: '',
        state: '',
      }
    }
    this.citiesFilter = citiesFilter.bind(this);
    this.statesFilter = statesFilter.bind(this);
  }

  componentDidMount() {
    this.setState({
      rendered: cities,
      loaded: true
    });
  }


  async updateCities(event) {
    const value = event.target.value;
    await this.statesFilter(states, value);
    await this.citiesFilter(cities, this.state.formControls.state);
  }


  render() {

    if (!this.state.loaded) {
      return (<div>Loading</div>)
    }

    const handleChange = changeHandler.bind(this);
    const updateCities = this.updateCities.bind(this);
    const { formControls } = this.state;

    return (
      <form style={{ flexGrow: 1 }} noValidate autoComplete="off">
        <Grid container spacing={4}>
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
            id="email"
            name="email"
          />
          <Grid item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <FormControl variant="outlined" required>
                <KeyboardDatePicker
                  
                  required={true}
                  id="date-picker-dialog"
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
              id: 'state-native'
            }}
          />
          <Select
            label="City"
            onChange={handleChange}
            options={this.state.rendered}
            inputProps={{
              name: 'city',
              id: 'city-native'
            }}
          />
          <Input
            label="Github URL"
            formControls={formControls.github}
            handleChange={handleChange}
            id="github"
            name="github"
          />
          <Grid item xs={12} sm={12}>
            <Button variant="outlined" type="submit">Save</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}