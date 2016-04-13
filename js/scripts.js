function enter(numberEntered) {
  var text = "";
  for (var i = 1 ; i <= numberEntered ; i++)
  {
    if (i % 15 === 0) {
      text += "pingpong <br>";
    }  else if (i % 5 === 0) {
      text += "pong <br>";
    }  else if (i % 3 === 0) {
      text += "ping <br>";
    }  else {
      text += i + "<br>";
    }

  }
  return text;
}

$(document).ready(function() {
  $("form#enter").submit(function(event) {

    var numberEntered = parseInt($("input#yournumber").val());
    var result = enter(numberEntered);

    $("#pingpongresults").html(result);
    $("#result").show();

    event.preventDefault();
  });
});
