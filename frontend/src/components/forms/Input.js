import React from 'react';
import { Grid, TextField} from '@material-ui/core';

export default function InputFormGrid({label, helper, formControls, handleChange, ...rest}) {
  return (
    <Grid 
      item
      xs={12}
      md={6} 
      sm={6}
      >
      <TextField
        style={{width: '13em'}}
        variant="outlined"
        id={label}
        helperText={helper}
        required
        size="medium"
        label={label}
        value={formControls}
        onChange={handleChange}
        {...rest}
      />
    </Grid>
  );
}
