(function(d,q,l){function L(a){a=F(a);var b="outbound",c=a[G],g=W[c.replace("www.","")],e=a.pathname.split("/"),d=a[h];m(0,b,c,d);g&&("twitter.com"===c[C](-11)&&"intent"===e[e[n]-2]&&(b="intent-"+e.pop()),m(1,g,b,d));w(a,u,L)}function M(a){a=F(a);m(0,"download",(a[h].match(N)||[""]).pop()[D](),a[h]);w(a,u,M)}function O(a){a=F(a);var b=a.protocol[v](0,-1);m(0,"cta:"+b,a[h][v](b[n]+1).split("?")[0],l[h]);w(a,u,O)}function P(a){a=a[E]||a[H];for(var b=a.elements,c=b[n],g=0,e;g<c;)e=b[g++],e.name&&m(0,
"form",a[I]("name")||a[I]("id")||"form",e.name+":"+(e.type||e.tagName));w(a,Q,P)}function x(){x.a=x.a||0;var a={},b,c,g;9>x.a++&&(d.twttr&&d.twttr.ready?d.__twitterIntentHandler||(p(d,y,function(e){try{"twitter.com"===e.origin[C](-11)&&e.data&&(g=(c=d.JSON&&d.JSON.parse(e.data))&&c.params)&&"trigger"===c.method&&(b=g[0],"click"===b&&g[1]&&(b+="-"+g[1].region),a[b]||(a[b]=1,m(1,"Twitter",b,l[h])))}catch(k){}}),d.twttr.ready(function(a){a.events.bind(y,function(){})}),d.__twitterIntentHandler=!0):setTimeout(x,
5E3))}function z(){function a(a){m(1,"Facebook",a,l[h])}z.a=z.a||0;if(9>z.a++){var b=d.FB;if(b=b&&b.Event&&b.Event.subscribe)try{b("edge.create",function(){a("like")}),b("edge.remove",function(){a("unlike")}),b(y+".send",function(){a(y)})}catch(c){}else setTimeout(z,5E3)}}function X(){function a(a,b){var c=["cb_onsuccess",b,+new Date].join("_");a.onsuccess=(a.onsuccess?a.onsuccess+",":"")+c;d[c]=function(){m(1,"LinkedIn",b,l[h])}}for(var b=A("SCRIPT"),c=b[n],g=0,e,k;g<c;)e=b[g++],k=(e[I]("type")||
"")[D](),!k[r]("in/")&&a(e,k[C](3))}function Y(){function a(a,b){p(a,"load",function(){m(1,b,"pageview",l[h])});a.src=R[b]}function b(a){a(function(a){a&&"unknown"!==a.status&&!g++&&m(1,"Facebook","pageview",l[h])})}function c(){var a=d.FB&&d.FB.getLoginStatus;a?(b(a),p(d,y,function(c){try{"facebook.com"===c.origin[C](-12)&&c.data&&~c.data[r]("xd_action=proxy_ready")&&b(a)}catch(e){}})):--e&&setTimeout(c,2E3)}var g=0,e=5,k;for(k in R)a(new Image(1,1),k);c()}function Z(){function a(){m(0,"print",q.title,
l[h]);c&&c.removeListener(a);w(d,"afterprint",a);a=null}var b=d.matchMedia,c=b&&b("print");c&&c.addListener(a);p(d,"afterprint",a)}function aa(){function a(a){e=a[E]||a[H];d=a.type;~d[r]("fullscreen")&&(d=q.fullScreen||q.mozFullScreen||q.webkitIsFullScreen?"fullscreen":"");d&&m(0,e.tagName[D]()+":html5",d,e.currentSrc||e.src)}for(var b="ended pause play webkitfullscreenchange mozfullscreenchange fullscreenchange".split(" "),c=ba("AUDIO","VIDEO"),g=c[n],e,d,f;g--;)for(e=c[g],f=0;6>f;)p(e,b[f++],a);
ca()}function ca(){function a(a){(f=["ended","play","pause"][a.data])&&m(0,"video:youtube",f,a[E].getVideoUrl())}for(var b=/^(https?:)?\/\/(www\.)?youtube(\-nocookie)\.com\/(embed|watch|v)/,c=A("IFRAME"),g=c[n],e=0,k=[],f,h,l;e<g;)h=c[e++],l=h.src,b.test(l)&&(0>l[r]("enablejsapi")&&(h.src+=(~l[r]("?")?"&":"?")+"enablejsapi=1"),k[B](h));if(g=k[n])d.onYouTubeIframeAPIReady=function(){for(e=0;e<g;)p(new d.YT.Player(k[e++]),"onStateChange",a)},d.YT||(A("HEAD")[0].appendChild(q.createElement("SCRIPT")).src=
"//www.youtube.com/iframe_api")}function da(){var a={25:0,50:0,75:0,100:0},b=q.documentElement,c;p(d,"scroll",function(){(c=25*~~((b.scrollTop+q.body.scrollTop)/(b.scrollHeight-b.clientHeight)*100/25))&&!a[c]&&(a[c]=1,m(0,"scroll","depth",c+"%"))})}function p(a,b,c){a[S]?a[S](b,c,!1):a.attachEvent("on"+b,c)}function w(a,b,c){a[T]?a[T](b,c,!1):a.detachEvent("on"+b,c)}function F(a){for(a=a[E]||a[H];a&&"A"!==a.tagName;)a=a.parentNode;return a}function m(a){var b=U[v].call(arguments,0),c;b[0]=b[0]?J:
"event";"function"===typeof d[K]&&(c=d[K].getAll&&d[K].getAll())&&t(c,"send",b);c=b;var g=d.TagLoader,e=d.s,k=[],f=1;if(g&&e&&e instanceof g){for(;f<c[n];f++)g="prop"+f,k[B](g),e[g]=c[f];e.linkTrackEvents="None";e.linkTrackVars=k.join(",");t([e],"tl",[e,"download"===c[1]?"d":"o",c[0]])}c=[].concat(b);J==c[0]&&(c[1]=J+":"+c.splice(2,1,c[1])[0]);c=c[v](1);t([d],"ClickTaleEvent",[c.join(":")]);t([d],"__utmTrackEvent",c);d._hmt&&t([d._hmt],B,[["_trackEvent"].concat(c)]);if(d._gat||d._gaq)c=d._gat&&d._gat._getTrackers&&
d._gat._getTrackers(),b[0]={social:"_trackSocial",event:"_trackEvent"}[b[0]],c?t(c,b[0],b[v](1)):d._gaq&&t([d._gaq],B,[b])}function t(a,b,c){var d=a[n],e=0,f;for(ea(b,c);e<d;)f=a[e++],"function"===typeof f[b]&&f[b].apply(f,c)}function ea(a){var b=d.console;f.debugMode&&b&&b.log.apply(b,arguments)}function ba(a){for(var b=[],c=U[v].call(arguments,0),d=0;d<c[n];)b[B](A(c[d++]));return b}function A(a){return q.getElementsByTagName(a)}var V={trackTwitter:1,trackFacebook:1,trackLinkedIn:1,trackDownloads:1,
trackOutbound:1,trackForms:1,trackUsers:1,trackActions:1,trackPrint:1,trackMedia:1,trackScroll:1,debugMode:/[?&]debug=1/.test(l.search)},W={"plus.google.com":"Google+","plus.url.google.com":"Google+","blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter","t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki","xing.com":"Xing","youtube.com":"YouTube",
"youtu.be":"YouTube","twoo.com":"Twoo","reddit.com":"Reddit","pinterest.com":"Pinterest","digg.com":"Digg","4sq.com":"Foursquare","foursquare.com":"Foursquare","hi.baidu.com":"Baidu Space"},R={Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1",
"Google+":"//plus.google.com/up/?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png",Twitter:"//twitter.com/login?redirect_after_login=https%3A%2F%2Fplatform.twitter.com%2Fwidgets%2Fimages%2Fbtn.png"},N=/\.([0-9a-z]+)(?:[\?#]|$)/i,K=d.GoogleAnalyticsObject||"ga",U=Array.prototype,f=d._ega||d._komito||{},n="length",v="slice",B="push",h="href",G="hostname",I="getAttribute",r="indexOf",C="substr",D="toLowerCase",S="addEventListener",T="removeEventListener",y="message",
u="mousedown",Q="submit",J="social",H="srcElement",E="target";(function(){var a=0,b=A("A"),c=b[n],d;for(d in V)d in f||(f[d]=V[d]);for(;a<c;){d=b[a++];var e=/^https?:$/.test(d.protocol),k=(d[h].match(N)||[""]).pop()[D]();f.trackOutbound&&e&&!~d[G][r](l[G])&&p(d,u,L);f.trackDownloads&&k&&~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,"[r](","+k+",")&&p(d,u,M);f.trackActions&&!e&&p(d,u,O)}if(f.trackForms)for(b=
q.forms,c=b[n],a=0;a<c;)p(b[a++],Q,P);f.trackTwitter&&x();f.trackFacebook&&z();f.trackLinkedIn&&X();f.trackUsers&&Y();f.trackPrint&&Z();f.trackMedia&&aa();f.trackScroll&&da()})()})(window,document,location);