import React from 'react';
import { Grid, TextField} from '@material-ui/core';

export default function InputFormGrid({label, formControls, handleChange, ...rest}) {
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        required
        label={label}
        value={formControls}
        onChange={handleChange}
        {...rest}
      />
    </Grid>
  );
}
