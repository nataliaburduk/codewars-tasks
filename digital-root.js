function digitalRoot(n){
  let res = 0;
  let strOfNum = n + '';
  strOfNum.split('').map(num => {
    res += +num;
  });

  if (res >= 10){
    return digitalRoot(res)
  } else {
    return res
  }
}
