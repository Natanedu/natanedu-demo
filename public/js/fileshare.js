// to make sure file-saver dialog is not invoked.
connection.autoSaveToDisk = false;
var progressHelper = {};
connection.onFileProgress = function (chunk, uuid) {
    var helper = progressHelper[chunk.uuid];
    helper.progress.value = chunk.currentPosition || chunk.maxChunks || helper.progress.max;
    updateLabel(helper.progress, helper.label);
};

connection.onFileStart = function (file) {
    if(file.usedid==connection.userid){
        FileChat(file.uuid,file.name,0,"me")
    }else{
        
        FileChat(file.uuid,file.name,0,"other")
    }
    
    progressHelper[file.uuid].progress.max = file.maxChunks;
};

connection.onFileEnd = function (file) {
    progressHelper[file.uuid].div.innerHTML = '<a href="' + file.url + '" target="_blank" download="' + file.name + '">' + file.name + '</a>';
};
function updateLabel(progress, label) {
    if (progress.position == -1) return;
    var position = +progress.position.toFixed(2).split('.')[1] || 100;
    label.innerHTML = position + '%';
}