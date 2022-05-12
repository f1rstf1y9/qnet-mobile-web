let calendarConfig = {
  container: 'calendar',
  months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  weekDays: ["일", "월", "화", "수", "목", "금", "토"],
}
const calendar = new RolyartCalendar(calendarConfig);


const daycellList = document.querySelectorAll(".day.current");
daycellList.forEach(cell => {
  if (cell.id == "_2022-05-24" || cell.id == "_2022-05-25" || cell.id == "_2022-05-26" || cell.id == "_2022-05-27") {
    cell.addEventListener('click', () => {
      $(".test-list-cont").show();
    })
  } else {
    cell.addEventListener('click', () => {
      $(".test-list-cont").hide();
    })
  }
})

const undefindedcellList = document.querySelectorAll(".day.not-current");
undefindedcellList.forEach(cell => {
  cell.addEventListener('click', () => {
    $(".test-list-cont").hide();
  })
})