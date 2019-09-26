
window.doItForTheMemes = function(){
  // Liv Fanon if u see this dm me i think ur cute
  $( "a[href='/home'] > div > div > span").text("Garbage");
  $( "a[href='/explore'] > div > div > span").text("Harass");
  $( "a[href='/notifications'] > div > div > span").text("Get Harassed");
  $( "a[href^='/messages'] > div > div > span").text("The Boys");
}

window.onload = function () {
  setTimeout(window.doItForTheMemes, 300);
  // idk why the fuck it's overwriting this... this is good enough for now
  setTimeout(window.doItForTheMemes, 1000);
}

// https://stackoverflow.com/questions/641857/javascript-window-resize-event
var addEvent = function(object, type, callback) {
  if (object == null || typeof(object) == 'undefined') return;
  if (object.addEventListener) {
      object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
      object.attachEvent("on" + type, callback);
  } else {
      object["on"+type] = callback;
  }
};

addEvent(window, "resize", function(event) {
  setTimeout(window.doItForTheMemes, 500);
});
