var events = {};

// TODO: Display date at the top of the calendar
    // use moment.js to display time in correct format
    // refresh page every 20 or so min
    // Ex: Thursday, September 5th

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

    // loop through and fill textareas with values
    for (i = 0; i < Object.keys(events).length; i++ ) {
        var eventId = "#event-input-" + events[i][0].id;
        var eventText = events[i][0].text;
        $(eventId).val(eventText);
    }
}

// TODO: color code time intervals based on current time
    // css has the proper stylings
    // moment.js functionality?

// load tasks on page startup
loadEvents();