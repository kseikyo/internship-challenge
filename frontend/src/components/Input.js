import React from 'react';
import { Grid, FormControl, InputLabel, Input } from '@material-ui/core';

export default function InputFormGrid({label, formControls, handleChange, ...rest}) {
  return (
    <Grid item xs={12} sm={6}>
      <FormControl required >
        <InputLabel htmlFor="component-simple">{label}</InputLabel>
        <Input required={true} {...rest} value={formControls} onChange={handleChange} />
      </FormControl>
    </Grid>
  );
}
