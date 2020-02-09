export function changeHandler(event, callback = null) {
  /* The changeHandler
   *
   * This handler will set the state of anything inside the formControls
   * The event may be null when typing the date
   * If the event is not null, if it doesn't have a target, it's a date event
   * Else, it will take the name and the value and set it to it's proper state 
   */
  if (!event) return;
  else if (!event.target) {
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
      if (callback) {
        callback();
      }
    });
  }
}