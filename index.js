const clockTitle = document.querySelector(".js-clock");
function getClock() {
  const date = new Date();
  const christmasDay = new Date();
  christmasDay.setMonth(11);
  christmasDay.setDate(25);
  christmasDay.setHours(0);
  christmasDay.setMinutes(0);
  christmasDay.setSeconds(0);
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDay()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  date.setMonth(month);
  date.setDate(day);
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);
  const timeGap = christmasDay - date;
  const dayGap = Math.floor(timeGap / (1000 * 60 * 60 * 24));
  const hourGap = Math.floor(timeGap / (1000 * 60 * 60)) % 24;
  const minuteGap = Math.floor(timeGap / (1000 * 60)) % 60;
  const secondGap = Math.floor(timeGap / 1000) % 60;
  clockTitle.innerText = `${dayGap}d ${hourGap}h ${minuteGap}m ${secondGap}s`;
}

getClock();
setInterval(getClock, 1000);
