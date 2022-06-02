var dt = dayjs()
$("#currentDay").text(dt.format("dddd, MMM DD, YYYY"));
console.log(dt);


// TODO: create row for each hour/half-hour of the day
// TODO: create 3 columns, for hour, task, save
// TODO: color-code center divs for past, present, or future
// TODO: add on click feature to edit center div
// TODO: create button to save the text into the center div
// TODO: save tasks in local storage