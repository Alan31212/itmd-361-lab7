function init(){
  var button = document.getElementById('entrybutton');
  
  funtion showMeText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innnerHTML = textbox.value;
    alter("Tsu Cheng Lu: " + textbox.value);
  }
  
  button.addEventListener('click', showMeText);
  }
 
window.addEventListener('load', init);