var day = dayjs()
$("#currentDay").text(day.format("dddd, MMM DD, YYYY"));



// TODO: create row for each hour/half-hour of the day
// TODO: create 3 columns, for hour, task, save
var jumbotronDiv = $(".jumbotron");
var row = $("<div>").addClass("row");

var hourDiv = $(`<div class='col-md-3 time-block hour'></div>`).text("9AM");
var textArea = $("<textarea class='description' placeholder='add event here'>")
var taskDiv = $("<div class='col-md-6 d-flex justify-items-start'></div>").append(textArea);
taskDiv.addClass("present");
// not working
const saveIcon = $("<i class='fa-solid fa-floppy-disk'></i>");
var saveDiv = $("<div class='col-md-3 saveBtn'></div>").html(saveIcon);

jumbotronDiv.append(row);
row.append(hourDiv);
row.append(taskDiv);
row.append(saveDiv);



// jumbotronDiv.append(row);

// row.append(hourDiv);
// row.append(taskDiv);
// row.append(saveDiv);


// TODO: color-code center divs for past, present, or future
// TODO: add on click feature to edit center div
// TODO: create button to save the text into the center div
// TODO: save tasks in local storage