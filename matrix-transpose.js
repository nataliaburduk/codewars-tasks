function transpose(matrix) {
  let newArr = matrix[0].map((i) => []);
  
  matrix.forEach((row, i) => {
    row.forEach((item, j) => {
      newArr[j][i] = item;
    })
    
  })
  return newArr;
}