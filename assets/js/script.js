// global start and end hours in 24H time
var startingHour = 9;
var endingHour = 17


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
            .addClass("col-3 hour");

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
            .addClass("col-9")
            .text("TEST");

        // add block to container
        blockList.append(businessHour);
        blockList.append(event);
        $(".container").append(blockList);
    }


};

var colorCoding = function () {

    // test variable
    var presentHour = 13;

    //var presentHour = moment().format("H");

    for (hour = startingHour; hour < endingHour + 1; hour++) {
        if (hour < presentHour) {
            $("#" + hour).addClass("past");
        }
        else if (hour == presentHour) {
            $("#" + hour).addClass("present");
        }
        else {
            $("#" + hour).addClass("future");
        }
    }
};



titleDate();
timeBlocks();
colorCoding();