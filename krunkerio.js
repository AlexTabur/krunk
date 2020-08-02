var cnvalex, tNow, tAfter,
ev = new MouseEvent('mousedown', {view: window, bubbles: true, cancelable: true}),
ev2 = new KeyboardEvent("keydown",{bubbles: true, which:87 ,keyCode:87, key:"w"}),
ev2stop = new KeyboardEvent("keyup",{bubbles: true, which:87, keyCode:87}),
ev3 = new KeyboardEvent("keydown",{bubbles: true, composed:true,which:32, keyCode:32, defaultPrevented: true}),
ev4 = new KeyboardEvent("keydown",{bubbles: true, composed:true,key:"Shift", code:"ShiftLeft", location:0, charCode: 0,which:16, keyCode:16, shiftKey: true}),
ev3stop = new KeyboardEvent("keyup",{bubbles: true, composed:true,key:" ", code:"Space", location:0, charCode: 0,which:32, keyCode:32, defaultPrevented: true}),
aim=function(el){el.dispatchEvent(ev);},
lastTimeWalked=0,
lastTimeJumped=0,
walk=function(){document.getElementsByTagName("body")[0].dispatchEvent(ev2);},
stopwalk=function(){document.getElementsByTagName("body")[0].dispatchEvent(ev2stop)},
jump = function(){document.getElementsByTagName("body")[0].dispatchEvent(ev3);},
stopjump=function(){document.getElementsByTagName("body")[0].dispatchEvent(ev3stop)},
squat = function(){document.getElementsByTagName("body")[0].dispatchEvent(ev4);},
<<<<<<< HEAD
simulate = function () {
    walk();
};

for (var i = 0; i < document.getElementsByTagName("canvas").length; i++) {
    document.getElementsByTagName("canvas")[i]
}
=======
>>>>>>> 6989fee108291639a854ca5b9a47421d76a8aab4
