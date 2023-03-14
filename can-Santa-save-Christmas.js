function determineTime (durations) {
  const durationInSec = durations.reduce((acc, curr) => {
    return acc + timeToSec(curr)
  }, 0)
  return durationInSec <= 3600*24 
  
}

function timeToSec(str) {
  const [h, m, s] = str.split(':');
  return +s+ +m*60 + +h*3600 
}