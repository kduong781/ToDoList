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
        $('#add').click(
          function(){
          //  var task = new Task(taskName,taskDesc);
            if($('.remove').is(":visible")) {
                $('.remove').toggle();
            }
            var taskName = $("#taskName").val();
            var taskDesc = $("#taskDesc").val();
            $("#taskList").append("<div class='item'>" +taskName +"<button type='button' class='btn-xs btn-danger right remove'>Remove</button><p class='itemDesc'>"+taskDesc+"</p></div>");
            $("#taskForm").modal("hide");
            $("#taskName").val("");
            $("#taskDesc").val("");
          }
        );

        $('#edit').click(
          function(){
              $('.remove').toggle();
          }
        );

        $('#taskList').on('click','.remove',
          function() {
            $(this).closest(".item").remove();
          }
        );

        $('#taskList').on('mouseenter', '.item',
          function( event ) {
            $(this).addClass("selectable");
          }).on('mouseleave', '.item', function( event ) {
            $(this).removeClass("selectable");
          }
        );

        $('#taskList').on('click','.item',
          function() {
            $('.item').removeClass('selected');
            $(this).toggleClass('selected');
            $('> .itemDesc', this).slideToggle('slow');
          }
        );


}

$(document).ready(main);
