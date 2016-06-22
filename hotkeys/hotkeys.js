
// Source1: http://www.cambiaresearch.com/articles/15/javascript-key-codes
// Source2  http://www.w3schools.com/charsets/ref_utf_basic_latin.asp
// keys[keys.length-1]
var keys = [];
var show = function(){
  console.log(keys);
}

// cntrl + shift + i
document.addEventListener("mousedown", function(evt){
  var click = evt.buttons, t = "";
  if(click == 1){ t = 'left'; }
  if(click == 2){ t = 'right'; }
  if(click == 3){ t = 'together'; }
  if(click == 4){ t = 'scrolbar'; }
  keys.push("mouse_"+t);
  show();
});

document.onkeydown = function checkKey(e){
  e = e || window.event;
  keys.push(String.fromCharCode(e.keyCode));
  show();
}


var hotkeys = function(keys, callback){

}
