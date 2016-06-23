
// Source1: http://www.cambiaresearch.com/articles/15/javascript-key-codes
// Source2  http://www.w3schools.com/charsets/ref_utf_basic_latin.asp
// keys[keys.length-1]

var timeline = [];
var hotkeysList = [];
var inputs = {17:"CTRL", 18:"ALT", 9:"TAB", 16:"SHIFT",91: "CMD", 32:"SPACE",13:"ENTER", 8:"BACKSPACE" }; // numlock (144),

var show = function(){
  console.log(timeline);
}

var hotkeys = function(hotkeyData, callback){
  var htky = hotkeyData.toUpperCase();
  hotkeysList.push(htky);
  hotkeysList[htky] = callback;
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

// monitor the behavior of the mouse.
document.addEventListener("mousedown", function(evt){
  var click = evt.buttons, t = "";
  if(click == 1){ t = 'LEFT'; }
  if(click == 2){ t = 'RIGHT'; }
  if(click == 3){ t = 'BOTH'; }
  if(click == 4){ t = 'WHEEL'; }
  timeline.push(t);
  listen();
});

document.onkeydown = function checkKey(e){
  e = e || window.event;
  var a = inputs[e.keyCode] || String.fromCharCode(e.keyCode);
  timeline.push(a);
  listen();
}
