/* 
 *@name: VSO Framework
 *@author: Hancoaon <Hancoaon@163.com>
 *@url: http://www.vso.pw
 *@date: 11-12-2014
*/
var num = 0;
function doShake(){
	$("#X_do").removeClass("doShake_a").addClass("doShake");
	$("#music").html('<EMBED src="yao/m.mp3" autostart="true" loop="true" width="80" height="20" hidden="true" >');
}
if(window.DeviceMotionEvent) {
	var speed = 25;
	var x = y = z = lastX = lastY = lastZ = 0;
	window.addEventListener('devicemotion', function(){
		var acceleration =event.accelerationIncludingGravity;
		x = acceleration.x;
		y = acceleration.y;
		if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
			if(num == 0){
				doShake();
				num = 1;
			}
		}
		lastX = x;
		lastY = y;
	}, false);
}