// MODAL
const countdown = document.getElementById("countdown");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

countdown.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");

  dateInput = `${year}-${fv(month + 1)}-${fv(day)}T${fv(hour)}:${fv(
    minute
  )}:00`;
  console.log(dateInput);

  clearInterval(myInterval);
  myInterval = setInterval(countdownTimer, 1000);
});

// SELECTOR
const yearValue = document.getElementById("year-value");
const monthValue = document.getElementById("month-value");
const dayValue = document.getElementById("day-value");
const hourValue = document.getElementById("hour-value");
const minuteValue = document.getElementById("minute-value");

const previousYear = document.getElementById("previous-year");
const nextYear = document.getElementById("next-year");
const previousMonth = document.getElementById("previous-month");
const nextMonth = document.getElementById("next-month");
const previousDay = document.getElementById("previous-day");
const nextDay = document.getElementById("next-day");
const previousHour = document.getElementById("previous-hour");
const nextHour = document.getElementById("next-hour");
const previousMinute = document.getElementById("previous-minute");
const nextMinute = document.getElementById("next-minute");

const fv = (value) => {
  return value < 10 ? `0${value}` : value;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();

monthValue.textContent = months[month];
yearValue.textContent = year;
dayValue.textContent = day;
hourValue.textContent = fv(hour);
minuteValue.textContent = fv(minute);

goToNextYear = () => {
  year++;
  yearValue.innerText = year;
};

goToPreviousYear = () => {
  year--;
  yearValue.innerText = year;
};

goToNextMonth = () => {
  month++;
  if (month > 11) {
    month = 0;
  }
  monthValue.textContent = months[month];
  yearValue.textContent = year;
};

goToPreviousMonth = () => {
  month--;
  if (month < 0) {
    month = 11;
  }
  monthValue.textContent = months[month];
  yearValue.textContent = year;
};

goToNextDay = () => {
  day++;
  if (year % 4 != 0 && month == 1 && day > 28) {
    day = 1;
    dayValue.innerText = day;
  } else if (month == 1 && day > 29) {
    day = 1;
    dayValue.innerText = day;
  }

  if ([0, 2, 4, 6, 7, 9, 11].includes(month) && day > 31) {
    day = 1;
    dayValue.innerText = day;
  } else if ([3, 5, 8, 10].includes(month) && day > 30) {
    day = 1;
    dayValue.innerText = day;
  }
  dayValue.innerText = day;
};

goToPreviousDay = () => {
  day--;
  if (year % 4 != 0 && month == 1 && day < 1) {
    day = 28;
    dayValue.innerText = day;
  } else if (month == 1 && day < 1) {
    day = 29;
    dayValue.innerText = day;
  }

  if ([0, 2, 4, 6, 7, 9, 11].includes(month) && day < 1) {
    day = 31;
    dayValue.innerText = day;
  } else if ([3, 5, 8, 10].includes(month) && day < 1) {
    day = 30;
    dayValue.innerText = day;
  }
  dayValue.innerText = day;
};

goToNextHour = () => {
  hour++;
  if (hour > 23) hour = 0;
  hourValue.innerText = fv(hour);
};
goToPreviousHour = () => {
  hour--;
  if (hour < 0) hour = 23;
  hourValue.innerText = fv(hour);
};
goToNextMinute = () => {
  minute++;
  if (minute > 59) minute = 0;
  minuteValue.innerText = fv(minute);
};
goToPreviousMinute = () => {
  minute--;
  if (minute < 0) minute = 59;
  minuteValue.innerText = fv(minute);
};

nextYear.addEventListener("click", goToNextYear);
previousYear.addEventListener("click", goToPreviousYear);
nextMonth.addEventListener("click", goToNextMonth);
previousMonth.addEventListener("click", goToPreviousMonth);
nextDay.addEventListener("click", goToNextDay);
previousDay.addEventListener("click", goToPreviousDay);
nextHour.addEventListener("click", goToNextHour);
previousHour.addEventListener("click", goToPreviousHour);
nextMinute.addEventListener("click", goToNextMinute);
previousMinute.addEventListener("click", goToPreviousMinute);

// COUNTDOWN
const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minElement = document.getElementById("min");
const secElement = document.getElementById("sec");
const brokeElement = document.getElementById("broke");

var dateInput = `2023-08-10T12:00:00`;

countdownTimer = () => {
  var countDownDate = new Date(dateInput).getTime();

  var now = new Date().getTime();
  var time = countDownDate - now;

  const day = Math.floor(time / (1000 * 60 * 60 * 24));
  const hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((time % (1000 * 60)) / 1000);

  if (time > 0) {
    dayElement.innerHTML = day;
    hourElement.innerHTML = fv(hour);
    minElement.innerHTML = fv(min);
    secElement.innerHTML = fv(sec);
    brokeElement.innerHTML = "";
  } else {
    dayElement.innerHTML = '00';
    hourElement.innerHTML = '00';
    minElement.innerHTML = '00';
    secElement.innerHTML = '00';
    brokeElement.innerHTML = "<h1>... and time goes only in one direction</h1>";
  }

  console.log(Math.floor(time / 1000));
  if (Math.floor(time / 1000) < 1) {
    clearInterval(myInterval);
  }
};

myInterval = setInterval(countdownTimer, 1000);
