// create dayjs object for working with time
let day = dayjs()
let currentDatetimeEl = $("#currentDay").text(day.format("dddd, MMM DD, YYYY, h:mma"));
// create html elements
const jumbotronEl = $(".jumbotron");
const containerEl = $(".container");
const saveIcon = $("<i class='fa-solid fa-floppy-disk'></i>");

function createRows() {
    // create row for each hour of the work day.
    for (let i = 9; i < 18; i++) {
        let row = $(`<div data-item=${i}>`).addClass("row");
        let saveBtn = $("<button class='col-md-2 saveBtn'></button>").attr("name", i);
        let hourDiv = $(`<div class='col-md-2 time-block hour d-flex align-items-center justify-content-center'></div>`)
            .text(day.set("h", i).set("m", 0).set("s", 0).format("hA"));

        let textArea = $("<textarea class='description col-md-8' placeholder='add event here'></textarea>")
        // change color and 'disabled' attr based on past, present or future
        if (day.get("h") === i) {
            textArea.removeClass("future")
            textArea.addClass("present");
        } else if (day.get("h") > i) {
            textArea.removeClass("present");
            textArea.addClass("past");
            textArea.attr("disabled", "disabled");
            saveBtn.attr("disabled", "disabled");
        } else {
            textArea.removeClass("present");
            textArea.addClass("future");

        }

        containerEl.append(row);
        row.append(hourDiv);
        row.append(textArea);
        row.append(saveBtn);

        containerEl.append()
    }

}
// continuously update the time
function checkTime() {
    let timer = setInterval(() => {
        currentDatetimeEl = $("#currentDay").text(dayjs().format("dddd, MMM DD, YYYY, h:mma"));
    }, 1000);
}
// get any saved events from local storage and display on the schedule
function getEvents(hour) {
    const text = localStorage.getItem(hour);
    if (text !== null) {
        $(`.row[data-item=${hour}]`).children("textarea").text(text);
    }
    // } else if (day.get("h") > 17 && day.get("h") < 24){
    //     localStorage.clear();
    // }
}
// give user feedback when anything is added or deleted from local storage.
function successAlert(addOrDelete) {
    const alertEl = $("<div id='liveAlertPlaceholder'>");
    jumbotronEl.append(alertEl);
    if (addOrDelete === "a"){
        const messageEl = $("<p>").text("✅ Event Added! ✅");
        alertEl.append(messageEl)
        setTimeout(()=> alertEl.empty(), 2000);
    } else {
        const messageEl = $("<p>").text("❌ Event Deleted ❌");
        alertEl.append(messageEl)
        setTimeout(()=> alertEl.empty(), 2000);
    }
    
}
// on page load
checkTime();
createRows();

for (let i = 9; i < containerEl.children().length + 9; i++) {
    getEvents(i);
}

// save tasks in local storage and call successAlert function
$(".saveBtn").on("click", (e) => {
    const rowNum = e.target.name;
    const text = $(`.row[data-item=${rowNum}]`).children("textarea").val();
    if (text) {
        localStorage.setItem(rowNum, text.trim());
        successAlert("a");
    } else {
        if (localStorage.getItem(rowNum) !== null){
            localStorage.removeItem(rowNum);
            successAlert("d");
        }
        
    }


});