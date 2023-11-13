function filterValidDates(arr) {
  var validDates = [];
  
  for (var i = 0; i < arr.length; i++) {
    var date = new Date(arr[i]);
    
    if (!isNaN(date.getTime())) {
      validDates.push(arr[i]);
    }
  }
  
  return validDates;
}

var array = ['10/02/2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
var filteredArray = filterValidDates(array);

console.log(filteredArray);