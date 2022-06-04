let day = dayjs()
let currentDatetimeEl = $("#currentDay").text(day.format("dddd, MMM DD, YYYY, h:mma"));


const jumbotronDiv = $(".container");
const saveIcon = $("<i class='fa-solid fa-floppy-disk'></i>");

function createRows(){
    for (let i=9; i<18; i++){
        let row = $(`<div data-item=${i}>`).addClass("row");
        let saveBtn = $("<button class='col-md-2 saveBtn'></button>").append(saveIcon);
        let hourDiv = $(`<div class='col-md-2 time-block hour d-flex align-items-center justify-content-center'></div>`)
        .text(day.set("h", i).set("m", 0).set("s", 0).format("hA"));
    
        let textArea = $("<textarea class='description col-md-8' placeholder='add event here'></textarea>")
        if (day.get("h") === i){
            textArea.removeClass("future")
            textArea.addClass("present");
        } else if (day.get("h") > i){
            textArea.removeClass("present");
            textArea.addClass("past");
            textArea.attr("disabled", "disabled");
            saveBtn.attr("disabled", "disabled");
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