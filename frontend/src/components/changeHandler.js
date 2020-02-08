export function changeHandler(event, callback = null) {
  if (!event) return;
  else if (!event.target) {
    this.setState({
      formControls: {
        ...this.state.formControls,
        birthdate: event.toISOString()
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
      if (callback) {
        callback();
      }
    });
  }
}