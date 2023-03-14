function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  
  if (numbers.length === 10) {
    return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
  } 
}
