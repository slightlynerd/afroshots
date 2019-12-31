const plus_5_days = new Date();
plus_5_days.setDate(plus_5_days.getDate() + 5);
const calendarContainer = document.querySelector('.calendars');
console.log(calendarContainer)
pickmeup('.calendars', {
  flat: true,
  calendars: 4,
  mode: 'range',
  date: [
    new Date,
    plus_5_days
  ],
});