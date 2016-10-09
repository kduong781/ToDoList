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
            var taskName = $("#taskName").val();
            var taskDesc = $("#taskDesc").val();
            $("#taskList").append("<div class='item'>" +taskName +"<p class='itemDesc'>"+taskDesc+"</p></div>");
            $("#taskForm").modal("hide");
            $("#taskName").val("");
            $("#taskDesc").val("");
          }
        );


        $('#taskList').on('mouseenter', '.item', function( event ) {
            $(this).addClass("selectable");
        }).on('mouseleave', '.item', function( event ) {
            $(this).removeClass("selectable");
        });
    /*    $('.item').hover(
          function() {
            $(this).addClass("selectable");
          },
          function () {
            $(this).removeClass("selectable");
          }
        );*/
        $('#taskList').on('click','.item',function() {
          $('.item').removeClass('selected');
          $(this).toggleClass('selected');
          $('> .itemDesc', this).slideToggle('slow');
        }
      );
        /*
        $('.item').click(
          function() {
            $(this).toggleClass('selected');
            $('> .itemDesc', this).slideToggle('slow');
          }
        );
*/
        //$('#taskList').sortable();

      // $('.taskList').selectable();
}

$(document).ready(main);
