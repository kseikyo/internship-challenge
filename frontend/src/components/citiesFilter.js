export function citiesFilter(array, value, callback) {
  const arr = array.filter((object) => {
      console.log(`object = ${object.Estado} value = ${value}`)
      return object.Estado === value.ID ? object : null
  });
  this.setState({
      cities: arr
  },
    () =>  {
        if(callback) callback();
    }
  );
  
}