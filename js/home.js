/*class Task {
    constructor(task,desc) {
        this.task = task;
        this.desc = desc;
    }
    setTask(task) {
        this.task = task;
    }
    setDesc(desc) {
        this.desc = desc;
    }
}*/

var main = function() {
        $('#add').click(function(){
          //  var task = new Task(taskName,taskDesc);
            var taskName = $("#taskName").val();
            var taskDesc = $("taskDesc").val();
            $("#taskList").append("<div class='item'>" +taskName +"</div>");
            $("#taskForm").modal("hide");
        });
    
    $('#taskList').selectable();
}

$(document).ready(main);