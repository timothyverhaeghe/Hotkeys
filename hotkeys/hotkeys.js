var listen = function(){
  document.addEventListener("mousedown", function(evt) {
    var click = evt.buttons;
    if(click == 1){ console.log("left") }
    if(click == 2){ console.log("Right") }
    if(click == 3){ console.log("Together") }
    if(click == 4){ console.log("scrollbar") }
  });

  // monitor key behaviour
  var value = "";
  document.onkeydown = checkKey;
  function checkKey(e) {
      e = e || window.event;
      console.log(e.keyCode);
      value = value + String.fromCharCode(e.keyCode);
      console.log(value);
  }
}

// Source1: http://www.cambiaresearch.com/articles/15/javascript-key-codes
// Source2  http://www.w3schools.com/charsets/ref_utf_basic_latin.asp
var hotkeys = function(keys, callback){

}


// var keys = {"1":"a", ""}

// tab
// chapslock
// alt
// control
// spacebar
// a
// b
// c
// d
// e
// f
// g
// h
// i
// j
// k
// l
// m
// n
// o
// p
// q
// r
// s
// t
// u
// v
// w
// x
// y
// z
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 0
