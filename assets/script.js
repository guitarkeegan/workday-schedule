let day = dayjs()
let currentDatetimeEl = $("#currentDay").text(day.format("dddd, MMM DD, YYYY, h:mma"));
const jumbotronEl = $(".jumbotron");


const containerEl = $(".container");
const saveIcon = $("<i class='fa-solid fa-floppy-disk'></i>");

function createRows(){
    for (let i=9; i<18; i++){
        let row = $(`<div data-item=${i}>`).addClass("row");
        let saveBtn = $("<button class='col-md-2 saveBtn'></button>").attr("name", i);
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
    
    
        containerEl.append(row);
        row.append(hourDiv);
        row.append(textArea);
        row.append(saveBtn);
    
        containerEl.append()
    }
    
}

function checkTime(){
    let timer = setInterval(()=>{
        currentDatetimeEl = $("#currentDay").text(dayjs().format("dddd, MMM DD, YYYY, h:mma"));
    }, 1000);
}

function getEvents(hour){
    const text = localStorage.getItem(hour);
    if (text !== null){
        $(`.row[data-item=${hour}]`).children("textarea").text(text);
    }
}

// function successAlert(){
//     const alert = $("<div id='liveAlertPlaceholder'>");

// }

checkTime();
createRows();

for (let i=9; i<containerEl.children().length + 9; i++){
    getEvents(i);
}

// save tasks in local storage
$(".saveBtn").on("click",(e)=>{
    const rowNum = e.target.name;
    const text = $(`.row[data-item=${rowNum}]`).children("textarea").val();
    localStorage.setItem(rowNum, text);
});