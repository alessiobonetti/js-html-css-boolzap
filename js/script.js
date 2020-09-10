function sendMessage() {
  var inputText = $("#input_message").val();

  if(inputText != ""){
    var templateMessage = $(".template .message_row").clone();
    var time = getTime();

    templateMessage.find(".message_text").text(inputText);
    templateMessage.find(".message_time").text(time);
    templateMessage.addClass("sent");

    $(".chat_messages").append(templateMessage);
    setTimeout(cpuMessage,1000);
    $("#input_message").val("");
  }
}

function cpuMessage(){
  var cpuMessage = $(".template .message_row").clone();

  cpuMessage.find(".message_text").text("Ok");
  var time = getTime();
  cpuMessage.find(".message_time").text(time);
  console.log(cpuMessage);
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

function contactActive () {

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

  $("#search").keyup(
    function() {
      var searchInput = $(this).val();
      searchInput = searchInput.toLowerCase();
      var contactName = $(".contact .contact_name")

      contactName.each(
        function() {
        var name = $(this).text();
        name = name.toLowerCase();
        console.log(searchInput);
        if (name.includes(searchInput) == true) {
          $(this).parents(".contact").show();
        } else {
          $(this).parents(".contact").hide();
        }
      });
    }
  )

  $(".chat_list li").click(
    function() {
      var contactIndex = $(this).index();
      $(".chat_list li").removeClass("contact_active")
      $(this).addClass("contact_active");
      $(".chat_messages").removeClass("chat_active");
      var indexChat = contactIndex +1;
      $(".chat_messages:nth-child("+indexChat+")").addClass("chat_active");
    }
  )

});
