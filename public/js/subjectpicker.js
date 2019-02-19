$(function () {
    var subjects = [
        "Math",
        "physics",
        "chemistry",
        "History",
        "English",
        "Chinese(mandarin)",
        "Music",
        "Blockchain",
        "Pilot test",
        "Real estate",
        "Accounting",
        "Spanish",
        "Biology",
        "Trading",
        "Cooking",
        "Public speaking",
        "Business",
        "JavaScrypt",
    ]
    $.each(subjects, function (index, topic) {
        
            option_topic = "<option value='"+topic+"'>"+ topic + "</option>";
        
        
         $("#teacher_topic").append(option_topic);
        });
        var elems = document.getElementById("teacher_topic");
        var instance_topic = M.FormSelect.init(elems, {});
})