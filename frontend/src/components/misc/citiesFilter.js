export function citiesFilter(array, value, callback) {
  if(!value) return;
  const arr = array.filter((object) => {
      return object.Estado === value.ID ? object : null
  });
  this.setState({
      rendered: arr
  },
    () =>  {
        if(callback) callback();
    }
  );
}