// funzione invio messaggio
function sendMessage() {
  // prendo il valore inserito da utente e lo salvo in variabile
  var inputText = $("#input_message").val();
  // se input utente diverso da vuoto allora
  if(inputText != ""){
    // clono l'html template e la row del messaggio
    var templateMessage = $(".template .message_row").clone();
    // funzione time
    var time = getTime();
    // ignetto i valori salvati nelle var nel mio html template
    templateMessage.find(".message_text").text(inputText);
    templateMessage.find(".message_time").text(time);
    // aggiungo classe sent
    templateMessage.addClass("sent");
    // prendo il codice html template e lo ignetto nel mio codice html
    $(".chat_messages.chat_active").append(templateMessage);
    setTimeout(cpuMessage,1000);
    // svuoto l'input
    $("#input_message").val("");
  }
}
// funzione invio messaggio automatico
function cpuMessage(){
  // clono la mia row nel template html
  var cpuMessage = $(".template .message_row").clone();
  // seleziono il testo nel template e lo modifico con ok
  cpuMessage.find(".message_text").text("Ok");
  // prendo il valore della funzione get time e lo inserisco in una var
  var time = getTime();
  // ignetto il valore nel template time
  cpuMessage.find(".message_time").text(time);
  // ignetto il valore in var preso dal template sul mio html
  $(".chat_messages.chat_active").append(cpuMessage);

}
// funzione orario
function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  // aggiungo lo zero ai minuti
  if (minutes < 10){
    minutes= "0" + minutes;
  }
  return  hours + ":" + minutes;
}


$(document).ready(function() {
  // stampa il messaggio inviato
  $(".send_message").click(
   function() {
     sendMessage();
   }
  );

 // stampa il messaggio con pressione di invio
  $("#input_message").keyup(
    function(event) {
      if(event.which == 13) {
        sendMessage();
      }
    }
  );

  // ricerca
  $("#search").keyup(
    function() {
      // prendo il valore inserito nel campo html e lo inserisco nella var
      var searchInput = $(this).val();
      // trasformo i caratteri inseriti da utente in minuscoli
      searchInput = searchInput.toLowerCase();
      // inserisco nella var il nome del contatto
      var contactName = $(".contact .contact_name")
      // su ogni nome del contatto faccio:
      contactName.each(
        function() {
        // matto il testo di quell'elemento nella var
        var name = $(this).text();
        // trasformo i caratteri in minuscoli
        name = name.toLowerCase();
        // se la var name contiene var searchInput inserita da utente
        if (name.includes(searchInput) == true) {
          // allora rendo visibile i contatti
          $(this).parents(".contact").show();
        } else {
          // nascondo gli altri
          $(this).parents(".contact").hide();
        }
      });
    }
  )

  // al click sul Li di chat list
  $(".chat_list li").click(
    function() {
      // salvo in una var l'indice dell'elemento che clicko
      var contactIndex = $(this).index();
      // rimuovo la classe active da tutti i contatti
      $(".chat_list li").removeClass("contact_active")
      // e assegno la classe a quello clickato
      $(this).addClass("contact_active");
      // rimuovo la classe active a tutte le chat
      $(".chat_messages").removeClass("chat_active");
      // metto in una var index contatti +1
      var indexChat = contactIndex +1;
      // abbino al click sul li in base all'index la chat corrispondente e aggiungo la classe active
      $(".chat_messages:nth-child("+indexChat+")").addClass("chat_active");
      // inserisco attributo src della mia immagine avatar nella var
      var img = $(this).find("img").attr("src");
      // stesso attributo per il nome mettendo nella var il testo
      var name = $(this).find(".contact_name").text();
      // ignetto nel mio html la nuova src per l'avatar di chatting with
      $(".chatting_with_avatar img").attr("src",img);
      // ignetto nel mio html il nuovo testi per il nome di chatting with
      $(".chatting_with_name").text(name);
    }
  )

  // show message menu
  $(document).on("click", ".message .message_option" ,
    function() {
      $(this).siblings(".message_menu").toggle();
    }
  );

  // chat delete messages
  $(document).on("click", ".message_menu .delete_message",
    function(){
      $(this).parents(".message_row").remove();
    }
  );

});
