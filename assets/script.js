let day = dayjs()
let currentDatetimeEl = $("#currentDay").text(day.format("dddd, MMM DD, YYYY, h:mma"));


var jumbotronDiv = $(".container");
var saveIcon = $("<i class='fa-solid fa-floppy-disk'></i>");
var saveBtn = $("<button class='col-md-2 saveBtn'></button>").append(saveIcon);

function createRows(){
    for (let i=9; i<18; i++){
        var row = $(`<div data-item=${i}>`).addClass("row");
        var saveBtn = $("<button class='col-md-2 saveBtn'></button>").append(saveIcon);
        var hourDiv = $(`<div class='col-md-2 time-block hour d-flex align-items-center justify-content-center'></div>`)
        .text(day.set("h", i).set("m", 0).set("s", 0).format("hA"));
    
        var textArea = $("<textarea class='description col-md-8' placeholder='add event here'></textarea>")
        if (day.get("h") === i){
            textArea.addClass("present");
        } else if (day.get("h") > i){
            textArea.removeClass("present");
            textArea.addClass("past");
            
        } else {
            textArea.removeClass("present");
            textArea.addClass("future");
        }
    
    
        jumbotronDiv.append(row);
        row.append(hourDiv);
        row.append(textArea);
        row.append(saveBtn);
    
        jumbotronDiv.append()
    }
    
}

function checkTime(){
    let timer = setInterval(()=>{
        currentDatetimeEl = $("#currentDay").text(dayjs().format("dddd, MMM DD, YYYY, h:mma"));
    }, 1000);
}

checkTime();
createRows();
// TODO: color-code center divs for past, present, or future
// TODO: add on click feature to edit center div
// TODO: create button to save the text into the center div
// TODO: save tasks in local storage