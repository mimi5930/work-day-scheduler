// TODO: Display date at the top of the calendar
    // use moment.js to display time in correct format
    // refresh page every 20 or so min
    // Ex: Thursday, September 5th

// TODO: save text input into local storage 
    // recognize text and save it with the button on the right
$(".saveBtn").on("click", function() {
    // retrieve button's data-id value
    var btnId = $(this).attr("data-id");
    console.log(btnId);
    // match with textarea's data-id value
    var textareaId = "#task-input-" + btnId;
    var saveText = $(textareaId).val();
    console.log(saveText);
});


// TODO: color code time intervals based on current time
    // css has the proper stylings
    // moment.js functionality?