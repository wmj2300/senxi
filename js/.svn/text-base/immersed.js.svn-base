(function(w){

//document.addEventListener('plusready',function(){
//	console.log("Immersed-UserAgent: "+navigator.userAgent);
//},false);

var immersed = 0;
var ms=(/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
if(ms&&ms.length>=3){
	immersed=parseFloat(ms[2]);
}
w.immersed=immersed;

if(!immersed){
	return;
}
var t=document.getElementsByClassName('mui-bar-nav')[0];
t&&(t.style.paddingTop=immersed+'px',t.style.height=immersed+44+'px',t.style.background='rgba(7,152,91,1)');
t=document.getElementsByClassName('mui-content')[0];
t&&(t.style.marginTop=immersed+'px');
t=document.getElementsByClassName('mui-fullscreen')[0];
t&&(t.style.top=immersed+44+'px');
t=document.getElementById('offCanvasSide');
t&&(t.style.marginTop=immersed+'px');
t=document.getElementById('offCanvasContentScroll');
t&&(t.style.marginTop=immersed+'px');
t=document.getElementById('search_way');
t&&(t.style.top=immersed+44+'px');
//mui('.mui-control-content').each(function(){
//	this.style.minHeight -= immersed + 'px'
//});
})(window);