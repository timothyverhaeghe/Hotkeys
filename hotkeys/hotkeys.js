
// Source1: http://www.cambiaresearch.com/articles/15/javascript-key-codes
// Source2  http://www.w3schools.com/charsets/ref_utf_basic_latin.asp
// keys[keys.length-1]

var timeline = [];
var hotkeysList = [];

var show = function(){
  console.log(timeline);
}

var hotkeys = function(hotkeyData, callback){
  console.log('Hotkey added '+ hotkeyData);
  hotkeysList.push(hotkeyData);
  hotkeysList[hotkeyData] = callback;
}

var listen = function(){
  for (var b = 0; b < hotkeysList.length; b++){
    var key = hotkeysList[b];
    var combo = key.split('+');
    var lastKey = timeline.length;
    var i = combo.length;
    var combol = combo.length;
    var o = 0;

    while(i > 0){
      i--;
      lastKey--;
      if(timeline[lastKey] == combo[i]){
        o++;
        if(o == combol){
          hotkeysList[key]();
        }
      } else {
        i = -1;
      }
    }
  }
}

document.addEventListener("mousedown", function(evt){
  var click = evt.buttons, t = "";
  if(click == 1){ t = 'left'; }
  if(click == 2){ t = 'right'; }
  if(click == 3){ t = 'together'; }
  if(click == 4){ t = 'scrolbar'; }
  timeline.push("mouse_"+t);
  listen();
});

document.onkeydown = function checkKey(e){
  e = e || window.event;
  timeline.push(String.fromCharCode(e.keyCode));
  listen();
}
