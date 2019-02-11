// to make sure file-saver dialog is not invoked.
connection.autoSaveToDisk = false;
var progressHelper = {};
var maxchunk;
var type_file;
connection.onFileProgress = function (chunk, uuid) {
    var helper = chunk.currentPosition || chunk.maxChunks || maxchunk;
    console.log("progress: " + helper);
    updateLabel(helper, uuid);
};

connection.onFileStart = function (file) {
    if (file.userid == connection.userid) {
        FileChat(file.uuid, file.name, 0, "me")

    } else {

        FileChat(file.uuid, file.name, 0, "other")
    }
    maxchunk = file.maxChunks


};

connection.onFileEnd = function (file) {
    console.log(file)
    $("#item-" + file.uuid + " #val").remove()
    $("#progress-" + file.uuid).parent().remove();
    if (file.remoteUserId == connection.userid) {
        progressHelper[file.uuid] = file;
        var name = file.name;
        name = name.trim().toString();
        type_file = file.type.toString();
        console.log(type_file);
        
        var fileNameMatches = (file.name || '').toLowerCase().match(/.png|.jpg|.jpeg/g);
        if (fileNameMatches) {

            $("#item-" + file.uuid +' .title').css("display","none"); 
            $("#item-" + file.uuid+" .row").append('<span clas="col s9"><img  style="width:60%"  id="show-' + file.uuid + '" /></span>')
            var img = document.getElementById('show-' + file.uuid);
            img.src = URL.createObjectURL(file);

        } /*else {
            $('#show-' + file.uuid).remove();
        }*/

        $("#filecontainer").append('<input type="hidden" id="' + file.uuid + '" value="' + file.url + '" />')
        $("#item-" + file.uuid +" .row").append('<span class="secondary-content"><a href="#!" onclick=\'downloadfile(' + file.uuid + ',"' + name + '")\'  class="btn waves-effect waves-light btn-flat"><i class="material-icons">get_app</i></a></span>');

    }
};
function updateLabel(progress, uuid) {
    if (progress == -1) return;
    var position = +progress || 100;
    $("#progress-" + uuid).css("width", position + "%")
    $("#item-" + uuid + " #val").html("(" + position + "%)");
}
function downloadfile(uid, filename) {
    var url = $("#" + uid).val();
    //download(url, filename, type_file);
    var f = progressHelper[uid]
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        var data=reader.result;
        var element = document.createElement('a');
        element.setAttribute('href', data);
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element)
    }, false);

    if (f) {
        reader.readAsDataURL(f);
    }

}