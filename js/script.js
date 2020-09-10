function sendMessage() {
  var inputText = $("#input_message").val();

  if(inputText != ""){
    var templateMessage = $(".template .message_row").clone();
    var time = getTime();

    templateMessage.find(".message_text").text(inputText);
    templateMessage.find("message_time").text(time);
    templateMessage.addClass("sent");

    $(".chat_messages").append(templateMessage);
    setTimeout(cpuMessage,1000);
    $("#input_message").val("");
  }
}

function cpuMessage(){
  var cpuMessage = $(".templates .message_row").clone();

  cpuMessage.find(".message_text").text("Ok");
  var time = getTime();
  cpuMessage.find(".message_time").text(time);

  $(".chat_messages").append(cpuMessage);
}

function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  if (minutes < 10){
    minutes= "0" + minutes;
  }
  return  hours + ":" + minutes;
}


$(document).ready(function() {
 $(".send_message").click(
   function() {
     sendMessage();
   }
 );


 $("#input_message").keyup(
    function(event) {
      if(event.which == 13) {
        sendMessage();
      }
    }
  );

});
