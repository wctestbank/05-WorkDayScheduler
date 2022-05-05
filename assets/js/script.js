var titleDate = function (){
    var date = moment().format("MMMM Do, YYYY");
    $("#currentDay").text(date);
};

titleDate();