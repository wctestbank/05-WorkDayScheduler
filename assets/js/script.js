
// current day
var titleDate = function () {
    var date = moment().format("MMMM Do, YYYY");
    $("#currentDay").text(date);
};

// generate timeblocks
var timeBlocks = function () {
    var hour = 9;

    for (hour = 9; hour < 18; hour++) {
        var blockList = $("<div>")
            .addClass("row")
            .attr("id", hour);

        var businessHour = $("<div>")
            .addClass("col-3");

        // adjust formating for hours before 10AM
        if (hour < 10) {
            businessHour.text(moment("2022-01-01 0" + hour)
                .format("hA"));
        }
        else {
            businessHour.text(moment("2022-01-01 " + hour)
                .format("hA"));
        }

        var event = $("<div>")
            .addClass("col-9")
            .text("TEST");

        // add block to container
        blockList.append(businessHour);
        blockList.append(event);
        $(".container").append(blockList);
    }


};



titleDate();
timeBlocks();