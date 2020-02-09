import React from 'react';
import { Tab, Tabs } from '@material-ui/core';

export default function Menu(props) {

  return (
    <Tabs
      value={props.value}
      onChange={props.handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="New Registration" />
      <Tab label="List Registrations" />
    </Tabs>
  );
}
