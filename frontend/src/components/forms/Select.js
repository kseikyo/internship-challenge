import React from 'react';
import { Select, Grid, FormControl, InputLabel } from '@material-ui/core';

function Option({value ,...rest}) {
  return (<option {...rest} >{value}</option>);
}

export default function Selec({label, value, options, ...rest }) {
  return (
    <Grid 
      item 
      xs={12} 
      sm={6}
      >
      <FormControl 
        required
        variant="outlined"
        >
        <InputLabel 
          id="select-required-label"
          >
            {label}
        </InputLabel>
        <Select
          style={{width: '13em'}}
          native
          value={value}
          {...rest}>
          <option key={-1} value=""/>
          {
            options.map(
              item => (<Option id={item.ID} key={item.ID} value={item.Nome} />)
            )}
        </Select>
      </FormControl>
    </Grid>
  );
}
