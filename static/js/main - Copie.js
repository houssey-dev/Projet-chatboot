/* get response script */
function getBotResponse() {
    var rawText = $("#textInput").val();
    var userHtml = '<p class="userText"><span>' + rawText + '</span></p>';
    $("#textInput").val("");
    $("#botText").append(userHtml);

 clearInput();


    $.get("/get", { msg: rawText }).done(function(data) {
      var botHtml = '<p class="userText"><span>' + data + '</span></p>';
      $("#chatbox").append(botHtml);
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});


    });
  }

}
  $("#textInput").keypress(function(e) {
      if ((e.which == 13) && document.getElementById("textInput").value != "" ){
          getBotResponse();
      }

  });
  $("#buttonInput").click(function() {
      if (document.getElementById("textInput").value != "") {
          getBotResponse();

      }

  })
// Inputs

$('#fancy-inputs input[type="text"]').blur(function(){
  if($(this).val().length > 0){
    $(this).addClass('white');
  } else {
    $(this).removeClass('white');
  }
});

// Radios

$("#fancy-radio input[type=radio]").click(function() {
  $('label.radio').removeClass('selected');
  var inputID = $(this).attr('id');
  if ($(this).is(':checked')) {
    $('.' + inputID).addClass('selected');
  } else {
    $('.' + inputID).removeClass('selected');
  }
});