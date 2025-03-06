(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="160",Sf=0,vl=1,Ef=2,pu=1,Tf=2,On=3,si=0,Ft=1,_n=2,ei=0,lr=1,xl=2,yl=3,Ml=4,Af=5,Mi=100,bf=101,wf=102,Sl=103,El=104,Rf=200,Cf=201,Pf=202,Lf=203,co=204,uo=205,Df=206,If=207,Uf=208,Nf=209,Of=210,Ff=211,Bf=212,zf=213,kf=214,Hf=0,Gf=1,Vf=2,Vs=3,Wf=4,Xf=5,qf=6,Yf=7,mu=0,Zf=1,Kf=2,ti=0,Jf=1,$f=2,jf=3,Qf=4,ed=5,td=6,_u=300,dr=301,pr=302,ho=303,fo=304,ia=306,po=1e3,gn=1001,mo=1002,Nt=1003,Tl=1004,xa=1005,ln=1006,nd=1007,Wr=1008,ni=1009,id=1010,rd=1011,Fo=1012,gu=1013,Kn=1014,Jn=1015,Xr=1016,vu=1017,xu=1018,Ti=1020,sd=1021,vn=1023,ad=1024,od=1025,Ai=1026,mr=1027,ld=1028,yu=1029,cd=1030,Mu=1031,Su=1033,ya=33776,Ma=33777,Sa=33778,Ea=33779,Al=35840,bl=35841,wl=35842,Rl=35843,Eu=36196,Cl=37492,Pl=37496,Ll=37808,Dl=37809,Il=37810,Ul=37811,Nl=37812,Ol=37813,Fl=37814,Bl=37815,zl=37816,kl=37817,Hl=37818,Gl=37819,Vl=37820,Wl=37821,Ta=36492,Xl=36494,ql=36495,ud=36283,Yl=36284,Zl=36285,Kl=36286,Tu=3e3,bi=3001,hd=3200,fd=3201,Au=0,dd=1,cn="",Mt="srgb",kn="srgb-linear",Bo="display-p3",ra="display-p3-linear",Ws="linear",Je="srgb",Xs="rec709",qs="p3",zi=7680,Jl=519,pd=512,md=513,_d=514,bu=515,gd=516,vd=517,xd=518,yd=519,$l=35044,jl="300 es",_o=1035,zn=2e3,Ys=2001;class Er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const Nr=Math.PI/180,qr=180/Math.PI;function Fi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[r&255]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function zo(r,e){return(r%e+e)%e}function Md(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Sd(r,e,t){return r!==e?(t-r)/(e-r):0}function Or(r,e,t){return(1-t)*r+t*e}function Ed(r,e,t,n){return Or(r,e,1-Math.exp(-t*n))}function Td(r,e=1){return e-Math.abs(zo(r,e*2)-e)}function Ad(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function bd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function wd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Rd(r,e){return r+Math.random()*(e-r)}function Cd(r){return r*(.5-Math.random())}function Pd(r){r!==void 0&&(Ql=r);let e=Ql+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ld(r){return r*Nr}function Dd(r){return r*qr}function go(r){return(r&r-1)===0&&r!==0}function Id(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Zs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ud(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),h=s((e+n)/2),f=a((e+n)/2),l=s((e-n)/2),u=a((e-n)/2),d=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*f,c*l,c*u,o*h);break;case"YZY":r.set(c*u,o*f,c*l,o*h);break;case"ZXZ":r.set(c*l,c*u,o*f,o*h);break;case"XZX":r.set(o*f,c*_,c*d,o*h);break;case"YXY":r.set(c*d,o*f,c*_,o*h);break;case"ZYZ":r.set(c*_,c*d,o*f,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function nr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function It(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ko={DEG2RAD:Nr,RAD2DEG:qr,generateUUID:Fi,clamp:St,euclideanModulo:zo,mapLinear:Md,inverseLerp:Sd,lerp:Or,damp:Ed,pingpong:Td,smoothstep:Ad,smootherstep:bd,randInt:wd,randFloat:Rd,randFloatSpread:Cd,seededRandom:Pd,degToRad:Ld,radToDeg:Dd,isPowerOfTwo:go,ceilPowerOfTwo:Id,floorPowerOfTwo:Zs,setQuaternionFromProperEuler:Ud,normalize:It,denormalize:nr};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,s,a,o,c,h){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,h)}set(e,t,n,i,s,a,o,c,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],f=n[4],l=n[7],u=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],x=i[1],v=i[4],M=i[7],R=i[2],w=i[5],b=i[8];return s[0]=a*g+o*x+c*R,s[3]=a*m+o*v+c*w,s[6]=a*p+o*M+c*b,s[1]=h*g+f*x+l*R,s[4]=h*m+f*v+l*w,s[7]=h*p+f*M+l*b,s[2]=u*g+d*x+_*R,s[5]=u*m+d*v+_*w,s[8]=u*p+d*M+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],h=e[7],f=e[8];return t*a*f-t*o*h-n*s*f+n*o*c+i*s*h-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],h=e[7],f=e[8],l=f*a-o*h,u=o*c-f*s,d=h*s-a*c,_=t*l+n*u+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=l*g,e[1]=(i*h-f*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(f*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*c-h*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),h=Math.sin(s);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-i*h,i*c,-i*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Be;function wu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Nd(){const r=Yr("canvas");return r.style.display="block",r}const ec={};function Fr(r){r in ec||(ec[r]=!0,console.warn(r))}const tc=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nc=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fs={[kn]:{transfer:Ws,primaries:Xs,toReference:r=>r,fromReference:r=>r},[Mt]:{transfer:Je,primaries:Xs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ra]:{transfer:Ws,primaries:qs,toReference:r=>r.applyMatrix3(nc),fromReference:r=>r.applyMatrix3(tc)},[Bo]:{transfer:Je,primaries:qs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(nc),fromReference:r=>r.applyMatrix3(tc).convertLinearToSRGB()}},Od=new Set([kn,ra]),Xe={enabled:!0,_workingColorSpace:kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Od.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=fs[e].toReference,i=fs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return fs[r].primaries},getTransfer:function(r){return r===cn?Ws:fs[r].transfer}};function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ba(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ki;class Ru{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=Yr("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fd=0;class Cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(wa(i[a].image)):s.push(wa(i[a]))}else s=wa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function wa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ru.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bd=0;class Bt extends Er{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=gn,i=gn,s=ln,a=Wr,o=vn,c=ni,h=Bt.DEFAULT_ANISOTROPY,f=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Fi(),this.name="",this.source=new Cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===bi?Mt:cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case po:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case po:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?bi:Tu}set encoding(e){Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bi?Mt:cn}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=_u;Bt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,h=c[0],f=c[4],l=c[8],u=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(f-u)<.01&&Math.abs(l-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(l+g)<.1&&Math.abs(_+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(h+1)/2,M=(d+1)/2,R=(p+1)/2,w=(f+u)/4,b=(l+g)/4,D=(_+m)/4;return v>M&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=b/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=D/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=b/s,i=D/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(l-g)*(l-g)+(u-f)*(u-f));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(l-g)/x,this.z=(u-f)/x,this.w=Math.acos((h+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zd extends Er{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===bi?Mt:cn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends zd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pu extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kd extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],h=n[i+1],f=n[i+2],l=n[i+3];const u=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=f,e[t+3]=l;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(l!==g||c!==u||h!==d||f!==_){let m=1-o;const p=c*u+h*d+f*_+l*g,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,p*x);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const M=o*x;if(c=c*m+u*M,h=h*m+d*M,f=f*m+_*M,l=l*m+g*M,m===1-o){const R=1/Math.sqrt(c*c+h*h+f*f+l*l);c*=R,h*=R,f*=R,l*=R}}e[t]=c,e[t+1]=h,e[t+2]=f,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],h=n[i+2],f=n[i+3],l=s[a],u=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+f*l+c*d-h*u,e[t+1]=c*_+f*u+h*l-o*d,e[t+2]=h*_+f*d+o*u-c*l,e[t+3]=f*_-o*l-c*u-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),f=o(i/2),l=o(s/2),u=c(n/2),d=c(i/2),_=c(s/2);switch(a){case"XYZ":this._x=u*f*l+h*d*_,this._y=h*d*l-u*f*_,this._z=h*f*_+u*d*l,this._w=h*f*l-u*d*_;break;case"YXZ":this._x=u*f*l+h*d*_,this._y=h*d*l-u*f*_,this._z=h*f*_-u*d*l,this._w=h*f*l+u*d*_;break;case"ZXY":this._x=u*f*l-h*d*_,this._y=h*d*l+u*f*_,this._z=h*f*_+u*d*l,this._w=h*f*l-u*d*_;break;case"ZYX":this._x=u*f*l-h*d*_,this._y=h*d*l+u*f*_,this._z=h*f*_-u*d*l,this._w=h*f*l+u*d*_;break;case"YZX":this._x=u*f*l+h*d*_,this._y=h*d*l+u*f*_,this._z=h*f*_-u*d*l,this._w=h*f*l-u*d*_;break;case"XZY":this._x=u*f*l-h*d*_,this._y=h*d*l-u*f*_,this._z=h*f*_+u*d*l,this._w=h*f*l+u*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],h=t[2],f=t[6],l=t[10],u=n+o+l;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-c)*d,this._y=(s-h)*d,this._z=(a-i)*d}else if(n>o&&n>l){const d=2*Math.sqrt(1+n-o-l);this._w=(f-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+h)/d}else if(o>l){const d=2*Math.sqrt(1+o-n-l);this._w=(s-h)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+f)/d}else{const d=2*Math.sqrt(1+l-n-o);this._w=(a-i)/d,this._x=(s+h)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,h=t._z,f=t._w;return this._x=n*f+a*o+i*h-s*c,this._y=i*f+a*c+s*o-n*h,this._z=s*f+a*h+n*c-i*o,this._w=a*f-n*o-i*c-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const h=Math.sqrt(c),f=Math.atan2(h,o),l=Math.sin((1-t)*f)/h,u=Math.sin(t*f)/h;return this._w=a*l+this._w*u,this._x=n*l+this._x*u,this._y=i*l+this._y*u,this._z=s*l+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*i-o*n),f=2*(o*t-s*i),l=2*(s*n-a*t);return this.x=t+c*h+a*l-o*f,this.y=n+c*f+o*h-s*l,this.z=i+c*l+s*f-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new L,ic=new rs;class ss{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(s,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),ps.subVectors(this.max,br),Hi.subVectors(e.a,br),Gi.subVectors(e.b,br),Vi.subVectors(e.c,br),Wn.subVectors(Gi,Hi),Xn.subVectors(Vi,Gi),fi.subVectors(Hi,Vi);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-fi.z,fi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,fi.z,0,-fi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-fi.y,fi.x,0];return!Ca(t,Hi,Gi,Vi,ps)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,Hi,Gi,Vi,ps))?!1:(ms.crossVectors(Wn,Xn),t=[ms.x,ms.y,ms.z],Ca(t,Hi,Gi,Vi,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new L,new L,new L,new L,new L,new L,new L,new L],fn=new L,ds=new ss,Hi=new L,Gi=new L,Vi=new L,Wn=new L,Xn=new L,fi=new L,br=new L,ps=new L,ms=new L,di=new L;function Ca(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){di.fromArray(r,s);const o=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),c=e.dot(di),h=t.dot(di),f=n.dot(di);if(Math.max(-Math.max(c,h,f),Math.min(c,h,f))>o)return!1}return!0}const Hd=new ss,wr=new L,Pa=new L;class Ho{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);const t=wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(wr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Pa)),this.expandByPoint(wr.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new L,La=new L,_s=new L,qn=new L,Da=new L,gs=new L,Ia=new L;class Gd{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){La.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(La);const s=e.distanceTo(t)*.5,a=-this.direction.dot(_s),o=qn.dot(this.direction),c=-qn.dot(_s),h=qn.lengthSq(),f=Math.abs(1-a*a);let l,u,d,_;if(f>0)if(l=a*c-o,u=a*o-c,_=s*f,l>=0)if(u>=-_)if(u<=_){const g=1/f;l*=g,u*=g,d=l*(l+a*u+2*o)+u*(a*l+u+2*c)+h}else u=s,l=Math.max(0,-(a*u+o)),d=-l*l+u*(u+2*c)+h;else u=-s,l=Math.max(0,-(a*u+o)),d=-l*l+u*(u+2*c)+h;else u<=-_?(l=Math.max(0,-(-a*s+o)),u=l>0?-s:Math.min(Math.max(-s,-c),s),d=-l*l+u*(u+2*c)+h):u<=_?(l=0,u=Math.min(Math.max(-s,-c),s),d=u*(u+2*c)+h):(l=Math.max(0,-(a*s+o)),u=l>0?s:Math.min(Math.max(-s,-c),s),d=-l*l+u*(u+2*c)+h);else u=a>0?-s:s,l=Math.max(0,-(a*u+o)),d=-l*l+u*(u+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(La).addScaledVector(_s,u),d}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const h=1/this.direction.x,f=1/this.direction.y,l=1/this.direction.z,u=this.origin;return h>=0?(n=(e.min.x-u.x)*h,i=(e.max.x-u.x)*h):(n=(e.max.x-u.x)*h,i=(e.min.x-u.x)*h),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),l>=0?(o=(e.min.z-u.z)*l,c=(e.max.z-u.z)*l):(o=(e.max.z-u.z)*l,c=(e.min.z-u.z)*l),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,s){Da.subVectors(t,e),gs.subVectors(n,e),Ia.crossVectors(Da,gs);let a=this.direction.dot(Ia),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const c=o*this.direction.dot(gs.crossVectors(qn,gs));if(c<0)return null;const h=o*this.direction.dot(Da.cross(qn));if(h<0||c+h>a)return null;const f=-o*qn.dot(Ia);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,i,s,a,o,c,h,f,l,u,d,_,g,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,h,f,l,u,d,_,g,m)}set(e,t,n,i,s,a,o,c,h,f,l,u,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=f,p[10]=l,p[14]=u,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),f=Math.cos(s),l=Math.sin(s);if(e.order==="XYZ"){const u=a*f,d=a*l,_=o*f,g=o*l;t[0]=c*f,t[4]=-c*l,t[8]=h,t[1]=d+_*h,t[5]=u-g*h,t[9]=-o*c,t[2]=g-u*h,t[6]=_+d*h,t[10]=a*c}else if(e.order==="YXZ"){const u=c*f,d=c*l,_=h*f,g=h*l;t[0]=u+g*o,t[4]=_*o-d,t[8]=a*h,t[1]=a*l,t[5]=a*f,t[9]=-o,t[2]=d*o-_,t[6]=g+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*f,d=c*l,_=h*f,g=h*l;t[0]=u-g*o,t[4]=-a*l,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*f,t[9]=g-u*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*f,d=a*l,_=o*f,g=o*l;t[0]=c*f,t[4]=_*h-d,t[8]=u*h+g,t[1]=c*l,t[5]=g*h+u,t[9]=d*h-_,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,d=a*h,_=o*c,g=o*h;t[0]=c*f,t[4]=g-u*l,t[8]=_*l+d,t[1]=l,t[5]=a*f,t[9]=-o*f,t[2]=-h*f,t[6]=d*l+_,t[10]=u-g*l}else if(e.order==="XZY"){const u=a*c,d=a*h,_=o*c,g=o*h;t[0]=c*f,t[4]=-l,t[8]=h*f,t[1]=u*l+g,t[5]=a*f,t[9]=d*l-_,t[2]=_*l-d,t[6]=o*f,t[10]=g*l+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vd,e,Wd)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Yn.crossVectors(n,qt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Yn.crossVectors(n,qt)),Yn.normalize(),vs.crossVectors(qt,Yn),i[0]=Yn.x,i[4]=vs.x,i[8]=qt.x,i[1]=Yn.y,i[5]=vs.y,i[9]=qt.y,i[2]=Yn.z,i[6]=vs.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],f=n[1],l=n[5],u=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],x=n[3],v=n[7],M=n[11],R=n[15],w=i[0],b=i[4],D=i[8],y=i[12],T=i[1],N=i[5],G=i[9],q=i[13],P=i[2],U=i[6],k=i[10],W=i[14],X=i[3],Y=i[7],K=i[11],ee=i[15];return s[0]=a*w+o*T+c*P+h*X,s[4]=a*b+o*N+c*U+h*Y,s[8]=a*D+o*G+c*k+h*K,s[12]=a*y+o*q+c*W+h*ee,s[1]=f*w+l*T+u*P+d*X,s[5]=f*b+l*N+u*U+d*Y,s[9]=f*D+l*G+u*k+d*K,s[13]=f*y+l*q+u*W+d*ee,s[2]=_*w+g*T+m*P+p*X,s[6]=_*b+g*N+m*U+p*Y,s[10]=_*D+g*G+m*k+p*K,s[14]=_*y+g*q+m*W+p*ee,s[3]=x*w+v*T+M*P+R*X,s[7]=x*b+v*N+M*U+R*Y,s[11]=x*D+v*G+M*k+R*K,s[15]=x*y+v*q+M*W+R*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],h=e[13],f=e[2],l=e[6],u=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*c*l-i*h*l-s*o*u+n*h*u+i*o*d-n*c*d)+g*(+t*c*d-t*h*u+s*a*u-i*a*d+i*h*f-s*c*f)+m*(+t*h*l-t*o*d-s*a*l+n*a*d+s*o*f-n*h*f)+p*(-i*o*f-t*c*l+t*o*u+i*a*l-n*a*u+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],h=e[7],f=e[8],l=e[9],u=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],x=l*m*h-g*u*h+g*c*d-o*m*d-l*c*p+o*u*p,v=_*u*h-f*m*h-_*c*d+a*m*d+f*c*p-a*u*p,M=f*g*h-_*l*h+_*o*d-a*g*d-f*o*p+a*l*p,R=_*l*c-f*g*c-_*o*u+a*g*u+f*o*m-a*l*m,w=t*x+n*v+i*M+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=x*b,e[1]=(g*u*s-l*m*s-g*i*d+n*m*d+l*i*p-n*u*p)*b,e[2]=(o*m*s-g*c*s+g*i*h-n*m*h-o*i*p+n*c*p)*b,e[3]=(l*c*s-o*u*s-l*i*h+n*u*h+o*i*d-n*c*d)*b,e[4]=v*b,e[5]=(f*m*s-_*u*s+_*i*d-t*m*d-f*i*p+t*u*p)*b,e[6]=(_*c*s-a*m*s-_*i*h+t*m*h+a*i*p-t*c*p)*b,e[7]=(a*u*s-f*c*s+f*i*h-t*u*h-a*i*d+t*c*d)*b,e[8]=M*b,e[9]=(_*l*s-f*g*s-_*n*d+t*g*d+f*n*p-t*l*p)*b,e[10]=(a*g*s-_*o*s+_*n*h-t*g*h-a*n*p+t*o*p)*b,e[11]=(f*o*s-a*l*s-f*n*h+t*l*h+a*n*d-t*o*d)*b,e[12]=R*b,e[13]=(f*g*i-_*l*i+_*n*u-t*g*u-f*n*m+t*l*m)*b,e[14]=(_*o*i-a*g*i-_*n*c+t*g*c+a*n*m-t*o*m)*b,e[15]=(a*l*i-f*o*i+f*n*c-t*l*c-a*n*u+t*o*u)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,h=s*a,f=s*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,f*o+n,f*c-i*a,0,h*c-i*o,f*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,h=s+s,f=a+a,l=o+o,u=s*h,d=s*f,_=s*l,g=a*f,m=a*l,p=o*l,x=c*h,v=c*f,M=c*l,R=n.x,w=n.y,b=n.z;return i[0]=(1-(g+p))*R,i[1]=(d+M)*R,i[2]=(_-v)*R,i[3]=0,i[4]=(d-M)*w,i[5]=(1-(u+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(_+v)*b,i[9]=(m-x)*b,i[10]=(1-(u+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Wi.set(i[0],i[1],i[2]).length();const a=Wi.set(i[4],i[5],i[6]).length(),o=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],dn.copy(this);const h=1/s,f=1/a,l=1/o;return dn.elements[0]*=h,dn.elements[1]*=h,dn.elements[2]*=h,dn.elements[4]*=f,dn.elements[5]*=f,dn.elements[6]*=f,dn.elements[8]*=l,dn.elements[9]*=l,dn.elements[10]*=l,t.setFromRotationMatrix(dn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=zn){const c=this.elements,h=2*s/(t-e),f=2*s/(n-i),l=(t+e)/(t-e),u=(n+i)/(n-i);let d,_;if(o===zn)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ys)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=zn){const c=this.elements,h=1/(t-e),f=1/(n-i),l=1/(a-s),u=(t+e)*h,d=(n+i)*f;let _,g;if(o===zn)_=(a+s)*l,g=-2*l;else if(o===Ys)_=s*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new L,dn=new ct,Vd=new L(0,0,0),Wd=new L(1,1,1),Yn=new L,vs=new L,qt=new L,rc=new ct,sc=new rs;class sa{constructor(e=0,t=0,n=0,i=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],h=i[5],f=i[9],l=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class Lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xd=0;const ac=new L,Xi=new rs,In=new ct,xs=new L,Rr=new L,qd=new L,Yd=new rs,oc=new L(1,0,0),lc=new L(0,1,0),cc=new L(0,0,1),Zd={type:"added"},Kd={type:"removed"};class zt extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new L,t=new sa,n=new rs,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ct},normalMatrix:{value:new Be}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(lc,e)}rotateZ(e){return this.rotateOnAxis(cc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(lc,e)}translateZ(e){return this.translateOnAxis(cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Rr,xs,this.up):In.lookAt(xs,Rr,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Xi.setFromRotationMatrix(In),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,f=c.length;h<f;h++){const l=c[h];s(e.shapes,l)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),f=a(e.images),l=a(e.shapes),u=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),l.length>0&&(n.shapes=l),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const h in o){const f=o[h];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new L(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new L,Un=new L,Ua=new L,Nn=new L,qi=new L,Yi=new L,uc=new L,Na=new L,Oa=new L,Fa=new L;let ys=!1;class mn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pn.subVectors(i,t),Un.subVectors(n,t),Ua.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Un),c=pn.dot(Ua),h=Un.dot(Un),f=Un.dot(Ua),l=a*h-o*o;if(l===0)return s.set(0,0,0),null;const u=1/l,d=(h*c-o*f)*u,_=(a*f-o*c)*u;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(e,t,n,i,s,a,o,c){return ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ys=!0),this.getInterpolation(e,t,n,i,s,a,o,c)}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Nn.x),c.addScaledVector(a,Nn.y),c.addScaledVector(o,Nn.z),c)}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),Un.subVectors(e,t),pn.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),pn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ys=!0),mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;qi.subVectors(i,n),Yi.subVectors(s,n),Na.subVectors(e,n);const c=qi.dot(Na),h=Yi.dot(Na);if(c<=0&&h<=0)return t.copy(n);Oa.subVectors(e,i);const f=qi.dot(Oa),l=Yi.dot(Oa);if(f>=0&&l<=f)return t.copy(i);const u=c*l-f*h;if(u<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(qi,a);Fa.subVectors(e,s);const d=qi.dot(Fa),_=Yi.dot(Fa);if(_>=0&&d<=_)return t.copy(s);const g=d*h-c*_;if(g<=0&&h>=0&&_<=0)return o=h/(h-_),t.copy(n).addScaledVector(Yi,o);const m=f*_-d*l;if(m<=0&&l-f>=0&&d-_>=0)return uc.subVectors(s,i),o=(l-f)/(l-f+(d-_)),t.copy(i).addScaledVector(uc,o);const p=1/(m+g+u);return a=g*p,o=u*p,t.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Ba(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=zo(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ba(a,s,e+1/3),this.g=Ba(a,s,e),this.b=Ba(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Xe.fromWorkingColorSpace(bt.copy(this),e),Math.round(St(bt.r*255,0,255))*65536+Math.round(St(bt.g*255,0,255))*256+Math.round(St(bt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,s=bt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,h;const f=(o+a)/2;if(o===a)c=0,h=0;else{const l=a-o;switch(h=f<=.5?l/(a+o):l/(2-a-o),a){case n:c=(i-s)/l+(i<s?6:0);break;case i:c=(s-n)/l+2;break;case s:c=(n-i)/l+4;break}c/=6}return e.h=c,e.s=h,e.l=f,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Mt){Xe.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Ms);const n=Or(Zn.h,Ms.h,t),i=Or(Zn.s,Ms.s,t),s=Or(Zn.l,Ms.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ge;Ge.NAMES=Du;let Jd=0;class as extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=lr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=uo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==co&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Iu extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new L,Ss=new he;class An{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$l,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),e}}class Uu extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nu extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $d=0;const an=new ct,za=new zt,Zi=new L,Yt=new ss,Cr=new ss,xt=new L;class Vn extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wu(e)?Nu:Uu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new en(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Yt.min,Cr.min),Yt.expandByPoint(xt),xt.addVectors(Yt.max,Cr.max),Yt.expandByPoint(xt)):(Yt.expandByPoint(Cr.min),Yt.expandByPoint(Cr.max))}Yt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let h=0,f=o.count;h<f;h++)xt.fromBufferAttribute(o,h),c&&(Zi.fromBufferAttribute(e,h),xt.add(Zi)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,h=[],f=[];for(let T=0;T<o;T++)h[T]=new L,f[T]=new L;const l=new L,u=new L,d=new L,_=new he,g=new he,m=new he,p=new L,x=new L;function v(T,N,G){l.fromArray(i,T*3),u.fromArray(i,N*3),d.fromArray(i,G*3),_.fromArray(a,T*2),g.fromArray(a,N*2),m.fromArray(a,G*2),u.sub(l),d.sub(l),g.sub(_),m.sub(_);const q=1/(g.x*m.y-m.x*g.y);isFinite(q)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(q),x.copy(d).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(q),h[T].add(p),h[N].add(p),h[G].add(p),f[T].add(x),f[N].add(x),f[G].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,N=M.length;T<N;++T){const G=M[T],q=G.start,P=G.count;for(let U=q,k=q+P;U<k;U+=3)v(n[U+0],n[U+1],n[U+2])}const R=new L,w=new L,b=new L,D=new L;function y(T){b.fromArray(s,T*3),D.copy(b);const N=h[T];R.copy(N),R.sub(b.multiplyScalar(b.dot(N))).normalize(),w.crossVectors(D,N);const q=w.dot(f[T])<0?-1:1;c[T*4]=R.x,c[T*4+1]=R.y,c[T*4+2]=R.z,c[T*4+3]=q}for(let T=0,N=M.length;T<N;++T){const G=M[T],q=G.start,P=G.count;for(let U=q,k=q+P;U<k;U+=3)y(n[U+0]),y(n[U+1]),y(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new L,s=new L,a=new L,o=new L,c=new L,h=new L,f=new L,l=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){const _=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),f.subVectors(a,s),l.subVectors(i,s),f.cross(l),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),o.add(f),c.add(f),h.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),l.subVectors(i,s),f.cross(l),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){const h=o.array,f=o.itemSize,l=o.normalized,u=new h.constructor(c.length*f);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?d=c[g]*o.data.stride+o.offset:d=c[g]*f;for(let p=0;p<f;p++)u[_++]=h[d++]}return new An(u,f,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],h=e(c,n);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const c=[],h=s[o];for(let f=0,l=h.length;f<l;f++){const u=h[f],d=e(u,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],f=[];for(let l=0,u=h.length;l<u;l++){const d=h[l];f.push(d.toJSON(e.data))}f.length>0&&(i[c]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],l=s[h];for(let u=0,d=l.length;u<d;u++)f.push(l[u].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,f=a.length;h<f;h++){const l=a[h];this.addGroup(l.start,l.count,l.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new ct,pi=new Gd,Es=new Ho,fc=new L,Ki=new L,Ji=new L,$i=new L,ka=new L,Ts=new L,As=new he,bs=new he,ws=new he,dc=new L,pc=new L,mc=new L,Rs=new L,Cs=new L;class jt extends zt{constructor(e=new Vn,t=new Iu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ts.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const f=o[c],l=s[c];f!==0&&(ka.fromBufferAttribute(l,e),a?Ts.addScaledVector(ka,f):Ts.addScaledVector(ka.sub(t),f))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(Es.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Es,fc)===null||pi.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(hc.copy(s).invert(),pi.copy(e.ray).applyMatrix4(hc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,l=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,R=v;M<R;M+=3){const w=o.getX(M),b=o.getX(M+1),D=o.getX(M+2);i=Ps(this,p,e,n,h,f,l,w,b,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const x=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);i=Ps(this,a,e,n,h,f,l,x,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,R=v;M<R;M+=3){const w=M,b=M+1,D=M+2;i=Ps(this,p,e,n,h,f,l,w,b,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const x=m,v=m+1,M=m+2;i=Ps(this,a,e,n,h,f,l,x,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function jd(r,e,t,n,i,s,a,o){let c;if(e.side===Ft?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===si,o),c===null)return null;Cs.copy(o),Cs.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Cs);return h<t.near||h>t.far?null:{distance:h,point:Cs.clone(),object:r}}function Ps(r,e,t,n,i,s,a,o,c,h){r.getVertexPosition(o,Ki),r.getVertexPosition(c,Ji),r.getVertexPosition(h,$i);const f=jd(r,e,t,n,Ki,Ji,$i,Rs);if(f){i&&(As.fromBufferAttribute(i,o),bs.fromBufferAttribute(i,c),ws.fromBufferAttribute(i,h),f.uv=mn.getInterpolation(Rs,Ki,Ji,$i,As,bs,ws,new he)),s&&(As.fromBufferAttribute(s,o),bs.fromBufferAttribute(s,c),ws.fromBufferAttribute(s,h),f.uv1=mn.getInterpolation(Rs,Ki,Ji,$i,As,bs,ws,new he),f.uv2=f.uv1),a&&(dc.fromBufferAttribute(a,o),pc.fromBufferAttribute(a,c),mc.fromBufferAttribute(a,h),f.normal=mn.getInterpolation(Rs,Ki,Ji,$i,dc,pc,mc,new L),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const l={a:o,b:c,c:h,normal:new L,materialIndex:0};mn.getNormal(Ki,Ji,$i,l.normal),f.face=l}return f}class os extends Vn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],h=[],f=[],l=[];let u=0,d=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new en(h,3)),this.setAttribute("normal",new en(f,3)),this.setAttribute("uv",new en(l,2));function _(g,m,p,x,v,M,R,w,b,D,y){const T=M/b,N=R/D,G=M/2,q=R/2,P=w/2,U=b+1,k=D+1;let W=0,X=0;const Y=new L;for(let K=0;K<k;K++){const ee=K*N-q;for(let te=0;te<U;te++){const V=te*T-G;Y[g]=V*x,Y[m]=ee*v,Y[p]=P,h.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[p]=w>0?1:-1,f.push(Y.x,Y.y,Y.z),l.push(te/b),l.push(1-K/D),W+=1}}for(let K=0;K<D;K++)for(let ee=0;ee<b;ee++){const te=u+ee+U*K,V=u+ee+U*(K+1),Z=u+(ee+1)+U*(K+1),re=u+(ee+1)+U*K;c.push(te,V,re),c.push(V,Z,re),X+=6}o.addGroup(d,X,y),d+=X,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(r){const e={};for(let t=0;t<r.length;t++){const n=_r(r[t]);for(const i in n)e[i]=n[i]}return e}function Qd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ou(r){return r.getRenderTarget()===null?r.outputColorSpace:Xe.workingColorSpace}const ep={clone:_r,merge:Ut};var tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=Qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fu extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Fu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Qi=1;class ip extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(ji,Qi,e,t);i.layers=this.layers,this.add(i);const s=new Kt(ji,Qi,e,t);s.layers=this.layers,this.add(s);const a=new Kt(ji,Qi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(ji,Qi,e,t);o.layers=this.layers,this.add(o);const c=new Kt(ji,Qi,e,t);c.layers=this.layers,this.add(c);const h=new Kt(ji,Qi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const h of t)this.remove(h);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,h,f]=this.children,l=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(l,u,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Bu extends Bt{constructor(e,t,n,i,s,a,o,c,h,f){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,i,s,a,o,c,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rp extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===bi?Mt:cn),this.texture=new Bu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new os(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:ei});s.uniforms.tEquirect.value=t;const a=new jt(i,s),o=t.minFilter;return t.minFilter===Wr&&(t.minFilter=ln),new ip(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ha=new L,sp=new L,ap=new Be;class vi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ha.subVectors(n,t).cross(sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ap.getNormalMatrix(e),i=this.coplanarPoint(Ha).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Ho,Ls=new L;class Go{constructor(e=new vi,t=new vi,n=new vi,i=new vi,s=new vi,a=new vi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],h=i[4],f=i[5],l=i[6],u=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-s,u-h,m-d,M-p).normalize(),n[1].setComponents(c+s,u+h,m+d,M+p).normalize(),n[2].setComponents(c+a,u+f,m+_,M+x).normalize(),n[3].setComponents(c-a,u-f,m-_,M-x).normalize(),n[4].setComponents(c-o,u-l,m-g,M-v).normalize(),t===zn)n[5].setComponents(c+o,u+l,m+g,M+v).normalize();else if(t===Ys)n[5].setComponents(o,l,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ls.x=i.normal.x>0?e.max.x:e.min.x,Ls.y=i.normal.y>0?e.max.y:e.min.y,Ls.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function op(r,e){const t=e.isWebGL2,n=new WeakMap;function i(h,f){const l=h.array,u=h.usage,d=l.byteLength,_=r.createBuffer();r.bindBuffer(f,_),r.bufferData(f,l,u),h.onUploadCallback();let g;if(l instanceof Float32Array)g=r.FLOAT;else if(l instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=r.SHORT;else if(l instanceof Uint32Array)g=r.UNSIGNED_INT;else if(l instanceof Int32Array)g=r.INT;else if(l instanceof Int8Array)g=r.BYTE;else if(l instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:_,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:h.version,size:d}}function s(h,f,l){const u=f.array,d=f._updateRange,_=f.updateRanges;if(r.bindBuffer(l,h),d.count===-1&&_.length===0&&r.bufferSubData(l,0,u),_.length!==0){for(let g=0,m=_.length;g<m;g++){const p=_[g];t?r.bufferSubData(l,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):r.bufferSubData(l,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}f.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):r.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);f&&(r.deleteBuffer(f.buffer),n.delete(h))}function c(h,f){if(h.isGLBufferAttribute){const u=n.get(h);(!u||u.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const l=n.get(h);if(l===void 0)n.set(h,i(h,f));else if(l.version<h.version){if(l.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(l.buffer,h,f),l.version=h.version}}return{get:a,remove:o,update:c}}class aa extends Vn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),h=o+1,f=c+1,l=e/o,u=t/c,d=[],_=[],g=[],m=[];for(let p=0;p<f;p++){const x=p*u-a;for(let v=0;v<h;v++){const M=v*l-s;_.push(M,-x,0),g.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const v=x+h*p,M=x+h*(p+1),R=x+1+h*(p+1),w=x+1+h*p;d.push(v,M,w),d.push(M,R,w)}this.setIndex(d),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,om=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Em=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,m_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,__=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,z_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:up,alphamap_pars_fragment:hp,alphatest_fragment:fp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:_p,batching_vertex:gp,begin_vertex:vp,beginnormal_vertex:xp,bsdfs:yp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:bp,color_fragment:wp,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Op,emissivemap_pars_fragment:Fp,colorspace_fragment:Bp,colorspace_pars_fragment:zp,envmap_fragment:kp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Gp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:tm,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:Zp,gradientmap_pars_fragment:Kp,lightmap_fragment:Jp,lightmap_pars_fragment:$p,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:em,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:rm,lights_phong_pars_fragment:sm,lights_physical_fragment:am,lights_physical_pars_fragment:om,lights_fragment_begin:lm,lights_fragment_maps:cm,lights_fragment_end:um,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:_m,map_particle_fragment:gm,map_particle_pars_fragment:vm,metalnessmap_fragment:xm,metalnessmap_pars_fragment:ym,morphcolor_vertex:Mm,morphnormal_vertex:Sm,morphtarget_pars_vertex:Em,morphtarget_vertex:Tm,normal_fragment_begin:Am,normal_fragment_maps:bm,normal_pars_fragment:wm,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Om,premultiplied_alpha_fragment:Fm,project_vertex:Bm,dithering_fragment:zm,dithering_pars_fragment:km,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:Zm,skinning_vertex:Km,skinnormal_vertex:Jm,specularmap_fragment:$m,specularmap_pars_fragment:jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:e_,transmission_fragment:t_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:r_,uv_vertex:s_,worldpos_vertex:a_,background_vert:o_,background_frag:l_,backgroundCube_vert:c_,backgroundCube_frag:u_,cube_vert:h_,cube_frag:f_,depth_vert:d_,depth_frag:p_,distanceRGBA_vert:m_,distanceRGBA_frag:__,equirect_vert:g_,equirect_frag:v_,linedashed_vert:x_,linedashed_frag:y_,meshbasic_vert:M_,meshbasic_frag:S_,meshlambert_vert:E_,meshlambert_frag:T_,meshmatcap_vert:A_,meshmatcap_frag:b_,meshnormal_vert:w_,meshnormal_frag:R_,meshphong_vert:C_,meshphong_frag:P_,meshphysical_vert:L_,meshphysical_frag:D_,meshtoon_vert:I_,meshtoon_frag:U_,points_vert:N_,points_frag:O_,shadow_vert:F_,shadow_frag:B_,sprite_vert:z_,sprite_frag:k_},ie={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Mn={basic:{uniforms:Ut([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Ut([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Ut([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Ut([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Ut([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Ut([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Ut([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Ut([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Ut([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Ut([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Ut([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Ut([ie.common,ie.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Ut([ie.lights,ie.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Mn.physical={uniforms:Ut([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Ds={r:0,b:0,g:0};function H_(r,e,t,n,i,s,a){const o=new Ge(0);let c=s===!0?0:1,h,f,l=null,u=0,d=null;function _(m,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,c):v&&v.isColor&&(g(v,1),x=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ia)?(f===void 0&&(f=new jt(new os(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:_r(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.toneMapped=Xe.getTransfer(v.colorSpace)!==Je,(l!==v||u!==v.version||d!==r.toneMapping)&&(f.material.needsUpdate=!0,l=v,u=v.version,d=r.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new jt(new aa(2,2),new Ui({name:"BackgroundMaterial",uniforms:_r(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(v.colorSpace)!==Je,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(l!==v||u!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,l=v,u=v.version,d=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function g(m,p){m.getRGB(Ds,Ou(r)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:_}}function G_(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=m(null);let h=c,f=!1;function l(P,U,k,W,X){let Y=!1;if(a){const K=g(W,k,U);h!==K&&(h=K,d(h.object)),Y=p(P,W,k,X),Y&&x(P,W,k,X)}else{const K=U.wireframe===!0;(h.geometry!==W.id||h.program!==k.id||h.wireframe!==K)&&(h.geometry=W.id,h.program=k.id,h.wireframe=K,Y=!0)}X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(Y||f)&&(f=!1,D(P,U,k,W),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function g(P,U,k){const W=k.wireframe===!0;let X=o[P.id];X===void 0&&(X={},o[P.id]=X);let Y=X[U.id];Y===void 0&&(Y={},X[U.id]=Y);let K=Y[W];return K===void 0&&(K=m(u()),Y[W]=K),K}function m(P){const U=[],k=[],W=[];for(let X=0;X<i;X++)U[X]=0,k[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:W,object:P,attributes:{},index:null}}function p(P,U,k,W){const X=h.attributes,Y=U.attributes;let K=0;const ee=k.getAttributes();for(const te in ee)if(ee[te].location>=0){const Z=X[te];let re=Y[te];if(re===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;K++}return h.attributesNum!==K||h.index!==W}function x(P,U,k,W){const X={},Y=U.attributes;let K=0;const ee=k.getAttributes();for(const te in ee)if(ee[te].location>=0){let Z=Y[te];Z===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),X[te]=re,K++}h.attributes=X,h.attributesNum=K,h.index=W}function v(){const P=h.newAttributes;for(let U=0,k=P.length;U<k;U++)P[U]=0}function M(P){R(P,0)}function R(P,U){const k=h.newAttributes,W=h.enabledAttributes,X=h.attributeDivisors;k[P]=1,W[P]===0&&(r.enableVertexAttribArray(P),W[P]=1),X[P]!==U&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),X[P]=U)}function w(){const P=h.newAttributes,U=h.enabledAttributes;for(let k=0,W=U.length;k<W;k++)U[k]!==P[k]&&(r.disableVertexAttribArray(k),U[k]=0)}function b(P,U,k,W,X,Y,K){K===!0?r.vertexAttribIPointer(P,U,k,X,Y):r.vertexAttribPointer(P,U,k,W,X,Y)}function D(P,U,k,W){if(n.isWebGL2===!1&&(P.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const X=W.attributes,Y=k.getAttributes(),K=U.defaultAttributeValues;for(const ee in Y){const te=Y[ee];if(te.location>=0){let V=X[ee];if(V===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const Z=V.normalized,re=V.itemSize,_e=t.get(V);if(_e===void 0)continue;const me=_e.buffer,Re=_e.type,Pe=_e.bytesPerElement,Se=n.isWebGL2===!0&&(Re===r.INT||Re===r.UNSIGNED_INT||V.gpuType===gu);if(V.isInterleavedBufferAttribute){const He=V.data,O=He.stride,Pt=V.offset;if(He.isInstancedInterleavedBuffer){for(let ve=0;ve<te.locationSize;ve++)R(te.location+ve,He.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let ve=0;ve<te.locationSize;ve++)M(te.location+ve);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ve=0;ve<te.locationSize;ve++)b(te.location+ve,re/te.locationSize,Re,Z,O*Pe,(Pt+re/te.locationSize*ve)*Pe,Se)}else{if(V.isInstancedBufferAttribute){for(let He=0;He<te.locationSize;He++)R(te.location+He,V.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let He=0;He<te.locationSize;He++)M(te.location+He);r.bindBuffer(r.ARRAY_BUFFER,me);for(let He=0;He<te.locationSize;He++)b(te.location+He,re/te.locationSize,Re,Z,re*Pe,re/te.locationSize*He*Pe,Se)}}else if(K!==void 0){const Z=K[ee];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(te.location,Z);break;case 3:r.vertexAttrib3fv(te.location,Z);break;case 4:r.vertexAttrib4fv(te.location,Z);break;default:r.vertexAttrib1fv(te.location,Z)}}}}w()}function y(){G();for(const P in o){const U=o[P];for(const k in U){const W=U[k];for(const X in W)_(W[X].object),delete W[X];delete U[k]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const U=o[P.id];for(const k in U){const W=U[k];for(const X in W)_(W[X].object),delete W[X];delete U[k]}delete o[P.id]}function N(P){for(const U in o){const k=o[U];if(k[P.id]===void 0)continue;const W=k[P.id];for(const X in W)_(W[X].object),delete W[X];delete k[P.id]}}function G(){q(),f=!0,h!==c&&(h=c,d(h.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:G,resetDefaultState:q,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:M,disableUnusedAttributes:w}}function V_(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}function o(f,l){r.drawArrays(s,f,l),t.update(l,s,1)}function c(f,l,u){if(u===0)return;let d,_;if(i)d=r,_="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,f,l,u),t.update(l,s,u)}function h(f,l,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<u;_++)this.render(f[_],l[_]);else{d.multiDrawArraysWEBGL(s,f,0,l,0,u);let _=0;for(let g=0;g<u;g++)_+=l[g];t.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function W_(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const h=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,l=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,M=a||e.has("OES_texture_float"),R=v&&M,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:l,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:w}}function X_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new vi,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,u){const d=l.length!==0||u||n!==0||i;return i=u,n=l.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,u){t=f(l,u,0)},this.setState=function(l,u,d){const _=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,p=r.get(l);if(!i||_===null||_.length===0||s&&!m)s?f(null):h();else{const x=s?0:n,v=x*4;let M=p.clippingState||null;c.value=M,M=f(_,u,v,d);for(let R=0;R!==v;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(l,u,d,_){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=d;v!==g;++v,M+=4)a.copy(l[v]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function q_(r){let e=new WeakMap;function t(a,o){return o===ho?a.mapping=dr:o===fo&&(a.mapping=pr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ho||o===fo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new rp(c.height/2);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Y_ extends Fu{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ir=4,_c=[.125,.215,.35,.446,.526,.582],Si=20,Ga=new Y_,gc=new Ge;let Va=null,Wa=0,Xa=0;const xi=(1+Math.sqrt(5))/2,er=1/xi,vc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,xi,er),new L(0,xi,-er),new L(er,0,xi),new L(-er,0,xi),new L(xi,er,0),new L(-xi,er,0)];class xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Wa,Xa),e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Xr,format:vn,colorSpace:kn,depthBuffer:!1},i=yc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z_(s)),this._blurMaterial=K_(s,e,t)}return i}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,i){const o=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,l=f.autoClear,u=f.toneMapping;f.getClearColor(gc),f.toneMapping=ti,f.autoClear=!1;const d=new Iu({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),_=new jt(new os,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(gc),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));const v=this._cubeSize;Is(i,x*v,p>2?v:0,v,v),f.setRenderTarget(i),g&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=u,f.autoClear=l,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===dr||e.mapping===pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Is(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=vc[(i-1)%vc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,l=new jt(this._lodPlanes[i],h),u=h.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Si-1),g=s/_,m=isFinite(s)?1+Math.floor(f*g):Si;m>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const p=[];let x=0;for(let b=0;b<Si;++b){const D=b/g,y=Math.exp(-D*D/2);p.push(y),b===0?x+=y:b<m&&(x+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=_,u.mipInt.value=v-n;const M=this._sizeLods[i],R=3*M*(i>v-ir?i-v+ir:0),w=4*(this._cubeSize-M);Is(t,R,w,3*M,2*M),c.setRenderTarget(t),c.render(l,Ga)}}function Z_(r){const e=[],t=[],n=[];let i=r;const s=r-ir+1+_c.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-ir?c=_c[a-r+ir-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),f=-h,l=1+h,u=[f,f,l,f,l,l,f,f,l,l,f,l],d=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*d),v=new Float32Array(m*_*d),M=new Float32Array(p*_*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,D=w>2?0:-1,y=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];x.set(y,g*_*w),v.set(u,m*_*w);const T=[w,w,w,w,w,w];M.set(T,p*_*w)}const R=new Vn;R.setAttribute("position",new An(x,g)),R.setAttribute("uv",new An(v,m)),R.setAttribute("faceIndex",new An(M,p)),e.push(R),i>ir&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yc(r,e,t){const n=new Ii(r,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function K_(r,e,t){const n=new Float32Array(Si),i=new L(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Mc(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Sc(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J_(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===ho||c===fo,f=c===dr||c===pr;if(h||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=e.get(o);return t===null&&(t=new xc(r)),l=h?t.fromEquirectangular(o,l):t.fromCubemap(o,l),e.set(o,l),l.texture}else{if(e.has(o))return e.get(o).texture;{const l=o.image;if(h&&l&&l.height>0||f&&l&&i(l)){t===null&&(t=new xc(r));const u=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let c=0;const h=6;for(let f=0;f<h;f++)o[f]!==void 0&&c++;return c===h}function s(o){const c=o.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function j_(r,e,t,n){const i={},s=new WeakMap;function a(l){const u=l.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}u.removeEventListener("dispose",a),delete i[u.id];const d=s.get(u);d&&(e.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(l,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(l){const u=l.attributes;for(const _ in u)e.update(u[_],r.ARRAY_BUFFER);const d=l.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function h(l){const u=[],d=l.index,_=l.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let v=0,M=x.length;v<M;v+=3){const R=x[v+0],w=x[v+1],b=x[v+2];u.push(R,w,w,b,b,R)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const R=v+0,w=v+1,b=v+2;u.push(R,w,w,b,b,R)}}else return;const m=new(wu(u)?Nu:Uu)(u,1);m.version=g;const p=s.get(l);p&&e.remove(p),s.set(l,m)}function f(l){const u=s.get(l);if(u){const d=l.index;d!==null&&u.version<d.version&&h(l)}else h(l);return s.get(l)}return{get:o,update:c,getWireframeAttribute:f}}function Q_(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,c;function h(d){o=d.type,c=d.bytesPerElement}function f(d,_){r.drawElements(s,_,o,d*c),t.update(_,s,1)}function l(d,_,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,_,o,d*c,g),t.update(_,s,g)}function u(d,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(d[p]/c,_[p]);else{m.multiDrawElementsWEBGL(s,_,0,o,d,0,g);let p=0;for(let x=0;x<g;x++)p+=_[x];t.update(p,s,1)}}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=l,this.renderMultiDraw=u}function eg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tg(r,e){return r[0]-e[0]}function ng(r,e){return Math.abs(e[1])-Math.abs(r[1])}function ig(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new $e,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,f,l){const u=h.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(f);if(m===void 0||m.count!==g){let U=function(){q.dispose(),s.delete(f),f.removeEventListener("dispose",U)};var d=U;m!==void 0&&m.texture.dispose();const v=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,R=f.morphAttributes.color!==void 0,w=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),R===!0&&(y=3);let T=f.attributes.position.count*y,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const G=new Float32Array(T*N*4*g),q=new Pu(G,T,N,g);q.type=Jn,q.needsUpdate=!0;const P=y*4;for(let k=0;k<g;k++){const W=w[k],X=b[k],Y=D[k],K=T*N*4*k;for(let ee=0;ee<W.count;ee++){const te=ee*P;v===!0&&(a.fromBufferAttribute(W,ee),G[K+te+0]=a.x,G[K+te+1]=a.y,G[K+te+2]=a.z,G[K+te+3]=0),M===!0&&(a.fromBufferAttribute(X,ee),G[K+te+4]=a.x,G[K+te+5]=a.y,G[K+te+6]=a.z,G[K+te+7]=0),R===!0&&(a.fromBufferAttribute(Y,ee),G[K+te+8]=a.x,G[K+te+9]=a.y,G[K+te+10]=a.z,G[K+te+11]=Y.itemSize===4?a.w:1)}}m={count:g,texture:q,size:new he(T,N)},s.set(f,m),f.addEventListener("dispose",U)}let p=0;for(let v=0;v<u.length;v++)p+=u[v];const x=f.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",u),l.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=u===void 0?0:u.length;let g=n[f.id];if(g===void 0||g.length!==_){g=[];for(let M=0;M<_;M++)g[M]=[M,0];n[f.id]=g}for(let M=0;M<_;M++){const R=g[M];R[0]=M,R[1]=u[M]}g.sort(ng);for(let M=0;M<8;M++)M<_&&g[M][1]?(o[M][0]=g[M][0],o[M][1]=g[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(tg);const m=f.morphAttributes.position,p=f.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const R=o[M],w=R[0],b=R[1];w!==Number.MAX_SAFE_INTEGER&&b?(m&&f.getAttribute("morphTarget"+M)!==m[w]&&f.setAttribute("morphTarget"+M,m[w]),p&&f.getAttribute("morphNormal"+M)!==p[w]&&f.setAttribute("morphNormal"+M,p[w]),i[M]=b,x+=b):(m&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),p&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),i[M]=0)}const v=f.morphTargetsRelative?1:1-x;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function rg(r,e,t,n){let i=new WeakMap;function s(c){const h=n.render.frame,f=c.geometry,l=e.get(c,f);if(i.get(l)!==h&&(e.update(l),i.set(l,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==h&&(u.update(),i.set(u,h))}return l}function a(){i=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class ku extends Bt{constructor(e,t,n,i,s,a,o,c,h,f){if(f=f!==void 0?f:Ai,f!==Ai&&f!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ai&&(n=Kn),n===void 0&&f===mr&&(n=Ti),super(null,i,s,a,o,c,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=c!==void 0?c:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hu=new Bt,Gu=new ku(1,1);Gu.compareFunction=bu;const Vu=new Pu,Wu=new kd,Xu=new Bu,Ec=[],Tc=[],Ac=new Float32Array(16),bc=new Float32Array(9),wc=new Float32Array(4);function Tr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ec[i];if(s===void 0&&(s=new Float32Array(i),Ec[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function _t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function oa(r,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2fv(this.addr,e),_t(t,e)}}function og(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;r.uniform3fv(this.addr,e),_t(t,e)}}function lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4fv(this.addr,e),_t(t,e)}}function cg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;wc.set(n),r.uniformMatrix2fv(this.addr,!1,wc),_t(t,n)}}function ug(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;bc.set(n),r.uniformMatrix3fv(this.addr,!1,bc),_t(t,n)}}function hg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;Ac.set(n),r.uniformMatrix4fv(this.addr,!1,Ac),_t(t,n)}}function fg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2iv(this.addr,e),_t(t,e)}}function pg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;r.uniform3iv(this.addr,e),_t(t,e)}}function mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4iv(this.addr,e),_t(t,e)}}function _g(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2uiv(this.addr,e),_t(t,e)}}function vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;r.uniform3uiv(this.addr,e),_t(t,e)}}function xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4uiv(this.addr,e),_t(t,e)}}function yg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Gu:Hu;t.setTexture2D(e||s,i)}function Mg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wu,i)}function Sg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xu,i)}function Eg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vu,i)}function Tg(r){switch(r){case 5126:return sg;case 35664:return ag;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return ug;case 35676:return hg;case 5124:case 35670:return fg;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return _g;case 36294:return gg;case 36295:return vg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Eg}}function Ag(r,e){r.uniform1fv(this.addr,e)}function bg(r,e){const t=Tr(e,this.size,2);r.uniform2fv(this.addr,t)}function wg(r,e){const t=Tr(e,this.size,3);r.uniform3fv(this.addr,t)}function Rg(r,e){const t=Tr(e,this.size,4);r.uniform4fv(this.addr,t)}function Cg(r,e){const t=Tr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Pg(r,e){const t=Tr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Lg(r,e){const t=Tr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Dg(r,e){r.uniform1iv(this.addr,e)}function Ig(r,e){r.uniform2iv(this.addr,e)}function Ug(r,e){r.uniform3iv(this.addr,e)}function Ng(r,e){r.uniform4iv(this.addr,e)}function Og(r,e){r.uniform1uiv(this.addr,e)}function Fg(r,e){r.uniform2uiv(this.addr,e)}function Bg(r,e){r.uniform3uiv(this.addr,e)}function zg(r,e){r.uniform4uiv(this.addr,e)}function kg(r,e,t){const n=this.cache,i=e.length,s=oa(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Hu,s[a])}function Hg(r,e,t){const n=this.cache,i=e.length,s=oa(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Wu,s[a])}function Gg(r,e,t){const n=this.cache,i=e.length,s=oa(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Xu,s[a])}function Vg(r,e,t){const n=this.cache,i=e.length,s=oa(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Vu,s[a])}function Wg(r){switch(r){case 5126:return Ag;case 35664:return bg;case 35665:return wg;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ig;case 35668:case 35672:return Ug;case 35669:case 35673:return Ng;case 5125:return Og;case 36294:return Fg;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Vg}}class Xg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tg(t.type)}}class qg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wg(t.type)}}class Yg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Rc(r,e){r.seq.push(e),r.map[e.id]=e}function Zg(r,e,t){const n=r.name,i=n.length;for(qa.lastIndex=0;;){const s=qa.exec(n),a=qa.lastIndex;let o=s[1];const c=s[2]==="]",h=s[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){Rc(t,h===void 0?new Xg(o,r,e):new qg(o,r,e));break}else{let l=t.map[o];l===void 0&&(l=new Yg(o),Rc(t,l)),t=l}}}class zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Zg(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Cc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Kg=37297;let Jg=0;function $g(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function jg(r){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(r);let n;switch(e===t?n="":e===qs&&t===Xs?n="LinearDisplayP3ToLinearSRGB":e===Xs&&t===qs&&(n="LinearSRGBToLinearDisplayP3"),r){case kn:case ra:return[n,"LinearTransferOETF"];case Mt:case Bo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Pc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+$g(r.getShaderSource(e),a)}else return i}function Qg(r,e){const t=jg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function e0(r,e){let t;switch(e){case Jf:t="Linear";break;case $f:t="Reinhard";break;case jf:t="OptimizedCineon";break;case Qf:t="ACESFilmic";break;case td:t="AgX";break;case ed:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function t0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rr).join(`
`)}function n0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rr).join(`
`)}function i0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function rr(r){return r!==""}function Lc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(r){return r.replace(s0,o0)}const a0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function o0(r,e){let t=De[e];if(t===void 0){const n=a0.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vo(t)}const l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(r){return r.replace(l0,c0)}function c0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Uc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Tf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function h0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function d0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case mu:e="ENVMAP_BLENDING_MULTIPLY";break;case Zf:e="ENVMAP_BLENDING_MIX";break;case Kf:e="ENVMAP_BLENDING_ADD";break}return e}function p0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function m0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=u0(t),h=h0(t),f=f0(t),l=d0(t),u=p0(t),d=t.isWebGL2?"":t0(t),_=n0(t),g=i0(s),m=i.createProgram();let p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),x.length>0&&(x+=`
`)):(p=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),x=[d,Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+l:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?De.tonemapping_pars_fragment:"",t.toneMapping!==ti?e0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Qg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=vo(a),a=Lc(a,t),a=Dc(a,t),o=vo(o),o=Lc(o,t),o=Dc(o,t),a=Ic(a),o=Ic(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=v+p+a,R=v+x+o,w=Cc(i,i.VERTEX_SHADER,M),b=Cc(i,i.FRAGMENT_SHADER,R);i.attachShader(m,w),i.attachShader(m,b),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(G){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(w).trim(),U=i.getShaderInfoLog(b).trim();let k=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,w,b);else{const X=Pc(i,w,"vertex"),Y=Pc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+X+`
`+Y)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||U==="")&&(W=!1);W&&(G.diagnostics={runnable:k,programLog:q,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:x}})}i.deleteShader(w),i.deleteShader(b),y=new zs(i,m),T=r0(i,m)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,Kg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=b,this}let _0=0;class g0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new v0(e),t.set(e,n)),n}}class v0{constructor(e){this.id=_0++,this.code=e,this.usedTimes=0}}function x0(r,e,t,n,i,s,a){const o=new Lu,c=new g0,h=[],f=i.isWebGL2,l=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,T,N,G,q){const P=G.fog,U=q.geometry,k=y.isMeshStandardMaterial?G.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),X=W&&W.mapping===ia?W.image.height:null,Y=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ee=K!==void 0?K.length:0;let te=0;U.morphAttributes.position!==void 0&&(te=1),U.morphAttributes.normal!==void 0&&(te=2),U.morphAttributes.color!==void 0&&(te=3);let V,Z,re,_e;if(Y){const Lt=Mn[Y];V=Lt.vertexShader,Z=Lt.fragmentShader}else V=y.vertexShader,Z=y.fragmentShader,c.update(y),re=c.getVertexShaderID(y),_e=c.getFragmentShaderID(y);const me=r.getRenderTarget(),Re=q.isInstancedMesh===!0,Pe=q.isBatchedMesh===!0,Se=!!y.map,He=!!y.matcap,O=!!W,Pt=!!y.aoMap,ve=!!y.lightMap,be=!!y.bumpMap,fe=!!y.normalMap,Qe=!!y.displacementMap,Ie=!!y.emissiveMap,A=!!y.metalnessMap,S=!!y.roughnessMap,B=y.anisotropy>0,j=y.clearcoat>0,$=y.iridescence>0,Q=y.sheen>0,de=y.transmission>0,oe=B&&!!y.anisotropyMap,ce=j&&!!y.clearcoatMap,Me=j&&!!y.clearcoatNormalMap,Ue=j&&!!y.clearcoatRoughnessMap,J=$&&!!y.iridescenceMap,We=$&&!!y.iridescenceThicknessMap,ze=Q&&!!y.sheenColorMap,Ae=Q&&!!y.sheenRoughnessMap,ge=!!y.specularMap,ue=!!y.specularColorMap,Le=!!y.specularIntensityMap,Ve=de&&!!y.transmissionMap,rt=de&&!!y.thicknessMap,Oe=!!y.gradientMap,ne=!!y.alphaMap,C=y.alphaTest>0,se=!!y.alphaHash,ae=!!y.extensions,Ee=!!U.attributes.uv1,xe=!!U.attributes.uv2,Ye=!!U.attributes.uv3;let Ze=ti;return y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ze=r.toneMapping),{isWebGL2:f,shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:Z,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Pe,instancing:Re,instancingColor:Re&&q.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:kn,map:Se,matcap:He,envMap:O,envMapMode:O&&W.mapping,envMapCubeUVHeight:X,aoMap:Pt,lightMap:ve,bumpMap:be,normalMap:fe,displacementMap:u&&Qe,emissiveMap:Ie,normalMapObjectSpace:fe&&y.normalMapType===dd,normalMapTangentSpace:fe&&y.normalMapType===Au,metalnessMap:A,roughnessMap:S,anisotropy:B,anisotropyMap:oe,clearcoat:j,clearcoatMap:ce,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ue,iridescence:$,iridescenceMap:J,iridescenceThicknessMap:We,sheen:Q,sheenColorMap:ze,sheenRoughnessMap:Ae,specularMap:ge,specularColorMap:ue,specularIntensityMap:Le,transmission:de,transmissionMap:Ve,thicknessMap:rt,gradientMap:Oe,opaque:y.transparent===!1&&y.blending===lr,alphaMap:ne,alphaTest:C,alphaHash:se,combine:y.combine,mapUv:Se&&g(y.map.channel),aoMapUv:Pt&&g(y.aoMap.channel),lightMapUv:ve&&g(y.lightMap.channel),bumpMapUv:be&&g(y.bumpMap.channel),normalMapUv:fe&&g(y.normalMap.channel),displacementMapUv:Qe&&g(y.displacementMap.channel),emissiveMapUv:Ie&&g(y.emissiveMap.channel),metalnessMapUv:A&&g(y.metalnessMap.channel),roughnessMapUv:S&&g(y.roughnessMap.channel),anisotropyMapUv:oe&&g(y.anisotropyMap.channel),clearcoatMapUv:ce&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Me&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:We&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(y.sheenRoughnessMap.channel),specularMapUv:ge&&g(y.specularMap.channel),specularColorMapUv:ue&&g(y.specularColorMap.channel),specularIntensityMapUv:Le&&g(y.specularIntensityMap.channel),transmissionMapUv:Ve&&g(y.transmissionMap.channel),thicknessMapUv:rt&&g(y.thicknessMap.channel),alphaMapUv:ne&&g(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(fe||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:xe,vertexUv3s:Ye,pointsUvs:q.isPoints===!0&&!!U.attributes.uv&&(Se||ne),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:q.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Ft,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ae&&y.extensions.derivatives===!0,extensionFragDepth:ae&&y.extensions.fragDepth===!0,extensionDrawBuffers:ae&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)T.push(N),T.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(x(T,y),v(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function M(y){const T=_[y.type];let N;if(T){const G=Mn[T];N=ep.clone(G.uniforms)}else N=y.uniforms;return N}function R(y,T){let N;for(let G=0,q=h.length;G<q;G++){const P=h[G];if(P.cacheKey===T){N=P,++N.usedTimes;break}}return N===void 0&&(N=new m0(r,T,y,s),h.push(N)),N}function w(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),y.destroy()}}function b(y){c.remove(y)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:D}}function y0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function M0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Nc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Oc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(l,u,d,_,g,m){let p=r[e];return p===void 0?(p={id:l.id,object:l,geometry:u,material:d,groupOrder:_,renderOrder:l.renderOrder,z:g,group:m},r[e]=p):(p.id=l.id,p.object=l,p.geometry=u,p.material=d,p.groupOrder=_,p.renderOrder=l.renderOrder,p.z=g,p.group=m),e++,p}function o(l,u,d,_,g,m){const p=a(l,u,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(l,u,d,_,g,m){const p=a(l,u,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function h(l,u){t.length>1&&t.sort(l||M0),n.length>1&&n.sort(u||Nc),i.length>1&&i.sort(u||Nc)}function f(){for(let l=e,u=r.length;l<u;l++){const d=r[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:f,sort:h}}function S0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Oc,r.set(n,[a])):i>=s.length?(a=new Oc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function E0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ge};break;case"SpotLight":t={position:new L,direction:new L,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function T0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let A0=0;function b0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function w0(r,e){const t=new E0,n=T0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new L);const s=new L,a=new ct,o=new ct;function c(f,l){let u=0,d=0,_=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let g=0,m=0,p=0,x=0,v=0,M=0,R=0,w=0,b=0,D=0,y=0;f.sort(b0);const T=l===!0?Math.PI:1;for(let G=0,q=f.length;G<q;G++){const P=f[G],U=P.color,k=P.intensity,W=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*k*T,d+=U.g*k*T,_+=U.b*k*T;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],k);y++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const K=P.shadow,ee=n.get(P);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=X,i.directionalShadowMatrix[g]=P.shadow.matrix,M++}i.directional[g]=Y,g++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(U).multiplyScalar(k*T),Y.distance=W,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[p]=Y;const K=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,K.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[p]=K.matrix,P.castShadow){const ee=n.get(P);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,i.spotShadow[p]=ee,i.spotShadowMap[p]=X,w++}p++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(U).multiplyScalar(k),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=Y,x++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*T),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const K=P.shadow,ee=n.get(P);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=P.shadow.matrix,R++}i.point[m]=Y,m++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(k*T),Y.groundColor.copy(P.groundColor).multiplyScalar(k*T),i.hemi[v]=Y,v++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=_;const N=i.hash;(N.directionalLength!==g||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==x||N.hemiLength!==v||N.numDirectionalShadows!==M||N.numPointShadows!==R||N.numSpotShadows!==w||N.numSpotMaps!==b||N.numLightProbes!==y)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=w+b-D,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=y,N.directionalLength=g,N.pointLength=m,N.spotLength=p,N.rectAreaLength=x,N.hemiLength=v,N.numDirectionalShadows=M,N.numPointShadows=R,N.numSpotShadows=w,N.numSpotMaps=b,N.numLightProbes=y,i.version=A0++)}function h(f,l){let u=0,d=0,_=0,g=0,m=0;const p=l.matrixWorldInverse;for(let x=0,v=f.length;x<v;x++){const M=f[x];if(M.isDirectionalLight){const R=i.directional[u];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),u++}else if(M.isSpotLight){const R=i.spot[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const R=i.rectArea[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const R=i.point[d];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:i}}function Fc(r,e){const t=new w0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(l){n.push(l)}function o(l){i.push(l)}function c(l){t.setup(n,l)}function h(l){t.setupView(n,l)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function R0(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Fc(r,e),t.set(s,[c])):a>=o.length?(c=new Fc(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class C0 extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P0 extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function I0(r,e,t){let n=new Go;const i=new he,s=new he,a=new $e,o=new C0({depthPacking:fd}),c=new P0,h={},f=t.maxTextureSize,l={[si]:Ft,[Ft]:si,[_n]:_n},u=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:L0,fragmentShader:D0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const _=new Vn;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new jt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let p=this.type;this.render=function(w,b,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),T=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),G=r.state;G.setBlending(ei),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=p!==On&&this.type===On,P=p===On&&this.type!==On;for(let U=0,k=w.length;U<k;U++){const W=w[U],X=W.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const Y=X.getFrameExtents();if(i.multiply(Y),s.copy(X.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/Y.x),i.x=s.x*Y.x,X.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/Y.y),i.y=s.y*Y.y,X.mapSize.y=s.y)),X.map===null||q===!0||P===!0){const ee=this.type!==On?{minFilter:Nt,magFilter:Nt}:{};X.map!==null&&X.map.dispose(),X.map=new Ii(i.x,i.y,ee),X.map.texture.name=W.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const K=X.getViewportCount();for(let ee=0;ee<K;ee++){const te=X.getViewport(ee);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),G.viewport(a),X.updateMatrices(W,ee),n=X.getFrustum(),M(b,D,X.camera,W,this.type)}X.isPointLightShadow!==!0&&this.type===On&&x(X,D),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,T,N)};function x(w,b){const D=e.update(g);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ii(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,D,u,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,D,d,g,null)}function v(w,b,D,y){let T=null;const N=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)T=N;else if(T=D.isPointLight===!0?c:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const G=T.uuid,q=b.uuid;let P=h[G];P===void 0&&(P={},h[G]=P);let U=P[q];U===void 0&&(U=T.clone(),P[q]=U,b.addEventListener("dispose",R)),T=U}if(T.visible=b.visible,T.wireframe=b.wireframe,y===On?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:l[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const G=r.properties.get(T);G.light=D}return T}function M(w,b,D,y,T){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===On)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const q=e.update(w),P=w.material;if(Array.isArray(P)){const U=q.groups;for(let k=0,W=U.length;k<W;k++){const X=U[k],Y=P[X.materialIndex];if(Y&&Y.visible){const K=v(w,Y,y,T);w.onBeforeShadow(r,w,b,D,q,K,X),r.renderBufferDirect(D,null,q,K,w,X),w.onAfterShadow(r,w,b,D,q,K,X)}}}else if(P.visible){const U=v(w,P,y,T);w.onBeforeShadow(r,w,b,D,q,U,null),r.renderBufferDirect(D,null,q,U,w,null),w.onAfterShadow(r,w,b,D,q,U,null)}}const G=w.children;for(let q=0,P=G.length;q<P;q++)M(G[q],b,D,y,T)}function R(w){w.target.removeEventListener("dispose",R);for(const D in h){const y=h[D],T=w.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function U0(r,e,t){const n=t.isWebGL2;function i(){let C=!1;const se=new $e;let ae=null;const Ee=new $e(0,0,0,0);return{setMask:function(xe){ae!==xe&&!C&&(r.colorMask(xe,xe,xe,xe),ae=xe)},setLocked:function(xe){C=xe},setClear:function(xe,Ye,Ze,gt,Lt){Lt===!0&&(xe*=gt,Ye*=gt,Ze*=gt),se.set(xe,Ye,Ze,gt),Ee.equals(se)===!1&&(r.clearColor(xe,Ye,Ze,gt),Ee.copy(se))},reset:function(){C=!1,ae=null,Ee.set(-1,0,0,0)}}}function s(){let C=!1,se=null,ae=null,Ee=null;return{setTest:function(xe){xe?Pe(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(xe){se!==xe&&!C&&(r.depthMask(xe),se=xe)},setFunc:function(xe){if(ae!==xe){switch(xe){case Hf:r.depthFunc(r.NEVER);break;case Gf:r.depthFunc(r.ALWAYS);break;case Vf:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case Wf:r.depthFunc(r.EQUAL);break;case Xf:r.depthFunc(r.GEQUAL);break;case qf:r.depthFunc(r.GREATER);break;case Yf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=xe}},setLocked:function(xe){C=xe},setClear:function(xe){Ee!==xe&&(r.clearDepth(xe),Ee=xe)},reset:function(){C=!1,se=null,ae=null,Ee=null}}}function a(){let C=!1,se=null,ae=null,Ee=null,xe=null,Ye=null,Ze=null,gt=null,Lt=null;return{setTest:function(Ke){C||(Ke?Pe(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Ke){se!==Ke&&!C&&(r.stencilMask(Ke),se=Ke)},setFunc:function(Ke,Dt,xn){(ae!==Ke||Ee!==Dt||xe!==xn)&&(r.stencilFunc(Ke,Dt,xn),ae=Ke,Ee=Dt,xe=xn)},setOp:function(Ke,Dt,xn){(Ye!==Ke||Ze!==Dt||gt!==xn)&&(r.stencilOp(Ke,Dt,xn),Ye=Ke,Ze=Dt,gt=xn)},setLocked:function(Ke){C=Ke},setClear:function(Ke){Lt!==Ke&&(r.clearStencil(Ke),Lt=Ke)},reset:function(){C=!1,se=null,ae=null,Ee=null,xe=null,Ye=null,Ze=null,gt=null,Lt=null}}}const o=new i,c=new s,h=new a,f=new WeakMap,l=new WeakMap;let u={},d={},_=new WeakMap,g=[],m=null,p=!1,x=null,v=null,M=null,R=null,w=null,b=null,D=null,y=new Ge(0,0,0),T=0,N=!1,G=null,q=null,P=null,U=null,k=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=Y>=2);let ee=null,te={};const V=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),re=new $e().fromArray(V),_e=new $e().fromArray(Z);function me(C,se,ae,Ee){const xe=new Uint8Array(4),Ye=r.createTexture();r.bindTexture(C,Ye),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<ae;Ze++)n&&(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)?r.texImage3D(se,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(se+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return Ye}const Re={};Re[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Pe(r.DEPTH_TEST),c.setFunc(Vs),Ie(!1),A(vl),Pe(r.CULL_FACE),fe(ei);function Pe(C){u[C]!==!0&&(r.enable(C),u[C]=!0)}function Se(C){u[C]!==!1&&(r.disable(C),u[C]=!1)}function He(C,se){return d[C]!==se?(r.bindFramebuffer(C,se),d[C]=se,n&&(C===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=se),C===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=se)),!0):!1}function O(C,se){let ae=g,Ee=!1;if(C)if(ae=_.get(se),ae===void 0&&(ae=[],_.set(se,ae)),C.isWebGLMultipleRenderTargets){const xe=C.texture;if(ae.length!==xe.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Ye=0,Ze=xe.length;Ye<Ze;Ye++)ae[Ye]=r.COLOR_ATTACHMENT0+Ye;ae.length=xe.length,Ee=!0}}else ae[0]!==r.COLOR_ATTACHMENT0&&(ae[0]=r.COLOR_ATTACHMENT0,Ee=!0);else ae[0]!==r.BACK&&(ae[0]=r.BACK,Ee=!0);Ee&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Pt(C){return m!==C?(r.useProgram(C),m=C,!0):!1}const ve={[Mi]:r.FUNC_ADD,[bf]:r.FUNC_SUBTRACT,[wf]:r.FUNC_REVERSE_SUBTRACT};if(n)ve[Sl]=r.MIN,ve[El]=r.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(ve[Sl]=C.MIN_EXT,ve[El]=C.MAX_EXT)}const be={[Rf]:r.ZERO,[Cf]:r.ONE,[Pf]:r.SRC_COLOR,[co]:r.SRC_ALPHA,[Of]:r.SRC_ALPHA_SATURATE,[Uf]:r.DST_COLOR,[Df]:r.DST_ALPHA,[Lf]:r.ONE_MINUS_SRC_COLOR,[uo]:r.ONE_MINUS_SRC_ALPHA,[Nf]:r.ONE_MINUS_DST_COLOR,[If]:r.ONE_MINUS_DST_ALPHA,[Ff]:r.CONSTANT_COLOR,[Bf]:r.ONE_MINUS_CONSTANT_COLOR,[zf]:r.CONSTANT_ALPHA,[kf]:r.ONE_MINUS_CONSTANT_ALPHA};function fe(C,se,ae,Ee,xe,Ye,Ze,gt,Lt,Ke){if(C===ei){p===!0&&(Se(r.BLEND),p=!1);return}if(p===!1&&(Pe(r.BLEND),p=!0),C!==Af){if(C!==x||Ke!==N){if((v!==Mi||w!==Mi)&&(r.blendEquation(r.FUNC_ADD),v=Mi,w=Mi),Ke)switch(C){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xl:r.blendFunc(r.ONE,r.ONE);break;case yl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ml:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case yl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ml:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}M=null,R=null,b=null,D=null,y.set(0,0,0),T=0,x=C,N=Ke}return}xe=xe||se,Ye=Ye||ae,Ze=Ze||Ee,(se!==v||xe!==w)&&(r.blendEquationSeparate(ve[se],ve[xe]),v=se,w=xe),(ae!==M||Ee!==R||Ye!==b||Ze!==D)&&(r.blendFuncSeparate(be[ae],be[Ee],be[Ye],be[Ze]),M=ae,R=Ee,b=Ye,D=Ze),(gt.equals(y)===!1||Lt!==T)&&(r.blendColor(gt.r,gt.g,gt.b,Lt),y.copy(gt),T=Lt),x=C,N=!1}function Qe(C,se){C.side===_n?Se(r.CULL_FACE):Pe(r.CULL_FACE);let ae=C.side===Ft;se&&(ae=!ae),Ie(ae),C.blending===lr&&C.transparent===!1?fe(ei):fe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),o.setMask(C.colorWrite);const Ee=C.stencilWrite;h.setTest(Ee),Ee&&(h.setMask(C.stencilWriteMask),h.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),h.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),B(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(C){G!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),G=C)}function A(C){C!==Sf?(Pe(r.CULL_FACE),C!==q&&(C===vl?r.cullFace(r.BACK):C===Ef?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),q=C}function S(C){C!==P&&(X&&r.lineWidth(C),P=C)}function B(C,se,ae){C?(Pe(r.POLYGON_OFFSET_FILL),(U!==se||k!==ae)&&(r.polygonOffset(se,ae),U=se,k=ae)):Se(r.POLYGON_OFFSET_FILL)}function j(C){C?Pe(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function $(C){C===void 0&&(C=r.TEXTURE0+W-1),ee!==C&&(r.activeTexture(C),ee=C)}function Q(C,se,ae){ae===void 0&&(ee===null?ae=r.TEXTURE0+W-1:ae=ee);let Ee=te[ae];Ee===void 0&&(Ee={type:void 0,texture:void 0},te[ae]=Ee),(Ee.type!==C||Ee.texture!==se)&&(ee!==ae&&(r.activeTexture(ae),ee=ae),r.bindTexture(C,se||Re[C]),Ee.type=C,Ee.texture=se)}function de(){const C=te[ee];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function oe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function We(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(C){re.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function Ve(C){_e.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),_e.copy(C))}function rt(C,se){let ae=l.get(se);ae===void 0&&(ae=new WeakMap,l.set(se,ae));let Ee=ae.get(C);Ee===void 0&&(Ee=r.getUniformBlockIndex(se,C.name),ae.set(C,Ee))}function Oe(C,se){const Ee=l.get(se).get(C);f.get(se)!==Ee&&(r.uniformBlockBinding(se,Ee,C.__bindingPointIndex),f.set(se,Ee))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,te={},d={},_=new WeakMap,g=[],m=null,p=!1,x=null,v=null,M=null,R=null,w=null,b=null,D=null,y=new Ge(0,0,0),T=0,N=!1,G=null,q=null,P=null,U=null,k=null,re.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:Pe,disable:Se,bindFramebuffer:He,drawBuffers:O,useProgram:Pt,setBlending:fe,setMaterial:Qe,setFlipSided:Ie,setCullFace:A,setLineWidth:S,setPolygonOffset:B,setScissorTest:j,activeTexture:$,bindTexture:Q,unbindTexture:de,compressedTexImage2D:oe,compressedTexImage3D:ce,texImage2D:ge,texImage3D:ue,updateUBOMapping:rt,uniformBlockBinding:Oe,texStorage2D:ze,texStorage3D:Ae,texSubImage2D:Me,texSubImage3D:Ue,compressedTexSubImage2D:J,compressedTexSubImage3D:We,scissor:Le,viewport:Ve,reset:ne}}function N0(r,e,t,n,i,s,a){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let l;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return d?new OffscreenCanvas(A,S):Yr("canvas")}function g(A,S,B,j){let $=1;if((A.width>j||A.height>j)&&($=j/Math.max(A.width,A.height)),$<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const Q=S?Zs:Math.floor,de=Q($*A.width),oe=Q($*A.height);l===void 0&&(l=_(de,oe));const ce=B?_(de,oe):l;return ce.width=de,ce.height=oe,ce.getContext("2d").drawImage(A,0,0,de,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+de+"x"+oe+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return go(A.width)&&go(A.height)}function p(A){return o?!1:A.wrapS!==gn||A.wrapT!==gn||A.minFilter!==Nt&&A.minFilter!==ln}function x(A,S){return A.generateMipmaps&&S&&A.minFilter!==Nt&&A.minFilter!==ln}function v(A){r.generateMipmap(A)}function M(A,S,B,j,$=!1){if(o===!1)return S;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=S;if(S===r.RED&&(B===r.FLOAT&&(Q=r.R32F),B===r.HALF_FLOAT&&(Q=r.R16F),B===r.UNSIGNED_BYTE&&(Q=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(Q=r.R8UI),B===r.UNSIGNED_SHORT&&(Q=r.R16UI),B===r.UNSIGNED_INT&&(Q=r.R32UI),B===r.BYTE&&(Q=r.R8I),B===r.SHORT&&(Q=r.R16I),B===r.INT&&(Q=r.R32I)),S===r.RG&&(B===r.FLOAT&&(Q=r.RG32F),B===r.HALF_FLOAT&&(Q=r.RG16F),B===r.UNSIGNED_BYTE&&(Q=r.RG8)),S===r.RGBA){const de=$?Ws:Xe.getTransfer(j);B===r.FLOAT&&(Q=r.RGBA32F),B===r.HALF_FLOAT&&(Q=r.RGBA16F),B===r.UNSIGNED_BYTE&&(Q=de===Je?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function R(A,S,B){return x(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===Nt||A===Tl||A===xa?r.NEAREST:r.LINEAR}function b(A){const S=A.target;S.removeEventListener("dispose",b),y(S),S.isVideoTexture&&f.delete(S)}function D(A){const S=A.target;S.removeEventListener("dispose",D),N(S)}function y(A){const S=n.get(A);if(S.__webglInit===void 0)return;const B=A.source,j=u.get(B);if(j){const $=j[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(A),Object.keys(j).length===0&&u.delete(B)}n.remove(A)}function T(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const B=A.source,j=u.get(B);delete j[S.__cacheKey],a.memory.textures--}function N(A){const S=A.texture,B=n.get(A),j=n.get(S);if(j.__webglTexture!==void 0&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(B.__webglFramebuffer[$]))for(let Q=0;Q<B.__webglFramebuffer[$].length;Q++)r.deleteFramebuffer(B.__webglFramebuffer[$][Q]);else r.deleteFramebuffer(B.__webglFramebuffer[$]);B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[$])}else{if(Array.isArray(B.__webglFramebuffer))for(let $=0;$<B.__webglFramebuffer.length;$++)r.deleteFramebuffer(B.__webglFramebuffer[$]);else r.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let $=0;$<B.__webglColorRenderbuffer.length;$++)B.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[$]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let $=0,Q=S.length;$<Q;$++){const de=n.get(S[$]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(S[$])}n.remove(S),n.remove(A)}let G=0;function q(){G=0}function P(){const A=G;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),G+=1,A}function U(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function k(A,S){const B=n.get(A);if(A.isVideoTexture&&Qe(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(B,A,S);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}function W(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){re(B,A,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)}function X(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){re(B,A,S);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)}function Y(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){_e(B,A,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)}const K={[po]:r.REPEAT,[gn]:r.CLAMP_TO_EDGE,[mo]:r.MIRRORED_REPEAT},ee={[Nt]:r.NEAREST,[Tl]:r.NEAREST_MIPMAP_NEAREST,[xa]:r.NEAREST_MIPMAP_LINEAR,[ln]:r.LINEAR,[nd]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},te={[pd]:r.NEVER,[yd]:r.ALWAYS,[md]:r.LESS,[bu]:r.LEQUAL,[_d]:r.EQUAL,[xd]:r.GEQUAL,[gd]:r.GREATER,[vd]:r.NOTEQUAL};function V(A,S,B){if(B?(r.texParameteri(A,r.TEXTURE_WRAP_S,K[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,K[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,K[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ee[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ee[S.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==gn||S.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,w(S.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==Nt&&S.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Nt||S.minFilter!==xa&&S.minFilter!==Wr||S.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Xr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(A,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Z(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",b));const j=S.source;let $=u.get(j);$===void 0&&($={},u.set(j,$));const Q=U(S);if(Q!==A.__cacheKey){$[Q]===void 0&&($[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[Q].usedTimes++;const de=$[A.__cacheKey];de!==void 0&&($[A.__cacheKey].usedTimes--,de.usedTimes===0&&T(S)),A.__cacheKey=Q,A.__webglTexture=$[Q].texture}return B}function re(A,S,B){let j=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=r.TEXTURE_3D);const $=Z(A,S),Q=S.source;t.bindTexture(j,A.__webglTexture,r.TEXTURE0+B);const de=n.get(Q);if(Q.version!==de.__version||$===!0){t.activeTexture(r.TEXTURE0+B);const oe=Xe.getPrimaries(Xe.workingColorSpace),ce=S.colorSpace===cn?null:Xe.getPrimaries(S.colorSpace),Me=S.colorSpace===cn||oe===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ue=p(S)&&m(S.image)===!1;let J=g(S.image,Ue,!1,i.maxTextureSize);J=Ie(S,J);const We=m(J)||o,ze=s.convert(S.format,S.colorSpace);let Ae=s.convert(S.type),ge=M(S.internalFormat,ze,Ae,S.colorSpace,S.isVideoTexture);V(j,S,We);let ue;const Le=S.mipmaps,Ve=o&&S.isVideoTexture!==!0&&ge!==Eu,rt=de.__version===void 0||$===!0,Oe=R(S,J,We);if(S.isDepthTexture)ge=r.DEPTH_COMPONENT,o?S.type===Jn?ge=r.DEPTH_COMPONENT32F:S.type===Kn?ge=r.DEPTH_COMPONENT24:S.type===Ti?ge=r.DEPTH24_STENCIL8:ge=r.DEPTH_COMPONENT16:S.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ai&&ge===r.DEPTH_COMPONENT&&S.type!==Fo&&S.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Kn,Ae=s.convert(S.type)),S.format===mr&&ge===r.DEPTH_COMPONENT&&(ge=r.DEPTH_STENCIL,S.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ti,Ae=s.convert(S.type))),rt&&(Ve?t.texStorage2D(r.TEXTURE_2D,1,ge,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,ge,J.width,J.height,0,ze,Ae,null));else if(S.isDataTexture)if(Le.length>0&&We){Ve&&rt&&t.texStorage2D(r.TEXTURE_2D,Oe,ge,Le[0].width,Le[0].height);for(let ne=0,C=Le.length;ne<C;ne++)ue=Le[ne],Ve?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,Ae,ue.data):t.texImage2D(r.TEXTURE_2D,ne,ge,ue.width,ue.height,0,ze,Ae,ue.data);S.generateMipmaps=!1}else Ve?(rt&&t.texStorage2D(r.TEXTURE_2D,Oe,ge,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,ze,Ae,J.data)):t.texImage2D(r.TEXTURE_2D,0,ge,J.width,J.height,0,ze,Ae,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,ge,Le[0].width,Le[0].height,J.depth);for(let ne=0,C=Le.length;ne<C;ne++)ue=Le[ne],S.format!==vn?ze!==null?Ve?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,J.depth,ze,ue.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,ge,ue.width,ue.height,J.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,J.depth,ze,Ae,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,ge,ue.width,ue.height,J.depth,0,ze,Ae,ue.data)}else{Ve&&rt&&t.texStorage2D(r.TEXTURE_2D,Oe,ge,Le[0].width,Le[0].height);for(let ne=0,C=Le.length;ne<C;ne++)ue=Le[ne],S.format!==vn?ze!==null?Ve?t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,ge,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,Ae,ue.data):t.texImage2D(r.TEXTURE_2D,ne,ge,ue.width,ue.height,0,ze,Ae,ue.data)}else if(S.isDataArrayTexture)Ve?(rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,ge,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ze,Ae,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,J.width,J.height,J.depth,0,ze,Ae,J.data);else if(S.isData3DTexture)Ve?(rt&&t.texStorage3D(r.TEXTURE_3D,Oe,ge,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ze,Ae,J.data)):t.texImage3D(r.TEXTURE_3D,0,ge,J.width,J.height,J.depth,0,ze,Ae,J.data);else if(S.isFramebufferTexture){if(rt)if(Ve)t.texStorage2D(r.TEXTURE_2D,Oe,ge,J.width,J.height);else{let ne=J.width,C=J.height;for(let se=0;se<Oe;se++)t.texImage2D(r.TEXTURE_2D,se,ge,ne,C,0,ze,Ae,null),ne>>=1,C>>=1}}else if(Le.length>0&&We){Ve&&rt&&t.texStorage2D(r.TEXTURE_2D,Oe,ge,Le[0].width,Le[0].height);for(let ne=0,C=Le.length;ne<C;ne++)ue=Le[ne],Ve?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ze,Ae,ue):t.texImage2D(r.TEXTURE_2D,ne,ge,ze,Ae,ue);S.generateMipmaps=!1}else Ve?(rt&&t.texStorage2D(r.TEXTURE_2D,Oe,ge,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,Ae,J)):t.texImage2D(r.TEXTURE_2D,0,ge,ze,Ae,J);x(S,We)&&v(j),de.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function _e(A,S,B){if(S.image.length!==6)return;const j=Z(A,S),$=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+B);const Q=n.get($);if($.version!==Q.__version||j===!0){t.activeTexture(r.TEXTURE0+B);const de=Xe.getPrimaries(Xe.workingColorSpace),oe=S.colorSpace===cn?null:Xe.getPrimaries(S.colorSpace),ce=S.colorSpace===cn||de===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,Ue=S.image[0]&&S.image[0].isDataTexture,J=[];for(let ne=0;ne<6;ne++)!Me&&!Ue?J[ne]=g(S.image[ne],!1,!0,i.maxCubemapSize):J[ne]=Ue?S.image[ne].image:S.image[ne],J[ne]=Ie(S,J[ne]);const We=J[0],ze=m(We)||o,Ae=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),ue=M(S.internalFormat,Ae,ge,S.colorSpace),Le=o&&S.isVideoTexture!==!0,Ve=Q.__version===void 0||j===!0;let rt=R(S,We,ze);V(r.TEXTURE_CUBE_MAP,S,ze);let Oe;if(Me){Le&&Ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,rt,ue,We.width,We.height);for(let ne=0;ne<6;ne++){Oe=J[ne].mipmaps;for(let C=0;C<Oe.length;C++){const se=Oe[C];S.format!==vn?Ae!==null?Le?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,ge,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,ue,se.width,se.height,0,Ae,ge,se.data)}}}else{Oe=S.mipmaps,Le&&Ve&&(Oe.length>0&&rt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,rt,ue,J[0].width,J[0].height));for(let ne=0;ne<6;ne++)if(Ue){Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,J[ne].width,J[ne].height,Ae,ge,J[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,J[ne].width,J[ne].height,0,Ae,ge,J[ne].data);for(let C=0;C<Oe.length;C++){const ae=Oe[C].image[ne].image;Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,ae.width,ae.height,Ae,ge,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,ue,ae.width,ae.height,0,Ae,ge,ae.data)}}else{Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae,ge,J[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,Ae,ge,J[ne]);for(let C=0;C<Oe.length;C++){const se=Oe[C];Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,Ae,ge,se.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,ue,Ae,ge,se.image[ne])}}}x(S,ze)&&v(r.TEXTURE_CUBE_MAP),Q.__version=$.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function me(A,S,B,j,$,Q){const de=s.convert(B.format,B.colorSpace),oe=s.convert(B.type),ce=M(B.internalFormat,de,oe,B.colorSpace);if(!n.get(S).__hasExternalTextures){const Ue=Math.max(1,S.width>>Q),J=Math.max(1,S.height>>Q);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,Q,ce,Ue,J,S.depth,0,de,oe,null):t.texImage2D($,Q,ce,Ue,J,0,de,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),fe(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,n.get(B).__webglTexture,0,be(S)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,$,n.get(B).__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(A,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let j=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(B||fe(S)){const $=S.depthTexture;$&&$.isDepthTexture&&($.type===Jn?j=r.DEPTH_COMPONENT32F:$.type===Kn&&(j=r.DEPTH_COMPONENT24));const Q=be(S);fe(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,j,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,j,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,j,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const j=be(S);B&&fe(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,S.width,S.height):fe(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const j=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let $=0;$<j.length;$++){const Q=j[$],de=s.convert(Q.format,Q.colorSpace),oe=s.convert(Q.type),ce=M(Q.internalFormat,de,oe,Q.colorSpace),Me=be(S);B&&fe(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,ce,S.width,S.height):fe(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,ce,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ce,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const j=n.get(S.depthTexture).__webglTexture,$=be(S);if(S.depthTexture.format===Ai)fe(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(S.depthTexture.format===mr)fe(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Se(A){const S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Pe(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]=r.createRenderbuffer(),Re(S.__webglDepthbuffer[j],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Re(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(A,S,B){const j=n.get(A);S!==void 0&&me(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Se(A)}function O(A){const S=A.texture,B=n.get(A),j=n.get(S);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=S.version,a.memory.textures++);const $=A.isWebGLCubeRenderTarget===!0,Q=A.isWebGLMultipleRenderTargets===!0,de=m(A)||o;if($){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let ce=0;ce<S.mipmaps.length;ce++)B.__webglFramebuffer[oe][ce]=r.createFramebuffer()}else B.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)B.__webglFramebuffer[oe]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Q)if(i.drawBuffers){const oe=A.texture;for(let ce=0,Me=oe.length;ce<Me;ce++){const Ue=n.get(oe[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&fe(A)===!1){const oe=Q?S:[S];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<oe.length;ce++){const Me=oe[ce];B.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ue=s.convert(Me.format,Me.colorSpace),J=s.convert(Me.type),We=M(Me.internalFormat,Ue,J,Me.colorSpace,A.isXRRenderTarget===!0),ze=be(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,We,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),V(r.TEXTURE_CUBE_MAP,S,de);for(let oe=0;oe<6;oe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)me(B.__webglFramebuffer[oe][ce],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else me(B.__webglFramebuffer[oe],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(S,de)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const oe=A.texture;for(let ce=0,Me=oe.length;ce<Me;ce++){const Ue=oe[ce],J=n.get(Ue);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),V(r.TEXTURE_2D,Ue,de),me(B.__webglFramebuffer,A,Ue,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),x(Ue,de)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?oe=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,j.__webglTexture),V(oe,S,de),o&&S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)me(B.__webglFramebuffer[ce],A,S,r.COLOR_ATTACHMENT0,oe,ce);else me(B.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,oe,0);x(S,de)&&v(oe),t.unbindTexture()}A.depthBuffer&&Se(A)}function Pt(A){const S=m(A)||o,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let j=0,$=B.length;j<$;j++){const Q=B[j];if(x(Q,S)){const de=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,oe=n.get(Q).__webglTexture;t.bindTexture(de,oe),v(de),t.unbindTexture()}}}function ve(A){if(o&&A.samples>0&&fe(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,j=A.height;let $=r.COLOR_BUFFER_BIT;const Q=[],de=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=n.get(A),ce=A.isWebGLMultipleRenderTargets===!0;if(ce)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){Q.push(r.COLOR_ATTACHMENT0+Me),A.depthBuffer&&Q.push(de);const Ue=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ue===!1&&(A.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ce&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]),Ue===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[de]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[de])),ce){const J=n.get(S[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,B,j,0,0,B,j,$,r.NEAREST),h&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]);const Ue=n.get(S[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,Ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function be(A){return Math.min(i.maxSamples,A.samples)}function fe(A){const S=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Qe(A){const S=a.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function Ie(A,S){const B=A.colorSpace,j=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===_o||B!==kn&&B!==cn&&(Xe.getTransfer(B)===Je?o===!1?e.has("EXT_sRGB")===!0&&j===vn?(A.format=_o,A.minFilter=ln,A.generateMipmaps=!1):S=Ru.sRGBToLinear(S):(j!==vn||$!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=P,this.resetTextureUnits=q,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=He,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=me,this.useMultisampledRTT=fe}function O0(r,e,t){const n=t.isWebGL2;function i(s,a=cn){let o;const c=Xe.getTransfer(a);if(s===ni)return r.UNSIGNED_BYTE;if(s===vu)return r.UNSIGNED_SHORT_4_4_4_4;if(s===xu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===id)return r.BYTE;if(s===rd)return r.SHORT;if(s===Fo)return r.UNSIGNED_SHORT;if(s===gu)return r.INT;if(s===Kn)return r.UNSIGNED_INT;if(s===Jn)return r.FLOAT;if(s===Xr)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===sd)return r.ALPHA;if(s===vn)return r.RGBA;if(s===ad)return r.LUMINANCE;if(s===od)return r.LUMINANCE_ALPHA;if(s===Ai)return r.DEPTH_COMPONENT;if(s===mr)return r.DEPTH_STENCIL;if(s===_o)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ld)return r.RED;if(s===yu)return r.RED_INTEGER;if(s===cd)return r.RG;if(s===Mu)return r.RG_INTEGER;if(s===Su)return r.RGBA_INTEGER;if(s===ya||s===Ma||s===Sa||s===Ea)if(c===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ya)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ya)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ma)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ea)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Al||s===bl||s===wl||s===Rl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Al)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Cl||s===Pl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Cl)return c===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Pl)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ll||s===Dl||s===Il||s===Ul||s===Nl||s===Ol||s===Fl||s===Bl||s===zl||s===kl||s===Hl||s===Gl||s===Vl||s===Wl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ll)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dl)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Il)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ul)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nl)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ol)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fl)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bl)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zl)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kl)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hl)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gl)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vl)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wl)return c===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ta||s===Xl||s===ql)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ta)return c===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Xl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ql)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ud||s===Yl||s===Zl||s===Kl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ta)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Yl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ti?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class F0 extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B0={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],u=f.position.distanceTo(l.position),d=.02,_=.005;h.inputState.pinching&&u>d+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=d-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Us;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class z0 extends Er{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,h=null,f=null,l=null,u=null,d=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const x=[],v=[],M=new he;let R=null;const w=new Kt;w.layers.enable(1),w.viewport=new $e;const b=new Kt;b.layers.enable(2),b.viewport=new $e;const D=[w,b],y=new F0;y.layers.enable(1),y.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=x[V];return Z===void 0&&(Z=new Ya,x[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=x[V];return Z===void 0&&(Z=new Ya,x[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=x[V];return Z===void 0&&(Z=new Ya,x[V]=Z),Z.getHandSpace()};function G(V){const Z=v.indexOf(V.inputSource);if(Z===-1)return;const re=x[Z];re!==void 0&&(re.update(V.inputSource,V.frame,h||a),re.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",P);for(let V=0;V<x.length;V++){const Z=v[V];Z!==null&&(v[V]=null,x[V].disconnect(Z))}T=null,N=null,e.setRenderTarget(m),d=null,u=null,l=null,i=null,p=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(V){h=V},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return l},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",q),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Ii(d.framebufferWidth,d.framebufferHeight,{format:vn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,re=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?mr:Ai,re=g.stencil?Ti:Kn);const me={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};l=new XRWebGLBinding(i,t),u=l.createProjectionLayer(me),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Ii(u.textureWidth,u.textureHeight,{format:vn,type:ni,depthTexture:new ku(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Re=e.properties.get(p);Re.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(V){for(let Z=0;Z<V.removed.length;Z++){const re=V.removed[Z],_e=v.indexOf(re);_e>=0&&(v[_e]=null,x[_e].disconnect(re))}for(let Z=0;Z<V.added.length;Z++){const re=V.added[Z];let _e=v.indexOf(re);if(_e===-1){for(let Re=0;Re<x.length;Re++)if(Re>=v.length){v.push(re),_e=Re;break}else if(v[Re]===null){v[Re]=re,_e=Re;break}if(_e===-1)break}const me=x[_e];me&&me.connect(re)}}const U=new L,k=new L;function W(V,Z,re){U.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(re.matrixWorld);const _e=U.distanceTo(k),me=Z.projectionMatrix.elements,Re=re.projectionMatrix.elements,Pe=me[14]/(me[10]-1),Se=me[14]/(me[10]+1),He=(me[9]+1)/me[5],O=(me[9]-1)/me[5],Pt=(me[8]-1)/me[0],ve=(Re[8]+1)/Re[0],be=Pe*Pt,fe=Pe*ve,Qe=_e/(-Pt+ve),Ie=Qe*-Pt;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ie),V.translateZ(Qe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const A=Pe+Qe,S=Se+Qe,B=be-Ie,j=fe+(_e-Ie),$=He*Se/S*A,Q=O*Se/S*A;V.projectionMatrix.makePerspective(B,j,$,Q,A,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;y.near=b.near=w.near=V.near,y.far=b.far=w.far=V.far,(T!==y.near||N!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,N=y.far);const Z=V.parent,re=y.cameras;X(y,Z);for(let _e=0;_e<re.length;_e++)X(re[_e],Z);re.length===2?W(y,w,b):y.projectionMatrix.copy(w.projectionMatrix),Y(V,y,Z)};function Y(V,Z,re){re===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=qr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(V){c=V,u!==null&&(u.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let K=null;function ee(V,Z){if(f=Z.getViewerPose(h||a),_=Z,f!==null){const re=f.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let _e=!1;re.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let me=0;me<re.length;me++){const Re=re[me];let Pe=null;if(d!==null)Pe=d.getViewport(Re);else{const He=l.getViewSubImage(u,Re);Pe=He.viewport,me===0&&(e.setRenderTargetTextures(p,He.colorTexture,u.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(p))}let Se=D[me];Se===void 0&&(Se=new Kt,Se.layers.enable(me),Se.viewport=new $e,D[me]=Se),Se.matrix.fromArray(Re.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Re.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),me===0&&(y.matrix.copy(Se.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(Se)}}for(let re=0;re<x.length;re++){const _e=v[re],me=x[re];_e!==null&&me!==void 0&&me.update(_e,Z,h||a)}K&&K(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const te=new zu;te.setAnimationLoop(ee),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}}function k0(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ou(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),l(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,v):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function H0(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function h(x,v){let M=i[x.id];M===void 0&&(_(x),M=f(x),i[x.id]=M,x.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(x,R);const w=e.render.frame;s[x.id]!==w&&(u(x),s[x.id]=w)}function f(x){const v=l();x.__bindingPointIndex=v;const M=r.createBuffer(),R=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function l(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const v=i[x.id],M=x.uniforms,R=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,b=M.length;w<b;w++){const D=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,T=D.length;y<T;y++){const N=D[y];if(d(N,w,y,R)===!0){const G=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let P=0;for(let U=0;U<q.length;U++){const k=q[U],W=g(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,G+P,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,P),P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,v,M,R){const w=x.value,b=v+"_"+M;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const D=R[b];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return R[b]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function _(x){const v=x.uniforms;let M=0;const R=16;for(let b=0,D=v.length;b<D;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let T=0,N=y.length;T<N;T++){const G=y[T],q=Array.isArray(G.value)?G.value:[G.value];for(let P=0,U=q.length;P<U;P++){const k=q[P],W=g(k),X=M%R;X!==0&&R-X<W.boundary&&(M+=R-X),G.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=W.storage}}}const w=M%R;return w>0&&(M+=R-w),x.__size=M,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:h,dispose:p}}class qu{constructor(e={}){const{canvas:t=Nd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;const v=this;let M=!1,R=0,w=0,b=null,D=-1,y=null;const T=new $e,N=new $e;let G=null;const q=new Ge(0);let P=0,U=t.width,k=t.height,W=1,X=null,Y=null;const K=new $e(0,0,U,k),ee=new $e(0,0,U,k);let te=!1;const V=new Go;let Z=!1,re=!1,_e=null;const me=new ct,Re=new he,Pe=new L,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return b===null?W:1}let O=n;function Pt(E,I){for(let z=0;z<E.length;z++){const H=E[z],F=t.getContext(H,I);if(F!==null)return F}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oo}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),O=Pt(I,E),O===null)throw Pt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ve,be,fe,Qe,Ie,A,S,B,j,$,Q,de,oe,ce,Me,Ue,J,We,ze,Ae,ge,ue,Le,Ve;function rt(){ve=new $_(O),be=new W_(O,ve,e),ve.init(be),ue=new O0(O,ve,be),fe=new U0(O,ve,be),Qe=new eg(O),Ie=new y0,A=new N0(O,ve,fe,Ie,be,ue,Qe),S=new q_(v),B=new J_(v),j=new op(O,be),Le=new G_(O,ve,j,be),$=new j_(O,j,Qe,Le),Q=new rg(O,$,j,Qe),ze=new ig(O,be,A),Ue=new X_(Ie),de=new x0(v,S,B,ve,be,Le,Ue),oe=new k0(v,Ie),ce=new S0,Me=new R0(ve,be),We=new H_(v,S,B,fe,Q,u,c),J=new I0(v,Q,be),Ve=new H0(O,Qe,be,fe),Ae=new V_(O,ve,Qe,be),ge=new Q_(O,ve,Qe,be),Qe.programs=de.programs,v.capabilities=be,v.extensions=ve,v.properties=Ie,v.renderLists=ce,v.shadowMap=J,v.state=fe,v.info=Qe}rt();const Oe=new z0(v,O);this.xr=Oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(U,k,!1))},this.getSize=function(E){return E.set(U,k)},this.setSize=function(E,I,z=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,k=I,t.width=Math.floor(E*W),t.height=Math.floor(I*W),z===!0&&(t.style.width=E+"px",t.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(U*W,k*W).floor()},this.setDrawingBufferSize=function(E,I,z){U=E,k=I,W=z,t.width=Math.floor(E*z),t.height=Math.floor(I*z),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,I,z,H){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,I,z,H),fe.viewport(T.copy(K).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,I,z,H){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,I,z,H),fe.scissor(N.copy(ee).multiplyScalar(W).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){fe.setScissorTest(te=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(E=!0,I=!0,z=!0){let H=0;if(E){let F=!1;if(b!==null){const le=b.texture.format;F=le===Su||le===Mu||le===yu}if(F){const le=b.texture.type,pe=le===ni||le===Kn||le===Fo||le===Ti||le===vu||le===xu,ye=We.getClearColor(),Te=We.getClearAlpha(),Ne=ye.r,we=ye.g,Ce=ye.b;pe?(d[0]=Ne,d[1]=we,d[2]=Ce,d[3]=Te,O.clearBufferuiv(O.COLOR,0,d)):(_[0]=Ne,_[1]=we,_[2]=Ce,_[3]=Te,O.clearBufferiv(O.COLOR,0,_))}else H|=O.COLOR_BUFFER_BIT}I&&(H|=O.DEPTH_BUFFER_BIT),z&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ce.dispose(),Me.dispose(),Ie.dispose(),S.dispose(),B.dispose(),Q.dispose(),Le.dispose(),Ve.dispose(),de.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Lt),Oe.removeEventListener("sessionend",Ke),_e&&(_e.dispose(),_e=null),Dt.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=Qe.autoReset,I=J.enabled,z=J.autoUpdate,H=J.needsUpdate,F=J.type;rt(),Qe.autoReset=E,J.enabled=I,J.autoUpdate=z,J.needsUpdate=H,J.type=F}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ae(E){const I=E.target;I.removeEventListener("dispose",ae),Ee(I)}function Ee(E){xe(E),Ie.remove(E)}function xe(E){const I=Ie.get(E).programs;I!==void 0&&(I.forEach(function(z){de.releaseProgram(z)}),E.isShaderMaterial&&de.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,z,H,F,le){I===null&&(I=Se);const pe=F.isMesh&&F.matrixWorld.determinant()<0,ye=vf(E,I,z,H,F);fe.setMaterial(H,pe);let Te=z.index,Ne=1;if(H.wireframe===!0){if(Te=$.getWireframeAttribute(z),Te===void 0)return;Ne=2}const we=z.drawRange,Ce=z.attributes.position;let ot=we.start*Ne,Xt=(we.start+we.count)*Ne;le!==null&&(ot=Math.max(ot,le.start*Ne),Xt=Math.min(Xt,(le.start+le.count)*Ne)),Te!==null?(ot=Math.max(ot,0),Xt=Math.min(Xt,Te.count)):Ce!=null&&(ot=Math.max(ot,0),Xt=Math.min(Xt,Ce.count));const vt=Xt-ot;if(vt<0||vt===1/0)return;Le.setup(F,H,ye,z,Te);let Pn,et=Ae;if(Te!==null&&(Pn=j.get(Te),et=ge,et.setIndex(Pn)),F.isMesh)H.wireframe===!0?(fe.setLineWidth(H.wireframeLinewidth*He()),et.setMode(O.LINES)):et.setMode(O.TRIANGLES);else if(F.isLine){let Fe=H.linewidth;Fe===void 0&&(Fe=1),fe.setLineWidth(Fe*He()),F.isLineSegments?et.setMode(O.LINES):F.isLineLoop?et.setMode(O.LINE_LOOP):et.setMode(O.LINE_STRIP)}else F.isPoints?et.setMode(O.POINTS):F.isSprite&&et.setMode(O.TRIANGLES);if(F.isBatchedMesh)et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)et.renderInstances(ot,vt,F.count);else if(z.isInstancedBufferGeometry){const Fe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ma=Math.min(z.instanceCount,Fe);et.renderInstances(ot,vt,ma)}else et.render(ot,vt)};function Ye(E,I,z){E.transparent===!0&&E.side===_n&&E.forceSinglePass===!1?(E.side=Ft,E.needsUpdate=!0,hs(E,I,z),E.side=si,E.needsUpdate=!0,hs(E,I,z),E.side=_n):hs(E,I,z)}this.compile=function(E,I,z=null){z===null&&(z=E),m=Me.get(z),m.init(),x.push(m),z.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(v._useLegacyLights);const H=new Set;return E.traverse(function(F){const le=F.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const ye=le[pe];Ye(ye,z,F),H.add(ye)}else Ye(le,z,F),H.add(le)}),x.pop(),m=null,H},this.compileAsync=function(E,I,z=null){const H=this.compile(E,I,z);return new Promise(F=>{function le(){if(H.forEach(function(pe){Ie.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){F(E);return}setTimeout(le,10)}ve.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ze=null;function gt(E){Ze&&Ze(E)}function Lt(){Dt.stop()}function Ke(){Dt.start()}const Dt=new zu;Dt.setAnimationLoop(gt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(E){Ze=E,Oe.setAnimationLoop(E),E===null?Dt.stop():Dt.start()},Oe.addEventListener("sessionstart",Lt),Oe.addEventListener("sessionend",Ke),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(I),I=Oe.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,I,b),m=Me.get(E,x.length),m.init(),x.push(m),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(me),re=this.localClippingEnabled,Z=Ue.init(this.clippingPlanes,re),g=ce.get(E,p.length),g.init(),p.push(g),xn(E,I,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(X,Y),this.info.render.frame++,Z===!0&&Ue.beginShadows();const z=m.state.shadowsArray;if(J.render(z,E,I),Z===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(g,E),m.setupLights(v._useLegacyLights),I.isArrayCamera){const H=I.cameras;for(let F=0,le=H.length;F<le;F++){const pe=H[F];fl(g,E,pe,pe.viewport)}}else fl(g,E,I);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(v,E,I),Le.resetDefaultState(),D=-1,y=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function xn(E,I,z,H){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){H&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);const pe=Q.update(E),ye=E.material;ye.visible&&g.push(E,pe,ye,z,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const pe=Q.update(E),ye=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(me)),Array.isArray(ye)){const Te=pe.groups;for(let Ne=0,we=Te.length;Ne<we;Ne++){const Ce=Te[Ne],ot=ye[Ce.materialIndex];ot&&ot.visible&&g.push(E,pe,ot,z,Pe.z,Ce)}}else ye.visible&&g.push(E,pe,ye,z,Pe.z,null)}}const le=E.children;for(let pe=0,ye=le.length;pe<ye;pe++)xn(le[pe],I,z,H)}function fl(E,I,z,H){const F=E.opaque,le=E.transmissive,pe=E.transparent;m.setupLightsView(z),Z===!0&&Ue.setGlobalState(v.clippingPlanes,z),le.length>0&&gf(F,le,I,z),H&&fe.viewport(T.copy(H)),F.length>0&&us(F,I,z),le.length>0&&us(le,I,z),pe.length>0&&us(pe,I,z),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function gf(E,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const le=be.isWebGL2;_e===null&&(_e=new Ii(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Xr:ni,minFilter:Wr,samples:le?4:0})),v.getDrawingBufferSize(Re),le?_e.setSize(Re.x,Re.y):_e.setSize(Zs(Re.x),Zs(Re.y));const pe=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(q),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const ye=v.toneMapping;v.toneMapping=ti,us(E,z,H),A.updateMultisampleRenderTarget(_e),A.updateRenderTargetMipmap(_e);let Te=!1;for(let Ne=0,we=I.length;Ne<we;Ne++){const Ce=I[Ne],ot=Ce.object,Xt=Ce.geometry,vt=Ce.material,Pn=Ce.group;if(vt.side===_n&&ot.layers.test(H.layers)){const et=vt.side;vt.side=Ft,vt.needsUpdate=!0,dl(ot,z,H,Xt,vt,Pn),vt.side=et,vt.needsUpdate=!0,Te=!0}}Te===!0&&(A.updateMultisampleRenderTarget(_e),A.updateRenderTargetMipmap(_e)),v.setRenderTarget(pe),v.setClearColor(q,P),v.toneMapping=ye}function us(E,I,z){const H=I.isScene===!0?I.overrideMaterial:null;for(let F=0,le=E.length;F<le;F++){const pe=E[F],ye=pe.object,Te=pe.geometry,Ne=H===null?pe.material:H,we=pe.group;ye.layers.test(z.layers)&&dl(ye,I,z,Te,Ne,we)}}function dl(E,I,z,H,F,le){E.onBeforeRender(v,I,z,H,F,le),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,I,z,H,E,le),F.transparent===!0&&F.side===_n&&F.forceSinglePass===!1?(F.side=Ft,F.needsUpdate=!0,v.renderBufferDirect(z,I,H,F,E,le),F.side=si,F.needsUpdate=!0,v.renderBufferDirect(z,I,H,F,E,le),F.side=_n):v.renderBufferDirect(z,I,H,F,E,le),E.onAfterRender(v,I,z,H,F,le)}function hs(E,I,z){I.isScene!==!0&&(I=Se);const H=Ie.get(E),F=m.state.lights,le=m.state.shadowsArray,pe=F.state.version,ye=de.getParameters(E,F.state,le,I,z),Te=de.getProgramCacheKey(ye);let Ne=H.programs;H.environment=E.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||H.environment),Ne===void 0&&(E.addEventListener("dispose",ae),Ne=new Map,H.programs=Ne);let we=Ne.get(Te);if(we!==void 0){if(H.currentProgram===we&&H.lightsStateVersion===pe)return ml(E,ye),we}else ye.uniforms=de.getUniforms(E),E.onBuild(z,ye,v),E.onBeforeCompile(ye,v),we=de.acquireProgram(ye,Te),Ne.set(Te,we),H.uniforms=ye.uniforms;const Ce=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),ml(E,ye),H.needsLights=yf(E),H.lightsStateVersion=pe,H.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=we,H.uniformsList=null,we}function pl(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=zs.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function ml(E,I){const z=Ie.get(E);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function vf(E,I,z,H,F){I.isScene!==!0&&(I=Se),A.resetTextureUnits();const le=I.fog,pe=H.isMeshStandardMaterial?I.environment:null,ye=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:kn,Te=(H.isMeshStandardMaterial?B:S).get(H.envMap||pe),Ne=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,we=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!z.morphAttributes.position,ot=!!z.morphAttributes.normal,Xt=!!z.morphAttributes.color;let vt=ti;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(vt=v.toneMapping);const Pn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=Pn!==void 0?Pn.length:0,Fe=Ie.get(H),ma=m.state.lights;if(Z===!0&&(re===!0||E!==y)){const sn=E===y&&H.id===D;Ue.setState(H,E,sn)}let st=!1;H.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ma.state.version||Fe.outputColorSpace!==ye||F.isBatchedMesh&&Fe.batching===!1||!F.isBatchedMesh&&Fe.batching===!0||F.isInstancedMesh&&Fe.instancing===!1||!F.isInstancedMesh&&Fe.instancing===!0||F.isSkinnedMesh&&Fe.skinning===!1||!F.isSkinnedMesh&&Fe.skinning===!0||F.isInstancedMesh&&Fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Fe.instancingColor===!1&&F.instanceColor!==null||Fe.envMap!==Te||H.fog===!0&&Fe.fog!==le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ue.numPlanes||Fe.numIntersection!==Ue.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==we||Fe.morphTargets!==Ce||Fe.morphNormals!==ot||Fe.morphColors!==Xt||Fe.toneMapping!==vt||be.isWebGL2===!0&&Fe.morphTargetsCount!==et)&&(st=!0):(st=!0,Fe.__version=H.version);let ui=Fe.currentProgram;st===!0&&(ui=hs(H,I,F));let _l=!1,Ar=!1,_a=!1;const Tt=ui.getUniforms(),hi=Fe.uniforms;if(fe.useProgram(ui.program)&&(_l=!0,Ar=!0,_a=!0),H.id!==D&&(D=H.id,Ar=!0),_l||y!==E){Tt.setValue(O,"projectionMatrix",E.projectionMatrix),Tt.setValue(O,"viewMatrix",E.matrixWorldInverse);const sn=Tt.map.cameraPosition;sn!==void 0&&sn.setValue(O,Pe.setFromMatrixPosition(E.matrixWorld)),be.logarithmicDepthBuffer&&Tt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Tt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Ar=!0,_a=!0)}if(F.isSkinnedMesh){Tt.setOptional(O,F,"bindMatrix"),Tt.setOptional(O,F,"bindMatrixInverse");const sn=F.skeleton;sn&&(be.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Tt.setValue(O,"boneTexture",sn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Tt.setOptional(O,F,"batchingTexture"),Tt.setValue(O,"batchingTexture",F._matricesTexture,A));const ga=z.morphAttributes;if((ga.position!==void 0||ga.normal!==void 0||ga.color!==void 0&&be.isWebGL2===!0)&&ze.update(F,z,ui),(Ar||Fe.receiveShadow!==F.receiveShadow)&&(Fe.receiveShadow=F.receiveShadow,Tt.setValue(O,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(hi.envMap.value=Te,hi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Ar&&(Tt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&xf(hi,_a),le&&H.fog===!0&&oe.refreshFogUniforms(hi,le),oe.refreshMaterialUniforms(hi,H,W,k,_e),zs.upload(O,pl(Fe),hi,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(zs.upload(O,pl(Fe),hi,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Tt.setValue(O,"center",F.center),Tt.setValue(O,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(O,"normalMatrix",F.normalMatrix),Tt.setValue(O,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const sn=H.uniformsGroups;for(let va=0,Mf=sn.length;va<Mf;va++)if(be.isWebGL2){const gl=sn[va];Ve.update(gl,ui),Ve.bind(gl,ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ui}function xf(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function yf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,I,z){Ie.get(E.texture).__webglTexture=I,Ie.get(E.depthTexture).__webglTexture=z;const H=Ie.get(E);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,I){const z=Ie.get(E);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,z=0){b=E,R=I,w=z;let H=!0,F=null,le=!1,pe=!1;if(E){const Te=Ie.get(E);Te.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Te.__webglFramebuffer===void 0?A.setupRenderTarget(E):Te.__hasExternalTextures&&A.rebindTextures(E,Ie.get(E.texture).__webglTexture,Ie.get(E.depthTexture).__webglTexture);const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const we=Ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[I])?F=we[I][z]:F=we[I],le=!0):be.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?F=Ie.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?F=we[z]:F=we,T.copy(E.viewport),N.copy(E.scissor),G=E.scissorTest}else T.copy(K).multiplyScalar(W).floor(),N.copy(ee).multiplyScalar(W).floor(),G=te;if(fe.bindFramebuffer(O.FRAMEBUFFER,F)&&be.drawBuffers&&H&&fe.drawBuffers(E,F),fe.viewport(T),fe.scissor(N),fe.setScissorTest(G),le){const Te=Ie.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te.__webglTexture,z)}else if(pe){const Te=Ie.get(E.texture),Ne=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Te.__webglTexture,z||0,Ne)}D=-1},this.readRenderTargetPixels=function(E,I,z,H,F,le,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){fe.bindFramebuffer(O.FRAMEBUFFER,ye);try{const Te=E.texture,Ne=Te.format,we=Te.type;if(Ne!==vn&&ue.convert(Ne)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=we===Xr&&(ve.has("EXT_color_buffer_half_float")||be.isWebGL2&&ve.has("EXT_color_buffer_float"));if(we!==ni&&ue.convert(we)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===Jn&&(be.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-H&&z>=0&&z<=E.height-F&&O.readPixels(I,z,H,F,ue.convert(Ne),ue.convert(we),le)}finally{const Te=b!==null?Ie.get(b).__webglFramebuffer:null;fe.bindFramebuffer(O.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(E,I,z=0){const H=Math.pow(2,-z),F=Math.floor(I.image.width*H),le=Math.floor(I.image.height*H);A.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,E.x,E.y,F,le),fe.unbindTexture()},this.copyTextureToTexture=function(E,I,z,H=0){const F=I.image.width,le=I.image.height,pe=ue.convert(z.format),ye=ue.convert(z.type);A.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,E.x,E.y,F,le,pe,ye,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,pe,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,E.x,E.y,pe,ye,I.image),H===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(E,I,z,H,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=E.max.x-E.min.x+1,pe=E.max.y-E.min.y+1,ye=E.max.z-E.min.z+1,Te=ue.convert(H.format),Ne=ue.convert(H.type);let we;if(H.isData3DTexture)A.setTexture3D(H,0),we=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)A.setTexture2DArray(H,0),we=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const Ce=O.getParameter(O.UNPACK_ROW_LENGTH),ot=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Xt=O.getParameter(O.UNPACK_SKIP_PIXELS),vt=O.getParameter(O.UNPACK_SKIP_ROWS),Pn=O.getParameter(O.UNPACK_SKIP_IMAGES),et=z.isCompressedTexture?z.mipmaps[F]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,et.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,et.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(we,F,I.x,I.y,I.z,le,pe,ye,Te,Ne,et.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(we,F,I.x,I.y,I.z,le,pe,ye,Te,et.data)):O.texSubImage3D(we,F,I.x,I.y,I.z,le,pe,ye,Te,Ne,et),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ce),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Xt),O.pixelStorei(O.UNPACK_SKIP_ROWS,vt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Pn),F===0&&H.generateMipmaps&&O.generateMipmap(we),fe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){R=0,w=0,b=null,fe.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bo?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===ra?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?bi:Tu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bi?Mt:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class G0 extends qu{}G0.prototype.isWebGL1Renderer=!0;class V0 extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,h;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),h=n[i]-a,h<0)o=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const f=n[i],u=n[i+1]-f,d=(a-f)/u;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new he:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],s=[],a=[],o=new L,c=new ct;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new L)}s[0]=new L,a[0]=new L;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),l=Math.abs(i[0].y),u=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),l<=h&&(h=l,n.set(0,1,0)),u<=h&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(St(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,_))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(St(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(c.makeRotationAxis(i[_],d*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wo extends Cn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const n=t||new he,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),l=Math.sin(this.aRotation),u=c-this.aX,d=h-this.aY;c=u*f-d*l+this.aX,h=u*l+d*f+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class W0 extends Wo{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xo(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,h){i(a,o,h*(o-s),h*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,h,f,l){let u=(a-s)/h-(o-s)/(h+f)+(o-a)/f,d=(o-a)/f-(c-a)/(f+l)+(c-o)/l;u*=f,d*=f,i(a,o,u,d)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Ns=new L,Za=new Xo,Ka=new Xo,Ja=new Xo;class X0 extends Cn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let h,f;this.closed||o>0?h=i[(o-1)%s]:(Ns.subVectors(i[0],i[1]).add(i[0]),h=Ns);const l=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?f=i[(o+2)%s]:(Ns.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=Ns),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(l),d),g=Math.pow(l.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Za.initNonuniformCatmullRom(h.x,l.x,u.x,f.x,_,g,m),Ka.initNonuniformCatmullRom(h.y,l.y,u.y,f.y,_,g,m),Ja.initNonuniformCatmullRom(h.z,l.z,u.z,f.z,_,g,m)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(h.x,l.x,u.x,f.x,this.tension),Ka.initCatmullRom(h.y,l.y,u.y,f.y,this.tension),Ja.initCatmullRom(h.z,l.z,u.z,f.z,this.tension));return n.set(Za.calc(c),Ka.calc(c),Ja.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bc(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function q0(r,e){const t=1-r;return t*t*e}function Y0(r,e){return 2*(1-r)*r*e}function Z0(r,e){return r*r*e}function Br(r,e,t,n){return q0(r,e)+Y0(r,t)+Z0(r,n)}function K0(r,e){const t=1-r;return t*t*t*e}function J0(r,e){const t=1-r;return 3*t*t*r*e}function $0(r,e){return 3*(1-r)*r*r*e}function j0(r,e){return r*r*r*e}function zr(r,e,t,n,i){return K0(r,e)+J0(r,t)+$0(r,n)+j0(r,i)}class Yu extends Cn{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zr(e,i.x,s.x,a.x,o.x),zr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Q0 extends Cn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zr(e,i.x,s.x,a.x,o.x),zr(e,i.y,s.y,a.y,o.y),zr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zu extends Cn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ev extends Cn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ku extends Cn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Br(e,i.x,s.x,a.x),Br(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tv extends Cn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Br(e,i.x,s.x,a.x),Br(e,i.y,s.y,a.y),Br(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],h=i[a],f=i[a>i.length-2?i.length-1:a+1],l=i[a>i.length-3?i.length-1:a+2];return n.set(Bc(o,c.x,h.x,f.x,l.x),Bc(o,c.y,h.y,f.y,l.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var zc=Object.freeze({__proto__:null,ArcCurve:W0,CatmullRomCurve3:X0,CubicBezierCurve:Yu,CubicBezierCurve3:Q0,EllipseCurve:Wo,LineCurve:Zu,LineCurve3:ev,QuadraticBezierCurve:Ku,QuadraticBezierCurve3:tv,SplineCurve:Ju});class nv extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let h=0;h<c.length;h++){const f=c[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new zc[i.type]().fromJSON(i))}return this}}class kc extends nv{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zu(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Ku(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Yu(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ju(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){const h=new Wo(e,t,n,i,s,a,o,c);if(this.curves.length>0){const l=h.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $u extends kc{constructor(e){super(e),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new kc().fromJSON(i))}return this}}const iv={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=ju(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,h,f,l,u,d;if(n&&(s=lv(r,e,s,t)),r.length>80*t){o=h=r[0],c=f=r[1];for(let _=t;_<i;_+=t)l=r[_],u=r[_+1],l<o&&(o=l),u<c&&(c=u),l>h&&(h=l),u>f&&(f=u);d=Math.max(h-o,f-c),d=d!==0?32767/d:0}return Zr(s,a,t,o,c,d,0),a}};function ju(r,e,t,n,i){let s,a;if(i===xv(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Hc(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Hc(s,r[s],r[s+1],a);return a&&la(a,a.next)&&(Jr(a),a=a.next),a}function Ni(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(la(t,t.next)||nt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&dv(r,n,i,s);let o=r,c,h;for(;r.prev!==r.next;){if(c=r.prev,h=r.next,s?sv(r,n,i,s):rv(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),Jr(r),r=h.next,o=h.next;continue}if(r=h,r===o){a?a===1?(r=av(Ni(r),e,t),Zr(r,e,t,n,i,s,2)):a===2&&ov(r,e,t,n,i,s):Zr(Ni(r),e,t,n,i,s,1);break}}}function rv(r){const e=r.prev,t=r,n=r.next;if(nt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,h=n.y,f=i<s?i<a?i:a:s<a?s:a,l=o<c?o<h?o:h:c<h?c:h,u=i>s?i>a?i:a:s>a?s:a,d=o>c?o>h?o:h:c>h?c:h;let _=n.next;for(;_!==e;){if(_.x>=f&&_.x<=u&&_.y>=l&&_.y<=d&&sr(i,o,s,c,a,h,_.x,_.y)&&nt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function sv(r,e,t,n){const i=r.prev,s=r,a=r.next;if(nt(i,s,a)>=0)return!1;const o=i.x,c=s.x,h=a.x,f=i.y,l=s.y,u=a.y,d=o<c?o<h?o:h:c<h?c:h,_=f<l?f<u?f:u:l<u?l:u,g=o>c?o>h?o:h:c>h?c:h,m=f>l?f>u?f:u:l>u?l:u,p=xo(d,_,e,t,n),x=xo(g,m,e,t,n);let v=r.prevZ,M=r.nextZ;for(;v&&v.z>=p&&M&&M.z<=x;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==a&&sr(o,f,c,l,h,u,v.x,v.y)&&nt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=g&&M.y>=_&&M.y<=m&&M!==i&&M!==a&&sr(o,f,c,l,h,u,M.x,M.y)&&nt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==a&&sr(o,f,c,l,h,u,v.x,v.y)&&nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=d&&M.x<=g&&M.y>=_&&M.y<=m&&M!==i&&M!==a&&sr(o,f,c,l,h,u,M.x,M.y)&&nt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function av(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!la(i,s)&&Qu(i,n,n.next,s)&&Kr(i,s)&&Kr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Jr(n),Jr(n.next),n=r=s),n=n.next}while(n!==r);return Ni(n)}function ov(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_v(a,o)){let c=eh(a,o);a=Ni(a,a.next),c=Ni(c,c.next),Zr(a,e,t,n,i,s,0),Zr(c,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function lv(r,e,t,n){const i=[];let s,a,o,c,h;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:r.length,h=ju(r,o,c,n,!1),h===h.next&&(h.steiner=!0),i.push(mv(h));for(i.sort(cv),s=0;s<i.length;s++)t=uv(i[s],t);return t}function cv(r,e){return r.x-e.x}function uv(r,e){const t=hv(r,e);if(!t)return e;const n=eh(t,r);return Ni(n,n.next),Ni(t,t.next)}function hv(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=s&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,h=i.y;let f=1/0,l;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&sr(a<h?s:n,a,c,h,a<h?n:s,a,t.x,t.y)&&(l=Math.abs(a-t.y)/(s-t.x),Kr(t,r)&&(l<f||l===f&&(t.x>i.x||t.x===i.x&&fv(i,t)))&&(i=t,f=l)),t=t.next;while(t!==o);return i}function fv(r,e){return nt(r.prev,r,e.prev)<0&&nt(e.next,r,r.next)<0}function dv(r,e,t,n){let i=r;do i.z===0&&(i.z=xo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,pv(i)}function pv(r){let e,t,n,i,s,a,o,c,h=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<h&&(o++,n=n.nextZ,!!n);e++);for(c=h;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(a>1);return r}function xo(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function mv(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function sr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function _v(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!gv(r,e)&&(Kr(r,e)&&Kr(e,r)&&vv(r,e)&&(nt(r.prev,r,e.prev)||nt(r,e.prev,e))||la(r,e)&&nt(r.prev,r,r.next)>0&&nt(e.prev,e,e.next)>0)}function nt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function la(r,e){return r.x===e.x&&r.y===e.y}function Qu(r,e,t,n){const i=Fs(nt(r,e,t)),s=Fs(nt(r,e,n)),a=Fs(nt(t,n,r)),o=Fs(nt(t,n,e));return!!(i!==s&&a!==o||i===0&&Os(r,t,e)||s===0&&Os(r,n,e)||a===0&&Os(t,r,n)||o===0&&Os(t,e,n))}function Os(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Fs(r){return r>0?1:r<0?-1:0}function gv(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Qu(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Kr(r,e){return nt(r.prev,r,r.next)<0?nt(r,e,r.next)>=0&&nt(r,r.prev,e)>=0:nt(r,e,r.prev)<0||nt(r,r.next,e)<0}function vv(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function eh(r,e){const t=new yo(r.i,r.x,r.y),n=new yo(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Hc(r,e,t,n){const i=new yo(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Jr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function yo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xv(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class kr{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return kr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Gc(e),Vc(n,e);let a=e.length;t.forEach(Gc);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Vc(n,t[c]);const o=iv.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Gc(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Vc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class qo extends Vn{constructor(e=new $u([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(o,c,f),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new en(i,3)),this.setAttribute("normal",new en(s,3)),this.setAttribute("uv",new en(a,2));function h(f){const l=i.length/3,u=f.extractPoints(t);let d=u.shape;const _=u.holes;kr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const x=_[m];kr.isClockWise(x)===!0&&(_[m]=x.reverse())}const g=kr.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const x=_[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){const x=d[m];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=g.length;m<p;m++){const x=g[m],v=x[0]+l,M=x[1]+l,R=x[2]+l;n.push(v,M,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return yv(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new qo(n,e.curveSegments)}}function yv(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class ca extends Vn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const f=[],l=new L,u=new L,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const w=R/t;l.x=-e*Math.cos(i+w*s)*Math.sin(a+v*o),l.y=e*Math.cos(a+v*o),l.z=e*Math.sin(i+w*s)*Math.sin(a+v*o),_.push(l.x,l.y,l.z),u.copy(l).normalize(),g.push(u.x,u.y,u.z),m.push(w+M,1-v),x.push(h++)}f.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=f[p][x+1],M=f[p][x],R=f[p+1][x],w=f[p+1][x+1];(p!==0||a>0)&&d.push(v,M,w),(p!==n-1||c<Math.PI)&&d.push(M,R,w)}this.setIndex(d),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ua extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Wc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Mv{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,l){return h.push(f,l),this},this.removeHandler=function(f){const l=h.indexOf(f);return l!==-1&&h.splice(l,2),this},this.getHandler=function(f){for(let l=0,u=h.length;l<u;l+=2){const d=h[l],_=h[l+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null}}}const Sv=new Mv;class Yo{constructor(e){this.manager=e!==void 0?e:Sv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ev extends Yo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Wc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Yr("img");function c(){f(),Wc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(l){f(),i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Tv extends Yo{constructor(e){super(e)}load(e,t,n,i){const s=new Bt,a=new Ev(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class th extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $a=new ct,Xc=new L,qc=new L;class Av{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xc),qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qc),t.updateMatrixWorld(),$a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yc=new ct,Pr=new L,ja=new L;class bv extends Av{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pr),ja.copy(n.position),ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ja),n.updateMatrixWorld(),i.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc)}}class nh extends th{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wv extends th{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);function Fn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ih(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gr={duration:.5,overwrite:!1,delay:0},Zo,Et,je,bn=1e8,Rt=1/bn,Mo=Math.PI*2,Rv=Mo/4,Cv=0,rh=Math.sqrt,Pv=Math.cos,Lv=Math.sin,yt=function(e){return typeof e=="string"},at=function(e){return typeof e=="function"},Hn=function(e){return typeof e=="number"},Ko=function(e){return typeof e>"u"},Rn=function(e){return typeof e=="object"},kt=function(e){return e!==!1},Jo=function(){return typeof window<"u"},Bs=function(e){return at(e)||yt(e)},sh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ct=Array.isArray,So=/(?:-?\.?\d|\.)+/gi,ah=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Qa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,oh=/[+-]=-?[.\d]+/,lh=/[^,'"\[\]\s]+/gi,Dv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tt,yn,Eo,$o,nn={},Ks={},ch,uh=function(e){return(Ks=vr(e,nn))&&Wt},jo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$r=function(e,t){return!t&&console.warn(e)},hh=function(e,t){return e&&(nn[e]=t)&&Ks&&(Ks[e]=t)||nn},jr=function(){return 0},Iv={suppressEvents:!0,isStart:!0,kill:!1},ks={suppressEvents:!0,kill:!1},Uv={suppressEvents:!0},Qo={},ii=[],To={},fh,Zt={},eo={},Zc=30,Hs=[],el="",tl=function(e){var t=e[0],n,i;if(Rn(t)||at(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Hs.length;i--&&!Hs[i].targetTest(t););n=Hs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Oh(e[i],n)))||e.splice(i,1);return e},wi=function(e){return e._gsap||tl(un(e))[0]._gsap},dh=function(e,t,n){return(n=e[t])&&at(n)?e[t]():Ko(n)&&e.getAttribute&&e.getAttribute(t)||n},Ht=function(e,t){return(e=e.split(",")).forEach(t)||e},lt=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},ur=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Nv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Js=function(){var e=ii.length,t=ii.slice(0),n,i;for(To={},ii.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ph=function(e,t,n,i){ii.length&&!Et&&Js(),e.render(t,n,Et&&t<0&&(e._initted||e._startAt)),ii.length&&!Et&&Js()},mh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lh).length<2?t:yt(e)?e.trim():e},_h=function(e){return e},rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ov=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},vr=function(e,t){for(var n in t)e[n]=t[n];return e},Kc=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Rn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},$s=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Hr=function(e){var t=e.parent||tt,n=e.keyframes?Ov(Ct(e.keyframes)):rn;if(kt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Fv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},gh=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ha=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ai=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ri=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Bv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ao=function(e,t,n,i){return e._startAt&&(Et?e._startAt.revert(ks):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},zv=function r(e){return!e||e._ts&&r(e.parent)},Jc=function(e){return e._repeat?xr(e._tTime,e=e.duration()+e._rDelay)*e:0},xr=function(e,t){var n=Math.floor(e=ft(e/t));return e&&n===e?n-1:n},js=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fa=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},da=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fa(e),n._dirty||Ri(n,e)),e},vh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=js(e.rawTime(),t),(!t._dur||ls(0,t.totalDuration(),n)-t._tTime>Rt)&&t.render(n,!0)),Ri(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Sn=function(e,t,n,i){return t.parent&&ai(t),t._start=ft((Hn(n)?n:n||e!==tt?on(e,n,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),gh(e,t,"_first","_last",e._sort?"_start":0),bo(t)||(e._recent=t),i||vh(e,t),e._ts<0&&da(e,e._tTime),e},xh=function(e,t){return(nn.ScrollTrigger||jo("scrollTrigger",t))&&nn.ScrollTrigger.create(t,e)},yh=function(e,t,n,i,s){if(il(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Et&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&fh!==$t.frame)return ii.push(e),e._lazy=[s,i],1},kv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},bo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Hv=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&kv(e)&&!(!e._initted&&bo(e))||(e._ts<0||e._dp._ts<0)&&!bo(e))?0:1,o=e._rDelay,c=0,h,f,l;if(o&&e._repeat&&(c=ls(0,e._tDur,t),f=xr(c,o),e._yoyo&&f&1&&(a=1-a),f!==xr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Et||i||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&yh(e,t,i,n,c))return;for(l=e._zTime,e._zTime=t||(n?Rt:0),n||(n=t&&!l),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,h=e._pt;h;)h.r(a,h.d),h=h._next;t<0&&Ao(e,t,n,!0),e._onUpdate&&!n&&Qt(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Qt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ai(e,1),!n&&!Et&&(Qt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Gv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},yr=function(e,t,n,i){var s=e._repeat,a=ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ft(a*(s+1)+e._rDelay*s):a,o>0&&!i&&da(e,e._tTime=e._tDur*o),e.parent&&fa(e),n||Ri(e.parent,e),e},$c=function(e){return e instanceof Ot?Ri(e):yr(e,e._dur)},Vv={_start:0,endTime:jr,totalDuration:jr},on=function r(e,t,n){var i=e.labels,s=e._recent||Vv,a=e.duration()>=bn?s.endTime(!1):e._dur,o,c,h;return yt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),h=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),h&&n&&(c=c/100*(Ct(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Gr=function(e,t,n){var i=Hn(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=kt(c.vars.inherit)&&c.parent;a.immediateRender=kt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new ht(t[0],a,t[s+1])},li=function(e,t){return e||e===0?t(e):t},ls=function(e,t,n){return n<e?e:n>t?t:n},wt=function(e,t){return!yt(e)||!(t=Dv.exec(e))?"":t[1]},Wv=function(e,t,n){return li(n,function(i){return ls(e,t,i)})},wo=[].slice,Mh=function(e,t){return e&&Rn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Rn(e[0]))&&!e.nodeType&&e!==yn},Xv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return yt(i)&&!t||Mh(i,1)?(s=n).push.apply(s,un(i)):n.push(i)})||n},un=function(e,t,n){return je&&!t&&je.selector?je.selector(e):yt(e)&&!n&&(Eo||!Mr())?wo.call((t||$o).querySelectorAll(e),0):Ct(e)?Xv(e,n):Mh(e)?wo.call(e,0):e?[e]:[]},Ro=function(e){return e=un(e)[0]||$r("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return un(t,n.querySelectorAll?n:n===e?$r("Invalid scope")||$o.createElement("div"):e)}},Sh=function(e){return e.sort(function(){return .5-Math.random()})},Eh=function(e){if(at(e))return e;var t=Rn(e)?e:{each:e},n=Ci(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,h=t.axis,f=i,l=i;return yt(i)?f=l={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(f=i[0],l=i[1]),function(u,d,_){var g=(_||t).length,m=a[g],p,x,v,M,R,w,b,D,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,bn])[1],!y){for(b=-1e8;b<(b=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=a[g]=[],p=c?Math.min(y,g)*f-.5:i%y,x=y===bn?0:c?g*l/y-.5:i/y|0,b=0,D=bn,w=0;w<g;w++)v=w%y-p,M=x-(w/y|0),m[w]=R=h?Math.abs(h==="y"?M:v):rh(v*v+M*M),R>b&&(b=R),R<D&&(D=R);i==="random"&&Sh(m),m.max=b-D,m.min=D,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:h?h==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=wt(t.amount||t.each)||0,n=n&&g<0?Ih(n):n}return g=(m[u]-m.min)/m.max||0,ft(m.b+(n?n(g):g)*m.v)+m.u}},Co=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Hn(n)?0:wt(n))}},Th=function(e,t){var n=Ct(e),i,s;return!n&&Rn(e)&&(i=n=e.radius||bn,e.values?(e=un(e.values),(s=!Hn(e[0]))&&(i*=i)):e=Co(e.increment)),li(t,n?at(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),h=bn,f=0,l=e.length,u,d;l--;)s?(u=e[l].x-o,d=e[l].y-c,u=u*u+d*d):u=Math.abs(e[l]-o),u<h&&(h=u,f=l);return f=!i||h<=i?e[f]:a,s||f===a||Hn(a)?f:f+wt(a)}:Co(e))},Ah=function(e,t,n,i){return li(Ct(e)?!t:n===!0?!!(n=0):!i,function(){return Ct(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Yv=function(e,t){return function(n){return e(parseFloat(n))+(t||wt(n))}},Zv=function(e,t,n){return wh(e,t,0,1,n)},bh=function(e,t,n){return li(n,function(i){return e[~~t(i)]})},Kv=function r(e,t,n){var i=t-e;return Ct(e)?bh(e,r(0,e.length),t):li(n,function(s){return(i+(s-e)%i)%i+e})},Jv=function r(e,t,n){var i=t-e,s=i*2;return Ct(e)?bh(e,r(0,e.length-1),t):li(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Qr=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?lh:So),n+=e.substr(t,i-t)+Ah(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},wh=function(e,t,n,i,s){var a=t-e,o=i-n;return li(s,function(c){return n+((c-e)/a*o||0)})},$v=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=yt(e),o={},c,h,f,l,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ct(e)&&!Ct(t)){for(f=[],l=e.length,u=l-2,h=1;h<l;h++)f.push(r(e[h-1],e[h]));l--,s=function(_){_*=l;var g=Math.min(u,~~_);return f[g](_-g)},n=t}else i||(e=vr(Ct(e)?[]:{},e));if(!f){for(c in t)nl.call(o,e,c,"get",t[c]);s=function(_){return al(_,o)||(a?e.p:e)}}}return li(n,s)},jc=function(e,t,n){var i=e.labels,s=bn,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},Qt=function(e,t,n){var i=e.vars,s=i[t],a=je,o=e._ctx,c,h,f;if(s)return c=i[t+"Params"],h=i.callbackScope||e,n&&ii.length&&Js(),o&&(je=o),f=c?s.apply(h,c):s.call(h),je=a,f},Ir=function(e){return ai(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Et),e.progress()<1&&Qt(e,"onInterrupt"),e},or,Rh=[],Ch=function(e){if(e)if(e=!e.name&&e.default||e,Jo()||e.headless){var t=e.name,n=at(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:jr,render:al,add:nl,kill:dx,modifier:fx,rawVars:0},a={targetTest:0,get:0,getSetter:sl,aliases:{},register:0};if(Mr(),e!==i){if(Zt[t])return;rn(i,rn($s(e,s),a)),vr(i.prototype,vr(s,$s(e,a))),Zt[i.prop=t]=i,e.targetTest&&(Hs.push(i),Qo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hh(t,i),e.register&&e.register(Wt,i,Gt)}else Rh.push(e)},qe=255,Ur={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},to=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*qe+.5|0},Ph=function(e,t,n){var i=e?Hn(e)?[e>>16,e>>8&qe,e&qe]:0:Ur.black,s,a,o,c,h,f,l,u,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ur[e])i=Ur[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&qe,i&qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&qe,e&qe]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(So),!t)c=+i[0]%360/360,h=+i[1]/100,f=+i[2]/100,a=f<=.5?f*(h+1):f+h-f*h,s=f*2-a,i.length>3&&(i[3]*=1),i[0]=to(c+1/3,s,a),i[1]=to(c,s,a),i[2]=to(c-1/3,s,a);else if(~e.indexOf("="))return i=e.match(ah),n&&i.length<4&&(i[3]=1),i}else i=e.match(So)||Ur.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/qe,a=i[1]/qe,o=i[2]/qe,l=Math.max(s,a,o),u=Math.min(s,a,o),f=(l+u)/2,l===u?c=h=0:(d=l-u,h=f>.5?d/(2-l-u):d/(l+u),c=l===s?(a-o)/d+(a<o?6:0):l===a?(o-s)/d+2:(s-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(h*100+.5),i[2]=~~(f*100+.5)),n&&i.length<4&&(i[3]=1),i},Lh=function(e){var t=[],n=[],i=-1;return e.split(ri).forEach(function(s){var a=s.match(ar)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Qc=function(e,t,n){var i="",s=(e+i).match(ri),a=t?"hsla(":"rgba(",o=0,c,h,f,l;if(!s)return e;if(s=s.map(function(u){return(u=Ph(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(f=Lh(e),c=n.c,c.join(i)!==f.c.join(i)))for(h=e.replace(ri,"1").split(ar),l=h.length-1;o<l;o++)i+=h[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(f.length?f:s.length?s:n).shift());if(!h)for(h=e.split(ri),l=h.length-1;o<l;o++)i+=h[o]+s[o];return i+h[l]},ri=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ur)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),jv=/hsl[a]?\(/,Dh=function(e){var t=e.join(" "),n;if(ri.lastIndex=0,ri.test(t))return n=jv.test(t),e[1]=Qc(e[1],n),e[0]=Qc(e[0],n,Lh(e[1])),!0},es,$t=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,h,f,l,u,d,_=function g(m){var p=r()-i,x=m===!0,v,M,R,w;if((p>e||p<0)&&(n+=p-t),i+=p,R=i-n,v=R-a,(v>0||x)&&(w=++l.frame,u=R-l.time*1e3,l.time=R=R/1e3,a+=v+(v>=s?4:s-v),M=1),x||(c=h(g)),M)for(d=0;d<o.length;d++)o[d](R,u,w,m)};return l={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){ch&&(!Eo&&Jo()&&(yn=Eo=window,$o=yn.document||{},nn.gsap=Wt,(yn.gsapVersions||(yn.gsapVersions=[])).push(Wt.version),uh(Ks||yn.GreenSockGlobals||!yn.gsap&&yn||{}),Rh.forEach(Ch)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&l.sleep(),h=f||function(m){return setTimeout(m,a-l.time*1e3+1|0)},es=1,_(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(c),es=0,h=jr},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=l.time*1e3+s},add:function(m,p,x){var v=p?function(M,R,w,b){m(M,R,w,b),l.remove(v)}:m;return l.remove(m),o[x?"unshift":"push"](v),Mr(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},l}(),Mr=function(){return!es&&$t.wake()},ke={},Qv=/^[\d.\-M][\d.\-,\s]/,ex=/["']/g,tx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,h;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,h=c.substr(0,o),t[i]=isNaN(h)?h.replace(ex,"").trim():+h,i=c.substr(o+1).trim();return t},nx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ix=function(e){var t=(e+"").split("("),n=ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[tx(t[1])]:nx(e).split(",").map(mh)):ke._CE&&Qv.test(e)?ke._CE("",e):n},Ih=function(e){return function(t){return 1-e(1-t)}},Uh=function r(e,t){for(var n=e._first,i;n;)n instanceof Ot?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ci=function(e,t){return e&&(at(e)?e:ke[e]||ix(e))||t},Bi=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Ht(e,function(o){ke[o]=nn[o]=s,ke[a=o.toLowerCase()]=n;for(var c in s)ke[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ke[o+"."+c]=s[c]}),s},Nh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},no=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Mo*(Math.asin(1/i)||0),o=function(f){return f===1?1:i*Math.pow(2,-10*f)*Lv((f-a)*s)+1},c=e==="out"?o:e==="in"?function(h){return 1-o(1-h)}:Nh(o);return s=Mo/s,c.config=function(h,f){return r(e,h,f)},c},io=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Nh(n);return i.config=function(s){return r(e,s)},i};Ht("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Bi(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;Bi("Elastic",no("in"),no("out"),no());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Bi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Bi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Bi("Circ",function(r){return-(rh(1-r*r)-1)});Bi("Sine",function(r){return r===1?1:-Pv(r*Rv)+1});Bi("Back",io("in"),io("out"),io());ke.SteppedEase=ke.steps=nn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Rt;return function(o){return((i*ls(0,a,o)|0)+s)*n}}};gr.ease=ke["quad.out"];Ht("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return el+=r+","+r+"Params,"});var Oh=function(e,t){this.id=Cv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:dh,this.set=t?t.getSetter:sl},ts=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,yr(this,+t.duration,1,1),this.data=t.data,je&&(this._ctx=je,je.data.push(this)),es||$t.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,yr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Mr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(da(this,n),!s._dp||s.parent||vh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Sn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Rt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ph(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?xr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?js(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(ls(-Math.abs(this._delay),this._tDur,s),i!==!1),fa(this),Bv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Mr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Sn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?js(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Uv);var i=Et;return Et=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Et=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,$c(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,$c(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(on(this,n),kt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kt(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Rt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=at(n)?n:_h,o=function(){var h=i.then;i.then=null,at(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),s(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ir(this)},r}();rn(ts.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Ot=function(r){ih(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kt(n.sortChildren),tt&&Sn(n.parent||tt,Fn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&xh(Fn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Gr(0,arguments,this),this},t.from=function(i,s,a){return Gr(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Gr(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Hr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ht(i,s,on(this,a),1),this},t.call=function(i,s,a){return Sn(this,ht.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,c,h,f){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=h,a.onCompleteParams=f,a.parent=this,new ht(i,a,on(this,c)),this},t.staggerFrom=function(i,s,a,o,c,h,f){return a.runBackwards=1,Hr(a).immediateRender=kt(a.immediateRender),this.staggerTo(i,s,a,o,c,h,f)},t.staggerFromTo=function(i,s,a,o,c,h,f,l){return o.startAt=a,Hr(o).immediateRender=kt(o.immediateRender),this.staggerTo(i,s,o,c,h,f,l)},t.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,h=this._dur,f=i<=0?0:ft(i),l=this._zTime<0!=i<0&&(this._initted||!h),u,d,_,g,m,p,x,v,M,R,w,b;if(this!==tt&&f>c&&i>=0&&(f=c),f!==this._tTime||a||l){if(o!==this._time&&h&&(f+=this._time-o,i+=this._time-o),u=f,M=this._start,v=this._ts,p=!v,l&&(h||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=h+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(u=ft(f%m),f===c?(g=this._repeat,u=h):(R=ft(f/m),g=~~R,g&&g===R&&(u=h,g--),u>h&&(u=h)),R=xr(this._tTime,m),!o&&this._tTime&&R!==g&&this._tTime-R*m-this._dur<=0&&(R=g),w&&g&1&&(u=h-u,b=1),g!==R&&!this._lock){var D=w&&R&1,y=D===(w&&g&1);if(g<R&&(D=!D),o=D?0:f%h?h:f,this._lock=1,this.render(o||(b?0:ft(g*m)),s,!h)._lock=0,this._tTime=f,!s&&this.parent&&Qt(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,c=this._tDur,y&&(this._lock=2,o=D?h:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Uh(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Gv(this,ft(o),ft(u)),x&&(f-=u-(u=x._start))),this._tTime=f,this._time=u,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&!g&&(Qt(this,"onStart"),this._tTime!==f))return this;if(u>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||u>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,a),u!==this._time||!this._ts&&!p){x=0,_&&(f+=this._zTime=-1e-8);break}}d=_}else{d=this._last;for(var T=i<0?i:u;d;){if(_=d._prev,(d._act||T<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,a||Et&&(d._initted||d._startAt)),u!==this._time||!this._ts&&!p){x=0,_&&(f+=this._zTime=T?-1e-8:Rt);break}}d=_}}if(x&&!s&&(this.pause(),x.render(u>=o?0:-1e-8)._zTime=u>=o?1:-1,this._ts))return this._start=M,fa(this),this.render(i,s,a);this._onUpdate&&!s&&Qt(this,"onUpdate",!0),(f===c&&this._tTime>=this.totalDuration()||!f&&o)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!h)&&(f===c&&this._ts>0||!f&&this._ts<0)&&ai(this,1),!s&&!(i<0&&!o)&&(f||o||!c)&&(Qt(this,f===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Hn(s)||(s=on(this,s,i)),!(i instanceof ts)){if(Ct(i))return i.forEach(function(o){return a.add(o,s)}),this;if(yt(i))return this.addLabel(i,s);if(at(i))i=ht.delayedCall(0,i);else return this}return this!==i?Sn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var c=[],h=this._first;h;)h._start>=o&&(h instanceof ht?s&&c.push(h):(a&&c.push(h),i&&c.push.apply(c,h.getChildren(!0,s,a)))),h=h._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return yt(i)?this.removeLabel(i):at(i)?this.killTweensOf(i):(i.parent===this&&ha(this,i),i===this._recent&&(this._recent=this._last),Ri(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft($t.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=on(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=ht.delayedCall(0,s||jr,a);return o.data="isPause",this._hasPause=1,Sn(this,o,on(this,i))},t.removePause=function(i){var s=this._first;for(i=on(this,i);s;)s._start===i&&s.data==="isPause"&&ai(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)$n!==o[c]&&o[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=un(i),c=this._first,h=Hn(s),f;c;)c instanceof ht?Nv(c._targets,o)&&(h?(!$n||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(f=c.getTweensOf(o,s)).length&&a.push.apply(a,f),c=c._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=on(a,i),c=s,h=c.startAt,f=c.onStart,l=c.onStartParams,u=c.immediateRender,d,_=ht.to(a,rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(h&&"time"in h?h.time:a._time))/a.timeScale())||Rt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(h&&"time"in h?h.time:a._time))/a.timeScale());_._dur!==m&&yr(_,m,0,1).render(_._time,!0,!0),d=1}f&&f.apply(_,l||[])}},s));return u?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,rn({startAt:{time:on(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),jc(this,on(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),jc(this,on(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,h;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(h in c)c[h]>=a&&(c[h]+=i);return Ri(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ri(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,c=bn,h,f,l;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(l=a.parent;o;)h=o._prev,o._dirty&&o.totalDuration(),f=o._start,f>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Sn(a,o,f-o._delay,1)._lock=0):c=f,f<0&&o._ts&&(s-=f,(!l&&!a._dp||l&&l.smoothChildTiming)&&(a._start+=f/a._ts,a._time-=f,a._tTime-=f),a.shiftChildren(-f,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=h;yr(a,a===tt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(tt._ts&&(ph(tt,js(i,tt)),fh=$t.frame),$t.frame>=Zc){Zc+=tn.autoSleep||120;var s=tt._first;if((!s||!s._ts)&&tn.autoSleep&&$t._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$t.sleep()}}},e}(ts);rn(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});var rx=function(e,t,n,i,s,a,o){var c=new Gt(this._pt,e,t,0,1,Gh,null,s),h=0,f=0,l,u,d,_,g,m,p,x;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Qr(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),u=n.match(Qa)||[];l=Qa.exec(i);)_=l[0],g=i.substring(h,l.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==u[f++]&&(m=parseFloat(u[f-1])||0,c._pt={_next:c._pt,p:g||f===1?g:",",s:m,c:_.charAt(1)==="="?ur(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},h=Qa.lastIndex);return c.c=h<i.length?i.substring(h,i.length):"",c.fp=o,(oh.test(i)||p)&&(c.e=0),this._pt=c,c},nl=function(e,t,n,i,s,a,o,c,h,f){at(i)&&(i=i(s||0,e,a));var l=e[t],u=n!=="get"?n:at(l)?h?e[t.indexOf("set")||!at(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():l,d=at(l)?h?cx:kh:rl,_;if(yt(i)&&(~i.indexOf("random(")&&(i=Qr(i)),i.charAt(1)==="="&&(_=ur(u,i)+(wt(u)||0),(_||_===0)&&(i=_))),!f||u!==i||Po)return!isNaN(u*i)&&i!==""?(_=new Gt(this._pt,e,t,+u||0,i-(u||0),typeof l=="boolean"?hx:Hh,0,d),h&&(_.fp=h),o&&_.modifier(o,this,e),this._pt=_):(!l&&!(t in e)&&jo(t,i),rx.call(this,e,t,u,i,d,c||tn.stringFilter,h))},sx=function(e,t,n,i,s){if(at(e)&&(e=Vr(e,s,t,n,i)),!Rn(e)||e.style&&e.nodeType||Ct(e)||sh(e))return yt(e)?Vr(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Vr(e[o],s,t,n,i);return a},Fh=function(e,t,n,i,s,a){var o,c,h,f;if(Zt[e]&&(o=new Zt[e]).init(s,o.rawVars?t[e]:sx(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new Gt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==or))for(h=n._ptLookup[n._targets.indexOf(s)],f=o._props.length;f--;)h[o._props[f]]=c;return o},$n,Po,il=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,h=i.onUpdate,f=i.runBackwards,l=i.yoyoEase,u=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!Zo,M=e.timeline,R,w,b,D,y,T,N,G,q,P,U,k,W;if(M&&(!u||!s)&&(s="none"),e._ease=Ci(s,gr.ease),e._yEase=l?Ih(Ci(l===!0?s:l,gr.ease)):0,l&&e._yoyo&&!e._repeat&&(l=e._yEase,e._yEase=e._ease,e._ease=l),e._from=!M&&!!i.runBackwards,!M||u&&!i.stagger){if(G=m[0]?wi(m[0]).harness:0,k=G&&i[G.prop],R=$s(i,Qo),g&&(g._zTime<0&&g.progress(1),t<0&&f&&o&&!d?g.render(-1,!0):g.revert(f&&_?ks:Iv),g._lazy=0),a){if(ai(e._startAt=ht.set(m,rn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&kt(c),startAt:null,delay:0,onUpdate:h&&function(){return Qt(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Et||!o&&!d)&&e._startAt.revert(ks),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&_&&!g){if(t&&(o=!1),b=rn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&kt(c),immediateRender:o,stagger:0,parent:p},R),k&&(b[G.prop]=k),ai(e._startAt=ht.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Et?e._startAt.revert(ks):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&kt(c)||c&&!_,w=0;w<m.length;w++){if(y=m[w],N=y._gsap||tl(m)[w]._gsap,e._ptLookup[w]=P={},To[N.id]&&ii.length&&Js(),U=x===m?w:x.indexOf(y),G&&(q=new G).init(y,k||R,e,U,x)!==!1&&(e._pt=D=new Gt(e._pt,y,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(X){P[X]=D}),q.priority&&(T=1)),!G||k)for(b in R)Zt[b]&&(q=Fh(b,R,e,U,y,x))?q.priority&&(T=1):P[b]=D=nl.call(e,y,b,"get",R[b],U,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(y,e._op[w]),v&&e._pt&&($n=e,tt.killTweensOf(y,P,e.globalTime(t)),W=!e.parent,$n=0),e._pt&&c&&(To[N.id]=1)}T&&Vh(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!W,u&&t<=0&&M.render(bn,!0,!0)},ax=function(e,t,n,i,s,a,o,c){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],f,l,u,d;if(!h)for(h=e._ptCache[t]=[],u=e._ptLookup,d=e._targets.length;d--;){if(f=u[d][t],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==t&&f.fp!==t;)f=f._next;if(!f)return Po=1,e.vars[t]="+=0",il(e,o),Po=0,c?$r(t+" not eligible for reset"):1;h.push(f)}for(d=h.length;d--;)l=h[d],f=l._pt||l,f.s=(i||i===0)&&!s?i:f.s+(i||0)+a*f.c,f.c=n-f.s,l.e&&(l.e=lt(n)+wt(l.e)),l.b&&(l.b=f.s+wt(l.b))},ox=function(e,t){var n=e[0]?wi(e[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return t;s=vr({},t);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},lx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Ct(t))o=n[e]||(n[e]=[]),t.forEach(function(c,h){return o.push({t:h/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Vr=function(e,t,n,i,s){return at(e)?e.call(t,n,i,s):yt(e)&&~e.indexOf("random(")?Qr(e):e},Bh=el+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",zh={};Ht(Bh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return zh[r]=1});var ht=function(r){ih(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Hr(i))||this;var c=o.vars,h=c.duration,f=c.delay,l=c.immediateRender,u=c.stagger,d=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,x=i.parent||tt,v=(Ct(n)||sh(n)?Hn(n[0]):"length"in i)?[n]:un(n),M,R,w,b,D,y,T,N;if(o._targets=v.length?tl(v):$r("GSAP target "+n+" not found. https://gsap.com",!tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||u||Bs(h)||Bs(f)){if(i=o.vars,M=o.timeline=new Ot({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:v}),M.kill(),M.parent=M._dp=Fn(o),M._start=0,u||Bs(h)||Bs(f)){if(b=v.length,T=u&&Eh(u),Rn(u))for(D in u)~Bh.indexOf(D)&&(N||(N={}),N[D]=u[D]);for(R=0;R<b;R++)w=$s(i,zh),w.stagger=0,p&&(w.yoyoEase=p),N&&vr(w,N),y=v[R],w.duration=+Vr(h,Fn(o),R,y,v),w.delay=(+Vr(f,Fn(o),R,y,v)||0)-o._delay,!u&&b===1&&w.delay&&(o._delay=f=w.delay,o._start+=f,w.delay=0),M.to(y,w,T?T(R,y,v):0),M._ease=ke.none;M.duration()?h=f=0:o.timeline=0}else if(_){Hr(rn(M.vars.defaults,{ease:"none"})),M._ease=Ci(_.ease||i.ease||"none");var G=0,q,P,U;if(Ct(_))_.forEach(function(k){return M.to(v,k,">")}),M.duration();else{w={};for(D in _)D==="ease"||D==="easeEach"||lx(D,_[D],w,_.easeEach);for(D in w)for(q=w[D].sort(function(k,W){return k.t-W.t}),G=0,R=0;R<q.length;R++)P=q[R],U={ease:P.e,duration:(P.t-(R?q[R-1].t:0))/100*h},U[D]=P.v,M.to(v,U,G),G+=U.duration;M.duration()<h&&M.to({},{duration:h-M.duration()})}}h||o.duration(h=M.duration())}else o.timeline=0;return d===!0&&!Zo&&($n=Fn(o),tt.killTweensOf(v),$n=0),Sn(x,Fn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(l||!h&&!_&&o._start===ft(x._time)&&kt(l)&&zv(Fn(o))&&x.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-f)||0)),m&&xh(Fn(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,c=this._tDur,h=this._dur,f=i<0,l=i>c-Rt&&!f?c:i<Rt?0:i,u,d,_,g,m,p,x,v,M;if(!h)Hv(this,i,s,a);else if(l!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f||this._lazy){if(u=l,v=this.timeline,this._repeat){if(g=h+this._rDelay,this._repeat<-1&&f)return this.totalTime(g*100+i,s,a);if(u=ft(l%g),l===c?(_=this._repeat,u=h):(m=ft(l/g),_=~~m,_&&_===m?(u=h,_--):u>h&&(u=h)),p=this._yoyo&&_&1,p&&(M=this._yEase,u=h-u),m=xr(this._tTime,g),u===o&&!a&&this._initted&&_===m)return this._tTime=l,this;_!==m&&(v&&this._yEase&&Uh(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(ft(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(yh(this,f?i:u,a,s,l))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(h!==this._dur)return this.render(i,s,a)}if(this._tTime=l,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(M||this._ease)(u/h),this._from&&(this.ratio=x=1-x),u&&!o&&!s&&!_&&(Qt(this,"onStart"),this._tTime!==l))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(f&&Ao(this,i,s,a),Qt(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Qt(this,"onRepeat"),(l===this._tDur||!l)&&this._tTime===l&&(f&&!this._onUpdate&&Ao(this,i,!0,!0),(i||!h)&&(l===this._tDur&&this._ts>0||!l&&this._ts<0)&&ai(this,1),!s&&!(f&&!o)&&(l||o||p)&&(Qt(this,l===c?"onComplete":"onReverseComplete",!0),this._prom&&!(l<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,c){es||$t.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||il(this,h),f=this._ease(h/this._dur),ax(this,i,s,a,o,f,h,c)?this.resetTo(i,s,a,o,1):(da(this,0),this.parent||gh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ir(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Et),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,$n&&$n.vars.overwrite!==!0)._first||Ir(this),this.parent&&a!==this.timeline.totalDuration()&&yr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?un(i):o,h=this._ptLookup,f=this._pt,l,u,d,_,g,m,p;if((!s||s==="all")&&Fv(o,c))return s==="all"&&(this._pt=0),Ir(this);for(l=this._op=this._op||[],s!=="all"&&(yt(s)&&(g={},Ht(s,function(x){return g[x]=1}),s=g),s=ox(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){u=h[p],s==="all"?(l[p]=s,_=u,d={}):(d=l[p]=l[p]||{},_=s);for(g in _)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ha(this,m,"_pt"),delete u[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&f&&Ir(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Gr(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Gr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return tt.killTweensOf(i,s,a)},e}(ts);rn(ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ht("staggerTo,staggerFrom,staggerFromTo",function(r){ht[r]=function(){var e=new Ot,t=wo.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var rl=function(e,t,n){return e[t]=n},kh=function(e,t,n){return e[t](n)},cx=function(e,t,n,i){return e[t](i.fp,n)},ux=function(e,t,n){return e.setAttribute(t,n)},sl=function(e,t){return at(e[t])?kh:Ko(e[t])&&e.setAttribute?ux:rl},Hh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},al=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},fx=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},dx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ha(this,t,"_pt"):t.dep||(n=1),t=i;return!n},px=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Vh=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Gt=function(){function r(t,n,i,s,a,o,c,h,f){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Hh,this.d=c||this,this.set=h||rl,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=px,this.m=n,this.mt=s,this.tween=i},r}();Ht(el+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Qo[r]=1});nn.TweenMax=nn.TweenLite=ht;nn.TimelineLite=nn.TimelineMax=Ot;tt=new Ot({sortChildren:!1,defaults:gr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tn.stringFilter=Dh;var Pi=[],Gs={},mx=[],eu=0,_x=0,ro=function(e){return(Gs[e]||mx).map(function(t){return t()})},Lo=function(){var e=Date.now(),t=[];e-eu>2&&(ro("matchMediaInit"),Pi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,h;for(o in i)a=yn.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,h=1);h&&(n.revert(),c&&t.push(n))}),ro("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),eu=e,ro("matchMedia"))},Wh=function(){function r(t,n){this.selector=n&&Ro(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_x++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){at(n)&&(s=i,i=n,n=at);var a=this,o=function(){var h=je,f=a.selector,l;return h&&h!==a&&h.data.push(a),s&&(a.selector=Ro(s)),je=a,l=i.apply(a,arguments),at(l)&&a._r.push(l),je=h,a.selector=f,a.isReverted=!1,l};return a.last=o,n===at?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=je;je=null,n(this),je=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,h;c--;)h=s.data[c],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(f){return o.splice(o.indexOf(f),1)}));for(o.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,l){return l.g-f.g||-1/0}).forEach(function(f){return f.t.revert(n)}),c=s.data.length;c--;)h=s.data[c],h instanceof Ot?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof ht)&&h.revert&&h.revert(n);s._r.forEach(function(f){return f(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Pi.length;a--;)Pi[a].id===this.id&&Pi.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),gx=function(){function r(t){this.contexts=[],this.scope=t,je&&je.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Rn(n)||(n={matches:n});var a=new Wh(0,s||this.scope),o=a.conditions={},c,h,f;je&&!a.selector&&(a.selector=je.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(h in n)h==="all"?f=1:(c=yn.matchMedia(n[h]),c&&(Pi.indexOf(a)<0&&Pi.push(a),(o[h]=c.matches)&&(f=1),c.addListener?c.addListener(Lo):c.addEventListener("change",Lo)));return f&&i(a,function(l){return a.add(null,l)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Qs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ch(i)})},timeline:function(e){return new Ot(e)},getTweensOf:function(e,t){return tt.getTweensOf(e,t)},getProperty:function(e,t,n,i){yt(e)&&(e=un(e)[0]);var s=wi(e||{}).get,a=n?_h:mh;return n==="native"&&(n=""),e&&(t?a((Zt[t]&&Zt[t].get||s)(e,t,n,i)):function(o,c,h){return a((Zt[o]&&Zt[o].get||s)(e,o,c,h))})},quickSetter:function(e,t,n){if(e=un(e),e.length>1){var i=e.map(function(f){return Wt.quickSetter(f,t,n)}),s=i.length;return function(f){for(var l=s;l--;)i[l](f)}}e=e[0]||{};var a=Zt[t],o=wi(e),c=o.harness&&(o.harness.aliases||{})[t]||t,h=a?function(f){var l=new a;or._pt=0,l.init(e,n?f+n:f,or,0,[e]),l.render(1,l),or._pt&&al(1,or)}:o.set(e,c);return a?h:function(f){return h(e,c,n?f+n:f,o,1)}},quickTo:function(e,t,n){var i,s=Wt.to(e,rn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,h,f){return s.resetTo(t,c,h,f)};return a.tween=s,a},isTweening:function(e){return tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ci(e.ease,gr.ease)),Kc(gr,e||{})},config:function(e){return Kc(tn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Zt[o]&&!nn[o]&&$r(t+" effect requires "+o+" plugin.")}),eo[t]=function(o,c,h){return n(un(o),rn(c||{},s),h)},a&&(Ot.prototype[t]=function(o,c,h){return this.add(eo[t](o,Rn(c)?c:(h=c)&&{},this),h)})},registerEase:function(e,t){ke[e]=Ci(t)},parseEase:function(e,t){return arguments.length?Ci(e,t):ke},getById:function(e){return tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ot(e),i,s;for(n.smoothChildTiming=kt(e.smoothChildTiming),tt.remove(n),n._dp=0,n._time=n._tTime=tt._time,i=tt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof ht&&i.vars.onComplete===i._targets[0]))&&Sn(n,i,i._start-i._delay),i=s;return Sn(tt,n,0),n},context:function(e,t){return e?new Wh(e,t):je},matchMedia:function(e){return new gx(e)},matchMediaRefresh:function(){return Pi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Lo()},addEventListener:function(e,t){var n=Gs[e]||(Gs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Gs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Kv,wrapYoyo:Jv,distribute:Eh,random:Ah,snap:Th,normalize:Zv,getUnit:wt,clamp:Wv,splitColor:Ph,toArray:un,selector:Ro,mapRange:wh,pipe:qv,unitize:Yv,interpolate:$v,shuffle:Sh},install:uh,effects:eo,ticker:$t,updateRoot:Ot.updateRoot,plugins:Zt,globalTimeline:tt,core:{PropTween:Gt,globals:hh,Tween:ht,Timeline:Ot,Animation:ts,getCache:wi,_removeLinkedListItem:ha,reverting:function(){return Et},context:function(e){return e&&je&&(je.data.push(e),e._ctx=je),je},suppressOverwrites:function(e){return Zo=e}}};Ht("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Qs[r]=ht[r]});$t.add(Ot.updateRoot);or=Qs.to({},{duration:0});var vx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},xx=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=vx(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},so=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,h;if(yt(s)&&(c={},Ht(s,function(f){return c[f]=1}),s=c),t){c={};for(h in s)c[h]=t(s[h]);s=c}xx(o,s)}}}},Wt=Qs.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Et?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},so("roundProps",Co),so("modifiers"),so("snap",Th))||Qs;ht.version=Ot.version=Wt.version="3.12.7";ch=1;Jo()&&Mr();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tu,jn,hr,ol,Ei,nu,ll,yx=function(){return typeof window<"u"},Gn={},yi=180/Math.PI,fr=Math.PI/180,tr=Math.atan2,iu=1e8,cl=/([A-Z])/g,Mx=/(left|right|width|margin|padding|x)/i,Sx=/[\s,\(]\S/,En={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Do=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ex=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Tx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ax=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Xh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},qh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bx=function(e,t,n){return e.style[t]=n},wx=function(e,t,n){return e.style.setProperty(t,n)},Rx=function(e,t,n){return e._gsap[t]=n},Cx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Px=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Lx=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},it="transform",Vt=it+"Origin",Dx=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Gn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=En[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Bn(i,o)}):this.tfm[e]=a.x?a[e]:Bn(i,e),e===Vt&&(this.tfm.zOrigin=a.zOrigin);else return En.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(it)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Vt,t,"")),e=it}(s||t)&&this.props.push(e,t,s[e])},Yh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ix=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ll(),(!s||!s.isStart)&&!n[it]&&(Yh(n),i.zOrigin&&n[Vt]&&(n[Vt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Zh=function(e,t){var n={target:e,props:[],revert:Ix,save:Dx};return e._gsap||Wt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Kh,Io=function(e,t){var n=jn.createElementNS?jn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):jn.createElement(e);return n&&n.style?n:jn.createElement(e)},wn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(cl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Sr(t)||t,1)||""},ru="O,Moz,ms,Ms,Webkit".split(","),Sr=function(e,t,n){var i=t||Ei,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ru[a]+e in s););return a<0?null:(a===3?"ms":a>=0?ru[a]:"")+e},Uo=function(){yx()&&window.document&&(tu=window,jn=tu.document,hr=jn.documentElement,Ei=Io("div")||{style:{}},Io("div"),it=Sr(it),Vt=it+"Origin",Ei.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kh=!!Sr("perspective"),ll=Wt.core.reverting,ol=1)},su=function(e){var t=e.ownerSVGElement,n=Io("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),hr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),hr.removeChild(n),s},au=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Jh=function(e){var t,n;try{t=e.getBBox()}catch{t=su(e),n=1}return t&&(t.width||t.height)||n||(t=su(e)),t&&!t.width&&!t.x&&!t.y?{x:+au(e,["x","cx","x1"])||0,y:+au(e,["y","cy","y1"])||0,width:0,height:0}:t},$h=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jh(e))},Oi=function(e,t){if(t){var n=e.style,i;t in Gn&&t!==Vt&&(t=it),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(cl,"-$1").toLowerCase())):n.removeAttribute(t)}},Qn=function(e,t,n,i,s,a){var o=new Gt(e._pt,t,n,0,1,a?qh:Xh);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},ou={deg:1,rad:1,turn:1},Ux={grid:1,flex:1},oi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ei.style,c=Mx.test(t),h=e.tagName.toLowerCase()==="svg",f=(h?"client":"offset")+(c?"Width":"Height"),l=100,u=i==="px",d=i==="%",_,g,m,p;if(i===a||!s||ou[i]||ou[a])return s;if(a!=="px"&&!u&&(s=r(e,t,n,"px")),p=e.getCTM&&$h(e),(d||a==="%")&&(Gn[t]||~t.indexOf("adius")))return _=p?e.getBBox()[c?"width":"height"]:e[f],lt(d?s/_*l:s/100*_);if(o[c?"width":"height"]=l+(u?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!h?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===jn||!g.appendChild)&&(g=jn.body),m=g._gsap,m&&d&&m.width&&c&&m.time===$t.time&&!m.uncache)return lt(s/m.width*l);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=l+i,_=e[f],x?e.style[t]=x:Oi(e,t)}else(d||a==="%")&&!Ux[wn(g,"display")]&&(o.position=wn(e,"position")),g===e&&(o.position="static"),g.appendChild(Ei),_=Ei[f],g.removeChild(Ei),o.position="absolute";return c&&d&&(m=wi(g),m.time=$t.time,m.width=g[f]),lt(u?_*s/l:_&&s?l/_*s:0)},Bn=function(e,t,n,i){var s;return ol||Uo(),t in En&&t!=="transform"&&(t=En[t],~t.indexOf(",")&&(t=t.split(",")[0])),Gn[t]&&t!=="transform"?(s=is(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ta(wn(e,Vt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ea[t]&&ea[t](e,t,n)||wn(e,t)||dh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?oi(e,t,s,n)+n:s},Nx=function(e,t,n,i){if(!n||n==="none"){var s=Sr(t,e,1),a=s&&wn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=wn(e,"borderTopColor"))}var o=new Gt(this._pt,e.style,t,0,1,Gh),c=0,h=0,f,l,u,d,_,g,m,p,x,v,M,R;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=wn(e,t)||i,g?e.style[t]=g:Oi(e,t)),f=[n,i],Dh(f),n=f[0],i=f[1],u=n.match(ar)||[],R=i.match(ar)||[],R.length){for(;l=ar.exec(i);)m=l[0],x=i.substring(c,l.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=u[h++]||"")&&(d=parseFloat(g)||0,M=g.substr((d+"").length),m.charAt(1)==="="&&(m=ur(d,m)+M),p=parseFloat(m),v=m.substr((p+"").length),c=ar.lastIndex-v.length,v||(v=v||tn.units[t]||M,c===i.length&&(i+=v,o.e+=v)),M!==v&&(d=oi(e,t,g,v)||0),o._pt={_next:o._pt,p:x||h===1?x:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?qh:Xh;return oh.test(i)&&(o.e=0),this._pt=o,o},lu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ox=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=lu[n]||n,t[1]=lu[i]||i,t.join(" ")},Fx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,c,h;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),h=s.length;--h>-1;)o=s[h],Gn[o]&&(c=1,o=o==="transformOrigin"?Vt:it),Oi(n,o);c&&(Oi(n,it),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",is(n,1),a.uncache=1,Yh(i)))}},ea={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Gt(e._pt,t,n,0,0,Fx);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ns=[1,0,0,1,0,0],jh={},Qh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},cu=function(e){var t=wn(e,it);return Qh(t)?ns:t.substr(7).match(ah).map(lt)},ul=function(e,t){var n=e._gsap||wi(e),i=e.style,s=cu(e),a,o,c,h;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?ns:s):(s===ns&&!e.offsetParent&&e!==hr&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,o=e.nextElementSibling,hr.appendChild(e)),s=cu(e),c?i.display=c:Oi(e,"display"),h&&(o?a.insertBefore(e,o):a?a.appendChild(e):hr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},No=function(e,t,n,i,s,a){var o=e._gsap,c=s||ul(e,!0),h=o.xOrigin||0,f=o.yOrigin||0,l=o.xOffset||0,u=o.yOffset||0,d=c[0],_=c[1],g=c[2],m=c[3],p=c[4],x=c[5],v=t.split(" "),M=parseFloat(v[0])||0,R=parseFloat(v[1])||0,w,b,D,y;n?c!==ns&&(b=d*m-_*g)&&(D=M*(m/b)+R*(-g/b)+(g*x-m*p)/b,y=M*(-_/b)+R*(d/b)-(d*x-_*p)/b,M=D,R=y):(w=Jh(e),M=w.x+(~v[0].indexOf("%")?M/100*w.width:M),R=w.y+(~(v[1]||v[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&o.smooth?(p=M-h,x=R-f,o.xOffset=l+(p*d+x*g)-p,o.yOffset=u+(p*_+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=R,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Vt]="0px 0px",a&&(Qn(a,o,"xOrigin",h,M),Qn(a,o,"yOrigin",f,R),Qn(a,o,"xOffset",l,o.xOffset),Qn(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+R)},is=function(e,t){var n=e._gsap||new Oh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),h=wn(e,Vt)||"0",f,l,u,d,_,g,m,p,x,v,M,R,w,b,D,y,T,N,G,q,P,U,k,W,X,Y,K,ee,te,V,Z,re;return f=l=u=g=m=p=x=v=M=0,d=_=1,n.svg=!!(e.getCTM&&$h(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[it]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[it]!=="none"?c[it]:"")),i.scale=i.rotate=i.translate="none"),b=ul(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),h=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),No(e,W||h,!!W||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,w=n.yOrigin||0,b!==ns&&(N=b[0],G=b[1],q=b[2],P=b[3],f=U=b[4],l=k=b[5],b.length===6?(d=Math.sqrt(N*N+G*G),_=Math.sqrt(P*P+q*q),g=N||G?tr(G,N)*yi:0,x=q||P?tr(q,P)*yi+g:0,x&&(_*=Math.abs(Math.cos(x*fr))),n.svg&&(f-=R-(R*N+w*q),l-=w-(R*G+w*P))):(re=b[6],V=b[7],K=b[8],ee=b[9],te=b[10],Z=b[11],f=b[12],l=b[13],u=b[14],D=tr(re,te),m=D*yi,D&&(y=Math.cos(-D),T=Math.sin(-D),W=U*y+K*T,X=k*y+ee*T,Y=re*y+te*T,K=U*-T+K*y,ee=k*-T+ee*y,te=re*-T+te*y,Z=V*-T+Z*y,U=W,k=X,re=Y),D=tr(-q,te),p=D*yi,D&&(y=Math.cos(-D),T=Math.sin(-D),W=N*y-K*T,X=G*y-ee*T,Y=q*y-te*T,Z=P*T+Z*y,N=W,G=X,q=Y),D=tr(G,N),g=D*yi,D&&(y=Math.cos(D),T=Math.sin(D),W=N*y+G*T,X=U*y+k*T,G=G*y-N*T,k=k*y-U*T,N=W,U=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=lt(Math.sqrt(N*N+G*G+q*q)),_=lt(Math.sqrt(k*k+re*re)),D=tr(U,k),x=Math.abs(D)>2e-4?D*yi:0,M=Z?1/(Z<0?-Z:Z):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Qh(wn(e,it)),W&&e.setAttribute("transform",W))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=l-((n.yPercent=l&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-l)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=lt(d),n.scaleY=lt(_),n.rotation=lt(g)+o,n.rotationX=lt(m)+o,n.rotationY=lt(p)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Vt]=ta(h)),n.xOffset=n.yOffset=0,n.force3D=tn.force3D,n.renderTransform=n.svg?zx:Kh?ef:Bx,n.uncache=0,n},ta=function(e){return(e=e.split(" "))[0]+" "+e[1]},ao=function(e,t,n){var i=wt(t);return lt(parseFloat(t)+parseFloat(oi(e,"x",n+"px",i)))+i},Bx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ef(e,t)},_i="0deg",Lr="0px",gi=") ",ef=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,h=n.rotation,f=n.rotationY,l=n.rotationX,u=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,M="",R=p==="auto"&&e&&e!==1||p===!0;if(v&&(l!==_i||f!==_i)){var w=parseFloat(f)*fr,b=Math.sin(w),D=Math.cos(w),y;w=parseFloat(l)*fr,y=Math.cos(w),a=ao(x,a,b*y*-v),o=ao(x,o,-Math.sin(w)*-v),c=ao(x,c,D*y*-v+v)}m!==Lr&&(M+="perspective("+m+gi),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(R||a!==Lr||o!==Lr||c!==Lr)&&(M+=c!==Lr||R?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+gi),h!==_i&&(M+="rotate("+h+gi),f!==_i&&(M+="rotateY("+f+gi),l!==_i&&(M+="rotateX("+l+gi),(u!==_i||d!==_i)&&(M+="skew("+u+", "+d+gi),(_!==1||g!==1)&&(M+="scale("+_+", "+g+gi),x.style[it]=M||"translate(0, 0)"},zx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,h=n.skewX,f=n.skewY,l=n.scaleX,u=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(a),M=parseFloat(o),R,w,b,D,y;c=parseFloat(c),h=parseFloat(h),f=parseFloat(f),f&&(f=parseFloat(f),h+=f,c+=f),c||h?(c*=fr,h*=fr,R=Math.cos(c)*l,w=Math.sin(c)*l,b=Math.sin(c-h)*-u,D=Math.cos(c-h)*u,h&&(f*=fr,y=Math.tan(h-f),y=Math.sqrt(1+y*y),b*=y,D*=y,f&&(y=Math.tan(f),y=Math.sqrt(1+y*y),R*=y,w*=y)),R=lt(R),w=lt(w),b=lt(b),D=lt(D)):(R=l,D=u,w=b=0),(v&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(v=oi(d,"x",a,"px"),M=oi(d,"y",o,"px")),(_||g||m||p)&&(v=lt(v+_-(_*R+g*b)+m),M=lt(M+g-(_*w+g*D)+p)),(i||s)&&(y=d.getBBox(),v=lt(v+i/100*y.width),M=lt(M+s/100*y.height)),y="matrix("+R+","+w+","+b+","+D+","+v+","+M+")",d.setAttribute("transform",y),x&&(d.style[it]=y)},kx=function(e,t,n,i,s){var a=360,o=yt(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?yi:1),h=c-i,f=i+h+"deg",l,u;return o&&(l=s.split("_")[1],l==="short"&&(h%=a,h!==h%(a/2)&&(h+=h<0?a:-360)),l==="cw"&&h<0?h=(h+a*iu)%a-~~(h/a)*a:l==="ccw"&&h>0&&(h=(h-a*iu)%a-~~(h/a)*a)),e._pt=u=new Gt(e._pt,t,n,i,h,Ex),u.e=f,u.u="deg",e._props.push(n),u},uu=function(e,t){for(var n in t)e[n]=t[n];return e},Hx=function(e,t,n){var i=uu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,h,f,l,u,d,_;i.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),a[it]=t,o=is(n,1),Oi(n,it),n.setAttribute("transform",h)):(h=getComputedStyle(n)[it],a[it]=t,o=is(n,1),a[it]=h);for(c in Gn)h=i[c],f=o[c],h!==f&&s.indexOf(c)<0&&(d=wt(h),_=wt(f),l=d!==_?oi(n,c,h,_):parseFloat(h),u=parseFloat(f),e._pt=new Gt(e._pt,o,c,l,u-l,Do),e._pt.u=_||0,e._props.push(c));uu(o,i)};Ht("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ea[e>1?"border"+r:r]=function(o,c,h,f,l){var u,d;if(arguments.length<4)return u=a.map(function(_){return Bn(o,_,h)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(f+"").split(" "),d={},a.forEach(function(_,g){return d[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(c,d,l)}});var tf={name:"css",register:Uo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,c=n.vars.startAt,h,f,l,u,d,_,g,m,p,x,v,M,R,w,b,D;ol||Uo(),this.styles=this.styles||Zh(e),D=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(f=t[g],!(Zt[g]&&Fh(g,t,n,i,e,s)))){if(d=typeof f,_=ea[g],d==="function"&&(f=f.call(n,i,e,s),d=typeof f),d==="string"&&~f.indexOf("random(")&&(f=Qr(f)),_)_(this,e,g,f,n)&&(b=1);else if(g.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(g)+"").trim(),f+="",ri.lastIndex=0,ri.test(h)||(m=wt(h),p=wt(f)),p?m!==p&&(h=oi(e,g,h,p)+p):m&&(f+=m),this.add(o,"setProperty",h,f,i,s,0,0,g),a.push(g),D.push(g,0,o[g]);else if(d!=="undefined"){if(c&&g in c?(h=typeof c[g]=="function"?c[g].call(n,i,e,s):c[g],yt(h)&&~h.indexOf("random(")&&(h=Qr(h)),wt(h+"")||h==="auto"||(h+=tn.units[g]||wt(Bn(e,g))||""),(h+"").charAt(1)==="="&&(h=Bn(e,g))):h=Bn(e,g),u=parseFloat(h),x=d==="string"&&f.charAt(1)==="="&&f.substr(0,2),x&&(f=f.substr(2)),l=parseFloat(f),g in En&&(g==="autoAlpha"&&(u===1&&Bn(e,"visibility")==="hidden"&&l&&(u=0),D.push("visibility",0,o.visibility),Qn(this,o,"visibility",u?"inherit":"hidden",l?"inherit":"hidden",!l)),g!=="scale"&&g!=="transform"&&(g=En[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Gn,v){if(this.styles.save(g),M||(R=e._gsap,R.renderTransform&&!t.parseTransform||is(e,t.parseTransform),w=t.smoothOrigin!==!1&&R.smooth,M=this._pt=new Gt(this._pt,o,it,0,1,R.renderTransform,R,0,-1),M.dep=1),g==="scale")this._pt=new Gt(this._pt,R,"scaleY",R.scaleY,(x?ur(R.scaleY,x+l):l)-R.scaleY||0,Do),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){D.push(Vt,0,o[Vt]),f=Ox(f),R.svg?No(e,f,0,w,0,this):(p=parseFloat(f.split(" ")[2])||0,p!==R.zOrigin&&Qn(this,R,"zOrigin",R.zOrigin,p),Qn(this,o,g,ta(h),ta(f)));continue}else if(g==="svgOrigin"){No(e,f,1,w,0,this);continue}else if(g in jh){kx(this,R,g,u,x?ur(u,x+f):f);continue}else if(g==="smoothOrigin"){Qn(this,R,"smooth",R.smooth,f);continue}else if(g==="force3D"){R[g]=f;continue}else if(g==="transform"){Hx(this,f,e);continue}}else g in o||(g=Sr(g)||g);if(v||(l||l===0)&&(u||u===0)&&!Sx.test(f)&&g in o)m=(h+"").substr((u+"").length),l||(l=0),p=wt(f)||(g in tn.units?tn.units[g]:m),m!==p&&(u=oi(e,g,h,p)),this._pt=new Gt(this._pt,v?R:o,g,u,(x?ur(u,x+l):l)-u,!v&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Ax:Do),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=h,this._pt.r=Tx);else if(g in o)Nx.call(this,e,g,h,x?x+f:f);else if(g in e)this.add(e,g,h||e[g],x?x+f:f,i,s);else if(g!=="parseTransform"){jo(g,f);continue}v||(g in o?D.push(g,0,o[g]):typeof e[g]=="function"?D.push(g,2,e[g]()):D.push(g,1,h||e[g])),a.push(g)}}b&&Vh(this)},render:function(e,t){if(t.tween._time||!ll())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Bn,aliases:En,getSetter:function(e,t,n){var i=En[t];return i&&i.indexOf(",")<0&&(t=i),t in Gn&&t!==Vt&&(e._gsap.x||Bn(e,"x"))?n&&nu===n?t==="scale"?Cx:Rx:(nu=n||{})&&(t==="scale"?Px:Lx):e.style&&!Ko(e.style[t])?bx:~t.indexOf("-")?wx:sl(e,t)},core:{_removeProperty:Oi,_getMatrix:ul}};Wt.utils.checkPrefix=Sr;Wt.core.getStyleSaver=Zh;(function(r,e,t,n){var i=Ht(r+","+e+","+t,function(s){Gn[s]=1});Ht(e,function(s){tn.units[s]="deg",jh[s]=1}),En[i[13]]=r+","+e,Ht(n,function(s){var a=s.split(":");En[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ht("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){tn.units[r]="px"});Wt.registerPlugin(tf);var Li=Wt.registerPlugin(tf)||Wt;Li.core.Tween;var Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cs={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(r){(function(){var e=function(){this.init()};e.prototype={init:function(){var l=this||t;return l._counter=1e3,l._html5AudioPool=[],l.html5PoolSize=10,l._codecs={},l._howls=[],l._muted=!1,l._volume=1,l._canPlayEvent="canplaythrough",l._navigator=typeof window<"u"&&window.navigator?window.navigator:null,l.masterGain=null,l.noAudio=!1,l.usingWebAudio=!0,l.autoSuspend=!0,l.ctx=null,l.autoUnlock=!0,l._setup(),l},volume:function(l){var u=this||t;if(l=parseFloat(l),u.ctx||f(),typeof l<"u"&&l>=0&&l<=1){if(u._volume=l,u._muted)return u;u.usingWebAudio&&u.masterGain.gain.setValueAtTime(l,t.ctx.currentTime);for(var d=0;d<u._howls.length;d++)if(!u._howls[d]._webAudio)for(var _=u._howls[d]._getSoundIds(),g=0;g<_.length;g++){var m=u._howls[d]._soundById(_[g]);m&&m._node&&(m._node.volume=m._volume*l)}return u}return u._volume},mute:function(l){var u=this||t;u.ctx||f(),u._muted=l,u.usingWebAudio&&u.masterGain.gain.setValueAtTime(l?0:u._volume,t.ctx.currentTime);for(var d=0;d<u._howls.length;d++)if(!u._howls[d]._webAudio)for(var _=u._howls[d]._getSoundIds(),g=0;g<_.length;g++){var m=u._howls[d]._soundById(_[g]);m&&m._node&&(m._node.muted=l?!0:m._muted)}return u},stop:function(){for(var l=this||t,u=0;u<l._howls.length;u++)l._howls[u].stop();return l},unload:function(){for(var l=this||t,u=l._howls.length-1;u>=0;u--)l._howls[u].unload();return l.usingWebAudio&&l.ctx&&typeof l.ctx.close<"u"&&(l.ctx.close(),l.ctx=null,f()),l},codecs:function(l){return(this||t)._codecs[l.replace(/^x-/,"")]},_setup:function(){var l=this||t;if(l.state=l.ctx&&l.ctx.state||"suspended",l._autoSuspend(),!l.usingWebAudio)if(typeof Audio<"u")try{var u=new Audio;typeof u.oncanplaythrough>"u"&&(l._canPlayEvent="canplay")}catch{l.noAudio=!0}else l.noAudio=!0;try{var u=new Audio;u.muted&&(l.noAudio=!0)}catch{}return l.noAudio||l._setupCodecs(),l},_setupCodecs:function(){var l=this||t,u=null;try{u=typeof Audio<"u"?new Audio:null}catch{return l}if(!u||typeof u.canPlayType!="function")return l;var d=u.canPlayType("audio/mpeg;").replace(/^no$/,""),_=l._navigator?l._navigator.userAgent:"",g=_.match(/OPR\/(\d+)/g),m=g&&parseInt(g[0].split("/")[1],10)<33,p=_.indexOf("Safari")!==-1&&_.indexOf("Chrome")===-1,x=_.match(/Version\/(.*?) /),v=p&&x&&parseInt(x[1],10)<15;return l._codecs={mp3:!!(!m&&(d||u.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(u.canPlayType('audio/wav; codecs="1"')||u.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!u.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!u.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(u.canPlayType("audio/x-m4a;")||u.canPlayType("audio/m4a;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(u.canPlayType("audio/x-m4b;")||u.canPlayType("audio/m4b;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(u.canPlayType("audio/x-mp4;")||u.canPlayType("audio/mp4;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!u.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(u.canPlayType("audio/x-flac;")||u.canPlayType("audio/flac;")).replace(/^no$/,"")},l},_unlockAudio:function(){var l=this||t;if(!(l._audioUnlocked||!l.ctx)){l._audioUnlocked=!1,l.autoUnlock=!1,!l._mobileUnloaded&&l.ctx.sampleRate!==44100&&(l._mobileUnloaded=!0,l.unload()),l._scratchBuffer=l.ctx.createBuffer(1,1,22050);var u=function(d){for(;l._html5AudioPool.length<l.html5PoolSize;)try{var _=new Audio;_._unlocked=!0,l._releaseHtml5Audio(_)}catch{l.noAudio=!0;break}for(var g=0;g<l._howls.length;g++)if(!l._howls[g]._webAudio)for(var m=l._howls[g]._getSoundIds(),p=0;p<m.length;p++){var x=l._howls[g]._soundById(m[p]);x&&x._node&&!x._node._unlocked&&(x._node._unlocked=!0,x._node.load())}l._autoResume();var v=l.ctx.createBufferSource();v.buffer=l._scratchBuffer,v.connect(l.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof l.ctx.resume=="function"&&l.ctx.resume(),v.onended=function(){v.disconnect(0),l._audioUnlocked=!0,document.removeEventListener("touchstart",u,!0),document.removeEventListener("touchend",u,!0),document.removeEventListener("click",u,!0),document.removeEventListener("keydown",u,!0);for(var M=0;M<l._howls.length;M++)l._howls[M]._emit("unlock")}};return document.addEventListener("touchstart",u,!0),document.addEventListener("touchend",u,!0),document.addEventListener("click",u,!0),document.addEventListener("keydown",u,!0),l}},_obtainHtml5Audio:function(){var l=this||t;if(l._html5AudioPool.length)return l._html5AudioPool.pop();var u=new Audio().play();return u&&typeof Promise<"u"&&(u instanceof Promise||typeof u.then=="function")&&u.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(l){var u=this||t;return l._unlocked&&u._html5AudioPool.push(l),u},_autoSuspend:function(){var l=this;if(!(!l.autoSuspend||!l.ctx||typeof l.ctx.suspend>"u"||!t.usingWebAudio)){for(var u=0;u<l._howls.length;u++)if(l._howls[u]._webAudio){for(var d=0;d<l._howls[u]._sounds.length;d++)if(!l._howls[u]._sounds[d]._paused)return l}return l._suspendTimer&&clearTimeout(l._suspendTimer),l._suspendTimer=setTimeout(function(){if(l.autoSuspend){l._suspendTimer=null,l.state="suspending";var _=function(){l.state="suspended",l._resumeAfterSuspend&&(delete l._resumeAfterSuspend,l._autoResume())};l.ctx.suspend().then(_,_)}},3e4),l}},_autoResume:function(){var l=this;if(!(!l.ctx||typeof l.ctx.resume>"u"||!t.usingWebAudio))return l.state==="running"&&l.ctx.state!=="interrupted"&&l._suspendTimer?(clearTimeout(l._suspendTimer),l._suspendTimer=null):l.state==="suspended"||l.state==="running"&&l.ctx.state==="interrupted"?(l.ctx.resume().then(function(){l.state="running";for(var u=0;u<l._howls.length;u++)l._howls[u]._emit("resume")}),l._suspendTimer&&(clearTimeout(l._suspendTimer),l._suspendTimer=null)):l.state==="suspending"&&(l._resumeAfterSuspend=!0),l}};var t=new e,n=function(l){var u=this;if(!l.src||l.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}u.init(l)};n.prototype={init:function(l){var u=this;return t.ctx||f(),u._autoplay=l.autoplay||!1,u._format=typeof l.format!="string"?l.format:[l.format],u._html5=l.html5||!1,u._muted=l.mute||!1,u._loop=l.loop||!1,u._pool=l.pool||5,u._preload=typeof l.preload=="boolean"||l.preload==="metadata"?l.preload:!0,u._rate=l.rate||1,u._sprite=l.sprite||{},u._src=typeof l.src!="string"?l.src:[l.src],u._volume=l.volume!==void 0?l.volume:1,u._xhr={method:l.xhr&&l.xhr.method?l.xhr.method:"GET",headers:l.xhr&&l.xhr.headers?l.xhr.headers:null,withCredentials:l.xhr&&l.xhr.withCredentials?l.xhr.withCredentials:!1},u._duration=0,u._state="unloaded",u._sounds=[],u._endTimers={},u._queue=[],u._playLock=!1,u._onend=l.onend?[{fn:l.onend}]:[],u._onfade=l.onfade?[{fn:l.onfade}]:[],u._onload=l.onload?[{fn:l.onload}]:[],u._onloaderror=l.onloaderror?[{fn:l.onloaderror}]:[],u._onplayerror=l.onplayerror?[{fn:l.onplayerror}]:[],u._onpause=l.onpause?[{fn:l.onpause}]:[],u._onplay=l.onplay?[{fn:l.onplay}]:[],u._onstop=l.onstop?[{fn:l.onstop}]:[],u._onmute=l.onmute?[{fn:l.onmute}]:[],u._onvolume=l.onvolume?[{fn:l.onvolume}]:[],u._onrate=l.onrate?[{fn:l.onrate}]:[],u._onseek=l.onseek?[{fn:l.onseek}]:[],u._onunlock=l.onunlock?[{fn:l.onunlock}]:[],u._onresume=[],u._webAudio=t.usingWebAudio&&!u._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(u),u._autoplay&&u._queue.push({event:"play",action:function(){u.play()}}),u._preload&&u._preload!=="none"&&u.load(),u},load:function(){var l=this,u=null;if(t.noAudio){l._emit("loaderror",null,"No audio support.");return}typeof l._src=="string"&&(l._src=[l._src]);for(var d=0;d<l._src.length;d++){var _,g;if(l._format&&l._format[d])_=l._format[d];else{if(g=l._src[d],typeof g!="string"){l._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}_=/^data:audio\/([^;,]+);/i.exec(g),_||(_=/\.([^.]+)$/.exec(g.split("?",1)[0])),_&&(_=_[1].toLowerCase())}if(_||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),_&&t.codecs(_)){u=l._src[d];break}}if(!u){l._emit("loaderror",null,"No codec support for selected audio sources.");return}return l._src=u,l._state="loading",window.location.protocol==="https:"&&u.slice(0,5)==="http:"&&(l._html5=!0,l._webAudio=!1),new i(l),l._webAudio&&a(l),l},play:function(l,u){var d=this,_=null;if(typeof l=="number")_=l,l=null;else{if(typeof l=="string"&&d._state==="loaded"&&!d._sprite[l])return null;if(typeof l>"u"&&(l="__default",!d._playLock)){for(var g=0,m=0;m<d._sounds.length;m++)d._sounds[m]._paused&&!d._sounds[m]._ended&&(g++,_=d._sounds[m]._id);g===1?l=null:_=null}}var p=_?d._soundById(_):d._inactiveSound();if(!p)return null;if(_&&!l&&(l=p._sprite||"__default"),d._state!=="loaded"){p._sprite=l,p._ended=!1;var x=p._id;return d._queue.push({event:"play",action:function(){d.play(x)}}),x}if(_&&!p._paused)return u||d._loadQueue("play"),p._id;d._webAudio&&t._autoResume();var v=Math.max(0,p._seek>0?p._seek:d._sprite[l][0]/1e3),M=Math.max(0,(d._sprite[l][0]+d._sprite[l][1])/1e3-v),R=M*1e3/Math.abs(p._rate),w=d._sprite[l][0]/1e3,b=(d._sprite[l][0]+d._sprite[l][1])/1e3;p._sprite=l,p._ended=!1;var D=function(){p._paused=!1,p._seek=v,p._start=w,p._stop=b,p._loop=!!(p._loop||d._sprite[l][2])};if(v>=b){d._ended(p);return}var y=p._node;if(d._webAudio){var T=function(){d._playLock=!1,D(),d._refreshBuffer(p);var P=p._muted||d._muted?0:p._volume;y.gain.setValueAtTime(P,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof y.bufferSource.start>"u"?p._loop?y.bufferSource.noteGrainOn(0,v,86400):y.bufferSource.noteGrainOn(0,v,M):p._loop?y.bufferSource.start(0,v,86400):y.bufferSource.start(0,v,M),R!==1/0&&(d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),R)),u||setTimeout(function(){d._emit("play",p._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?T():(d._playLock=!0,d.once("resume",T),d._clearTimer(p._id))}else{var N=function(){y.currentTime=v,y.muted=p._muted||d._muted||t._muted||y.muted,y.volume=p._volume*t.volume(),y.playbackRate=p._rate;try{var P=y.play();if(P&&typeof Promise<"u"&&(P instanceof Promise||typeof P.then=="function")?(d._playLock=!0,D(),P.then(function(){d._playLock=!1,y._unlocked=!0,u?d._loadQueue():d._emit("play",p._id)}).catch(function(){d._playLock=!1,d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):u||(d._playLock=!1,D(),d._emit("play",p._id)),y.playbackRate=p._rate,y.paused){d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}l!=="__default"||p._loop?d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),R):(d._endTimers[p._id]=function(){d._ended(p),y.removeEventListener("ended",d._endTimers[p._id],!1)},y.addEventListener("ended",d._endTimers[p._id],!1))}catch(U){d._emit("playerror",p._id,U)}};y.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(y.src=d._src,y.load());var G=window&&window.ejecta||!y.readyState&&t._navigator.isCocoonJS;if(y.readyState>=3||G)N();else{d._playLock=!0,d._state="loading";var q=function(){d._state="loaded",N(),y.removeEventListener(t._canPlayEvent,q,!1)};y.addEventListener(t._canPlayEvent,q,!1),d._clearTimer(p._id)}}return p._id},pause:function(l){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"pause",action:function(){u.pause(l)}}),u;for(var d=u._getSoundIds(l),_=0;_<d.length;_++){u._clearTimer(d[_]);var g=u._soundById(d[_]);if(g&&!g._paused&&(g._seek=u.seek(d[_]),g._rateSeek=0,g._paused=!0,u._stopFade(d[_]),g._node))if(u._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),u._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||u._emit("pause",g?g._id:null)}return u},stop:function(l,u){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(l)}}),d;for(var _=d._getSoundIds(l),g=0;g<_.length;g++){d._clearTimer(_[g]);var m=d._soundById(_[g]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,d._stopFade(_[g]),m._node&&(d._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),d._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&d._clearSound(m._node))),u||d._emit("stop",m._id))}return d},mute:function(l,u){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(l,u)}}),d;if(typeof u>"u")if(typeof l=="boolean")d._muted=l;else return d._muted;for(var _=d._getSoundIds(u),g=0;g<_.length;g++){var m=d._soundById(_[g]);m&&(m._muted=l,m._interval&&d._stopFade(m._id),d._webAudio&&m._node?m._node.gain.setValueAtTime(l?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:l),d._emit("mute",m._id))}return d},volume:function(){var l=this,u=arguments,d,_;if(u.length===0)return l._volume;if(u.length===1||u.length===2&&typeof u[1]>"u"){var g=l._getSoundIds(),m=g.indexOf(u[0]);m>=0?_=parseInt(u[0],10):d=parseFloat(u[0])}else u.length>=2&&(d=parseFloat(u[0]),_=parseInt(u[1],10));var p;if(typeof d<"u"&&d>=0&&d<=1){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"volume",action:function(){l.volume.apply(l,u)}}),l;typeof _>"u"&&(l._volume=d),_=l._getSoundIds(_);for(var x=0;x<_.length;x++)p=l._soundById(_[x]),p&&(p._volume=d,u[2]||l._stopFade(_[x]),l._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(d,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=d*t.volume()),l._emit("volume",p._id))}else return p=_?l._soundById(_):l._sounds[0],p?p._volume:0;return l},fade:function(l,u,d,_){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(l,u,d,_)}}),g;l=Math.min(Math.max(0,parseFloat(l)),1),u=Math.min(Math.max(0,parseFloat(u)),1),d=parseFloat(d),g.volume(l,_);for(var m=g._getSoundIds(_),p=0;p<m.length;p++){var x=g._soundById(m[p]);if(x){if(_||g._stopFade(m[p]),g._webAudio&&!x._muted){var v=t.ctx.currentTime,M=v+d/1e3;x._volume=l,x._node.gain.setValueAtTime(l,v),x._node.gain.linearRampToValueAtTime(u,M)}g._startFadeInterval(x,l,u,d,m[p],typeof _>"u")}}return g},_startFadeInterval:function(l,u,d,_,g,m){var p=this,x=u,v=d-u,M=Math.abs(v/.01),R=Math.max(4,M>0?_/M:_),w=Date.now();l._fadeTo=d,l._interval=setInterval(function(){var b=(Date.now()-w)/_;w=Date.now(),x+=v*b,x=Math.round(x*100)/100,v<0?x=Math.max(d,x):x=Math.min(d,x),p._webAudio?l._volume=x:p.volume(x,l._id,!0),m&&(p._volume=x),(d<u&&x<=d||d>u&&x>=d)&&(clearInterval(l._interval),l._interval=null,l._fadeTo=null,p.volume(d,l._id),p._emit("fade",l._id))},R)},_stopFade:function(l){var u=this,d=u._soundById(l);return d&&d._interval&&(u._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,u.volume(d._fadeTo,l),d._fadeTo=null,u._emit("fade",l)),u},loop:function(){var l=this,u=arguments,d,_,g;if(u.length===0)return l._loop;if(u.length===1)if(typeof u[0]=="boolean")d=u[0],l._loop=d;else return g=l._soundById(parseInt(u[0],10)),g?g._loop:!1;else u.length===2&&(d=u[0],_=parseInt(u[1],10));for(var m=l._getSoundIds(_),p=0;p<m.length;p++)g=l._soundById(m[p]),g&&(g._loop=d,l._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=d,d&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,l.playing(m[p])&&(l.pause(m[p],!0),l.play(m[p],!0)))));return l},rate:function(){var l=this,u=arguments,d,_;if(u.length===0)_=l._sounds[0]._id;else if(u.length===1){var g=l._getSoundIds(),m=g.indexOf(u[0]);m>=0?_=parseInt(u[0],10):d=parseFloat(u[0])}else u.length===2&&(d=parseFloat(u[0]),_=parseInt(u[1],10));var p;if(typeof d=="number"){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"rate",action:function(){l.rate.apply(l,u)}}),l;typeof _>"u"&&(l._rate=d),_=l._getSoundIds(_);for(var x=0;x<_.length;x++)if(p=l._soundById(_[x]),p){l.playing(_[x])&&(p._rateSeek=l.seek(_[x]),p._playStart=l._webAudio?t.ctx.currentTime:p._playStart),p._rate=d,l._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):p._node&&(p._node.playbackRate=d);var v=l.seek(_[x]),M=(l._sprite[p._sprite][0]+l._sprite[p._sprite][1])/1e3-v,R=M*1e3/Math.abs(p._rate);(l._endTimers[_[x]]||!p._paused)&&(l._clearTimer(_[x]),l._endTimers[_[x]]=setTimeout(l._ended.bind(l,p),R)),l._emit("rate",p._id)}}else return p=l._soundById(_),p?p._rate:l._rate;return l},seek:function(){var l=this,u=arguments,d,_;if(u.length===0)l._sounds.length&&(_=l._sounds[0]._id);else if(u.length===1){var g=l._getSoundIds(),m=g.indexOf(u[0]);m>=0?_=parseInt(u[0],10):l._sounds.length&&(_=l._sounds[0]._id,d=parseFloat(u[0]))}else u.length===2&&(d=parseFloat(u[0]),_=parseInt(u[1],10));if(typeof _>"u")return 0;if(typeof d=="number"&&(l._state!=="loaded"||l._playLock))return l._queue.push({event:"seek",action:function(){l.seek.apply(l,u)}}),l;var p=l._soundById(_);if(p)if(typeof d=="number"&&d>=0){var x=l.playing(_);x&&l.pause(_,!0),p._seek=d,p._ended=!1,l._clearTimer(_),!l._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=d);var v=function(){x&&l.play(_,!0),l._emit("seek",_)};if(x&&!l._webAudio){var M=function(){l._playLock?setTimeout(M,0):v()};setTimeout(M,0)}else v()}else if(l._webAudio){var R=l.playing(_)?t.ctx.currentTime-p._playStart:0,w=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(w+R*Math.abs(p._rate))}else return p._node.currentTime;return l},playing:function(l){var u=this;if(typeof l=="number"){var d=u._soundById(l);return d?!d._paused:!1}for(var _=0;_<u._sounds.length;_++)if(!u._sounds[_]._paused)return!0;return!1},duration:function(l){var u=this,d=u._duration,_=u._soundById(l);return _&&(d=u._sprite[_._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var l=this,u=l._sounds,d=0;d<u.length;d++)u[d]._paused||l.stop(u[d]._id),l._webAudio||(l._clearSound(u[d]._node),u[d]._node.removeEventListener("error",u[d]._errorFn,!1),u[d]._node.removeEventListener(t._canPlayEvent,u[d]._loadFn,!1),u[d]._node.removeEventListener("ended",u[d]._endFn,!1),t._releaseHtml5Audio(u[d]._node)),delete u[d]._node,l._clearTimer(u[d]._id);var _=t._howls.indexOf(l);_>=0&&t._howls.splice(_,1);var g=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===l._src||l._src.indexOf(t._howls[d]._src)>=0){g=!1;break}return s&&g&&delete s[l._src],t.noAudio=!1,l._state="unloaded",l._sounds=[],l=null,null},on:function(l,u,d,_){var g=this,m=g["_on"+l];return typeof u=="function"&&m.push(_?{id:d,fn:u,once:_}:{id:d,fn:u}),g},off:function(l,u,d){var _=this,g=_["_on"+l],m=0;if(typeof u=="number"&&(d=u,u=null),u||d)for(m=0;m<g.length;m++){var p=d===g[m].id;if(u===g[m].fn&&p||!u&&p){g.splice(m,1);break}}else if(l)_["_on"+l]=[];else{var x=Object.keys(_);for(m=0;m<x.length;m++)x[m].indexOf("_on")===0&&Array.isArray(_[x[m]])&&(_[x[m]]=[])}return _},once:function(l,u,d){var _=this;return _.on(l,u,d,1),_},_emit:function(l,u,d){for(var _=this,g=_["_on"+l],m=g.length-1;m>=0;m--)(!g[m].id||g[m].id===u||l==="load")&&(setTimeout((function(p){p.call(this,u,d)}).bind(_,g[m].fn),0),g[m].once&&_.off(l,g[m].fn,g[m].id));return _._loadQueue(l),_},_loadQueue:function(l){var u=this;if(u._queue.length>0){var d=u._queue[0];d.event===l&&(u._queue.shift(),u._loadQueue()),l||d.action()}return u},_ended:function(l){var u=this,d=l._sprite;if(!u._webAudio&&l._node&&!l._node.paused&&!l._node.ended&&l._node.currentTime<l._stop)return setTimeout(u._ended.bind(u,l),100),u;var _=!!(l._loop||u._sprite[d][2]);if(u._emit("end",l._id),!u._webAudio&&_&&u.stop(l._id,!0).play(l._id),u._webAudio&&_){u._emit("play",l._id),l._seek=l._start||0,l._rateSeek=0,l._playStart=t.ctx.currentTime;var g=(l._stop-l._start)*1e3/Math.abs(l._rate);u._endTimers[l._id]=setTimeout(u._ended.bind(u,l),g)}return u._webAudio&&!_&&(l._paused=!0,l._ended=!0,l._seek=l._start||0,l._rateSeek=0,u._clearTimer(l._id),u._cleanBuffer(l._node),t._autoSuspend()),!u._webAudio&&!_&&u.stop(l._id,!0),u},_clearTimer:function(l){var u=this;if(u._endTimers[l]){if(typeof u._endTimers[l]!="function")clearTimeout(u._endTimers[l]);else{var d=u._soundById(l);d&&d._node&&d._node.removeEventListener("ended",u._endTimers[l],!1)}delete u._endTimers[l]}return u},_soundById:function(l){for(var u=this,d=0;d<u._sounds.length;d++)if(l===u._sounds[d]._id)return u._sounds[d];return null},_inactiveSound:function(){var l=this;l._drain();for(var u=0;u<l._sounds.length;u++)if(l._sounds[u]._ended)return l._sounds[u].reset();return new i(l)},_drain:function(){var l=this,u=l._pool,d=0,_=0;if(!(l._sounds.length<u)){for(_=0;_<l._sounds.length;_++)l._sounds[_]._ended&&d++;for(_=l._sounds.length-1;_>=0;_--){if(d<=u)return;l._sounds[_]._ended&&(l._webAudio&&l._sounds[_]._node&&l._sounds[_]._node.disconnect(0),l._sounds.splice(_,1),d--)}}},_getSoundIds:function(l){var u=this;if(typeof l>"u"){for(var d=[],_=0;_<u._sounds.length;_++)d.push(u._sounds[_]._id);return d}else return[l]},_refreshBuffer:function(l){var u=this;return l._node.bufferSource=t.ctx.createBufferSource(),l._node.bufferSource.buffer=s[u._src],l._panner?l._node.bufferSource.connect(l._panner):l._node.bufferSource.connect(l._node),l._node.bufferSource.loop=l._loop,l._loop&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop||0),l._node.bufferSource.playbackRate.setValueAtTime(l._rate,t.ctx.currentTime),u},_cleanBuffer:function(l){var u=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!l.bufferSource)return u;if(t._scratchBuffer&&l.bufferSource&&(l.bufferSource.onended=null,l.bufferSource.disconnect(0),d))try{l.bufferSource.buffer=t._scratchBuffer}catch{}return l.bufferSource=null,u},_clearSound:function(l){var u=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);u||(l.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(l){this._parent=l,this.init()};i.prototype={init:function(){var l=this,u=l._parent;return l._muted=u._muted,l._loop=u._loop,l._volume=u._volume,l._rate=u._rate,l._seek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,u._sounds.push(l),l.create(),l},create:function(){var l=this,u=l._parent,d=t._muted||l._muted||l._parent._muted?0:l._volume;return u._webAudio?(l._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),l._node.gain.setValueAtTime(d,t.ctx.currentTime),l._node.paused=!0,l._node.connect(t.masterGain)):t.noAudio||(l._node=t._obtainHtml5Audio(),l._errorFn=l._errorListener.bind(l),l._node.addEventListener("error",l._errorFn,!1),l._loadFn=l._loadListener.bind(l),l._node.addEventListener(t._canPlayEvent,l._loadFn,!1),l._endFn=l._endListener.bind(l),l._node.addEventListener("ended",l._endFn,!1),l._node.src=u._src,l._node.preload=u._preload===!0?"auto":u._preload,l._node.volume=d*t.volume(),l._node.load()),l},reset:function(){var l=this,u=l._parent;return l._muted=u._muted,l._loop=u._loop,l._volume=u._volume,l._rate=u._rate,l._seek=0,l._rateSeek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,l},_errorListener:function(){var l=this;l._parent._emit("loaderror",l._id,l._node.error?l._node.error.code:0),l._node.removeEventListener("error",l._errorFn,!1)},_loadListener:function(){var l=this,u=l._parent;u._duration=Math.ceil(l._node.duration*10)/10,Object.keys(u._sprite).length===0&&(u._sprite={__default:[0,u._duration*1e3]}),u._state!=="loaded"&&(u._state="loaded",u._emit("load"),u._loadQueue()),l._node.removeEventListener(t._canPlayEvent,l._loadFn,!1)},_endListener:function(){var l=this,u=l._parent;u._duration===1/0&&(u._duration=Math.ceil(l._node.duration*10)/10,u._sprite.__default[1]===1/0&&(u._sprite.__default[1]=u._duration*1e3),u._ended(l)),l._node.removeEventListener("ended",l._endFn,!1)}};var s={},a=function(l){var u=l._src;if(s[u]){l._duration=s[u].duration,h(l);return}if(/^data:[^;]+;base64,/.test(u)){for(var d=atob(u.split(",")[1]),_=new Uint8Array(d.length),g=0;g<d.length;++g)_[g]=d.charCodeAt(g);c(_.buffer,l)}else{var m=new XMLHttpRequest;m.open(l._xhr.method,u,!0),m.withCredentials=l._xhr.withCredentials,m.responseType="arraybuffer",l._xhr.headers&&Object.keys(l._xhr.headers).forEach(function(p){m.setRequestHeader(p,l._xhr.headers[p])}),m.onload=function(){var p=(m.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){l._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}c(m.response,l)},m.onerror=function(){l._webAudio&&(l._html5=!0,l._webAudio=!1,l._sounds=[],delete s[u],l.load())},o(m)}},o=function(l){try{l.send()}catch{l.onerror()}},c=function(l,u){var d=function(){u._emit("loaderror",null,"Decoding audio data failed.")},_=function(g){g&&u._sounds.length>0?(s[u._src]=g,h(u,g)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(l).then(_).catch(d):t.ctx.decodeAudioData(l,_,d)},h=function(l,u){u&&!l._duration&&(l._duration=u.duration),Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue())},f=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var l=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),u=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=u?parseInt(u[1],10):null;if(l&&d&&d<9){var _=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!_&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};r.Howler=t,r.Howl=n,typeof Dr<"u"?(Dr.HowlerGlobal=e,Dr.Howler=t,Dr.Howl=n,Dr.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,n,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,i,s,a,o){var c=this;if(!c.ctx||!c.ctx.listener)return c;var h=c._orientation;if(n=typeof n!="number"?h[1]:n,i=typeof i!="number"?h[2]:i,s=typeof s!="number"?h[3]:s,a=typeof a!="number"?h[4]:a,o=typeof o!="number"?h[5]:o,typeof t=="number")c._orientation=[t,n,i,s,a,o],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(o,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(t,n,i,s,a,o);else return h;return c},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var a=i._getSoundIds(n),o=0;o<a.length;o++){var c=i._soundById(a[o]);if(c)if(typeof t=="number")c._stereo=t,c._pos=[t,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&e(c,s),s==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(t,0,0):c._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",c._id);else return c._stereo}return i},Howl.prototype.pos=function(t,n,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,n,i,s)}}),a;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")a._pos=[t,n,i];else return a._pos;for(var o=a._getSoundIds(s),c=0;c<o.length;c++){var h=a._soundById(o[c]);if(h)if(typeof t=="number")h._pos=[t,n,i],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setPosition(t,n,i)),a._emit("pos",h._id);else return h._pos}return a},Howl.prototype.orientation=function(t,n,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,n,i,s)}}),a;if(n=typeof n!="number"?a._orientation[1]:n,i=typeof i!="number"?a._orientation[2]:i,typeof s>"u")if(typeof t=="number")a._orientation=[t,n,i];else return a._orientation;for(var o=a._getSoundIds(s),c=0;c<o.length;c++){var h=a._soundById(o[c]);if(h)if(typeof t=="number")h._orientation=[t,n,i],h._node&&(h._panner||(h._pos||(h._pos=a._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,i)),a._emit("orientation",h._id);else return h._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,s,a;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(n[0],10)),a?a._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],s=parseInt(n[1],10));for(var o=t._getSoundIds(s),c=0;c<o.length;c++)if(a=t._soundById(o[c]),a){var h=a._pannerAttr;h={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:h.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:h.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:h.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:h.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:h.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:h.panningModel};var f=a._panner;f||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),f=a._panner),f.coneInnerAngle=h.coneInnerAngle,f.coneOuterAngle=h.coneOuterAngle,f.coneOuterGain=h.coneOuterGain,f.distanceModel=h.distanceModel,f.maxDistance=h.maxDistance,f.refDistance=h.refDistance,f.rolloffFactor=h.rolloffFactor,f.panningModel=h.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(cs);const oo={FEIN:[{time:0,text:"[Intro]"},{time:15,text:"Just come outside for the night (yeah)"},{time:19,text:"Take your time, get your light (yeah)"},{time:22,text:"Johnny Dang, huh-uh"},{time:25,text:"I been out geekin'"},{time:28,text:"Bitch"},{time:30,text:"Fein', fein', fein', fein'-fein' (yeah)"},{time:32,text:"Fein', fein', fein', fein'-fein' (yeah)"},{time:35,text:"Fein', fein', fein', fein'-fein'"},{time:38,text:"Fein', fein', fein', fein' (yeah)"},{time:44,text:"The career's more at stake when you in your prime (at stake)"},{time:47,text:"Fuck that paper, baby, my face on the dotted line (dot, yeah)"},{time:50,text:"I been flyin' out of town for some peace of mind (yeah, yeah, bitch)"},{time:54,text:"It's like always they just want a piece of mine (ah)"},{time:57,text:"I been focused on the future, never on right now (ah)"},{time:61,text:"But I'm sippin' that kombucha, either pink or brown (it's lit)"},{time:64,text:"I'm the one that introduced you to the you right now (mm, let's go)"},{time:68,text:"Oh my God, that bitch bite (that bitch bite)"},{time:71,text:"But alright (alright), tryna vibe (tryna vibe this)"},{time:74,text:"In the night, come alive"},{time:78,text:"Ain't asleep, ain't a-, ain't a-, ain't-ain't-ain't-"},{time:82,text:"Fein', fein', fein', fein'-fein'"},{time:85,text:"Fein', fein', fein', fein'-fein'"},{time:88,text:"Fein', fein', fein', fein'-fein'"},{time:91,text:"Fein', fein', fein', fein', fein'"},{time:95,text:"Fein', fein', fein'"},{time:100,text:"Syrup, whoa, what?"},{time:105,text:"What?"},{time:108,text:"(Homixide, Homixide, Homixide, Homixide) what?"},{time:110,text:"(Yeah, whoa, yeah, yeah)"},{time:113,text:"(Homixide, Homixide, Homixide, Homixide, yeah)"},{time:116,text:"(Yeah, hol' up, yeah)"},{time:118,text:"Yeah, I just been poppin' my shit it's been gettin' live, hol' up (shit)"},{time:121,text:"Yeah, you try to come wrong 'bout this shit, we poppin' ya tires, hol' up (shit)"},{time:124,text:"Uh, hunnid round, whoa, feelin' like I'm on ten"},{time:126,text:"Playin' both sides with these hoes (hol' up)"},{time:129,text:"Shawty, I'm fuckin' yo' friends (hol' up)"},{time:131,text:"I been goin' crazy, shawty, I've been in the deep end"},{time:134,text:"She not innocent, uh, shit, she tryna go"},{time:136,text:"Fein', fein' (talm 'bout), fein', fein'-fein'-fein' (yeah, syrup, oh-oh, what?)"},{time:137,text:"Lảm nhảm gì đó, ngu tiếng anh nên kh hiểu ^.^"}],"Khế Ước":[{time:7,text:"Yeah ố ô ố ô"},{time:10,text:"Ố ô ố ô"},{time:13,text:"Ố ô ố ô ố ô ô ô"},{time:15,text:"Ố ô ố ô ố ô ô ô"},{time:17,text:"Ố ô ố ô"},{time:19,text:"Ố ô ố ô"},{time:21,text:"Ố ô ố ô ố ô ô ô"},{time:23,text:"Ố ô ố ô ố ô ô ô"},{time:25,text:"Bao giờ tôi có thể vô tư yeah"},{time:30,text:"Em thì quen sung sướng nên hư từ"},{time:33,text:"Kiểu tôi là đồng cỏ héo khô khan"},{time:38,text:"Em là cơn mưa đá to kinh hoàng"},{time:41,text:"Dù tôi biết (sẽ không tốt đâu)"},{time:43,text:"Nhưng vị môi em (lại có mùi mứt dâu)"},{time:45,text:"Là vị tôi thích nhất giờ vẫn vậy (uh uh)"},{time:49,text:"Lồng ngực tôi (em cắm răng khá sâu)"},{time:52,text:"Thề không đau (là bởi vì quá đau)"},{time:54,text:"But it's worth it (so please don't stop)"},{time:57,text:"Sometimes I wonder"},{time:59,text:"Trời ơi tôi đã vướng vô cái gì thế này"},{time:62,text:"Tôi đã khóc hết nước mắt vì em"},{time:64,text:"Đã dâng hiến xác thân vì em"},{time:66,text:"Để nhận lại gì chứ (để nhận lại gì chứ)"},{time:68,text:"Là giao kèo của quỷ dữ (woah)"},{time:71,text:"Là liều thuốc tôi không thể cai"},{time:72,text:"Là mùi hương của loài hoa có gai"},{time:75,text:"Ồ ố ô ồ ô"},{time:76,text:"Woah ố ô ồ ô"},{time:80,text:"Bao lần tôi cảm thấy chơi vơi (chơi vơi)"},{time:85,text:"Em tìm vui nơi quỷ ma chơi bời (no)"},{time:89,text:"Sáng dậy không quên ghé tai tôi (oh yeah)"},{time:92,text:"Anh mà đi thì đáng lẽ vui rồi"},{time:95,text:"Vậy hay là mình giết nhau (chứ đừng ghét nhau)"},{time:98,text:"Rồi lại nén đau (thà mình giết nhau)"},{time:100,text:"Để mọi thứ kết thúc thật nhanh đi trước khi chúng ta ngoái đầu lại"},{time:104,text:"Còn gì em hỡi"},{time:106,text:"Đừng ai cơi nới để rồi xé xác lẫn nhau vào một tối đẹp trời"},{time:113,text:"Trời ơi tôi (đã vướng vô cái gì thế này)"},{time:116,text:"Tôi đã khóc hết nước mắt vì em"},{time:118,text:"Đã dâng hiến xác thân vì em"},{time:120,text:"Để nhận lại gì chứ (để nhận lại gì chứ)"},{time:122,text:"Là giao kèo của quỷ dữ (uh-uh)"},{time:125,text:"Là liều thuốc tôi không thể cai"},{time:127,text:"Là mùi hương của loài hoa có gai"},{time:129,text:"Ồ ố ô ồ ô"},{time:131,text:"Woah ố ô ồ ô"},{time:133,text:"Đừng chờ đợi đến khi sớm mai"},{time:135,text:"Đường về, đón đưa có ai?"},{time:137,text:"Chuyện tình mình có thật khó phai?"},{time:139,text:"Sao tôi nghe dối lừa bên tai?"},{time:141,text:"Nhìn lại ngày chúng ta có nhau"},{time:143,text:"Chẳng gì ngoài chất chồng nổi đau"},{time:146,text:"Đừng hẹn thề tái hợp kiếp sau"},{time:148,text:"Trong tim em có còn tôi đâu"},{time:167,text:"Chẳng còn gì người ơi"},{time:169,text:"Đừng nói thêm điều lả lơi"},{time:171,text:"Mình chẳng còn gì người ơi"},{time:173,text:"Đừng nói thêm điều lả lơi"},{time:175,text:"Chẳng còn gì người ơi"},{time:177,text:"Đừng nói thêm điều lả lơi"},{time:179,text:"Thà tôi ngạt chết bây giờ"},{time:181,text:"Còn hơn ở lại bên em!"},{time:183,text:"E-E-E-E-E-EE-EM"},{time:190,text:"Còn hơn ở lại bên em!"},{time:193,text:"E-E-E-E-E-EE-EM"},{time:202,text:"Dù anh chết em cũng đâu bận tâm"},{time:204,text:"Cuồng si em cứ như thằng hâm"},{time:206,text:"Để nhận lại gì chứ?"},{time:208,text:"Là giao kèo của quỷ dữ"},{time:210,text:"Là liều thuốc tôi không thể cai"},{time:212,text:"Là mùi hương của loài hoa có gai"},{time:214,text:"Ồ ố ô ồ ô"},{time:219,text:"Đừng chờ đợi đến khi sớm mai"},{time:221,text:"Đường về đón đưa có ai?"},{time:223,text:"Chuyện tình mình có thật khó phai?"},{time:225,text:"Sao tôi nghe dối lừa bên tai?"},{time:227,text:"Nhìn lại ngày chúng ta có nhau"},{time:229,text:"Chẳng gì ngoài chất chồng nỗi đau"},{time:231,text:"Đừng hẹn thề tái hợp kiếp sau"},{time:233,text:"Trong tim em có còn tôi đâu"},{time:235,text:"Ố ỳe"}],"Cơn mưa xa dần":[{time:13,text:"Chẳng quan tâm tương lai anh chẳng quan tâm đúng hay sai"},{time:20,text:"Chẳng quan tâm tương lai anh chẳng quan tâm đúng hay sai"},{time:26,text:"Còn đâu đây bao câu ca anh tặng em"},{time:29,text:"Tình yêu em mang cuốn lấp đi bao nhiêu câu ca"},{time:33,text:"Và còn lại đây đôi môi đau thương trong màn đêm"},{time:36,text:"Phải lẻ loi gồng mình bước qua niềm đau khi em rời xa"},{time:39,text:"Cơn mưa rồi lại thêm hey yeh"},{time:43,text:"Cơn mưa rồi lại thêm hey yeh"},{time:47,text:"Cơn mưa rồi lại thêm hey yeh"},{time:50,text:"Cơn mưa rồi lại thêm hey yeh"},{time:53,text:"Vì em đã xa rồi riêng mình anh một giấc mơ này"},{time:57,text:"Vì em đã quên rồi riêng mình anh một giấc mơ"},{time:60,text:"Em bước đi rồi ôi bao cơn mưa"},{time:63,text:"Em bước đi rồi xin hãy xua tan đi em bóng dáng hình em"},{time:67,text:"Em đã mãi rời xa"},{time:68,text:"My girl you're my girl"},{time:72,text:"You are my girl you're my girl"},{time:75,text:"My girl you're my girl"},{time:78,text:"You are my girl you're my girl"},{time:82,text:"Cơn mưa ngang qua"},{time:84,text:"Cơn mưa đi ngang qua"},{time:86,text:"Cơn mưa ngang qua"},{time:87,text:"Cơn mưa mang em đi thật xa"},{time:89,text:"Cơn mưa ngang qua"},{time:91,text:"Cơn mưa đi ngang qua"},{time:92,text:"Cơn mưa ngang qua"},{time:94,text:"Cơn mưa mang em đi thật xa"},{time:95,text:"Cơn mưa rồi lại thêm hey yeh"},{time:99,text:"Cơn mưa rồi lại thêm hey yeh"},{time:102,text:"Cơn mưa rồi lại thêm hey yeh"},{time:106,text:"Cơn mưa rồi lại thêm hey yeh"},{time:109,text:"Vì em đã xa rồi riêng mình anh một giấc mơ này"},{time:112,text:"Vì em đã quên rồi riêng mình anh một giấc mơ"},{time:116,text:"Em bước đi rồi ôi bao cơn mưa"},{time:118,text:"Em bước đi rồi xin hãy xua tan đi em bóng dáng hình em"},{time:122,text:"Em đã mãi rời xa"},{time:124,text:"My girl you're my girl"},{time:126,text:"You are my girl you're my girl"},{time:130,text:"My girl you're my girl"},{time:134,text:"You are my girl you're my girl"},{time:164,text:"Chẳng quan tâm tương lai anh chẳng quan tâm đúng hay sai"},{time:168,text:"Lạc trên con đường dài bao niềm thương nỗi nhớ chia hai"},{time:172,text:"Đè lên trên đôi vai những ngổn ngang ký ức phôi phai"},{time:175,text:"Tình ta sao chông gai"},{time:177,text:"Tình ta sao dừng lại"},{time:179,text:"Chẳng quan tâm tương lai anh chẳng quan tâm đúng hay sai"},{time:181,text:"Lạc trên con đường dài bao niềm thương nỗi nhớ chia hai"},{time:183,text:"Đè lên trên đôi vai những ngổn ngang ký ức phôi phai"},{time:185,text:"Tình ta sao chông gai"},{time:186,text:"Tình ta sao dừng lại"}]},Gx=document.getElementById("app"),Vx=document.getElementById("loading"),Wx=document.getElementById("bg"),lo=document.getElementById("toggleSound"),Xx=document.getElementById("specialButton"),nf=document.getElementById("gift-modal"),qx=document.getElementById("closeGift");document.getElementById("songTitle");document.getElementById("songLyrics");const rf=document.querySelectorAll(".song-box"),hu=document.getElementById("songLyricsContainer"),na=[{title:"FEIN",src:"/Womenday/FEIN.mp3",lyrics:oo.FEIN||"Searching...",image:"fein.jpg"},{title:"Khế ước",src:"/Womenday/KheUoc.mp3",lyrics:oo["Khế Ước"]||"Searching...",image:"khe-uoc.jpg"},{title:"Cơn mưa xa dần",src:"/Womenday/ConMuaXaDan.mp3",lyrics:oo["Cơn mưa xa dần"]||"Searching...",image:"con-mua.jpg"}];let Di=0,Tn=new cs.Howl({src:[na[Di].src],loop:!0,volume:.5,autoplay:!1,mute:!1,onplay:af}),sf;function Yx(r){const e=document.getElementById("songLyrics");e.innerHTML="";let t=0;const n=Date.now();function i(){if(t>=r.length)return;const s=Date.now()-n,a=r[t].time*1e3,o=Math.max(a-s,0);sf=setTimeout(()=>{e.innerHTML="";const c=document.createElement("p");c.textContent=r[t].text,c.classList.add("lyric-line"),e.appendChild(c),Li.fromTo(c,{opacity:0,y:20},{opacity:1,y:0,duration:1}),t++,i()},o)}i()}function af(){const r=document.getElementById("songTitle");r.textContent=na[Di].title;const e=na[Di].lyrics;rf.forEach((t,n)=>{t.classList.toggle("active",n===Di)}),clearTimeout(sf),Yx(e)}function Zx(r){r!==Di&&(Tn.stop(),Di=r,Tn=new cs.Howl({src:[na[Di].src],loop:!0,volume:.5,autoplay:!0,mute:!1,onplay:af}),Tn.play())}rf.forEach((r,e)=>{r.addEventListener("click",()=>{Zx(e)})});const hl=new cs.Howl({src:["/Womenday/https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3"],volume:1}),Kx=new cs.Howl({src:["/Womenday/https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3"],volume:1}),hn=new V0,Jt=new Kt(75,window.innerWidth/window.innerHeight,.1,1e3),pa=new qu({canvas:Wx,alpha:!0,antialias:!0});pa.setPixelRatio(window.devicePixelRatio);pa.setSize(window.innerWidth,window.innerHeight);Jt.position.setZ(30);const Jx=new wv(16777215,.5);hn.add(Jx);const of=new nh(16731501,1);of.position.set(5,5,5);hn.add(of);const lf=new nh(16748451,1);lf.position.set(-5,-5,5);hn.add(lf);const ci=new $u,dt=0,pt=0;ci.moveTo(dt+5,pt+5);ci.bezierCurveTo(dt+5,pt+5,dt+4,pt,dt,pt);ci.bezierCurveTo(dt-6,pt,dt-6,pt+7,dt-6,pt+7);ci.bezierCurveTo(dt-6,pt+11,dt-3,pt+15.4,dt+5,pt+19);ci.bezierCurveTo(dt+12,pt+15.4,dt+16,pt+11,dt+16,pt+7);ci.bezierCurveTo(dt+16,pt+7,dt+16,pt,dt+10,pt);ci.bezierCurveTo(dt+7,pt,dt+5,pt+5,dt+5,pt+5);const cf=new qo(ci),uf=new ua({color:16731501,emissive:16748451,emissiveIntensity:.3,side:_n}),hf=[],$x=()=>{const r=new jt(cf,uf),[e,t,n]=Array(3).fill().map(()=>ko.randFloatSpread(100));r.position.set(e,t,n);const i=Math.random()*.05+.02;r.scale.set(i,i,i),r.rotation.x=Math.random()*Math.PI,r.rotation.y=Math.random()*Math.PI,r.rotation.z=Math.random()*Math.PI,hn.add(r),hf.push({mesh:r,speed:Math.random()*.05+.01,rotationSpeed:Math.random()*.01+.005})};Array(50).fill().forEach($x);const jx=new aa(1,1),Qx=new Tv().load("https://i.imgur.com/Imf5Mtu.png"),ey=new ua({map:Qx,transparent:!0,side:_n}),ff=[],ty=()=>{const r=new jt(jx,ey),[e,t,n]=Array(3).fill().map(()=>ko.randFloatSpread(100));r.position.set(e,t,n);const i=Math.random()*2+1;r.scale.set(i,i,i),r.rotation.x=Math.random()*Math.PI,r.rotation.y=Math.random()*Math.PI,r.rotation.z=Math.random()*Math.PI,hn.add(r),ff.push({mesh:r,speed:Math.random()*.03+.01,rotationSpeed:Math.random()*.01+.005})};Array(30).fill().forEach(ty);const ny=new ca(.25,24,24),iy=new ua({color:16777215,emissive:16766720,emissiveIntensity:.5}),df=[],ry=()=>{const r=new jt(ny,iy),[e,t,n]=Array(3).fill().map(()=>ko.randFloatSpread(100));r.position.set(e,t,n),hn.add(r),df.push({mesh:r,pulse:Math.random()*Math.PI,pulseSpeed:Math.random()*.02+.01})};Array(100).fill().forEach(ry);let pf=0,mf=0,fu=0,du=0;const sy=window.innerWidth/2,ay=window.innerHeight/2;document.addEventListener("mousemove",r=>{pf=r.clientX-sy,mf=r.clientY-ay});document.addEventListener("click",r=>{if(r.target.tagName==="BUTTON"||r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA")return;hl.play();const e=new jt(cf,uf),t=new L(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1,.5);t.unproject(Jt);const n=t.sub(Jt.position).normalize(),i=-Jt.position.z/n.z,s=Jt.position.clone().add(n.multiplyScalar(i));e.position.copy(s),e.scale.set(.05,.05,.05),hn.add(e),Li.to(e.position,{y:e.position.y+5,duration:2,ease:"power1.out",onComplete:()=>{hn.remove(e)}}),Li.to(e.scale,{x:0,y:0,z:0,duration:2,ease:"power1.out"}),Li.to(e.rotation,{z:e.rotation.z+Math.PI*2,duration:2,ease:"power1.out"})});function _f(){requestAnimationFrame(_f),fu=pf*.001,du=mf*.001,Jt.position.x+=(fu-Jt.position.x)*.05,Jt.position.y+=(-du-Jt.position.y)*.05,Jt.lookAt(hn.position),hf.forEach(r=>{r.mesh.position.y+=r.speed,r.mesh.rotation.x+=r.rotationSpeed,r.mesh.rotation.y+=r.rotationSpeed,r.mesh.rotation.z+=r.rotationSpeed,r.mesh.position.y>50&&(r.mesh.position.y=-50)}),ff.forEach(r=>{r.mesh.position.y-=r.speed,r.mesh.rotation.x+=r.rotationSpeed,r.mesh.rotation.y+=r.rotationSpeed,r.mesh.rotation.z+=r.rotationSpeed,r.mesh.position.y<-50&&(r.mesh.position.y=50)}),df.forEach(r=>{r.pulse+=r.pulseSpeed;const e=.25+Math.sin(r.pulse)*.1;r.mesh.scale.set(e,e,e)}),pa.render(hn,Jt)}window.addEventListener("resize",()=>{Jt.aspect=window.innerWidth/window.innerHeight,Jt.updateProjectionMatrix(),pa.setSize(window.innerWidth,window.innerHeight)});lo.addEventListener("click",()=>{Tn.playing()?(Tn.pause(),hu.classList.add("hidden"),lo.innerHTML='<i class="fas fa-volume-mute"></i>'):(Tn.play(),Tn.mute(!1),hu.classList.remove("hidden"),lo.innerHTML='<i class="fas fa-volume-up"></i>')});Xx.addEventListener("click",()=>{hl.play(),nf.classList.remove("hidden"),setTimeout(()=>{Kx.play(),document.querySelector(".gift-lid").style.transform="rotateX(-180deg)",setTimeout(()=>{document.querySelector(".gift-message").style.opacity="1";for(let r=0;r<20;r++)setTimeout(()=>{oy()},r*100)},1e3)},500)});qx.addEventListener("click",()=>{hl.play(),nf.classList.add("hidden"),document.querySelector(".gift-lid").style.transform="rotateX(0)",document.querySelector(".gift-message").style.opacity="0"});function oy(){const r=[16731501,16748451,16757697,16766720,16777215],e=r[Math.floor(Math.random()*r.length)],t=new ca(.1,8,8),n=new ua({color:e,emissive:e,emissiveIntensity:1}),i=(Math.random()-.5)*10,s=Math.random()*5+5,a=(Math.random()-.5)*10;for(let o=0;o<20;o++){const c=new jt(t,n);c.position.set(i,s,a),hn.add(c);const h={x:(Math.random()-.5)*.3,y:(Math.random()-.5)*.3,z:(Math.random()-.5)*.3};Li.to(c.position,{x:c.position.x+h.x*20,y:c.position.y+h.y*20,z:c.position.z+h.z*20,duration:2,ease:"power2.out",onComplete:()=>{hn.remove(c)}}),Li.to(c.scale,{x:0,y:0,z:0,duration:2,ease:"power2.in"})}}window.addEventListener("load",()=>{setTimeout(()=>{Vx.style.display="none",Gx.classList.remove("hidden"),_f(),Tn.play(),document.addEventListener("click",()=>{Tn.mute()&&Tn.mute(!1)})},2e3)});
