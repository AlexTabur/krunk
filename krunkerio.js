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
walk=function(){document.getElementsByTagName("html")[0].dispatchEvent(ev2);lastTimeWalked=tNow},
stopwalk=function(){document.getElementsByTagName("html")[0].dispatchEvent(ev2stop)},
jump = function(){document.getElementsByTagName("html")[0].dispatchEvent(ev3);lastTimeJumped=tNow;},//setTimeout(document.getElementsByTagName("html")[0].dispatchEvent(ev5),100)},
stopjump=function(){document.getElementsByTagName("html")[0].dispatchEvent(ev3stop)},
squat = function(){document.getElementsByTagName("html")[0].dispatchEvent(ev4);},
simulate = function () {
    //cnvalex=document.getElementsByTagName("canvas");
    //for (var i = 0; i < cnvalex.length; i++) {
        //aim(cnvalex[i]);
    //}
    //console.log(tNow);
    //squat();
    
    walk();
    //console.log(window.performance.now());
    //if(window.performance.now()-lastTimeJumped>=500){jump()};
    //console.log("simulating")
};
window.main = function () {
    tNow=window.performance.now();
	simulate();
    //jump();
    window.requestAnimationFrame(main);
    //window.requestAnimationFrame(jump);
    tAfter=tNow
}
window.onload=function(){//jump();walk();//setInterval(jump(),500);
window.main();tNow=window.performance.now()}
