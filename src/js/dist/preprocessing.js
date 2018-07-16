!function(r){var e={};function n(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return r[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=r,n.c=e,n.i=function(r){return r},n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s=52)}({16:function(r,e,n){"use strict";
/*!
 * color (https://npmjs.com/package/color)
 * @license MIT
 * @version 3.0.0
 * ==color/LICENSE==
 * Copyright (c) 2012 Heather Arthur
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.undefined
 */var t=n(23),a=n(21),o=[].slice,l=["keyword","gray","hex"],i={};Object.keys(a).forEach(function(r){i[o.call(a[r].labels).sort().join("")]=r});var h={};function s(r,e){if(!(this instanceof s))return new s(r,e);if(e&&e in l&&(e=null),e&&!(e in a))throw new Error("Unknown model: "+e);var n,c;if(r)if(r instanceof s)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"==typeof r){var u=t.get(r);if(null===u)throw new Error("Unable to parse color from string: "+r);this.model=u.model,c=a[this.model].channels,this.color=u.value.slice(0,c),this.valpha="number"==typeof u.value[c]?u.value[c]:1}else if(r.length){this.model=e||"rgb",c=a[this.model].channels;var b=o.call(r,0,c);this.color=f(b,c),this.valpha="number"==typeof r[c]?r[c]:1}else if("number"==typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var g=Object.keys(r);"alpha"in r&&(g.splice(g.indexOf("alpha"),1),this.valpha="number"==typeof r.alpha?r.alpha:0);var d=g.sort().join("");if(!(d in i))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=i[d];var p=a[this.model].labels,v=[];for(n=0;n<p.length;n++)v.push(r[p[n]]);this.color=f(v)}else this.model="rgb",this.color=[0,0,0],this.valpha=1;if(h[this.model])for(c=a[this.model].channels,n=0;n<c;n++){var m=h[this.model][n];m&&(this.color[n]=m(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function c(r,e,n){return(r=Array.isArray(r)?r:[r]).forEach(function(r){(h[r]||(h[r]=[]))[e]=n}),r=r[0],function(t){var a;return arguments.length?(n&&(t=n(t)),(a=this[r]()).color[e]=t,a):(a=this[r]().color[e],n&&(a=n(a)),a)}}function u(r){return function(e){return Math.max(0,Math.min(r,e))}}function f(r,e){for(var n=0;n<e;n++)"number"!=typeof r[n]&&(r[n]=0);return r}s.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var e=this.model in t.to?this:this.rgb(),n=1===(e=e.round("number"==typeof r?r:1)).valpha?e.color:e.color.concat(this.valpha);return t.to[e.model](n)},percentString:function(r){var e=this.rgb().round("number"==typeof r?r:1),n=1===e.valpha?e.color:e.color.concat(this.valpha);return t.to.rgb.percent(n)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},e=a[this.model].channels,n=a[this.model].labels,t=0;t<e;t++)r[n[t]]=this.color[t];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new s(this.color.map(function(r){return function(e){return function(r,e){return Number(r.toFixed(e))}(e,r)}}(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new s(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:c("rgb",0,u(255)),green:c("rgb",1,u(255)),blue:c("rgb",2,u(255)),hue:c(["hsl","hsv","hsl","hwb","hcg"],0,function(r){return(r%360+360)%360}),saturationl:c("hsl",1,u(100)),lightness:c("hsl",2,u(100)),saturationv:c("hsv",1,u(100)),value:c("hsv",2,u(100)),chroma:c("hcg",1,u(100)),gray:c("hcg",2,u(100)),white:c("hwb",1,u(100)),wblack:c("hwb",2,u(100)),cyan:c("cmyk",0,u(100)),magenta:c("cmyk",1,u(100)),yellow:c("cmyk",2,u(100)),black:c("cmyk",3,u(100)),x:c("xyz",0,u(100)),y:c("xyz",1,u(100)),z:c("xyz",2,u(100)),l:c("lab",0,u(100)),a:c("lab",1),b:c("lab",2),keyword:function(r){return arguments.length?new s(r):a[this.model].keyword(this.color)},hex:function(r){return arguments.length?new s(r):t.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,e=[],n=0;n<r.length;n++){var t=r[n]/255;e[n]=t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(r){var e=this.luminosity(),n=r.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(r){var e=this.contrast(r);return e>=7.1?"AAA":e>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;return(299*r[0]+587*r[1]+114*r[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),e=0;e<3;e++)r.color[e]=255-r.color[e];return r},lighten:function(r){var e=this.hsl();return e.color[2]+=e.color[2]*r,e},darken:function(r){var e=this.hsl();return e.color[2]-=e.color[2]*r,e},saturate:function(r){var e=this.hsl();return e.color[1]+=e.color[1]*r,e},desaturate:function(r){var e=this.hsl();return e.color[1]-=e.color[1]*r,e},whiten:function(r){var e=this.hwb();return e.color[1]+=e.color[1]*r,e},blacken:function(r){var e=this.hwb();return e.color[2]+=e.color[2]*r,e},grayscale:function(){var r=this.rgb().color,e=.3*r[0]+.59*r[1]+.11*r[2];return s.rgb(e,e,e)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var e=this.hsl(),n=e.color[0];return n=(n=(n+r)%360)<0?360+n:n,e.color[0]=n,e},mix:function(r,e){var n=r.rgb(),t=this.rgb(),a=void 0===e?.5:e,o=2*a-1,l=n.alpha()-t.alpha(),i=((o*l==-1?o:(o+l)/(1+o*l))+1)/2,h=1-i;return s.rgb(i*n.red()+h*t.red(),i*n.green()+h*t.green(),i*n.blue()+h*t.blue(),n.alpha()*a+t.alpha()*(1-a))}},Object.keys(a).forEach(function(r){if(-1===l.indexOf(r)){var e=a[r].channels;s.prototype[r]=function(){if(this.model===r)return new s(this);if(arguments.length)return new s(arguments,r);var n,t="number"==typeof arguments[e]?e:this.valpha;return new s((n=a[this.model][r].raw(this.color),Array.isArray(n)?n:[n]).concat(t),r)},s[r]=function(n){return"number"==typeof n&&(n=f(o.call(arguments),e)),new s(n,r)}}}),r.exports=s},21:function(r,e,n){
/*!
 * color-convert (https://npmjs.com/package/color-convert)
 * @license MIT
 * @version 1.9.1
 * ==color-convert/LICENSE==
 * Copyright (c) 2011-2016 Heather Arthur <fayearthur@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.undefined
 */
var t=n(4),a=n(22),o={};Object.keys(t).forEach(function(r){o[r]={},Object.defineProperty(o[r],"channels",{value:t[r].channels}),Object.defineProperty(o[r],"labels",{value:t[r].labels});var e=a(r);Object.keys(e).forEach(function(n){var t=e[n];o[r][n]=function(r){var e=function(e){if(void 0===e||null===e)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var n=r(e);if("object"==typeof n)for(var t=n.length,a=0;a<t;a++)n[a]=Math.round(n[a]);return n};return"conversion"in r&&(e.conversion=r.conversion),e}(t),o[r][n].raw=function(r){var e=function(e){return void 0===e||null===e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),r(e))};return"conversion"in r&&(e.conversion=r.conversion),e}(t)})}),r.exports=o},22:function(r,e,n){var t=n(4);function a(r){var e=function(){for(var r={},e=Object.keys(t),n=e.length,a=0;a<n;a++)r[e[a]]={distance:-1,parent:null};return r}(),n=[r];for(e[r].distance=0;n.length;)for(var a=n.pop(),o=Object.keys(t[a]),l=o.length,i=0;i<l;i++){var h=o[i],s=e[h];-1===s.distance&&(s.distance=e[a].distance+1,s.parent=a,n.unshift(h))}return e}function o(r,e){return function(n){return e(r(n))}}function l(r,e){for(var n=[e[r].parent,r],a=t[e[r].parent][r],l=e[r].parent;e[l].parent;)n.unshift(e[l].parent),a=o(t[e[l].parent][l],a),l=e[l].parent;return a.conversion=n,a}r.exports=function(r){for(var e=a(r),n={},t=Object.keys(e),o=t.length,i=0;i<o;i++){var h=t[i];null!==e[h].parent&&(n[h]=l(h,e))}return n}},23:function(r,e,n){
/*!
 * color-string (https://npmjs.com/package/color-string)
 * @license MIT
 * @version 1.5.2
 * ==color-string/LICENSE==
 * Copyright (c) 2011 Heather Arthur <fayearthur@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.undefined
 */
var t=n(5),a=n(25),o={};for(var l in t)t.hasOwnProperty(l)&&(o[t[l]]=l);var i=r.exports={to:{}};function h(r,e,n){return Math.min(Math.max(e,r),n)}function s(r){var e=r.toString(16).toUpperCase();return e.length<2?"0"+e:e}i.get=function(r){var e,n;switch(r.substring(0,3).toLowerCase()){case"hsl":e=i.get.hsl(r),n="hsl";break;case"hwb":e=i.get.hwb(r),n="hwb";break;default:e=i.get.rgb(r),n="rgb"}return e?{model:n,value:e}:null},i.get.rgb=function(r){if(!r)return null;var e,n,a,o=[0,0,0,1];if(e=r.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=e[2],e=e[1],n=0;n<3;n++){var l=2*n;o[n]=parseInt(e.slice(l,l+2),16)}a&&(o[3]=Math.round(parseInt(a,16)/255*100)/100)}else if(e=r.match(/^#([a-f0-9]{3,4})$/i)){for(a=(e=e[1])[3],n=0;n<3;n++)o[n]=parseInt(e[n]+e[n],16);a&&(o[3]=Math.round(parseInt(a+a,16)/255*100)/100)}else if(e=r.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(n=0;n<3;n++)o[n]=parseInt(e[n+1],0);e[4]&&(o[3]=parseFloat(e[4]))}else{if(!(e=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(e=r.match(/(\D+)/))?"transparent"===e[1]?[0,0,0,0]:(o=t[e[1]])?(o[3]=1,o):null:null;for(n=0;n<3;n++)o[n]=Math.round(2.55*parseFloat(e[n+1]));e[4]&&(o[3]=parseFloat(e[4]))}for(n=0;n<3;n++)o[n]=h(o[n],0,255);return o[3]=h(o[3],0,1),o},i.get.hsl=function(r){if(!r)return null;var e=r.match(/^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(e){var n=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,h(parseFloat(e[2]),0,100),h(parseFloat(e[3]),0,100),h(isNaN(n)?1:n,0,1)]}return null},i.get.hwb=function(r){if(!r)return null;var e=r.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(e){var n=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,h(parseFloat(e[2]),0,100),h(parseFloat(e[3]),0,100),h(isNaN(n)?1:n,0,1)]}return null},i.to.hex=function(){var r=a(arguments);return"#"+s(r[0])+s(r[1])+s(r[2])+(r[3]<1?s(Math.round(255*r[3])):"")},i.to.rgb=function(){var r=a(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},i.to.rgb.percent=function(){var r=a(arguments),e=Math.round(r[0]/255*100),n=Math.round(r[1]/255*100),t=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+e+"%, "+n+"%, "+t+"%)":"rgba("+e+"%, "+n+"%, "+t+"%, "+r[3]+")"},i.to.hsl=function(){var r=a(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},i.to.hwb=function(){var r=a(arguments),e="";return r.length>=4&&1!==r[3]&&(e=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+e+")"},i.to.keyword=function(r){return o[r.slice(0,3)]}},25:function(r,e,n){"use strict";
/*!
 * simple-swizzle (https://npmjs.com/package/simple-swizzle)
 * @license MIT
 * @version 0.2.2
 * ==simple-swizzle/LICENSE==
 * The MIT License (MIT)
 * 
 * Copyright (c) 2015 Josh Junon
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var t=n(26),a=Array.prototype.concat,o=Array.prototype.slice,l=r.exports=function(r){for(var e=[],n=0,l=r.length;n<l;n++){var i=r[n];t(i)?e=a.call(e,o.call(i)):e.push(i)}return e};l.wrap=function(r){return function(){return r(l(arguments))}}},26:function(r,e){
/*!
 * is-arrayish (https://npmjs.com/package/is-arrayish)
 * @license MIT
 * @version 0.3.2
 * ==is-arrayish/LICENSE==
 * The MIT License (MIT)
 * 
 * Copyright (c) 2015 JD Ballard
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
r.exports=function(r){return!(!r||"string"==typeof r)&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))}},4:function(r,e,n){var t=n(5),a={};for(var o in t)t.hasOwnProperty(o)&&(a[t[o]]=o);var l=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var i in l)if(l.hasOwnProperty(i)){if(!("channels"in l[i]))throw new Error("missing channels property: "+i);if(!("labels"in l[i]))throw new Error("missing channel labels property: "+i);if(l[i].labels.length!==l[i].channels)throw new Error("channel and label counts mismatch: "+i);var h=l[i].channels,s=l[i].labels;delete l[i].channels,delete l[i].labels,Object.defineProperty(l[i],"channels",{value:h}),Object.defineProperty(l[i],"labels",{value:s})}l.rgb.hsl=function(r){var e,n,t=r[0]/255,a=r[1]/255,o=r[2]/255,l=Math.min(t,a,o),i=Math.max(t,a,o),h=i-l;return i===l?e=0:t===i?e=(a-o)/h:a===i?e=2+(o-t)/h:o===i&&(e=4+(t-a)/h),(e=Math.min(60*e,360))<0&&(e+=360),n=(l+i)/2,[e,100*(i===l?0:n<=.5?h/(i+l):h/(2-i-l)),100*n]},l.rgb.hsv=function(r){var e,n,t=r[0],a=r[1],o=r[2],l=Math.min(t,a,o),i=Math.max(t,a,o),h=i-l;return n=0===i?0:h/i*1e3/10,i===l?e=0:t===i?e=(a-o)/h:a===i?e=2+(o-t)/h:o===i&&(e=4+(t-a)/h),(e=Math.min(60*e,360))<0&&(e+=360),[e,n,i/255*1e3/10]},l.rgb.hwb=function(r){var e=r[0],n=r[1],t=r[2];return[l.rgb.hsl(r)[0],100*(1/255*Math.min(e,Math.min(n,t))),100*(t=1-1/255*Math.max(e,Math.max(n,t)))]},l.rgb.cmyk=function(r){var e,n=r[0]/255,t=r[1]/255,a=r[2]/255;return[100*((1-n-(e=Math.min(1-n,1-t,1-a)))/(1-e)||0),100*((1-t-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]},l.rgb.keyword=function(r){var e=a[r];if(e)return e;var n,o,l,i=1/0;for(var h in t)if(t.hasOwnProperty(h)){var s=t[h],c=(o=r,l=s,Math.pow(o[0]-l[0],2)+Math.pow(o[1]-l[1],2)+Math.pow(o[2]-l[2],2));c<i&&(i=c,n=h)}return n},l.keyword.rgb=function(r){return t[r]},l.rgb.xyz=function(r){var e=r[0]/255,n=r[1]/255,t=r[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*e+.7152*n+.0722*t),100*(.0193*e+.1192*n+.9505*t)]},l.rgb.lab=function(r){var e=l.rgb.xyz(r),n=e[0],t=e[1],a=e[2];return t/=100,a/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(n-t),200*(t-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},l.hsl.rgb=function(r){var e,n,t,a,o,l=r[0]/360,i=r[1]/100,h=r[2]/100;if(0===i)return[o=255*h,o,o];e=2*h-(n=h<.5?h*(1+i):h+i-h*i),a=[0,0,0];for(var s=0;s<3;s++)(t=l+1/3*-(s-1))<0&&t++,t>1&&t--,o=6*t<1?e+6*(n-e)*t:2*t<1?n:3*t<2?e+(n-e)*(2/3-t)*6:e,a[s]=255*o;return a},l.hsl.hsv=function(r){var e=r[0],n=r[1]/100,t=r[2]/100,a=n,o=Math.max(t,.01);return n*=(t*=2)<=1?t:2-t,a*=o<=1?o:2-o,[e,100*(0===t?2*a/(o+a):2*n/(t+n)),100*((t+n)/2)]},l.hsv.rgb=function(r){var e=r[0]/60,n=r[1]/100,t=r[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),l=255*t*(1-n),i=255*t*(1-n*o),h=255*t*(1-n*(1-o));switch(t*=255,a){case 0:return[t,h,l];case 1:return[i,t,l];case 2:return[l,t,h];case 3:return[l,i,t];case 4:return[h,l,t];case 5:return[t,l,i]}},l.hsv.hsl=function(r){var e,n,t,a=r[0],o=r[1]/100,l=r[2]/100,i=Math.max(l,.01);return t=(2-o)*l,n=o*i,[a,100*(n=(n/=(e=(2-o)*i)<=1?e:2-e)||0),100*(t/=2)]},l.hwb.rgb=function(r){var e,n,t,a,o,l,i,h=r[0]/360,s=r[1]/100,c=r[2]/100,u=s+c;switch(u>1&&(s/=u,c/=u),n=1-c,t=6*h-(e=Math.floor(6*h)),0!=(1&e)&&(t=1-t),a=s+t*(n-s),e){default:case 6:case 0:o=n,l=a,i=s;break;case 1:o=a,l=n,i=s;break;case 2:o=s,l=n,i=a;break;case 3:o=s,l=a,i=n;break;case 4:o=a,l=s,i=n;break;case 5:o=n,l=s,i=a}return[255*o,255*l,255*i]},l.cmyk.rgb=function(r){var e=r[0]/100,n=r[1]/100,t=r[2]/100,a=r[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a))]},l.xyz.rgb=function(r){var e,n,t,a=r[0]/100,o=r[1]/100,l=r[2]/100;return n=-.9689*a+1.8758*o+.0415*l,t=.0557*a+-.204*o+1.057*l,e=(e=3.2406*a+-1.5372*o+-.4986*l)>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,[255*(e=Math.min(Math.max(0,e),1)),255*(n=Math.min(Math.max(0,n),1)),255*(t=Math.min(Math.max(0,t),1))]},l.xyz.lab=function(r){var e=r[0],n=r[1],t=r[2];return n/=100,t/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(e-n),200*(n-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]},l.lab.xyz=function(r){var e,n,t,a=r[0],o=r[1],l=r[2];e=o/500+(n=(a+16)/116),t=n-l/200;var i=Math.pow(n,3),h=Math.pow(e,3),s=Math.pow(t,3);return n=i>.008856?i:(n-16/116)/7.787,e=h>.008856?h:(e-16/116)/7.787,t=s>.008856?s:(t-16/116)/7.787,[e*=95.047,n*=100,t*=108.883]},l.lab.lch=function(r){var e,n=r[0],t=r[1],a=r[2];return(e=360*Math.atan2(a,t)/2/Math.PI)<0&&(e+=360),[n,Math.sqrt(t*t+a*a),e]},l.lch.lab=function(r){var e,n=r[0],t=r[1];return e=r[2]/360*2*Math.PI,[n,t*Math.cos(e),t*Math.sin(e)]},l.rgb.ansi16=function(r){var e=r[0],n=r[1],t=r[2],a=1 in arguments?arguments[1]:l.rgb.hsv(r)[2];if(0===(a=Math.round(a/50)))return 30;var o=30+(Math.round(t/255)<<2|Math.round(n/255)<<1|Math.round(e/255));return 2===a&&(o+=60),o},l.hsv.ansi16=function(r){return l.rgb.ansi16(l.hsv.rgb(r),r[2])},l.rgb.ansi256=function(r){var e=r[0],n=r[1],t=r[2];return e===n&&n===t?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(t/255*5)},l.ansi16.rgb=function(r){var e=r%10;if(0===e||7===e)return r>50&&(e+=3.5),[e=e/10.5*255,e,e];var n=.5*(1+~~(r>50));return[(1&e)*n*255,(e>>1&1)*n*255,(e>>2&1)*n*255]},l.ansi256.rgb=function(r){if(r>=232){var e=10*(r-232)+8;return[e,e,e]}var n;return r-=16,[Math.floor(r/36)/5*255,Math.floor((n=r%36)/6)/5*255,n%6/5*255]},l.rgb.hex=function(r){var e=(((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},l.hex.rgb=function(r){var e=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var n=e[0];3===e[0].length&&(n=n.split("").map(function(r){return r+r}).join(""));var t=parseInt(n,16);return[t>>16&255,t>>8&255,255&t]},l.rgb.hcg=function(r){var e,n,t=r[0]/255,a=r[1]/255,o=r[2]/255,l=Math.max(Math.max(t,a),o),i=Math.min(Math.min(t,a),o),h=l-i;return e=h<1?i/(1-h):0,n=h<=0?0:l===t?(a-o)/h%6:l===a?2+(o-t)/h:4+(t-a)/h+4,n/=6,[360*(n%=1),100*h,100*e]},l.hsl.hcg=function(r){var e=r[1]/100,n=r[2]/100,t=1,a=0;return(t=n<.5?2*e*n:2*e*(1-n))<1&&(a=(n-.5*t)/(1-t)),[r[0],100*t,100*a]},l.hsv.hcg=function(r){var e=r[1]/100,n=r[2]/100,t=e*n,a=0;return t<1&&(a=(n-t)/(1-t)),[r[0],100*t,100*a]},l.hcg.rgb=function(r){var e=r[0]/360,n=r[1]/100,t=r[2]/100;if(0===n)return[255*t,255*t,255*t];var a,o=[0,0,0],l=e%1*6,i=l%1,h=1-i;switch(Math.floor(l)){case 0:o[0]=1,o[1]=i,o[2]=0;break;case 1:o[0]=h,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=i;break;case 3:o[0]=0,o[1]=h,o[2]=1;break;case 4:o[0]=i,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=h}return a=(1-n)*t,[255*(n*o[0]+a),255*(n*o[1]+a),255*(n*o[2]+a)]},l.hcg.hsv=function(r){var e=r[1]/100,n=e+r[2]/100*(1-e),t=0;return n>0&&(t=e/n),[r[0],100*t,100*n]},l.hcg.hsl=function(r){var e=r[1]/100,n=r[2]/100*(1-e)+.5*e,t=0;return n>0&&n<.5?t=e/(2*n):n>=.5&&n<1&&(t=e/(2*(1-n))),[r[0],100*t,100*n]},l.hcg.hwb=function(r){var e=r[1]/100,n=e+r[2]/100*(1-e);return[r[0],100*(n-e),100*(1-n)]},l.hwb.hcg=function(r){var e=r[1]/100,n=1-r[2]/100,t=n-e,a=0;return t<1&&(a=(n-t)/(1-t)),[r[0],100*t,100*a]},l.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},l.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},l.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},l.gray.hsl=l.gray.hsv=function(r){return[0,0,r[0]]},l.gray.hwb=function(r){return[0,100,r[0]]},l.gray.cmyk=function(r){return[0,0,0,r[0]]},l.gray.lab=function(r){return[r[0],0,0]},l.gray.hex=function(r){var e=255&Math.round(r[0]/100*255),n=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(n.length)+n},l.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]}},5:function(r,e,n){"use strict";
/*!
 * color-name (https://npmjs.com/package/color-name)
 * @license MIT
 * @version 1.1.3
 * ==color-name/LICENSE==
 * The MIT License (MIT)
 * Copyright (c) 2015 Dmitry Ivanov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},52:function(r,e,n){"use strict";var t=n(16);!function(){var r=new Array("#ffc0cb","#008080","#ff0000","#ffd700","#00ffff","#40e0d0","#ff7373","#0000ff","#ffa500","#b0e0e6","#7fffd4","#c6e2ff","#faebd7","#800080","#cccccc","#fa8072","#ffb6c1","#333333","#800000","#00ff00","#003366","#c0c0c0","#66cdaa","#ff6666","#666666","#c39797","#00ced1","#ffdab9","#ff00ff","#008000","#FE6A6B","#088da5","#c0d6e4","#660066","#0e2f44","#808080","#8b0000","#ff7f50","#990000","#daa520","#00ff7f","#66cccc","#8a2be2","#81d8d0","#3399ff","#a0db8e","#0bd800","#ff4040","#794044","#cc0000","#000080","#3b5998","#ccff00","#999999","#191970","#31698a","#6897bb","#0099cc","#ff4444","#ff1493","#6dc066");!function(){try{var e=(h=function(r,e,n){n=n||100,e=e||1e4;for(var t=0;t<n;t++)r=(r^r<<1^r>>1)%e;return r}(Math.floor((new Date).getTime()/864e5),r.length),r[h%r.length]);if(void 0!==e){var n=t(e),a=n.alpha(.5).lighten(.5),o=n.alpha(.9).darken(.5),l=n.negate().alpha(.5).darken(.2),i=l.alpha(.9).darken(.5);document.documentElement.style.setProperty("--accent-color",e),document.documentElement.style.setProperty("--rev-accent-color",l.hex()),document.documentElement.style.setProperty("--accent-color-light",a.hex()),document.documentElement.style.setProperty("--accent-color-dark",o.hex()),document.documentElement.style.setProperty("--rev-accent-color-dark",i.hex())}}catch(r){console.log("Unable to create color theme: ",r)}var h}()}()}});