function sendMessage() {
  var inputText = $("#input_message").val();

  if(inputText != ""){
    var templateMessage = $(".template .message_row").clone();

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var time = hours + ":" + minutes;

    templateMessage.find(".message_text").text(inputText);
    templateMessage.find("message_time").text(time);
    templateMessage.addClass("sent");

    $(".chat_messages").append(templateMessage);
    $("#input_message").val("");
  }
}


$(document).ready(function() {
 $(".send_message").click(
   function() {
     sendMessage();
   }
 )
})

$("#input_message").keyup(
  function(event) {
    if(event.which == 13) {
      sendMessage();
    }
  }
)
