function getAnniversaryForDayOfMonth(dayAndMonth) {
  return namedays[dayAndMonth] !== undefined ? namedays[dayAndMonth] : 'Τίποτα σπουδαίο σήμερα';
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {

  var objToday = new Date(),
      dayOfMonth = objToday.getDate(),
      months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      curMonth = months[objToday.getMonth()]
 ;

  renderStatus(getAnniversaryForDayOfMonth(dayOfMonth+'/'+curMonth));

});