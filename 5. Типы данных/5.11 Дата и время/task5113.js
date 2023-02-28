// День недели в европейской нумерации

function getLocalDay(date) {
  let localDay = date.getDay();

  if (localDay === 0) {
    localDay = 7;
  }
  
  return localDay;
}
