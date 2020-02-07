export function statesFilter(array, value, callback) {
  const id = array.find(el => {
      return el.Nome === value;
    });
    this.setState({
      formControls: {
        ...this.state.formControls,
        state: id
      }
    },
    () =>  {
        if(callback) callback();
    }
  );
}