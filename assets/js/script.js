// global start and end hours in 24H time
var startingHour = 9;
var endingHour = 17

// storage array
var savedTasks = [];

// current day
var titleDate = function () {
    var date = moment().format("MMMM Do, YYYY");
    $("#currentDay").text(date);
};

// generate timeblocks
var timeBlocks = function () {

    for (hour = startingHour; hour < endingHour + 1; hour++) {
        var blockList = $("<div>")
            .addClass("row timeblock")
            .attr("id", hour);

        var businessHour = $("<div>")
            .addClass("col-2 hour");

        // adjust formating for hours before 10AM
        if (hour < 10) {
            businessHour.text(moment("2022-01-01 0" + hour)
                .format("hA"));
        }
        else {
            businessHour.text(moment("2022-01-01 " + hour)
                .format("hA"));
        }

        var event = $("<textarea>")
            .addClass("col-9");

        var saveBtn = $("<button>")
            .addClass("saveBtn col-1 btn")
            .text("SAVE");

        // add elements to row
        blockList.append(businessHour);
        blockList.append(event);
        blockList.append(saveBtn);

        // add row to container
        $(".container").append(blockList);
    }


};

var colorCoding = function () {

    // test variable
    //var presentHour = 13;

    var presentHour = moment().format("H");

    for (hour = startingHour; hour < endingHour + 1; hour++) {
        if (hour < presentHour) {
            $("#" + hour + " textarea").addClass("past");
        }
        else if (hour == presentHour) {
            $("#" + hour + " textarea").addClass("present");
        }
        else {
            $("#" + hour + " textarea").addClass("future");
        }
    }
};

// local storage functions
var saveTasks = function (){
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
};

var loadTasks = function (){
    savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (!savedTasks){
        savedTasks = [];
    }

    for (hour = startingHour; hour < endingHour + 1; hour++){
        if (savedTasks[hour]){
            $("#" + hour + " textarea").val(savedTasks[hour]);
        }
    }
};

// starting process
titleDate();
timeBlocks();
colorCoding();

loadTasks();

// button click event save textarea
$(".saveBtn").click(function () {
    // get id of parent div
    var position = $(this).closest("div").attr("id");

    //console.log(position);
    savedTasks[position] = $("#" + position + " textarea").val();
    saveTasks();

});