export function changeHandler(event, callback = null) {
  if (!event) return;
  else if (!event.target.name) {
    this.setState({
      formControls: {
        ...this.state.formControls,
        birthdate: event
      }
    })
  } else {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: value
      }
    }, () => {
      console.log(this.state.formControls);
      if (callback) {
        callback();
      }
    });
  }
}