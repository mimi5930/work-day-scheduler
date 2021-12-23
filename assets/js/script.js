var events = {};

// current date display on top
$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(".saveBtn").on("click", function() {
    // retrieve button's data-id value
    var btnId = $(this).attr("data-id");
    
    // match with textarea's data-id value
    var textareaId = "#event-input-" + btnId;
    var saveText = $(textareaId).val();
    
    // save event text into array
    var array = [];
    if (saveText === "") {
        array.push({
            id: btnId,
            text: ""
        })
    }
    else {
        array.push({
            id: btnId,
            text: saveText
        })
    }
    // update array on tasks object
    events[btnId] = array;
    
    // save into local storage
    saveEvents();
});

var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(events));
};



var loadEvents = function() {
    events = JSON.parse(localStorage.getItem("events"));

    // create empty events object if nothing's in local storage
    if (!events) {
        events = {};
    }

    for (var key in events) {
        var eventId = "#event-input-" + events[key][0].id;
        var eventText = events[key][0].text;
        $(eventId).val(eventText);
    }
}

// get current time
var currentHour = moment().get("hour");

// cycle through textareas to compare times with current time
$("textarea").each(function() {
   var hourBlock = $(this).attr("data-time");
   if (hourBlock < currentHour) {
       $(this).removeClass("present future")
       .addClass("past");
   }
   else if(hourBlock == currentHour) {
       $(this).removeClass("past future")
       .addClass("present");
   }
   else if (hourBlock > currentHour) { 
       $(this).removeClass("past present")
       .addClass("future");
   }
})

// load tasks on page startup
loadEvents();