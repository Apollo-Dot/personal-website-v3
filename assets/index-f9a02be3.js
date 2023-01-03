function Ic(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in i)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(i,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Ji,de,ml,ki,Mo,_l,Rr={},gl=[],Oc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function cn(i,e){for(var t in e)i[t]=e[t];return i}function vl(i){var e=i.parentNode;e&&e.removeChild(i)}function Zt(i,e,t){var n,r,s,o={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?Ji.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(s in i.defaultProps)o[s]===void 0&&(o[s]=i.defaultProps[s]);return zi(i,o,n,r,null)}function zi(i,e,t,n,r){var s={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++ml};return r==null&&de.vnode!=null&&de.vnode(s),s}function Fc(){return{current:null}}function Ct(i){return i.children}function Ht(i,e){this.props=i,this.context=e}function Wi(i,e){if(e==null)return i.__?Wi(i.__,i.__.__k.indexOf(i)+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?Wi(i):null}function xl(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return xl(i)}}function Os(i){(!i.__d&&(i.__d=!0)&&ki.push(i)&&!Dr.__r++||Mo!==de.debounceRendering)&&((Mo=de.debounceRendering)||setTimeout)(Dr)}function Dr(){for(var i;Dr.__r=ki.length;)i=ki.sort(function(e,t){return e.__v.__b-t.__v.__b}),ki=[],i.some(function(e){var t,n,r,s,o,a;e.__d&&(o=(s=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=cn({},s)).__v=s.__v+1,Js(a,s,r,t.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,n,o??Wi(s),s.__h),Sl(n,s),s.__e!=o&&xl(s)))})}function yl(i,e,t,n,r,s,o,a,u,c){var l,h,d,m,_,p,f,g=n&&n.__k||gl,w=g.length;for(t.__k=[],l=0;l<e.length;l++)if((m=t.__k[l]=(m=e[l])==null||typeof m=="boolean"?null:typeof m=="string"||typeof m=="number"||typeof m=="bigint"?zi(null,m,null,null,m):Array.isArray(m)?zi(Ct,{children:m},null,null,null):m.__b>0?zi(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)!=null){if(m.__=t,m.__b=t.__b+1,(d=g[l])===null||d&&m.key==d.key&&m.type===d.type)g[l]=void 0;else for(h=0;h<w;h++){if((d=g[h])&&m.key==d.key&&m.type===d.type){g[h]=void 0;break}d=null}Js(i,m,d=d||Rr,r,s,o,a,u,c),_=m.__e,(h=m.ref)&&d.ref!=h&&(f||(f=[]),d.ref&&f.push(d.ref,null,m),f.push(h,m.__c||_,m)),_!=null?(p==null&&(p=_),typeof m.type=="function"&&m.__k===d.__k?m.__d=u=bl(m,u,i):u=Ml(i,m,d,g,_,u),typeof t.type=="function"&&(t.__d=u)):u&&d.__e==u&&u.parentNode!=i&&(u=Wi(d))}for(t.__e=p,l=w;l--;)g[l]!=null&&Tl(g[l],g[l]);if(f)for(l=0;l<f.length;l++)wl(f[l],f[++l],f[++l])}function bl(i,e,t){for(var n,r=i.__k,s=0;r&&s<r.length;s++)(n=r[s])&&(n.__=i,e=typeof n.type=="function"?bl(n,e,t):Ml(t,n,n,r,n.__e,e));return e}function Wt(i,e){return e=e||[],i==null||typeof i=="boolean"||(Array.isArray(i)?i.some(function(t){Wt(t,e)}):e.push(i)),e}function Ml(i,e,t,n,r,s){var o,a,u;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(t==null||r!=s||r.parentNode==null)e:if(s==null||s.parentNode!==i)i.appendChild(r),o=null;else{for(a=s,u=0;(a=a.nextSibling)&&u<n.length;u+=1)if(a==r)break e;i.insertBefore(r,s),o=s}return o!==void 0?o:r.nextSibling}function Nc(i,e,t,n,r){var s;for(s in t)s==="children"||s==="key"||s in e||Ir(i,s,null,t[s],n);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||t[s]===e[s]||Ir(i,s,e[s],t[s],n)}function So(i,e,t){e[0]==="-"?i.setProperty(e,t):i[e]=t==null?"":typeof t!="number"||Oc.test(e)?t:t+"px"}function Ir(i,e,t,n,r){var s;e:if(e==="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||So(i.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||So(i.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in i?e.toLowerCase().slice(2):e.slice(2),i.l||(i.l={}),i.l[e+s]=t,t?n||i.addEventListener(e,s?To:wo,s):i.removeEventListener(e,s?To:wo,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e.indexOf("-")==-1?i.removeAttribute(e):i.setAttribute(e,t))}}function wo(i){this.l[i.type+!1](de.event?de.event(i):i)}function To(i){this.l[i.type+!0](de.event?de.event(i):i)}function Js(i,e,t,n,r,s,o,a,u){var c,l,h,d,m,_,p,f,g,w,M,E,S,P,I,v=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(u=t.__h,a=e.__e=t.__e,e.__h=null,s=[a]),(c=de.__b)&&c(e);try{e:if(typeof v=="function"){if(f=e.props,g=(c=v.contextType)&&n[c.__c],w=c?g?g.props.value:c.__:n,t.__c?p=(l=e.__c=t.__c).__=l.__E:("prototype"in v&&v.prototype.render?e.__c=l=new v(f,w):(e.__c=l=new Ht(f,w),l.constructor=v,l.render=kc),g&&g.sub(l),l.props=f,l.state||(l.state={}),l.context=w,l.__n=n,h=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),v.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=cn({},l.__s)),cn(l.__s,v.getDerivedStateFromProps(f,l.__s))),d=l.props,m=l.state,h)v.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(v.getDerivedStateFromProps==null&&f!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(f,w),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(f,l.__s,w)===!1||e.__v===t.__v){for(l.props=f,l.state=l.__s,e.__v!==t.__v&&(l.__d=!1),l.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(A){A&&(A.__=e)}),M=0;M<l._sb.length;M++)l.__h.push(l._sb[M]);l._sb=[],l.__h.length&&o.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(f,l.__s,w),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,m,_)})}if(l.context=w,l.props=f,l.__v=e,l.__P=i,E=de.__r,S=0,"prototype"in v&&v.prototype.render){for(l.state=l.__s,l.__d=!1,E&&E(e),c=l.render(l.props,l.state,l.context),P=0;P<l._sb.length;P++)l.__h.push(l._sb[P]);l._sb=[]}else do l.__d=!1,E&&E(e),c=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++S<25);l.state=l.__s,l.getChildContext!=null&&(n=cn(cn({},n),l.getChildContext())),h||l.getSnapshotBeforeUpdate==null||(_=l.getSnapshotBeforeUpdate(d,m)),I=c!=null&&c.type===Ct&&c.key==null?c.props.children:c,yl(i,Array.isArray(I)?I:[I],e,t,n,r,s,o,a,u),l.base=e.__e,e.__h=null,l.__h.length&&o.push(l),p&&(l.__E=l.__=null),l.__e=!1}else s==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Uc(t.__e,e,t,n,r,s,o,u);(c=de.diffed)&&c(e)}catch(A){e.__v=null,(u||s!=null)&&(e.__e=a,e.__h=!!u,s[s.indexOf(a)]=null),de.__e(A,e,t)}}function Sl(i,e){de.__c&&de.__c(e,i),i.some(function(t){try{i=t.__h,t.__h=[],i.some(function(n){n.call(t)})}catch(n){de.__e(n,t.__v)}})}function Uc(i,e,t,n,r,s,o,a){var u,c,l,h=t.props,d=e.props,m=e.type,_=0;if(m==="svg"&&(r=!0),s!=null){for(;_<s.length;_++)if((u=s[_])&&"setAttribute"in u==!!m&&(m?u.localName===m:u.nodeType===3)){i=u,s[_]=null;break}}if(i==null){if(m===null)return document.createTextNode(d);i=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,d.is&&d),s=null,a=!1}if(m===null)h===d||a&&i.data===d||(i.data=d);else{if(s=s&&Ji.call(i.childNodes),c=(h=t.props||Rr).dangerouslySetInnerHTML,l=d.dangerouslySetInnerHTML,!a){if(s!=null)for(h={},_=0;_<i.attributes.length;_++)h[i.attributes[_].name]=i.attributes[_].value;(l||c)&&(l&&(c&&l.__html==c.__html||l.__html===i.innerHTML)||(i.innerHTML=l&&l.__html||""))}if(Nc(i,d,h,r,a),l)e.__k=[];else if(_=e.props.children,yl(i,Array.isArray(_)?_:[_],e,t,n,r&&m!=="foreignObject",s,o,s?s[0]:t.__k&&Wi(t,0),a),s!=null)for(_=s.length;_--;)s[_]!=null&&vl(s[_]);a||("value"in d&&(_=d.value)!==void 0&&(_!==i.value||m==="progress"&&!_||m==="option"&&_!==h.value)&&Ir(i,"value",_,h.value,!1),"checked"in d&&(_=d.checked)!==void 0&&_!==i.checked&&Ir(i,"checked",_,h.checked,!1))}return i}function wl(i,e,t){try{typeof i=="function"?i(e):i.current=e}catch(n){de.__e(n,t)}}function Tl(i,e,t){var n,r;if(de.unmount&&de.unmount(i),(n=i.ref)&&(n.current&&n.current!==i.__e||wl(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){de.__e(s,e)}n.base=n.__P=null,i.__c=void 0}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&Tl(n[r],e,t||typeof i.type!="function");t||i.__e==null||vl(i.__e),i.__=i.__e=i.__d=void 0}function kc(i,e,t){return this.constructor(i,t)}function di(i,e,t){var n,r,s;de.__&&de.__(i,e),r=(n=typeof t=="function")?null:t&&t.__k||e.__k,s=[],Js(e,i=(!n&&t||e).__k=Zt(Ct,null,[i]),r||Rr,Rr,e.ownerSVGElement!==void 0,!n&&t?[t]:r?null:e.firstChild?Ji.call(e.childNodes):null,s,!n&&t?t:r?r.__e:e.firstChild,n),Sl(s,i)}function El(i,e){di(i,e,El)}function Al(i,e,t){var n,r,s,o=cn({},i.props);for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];return arguments.length>2&&(o.children=arguments.length>3?Ji.call(arguments,2):t),zi(i.type,o,n||i.key,r||i.ref,null)}function Cl(i,e){var t={__c:e="__cC"+_l++,__:i,Consumer:function(n,r){return n.children(r)},Provider:function(n){var r,s;return this.getChildContext||(r=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&r.some(Os)},this.sub=function(o){r.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){r.splice(r.indexOf(o),1),a&&a.call(o)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}Ji=gl.slice,de={__e:function(i,e,t,n){for(var r,s,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(i)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),o=r.__d),o)return r.__E=r}catch(a){i=a}throw i}},ml=0,Ht.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=cn({},this.state),typeof i=="function"&&(i=i(cn({},t),this.props)),i&&cn(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),Os(this))},Ht.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),Os(this))},Ht.prototype.render=Ct,ki=[],Dr.__r=0,_l=0;var Wn,je,Jr,Eo,fi=0,Ll=[],Er=[],Ao=de.__b,Co=de.__r,Lo=de.diffed,Po=de.__c,Ro=de.unmount;function xi(i,e){de.__h&&de.__h(je,i,fi||e),fi=0;var t=je.__H||(je.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({__V:Er}),t.__[i]}function Vt(i){return fi=1,Pl(Rl,i)}function Pl(i,e,t){var n=xi(Wn++,2);if(n.t=i,!n.__c&&(n.__=[t?t(e):Rl(void 0,e),function(s){var o=n.__N?n.__N[0]:n.__[0],a=n.t(o,s);o!==a&&(n.__N=[a,n.__[1]],n.__c.setState({}))}],n.__c=je,!je.u)){je.u=!0;var r=je.shouldComponentUpdate;je.shouldComponentUpdate=function(s,o,a){if(!n.__c.__H)return!0;var u=n.__c.__H.__.filter(function(l){return l.__c});if(u.every(function(l){return!l.__N}))return!r||r.call(this,s,o,a);var c=!1;return u.forEach(function(l){if(l.__N){var h=l.__[0];l.__=l.__N,l.__N=void 0,h!==l.__[0]&&(c=!0)}}),!(!c&&n.__c.props===s)&&(!r||r.call(this,s,o,a))}}return n.__N||n.__}function Zi(i,e){var t=xi(Wn++,3);!de.__s&&Ks(t.__H,e)&&(t.__=i,t.i=e,je.__H.__h.push(t))}function Ur(i,e){var t=xi(Wn++,4);!de.__s&&Ks(t.__H,e)&&(t.__=i,t.i=e,je.__h.push(t))}function zc(i){return fi=5,Zs(function(){return{current:i}},[])}function Bc(i,e,t){fi=6,Ur(function(){return typeof i=="function"?(i(e()),function(){return i(null)}):i?(i.current=e(),function(){return i.current=null}):void 0},t==null?t:t.concat(i))}function Zs(i,e){var t=xi(Wn++,7);return Ks(t.__H,e)?(t.__V=i(),t.i=e,t.__h=i,t.__V):t.__}function Gc(i,e){return fi=8,Zs(function(){return i},e)}function Vc(i){var e=je.context[i.__c],t=xi(Wn++,9);return t.c=i,e?(t.__==null&&(t.__=!0,e.sub(je)),e.props.value):i.__}function Hc(i,e){de.useDebugValue&&de.useDebugValue(e?e(i):i)}function Wc(){var i=xi(Wn++,11);if(!i.__){for(var e=je.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var t=e.__m||(e.__m=[0,0]);i.__="P"+t[0]+"-"+t[1]++}return i.__}function $c(){for(var i;i=Ll.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(Ar),i.__H.__h.forEach(Fs),i.__H.__h=[]}catch(e){i.__H.__h=[],de.__e(e,i.__v)}}de.__b=function(i){je=null,Ao&&Ao(i)},de.__r=function(i){Co&&Co(i),Wn=0;var e=(je=i.__c).__H;e&&(Jr===je?(e.__h=[],je.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Er,t.__N=t.i=void 0})):(e.__h.forEach(Ar),e.__h.forEach(Fs),e.__h=[])),Jr=je},de.diffed=function(i){Lo&&Lo(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(Ll.push(e)!==1&&Eo===de.requestAnimationFrame||((Eo=de.requestAnimationFrame)||jc)($c)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Er&&(t.__=t.__V),t.i=void 0,t.__V=Er})),Jr=je=null},de.__c=function(i,e){e.some(function(t){try{t.__h.forEach(Ar),t.__h=t.__h.filter(function(n){return!n.__||Fs(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],de.__e(n,t.__v)}}),Po&&Po(i,e)},de.unmount=function(i){Ro&&Ro(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{Ar(n)}catch(r){e=r}}),t.__H=void 0,e&&de.__e(e,t.__v))};var Do=typeof requestAnimationFrame=="function";function jc(i){var e,t=function(){clearTimeout(n),Do&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,100);Do&&(e=requestAnimationFrame(t))}function Ar(i){var e=je,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),je=e}function Fs(i){var e=je;i.__c=i.__(),je=e}function Ks(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function Rl(i,e){return typeof e=="function"?e(i):e}var qc={};function ir(i,e){for(var t in e)i[t]=e[t];return i}function Xc(i,e,t){var n,r=/(?:\?([^#]*))?(#.*)?$/,s=i.match(r),o={};if(s&&s[1])for(var a=s[1].split("&"),u=0;u<a.length;u++){var c=a[u].split("=");o[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}i=Ns(i.replace(r,"")),e=Ns(e||"");for(var l=Math.max(i.length,e.length),h=0;h<l;h++)if(e[h]&&e[h].charAt(0)===":"){var d=e[h].replace(/(^:|[+*?]+$)/g,""),m=(e[h].match(/[+*?]+$/)||qc)[0]||"",_=~m.indexOf("+"),p=~m.indexOf("*"),f=i[h]||"";if(!f&&!p&&(m.indexOf("?")<0||_)){n=!1;break}if(o[d]=decodeURIComponent(f),_||p){o[d]=i.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==i[h]){n=!1;break}return(t.default===!0||n!==!1)&&o}function Yc(i,e){return i.rank<e.rank?1:i.rank>e.rank?-1:i.index-e.index}function Jc(i,e){return i.index=e,i.rank=function(t){return t.props.default?0:Ns(t.props.path).map(Zc).join("")}(i),i.props}function Ns(i){return i.replace(/(^\/+|\/+$)/g,"").split("/")}function Zc(i){return i.charAt(0)==":"?1+"*+?".indexOf(i.charAt(i.length-1))||4:5}var Kc={},Fn=[],Io=[],St=null,Dl={url:Qs()},Qc=Cl(Dl);function Qs(){var i;return""+((i=St&&St.location?St.location:St&&St.getCurrentLocation?St.getCurrentLocation():typeof location<"u"?location:Kc).pathname||"")+(i.search||"")}function eu(i,e){return e===void 0&&(e=!1),typeof i!="string"&&i.url&&(e=i.replace,i=i.url),function(t){for(var n=Fn.length;n--;)if(Fn[n].canRoute(t))return!0;return!1}(i)&&function(t,n){n===void 0&&(n="push"),St&&St[n]?St[n](t):typeof history<"u"&&history[n+"State"]&&history[n+"State"](null,null,t)}(i,e?"replace":"push"),Il(i)}function Il(i){for(var e=!1,t=0;t<Fn.length;t++)Fn[t].routeTo(i)&&(e=!0);return e}function tu(i){if(i&&i.getAttribute){var e=i.getAttribute("href"),t=i.getAttribute("target");if(e&&e.match(/^\//g)&&(!t||t.match(/^_?self$/i)))return eu(e)}}function nu(i){return i.stopImmediatePropagation&&i.stopImmediatePropagation(),i.stopPropagation&&i.stopPropagation(),i.preventDefault(),!1}function iu(i){if(!(i.ctrlKey||i.metaKey||i.altKey||i.shiftKey||i.button)){var e=i.target;do if(e.localName==="a"&&e.getAttribute("href")){if(e.hasAttribute("data-native")||e.hasAttribute("native"))return;if(tu(e))return nu(i)}while(e=e.parentNode)}}var Oo=!1;function Ol(i){i.history&&(St=i.history),this.state={url:i.url||Qs()}}ir(Ol.prototype=new Ht,{shouldComponentUpdate:function(i){return i.static!==!0||i.url!==this.props.url||i.onChange!==this.props.onChange},canRoute:function(i){var e=Wt(this.props.children);return this.g(e,i)!==void 0},routeTo:function(i){this.setState({url:i});var e=this.canRoute(i);return this.p||this.forceUpdate(),e},componentWillMount:function(){this.p=!0},componentDidMount:function(){var i=this;Oo||(Oo=!0,St||addEventListener("popstate",function(){Il(Qs())}),addEventListener("click",iu)),Fn.push(this),St&&(this.u=St.listen(function(e){var t=e.location||e;i.routeTo(""+(t.pathname||"")+(t.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),Fn.splice(Fn.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(i,e){i=i.filter(Jc).sort(Yc);for(var t=0;t<i.length;t++){var n=i[t],r=Xc(e,n.props.path,n.props);if(r)return[n,r]}},render:function(i,e){var t,n,r=i.onChange,s=e.url,o=this.c,a=this.g(Wt(i.children),s);if(a&&(n=Al(a[0],ir(ir({url:s,matches:t=a[1]},t),{key:void 0,ref:void 0}))),s!==(o&&o.url)){ir(Dl,o=this.c={url:s,previous:o&&o.url,current:n,path:n?n.props.path:null,matches:t}),o.router=this,o.active=n?[n]:[];for(var u=Io.length;u--;)Io[u]({});typeof r=="function"&&r(o)}return Zt(Qc.Provider,{value:o},n)}});function Fl(i,e){for(var t in e)i[t]=e[t];return i}function Us(i,e){for(var t in i)if(t!=="__source"&&!(t in e))return!0;for(var n in e)if(n!=="__source"&&i[n]!==e[n])return!0;return!1}function Zr(i,e){return i===e&&(i!==0||1/i==1/e)||i!=i&&e!=e}function ks(i){this.props=i}function ru(i,e){function t(r){var s=this.props.ref,o=s==r.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,r)||!o:Us(this.props,r)}function n(r){return this.shouldComponentUpdate=t,Zt(i,r)}return n.displayName="Memo("+(i.displayName||i.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n}(ks.prototype=new Ht).isPureReactComponent=!0,ks.prototype.shouldComponentUpdate=function(i,e){return Us(this.props,i)||Us(this.state,e)};var Fo=de.__b;de.__b=function(i){i.type&&i.type.__f&&i.ref&&(i.props.ref=i.ref,i.ref=null),Fo&&Fo(i)};var su=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ou(i){function e(t){var n=Fl({},t);return delete n.ref,i(n,t.ref||null)}return e.$$typeof=su,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(i.displayName||i.name)+")",e}var No=function(i,e){return i==null?null:Wt(Wt(i).map(e))},au={map:No,forEach:No,count:function(i){return i?Wt(i).length:0},only:function(i){var e=Wt(i);if(e.length!==1)throw"Children.only";return e[0]},toArray:Wt},lu=de.__e;de.__e=function(i,e,t,n){if(i.then){for(var r,s=e;s=s.__;)if((r=s.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(i,e)}lu(i,e,t,n)};var Uo=de.unmount;function Nl(i,e,t){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),i.__c.__H=null),(i=Fl({},i)).__c!=null&&(i.__c.__P===t&&(i.__c.__P=e),i.__c=null),i.__k=i.__k&&i.__k.map(function(n){return Nl(n,e,t)})),i}function Ul(i,e,t){return i&&(i.__v=null,i.__k=i.__k&&i.__k.map(function(n){return Ul(n,e,t)}),i.__c&&i.__c.__P===e&&(i.__e&&t.insertBefore(i.__e,i.__d),i.__c.__e=!0,i.__c.__P=t)),i}function Cr(){this.__u=0,this.t=null,this.__b=null}function kl(i){var e=i.__.__c;return e&&e.__a&&e.__a(i)}function cu(i){var e,t,n;function r(s){if(e||(e=i()).then(function(o){t=o.default||o},function(o){n=o}),n)throw n;if(!t)throw e;return Zt(t,s)}return r.displayName="Lazy",r.__f=!0,r}function Oi(){this.u=null,this.o=null}de.unmount=function(i){var e=i.__c;e&&e.__R&&e.__R(),e&&i.__h===!0&&(i.type=null),Uo&&Uo(i)},(Cr.prototype=new Ht).__c=function(i,e){var t=e.__c,n=this;n.t==null&&(n.t=[]),n.t.push(t);var r=kl(n.__v),s=!1,o=function(){s||(s=!0,t.__R=null,r?r(a):a())};t.__R=o;var a=function(){if(!--n.__u){if(n.state.__a){var c=n.state.__a;n.__v.__k[0]=Ul(c,c.__c.__P,c.__c.__O)}var l;for(n.setState({__a:n.__b=null});l=n.t.pop();)l.forceUpdate()}},u=e.__h===!0;n.__u++||u||n.setState({__a:n.__b=n.__v.__k[0]}),i.then(o,o)},Cr.prototype.componentWillUnmount=function(){this.t=[]},Cr.prototype.render=function(i,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Nl(this.__b,t,n.__O=n.__P)}this.__b=null}var r=e.__a&&Zt(Ct,null,i.fallback);return r&&(r.__h=null),[Zt(Ct,null,e.__a?null:i.children),r]};var ko=function(i,e,t){if(++t[1]===t[0]&&i.o.delete(e),i.props.revealOrder&&(i.props.revealOrder[0]!=="t"||!i.o.size))for(t=i.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;i.u=t=t[2]}};function uu(i){return this.getChildContext=function(){return i.context},i.children}function hu(i){var e=this,t=i.i;e.componentWillUnmount=function(){di(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),i.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,r){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),di(Zt(uu,{context:e.context},i.__v),e.l)):e.l&&e.componentWillUnmount()}function du(i,e){var t=Zt(hu,{__v:i,i:e});return t.containerInfo=e,t}(Oi.prototype=new Ht).__a=function(i){var e=this,t=kl(e.__v),n=e.o.get(i);return n[0]++,function(r){var s=function(){e.props.revealOrder?(n.push(r),ko(e,i,n)):r()};t?t(s):s()}},Oi.prototype.render=function(i){this.u=null,this.o=new Map;var e=Wt(i.children);i.revealOrder&&i.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return i.children},Oi.prototype.componentDidUpdate=Oi.prototype.componentDidMount=function(){var i=this;this.o.forEach(function(e,t){ko(i,t,e)})};var zl=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,fu=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,pu=typeof document<"u",mu=function(i){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(i)};function _u(i,e,t){return e.__k==null&&(e.textContent=""),di(i,e),typeof t=="function"&&t(),i?i.__c:null}function gu(i,e,t){return El(i,e),typeof t=="function"&&t(),i?i.__c:null}Ht.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(i){Object.defineProperty(Ht.prototype,i,{configurable:!0,get:function(){return this["UNSAFE_"+i]},set:function(e){Object.defineProperty(this,i,{configurable:!0,writable:!0,value:e})}})});var zo=de.event;function vu(){}function xu(){return this.cancelBubble}function yu(){return this.defaultPrevented}de.event=function(i){return zo&&(i=zo(i)),i.persist=vu,i.isPropagationStopped=xu,i.isDefaultPrevented=yu,i.nativeEvent=i};var Bl,Bo={configurable:!0,get:function(){return this.class}},Go=de.vnode;de.vnode=function(i){var e=i.type,t=i.props,n=t;if(typeof e=="string"){var r=e.indexOf("-")===-1;for(var s in n={},t){var o=t[s];pu&&s==="children"&&e==="noscript"||s==="value"&&"defaultValue"in t&&o==null||(s==="defaultValue"&&"value"in t&&t.value==null?s="value":s==="download"&&o===!0?o="":/ondoubleclick/i.test(s)?s="ondblclick":/^onchange(textarea|input)/i.test(s+e)&&!mu(t.type)?s="oninput":/^onfocus$/i.test(s)?s="onfocusin":/^onblur$/i.test(s)?s="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)?s=s.toLowerCase():r&&fu.test(s)?s=s.replace(/[A-Z0-9]/g,"-$&").toLowerCase():o===null&&(o=void 0),/^oninput$/i.test(s)&&(s=s.toLowerCase(),n[s]&&(s="oninputCapture")),n[s]=o)}e=="select"&&n.multiple&&Array.isArray(n.value)&&(n.value=Wt(t.children).forEach(function(a){a.props.selected=n.value.indexOf(a.props.value)!=-1})),e=="select"&&n.defaultValue!=null&&(n.value=Wt(t.children).forEach(function(a){a.props.selected=n.multiple?n.defaultValue.indexOf(a.props.value)!=-1:n.defaultValue==a.props.value})),i.props=n,t.class!=t.className&&(Bo.enumerable="className"in t,t.className!=null&&(n.class=t.className),Object.defineProperty(n,"className",Bo))}i.$$typeof=zl,Go&&Go(i)};var Vo=de.__r;de.__r=function(i){Vo&&Vo(i),Bl=i.__c};var bu={ReactCurrentDispatcher:{current:{readContext:function(i){return Bl.__n[i.__c].props.value}}}};function Mu(i){return Zt.bind(null,i)}function Gl(i){return!!i&&i.$$typeof===zl}function Su(i){return Gl(i)?Al.apply(null,arguments):i}function wu(i){return!!i.__k&&(di(null,i),!0)}function Tu(i){return i&&(i.base||i.nodeType===1&&i)||null}var Eu=function(i,e){return i(e)},Au=function(i,e){return i(e)},Cu=Ct;function Vl(i){i()}function Lu(i){return i}function Pu(){return[!1,Vl]}var Ru=Ur;function Du(i,e){var t=e(),n=Vt({h:{__:t,v:e}}),r=n[0].h,s=n[1];return Ur(function(){r.__=t,r.v=e,Zr(r.__,e())||s({h:r})},[i,t,e]),Zi(function(){return Zr(r.__,r.v())||s({h:r}),i(function(){Zr(r.__,r.v())||s({h:r})})},[i]),t}var Nn={useState:Vt,useId:Wc,useReducer:Pl,useEffect:Zi,useLayoutEffect:Ur,useInsertionEffect:Ru,useTransition:Pu,useDeferredValue:Lu,useSyncExternalStore:Du,startTransition:Vl,useRef:zc,useImperativeHandle:Bc,useMemo:Zs,useCallback:Gc,useContext:Vc,useDebugValue:Hc,version:"17.0.2",Children:au,render:_u,hydrate:gu,unmountComponentAtNode:wu,createPortal:du,createElement:Zt,createContext:Cl,createFactory:Mu,cloneElement:Su,createRef:Fc,Fragment:Ct,isValidElement:Gl,findDOMNode:Tu,Component:Ht,PureComponent:ks,memo:ru,forwardRef:ou,flushSync:Au,unstable_batchedUpdates:Eu,StrictMode:Cu,Suspense:Cr,SuspenseList:Oi,lazy:cu,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:bu},Hl={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ho=Nn.createContext&&Nn.createContext(Hl),_n=globalThis&&globalThis.__assign||function(){return _n=Object.assign||function(i){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},_n.apply(this,arguments)},Iu=globalThis&&globalThis.__rest||function(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t};function Wl(i){return i&&i.map(function(e,t){return Nn.createElement(e.tag,_n({key:t},e.attr),Wl(e.child))})}function eo(i){return function(e){return Nn.createElement(Ou,_n({attr:_n({},i.attr)},e),Wl(i.child))}}function Ou(i){var e=function(t){var n=i.attr,r=i.size,s=i.title,o=Iu(i,["attr","size","title"]),a=r||t.size||"1em",u;return t.className&&(u=t.className),i.className&&(u=(u?u+" ":"")+i.className),Nn.createElement("svg",_n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:u,style:_n(_n({color:i.color||t.color},t.style),i.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Nn.createElement("title",null,s),i.children)};return Ho!==void 0?Nn.createElement(Ho.Consumer,null,function(t){return e(t)}):e(Hl)}function Fu(i){return eo({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(i)}function Nu(i){return eo({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"}},{tag:"path",attr:{d:"M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"}}]})(i)}function Uu(i){return eo({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"}}]})(i)}var ku=0;function le(i,e,t,n,r){var s,o,a={};for(o in e)o=="ref"?s=e[o]:a[o]=e[o];var u={type:i,props:a,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ku,__source:r,__self:n};if(typeof i=="function"&&(s=i.defaultProps))for(o in s)a[o]===void 0&&(a[o]=s[o]);return de.vnode&&de.vnode(u),u}function to(){return le("div",{id:"navBar",className:"bg-red-700 w-screen h-12 border-b-4 border-red-900 text-white relative",children:[le("div",{id:"links",className:"hidden p-2 absolute top-0 left-0 sm:flex gap-2",children:[le("a",{href:"https://github.com/Apollo-Dot",target:"_blank",children:le(Fu,{size:"25"})}),le("a",{href:"https://www.twitch.tv/apollo_dot",target:"_blank",children:le(Nu,{size:"25"})}),le("a",{href:"https://www.youtube.com/@apollo_dot4586",target:"_blank",children:le(Uu,{size:"25"})})]}),le("a",{href:"/",children:le("h1",{className:"text-4xl text-center font-extrabold",children:"Apollo_Dot"})})]})}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const no="148",zu=0,Wo=1,Bu=2,$l=1,Gu=2,Fi=3,zn=0,Ot=1,io=2,rr=3,gn=0,ui=1,$o=2,jo=3,qo=4,Vu=5,ai=100,Hu=101,Wu=102,Xo=103,Yo=104,$u=200,ju=201,qu=202,Xu=203,jl=204,ql=205,Yu=206,Ju=207,Zu=208,Ku=209,Qu=210,eh=0,th=1,nh=2,zs=3,ih=4,rh=5,sh=6,oh=7,Xl=0,ah=1,lh=2,un=0,ch=1,uh=2,hh=3,dh=4,fh=5,Yl=300,pi=301,mi=302,Bs=303,Gs=304,kr=306,Vs=1e3,Bt=1001,Hs=1002,ft=1003,Jo=1004,Kr=1005,It=1006,ph=1007,$i=1008,Bn=1009,mh=1010,_h=1011,Jl=1012,gh=1013,Dn=1014,In=1015,ji=1016,vh=1017,xh=1018,hi=1020,yh=1021,bh=1022,Gt=1023,Mh=1024,Sh=1025,Un=1026,_i=1027,wh=1028,Th=1029,Eh=1030,Ah=1031,Ch=1033,Qr=33776,es=33777,ts=33778,ns=33779,Zo=35840,Ko=35841,Qo=35842,ea=35843,Lh=36196,ta=37492,na=37496,ia=37808,ra=37809,sa=37810,oa=37811,aa=37812,la=37813,ca=37814,ua=37815,ha=37816,da=37817,fa=37818,pa=37819,ma=37820,_a=37821,ga=36492,Gn=3e3,Ve=3001,Ph=3200,Rh=3201,Zl=0,Dh=1,qt="srgb",qi="srgb-linear",is=7680,Ih=519,va=35044,xa="300 es",Ws=1035;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ya=1234567;const Bi=Math.PI/180,Or=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ot[i&255]+ot[i>>8&255]+ot[i>>16&255]+ot[i>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[n&255]+ot[n>>8&255]+ot[n>>16&255]+ot[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function ro(i,e){return(i%e+e)%e}function Oh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Fh(i,e,t){return i!==e?(t-i)/(e-i):0}function Gi(i,e,t){return(1-t)*i+t*e}function Nh(i,e,t,n){return Gi(i,e,1-Math.exp(-t*n))}function Uh(i,e=1){return e-Math.abs(ro(i,e*2)-e)}function kh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Bh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gh(i,e){return i+Math.random()*(e-i)}function Vh(i){return i*(.5-Math.random())}function Hh(i){i!==void 0&&(ya=i);let e=ya+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wh(i){return i*Bi}function $h(i){return i*Or}function $s(i){return(i&i-1)===0&&i!==0}function jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qh(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),u=o(t/2),c=s((e+n)/2),l=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*l,u*h,u*d,a*c);break;case"YZY":i.set(u*d,a*l,u*h,a*c);break;case"ZXZ":i.set(u*h,u*d,a*l,a*c);break;case"XZX":i.set(a*l,u*_,u*m,a*c);break;case"YXY":i.set(u*m,a*l,u*_,a*c);break;case"ZYZ":i.set(u*_,u*m,a*l,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xh=Object.freeze({__proto__:null,DEG2RAD:Bi,RAD2DEG:Or,generateUUID:bi,clamp:_t,euclideanModulo:ro,mapLinear:Oh,inverseLerp:Fh,lerp:Gi,damp:Nh,pingpong:Uh,smoothstep:kh,smootherstep:zh,randInt:Bh,randFloat:Gh,randFloatSpread:Vh,seededRandom:Hh,degToRad:Wh,radToDeg:$h,isPowerOfTwo:$s,ceilPowerOfTwo:jh,floorPowerOfTwo:Fr,setQuaternionFromProperEuler:qh,normalize:pt,denormalize:Ni});class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,u,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=s,l[5]=u,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],c=n[1],l=n[4],h=n[7],d=n[2],m=n[5],_=n[8],p=r[0],f=r[3],g=r[6],w=r[1],M=r[4],E=r[7],S=r[2],P=r[5],I=r[8];return s[0]=o*p+a*w+u*S,s[3]=o*f+a*M+u*P,s[6]=o*g+a*E+u*I,s[1]=c*p+l*w+h*S,s[4]=c*f+l*M+h*P,s[7]=c*g+l*E+h*I,s[2]=d*p+m*w+_*S,s[5]=d*f+m*M+_*P,s[8]=d*g+m*E+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8];return t*o*l-t*a*c-n*s*l+n*a*u+r*s*c-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],h=l*o-a*c,d=a*u-l*s,m=c*s-o*u,_=t*h+n*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=h*p,e[1]=(r*c-l*n)*p,e[2]=(a*n-r*o)*p,e[3]=d*p,e[4]=(l*t-r*u)*p,e[5]=(r*s-a*t)*p,e[6]=m*p,e[7]=(n*u-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const u=Math.cos(s),c=Math.sin(s);return this.set(n*u,n*c,-n*(u*o+c*a)+o+e,-r*c,r*u,-r*(-c*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rs.makeScale(e,t)),this}rotate(e){return this.premultiply(rs.makeRotation(-e)),this}translate(e,t){return this.premultiply(rs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rs=new Tt;function Kl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ss={[qt]:{[qi]:kn},[qi]:{[qt]:Lr}},ht={legacyMode:!0,get workingColorSpace(){return qi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(ss[e]&&ss[e][t]!==void 0){const n=ss[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ke={r:0,g:0,b:0},Nt={h:0,s:0,l:0},sr={h:0,s:0,l:0};function os(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function or(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=ro(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=os(o,s,e+1/3),this.g=os(o,s,e),this.b=os(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ht.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ht.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const u=parseFloat(s[1])/360,c=parseFloat(s[2])/100,l=parseFloat(s[3])/100;return n(s[4]),this.setHSL(u,c,l,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ht.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ht.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=qt){const n=Ql[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return ht.fromWorkingColorSpace(or(this,Ke),e),_t(Ke.r*255,0,255)<<16^_t(Ke.g*255,0,255)<<8^_t(Ke.b*255,0,255)<<0}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(or(this,Ke),t);const n=Ke.r,r=Ke.g,s=Ke.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let u,c;const l=(a+o)/2;if(a===o)u=0,c=0;else{const h=o-a;switch(c=l<=.5?h/(o+a):h/(2-o-a),o){case n:u=(r-s)/h+(r<s?6:0);break;case r:u=(s-n)/h+2;break;case s:u=(n-r)/h+4;break}u/=6}return e.h=u,e.s=c,e.l=l,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(or(this,Ke),t),e.r=Ke.r,e.g=Ke.g,e.b=Ke.b,e}getStyle(e=qt){return ht.fromWorkingColorSpace(or(this,Ke),e),e!==qt?`color(${e} ${Ke.r} ${Ke.g} ${Ke.b})`:`rgb(${Ke.r*255|0},${Ke.g*255|0},${Ke.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Nt),Nt.h+=e,Nt.s+=t,Nt.l+=n,this.setHSL(Nt.h,Nt.s,Nt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nt),e.getHSL(sr);const n=Gi(Nt.h,sr.h,t),r=Gi(Nt.s,sr.s,t),s=Gi(Nt.l,sr.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ge.NAMES=Ql;let $n;class ec{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$n===void 0&&($n=Xi("canvas")),$n.width=e.width,$n.height=e.height;const n=$n.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$n}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=kn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class tc{constructor(e=null){this.isSource=!0,this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(as(r[o].image)):s.push(as(r[o]))}else s=as(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function as(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yh=0;class Et extends yi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=Bt,r=Bt,s=It,o=$i,a=Gt,u=Bn,c=Et.DEFAULT_ANISOTROPY,l=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=bi(),this.name="",this.source=new tc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case Hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case Hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Yl;Et.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,r=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,c=u[0],l=u[4],h=u[8],d=u[1],m=u[5],_=u[9],p=u[2],f=u[6],g=u[10];if(Math.abs(l-d)<.01&&Math.abs(h-p)<.01&&Math.abs(_-f)<.01){if(Math.abs(l+d)<.1&&Math.abs(h+p)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(m+1)/2,S=(g+1)/2,P=(l+d)/4,I=(h+p)/4,v=(_+f)/4;return M>E&&M>S?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=P/n,s=I/n):E>S?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=P/r,s=v/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=I/s,r=v/s),this.set(n,r,s,t),this}let w=Math.sqrt((f-_)*(f-_)+(h-p)*(h-p)+(d-l)*(d-l));return Math.abs(w)<.001&&(w=1),this.x=(f-_)/w,this.y=(h-p)/w,this.z=(d-l)/w,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vn extends yi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Et(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:It,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nc extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jh extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let u=n[r+0],c=n[r+1],l=n[r+2],h=n[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=u,e[t+1]=c,e[t+2]=l,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(h!==p||u!==d||c!==m||l!==_){let f=1-a;const g=u*d+c*m+l*_+h*p,w=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const S=Math.sqrt(M),P=Math.atan2(S,g*w);f=Math.sin(f*P)/S,a=Math.sin(a*P)/S}const E=a*w;if(u=u*f+d*E,c=c*f+m*E,l=l*f+_*E,h=h*f+p*E,f===1-a){const S=1/Math.sqrt(u*u+c*c+l*l+h*h);u*=S,c*=S,l*=S,h*=S}}e[t]=u,e[t+1]=c,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],u=n[r+1],c=n[r+2],l=n[r+3],h=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+l*h+u*m-c*d,e[t+1]=u*_+l*d+c*h-a*m,e[t+2]=c*_+l*m+a*d-u*h,e[t+3]=l*_-a*h-u*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,u=Math.sin,c=a(n/2),l=a(r/2),h=a(s/2),d=u(n/2),m=u(r/2),_=u(s/2);switch(o){case"XYZ":this._x=d*l*h+c*m*_,this._y=c*m*h-d*l*_,this._z=c*l*_+d*m*h,this._w=c*l*h-d*m*_;break;case"YXZ":this._x=d*l*h+c*m*_,this._y=c*m*h-d*l*_,this._z=c*l*_-d*m*h,this._w=c*l*h+d*m*_;break;case"ZXY":this._x=d*l*h-c*m*_,this._y=c*m*h+d*l*_,this._z=c*l*_+d*m*h,this._w=c*l*h-d*m*_;break;case"ZYX":this._x=d*l*h-c*m*_,this._y=c*m*h+d*l*_,this._z=c*l*_-d*m*h,this._w=c*l*h+d*m*_;break;case"YZX":this._x=d*l*h+c*m*_,this._y=c*m*h+d*l*_,this._z=c*l*_-d*m*h,this._w=c*l*h-d*m*_;break;case"XZY":this._x=d*l*h-c*m*_,this._y=c*m*h-d*l*_,this._z=c*l*_+d*m*h,this._w=c*l*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],u=t[9],c=t[2],l=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(l-u)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(l-u)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(u+l)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(u+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,u=t._y,c=t._z,l=t._w;return this._x=n*l+o*a+r*c-s*u,this._y=r*l+o*u+s*a-n*c,this._z=s*l+o*c+n*u-r*a,this._w=o*l-n*a-r*u-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),l=Math.atan2(c,a),h=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,u=e.w,c=u*t+o*r-a*n,l=u*n+a*t-s*r,h=u*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=c*u+d*-s+l*-a-h*-o,this.y=l*u+d*-o+h*-s-c*-a,this.z=h*u+d*-a+c*-o-l*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,u=t.z;return this.x=r*u-s*a,this.y=s*o-n*u,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ls.copy(this).projectOnVector(e),this.sub(ls)}reflect(e){return this.sub(ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ls=new D,ba=new Ki;class Qi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let u=0,c=e.length;u<c;u+=3){const l=e[u],h=e[u+1],d=e[u+2];l<t&&(t=l),h<n&&(n=h),d<r&&(r=d),l>s&&(s=l),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let u=0,c=e.count;u<c;u++){const l=e.getX(u),h=e.getY(u),d=e.getZ(u);l<t&&(t=l),h<n&&(n=h),d<r&&(r=d),l>s&&(s=l),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Mn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Mn)}else n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox),cs.applyMatrix4(e.matrixWorld),this.union(cs);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),ar.subVectors(this.max,Ti),jn.subVectors(e.a,Ti),qn.subVectors(e.b,Ti),Xn.subVectors(e.c,Ti),dn.subVectors(qn,jn),fn.subVectors(Xn,qn),Sn.subVectors(jn,Xn);let t=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Sn.z,Sn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Sn.z,0,-Sn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Sn.y,Sn.x,0];return!us(t,jn,qn,Xn,ar)||(t=[1,0,0,0,1,0,0,0,1],!us(t,jn,qn,Xn,ar))?!1:(lr.crossVectors(dn,fn),t=[lr.x,lr.y,lr.z],us(t,jn,qn,Xn,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Mn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new D,new D,new D,new D,new D,new D,new D,new D],Mn=new D,cs=new Qi,jn=new D,qn=new D,Xn=new D,dn=new D,fn=new D,Sn=new D,Ti=new D,ar=new D,lr=new D,wn=new D;function us(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wn.fromArray(i,s);const a=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),u=e.dot(wn),c=t.dot(wn),l=n.dot(wn);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>a)return!1}return!0}const Zh=new Qi,Ei=new D,hs=new D;class so{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ei.subVectors(e,this.center);const t=Ei.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ei,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ei.copy(e.center).add(hs)),this.expandByPoint(Ei.copy(e.center).sub(hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new D,ds=new D,cr=new D,pn=new D,fs=new D,ur=new D,ps=new D;class Kh{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.direction).multiplyScalar(t).add(this.origin),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ds.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(ds);const s=e.distanceTo(t)*.5,o=-this.direction.dot(cr),a=pn.dot(this.direction),u=-pn.dot(cr),c=pn.lengthSq(),l=Math.abs(1-o*o);let h,d,m,_;if(l>0)if(h=o*u-a,d=o*a-u,_=s*l,h>=0)if(d>=-_)if(d<=_){const p=1/l;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*u)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*u)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*u)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-u),s),m=-h*h+d*(d+2*u)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-u),s),m=d*(d+2*u)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-u),s),m=-h*h+d*(d+2*u)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*u)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(cr).multiplyScalar(d).add(ds),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),r=nn.dot(nn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,u=n+o;return a<0&&u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,u;const c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(s=(e.min.y-d.y)*l,o=(e.max.y-d.y)*l):(s=(e.max.y-d.y)*l,o=(e.min.y-d.y)*l),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,u=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,u=(e.min.z-d.z)*h),n>u||a>r)||((a>n||n!==n)&&(n=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,r,s){fs.subVectors(t,e),ur.subVectors(n,e),ps.crossVectors(fs,ur);let o=this.direction.dot(ps),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,e);const u=a*this.direction.dot(ur.crossVectors(pn,ur));if(u<0)return null;const c=a*this.direction.dot(fs.cross(pn));if(c<0||u+c>o)return null;const l=-a*pn.dot(ps);return l<0?null:this.at(l/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,u,c,l,h,d,m,_,p,f){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=u,g[2]=c,g[6]=l,g[10]=h,g[14]=d,g[3]=m,g[7]=_,g[11]=p,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Yn.setFromMatrixColumn(e,0).length(),s=1/Yn.setFromMatrixColumn(e,1).length(),o=1/Yn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(r),c=Math.sin(r),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*l,m=o*h,_=a*l,p=a*h;t[0]=u*l,t[4]=-u*h,t[8]=c,t[1]=m+_*c,t[5]=d-p*c,t[9]=-a*u,t[2]=p-d*c,t[6]=_+m*c,t[10]=o*u}else if(e.order==="YXZ"){const d=u*l,m=u*h,_=c*l,p=c*h;t[0]=d+p*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*l,t[9]=-a,t[2]=m*a-_,t[6]=p+d*a,t[10]=o*u}else if(e.order==="ZXY"){const d=u*l,m=u*h,_=c*l,p=c*h;t[0]=d-p*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*l,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const d=o*l,m=o*h,_=a*l,p=a*h;t[0]=u*l,t[4]=_*c-m,t[8]=d*c+p,t[1]=u*h,t[5]=p*c+d,t[9]=m*c-_,t[2]=-c,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const d=o*u,m=o*c,_=a*u,p=a*c;t[0]=u*l,t[4]=p-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*l,t[9]=-a*l,t[2]=-c*l,t[6]=m*h+_,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*u,m=o*c,_=a*u,p=a*c;t[0]=u*l,t[4]=-h,t[8]=c*l,t[1]=d*h+p,t[5]=o*l,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*l,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qh,e,ed)}lookAt(e,t,n){const r=this.elements;return yt.subVectors(e,t),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),mn.crossVectors(n,yt),mn.lengthSq()===0&&(Math.abs(n.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),mn.crossVectors(n,yt)),mn.normalize(),hr.crossVectors(yt,mn),r[0]=mn.x,r[4]=hr.x,r[8]=yt.x,r[1]=mn.y,r[5]=hr.y,r[9]=yt.y,r[2]=mn.z,r[6]=hr.z,r[10]=yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],u=n[8],c=n[12],l=n[1],h=n[5],d=n[9],m=n[13],_=n[2],p=n[6],f=n[10],g=n[14],w=n[3],M=n[7],E=n[11],S=n[15],P=r[0],I=r[4],v=r[8],A=r[12],F=r[1],W=r[5],ne=r[9],N=r[13],y=r[2],C=r[6],z=r[10],Y=r[14],U=r[3],X=r[7],J=r[11],k=r[15];return s[0]=o*P+a*F+u*y+c*U,s[4]=o*I+a*W+u*C+c*X,s[8]=o*v+a*ne+u*z+c*J,s[12]=o*A+a*N+u*Y+c*k,s[1]=l*P+h*F+d*y+m*U,s[5]=l*I+h*W+d*C+m*X,s[9]=l*v+h*ne+d*z+m*J,s[13]=l*A+h*N+d*Y+m*k,s[2]=_*P+p*F+f*y+g*U,s[6]=_*I+p*W+f*C+g*X,s[10]=_*v+p*ne+f*z+g*J,s[14]=_*A+p*N+f*Y+g*k,s[3]=w*P+M*F+E*y+S*U,s[7]=w*I+M*W+E*C+S*X,s[11]=w*v+M*ne+E*z+S*J,s[15]=w*A+M*N+E*Y+S*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],u=e[9],c=e[13],l=e[2],h=e[6],d=e[10],m=e[14],_=e[3],p=e[7],f=e[11],g=e[15];return _*(+s*u*h-r*c*h-s*a*d+n*c*d+r*a*m-n*u*m)+p*(+t*u*m-t*c*d+s*o*d-r*o*m+r*c*l-s*u*l)+f*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*l-n*c*l)+g*(-r*a*l-t*u*h+t*a*d+r*o*h-n*o*d+n*u*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],h=e[9],d=e[10],m=e[11],_=e[12],p=e[13],f=e[14],g=e[15],w=h*f*c-p*d*c+p*u*m-a*f*m-h*u*g+a*d*g,M=_*d*c-l*f*c-_*u*m+o*f*m+l*u*g-o*d*g,E=l*p*c-_*h*c+_*a*m-o*p*m-l*a*g+o*h*g,S=_*h*u-l*p*u-_*a*d+o*p*d+l*a*f-o*h*f,P=t*w+n*M+r*E+s*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=w*I,e[1]=(p*d*s-h*f*s-p*r*m+n*f*m+h*r*g-n*d*g)*I,e[2]=(a*f*s-p*u*s+p*r*c-n*f*c-a*r*g+n*u*g)*I,e[3]=(h*u*s-a*d*s-h*r*c+n*d*c+a*r*m-n*u*m)*I,e[4]=M*I,e[5]=(l*f*s-_*d*s+_*r*m-t*f*m-l*r*g+t*d*g)*I,e[6]=(_*u*s-o*f*s-_*r*c+t*f*c+o*r*g-t*u*g)*I,e[7]=(o*d*s-l*u*s+l*r*c-t*d*c-o*r*m+t*u*m)*I,e[8]=E*I,e[9]=(_*h*s-l*p*s-_*n*m+t*p*m+l*n*g-t*h*g)*I,e[10]=(o*p*s-_*a*s+_*n*c-t*p*c-o*n*g+t*a*g)*I,e[11]=(l*a*s-o*h*s-l*n*c+t*h*c+o*n*m-t*a*m)*I,e[12]=S*I,e[13]=(l*p*r-_*h*r+_*n*d-t*p*d-l*n*f+t*h*f)*I,e[14]=(_*a*r-o*p*r-_*n*u+t*p*u+o*n*f-t*a*f)*I,e[15]=(o*h*r-l*a*r+l*n*u-t*h*u-o*n*d+t*a*d)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,u=e.z,c=s*o,l=s*a;return this.set(c*o+n,c*a-r*u,c*u+r*a,0,c*a+r*u,l*a+n,l*u-r*o,0,c*u-r*a,l*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,u=t._w,c=s+s,l=o+o,h=a+a,d=s*c,m=s*l,_=s*h,p=o*l,f=o*h,g=a*h,w=u*c,M=u*l,E=u*h,S=n.x,P=n.y,I=n.z;return r[0]=(1-(p+g))*S,r[1]=(m+E)*S,r[2]=(_-M)*S,r[3]=0,r[4]=(m-E)*P,r[5]=(1-(d+g))*P,r[6]=(f+w)*P,r[7]=0,r[8]=(_+M)*I,r[9]=(f-w)*I,r[10]=(1-(d+p))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Yn.set(r[0],r[1],r[2]).length();const o=Yn.set(r[4],r[5],r[6]).length(),a=Yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ut.copy(this);const c=1/s,l=1/o,h=1/a;return Ut.elements[0]*=c,Ut.elements[1]*=c,Ut.elements[2]*=c,Ut.elements[4]*=l,Ut.elements[5]*=l,Ut.elements[6]*=l,Ut.elements[8]*=h,Ut.elements[9]*=h,Ut.elements[10]*=h,t.setFromRotationMatrix(Ut),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,u=2*s/(t-e),c=2*s/(n-r),l=(t+e)/(t-e),h=(n+r)/(n-r),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=u,a[4]=0,a[8]=l,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,u=1/(t-e),c=1/(n-r),l=1/(o-s),h=(t+e)*u,d=(n+r)*c,m=(o+s)*l;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*l,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yn=new D,Ut=new Je,Qh=new D(0,0,0),ed=new D(1,1,1),mn=new D,hr=new D,yt=new D,Ma=new Je,Sa=new Ki;class er{constructor(e=0,t=0,n=0,r=er.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],u=r[1],c=r[5],l=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ma.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ma,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sa.setFromEuler(this),this.setFromQuaternion(Sa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}er.DefaultOrder="XYZ";er.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let td=0;const wa=new D,Jn=new Ki,rn=new Je,dr=new D,Ai=new D,nd=new D,id=new Ki,Ta=new D(1,0,0),Ea=new D(0,1,0),Aa=new D(0,0,1),rd={type:"added"},Ca={type:"removed"};class gt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DefaultUp.clone();const e=new D,t=new er,n=new Ki,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new Tt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=gt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DefaultMatrixWorldAutoUpdate,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(Ta,e)}rotateY(e){return this.rotateOnAxis(Ea,e)}rotateZ(e){return this.rotateOnAxis(Aa,e)}translateOnAxis(e,t){return wa.copy(e).applyQuaternion(this.quaternion),this.position.add(wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ta,e)}translateY(e){return this.translateOnAxis(Ea,e)}translateZ(e){return this.translateOnAxis(Aa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dr.copy(e):dr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ai,dr,this.up):rn.lookAt(dr,Ai,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),Jn.setFromRotationMatrix(rn),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ca)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ca)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,e,nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){const h=u[c];s(e.shapes,h)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(s(e.materials,this.material[u]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),c=o(e.textures),l=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const u=[];for(const c in a){const l=a[c];delete l.metadata,u.push(l)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DefaultUp=new D(0,1,0);gt.DefaultMatrixAutoUpdate=!0;gt.DefaultMatrixWorldAutoUpdate=!0;const kt=new D,sn=new D,ms=new D,on=new D,Zn=new D,Kn=new D,La=new D,_s=new D,gs=new D,vs=new D;class ln{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kt.subVectors(e,t),r.cross(kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){kt.subVectors(r,t),sn.subVectors(n,t),ms.subVectors(e,t);const o=kt.dot(kt),a=kt.dot(sn),u=kt.dot(ms),c=sn.dot(sn),l=sn.dot(ms),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(c*u-a*l)*d,_=(o*l-a*u)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,on),on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,n,r,s,o,a,u){return this.getBarycoord(e,t,n,r,on),u.set(0,0),u.addScaledVector(s,on.x),u.addScaledVector(o,on.y),u.addScaledVector(a,on.z),u}static isFrontFacing(e,t,n,r){return kt.subVectors(n,t),sn.subVectors(e,t),kt.cross(sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),kt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ln.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Zn.subVectors(r,n),Kn.subVectors(s,n),_s.subVectors(e,n);const u=Zn.dot(_s),c=Kn.dot(_s);if(u<=0&&c<=0)return t.copy(n);gs.subVectors(e,r);const l=Zn.dot(gs),h=Kn.dot(gs);if(l>=0&&h<=l)return t.copy(r);const d=u*h-l*c;if(d<=0&&u>=0&&l<=0)return o=u/(u-l),t.copy(n).addScaledVector(Zn,o);vs.subVectors(e,s);const m=Zn.dot(vs),_=Kn.dot(vs);if(_>=0&&m<=_)return t.copy(s);const p=m*c-u*_;if(p<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Kn,a);const f=l*_-m*h;if(f<=0&&h-l>=0&&m-_>=0)return La.subVectors(s,r),a=(h-l)/(h-l+(m-_)),t.copy(r).addScaledVector(La,a);const g=1/(f+p+d);return o=p*g,a=d*g,t.copy(n).addScaledVector(Zn,o).addScaledVector(Kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let sd=0;class tr extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=ui,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jl,this.blendDst=ql,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rc extends tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ye=new D,fr=new Oe;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=va,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix3(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==va&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class sc extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class oc extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let od=0;const Rt=new Je,xs=new gt,Qn=new D,bt=new Qi,Ci=new Qi,rt=new D;class hn extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kl(e)?oc:sc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return xs.lookAt(e),xs.updateMatrix(),this.applyMatrix4(xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];bt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(rt.addVectors(bt.min,Ci.min),bt.expandByPoint(rt),rt.addVectors(bt.max,Ci.max),bt.expandByPoint(rt)):(bt.expandByPoint(Ci.min),bt.expandByPoint(Ci.max))}bt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],u=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)rt.fromBufferAttribute(a,c),u&&(Qn.fromBufferAttribute(e,c),rt.add(Qn)),r=Math.max(r,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,c=[],l=[];for(let F=0;F<a;F++)c[F]=new D,l[F]=new D;const h=new D,d=new D,m=new D,_=new Oe,p=new Oe,f=new Oe,g=new D,w=new D;function M(F,W,ne){h.fromArray(r,F*3),d.fromArray(r,W*3),m.fromArray(r,ne*3),_.fromArray(o,F*2),p.fromArray(o,W*2),f.fromArray(o,ne*2),d.sub(h),m.sub(h),p.sub(_),f.sub(_);const N=1/(p.x*f.y-f.x*p.y);isFinite(N)&&(g.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(N),w.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(N),c[F].add(g),c[W].add(g),c[ne].add(g),l[F].add(w),l[W].add(w),l[ne].add(w))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let F=0,W=E.length;F<W;++F){const ne=E[F],N=ne.start,y=ne.count;for(let C=N,z=N+y;C<z;C+=3)M(n[C+0],n[C+1],n[C+2])}const S=new D,P=new D,I=new D,v=new D;function A(F){I.fromArray(s,F*3),v.copy(I);const W=c[F];S.copy(W),S.sub(I.multiplyScalar(I.dot(W))).normalize(),P.crossVectors(v,W);const N=P.dot(l[F])<0?-1:1;u[F*4]=S.x,u[F*4+1]=S.y,u[F*4+2]=S.z,u[F*4+3]=N}for(let F=0,W=E.length;F<W;++F){const ne=E[F],N=ne.start,y=ne.count;for(let C=N,z=N+y;C<z;C+=3)A(n[C+0]),A(n[C+1]),A(n[C+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,u=new D,c=new D,l=new D,h=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),l.subVectors(o,s),h.subVectors(r,s),l.cross(h),a.fromBufferAttribute(n,_),u.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),a.add(l),u.add(l),c.add(l),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,u.x,u.y,u.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),l.subVectors(o,s),h.subVectors(r,s),l.cross(h),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(a,u){const c=a.array,l=a.itemSize,h=a.normalized,d=new c.constructor(u.length*l);let m=0,_=0;for(let p=0,f=u.length;p<f;p++){a.isInterleavedBufferAttribute?m=u[p]*a.data.stride+a.offset:m=u[p]*l;for(let g=0;g<l;g++)d[_++]=c[m++]}return new Jt(d,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,r=this.attributes;for(const a in r){const u=r[a],c=e(u,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const u=[],c=s[a];for(let l=0,h=c.length;l<h;l++){const d=c[l],m=e(d,n);u.push(m)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],l=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];l.push(m.toJSON(e.data))}l.length>0&&(r[u]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const l=r[c];this.setAttribute(c,l.clone(t))}const s=e.morphAttributes;for(const c in s){const l=[],h=s[c];for(let d=0,m=h.length;d<m;d++)l.push(h[d].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,l=o.length;c<l;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pa=new Je,ei=new Kh,ys=new so,Li=new D,Pi=new D,Ri=new D,bs=new D,pr=new D,mr=new Oe,_r=new Oe,gr=new Oe,Ms=new D,vr=new D;class Yt extends gt{constructor(e=new hn,t=new rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pr.set(0,0,0);for(let u=0,c=s.length;u<c;u++){const l=a[u],h=s[u];l!==0&&(bs.fromBufferAttribute(h,e),o?pr.addScaledVector(bs,l):pr.addScaledVector(bs.sub(t),l))}t.add(pr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(s),e.ray.intersectsSphere(ys)===!1)||(Pa.copy(s).invert(),ei.copy(e.ray).applyMatrix4(Pa),n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,u=n.attributes.position,c=n.attributes.uv,l=n.attributes.uv2,h=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=h.length;m<_;m++){const p=h[m],f=r[p.materialIndex],g=Math.max(p.start,d.start),w=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=g,E=w;M<E;M+=3){const S=a.getX(M),P=a.getX(M+1),I=a.getX(M+2);o=xr(this,f,e,ei,c,l,S,P,I),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,f=_;p<f;p+=3){const g=a.getX(p),w=a.getX(p+1),M=a.getX(p+2);o=xr(this,r,e,ei,c,l,g,w,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(r))for(let m=0,_=h.length;m<_;m++){const p=h[m],f=r[p.materialIndex],g=Math.max(p.start,d.start),w=Math.min(u.count,Math.min(p.start+p.count,d.start+d.count));for(let M=g,E=w;M<E;M+=3){const S=M,P=M+1,I=M+2;o=xr(this,f,e,ei,c,l,S,P,I),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),_=Math.min(u.count,d.start+d.count);for(let p=m,f=_;p<f;p+=3){const g=p,w=p+1,M=p+2;o=xr(this,r,e,ei,c,l,g,w,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function ad(i,e,t,n,r,s,o,a){let u;if(e.side===Ot?u=n.intersectTriangle(o,s,r,!0,a):u=n.intersectTriangle(r,s,o,e.side===zn,a),u===null)return null;vr.copy(a),vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:i}}function xr(i,e,t,n,r,s,o,a,u){i.getVertexPosition(o,Li),i.getVertexPosition(a,Pi),i.getVertexPosition(u,Ri);const c=ad(i,e,t,n,Li,Pi,Ri,Ms);if(c){r&&(mr.fromBufferAttribute(r,o),_r.fromBufferAttribute(r,a),gr.fromBufferAttribute(r,u),c.uv=ln.getUV(Ms,Li,Pi,Ri,mr,_r,gr,new Oe)),s&&(mr.fromBufferAttribute(s,o),_r.fromBufferAttribute(s,a),gr.fromBufferAttribute(s,u),c.uv2=ln.getUV(Ms,Li,Pi,Ri,mr,_r,gr,new Oe));const l={a:o,b:a,c:u,normal:new D,materialIndex:0};ln.getNormal(Li,Pi,Ri,l.normal),c.face=l}return c}class nr extends hn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],c=[],l=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(h,2));function _(p,f,g,w,M,E,S,P,I,v,A){const F=E/I,W=S/v,ne=E/2,N=S/2,y=P/2,C=I+1,z=v+1;let Y=0,U=0;const X=new D;for(let J=0;J<z;J++){const k=J*W-N;for(let V=0;V<C;V++){const K=V*F-ne;X[p]=K*w,X[f]=k*M,X[g]=y,c.push(X.x,X.y,X.z),X[p]=0,X[f]=0,X[g]=P>0?1:-1,l.push(X.x,X.y,X.z),h.push(V/I),h.push(1-J/v),Y+=1}}for(let J=0;J<v;J++)for(let k=0;k<I;k++){const V=d+k+C*J,K=d+k+C*(J+1),ee=d+(k+1)+C*(J+1),re=d+(k+1)+C*J;u.push(V,K,re),u.push(K,ee,re),U+=6}a.addGroup(m,U,A),m+=U,d+=Y}}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function dt(i){const e={};for(let t=0;t<i.length;t++){const n=gi(i[t]);for(const r in n)e[r]=n[r]}return e}function ld(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ac(i){return i.getRenderTarget()===null&&i.outputEncoding===Ve?qt:qi}const cd={clone:gi,merge:dt};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lc extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends lc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/u,t-=o.offsetY*n/c,r*=o.width/u,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ti=-90,ni=1;class dd extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new wt(ti,ni,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new wt(ti,ni,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new wt(ti,ni,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new wt(ti,ni,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const u=new wt(ti,ni,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const c=new wt(ti,ni,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,u,c]=this.children,l=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=un,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(l),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class oo extends Et{constructor(e,t,n,r,s,o,a,u,c,l){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,r,s,o,a,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fd extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nr(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:gn});s.uniforms.tEquirect.value=t;const o=new Yt(r,s),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=It),new dd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ss=new D,pd=new D,md=new Tt;class Tn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ss.subVectors(n,t).cross(pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ss),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||md.getNormalMatrix(e),r=this.coplanarPoint(Ss).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new so,yr=new D;class ao{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,s=new Tn,o=new Tn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],u=n[4],c=n[5],l=n[6],h=n[7],d=n[8],m=n[9],_=n[10],p=n[11],f=n[12],g=n[13],w=n[14],M=n[15];return t[0].setComponents(a-r,h-u,p-d,M-f).normalize(),t[1].setComponents(a+r,h+u,p+d,M+f).normalize(),t[2].setComponents(a+s,h+c,p+m,M+g).normalize(),t[3].setComponents(a-s,h-c,p-m,M-g).normalize(),t[4].setComponents(a-o,h-l,p-_,M-w).normalize(),t[5].setComponents(a+o,h+l,p+_,M+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(yr.x=r.normal.x>0?e.max.x:e.min.x,yr.y=r.normal.y>0?e.max.y:e.min.y,yr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function _d(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,l){const h=c.array,d=c.usage,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,l,h){const d=l.array,m=l.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),l.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=n.get(c);l&&(i.deleteBuffer(l.buffer),n.delete(c))}function u(c,l){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,l)):h.version<c.version&&(s(h.buffer,c,l),h.version=c.version)}return{get:o,remove:a,update:u}}class lo extends hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),u=Math.floor(r),c=a+1,l=u+1,h=e/a,d=t/u,m=[],_=[],p=[],f=[];for(let g=0;g<l;g++){const w=g*d-o;for(let M=0;M<c;M++){const E=M*h-s;_.push(E,-w,0),p.push(0,0,1),f.push(M/a),f.push(1-g/u)}}for(let g=0;g<u;g++)for(let w=0;w<a;w++){const M=w+c*g,E=w+c*(g+1),S=w+1+c*(g+1),P=w+1+c*g;m.push(M,E,P),m.push(E,S,P)}this.setIndex(m),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(p,3)),this.setAttribute("uv",new At(f,2))}static fromJSON(e){return new lo(e.width,e.height,e.widthSegments,e.heightSegments)}}var gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd="vec3 transformed = vec3( position );",wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Ed=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Ad=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nd=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$d=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ef=`#ifdef USE_GRADIENTMAP
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
}`,tf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,of=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,af=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ff=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,pf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cf=`#ifdef USE_MORPHNORMALS
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
#endif`,Lf=`#ifdef USE_MORPHTARGETS
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
#endif`,Pf=`#ifdef USE_MORPHTARGETS
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
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Df=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Kf=`float getShadowMask() {
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
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,lp=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,cp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,up=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,hp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,dp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,fp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,pp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Sp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Tp=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Fp=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,zp=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Gp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Hp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xp=`uniform float rotation;
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
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:gd,alphamap_pars_fragment:vd,alphatest_fragment:xd,alphatest_pars_fragment:yd,aomap_fragment:bd,aomap_pars_fragment:Md,begin_vertex:Sd,beginnormal_vertex:wd,bsdfs:Td,iridescence_fragment:Ed,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Rd,color_fragment:Dd,color_pars_fragment:Id,color_pars_vertex:Od,color_vertex:Fd,common:Nd,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:kd,displacementmap_pars_vertex:zd,displacementmap_vertex:Bd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Vd,encodings_fragment:Hd,encodings_pars_fragment:Wd,envmap_fragment:$d,envmap_common_pars_fragment:jd,envmap_pars_fragment:qd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:af,envmap_vertex:Yd,fog_vertex:Jd,fog_pars_vertex:Zd,fog_fragment:Kd,fog_pars_fragment:Qd,gradientmap_pars_fragment:ef,lightmap_fragment:tf,lightmap_pars_fragment:nf,lights_lambert_fragment:rf,lights_lambert_pars_fragment:sf,lights_pars_begin:of,lights_toon_fragment:lf,lights_toon_pars_fragment:cf,lights_phong_fragment:uf,lights_phong_pars_fragment:hf,lights_physical_fragment:df,lights_physical_pars_fragment:ff,lights_fragment_begin:pf,lights_fragment_maps:mf,lights_fragment_end:_f,logdepthbuf_fragment:gf,logdepthbuf_pars_fragment:vf,logdepthbuf_pars_vertex:xf,logdepthbuf_vertex:yf,map_fragment:bf,map_pars_fragment:Mf,map_particle_fragment:Sf,map_particle_pars_fragment:wf,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:Ef,morphcolor_vertex:Af,morphnormal_vertex:Cf,morphtarget_pars_vertex:Lf,morphtarget_vertex:Pf,normal_fragment_begin:Rf,normal_fragment_maps:Df,normal_pars_fragment:If,normal_pars_vertex:Of,normal_vertex:Ff,normalmap_pars_fragment:Nf,clearcoat_normal_fragment_begin:Uf,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:zf,iridescence_pars_fragment:Bf,output_fragment:Gf,packing:Vf,premultiplied_alpha_fragment:Hf,project_vertex:Wf,dithering_fragment:$f,dithering_pars_fragment:jf,roughnessmap_fragment:qf,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:Jf,shadowmap_vertex:Zf,shadowmask_pars_fragment:Kf,skinbase_vertex:Qf,skinning_pars_vertex:ep,skinning_vertex:tp,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:rp,tonemapping_fragment:sp,tonemapping_pars_fragment:op,transmission_fragment:ap,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:up,uv_vertex:hp,uv2_pars_fragment:dp,uv2_pars_vertex:fp,uv2_vertex:pp,worldpos_vertex:mp,background_vert:_p,background_frag:gp,backgroundCube_vert:vp,backgroundCube_frag:xp,cube_vert:yp,cube_frag:bp,depth_vert:Mp,depth_frag:Sp,distanceRGBA_vert:wp,distanceRGBA_frag:Tp,equirect_vert:Ep,equirect_frag:Ap,linedashed_vert:Cp,linedashed_frag:Lp,meshbasic_vert:Pp,meshbasic_frag:Rp,meshlambert_vert:Dp,meshlambert_frag:Ip,meshmatcap_vert:Op,meshmatcap_frag:Fp,meshnormal_vert:Np,meshnormal_frag:Up,meshphong_vert:kp,meshphong_frag:zp,meshphysical_vert:Bp,meshphysical_frag:Gp,meshtoon_vert:Vp,meshtoon_frag:Hp,points_vert:Wp,points_frag:$p,shadow_vert:jp,shadow_frag:qp,sprite_vert:Xp,sprite_frag:Yp},ie={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Tt},uv2Transform:{value:new Tt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}}},Xt={basic:{uniforms:dt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:dt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:dt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:dt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:dt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:dt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:dt([ie.points,ie.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:dt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:dt([ie.common,ie.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:dt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:dt([ie.sprite,ie.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:dt([ie.common,ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:dt([ie.lights,ie.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Xt.physical={uniforms:dt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const br={r:0,b:0,g:0};function Jp(i,e,t,n,r,s,o){const a=new Ge(0);let u=s===!0?0:1,c,l,h=null,d=0,m=null;function _(f,g){let w=!1,M=g.isScene===!0?g.background:null;M&&M.isTexture&&(M=(g.backgroundBlurriness>0?t:e).get(M));const E=i.xr,S=E.getSession&&E.getSession();S&&S.environmentBlendMode==="additive"&&(M=null),M===null?p(a,u):M&&M.isColor&&(p(M,1),w=!0),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===kr)?(l===void 0&&(l=new Yt(new nr(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:gi(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,I,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=M.encoding!==Ve,(h!==M||d!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,m=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Yt(new lo(2,2),new Hn({name:"BackgroundMaterial",uniforms:gi(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=M.encoding!==Ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,g){f.getRGB(br,ac(i)),n.buffers.color.setClear(br.r,br.g,br.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(f,g=1){a.set(f),u=g,p(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(f){u=f,p(a,u)},render:_}}function Zp(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},u=f(null);let c=u,l=!1;function h(y,C,z,Y,U){let X=!1;if(o){const J=p(Y,z,C);c!==J&&(c=J,m(c.object)),X=g(y,Y,z,U),X&&w(y,Y,z,U)}else{const J=C.wireframe===!0;(c.geometry!==Y.id||c.program!==z.id||c.wireframe!==J)&&(c.geometry=Y.id,c.program=z.id,c.wireframe=J,X=!0)}U!==null&&t.update(U,34963),(X||l)&&(l=!1,v(y,C,z,Y),U!==null&&i.bindBuffer(34963,t.get(U).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(y){return n.isWebGL2?i.bindVertexArray(y):s.bindVertexArrayOES(y)}function _(y){return n.isWebGL2?i.deleteVertexArray(y):s.deleteVertexArrayOES(y)}function p(y,C,z){const Y=z.wireframe===!0;let U=a[y.id];U===void 0&&(U={},a[y.id]=U);let X=U[C.id];X===void 0&&(X={},U[C.id]=X);let J=X[Y];return J===void 0&&(J=f(d()),X[Y]=J),J}function f(y){const C=[],z=[],Y=[];for(let U=0;U<r;U++)C[U]=0,z[U]=0,Y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:Y,object:y,attributes:{},index:null}}function g(y,C,z,Y){const U=c.attributes,X=C.attributes;let J=0;const k=z.getAttributes();for(const V in k)if(k[V].location>=0){const ee=U[V];let re=X[V];if(re===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),ee===void 0||ee.attribute!==re||re&&ee.data!==re.data)return!0;J++}return c.attributesNum!==J||c.index!==Y}function w(y,C,z,Y){const U={},X=C.attributes;let J=0;const k=z.getAttributes();for(const V in k)if(k[V].location>=0){let ee=X[V];ee===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor));const re={};re.attribute=ee,ee&&ee.data&&(re.data=ee.data),U[V]=re,J++}c.attributes=U,c.attributesNum=J,c.index=Y}function M(){const y=c.newAttributes;for(let C=0,z=y.length;C<z;C++)y[C]=0}function E(y){S(y,0)}function S(y,C){const z=c.newAttributes,Y=c.enabledAttributes,U=c.attributeDivisors;z[y]=1,Y[y]===0&&(i.enableVertexAttribArray(y),Y[y]=1),U[y]!==C&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](y,C),U[y]=C)}function P(){const y=c.newAttributes,C=c.enabledAttributes;for(let z=0,Y=C.length;z<Y;z++)C[z]!==y[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function I(y,C,z,Y,U,X){n.isWebGL2===!0&&(z===5124||z===5125)?i.vertexAttribIPointer(y,C,z,U,X):i.vertexAttribPointer(y,C,z,Y,U,X)}function v(y,C,z,Y){if(n.isWebGL2===!1&&(y.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const U=Y.attributes,X=z.getAttributes(),J=C.defaultAttributeValues;for(const k in X){const V=X[k];if(V.location>=0){let K=U[k];if(K===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const ee=K.normalized,re=K.itemSize,j=t.get(K);if(j===void 0)continue;const Pe=j.buffer,ue=j.type,ye=j.bytesPerElement;if(K.isInterleavedBufferAttribute){const ce=K.data,Ue=ce.stride,we=K.offset;if(ce.isInstancedInterleavedBuffer){for(let xe=0;xe<V.locationSize;xe++)S(V.location+xe,ce.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<V.locationSize;xe++)E(V.location+xe);i.bindBuffer(34962,Pe);for(let xe=0;xe<V.locationSize;xe++)I(V.location+xe,re/V.locationSize,ue,ee,Ue*ye,(we+re/V.locationSize*xe)*ye)}else{if(K.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)S(V.location+ce,K.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ce=0;ce<V.locationSize;ce++)E(V.location+ce);i.bindBuffer(34962,Pe);for(let ce=0;ce<V.locationSize;ce++)I(V.location+ce,re/V.locationSize,ue,ee,re*ye,re/V.locationSize*ce*ye)}}else if(J!==void 0){const ee=J[k];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(V.location,ee);break;case 3:i.vertexAttrib3fv(V.location,ee);break;case 4:i.vertexAttrib4fv(V.location,ee);break;default:i.vertexAttrib1fv(V.location,ee)}}}}P()}function A(){ne();for(const y in a){const C=a[y];for(const z in C){const Y=C[z];for(const U in Y)_(Y[U].object),delete Y[U];delete C[z]}delete a[y]}}function F(y){if(a[y.id]===void 0)return;const C=a[y.id];for(const z in C){const Y=C[z];for(const U in Y)_(Y[U].object),delete Y[U];delete C[z]}delete a[y.id]}function W(y){for(const C in a){const z=a[C];if(z[y.id]===void 0)continue;const Y=z[y.id];for(const U in Y)_(Y[U].object),delete Y[U];delete z[y.id]}}function ne(){N(),l=!0,c!==u&&(c=u,m(c.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:F,releaseStatesOfProgram:W,initAttributes:M,enableAttribute:E,disableUnusedAttributes:P}}function Kp(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,l){i.drawArrays(s,c,l),t.update(l,s,1)}function u(c,l,h){if(h===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,l,h),t.update(l,s,h)}this.setMode=o,this.render=a,this.renderInstances=u}function Qp(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const u=s(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const c=o||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),d=i.getParameter(35660),m=i.getParameter(3379),_=i.getParameter(34076),p=i.getParameter(34921),f=i.getParameter(36347),g=i.getParameter(36348),w=i.getParameter(36349),M=d>0,E=o||e.has("OES_texture_float"),S=M&&E,P=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:S,maxSamples:P}}function em(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Tn,a=new Tt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const _=h.length!==0||d||n!==0||r;return r=d,t=l(h,m,0),n=h.length,_},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,m){const _=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,g=i.get(h);if(!r||_===null||_.length===0||s&&!f)s?l(null):c();else{const w=s?0:n,M=w*4;let E=g.clippingState||null;u.value=E,E=l(_,d,M,m);for(let S=0;S!==M;++S)E[S]=t[S];g.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,d,m,_){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=u.value,_!==!0||f===null){const g=m+p*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<g)&&(f=new Float32Array(g));for(let M=0,E=m;M!==p;++M,E+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(f,E),f[E+3]=o.constant}u.value=f,u.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function tm(i){let e=new WeakMap;function t(o,a){return a===Bs?o.mapping=pi:a===Gs&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Bs||a===Gs)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new fd(u.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class nm extends lc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=l*this.view.offsetY,u=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=4,Ra=[.125,.215,.35,.446,.526,.582],An=20,ws=new nm,Da=new Ge;let Ts=null;const En=(1+Math.sqrt(5))/2,ri=1/En,Ia=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,En,ri),new D(0,En,-ri),new D(ri,0,En),new D(-ri,0,En),new D(En,ri,0),new D(-En,ri,0)];class Oa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ts=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ts),e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ts=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:ji,format:Gt,encoding:Gn,depthBuffer:!1},r=Fa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=im(s)),this._blurMaterial=rm(s,e,t)}return r}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,ws)}_sceneToCubeUV(e,t,n,r){const a=new wt(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor(Da),l.toneMapping=un,l.autoClear=!1;const m=new rc({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),_=new Yt(new nr,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Da),p=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(a.up.set(0,u[g],0),a.lookAt(c[g],0,0)):w===1?(a.up.set(0,0,u[g]),a.lookAt(0,c[g],0)):(a.up.set(0,u[g],0),a.lookAt(0,0,c[g]));const M=this._cubeSize;Mr(r,w*M,g>2?M:0,M,M),l.setRenderTarget(r),p&&l.render(_,a),l.render(e,a)}_.geometry.dispose(),_.material.dispose(),l.toneMapping=d,l.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===pi||e.mapping===mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const u=this._cubeSize;Mr(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,ws)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ia[(r-1)%Ia.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new Yt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*An-1),p=s/_,f=isFinite(s)?1+Math.floor(l*p):An;f>An&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${An}`);const g=[];let w=0;for(let I=0;I<An;++I){const v=I/p,A=Math.exp(-v*v/2);g.push(A),I===0?w+=A:I<f&&(w+=2*A)}for(let I=0;I<g.length;I++)g[I]=g[I]/w;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const E=this._sizeLods[r],S=3*E*(r>M-ci?r-M+ci:0),P=4*(this._cubeSize-E);Mr(t,S,P,3*E,2*E),u.setRenderTarget(t),u.render(h,ws)}}function im(i){const e=[],t=[],n=[];let r=i;const s=i-ci+1+Ra.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let u=1/a;o>i-ci?u=Ra[o-i+ci-1]:o===0&&(u=0),n.push(u);const c=1/(a-2),l=-c,h=1+c,d=[l,l,h,l,h,h,l,l,h,h,l,h],m=6,_=6,p=3,f=2,g=1,w=new Float32Array(p*_*m),M=new Float32Array(f*_*m),E=new Float32Array(g*_*m);for(let P=0;P<m;P++){const I=P%3*2/3-1,v=P>2?0:-1,A=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];w.set(A,p*_*P),M.set(d,f*_*P);const F=[P,P,P,P,P,P];E.set(F,g*_*P)}const S=new hn;S.setAttribute("position",new Jt(w,p)),S.setAttribute("uv",new Jt(M,f)),S.setAttribute("faceIndex",new Jt(E,g)),e.push(S),r>ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fa(i,e,t){const n=new Vn(i,e,t);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function rm(i,e,t){const n=new Float32Array(An),r=new D(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:co(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Na(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ua(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function co(){return`

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
	`}function sm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,c=u===Bs||u===Gs,l=u===pi||u===mi;if(c||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Oa(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||l&&h&&r(h)){t===null&&(t=new Oa(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let u=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&u++;return u===c}function s(a){const u=a.target;u.removeEventListener("dispose",s);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function om(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function am(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function u(h){const d=h.attributes;for(const _ in d)e.update(d[_],34962);const m=h.morphAttributes;for(const _ in m){const p=m[_];for(let f=0,g=p.length;f<g;f++)e.update(p[f],34962)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let p=0;if(m!==null){const w=m.array;p=m.version;for(let M=0,E=w.length;M<E;M+=3){const S=w[M+0],P=w[M+1],I=w[M+2];d.push(S,P,P,I,I,S)}}else{const w=_.array;p=_.version;for(let M=0,E=w.length/3-1;M<E;M+=3){const S=M+0,P=M+1,I=M+2;d.push(S,P,P,I,I,S)}}const f=new(Kl(d)?oc:sc)(d,1);f.version=p;const g=s.get(h);g&&e.remove(g),s.set(h,f)}function l(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:u,getWireframeAttribute:l}}function lm(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,u;function c(d){a=d.type,u=d.bytesPerElement}function l(d,m){i.drawElements(s,m,a,d*u),t.update(m,s,1)}function h(d,m,_){if(_===0)return;let p,f;if(r)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*u,_),t.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=l,this.renderInstances=h}function cm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function um(i,e){return i[0]-e[0]}function hm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function dm(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new $e,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function u(c,l,h,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=p!==void 0?p.length:0;let g=s.get(l);if(g===void 0||g.count!==f){let z=function(){y.dispose(),s.delete(l),l.removeEventListener("dispose",z)};var _=z;g!==void 0&&g.texture.dispose();const E=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,P=l.morphAttributes.color!==void 0,I=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],A=l.morphAttributes.color||[];let F=0;E===!0&&(F=1),S===!0&&(F=2),P===!0&&(F=3);let W=l.attributes.position.count*F,ne=1;W>e.maxTextureSize&&(ne=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const N=new Float32Array(W*ne*4*f),y=new nc(N,W,ne,f);y.type=In,y.needsUpdate=!0;const C=F*4;for(let Y=0;Y<f;Y++){const U=I[Y],X=v[Y],J=A[Y],k=W*ne*4*Y;for(let V=0;V<U.count;V++){const K=V*C;E===!0&&(o.fromBufferAttribute(U,V),N[k+K+0]=o.x,N[k+K+1]=o.y,N[k+K+2]=o.z,N[k+K+3]=0),S===!0&&(o.fromBufferAttribute(X,V),N[k+K+4]=o.x,N[k+K+5]=o.y,N[k+K+6]=o.z,N[k+K+7]=0),P===!0&&(o.fromBufferAttribute(J,V),N[k+K+8]=o.x,N[k+K+9]=o.y,N[k+K+10]=o.z,N[k+K+11]=J.itemSize===4?o.w:1)}}g={count:f,texture:y,size:new Oe(W,ne)},s.set(l,g),l.addEventListener("dispose",z)}let w=0;for(let E=0;E<m.length;E++)w+=m[E];const M=l.morphTargetsRelative?1:1-w;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",m),d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let f=n[l.id];if(f===void 0||f.length!==p){f=[];for(let S=0;S<p;S++)f[S]=[S,0];n[l.id]=f}for(let S=0;S<p;S++){const P=f[S];P[0]=S,P[1]=m[S]}f.sort(hm);for(let S=0;S<8;S++)S<p&&f[S][1]?(a[S][0]=f[S][0],a[S][1]=f[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(um);const g=l.morphAttributes.position,w=l.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const P=a[S],I=P[0],v=P[1];I!==Number.MAX_SAFE_INTEGER&&v?(g&&l.getAttribute("morphTarget"+S)!==g[I]&&l.setAttribute("morphTarget"+S,g[I]),w&&l.getAttribute("morphNormal"+S)!==w[I]&&l.setAttribute("morphNormal"+S,w[I]),r[S]=v,M+=v):(g&&l.hasAttribute("morphTarget"+S)===!0&&l.deleteAttribute("morphTarget"+S),w&&l.hasAttribute("morphNormal"+S)===!0&&l.deleteAttribute("morphNormal"+S),r[S]=0)}const E=l.morphTargetsRelative?1:1-M;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function fm(i,e,t,n){let r=new WeakMap;function s(u){const c=n.render.frame,l=u.geometry,h=e.get(u,l);return r.get(h)!==c&&(e.update(h),r.set(h,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),h}function o(){r=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const uc=new Et,hc=new nc,dc=new Jh,fc=new oo,ka=[],za=[],Ba=new Float32Array(16),Ga=new Float32Array(9),Va=new Float32Array(4);function Mi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ka[r];if(s===void 0&&(s=new Float32Array(r),ka[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Qe(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zr(i,e){let t=za[e];t===void 0&&(t=new Int32Array(e),za[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;i.uniform2fv(this.addr,e),et(t,e)}}function _m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qe(t,e))return;i.uniform3fv(this.addr,e),et(t,e)}}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;i.uniform4fv(this.addr,e),et(t,e)}}function vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;Va.set(n),i.uniformMatrix2fv(this.addr,!1,Va),et(t,n)}}function xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;Ga.set(n),i.uniformMatrix3fv(this.addr,!1,Ga),et(t,n)}}function ym(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;Ba.set(n),i.uniformMatrix4fv(this.addr,!1,Ba),et(t,n)}}function bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;i.uniform2iv(this.addr,e),et(t,e)}}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qe(t,e))return;i.uniform3iv(this.addr,e),et(t,e)}}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;i.uniform4iv(this.addr,e),et(t,e)}}function Tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;i.uniform2uiv(this.addr,e),et(t,e)}}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qe(t,e))return;i.uniform3uiv(this.addr,e),et(t,e)}}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;i.uniform4uiv(this.addr,e),et(t,e)}}function Lm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||uc,r)}function Pm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||dc,r)}function Rm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fc,r)}function Dm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||hc,r)}function Im(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return _m;case 35666:return gm;case 35674:return vm;case 35675:return xm;case 35676:return ym;case 5124:case 35670:return bm;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return wm;case 5125:return Tm;case 36294:return Em;case 36295:return Am;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Dm}}function Om(i,e){i.uniform1fv(this.addr,e)}function Fm(i,e){const t=Mi(e,this.size,2);i.uniform2fv(this.addr,t)}function Nm(i,e){const t=Mi(e,this.size,3);i.uniform3fv(this.addr,t)}function Um(i,e){const t=Mi(e,this.size,4);i.uniform4fv(this.addr,t)}function km(i,e){const t=Mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zm(i,e){const t=Mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bm(i,e){const t=Mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gm(i,e){i.uniform1iv(this.addr,e)}function Vm(i,e){i.uniform2iv(this.addr,e)}function Hm(i,e){i.uniform3iv(this.addr,e)}function Wm(i,e){i.uniform4iv(this.addr,e)}function $m(i,e){i.uniform1uiv(this.addr,e)}function jm(i,e){i.uniform2uiv(this.addr,e)}function qm(i,e){i.uniform3uiv(this.addr,e)}function Xm(i,e){i.uniform4uiv(this.addr,e)}function Ym(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);Qe(n,s)||(i.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||uc,s[o])}function Jm(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);Qe(n,s)||(i.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||dc,s[o])}function Zm(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);Qe(n,s)||(i.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||fc,s[o])}function Km(i,e,t){const n=this.cache,r=e.length,s=zr(t,r);Qe(n,s)||(i.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||hc,s[o])}function Qm(i){switch(i){case 5126:return Om;case 35664:return Fm;case 35665:return Nm;case 35666:return Um;case 35674:return km;case 35675:return zm;case 35676:return Bm;case 5124:case 35670:return Gm;case 35667:case 35671:return Vm;case 35668:case 35672:return Hm;case 35669:case 35673:return Wm;case 5125:return $m;case 36294:return jm;case 36295:return qm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Km}}class e_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Im(t.type)}}class t_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Qm(t.type)}}class n_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Es=/(\w+)(\])?(\[|\.)?/g;function Ha(i,e){i.seq.push(e),i.map[e.id]=e}function i_(i,e,t){const n=i.name,r=n.length;for(Es.lastIndex=0;;){const s=Es.exec(n),o=Es.lastIndex;let a=s[1];const u=s[2]==="]",c=s[3];if(u&&(a=a|0),c===void 0||c==="["&&o+2===r){Ha(t,c===void 0?new e_(a,i,e):new t_(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new n_(a),Ha(t,h)),t=h}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);i_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Wa(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let r_=0;function s_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function o_(i){switch(i){case Gn:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function $a(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+s_(i.getShaderSource(e),o)}else return r}function a_(i,e){const t=o_(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function l_(i,e){let t;switch(e){case ch:t="Linear";break;case uh:t="Reinhard";break;case hh:t="OptimizedCineon";break;case dh:t="ACESFilmic";break;case fh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function c_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ui).join(`
`)}function u_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function h_(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ui(i){return i!==""}function ja(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(i){return i.replace(d_,f_)}function f_(i,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return js(t)}const p_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(i){return i.replace(p_,m_)}function m_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ya(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function __(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function g_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function x_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xl:e="ENVMAP_BLENDING_MULTIPLY";break;case ah:e="ENVMAP_BLENDING_MIX";break;case lh:e="ENVMAP_BLENDING_ADD";break}return e}function y_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function b_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=__(t),c=g_(t),l=v_(t),h=x_(t),d=y_(t),m=t.isWebGL2?"":c_(t),_=u_(s),p=r.createProgram();let f,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[_].filter(Ui).join(`
`),f.length>0&&(f+=`
`),g=[m,_].filter(Ui).join(`
`),g.length>0&&(g+=`
`)):(f=[Ya(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),g=[m,Ya(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Se.tonemapping_pars_fragment:"",t.toneMapping!==un?l_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,a_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),o=js(o),o=ja(o,t),o=qa(o,t),a=js(a),a=ja(a,t),a=qa(a,t),o=Xa(o),a=Xa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=w+f+o,E=w+g+a,S=Wa(r,35633,M),P=Wa(r,35632,E);if(r.attachShader(p,S),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),i.debug.checkShaderErrors){const A=r.getProgramInfoLog(p).trim(),F=r.getShaderInfoLog(S).trim(),W=r.getShaderInfoLog(P).trim();let ne=!0,N=!0;if(r.getProgramParameter(p,35714)===!1){ne=!1;const y=$a(r,S,"vertex"),C=$a(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+y+`
`+C)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(F===""||W==="")&&(N=!1);N&&(this.diagnostics={runnable:ne,programLog:A,vertexShader:{log:F,prefix:f},fragmentShader:{log:W,prefix:g}})}r.deleteShader(S),r.deleteShader(P);let I;this.getUniforms=function(){return I===void 0&&(I=new Pr(r,p)),I};let v;return this.getAttributes=function(){return v===void 0&&(v=h_(r,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=P,this}let M_=0;class S_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new w_(e),t.set(e,n)),n}}class w_{constructor(e){this.id=M_++,this.code=e,this.usedTimes=0}}function T_(i,e,t,n,r,s,o){const a=new ic,u=new S_,c=[],l=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,A,F,W,ne){const N=W.fog,y=ne.geometry,C=v.isMeshStandardMaterial?W.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||C),Y=z&&z.mapping===kr?z.image.height:null,U=_[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const X=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,J=X!==void 0?X.length:0;let k=0;y.morphAttributes.position!==void 0&&(k=1),y.morphAttributes.normal!==void 0&&(k=2),y.morphAttributes.color!==void 0&&(k=3);let V,K,ee,re;if(U){const Ue=Xt[U];V=Ue.vertexShader,K=Ue.fragmentShader}else V=v.vertexShader,K=v.fragmentShader,u.update(v),ee=u.getVertexShaderID(v),re=u.getFragmentShaderID(v);const j=i.getRenderTarget(),Pe=v.alphaTest>0,ue=v.clearcoat>0,ye=v.iridescence>0;return{isWebGL2:l,shaderID:U,shaderName:v.type,vertexShader:V,fragmentShader:K,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:d,outputEncoding:j===null?i.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:Gn,map:!!v.map,matcap:!!v.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:Y,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Dh,tangentSpaceNormalMap:v.normalMapType===Zl,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ve,clearcoat:ue,clearcoatMap:ue&&!!v.clearcoatMap,clearcoatRoughnessMap:ue&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!v.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!v.iridescenceMap,iridescenceThicknessMap:ye&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===ui,alphaMap:!!v.alphaMap,alphaTest:Pe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!y.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ne.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:k,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:un,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===io,flipSided:v.side===Ot,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)A.push(F),A.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(g(A,v),w(A,v),A.push(i.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function g(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function w(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),v.push(a.mask)}function M(v){const A=_[v.type];let F;if(A){const W=Xt[A];F=cd.clone(W.uniforms)}else F=v.uniforms;return F}function E(v,A){let F;for(let W=0,ne=c.length;W<ne;W++){const N=c[W];if(N.cacheKey===A){F=N,++F.usedTimes;break}}return F===void 0&&(F=new b_(i,A,v,s),c.push(F)),F}function S(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function P(v){u.remove(v)}function I(){u.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:E,releaseProgram:S,releaseShaderCache:P,programs:c,dispose:I}}function E_(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function A_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ja(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Za(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,m,_,p,f){let g=i[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:p,group:f},i[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=p,g.group=f),e++,g}function a(h,d,m,_,p,f){const g=o(h,d,m,_,p,f);m.transmission>0?n.push(g):m.transparent===!0?r.push(g):t.push(g)}function u(h,d,m,_,p,f){const g=o(h,d,m,_,p,f);m.transmission>0?n.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function c(h,d){t.length>1&&t.sort(h||A_),n.length>1&&n.sort(d||Ja),r.length>1&&r.sort(d||Ja)}function l(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:u,finish:l,sort:c}}function C_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Za,i.set(n,[o])):r>=s.length?(o=new Za,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function L_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ge};break;case"SpotLight":t={position:new D,direction:new D,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function P_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let R_=0;function D_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function I_(i,e){const t=new L_,n=P_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)r.probe.push(new D);const s=new D,o=new Je,a=new Je;function u(l,h){let d=0,m=0,_=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let p=0,f=0,g=0,w=0,M=0,E=0,S=0,P=0,I=0,v=0;l.sort(D_);const A=h!==!0?Math.PI:1;for(let W=0,ne=l.length;W<ne;W++){const N=l[W],y=N.color,C=N.intensity,z=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=y.r*C*A,m+=y.g*C*A,_+=y.b*C*A;else if(N.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(N.sh.coefficients[U],C);else if(N.isDirectionalLight){const U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const X=N.shadow,J=n.get(N);J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,r.directionalShadow[p]=J,r.directionalShadowMap[p]=Y,r.directionalShadowMatrix[p]=N.shadow.matrix,E++}r.directional[p]=U,p++}else if(N.isSpotLight){const U=t.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(y).multiplyScalar(C*A),U.distance=z,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,r.spot[g]=U;const X=N.shadow;if(N.map&&(r.spotLightMap[I]=N.map,I++,X.updateMatrices(N),N.castShadow&&v++),r.spotLightMatrix[g]=X.matrix,N.castShadow){const J=n.get(N);J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,r.spotShadow[g]=J,r.spotShadowMap[g]=Y,P++}g++}else if(N.isRectAreaLight){const U=t.get(N);U.color.copy(y).multiplyScalar(C),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),r.rectArea[w]=U,w++}else if(N.isPointLight){const U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*A),U.distance=N.distance,U.decay=N.decay,N.castShadow){const X=N.shadow,J=n.get(N);J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,r.pointShadow[f]=J,r.pointShadowMap[f]=Y,r.pointShadowMatrix[f]=N.shadow.matrix,S++}r.point[f]=U,f++}else if(N.isHemisphereLight){const U=t.get(N);U.skyColor.copy(N.color).multiplyScalar(C*A),U.groundColor.copy(N.groundColor).multiplyScalar(C*A),r.hemi[M]=U,M++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const F=r.hash;(F.directionalLength!==p||F.pointLength!==f||F.spotLength!==g||F.rectAreaLength!==w||F.hemiLength!==M||F.numDirectionalShadows!==E||F.numPointShadows!==S||F.numSpotShadows!==P||F.numSpotMaps!==I)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=w,r.point.length=f,r.hemi.length=M,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=P+I-v,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=v,F.directionalLength=p,F.pointLength=f,F.spotLength=g,F.rectAreaLength=w,F.hemiLength=M,F.numDirectionalShadows=E,F.numPointShadows=S,F.numSpotShadows=P,F.numSpotMaps=I,r.version=R_++)}function c(l,h){let d=0,m=0,_=0,p=0,f=0;const g=h.matrixWorldInverse;for(let w=0,M=l.length;w<M;w++){const E=l[w];if(E.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(E.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),_++}else if(E.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),a.identity(),o.copy(E.matrixWorld),o.premultiply(g),a.extractRotation(o),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),m++}else if(E.isHemisphereLight){const S=r.hemi[f];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(g),f++}}}return{setup:u,setupView:c,state:r}}function Ka(i,e){const t=new I_(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function u(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a}}function O_(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let u;return a===void 0?(u=new Ka(i,e),t.set(s,[u])):o>=a.length?(u=new Ka(i,e),a.push(u)):u=a[o],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class F_ extends tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N_ extends tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k_=`uniform sampler2D shadow_pass;
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
}`;function z_(i,e,t){let n=new ao;const r=new Oe,s=new Oe,o=new $e,a=new F_({depthPacking:Rh}),u=new N_,c={},l=t.maxTextureSize,h={0:Ot,1:zn,2:io},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:U_,fragmentShader:k_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new hn;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Yt(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l,this.render=function(E,S,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const I=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(gn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let W=0,ne=E.length;W<ne;W++){const N=E[W],y=N.shadow;if(y===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(y.autoUpdate===!1&&y.needsUpdate===!1)continue;r.copy(y.mapSize);const C=y.getFrameExtents();if(r.multiply(C),s.copy(y.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/C.x),r.x=s.x*C.x,y.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/C.y),r.y=s.y*C.y,y.mapSize.y=s.y)),y.map===null){const Y=this.type!==Fi?{minFilter:ft,magFilter:ft}:{};y.map=new Vn(r.x,r.y,Y),y.map.texture.name=N.name+".shadowMap",y.camera.updateProjectionMatrix()}i.setRenderTarget(y.map),i.clear();const z=y.getViewportCount();for(let Y=0;Y<z;Y++){const U=y.getViewport(Y);o.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),F.viewport(o),y.updateMatrices(N,Y),n=y.getFrustum(),M(S,P,y.camera,N,this.type)}y.isPointLightShadow!==!0&&this.type===Fi&&g(y,P),y.needsUpdate=!1}f.needsUpdate=!1,i.setRenderTarget(I,v,A)};function g(E,S){const P=e.update(p);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vn(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,P,d,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,P,m,p,null)}function w(E,S,P,I,v,A){let F=null;const W=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(W!==void 0)F=W;else if(F=P.isPointLight===!0?u:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const ne=F.uuid,N=S.uuid;let y=c[ne];y===void 0&&(y={},c[ne]=y);let C=y[N];C===void 0&&(C=F.clone(),y[N]=C),F=C}return F.visible=S.visible,F.wireframe=S.wireframe,A===Fi?F.side=S.shadowSide!==null?S.shadowSide:S.side:F.side=S.shadowSide!==null?S.shadowSide:h[S.side],F.alphaMap=S.alphaMap,F.alphaTest=S.alphaTest,F.map=S.map,F.clipShadows=S.clipShadows,F.clippingPlanes=S.clippingPlanes,F.clipIntersection=S.clipIntersection,F.displacementMap=S.displacementMap,F.displacementScale=S.displacementScale,F.displacementBias=S.displacementBias,F.wireframeLinewidth=S.wireframeLinewidth,F.linewidth=S.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(P.matrixWorld),F.nearDistance=I,F.farDistance=v),F}function M(E,S,P,I,v){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Fi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const W=e.update(E),ne=E.material;if(Array.isArray(ne)){const N=W.groups;for(let y=0,C=N.length;y<C;y++){const z=N[y],Y=ne[z.materialIndex];if(Y&&Y.visible){const U=w(E,Y,I,P.near,P.far,v);i.renderBufferDirect(P,null,W,U,E,z)}}}else if(ne.visible){const N=w(E,ne,I,P.near,P.far,v);i.renderBufferDirect(P,null,W,N,E,null)}}const F=E.children;for(let W=0,ne=F.length;W<ne;W++)M(F[W],S,P,I,v)}}function B_(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const B=new $e;let Z=null;const ae=new $e(0,0,0,0);return{setMask:function(fe){Z!==fe&&!L&&(i.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){L=fe},setClear:function(fe,Ie,nt,st,vn){vn===!0&&(fe*=st,Ie*=st,nt*=st),B.set(fe,Ie,nt,st),ae.equals(B)===!1&&(i.clearColor(fe,Ie,nt,st),ae.copy(B))},reset:function(){L=!1,Z=null,ae.set(-1,0,0,0)}}}function s(){let L=!1,B=null,Z=null,ae=null;return{setTest:function(fe){fe?Pe(2929):ue(2929)},setMask:function(fe){B!==fe&&!L&&(i.depthMask(fe),B=fe)},setFunc:function(fe){if(Z!==fe){switch(fe){case eh:i.depthFunc(512);break;case th:i.depthFunc(519);break;case nh:i.depthFunc(513);break;case zs:i.depthFunc(515);break;case ih:i.depthFunc(514);break;case rh:i.depthFunc(518);break;case sh:i.depthFunc(516);break;case oh:i.depthFunc(517);break;default:i.depthFunc(515)}Z=fe}},setLocked:function(fe){L=fe},setClear:function(fe){ae!==fe&&(i.clearDepth(fe),ae=fe)},reset:function(){L=!1,B=null,Z=null,ae=null}}}function o(){let L=!1,B=null,Z=null,ae=null,fe=null,Ie=null,nt=null,st=null,vn=null;return{setTest:function(We){L||(We?Pe(2960):ue(2960))},setMask:function(We){B!==We&&!L&&(i.stencilMask(We),B=We)},setFunc:function(We,Qt,Pt){(Z!==We||ae!==Qt||fe!==Pt)&&(i.stencilFunc(We,Qt,Pt),Z=We,ae=Qt,fe=Pt)},setOp:function(We,Qt,Pt){(Ie!==We||nt!==Qt||st!==Pt)&&(i.stencilOp(We,Qt,Pt),Ie=We,nt=Qt,st=Pt)},setLocked:function(We){L=We},setClear:function(We){vn!==We&&(i.clearStencil(We),vn=We)},reset:function(){L=!1,B=null,Z=null,ae=null,fe=null,Ie=null,nt=null,st=null,vn=null}}}const a=new r,u=new s,c=new o,l=new WeakMap,h=new WeakMap;let d={},m={},_=new WeakMap,p=[],f=null,g=!1,w=null,M=null,E=null,S=null,P=null,I=null,v=null,A=!1,F=null,W=null,ne=null,N=null,y=null;const C=i.getParameter(35661);let z=!1,Y=0;const U=i.getParameter(7938);U.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(U)[1]),z=Y>=1):U.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),z=Y>=2);let X=null,J={};const k=i.getParameter(3088),V=i.getParameter(2978),K=new $e().fromArray(k),ee=new $e().fromArray(V);function re(L,B,Z){const ae=new Uint8Array(4),fe=i.createTexture();i.bindTexture(L,fe),i.texParameteri(L,10241,9728),i.texParameteri(L,10240,9728);for(let Ie=0;Ie<Z;Ie++)i.texImage2D(B+Ie,0,6408,1,1,0,6408,5121,ae);return fe}const j={};j[3553]=re(3553,3553,1),j[34067]=re(34067,34069,6),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),Pe(2929),u.setFunc(zs),ct(!1),Lt(Wo),Pe(2884),at(gn);function Pe(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function ue(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function ye(L,B){return m[L]!==B?(i.bindFramebuffer(L,B),m[L]=B,n&&(L===36009&&(m[36160]=B),L===36160&&(m[36009]=B)),!0):!1}function ce(L,B){let Z=p,ae=!1;if(L)if(Z=_.get(B),Z===void 0&&(Z=[],_.set(B,Z)),L.isWebGLMultipleRenderTargets){const fe=L.texture;if(Z.length!==fe.length||Z[0]!==36064){for(let Ie=0,nt=fe.length;Ie<nt;Ie++)Z[Ie]=36064+Ie;Z.length=fe.length,ae=!0}}else Z[0]!==36064&&(Z[0]=36064,ae=!0);else Z[0]!==1029&&(Z[0]=1029,ae=!0);ae&&(t.isWebGL2?i.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Ue(L){return f!==L?(i.useProgram(L),f=L,!0):!1}const we={[ai]:32774,[Hu]:32778,[Wu]:32779};if(n)we[Xo]=32775,we[Yo]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(we[Xo]=L.MIN_EXT,we[Yo]=L.MAX_EXT)}const xe={[$u]:0,[ju]:1,[qu]:768,[jl]:770,[Qu]:776,[Zu]:774,[Yu]:772,[Xu]:769,[ql]:771,[Ku]:775,[Ju]:773};function at(L,B,Z,ae,fe,Ie,nt,st){if(L===gn){g===!0&&(ue(3042),g=!1);return}if(g===!1&&(Pe(3042),g=!0),L!==Vu){if(L!==w||st!==A){if((M!==ai||P!==ai)&&(i.blendEquation(32774),M=ai,P=ai),st)switch(L){case ui:i.blendFuncSeparate(1,771,1,771);break;case $o:i.blendFunc(1,1);break;case jo:i.blendFuncSeparate(0,769,0,1);break;case qo:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ui:i.blendFuncSeparate(770,771,1,771);break;case $o:i.blendFunc(770,1);break;case jo:i.blendFuncSeparate(0,769,0,1);break;case qo:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,S=null,I=null,v=null,w=L,A=st}return}fe=fe||B,Ie=Ie||Z,nt=nt||ae,(B!==M||fe!==P)&&(i.blendEquationSeparate(we[B],we[fe]),M=B,P=fe),(Z!==E||ae!==S||Ie!==I||nt!==v)&&(i.blendFuncSeparate(xe[Z],xe[ae],xe[Ie],xe[nt]),E=Z,S=ae,I=Ie,v=nt),w=L,A=!1}function lt(L,B){L.side===io?ue(2884):Pe(2884);let Z=L.side===Ot;B&&(Z=!Z),ct(Z),L.blending===ui&&L.transparent===!1?at(gn):at(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),u.setFunc(L.depthFunc),u.setTest(L.depthTest),u.setMask(L.depthWrite),a.setMask(L.colorWrite);const ae=L.stencilWrite;c.setTest(ae),ae&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ke(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(32926):ue(32926)}function ct(L){F!==L&&(L?i.frontFace(2304):i.frontFace(2305),F=L)}function Lt(L){L!==zu?(Pe(2884),L!==W&&(L===Wo?i.cullFace(1029):L===Bu?i.cullFace(1028):i.cullFace(1032))):ue(2884),W=L}function Ze(L){L!==ne&&(z&&i.lineWidth(L),ne=L)}function ke(L,B,Z){L?(Pe(32823),(N!==B||y!==Z)&&(i.polygonOffset(B,Z),N=B,y=Z)):ue(32823)}function Kt(L){L?Pe(3089):ue(3089)}function Ft(L){L===void 0&&(L=33984+C-1),X!==L&&(i.activeTexture(L),X=L)}function T(L,B,Z){Z===void 0&&(X===null?Z=33984+C-1:Z=X);let ae=J[Z];ae===void 0&&(ae={type:void 0,texture:void 0},J[Z]=ae),(ae.type!==L||ae.texture!==B)&&(X!==Z&&(i.activeTexture(Z),X=Z),i.bindTexture(L,B||j[L]),ae.type=L,ae.texture=B)}function x(){const L=J[X];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function H(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(L){K.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function pe(L){ee.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ee.copy(L))}function Re(L,B){let Z=h.get(B);Z===void 0&&(Z=new WeakMap,h.set(B,Z));let ae=Z.get(L);ae===void 0&&(ae=i.getUniformBlockIndex(B,L.name),Z.set(L,ae))}function He(L,B){const ae=h.get(B).get(L);l.get(B)!==ae&&(i.uniformBlockBinding(B,ae,L.__bindingPointIndex),l.set(B,ae))}function tt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},X=null,J={},m={},_=new WeakMap,p=[],f=null,g=!1,w=null,M=null,E=null,S=null,P=null,I=null,v=null,A=!1,F=null,W=null,ne=null,N=null,y=null,K.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:Pe,disable:ue,bindFramebuffer:ye,drawBuffers:ce,useProgram:Ue,setBlending:at,setMaterial:lt,setFlipSided:ct,setCullFace:Lt,setLineWidth:Ze,setPolygonOffset:ke,setScissorTest:Kt,activeTexture:Ft,bindTexture:T,unbindTexture:x,compressedTexImage2D:H,compressedTexImage3D:Q,texImage2D:ve,texImage3D:he,updateUBOMapping:Re,uniformBlockBinding:He,texStorage2D:q,texStorage3D:_e,texSubImage2D:te,texSubImage3D:se,compressedTexSubImage2D:be,compressedTexSubImage3D:oe,scissor:ge,viewport:pe,reset:tt}}function G_(i,e,t,n,r,s,o){const a=r.isWebGL2,u=r.maxTextures,c=r.maxCubemapSize,l=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(T,x){return g?new OffscreenCanvas(T,x):Xi("canvas")}function M(T,x,H,Q){let te=1;if((T.width>Q||T.height>Q)&&(te=Q/Math.max(T.width,T.height)),te<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const se=x?Fr:Math.floor,be=se(te*T.width),oe=se(te*T.height);p===void 0&&(p=w(be,oe));const q=H?w(be,oe):p;return q.width=be,q.height=oe,q.getContext("2d").drawImage(T,0,0,be,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+be+"x"+oe+")."),q}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function E(T){return $s(T.width)&&$s(T.height)}function S(T){return a?!1:T.wrapS!==Bt||T.wrapT!==Bt||T.minFilter!==ft&&T.minFilter!==It}function P(T,x){return T.generateMipmaps&&x&&T.minFilter!==ft&&T.minFilter!==It}function I(T){i.generateMipmap(T)}function v(T,x,H,Q,te=!1){if(a===!1)return x;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=x;return x===6403&&(H===5126&&(se=33326),H===5131&&(se=33325),H===5121&&(se=33321)),x===33319&&(H===5126&&(se=33328),H===5131&&(se=33327),H===5121&&(se=33323)),x===6408&&(H===5126&&(se=34836),H===5131&&(se=34842),H===5121&&(se=Q===Ve&&te===!1?35907:32856),H===32819&&(se=32854),H===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function A(T,x,H){return P(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==ft&&T.minFilter!==It?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function F(T){return T===ft||T===Jo||T===Kr?9728:9729}function W(T){const x=T.target;x.removeEventListener("dispose",W),N(x),x.isVideoTexture&&_.delete(x)}function ne(T){const x=T.target;x.removeEventListener("dispose",ne),C(x)}function N(T){const x=n.get(T);if(x.__webglInit===void 0)return;const H=T.source,Q=f.get(H);if(Q){const te=Q[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(T),Object.keys(Q).length===0&&f.delete(H)}n.remove(T)}function y(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const H=T.source,Q=f.get(H);delete Q[x.__cacheKey],o.memory.textures--}function C(T){const x=T.texture,H=n.get(T),Q=n.get(x);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)i.deleteFramebuffer(H.__webglFramebuffer[te]),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[te]);else{if(i.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let te=0,se=x.length;te<se;te++){const be=n.get(x[te]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(x[te])}n.remove(x),n.remove(T)}let z=0;function Y(){z=0}function U(){const T=z;return T>=u&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+u),z+=1,T}function X(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.encoding),x.join()}function J(T,x){const H=n.get(T);if(T.isVideoTexture&&Kt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,T,x);return}}t.bindTexture(3553,H.__webglTexture,33984+x)}function k(T,x){const H=n.get(T);if(T.version>0&&H.__version!==T.version){ue(H,T,x);return}t.bindTexture(35866,H.__webglTexture,33984+x)}function V(T,x){const H=n.get(T);if(T.version>0&&H.__version!==T.version){ue(H,T,x);return}t.bindTexture(32879,H.__webglTexture,33984+x)}function K(T,x){const H=n.get(T);if(T.version>0&&H.__version!==T.version){ye(H,T,x);return}t.bindTexture(34067,H.__webglTexture,33984+x)}const ee={[Vs]:10497,[Bt]:33071,[Hs]:33648},re={[ft]:9728,[Jo]:9984,[Kr]:9986,[It]:9729,[ph]:9985,[$i]:9987};function j(T,x,H){if(H?(i.texParameteri(T,10242,ee[x.wrapS]),i.texParameteri(T,10243,ee[x.wrapT]),(T===32879||T===35866)&&i.texParameteri(T,32882,ee[x.wrapR]),i.texParameteri(T,10240,re[x.magFilter]),i.texParameteri(T,10241,re[x.minFilter])):(i.texParameteri(T,10242,33071),i.texParameteri(T,10243,33071),(T===32879||T===35866)&&i.texParameteri(T,32882,33071),(x.wrapS!==Bt||x.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,10240,F(x.magFilter)),i.texParameteri(T,10241,F(x.minFilter)),x.minFilter!==ft&&x.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===ft||x.minFilter!==Kr&&x.minFilter!==$i||x.type===In&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===ji&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Pe(T,x){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",W));const Q=x.source;let te=f.get(Q);te===void 0&&(te={},f.set(Q,te));const se=X(x);if(se!==T.__cacheKey){te[se]===void 0&&(te[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[se].usedTimes++;const be=te[T.__cacheKey];be!==void 0&&(te[T.__cacheKey].usedTimes--,be.usedTimes===0&&y(x)),T.__cacheKey=se,T.__webglTexture=te[se].texture}return H}function ue(T,x,H){let Q=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=35866),x.isData3DTexture&&(Q=32879);const te=Pe(T,x),se=x.source;t.bindTexture(Q,T.__webglTexture,33984+H);const be=n.get(se);if(se.version!==be.__version||te===!0){t.activeTexture(33984+H),i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const oe=S(x)&&E(x.image)===!1;let q=M(x.image,oe,!1,l);q=Ft(x,q);const _e=E(q)||a,ve=s.convert(x.format,x.encoding);let he=s.convert(x.type),ge=v(x.internalFormat,ve,he,x.encoding,x.isVideoTexture);j(Q,x,_e);let pe;const Re=x.mipmaps,He=a&&x.isVideoTexture!==!0,tt=be.__version===void 0||te===!0,L=A(x,q,_e);if(x.isDepthTexture)ge=6402,a?x.type===In?ge=36012:x.type===Dn?ge=33190:x.type===hi?ge=35056:ge=33189:x.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Un&&ge===6402&&x.type!==Jl&&x.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Dn,he=s.convert(x.type)),x.format===_i&&ge===6402&&(ge=34041,x.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=hi,he=s.convert(x.type))),tt&&(He?t.texStorage2D(3553,1,ge,q.width,q.height):t.texImage2D(3553,0,ge,q.width,q.height,0,ve,he,null));else if(x.isDataTexture)if(Re.length>0&&_e){He&&tt&&t.texStorage2D(3553,L,ge,Re[0].width,Re[0].height);for(let B=0,Z=Re.length;B<Z;B++)pe=Re[B],He?t.texSubImage2D(3553,B,0,0,pe.width,pe.height,ve,he,pe.data):t.texImage2D(3553,B,ge,pe.width,pe.height,0,ve,he,pe.data);x.generateMipmaps=!1}else He?(tt&&t.texStorage2D(3553,L,ge,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,ve,he,q.data)):t.texImage2D(3553,0,ge,q.width,q.height,0,ve,he,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){He&&tt&&t.texStorage3D(35866,L,ge,Re[0].width,Re[0].height,q.depth);for(let B=0,Z=Re.length;B<Z;B++)pe=Re[B],x.format!==Gt?ve!==null?He?t.compressedTexSubImage3D(35866,B,0,0,0,pe.width,pe.height,q.depth,ve,pe.data,0,0):t.compressedTexImage3D(35866,B,ge,pe.width,pe.height,q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(35866,B,0,0,0,pe.width,pe.height,q.depth,ve,he,pe.data):t.texImage3D(35866,B,ge,pe.width,pe.height,q.depth,0,ve,he,pe.data)}else{He&&tt&&t.texStorage2D(3553,L,ge,Re[0].width,Re[0].height);for(let B=0,Z=Re.length;B<Z;B++)pe=Re[B],x.format!==Gt?ve!==null?He?t.compressedTexSubImage2D(3553,B,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(3553,B,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(3553,B,0,0,pe.width,pe.height,ve,he,pe.data):t.texImage2D(3553,B,ge,pe.width,pe.height,0,ve,he,pe.data)}else if(x.isDataArrayTexture)He?(tt&&t.texStorage3D(35866,L,ge,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,ve,he,q.data)):t.texImage3D(35866,0,ge,q.width,q.height,q.depth,0,ve,he,q.data);else if(x.isData3DTexture)He?(tt&&t.texStorage3D(32879,L,ge,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,ve,he,q.data)):t.texImage3D(32879,0,ge,q.width,q.height,q.depth,0,ve,he,q.data);else if(x.isFramebufferTexture){if(tt)if(He)t.texStorage2D(3553,L,ge,q.width,q.height);else{let B=q.width,Z=q.height;for(let ae=0;ae<L;ae++)t.texImage2D(3553,ae,ge,B,Z,0,ve,he,null),B>>=1,Z>>=1}}else if(Re.length>0&&_e){He&&tt&&t.texStorage2D(3553,L,ge,Re[0].width,Re[0].height);for(let B=0,Z=Re.length;B<Z;B++)pe=Re[B],He?t.texSubImage2D(3553,B,0,0,ve,he,pe):t.texImage2D(3553,B,ge,ve,he,pe);x.generateMipmaps=!1}else He?(tt&&t.texStorage2D(3553,L,ge,q.width,q.height),t.texSubImage2D(3553,0,0,0,ve,he,q)):t.texImage2D(3553,0,ge,ve,he,q);P(x,_e)&&I(Q),be.__version=se.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ye(T,x,H){if(x.image.length!==6)return;const Q=Pe(T,x),te=x.source;t.bindTexture(34067,T.__webglTexture,33984+H);const se=n.get(te);if(te.version!==se.__version||Q===!0){t.activeTexture(33984+H),i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const be=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,q=[];for(let B=0;B<6;B++)!be&&!oe?q[B]=M(x.image[B],!1,!0,c):q[B]=oe?x.image[B].image:x.image[B],q[B]=Ft(x,q[B]);const _e=q[0],ve=E(_e)||a,he=s.convert(x.format,x.encoding),ge=s.convert(x.type),pe=v(x.internalFormat,he,ge,x.encoding),Re=a&&x.isVideoTexture!==!0,He=se.__version===void 0||Q===!0;let tt=A(x,_e,ve);j(34067,x,ve);let L;if(be){Re&&He&&t.texStorage2D(34067,tt,pe,_e.width,_e.height);for(let B=0;B<6;B++){L=q[B].mipmaps;for(let Z=0;Z<L.length;Z++){const ae=L[Z];x.format!==Gt?he!==null?Re?t.compressedTexSubImage2D(34069+B,Z,0,0,ae.width,ae.height,he,ae.data):t.compressedTexImage2D(34069+B,Z,pe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+B,Z,0,0,ae.width,ae.height,he,ge,ae.data):t.texImage2D(34069+B,Z,pe,ae.width,ae.height,0,he,ge,ae.data)}}}else{L=x.mipmaps,Re&&He&&(L.length>0&&tt++,t.texStorage2D(34067,tt,pe,q[0].width,q[0].height));for(let B=0;B<6;B++)if(oe){Re?t.texSubImage2D(34069+B,0,0,0,q[B].width,q[B].height,he,ge,q[B].data):t.texImage2D(34069+B,0,pe,q[B].width,q[B].height,0,he,ge,q[B].data);for(let Z=0;Z<L.length;Z++){const fe=L[Z].image[B].image;Re?t.texSubImage2D(34069+B,Z+1,0,0,fe.width,fe.height,he,ge,fe.data):t.texImage2D(34069+B,Z+1,pe,fe.width,fe.height,0,he,ge,fe.data)}}else{Re?t.texSubImage2D(34069+B,0,0,0,he,ge,q[B]):t.texImage2D(34069+B,0,pe,he,ge,q[B]);for(let Z=0;Z<L.length;Z++){const ae=L[Z];Re?t.texSubImage2D(34069+B,Z+1,0,0,he,ge,ae.image[B]):t.texImage2D(34069+B,Z+1,pe,he,ge,ae.image[B])}}}P(x,ve)&&I(34067),se.__version=te.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ce(T,x,H,Q,te){const se=s.convert(H.format,H.encoding),be=s.convert(H.type),oe=v(H.internalFormat,se,be,H.encoding);n.get(x).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,oe,x.width,x.height,x.depth,0,se,be,null):t.texImage2D(te,0,oe,x.width,x.height,0,se,be,null)),t.bindFramebuffer(36160,T),ke(x)?d.framebufferTexture2DMultisampleEXT(36160,Q,te,n.get(H).__webglTexture,0,Ze(x)):(te===3553||te>=34069&&te<=34074)&&i.framebufferTexture2D(36160,Q,te,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(T,x,H){if(i.bindRenderbuffer(36161,T),x.depthBuffer&&!x.stencilBuffer){let Q=33189;if(H||ke(x)){const te=x.depthTexture;te&&te.isDepthTexture&&(te.type===In?Q=36012:te.type===Dn&&(Q=33190));const se=Ze(x);ke(x)?d.renderbufferStorageMultisampleEXT(36161,se,Q,x.width,x.height):i.renderbufferStorageMultisample(36161,se,Q,x.width,x.height)}else i.renderbufferStorage(36161,Q,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,T)}else if(x.depthBuffer&&x.stencilBuffer){const Q=Ze(x);H&&ke(x)===!1?i.renderbufferStorageMultisample(36161,Q,35056,x.width,x.height):ke(x)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,T)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let te=0;te<Q.length;te++){const se=Q[te],be=s.convert(se.format,se.encoding),oe=s.convert(se.type),q=v(se.internalFormat,be,oe,se.encoding),_e=Ze(x);H&&ke(x)===!1?i.renderbufferStorageMultisample(36161,_e,q,x.width,x.height):ke(x)?d.renderbufferStorageMultisampleEXT(36161,_e,q,x.width,x.height):i.renderbufferStorage(36161,q,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function we(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const Q=n.get(x.depthTexture).__webglTexture,te=Ze(x);if(x.depthTexture.format===Un)ke(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,te):i.framebufferTexture2D(36160,36096,3553,Q,0);else if(x.depthTexture.format===_i)ke(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,te):i.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function xe(T){const x=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");we(x.__webglFramebuffer,T)}else if(H){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=i.createRenderbuffer(),Ue(x.__webglDepthbuffer[Q],T,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ue(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function at(T,x,H){const Q=n.get(T);x!==void 0&&ce(Q.__webglFramebuffer,T,T.texture,36064,3553),H!==void 0&&xe(T)}function lt(T){const x=T.texture,H=n.get(T),Q=n.get(x);T.addEventListener("dispose",ne),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,o.memory.textures++);const te=T.isWebGLCubeRenderTarget===!0,se=T.isWebGLMultipleRenderTargets===!0,be=E(T)||a;if(te){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)H.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(H.__webglFramebuffer=i.createFramebuffer(),se)if(r.drawBuffers){const oe=T.texture;for(let q=0,_e=oe.length;q<_e;q++){const ve=n.get(oe[q]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ke(T)===!1){const oe=se?x:[x];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let q=0;q<oe.length;q++){const _e=oe[q];H.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(36161,H.__webglColorRenderbuffer[q]);const ve=s.convert(_e.format,_e.encoding),he=s.convert(_e.type),ge=v(_e.internalFormat,ve,he,_e.encoding,T.isXRRenderTarget===!0),pe=Ze(T);i.renderbufferStorageMultisample(36161,pe,ge,T.width,T.height),i.framebufferRenderbuffer(36160,36064+q,36161,H.__webglColorRenderbuffer[q])}i.bindRenderbuffer(36161,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,Q.__webglTexture),j(34067,x,be);for(let oe=0;oe<6;oe++)ce(H.__webglFramebuffer[oe],T,x,36064,34069+oe);P(x,be)&&I(34067),t.unbindTexture()}else if(se){const oe=T.texture;for(let q=0,_e=oe.length;q<_e;q++){const ve=oe[q],he=n.get(ve);t.bindTexture(3553,he.__webglTexture),j(3553,ve,be),ce(H.__webglFramebuffer,T,ve,36064+q,3553),P(ve,be)&&I(3553)}t.unbindTexture()}else{let oe=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?oe=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Q.__webglTexture),j(oe,x,be),ce(H.__webglFramebuffer,T,x,36064,oe),P(x,be)&&I(oe),t.unbindTexture()}T.depthBuffer&&xe(T)}function ct(T){const x=E(T)||a,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,te=H.length;Q<te;Q++){const se=H[Q];if(P(se,x)){const be=T.isWebGLCubeRenderTarget?34067:3553,oe=n.get(se).__webglTexture;t.bindTexture(be,oe),I(be),t.unbindTexture()}}}function Lt(T){if(a&&T.samples>0&&ke(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,Q=T.height;let te=16384;const se=[],be=T.stencilBuffer?33306:36096,oe=n.get(T),q=T.isWebGLMultipleRenderTargets===!0;if(q)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){se.push(36064+_e),T.depthBuffer&&se.push(be);const ve=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(ve===!1&&(T.depthBuffer&&(te|=256),T.stencilBuffer&&(te|=1024)),q&&i.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[_e]),ve===!0&&(i.invalidateFramebuffer(36008,[be]),i.invalidateFramebuffer(36009,[be])),q){const he=n.get(x[_e]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,he,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,te,9728),m&&i.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+_e,36161,oe.__webglColorRenderbuffer[_e]);const ve=n.get(x[_e]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+_e,3553,ve,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function Ze(T){return Math.min(h,T.samples)}function ke(T){const x=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Kt(T){const x=o.render.frame;_.get(T)!==x&&(_.set(T,x),T.update())}function Ft(T,x){const H=T.encoding,Q=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ws||H!==Gn&&(H===Ve?a===!1?e.has("EXT_sRGB")===!0&&Q===Gt?(T.format=Ws,T.minFilter=It,T.generateMipmaps=!1):x=ec.sRGBToLinear(x):(Q!==Gt||te!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),x}this.allocateTextureUnit=U,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=at,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ke}function V_(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Bn)return 5121;if(s===vh)return 32819;if(s===xh)return 32820;if(s===mh)return 5120;if(s===_h)return 5122;if(s===Jl)return 5123;if(s===gh)return 5124;if(s===Dn)return 5125;if(s===In)return 5126;if(s===ji)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yh)return 6406;if(s===Gt)return 6408;if(s===Mh)return 6409;if(s===Sh)return 6410;if(s===Un)return 6402;if(s===_i)return 34041;if(s===bh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ws)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===wh)return 6403;if(s===Th)return 36244;if(s===Eh)return 33319;if(s===Ah)return 33320;if(s===Ch)return 36249;if(s===Qr||s===es||s===ts||s===ns)if(o===Ve)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===es)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ns)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zo||s===Ko||s===Qo||s===ea)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ko)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ea)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Lh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ta||s===na)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ta)return o===Ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===na)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ia||s===ra||s===sa||s===oa||s===aa||s===la||s===ca||s===ua||s===ha||s===da||s===fa||s===pa||s===ma||s===_a)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ia)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ra)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sa)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===oa)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===aa)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===la)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ca)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ua)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ha)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===da)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fa)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pa)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ma)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_a)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ga)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ga)return o===Ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===hi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class H_ extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sr extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W_={type:"move"};class As{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),g=this._getHandJoint(c,p);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=f.radius),g.visible=f!==null}const l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=l.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $_ extends Et{constructor(e,t,n,r,s,o,a,u,c,l){if(l=l!==void 0?l:Un,l!==Un&&l!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Un&&(n=Dn),n===void 0&&l===_i&&(n=hi),super(null,r,s,o,a,u,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ft,this.minFilter=u!==void 0?u:ft,this.flipY=!1,this.generateMipmaps=!1}}class j_ extends yi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",u=null,c=null,l=null,h=null,d=null,m=null;const _=t.getContextAttributes();let p=null,f=null;const g=[],w=[],M=new Set,E=new Map,S=new wt;S.layers.enable(1),S.viewport=new $e;const P=new wt;P.layers.enable(2),P.viewport=new $e;const I=[S,P],v=new H_;v.layers.enable(1),v.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let V=g[k];return V===void 0&&(V=new As,g[k]=V),V.getTargetRaySpace()},this.getControllerGrip=function(k){let V=g[k];return V===void 0&&(V=new As,g[k]=V),V.getGripSpace()},this.getHand=function(k){let V=g[k];return V===void 0&&(V=new As,g[k]=V),V.getHandSpace()};function W(k){const V=w.indexOf(k.inputSource);if(V===-1)return;const K=g[V];K!==void 0&&K.dispatchEvent({type:k.type,data:k.inputSource})}function ne(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",N);for(let k=0;k<g.length;k++){const V=w[k];V!==null&&(w[k]=null,g[k].disconnect(V))}A=null,F=null,e.setRenderTarget(p),d=null,h=null,l=null,r=null,f=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return l},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:d}),f=new Vn(d.framebufferWidth,d.framebufferHeight,{format:Gt,type:Bn,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let V=null,K=null,ee=null;_.depth&&(ee=_.stencil?35056:33190,V=_.stencil?_i:Un,K=_.stencil?hi:Dn);const re={colorFormat:32856,depthFormat:ee,scaleFactor:s};l=new XRWebGLBinding(r,t),h=l.createProjectionLayer(re),r.updateRenderState({layers:[h]}),f=new Vn(h.textureWidth,h.textureHeight,{format:Gt,type:Bn,depthTexture:new $_(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const j=e.properties.get(f);j.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),u=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(k){for(let V=0;V<k.removed.length;V++){const K=k.removed[V],ee=w.indexOf(K);ee>=0&&(w[ee]=null,g[ee].disconnect(K))}for(let V=0;V<k.added.length;V++){const K=k.added[V];let ee=w.indexOf(K);if(ee===-1){for(let j=0;j<g.length;j++)if(j>=w.length){w.push(K),ee=j;break}else if(w[j]===null){w[j]=K,ee=j;break}if(ee===-1)break}const re=g[ee];re&&re.connect(K)}}const y=new D,C=new D;function z(k,V,K){y.setFromMatrixPosition(V.matrixWorld),C.setFromMatrixPosition(K.matrixWorld);const ee=y.distanceTo(C),re=V.projectionMatrix.elements,j=K.projectionMatrix.elements,Pe=re[14]/(re[10]-1),ue=re[14]/(re[10]+1),ye=(re[9]+1)/re[5],ce=(re[9]-1)/re[5],Ue=(re[8]-1)/re[0],we=(j[8]+1)/j[0],xe=Pe*Ue,at=Pe*we,lt=ee/(-Ue+we),ct=lt*-Ue;V.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ct),k.translateZ(lt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Lt=Pe+lt,Ze=ue+lt,ke=xe-ct,Kt=at+(ee-ct),Ft=ye*ue/Ze*Lt,T=ce*ue/Ze*Lt;k.projectionMatrix.makePerspective(ke,Kt,Ft,T,Lt,Ze)}function Y(k,V){V===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(V.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;v.near=P.near=S.near=k.near,v.far=P.far=S.far=k.far,(A!==v.near||F!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,F=v.far);const V=k.parent,K=v.cameras;Y(v,V);for(let re=0;re<K.length;re++)Y(K[re],V);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),k.matrix.copy(v.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const ee=k.children;for(let re=0,j=ee.length;re<j;re++)ee[re].updateMatrixWorld(!0);K.length===2?z(v,S,P):v.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(k){h!==null&&(h.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.getPlanes=function(){return M};let U=null;function X(k,V){if(c=V.getViewerPose(u||o),m=V,c!==null){const K=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let ee=!1;K.length!==v.cameras.length&&(v.cameras.length=0,ee=!0);for(let re=0;re<K.length;re++){const j=K[re];let Pe=null;if(d!==null)Pe=d.getViewport(j);else{const ye=l.getViewSubImage(h,j);Pe=ye.viewport,re===0&&(e.setRenderTargetTextures(f,ye.colorTexture,h.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(f))}let ue=I[re];ue===void 0&&(ue=new wt,ue.layers.enable(re),ue.viewport=new $e,I[re]=ue),ue.matrix.fromArray(j.transform.matrix),ue.projectionMatrix.fromArray(j.projectionMatrix),ue.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),re===0&&v.matrix.copy(ue.matrix),ee===!0&&v.cameras.push(ue)}}for(let K=0;K<g.length;K++){const ee=w[K],re=g[K];ee!==null&&re!==void 0&&re.update(ee,V,u||o)}if(U&&U(k,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let K=null;for(const ee of M)V.detectedPlanes.has(ee)||(K===null&&(K=[]),K.push(ee));if(K!==null)for(const ee of K)M.delete(ee),E.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of V.detectedPlanes)if(!M.has(ee))M.add(ee),E.set(ee,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const re=E.get(ee);ee.lastChangedTime>re&&(E.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}m=null}const J=new cc;J.setAnimationLoop(X),this.setAnimationLoop=function(k){U=k},this.dispose=function(){}}}function q_(i,e){function t(p,f){f.color.getRGB(p.fogColor.value,ac(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,g,w,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),l(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,g,w):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ot&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ot&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const E=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*E}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let w;f.map?w=f.map:f.specularMap?w=f.specularMap:f.displacementMap?w=f.displacementMap:f.normalMap?w=f.normalMap:f.bumpMap?w=f.bumpMap:f.roughnessMap?w=f.roughnessMap:f.metalnessMap?w=f.metalnessMap:f.alphaMap?w=f.alphaMap:f.emissiveMap?w=f.emissiveMap:f.clearcoatMap?w=f.clearcoatMap:f.clearcoatNormalMap?w=f.clearcoatNormalMap:f.clearcoatRoughnessMap?w=f.clearcoatRoughnessMap:f.iridescenceMap?w=f.iridescenceMap:f.iridescenceThicknessMap?w=f.iridescenceThicknessMap:f.specularIntensityMap?w=f.specularIntensityMap:f.specularColorMap?w=f.specularColorMap:f.transmissionMap?w=f.transmissionMap:f.thicknessMap?w=f.thicknessMap:f.sheenColorMap?w=f.sheenColorMap:f.sheenRoughnessMap&&(w=f.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let M;f.aoMap?M=f.aoMap:f.lightMap&&(M=f.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,g,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=w*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M;f.map?M=f.map:f.alphaMap&&(M=f.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let g;f.map?g=f.map:f.alphaMap&&(g=f.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function l(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,g){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ot&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function X_(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function u(w,M){const E=M.program;n.uniformBlockBinding(w,E)}function c(w,M){let E=r[w.id];E===void 0&&(_(w),E=l(w),r[w.id]=E,w.addEventListener("dispose",f));const S=M.program;n.updateUBOMapping(w,S);const P=e.render.frame;s[w.id]!==P&&(d(w),s[w.id]=P)}function l(w){const M=h();w.__bindingPointIndex=M;const E=i.createBuffer(),S=w.__size,P=w.usage;return i.bindBuffer(35345,E),i.bufferData(35345,S,P),i.bindBuffer(35345,null),i.bindBufferBase(35345,M,E),E}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=r[w.id],E=w.uniforms,S=w.__cache;i.bindBuffer(35345,M);for(let P=0,I=E.length;P<I;P++){const v=E[P];if(m(v,P,S)===!0){const A=v.__offset,F=Array.isArray(v.value)?v.value:[v.value];let W=0;for(let ne=0;ne<F.length;ne++){const N=F[ne],y=p(N);typeof N=="number"?(v.__data[0]=N,i.bufferSubData(35345,A+W,v.__data)):N.isMatrix3?(v.__data[0]=N.elements[0],v.__data[1]=N.elements[1],v.__data[2]=N.elements[2],v.__data[3]=N.elements[0],v.__data[4]=N.elements[3],v.__data[5]=N.elements[4],v.__data[6]=N.elements[5],v.__data[7]=N.elements[0],v.__data[8]=N.elements[6],v.__data[9]=N.elements[7],v.__data[10]=N.elements[8],v.__data[11]=N.elements[0]):(N.toArray(v.__data,W),W+=y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,A,v.__data)}}i.bindBuffer(35345,null)}function m(w,M,E){const S=w.value;if(E[M]===void 0){if(typeof S=="number")E[M]=S;else{const P=Array.isArray(S)?S:[S],I=[];for(let v=0;v<P.length;v++)I.push(P[v].clone());E[M]=I}return!0}else if(typeof S=="number"){if(E[M]!==S)return E[M]=S,!0}else{const P=Array.isArray(E[M])?E[M]:[E[M]],I=Array.isArray(S)?S:[S];for(let v=0;v<P.length;v++){const A=P[v];if(A.equals(I[v])===!1)return A.copy(I[v]),!0}}return!1}function _(w){const M=w.uniforms;let E=0;const S=16;let P=0;for(let I=0,v=M.length;I<v;I++){const A=M[I],F={boundary:0,storage:0},W=Array.isArray(A.value)?A.value:[A.value];for(let ne=0,N=W.length;ne<N;ne++){const y=W[ne],C=p(y);F.boundary+=C.boundary,F.storage+=C.storage}if(A.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=E,I>0){P=E%S;const ne=S-P;P!==0&&ne-F.boundary<0&&(E+=S-P,A.__offset=E)}E+=F.storage}return P=E%S,P>0&&(E+=S-P),w.__size=E,w.__cache={},this}function p(w){const M={boundary:0,storage:0};return typeof w=="number"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function f(w){const M=w.target;M.removeEventListener("dispose",f);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function g(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:u,update:c,dispose:g}}function Y_(){const i=Xi("canvas");return i.style.display="block",i}function pc(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Y_(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,u=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let l;t!==null?l=t.getContextAttributes().alpha:l=i.alpha!==void 0?i.alpha:!1;let h=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gn,this.physicallyCorrectLights=!1,this.toneMapping=un,this.toneMappingExposure=1;const p=this;let f=!1,g=0,w=0,M=null,E=-1,S=null;const P=new $e,I=new $e;let v=null,A=e.width,F=e.height,W=1,ne=null,N=null;const y=new $e(0,0,A,F),C=new $e(0,0,A,F);let z=!1;const Y=new ao;let U=!1,X=!1,J=null;const k=new Je,V=new Oe,K=new D,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return M===null?W:1}let j=t;function Pe(b,O){for(let G=0;G<b.length;G++){const R=b[G],$=e.getContext(R,O);if($!==null)return $}return null}try{const b={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${no}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Re,!1),j===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),j=Pe(O,b),j===null)throw Pe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ue,ye,ce,Ue,we,xe,at,lt,ct,Lt,Ze,ke,Kt,Ft,T,x,H,Q,te,se,be,oe,q,_e;function ve(){ue=new om(j),ye=new Qp(j,ue,i),ue.init(ye),oe=new V_(j,ue,ye),ce=new B_(j,ue,ye),Ue=new cm,we=new E_,xe=new G_(j,ue,ce,we,ye,oe,Ue),at=new tm(p),lt=new sm(p),ct=new _d(j,ye),q=new Zp(j,ue,ct,ye),Lt=new am(j,ct,Ue,q),Ze=new fm(j,Lt,ct,Ue),te=new dm(j,ye,xe),x=new em(we),ke=new T_(p,at,lt,ue,ye,q,x),Kt=new q_(p,we),Ft=new C_,T=new O_(ue,ye),Q=new Jp(p,at,lt,ce,Ze,l,o),H=new z_(p,Ze,ye),_e=new X_(j,Ue,ye,ce),se=new Kp(j,ue,Ue,ye),be=new lm(j,ue,Ue,ye),Ue.programs=ke.programs,p.capabilities=ye,p.extensions=ue,p.properties=we,p.renderLists=Ft,p.shadowMap=H,p.state=ce,p.info=Ue}ve();const he=new j_(p,j);this.xr=he,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const b=ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(A,F,!1))},this.getSize=function(b){return b.set(A,F)},this.setSize=function(b,O,G){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,F=O,e.width=Math.floor(b*W),e.height=Math.floor(O*W),G!==!1&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(A*W,F*W).floor()},this.setDrawingBufferSize=function(b,O,G){A=b,F=O,W=G,e.width=Math.floor(b*G),e.height=Math.floor(O*G),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(y)},this.setViewport=function(b,O,G,R){b.isVector4?y.set(b.x,b.y,b.z,b.w):y.set(b,O,G,R),ce.viewport(P.copy(y).multiplyScalar(W).floor())},this.getScissor=function(b){return b.copy(C)},this.setScissor=function(b,O,G,R){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,O,G,R),ce.scissor(I.copy(C).multiplyScalar(W).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(b){ce.setScissorTest(z=b)},this.setOpaqueSort=function(b){ne=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(b=!0,O=!0,G=!0){let R=0;b&&(R|=16384),O&&(R|=256),G&&(R|=1024),j.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),Ft.dispose(),T.dispose(),we.dispose(),at.dispose(),lt.dispose(),Ze.dispose(),q.dispose(),_e.dispose(),ke.dispose(),he.dispose(),he.removeEventListener("sessionstart",ae),he.removeEventListener("sessionend",fe),J&&(J.dispose(),J=null),Ie.stop()};function ge(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const b=Ue.autoReset,O=H.enabled,G=H.autoUpdate,R=H.needsUpdate,$=H.type;ve(),Ue.autoReset=b,H.enabled=O,H.autoUpdate=G,H.needsUpdate=R,H.type=$}function Re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function He(b){const O=b.target;O.removeEventListener("dispose",He),tt(O)}function tt(b){L(b),we.remove(b)}function L(b){const O=we.get(b).programs;O!==void 0&&(O.forEach(function(G){ke.releaseProgram(G)}),b.isShaderMaterial&&ke.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,G,R,$,me){O===null&&(O=ee);const Me=$.isMesh&&$.matrixWorld.determinant()<0,Te=Lc(b,O,G,R,$);ce.setMaterial(R,Me);let Ee=G.index,De=1;R.wireframe===!0&&(Ee=Lt.getWireframeAttribute(G),De=2);const Ae=G.drawRange,Ce=G.attributes.position;let qe=Ae.start*De,vt=(Ae.start+Ae.count)*De;me!==null&&(qe=Math.max(qe,me.start*De),vt=Math.min(vt,(me.start+me.count)*De)),Ee!==null?(qe=Math.max(qe,0),vt=Math.min(vt,Ee.count)):Ce!=null&&(qe=Math.max(qe,0),vt=Math.min(vt,Ce.count));const en=vt-qe;if(en<0||en===1/0)return;q.setup($,R,Te,G,Ee);let xn,Xe=se;if(Ee!==null&&(xn=ct.get(Ee),Xe=be,Xe.setIndex(xn)),$.isMesh)R.wireframe===!0?(ce.setLineWidth(R.wireframeLinewidth*re()),Xe.setMode(1)):Xe.setMode(4);else if($.isLine){let Le=R.linewidth;Le===void 0&&(Le=1),ce.setLineWidth(Le*re()),$.isLineSegments?Xe.setMode(1):$.isLineLoop?Xe.setMode(2):Xe.setMode(3)}else $.isPoints?Xe.setMode(0):$.isSprite&&Xe.setMode(4);if($.isInstancedMesh)Xe.renderInstances(qe,en,$.count);else if(G.isInstancedBufferGeometry){const Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,jr=Math.min(G.instanceCount,Le);Xe.renderInstances(qe,en,jr)}else Xe.render(qe,en)},this.compile=function(b,O){function G(R,$,me){R.transparent===!0&&R.side===rr?(R.side=Ot,R.needsUpdate=!0,Pt(R,$,me),R.side=zn,R.needsUpdate=!0,Pt(R,$,me),R.side=rr):Pt(R,$,me)}d=T.get(b),d.init(),_.push(d),b.traverseVisible(function(R){R.isLight&&R.layers.test(O.layers)&&(d.pushLight(R),R.castShadow&&d.pushShadow(R))}),d.setupLights(p.physicallyCorrectLights),b.traverse(function(R){const $=R.material;if($)if(Array.isArray($))for(let me=0;me<$.length;me++){const Me=$[me];G(Me,b,R)}else G($,b,R)}),_.pop(),d=null};let B=null;function Z(b){B&&B(b)}function ae(){Ie.stop()}function fe(){Ie.start()}const Ie=new cc;Ie.setAnimationLoop(Z),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(b){B=b,he.setAnimationLoop(b),b===null?Ie.stop():Ie.start()},he.addEventListener("sessionstart",ae),he.addEventListener("sessionend",fe),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(O),O=he.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,O,M),d=T.get(b,_.length),d.init(),_.push(d),k.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(k),X=this.localClippingEnabled,U=x.init(this.clippingPlanes,X,O),h=Ft.get(b,m.length),h.init(),m.push(h),nt(b,O,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(ne,N),U===!0&&x.beginShadows();const G=d.state.shadowsArray;if(H.render(G,b,O),U===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(h,b),d.setupLights(p.physicallyCorrectLights),O.isArrayCamera){const R=O.cameras;for(let $=0,me=R.length;$<me;$++){const Me=R[$];st(h,b,Me,Me.viewport)}}else st(h,b,O);M!==null&&(xe.updateMultisampleRenderTarget(M),xe.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(p,b,O),q.resetDefaultState(),E=-1,S=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function nt(b,O,G,R){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){R&&K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(k);const Me=Ze.update(b),Te=b.material;Te.visible&&h.push(b,Me,Te,G,K.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ue.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ue.render.frame),!b.frustumCulled||Y.intersectsObject(b))){R&&K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(k);const Me=Ze.update(b),Te=b.material;if(Array.isArray(Te)){const Ee=Me.groups;for(let De=0,Ae=Ee.length;De<Ae;De++){const Ce=Ee[De],qe=Te[Ce.materialIndex];qe&&qe.visible&&h.push(b,Me,qe,G,K.z,Ce)}}else Te.visible&&h.push(b,Me,Te,G,K.z,null)}}const me=b.children;for(let Me=0,Te=me.length;Me<Te;Me++)nt(me[Me],O,G,R)}function st(b,O,G,R){const $=b.opaque,me=b.transmissive,Me=b.transparent;d.setupLightsView(G),me.length>0&&vn($,O,G),R&&ce.viewport(P.copy(R)),$.length>0&&We($,O,G),me.length>0&&We(me,O,G),Me.length>0&&We(Me,O,G),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function vn(b,O,G){const R=ye.isWebGL2;J===null&&(J=new Vn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?ji:Bn,minFilter:$i,samples:R&&s===!0?4:0})),p.getDrawingBufferSize(V),R?J.setSize(V.x,V.y):J.setSize(Fr(V.x),Fr(V.y));const $=p.getRenderTarget();p.setRenderTarget(J),p.clear();const me=p.toneMapping;p.toneMapping=un,We(b,O,G),p.toneMapping=me,xe.updateMultisampleRenderTarget(J),xe.updateRenderTargetMipmap(J),p.setRenderTarget($)}function We(b,O,G){const R=O.isScene===!0?O.overrideMaterial:null;for(let $=0,me=b.length;$<me;$++){const Me=b[$],Te=Me.object,Ee=Me.geometry,De=R===null?Me.material:R,Ae=Me.group;Te.layers.test(G.layers)&&Qt(Te,O,G,Ee,De,Ae)}}function Qt(b,O,G,R,$,me){b.onBeforeRender(p,O,G,R,$,me),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(p,O,G,R,b,me),$.transparent===!0&&$.side===rr?($.side=Ot,$.needsUpdate=!0,p.renderBufferDirect(G,O,R,$,b,me),$.side=zn,$.needsUpdate=!0,p.renderBufferDirect(G,O,R,$,b,me),$.side=rr):p.renderBufferDirect(G,O,R,$,b,me),b.onAfterRender(p,O,G,R,$,me)}function Pt(b,O,G){O.isScene!==!0&&(O=ee);const R=we.get(b),$=d.state.lights,me=d.state.shadowsArray,Me=$.state.version,Te=ke.getParameters(b,$.state,me,O,G),Ee=ke.getProgramCacheKey(Te);let De=R.programs;R.environment=b.isMeshStandardMaterial?O.environment:null,R.fog=O.fog,R.envMap=(b.isMeshStandardMaterial?lt:at).get(b.envMap||R.environment),De===void 0&&(b.addEventListener("dispose",He),De=new Map,R.programs=De);let Ae=De.get(Ee);if(Ae!==void 0){if(R.currentProgram===Ae&&R.lightsStateVersion===Me)return xo(b,Te),Ae}else Te.uniforms=ke.getUniforms(b),b.onBuild(G,Te,p),b.onBeforeCompile(Te,p),Ae=ke.acquireProgram(Te,Ee),De.set(Ee,Ae),R.uniforms=Te.uniforms;const Ce=R.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=x.uniform),xo(b,Te),R.needsLights=Rc(b),R.lightsStateVersion=Me,R.needsLights&&(Ce.ambientLightColor.value=$.state.ambient,Ce.lightProbe.value=$.state.probe,Ce.directionalLights.value=$.state.directional,Ce.directionalLightShadows.value=$.state.directionalShadow,Ce.spotLights.value=$.state.spot,Ce.spotLightShadows.value=$.state.spotShadow,Ce.rectAreaLights.value=$.state.rectArea,Ce.ltc_1.value=$.state.rectAreaLTC1,Ce.ltc_2.value=$.state.rectAreaLTC2,Ce.pointLights.value=$.state.point,Ce.pointLightShadows.value=$.state.pointShadow,Ce.hemisphereLights.value=$.state.hemi,Ce.directionalShadowMap.value=$.state.directionalShadowMap,Ce.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ce.spotShadowMap.value=$.state.spotShadowMap,Ce.spotLightMatrix.value=$.state.spotLightMatrix,Ce.spotLightMap.value=$.state.spotLightMap,Ce.pointShadowMap.value=$.state.pointShadowMap,Ce.pointShadowMatrix.value=$.state.pointShadowMatrix);const qe=Ae.getUniforms(),vt=Pr.seqWithValue(qe.seq,Ce);return R.currentProgram=Ae,R.uniformsList=vt,Ae}function xo(b,O){const G=we.get(b);G.outputEncoding=O.outputEncoding,G.instancing=O.instancing,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Lc(b,O,G,R,$){O.isScene!==!0&&(O=ee),xe.resetTextureUnits();const me=O.fog,Me=R.isMeshStandardMaterial?O.environment:null,Te=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Gn,Ee=(R.isMeshStandardMaterial?lt:at).get(R.envMap||Me),De=R.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ae=!!R.normalMap&&!!G.attributes.tangent,Ce=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,vt=!!G.morphAttributes.color,en=R.toneMapped?p.toneMapping:un,xn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Xe=xn!==void 0?xn.length:0,Le=we.get(R),jr=d.state.lights;if(U===!0&&(X===!0||b!==S)){const xt=b===S&&R.id===E;x.setState(R,b,xt)}let it=!1;R.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==jr.state.version||Le.outputEncoding!==Te||$.isInstancedMesh&&Le.instancing===!1||!$.isInstancedMesh&&Le.instancing===!0||$.isSkinnedMesh&&Le.skinning===!1||!$.isSkinnedMesh&&Le.skinning===!0||Le.envMap!==Ee||R.fog===!0&&Le.fog!==me||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==x.numPlanes||Le.numIntersection!==x.numIntersection)||Le.vertexAlphas!==De||Le.vertexTangents!==Ae||Le.morphTargets!==Ce||Le.morphNormals!==qe||Le.morphColors!==vt||Le.toneMapping!==en||ye.isWebGL2===!0&&Le.morphTargetsCount!==Xe)&&(it=!0):(it=!0,Le.__version=R.version);let yn=Le.currentProgram;it===!0&&(yn=Pt(R,O,$));let yo=!1,wi=!1,qr=!1;const ut=yn.getUniforms(),bn=Le.uniforms;if(ce.useProgram(yn.program)&&(yo=!0,wi=!0,qr=!0),R.id!==E&&(E=R.id,wi=!0),yo||S!==b){if(ut.setValue(j,"projectionMatrix",b.projectionMatrix),ye.logarithmicDepthBuffer&&ut.setValue(j,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),S!==b&&(S=b,wi=!0,qr=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const xt=ut.map.cameraPosition;xt!==void 0&&xt.setValue(j,K.setFromMatrixPosition(b.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ut.setValue(j,"isOrthographic",b.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||$.isSkinnedMesh)&&ut.setValue(j,"viewMatrix",b.matrixWorldInverse)}if($.isSkinnedMesh){ut.setOptional(j,$,"bindMatrix"),ut.setOptional(j,$,"bindMatrixInverse");const xt=$.skeleton;xt&&(ye.floatVertexTextures?(xt.boneTexture===null&&xt.computeBoneTexture(),ut.setValue(j,"boneTexture",xt.boneTexture,xe),ut.setValue(j,"boneTextureSize",xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xr=G.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0&&ye.isWebGL2===!0)&&te.update($,G,R,yn),(wi||Le.receiveShadow!==$.receiveShadow)&&(Le.receiveShadow=$.receiveShadow,ut.setValue(j,"receiveShadow",$.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(bn.envMap.value=Ee,bn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),wi&&(ut.setValue(j,"toneMappingExposure",p.toneMappingExposure),Le.needsLights&&Pc(bn,qr),me&&R.fog===!0&&Kt.refreshFogUniforms(bn,me),Kt.refreshMaterialUniforms(bn,R,W,F,J),Pr.upload(j,Le.uniformsList,bn,xe)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Pr.upload(j,Le.uniformsList,bn,xe),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ut.setValue(j,"center",$.center),ut.setValue(j,"modelViewMatrix",$.modelViewMatrix),ut.setValue(j,"normalMatrix",$.normalMatrix),ut.setValue(j,"modelMatrix",$.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const xt=R.uniformsGroups;for(let Yr=0,Dc=xt.length;Yr<Dc;Yr++)if(ye.isWebGL2){const bo=xt[Yr];_e.update(bo,yn),_e.bind(bo,yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yn}function Pc(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Rc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,O,G){we.get(b.texture).__webglTexture=O,we.get(b.depthTexture).__webglTexture=G;const R=we.get(b);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=G===void 0,R.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const G=we.get(b);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,G=0){M=b,g=O,w=G;let R=!0,$=null,me=!1,Me=!1;if(b){const Ee=we.get(b);Ee.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),R=!1):Ee.__webglFramebuffer===void 0?xe.setupRenderTarget(b):Ee.__hasExternalTextures&&xe.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);const De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Me=!0);const Ae=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?($=Ae[O],me=!0):ye.isWebGL2&&b.samples>0&&xe.useMultisampledRTT(b)===!1?$=we.get(b).__webglMultisampledFramebuffer:$=Ae,P.copy(b.viewport),I.copy(b.scissor),v=b.scissorTest}else P.copy(y).multiplyScalar(W).floor(),I.copy(C).multiplyScalar(W).floor(),v=z;if(ce.bindFramebuffer(36160,$)&&ye.drawBuffers&&R&&ce.drawBuffers(b,$),ce.viewport(P),ce.scissor(I),ce.setScissorTest(v),me){const Ee=we.get(b.texture);j.framebufferTexture2D(36160,36064,34069+O,Ee.__webglTexture,G)}else if(Me){const Ee=we.get(b.texture),De=O||0;j.framebufferTextureLayer(36160,36064,Ee.__webglTexture,G||0,De)}E=-1},this.readRenderTargetPixels=function(b,O,G,R,$,me,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){ce.bindFramebuffer(36160,Te);try{const Ee=b.texture,De=Ee.format,Ae=Ee.type;if(De!==Gt&&oe.convert(De)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ae===ji&&(ue.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Ae!==Bn&&oe.convert(Ae)!==j.getParameter(35738)&&!(Ae===In&&(ye.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-R&&G>=0&&G<=b.height-$&&j.readPixels(O,G,R,$,oe.convert(De),oe.convert(Ae),me)}finally{const Ee=M!==null?we.get(M).__webglFramebuffer:null;ce.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(b,O,G=0){const R=Math.pow(2,-G),$=Math.floor(O.image.width*R),me=Math.floor(O.image.height*R);xe.setTexture2D(O,0),j.copyTexSubImage2D(3553,G,0,0,b.x,b.y,$,me),ce.unbindTexture()},this.copyTextureToTexture=function(b,O,G,R=0){const $=O.image.width,me=O.image.height,Me=oe.convert(G.format),Te=oe.convert(G.type);xe.setTexture2D(G,0),j.pixelStorei(37440,G.flipY),j.pixelStorei(37441,G.premultiplyAlpha),j.pixelStorei(3317,G.unpackAlignment),O.isDataTexture?j.texSubImage2D(3553,R,b.x,b.y,$,me,Me,Te,O.image.data):O.isCompressedTexture?j.compressedTexSubImage2D(3553,R,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Me,O.mipmaps[0].data):j.texSubImage2D(3553,R,b.x,b.y,Me,Te,O.image),R===0&&G.generateMipmaps&&j.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(b,O,G,R,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,Te=b.max.z-b.min.z+1,Ee=oe.convert(R.format),De=oe.convert(R.type);let Ae;if(R.isData3DTexture)xe.setTexture3D(R,0),Ae=32879;else if(R.isDataArrayTexture)xe.setTexture2DArray(R,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,R.flipY),j.pixelStorei(37441,R.premultiplyAlpha),j.pixelStorei(3317,R.unpackAlignment);const Ce=j.getParameter(3314),qe=j.getParameter(32878),vt=j.getParameter(3316),en=j.getParameter(3315),xn=j.getParameter(32877),Xe=G.isCompressedTexture?G.mipmaps[0]:G.image;j.pixelStorei(3314,Xe.width),j.pixelStorei(32878,Xe.height),j.pixelStorei(3316,b.min.x),j.pixelStorei(3315,b.min.y),j.pixelStorei(32877,b.min.z),G.isDataTexture||G.isData3DTexture?j.texSubImage3D(Ae,$,O.x,O.y,O.z,me,Me,Te,Ee,De,Xe.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ae,$,O.x,O.y,O.z,me,Me,Te,Ee,Xe.data)):j.texSubImage3D(Ae,$,O.x,O.y,O.z,me,Me,Te,Ee,De,Xe),j.pixelStorei(3314,Ce),j.pixelStorei(32878,qe),j.pixelStorei(3316,vt),j.pixelStorei(3315,en),j.pixelStorei(32877,xn),$===0&&R.generateMipmaps&&j.generateMipmap(Ae),ce.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?xe.setTextureCube(b,0):b.isData3DTexture?xe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?xe.setTexture2DArray(b,0):xe.setTexture2D(b,0),ce.unbindTexture()},this.resetState=function(){g=0,w=0,M=null,ce.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class J_ extends pc{}J_.prototype.isWebGL1Renderer=!0;class Z_ extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class uo extends hn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+a,Math.PI);let c=0;const l=[],h=new D,d=new D,m=[],_=[],p=[],f=[];for(let g=0;g<=n;g++){const w=[],M=g/n;let E=0;g==0&&o==0?E=.5/t:g==n&&u==Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){const P=S/t;h.x=-e*Math.cos(r+P*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(r+P*s)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),p.push(d.x,d.y,d.z),f.push(P+E,1-M),w.push(c++)}l.push(w)}for(let g=0;g<n;g++)for(let w=0;w<t;w++){const M=l[g][w+1],E=l[g][w],S=l[g+1][w],P=l[g+1][w+1];(g!==0||o>0)&&m.push(M,E,P),(g!==n-1||u<Math.PI)&&m.push(E,S,P)}this.setIndex(m),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(p,3)),this.setAttribute("uv",new At(f,2))}static fromJSON(e){return new uo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ho extends hn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],u=[],c=[],l=new D,h=new D,d=new D;for(let m=0;m<=n;m++)for(let _=0;_<=r;_++){const p=_/r*s,f=m/n*Math.PI*2;h.x=(e+t*Math.cos(f))*Math.cos(p),h.y=(e+t*Math.cos(f))*Math.sin(p),h.z=t*Math.sin(f),a.push(h.x,h.y,h.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(h,l).normalize(),u.push(d.x,d.y,d.z),c.push(_/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=r;_++){const p=(r+1)*m+_-1,f=(r+1)*(m-1)+_-1,g=(r+1)*(m-1)+_,w=(r+1)*m+_;o.push(p,f,w),o.push(f,g,w)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(c,2))}static fromJSON(e){return new ho(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Qa extends tr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const el={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class K_{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,s===!1&&r.onStart!==void 0&&r.onStart(l,o,a),s=!0},this.itemEnd=function(l){o++,r.onProgress!==void 0&&r.onProgress(l,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return u?u(l):l},this.setURLModifier=function(l){return u=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){const h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(l))return _}return null}}}const Q_=new K_;class mc{constructor(e){this.manager=e!==void 0?e:Q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class eg extends mc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=el.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Xi("img");function u(){l(),el.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){l(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){a.removeEventListener("load",u,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class tg extends mc{constructor(e){super(e)}load(e,t,n,r){const s=new oo,o=new eg(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function u(c){o.load(e[c],function(l){s.images[c]=l,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)u(c);return s}}class _c extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Cs=new Je,tl=new D,nl=new D;class ng{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tl.setFromMatrixPosition(e.matrixWorld),t.position.copy(tl),nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nl),t.updateMatrixWorld(),Cs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const il=new Je,Di=new D,Ls=new D;class ig extends ng{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Di.setFromMatrixPosition(e.matrixWorld),n.position.copy(Di),Ls.copy(n.position),Ls.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ls),n.updateMatrixWorld(),r.makeTranslation(-Di.x,-Di.y,-Di.z),il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il)}}class rg extends _c{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ig}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sg extends _c{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);function gc(){const i=new Z_,e=new wt(75,window.innerWidth/window.innerHeight,.1,1e3),t=new pc({canvas:document.querySelector("#bg")});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),e.position.setZ(30),e.position.setX(-3),t.render(i,e);const n=new ho(10,3,16,100),r=new Qa({color:16737095,wireframe:!0}),s=new Yt(n,r);i.add(s);const o=new rg(16777215);o.position.set(5,5,5);const a=new sg(16777215);i.add(o,a);function u(){const d=new uo(.25,24,24),m=new Qa({color:16777215}),_=new Yt(d,m),[p,f,g]=Array(3).fill().map(()=>Xh.randFloatSpread(100));_.position.set(p,f,g),i.add(_)}Array(100).fill().forEach(u);const c=new tg().setPath("/cubemap/").load(["right.png","left.png","top.png","bottom.png","front.png","back.png"]);i.background=c;function l(){const d=document.body.getBoundingClientRect().top;e.position.z=d*-.01,e.position.x=d*-2e-4,e.rotation.x=d*2e-4,e.rotation.z=d*2e-4}document.body.onscroll=l,l(),window.onresize=function(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)};function h(){requestAnimationFrame(h),s.rotation.x+=.01,s.rotation.y+=.005,s.rotation.z+=.01,t.render(i,e)}h()}function vc(i){return le(Ct,{children:le("div",{className:"bg-green-700 min-w-72 h-80 border-b-4 border-r-4 border-green-900 overflow-y-hidden px-3",children:[le("h1",{className:"text-3xl text-center text-slate-100 font-extrabold",children:i.title}),le("h2",{className:"text-xl text-center text-slate-100",children:i.header}),le("p",{className:"text-center",children:i.body})]})})}const og="modulepreload",ag=function(i){return"/"+i},rl={},Br=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=ag(s),s in rl)return;rl[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":og,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((l,h)=>{c.addEventListener("load",l),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};var lg=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};const cg=i=>{let e;return i?e=i:typeof fetch>"u"?e=(...t)=>lg(void 0,void 0,void 0,function*(){return yield(yield Br(()=>Promise.resolve().then(()=>Gr),void 0)).fetch(...t)}):e=fetch,(...t)=>e(...t)};class fo extends Error{constructor(e,t="FunctionsError",n){super(e),super.name=t,this.context=n}}class ug extends fo{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class hg extends fo{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class dg extends fo{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var fg=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};class pg{constructor(e,{headers:t={},customFetch:n}={}){this.url=e,this.headers=t,this.fetch=cg(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e,t={}){var n;return fg(this,void 0,void 0,function*(){try{const{headers:r,body:s}=t;let o={},a;s&&(r&&!Object.prototype.hasOwnProperty.call(r,"Content-Type")||!r)&&(typeof Blob<"u"&&s instanceof Blob||s instanceof ArrayBuffer?(o["Content-Type"]="application/octet-stream",a=s):typeof s=="string"?(o["Content-Type"]="text/plain",a=s):typeof FormData<"u"&&s instanceof FormData?a=s:(o["Content-Type"]="application/json",a=JSON.stringify(s)));const u=yield this.fetch(`${this.url}/${e}`,{method:"POST",headers:Object.assign(Object.assign(Object.assign({},o),this.headers),r),body:a}).catch(d=>{throw new ug(d)}),c=u.headers.get("x-relay-error");if(c&&c==="true")throw new hg(u);if(!u.ok)throw new dg(u);let l=((n=u.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),h;return l==="application/json"?h=yield u.json():l==="application/octet-stream"?h=yield u.blob():l==="multipart/form-data"?h=yield u.formData():h=yield u.text(),{data:h,error:null}}catch(r){return{data:null,error:r}}})}}var mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _g(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var vi={},gg={get exports(){return vi},set exports(i){vi=i}};(function(i,e){var t=typeof self<"u"?self:mg,n=function(){function s(){this.fetch=!1,this.DOMException=t.DOMException}return s.prototype=t,new s}();(function(s){(function(o){var a={searchParams:"URLSearchParams"in s,iterable:"Symbol"in s&&"iterator"in Symbol,blob:"FileReader"in s&&"Blob"in s&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in s,arrayBuffer:"ArrayBuffer"in s};function u(y){return y&&DataView.prototype.isPrototypeOf(y)}if(a.arrayBuffer)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(y){return y&&c.indexOf(Object.prototype.toString.call(y))>-1};function h(y){if(typeof y!="string"&&(y=String(y)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(y))throw new TypeError("Invalid character in header field name");return y.toLowerCase()}function d(y){return typeof y!="string"&&(y=String(y)),y}function m(y){var C={next:function(){var z=y.shift();return{done:z===void 0,value:z}}};return a.iterable&&(C[Symbol.iterator]=function(){return C}),C}function _(y){this.map={},y instanceof _?y.forEach(function(C,z){this.append(z,C)},this):Array.isArray(y)?y.forEach(function(C){this.append(C[0],C[1])},this):y&&Object.getOwnPropertyNames(y).forEach(function(C){this.append(C,y[C])},this)}_.prototype.append=function(y,C){y=h(y),C=d(C);var z=this.map[y];this.map[y]=z?z+", "+C:C},_.prototype.delete=function(y){delete this.map[h(y)]},_.prototype.get=function(y){return y=h(y),this.has(y)?this.map[y]:null},_.prototype.has=function(y){return this.map.hasOwnProperty(h(y))},_.prototype.set=function(y,C){this.map[h(y)]=d(C)},_.prototype.forEach=function(y,C){for(var z in this.map)this.map.hasOwnProperty(z)&&y.call(C,this.map[z],z,this)},_.prototype.keys=function(){var y=[];return this.forEach(function(C,z){y.push(z)}),m(y)},_.prototype.values=function(){var y=[];return this.forEach(function(C){y.push(C)}),m(y)},_.prototype.entries=function(){var y=[];return this.forEach(function(C,z){y.push([z,C])}),m(y)},a.iterable&&(_.prototype[Symbol.iterator]=_.prototype.entries);function p(y){if(y.bodyUsed)return Promise.reject(new TypeError("Already read"));y.bodyUsed=!0}function f(y){return new Promise(function(C,z){y.onload=function(){C(y.result)},y.onerror=function(){z(y.error)}})}function g(y){var C=new FileReader,z=f(C);return C.readAsArrayBuffer(y),z}function w(y){var C=new FileReader,z=f(C);return C.readAsText(y),z}function M(y){for(var C=new Uint8Array(y),z=new Array(C.length),Y=0;Y<C.length;Y++)z[Y]=String.fromCharCode(C[Y]);return z.join("")}function E(y){if(y.slice)return y.slice(0);var C=new Uint8Array(y.byteLength);return C.set(new Uint8Array(y)),C.buffer}function S(){return this.bodyUsed=!1,this._initBody=function(y){this._bodyInit=y,y?typeof y=="string"?this._bodyText=y:a.blob&&Blob.prototype.isPrototypeOf(y)?this._bodyBlob=y:a.formData&&FormData.prototype.isPrototypeOf(y)?this._bodyFormData=y:a.searchParams&&URLSearchParams.prototype.isPrototypeOf(y)?this._bodyText=y.toString():a.arrayBuffer&&a.blob&&u(y)?(this._bodyArrayBuffer=E(y.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(y)||l(y))?this._bodyArrayBuffer=E(y):this._bodyText=y=Object.prototype.toString.call(y):this._bodyText="",this.headers.get("content-type")||(typeof y=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):a.searchParams&&URLSearchParams.prototype.isPrototypeOf(y)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a.blob&&(this.blob=function(){var y=p(this);if(y)return y;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var y=p(this);if(y)return y;if(this._bodyBlob)return w(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(M(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a.formData&&(this.formData=function(){return this.text().then(A)}),this.json=function(){return this.text().then(JSON.parse)},this}var P=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function I(y){var C=y.toUpperCase();return P.indexOf(C)>-1?C:y}function v(y,C){C=C||{};var z=C.body;if(y instanceof v){if(y.bodyUsed)throw new TypeError("Already read");this.url=y.url,this.credentials=y.credentials,C.headers||(this.headers=new _(y.headers)),this.method=y.method,this.mode=y.mode,this.signal=y.signal,!z&&y._bodyInit!=null&&(z=y._bodyInit,y.bodyUsed=!0)}else this.url=String(y);if(this.credentials=C.credentials||this.credentials||"same-origin",(C.headers||!this.headers)&&(this.headers=new _(C.headers)),this.method=I(C.method||this.method||"GET"),this.mode=C.mode||this.mode||null,this.signal=C.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&z)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(z)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})};function A(y){var C=new FormData;return y.trim().split("&").forEach(function(z){if(z){var Y=z.split("="),U=Y.shift().replace(/\+/g," "),X=Y.join("=").replace(/\+/g," ");C.append(decodeURIComponent(U),decodeURIComponent(X))}}),C}function F(y){var C=new _,z=y.replace(/\r?\n[\t ]+/g," ");return z.split(/\r?\n/).forEach(function(Y){var U=Y.split(":"),X=U.shift().trim();if(X){var J=U.join(":").trim();C.append(X,J)}}),C}S.call(v.prototype);function W(y,C){C||(C={}),this.type="default",this.status=C.status===void 0?200:C.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in C?C.statusText:"OK",this.headers=new _(C.headers),this.url=C.url||"",this._initBody(y)}S.call(W.prototype),W.prototype.clone=function(){return new W(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new _(this.headers),url:this.url})},W.error=function(){var y=new W(null,{status:0,statusText:""});return y.type="error",y};var ne=[301,302,303,307,308];W.redirect=function(y,C){if(ne.indexOf(C)===-1)throw new RangeError("Invalid status code");return new W(null,{status:C,headers:{location:y}})},o.DOMException=s.DOMException;try{new o.DOMException}catch{o.DOMException=function(C,z){this.message=C,this.name=z;var Y=Error(C);this.stack=Y.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function N(y,C){return new Promise(function(z,Y){var U=new v(y,C);if(U.signal&&U.signal.aborted)return Y(new o.DOMException("Aborted","AbortError"));var X=new XMLHttpRequest;function J(){X.abort()}X.onload=function(){var k={status:X.status,statusText:X.statusText,headers:F(X.getAllResponseHeaders()||"")};k.url="responseURL"in X?X.responseURL:k.headers.get("X-Request-URL");var V="response"in X?X.response:X.responseText;z(new W(V,k))},X.onerror=function(){Y(new TypeError("Network request failed"))},X.ontimeout=function(){Y(new TypeError("Network request failed"))},X.onabort=function(){Y(new o.DOMException("Aborted","AbortError"))},X.open(U.method,U.url,!0),U.credentials==="include"?X.withCredentials=!0:U.credentials==="omit"&&(X.withCredentials=!1),"responseType"in X&&a.blob&&(X.responseType="blob"),U.headers.forEach(function(k,V){X.setRequestHeader(V,k)}),U.signal&&(U.signal.addEventListener("abort",J),X.onreadystatechange=function(){X.readyState===4&&U.signal.removeEventListener("abort",J)}),X.send(typeof U._bodyInit>"u"?null:U._bodyInit)})}return N.polyfill=!0,s.fetch||(s.fetch=N,s.Headers=_,s.Request=v,s.Response=W),o.Headers=_,o.Request=v,o.Response=W,o.fetch=N,Object.defineProperty(o,"__esModule",{value:!0}),o})({})})(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var r=n;e=r.fetch,e.default=r.fetch,e.fetch=r.fetch,e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response,i.exports=e})(gg,vi);const po=_g(vi),Gr=Ic({__proto__:null,default:po},[vi]);var vg=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};class xg{constructor(e){this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=e.headers,this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError,this.signal=e.signal,this.allowEmpty=e.allowEmpty,e.fetch?this.fetch=e.fetch:typeof fetch>"u"?this.fetch=po:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}then(e,t){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const n=this.fetch;let r=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(s=>vg(this,void 0,void 0,function*(){var o,a,u;let c=null,l=null,h=null,d=s.status,m=s.statusText;if(s.ok){if(this.method!=="HEAD"){const g=yield s.text();g===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?l=g:l=JSON.parse(g))}const p=(o=this.headers.Prefer)===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),f=(a=s.headers.get("content-range"))===null||a===void 0?void 0:a.split("/");p&&f&&f.length>1&&(h=parseInt(f[1]))}else{const p=yield s.text();try{c=JSON.parse(p),Array.isArray(c)&&s.status===404&&(l=[],c=null,d=200,m="OK")}catch{s.status===404&&p===""?(d=204,m="No Content"):c={message:p}}if(c&&this.allowEmpty&&(!((u=c==null?void 0:c.details)===null||u===void 0)&&u.includes("Results contain 0 rows"))&&(c=null,d=200,m="OK"),c&&this.shouldThrowOnError)throw c}return{error:c,data:l,count:h,status:d,statusText:m}}));return this.shouldThrowOnError||(r=r.catch(s=>({error:{message:`FetchError: ${s.message}`,details:"",hint:"",code:s.code||""},data:null,count:null,status:0,statusText:""}))),r.then(e,t)}}class yg extends xg{select(e){let t=!1;const n=(e??"*").split("").map(r=>/\s/.test(r)&&!t?"":(r==='"'&&(t=!t),r)).join("");return this.url.searchParams.set("select",n),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:r}={}){const s=r?`${r}.order`:"order",o=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${o?`${o},`:""}${e}.${t?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(e,{foreignTable:t}={}){const n=typeof t>"u"?"limit":`${t}.limit`;return this.url.searchParams.set(n,`${e}`),this}range(e,t,{foreignTable:n}={}){const r=typeof n>"u"?"offset":`${n}.offset`,s=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(r,`${e}`),this.url.searchParams.set(s,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.headers.Accept="application/vnd.pgrst.object+json",this.allowEmpty=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:r=!1,wal:s=!1,format:o="text"}={}){const a=[e?"analyze":null,t?"verbose":null,n?"settings":null,r?"buffers":null,s?"wal":null].filter(Boolean).join("|"),u=this.headers.Accept;return this.headers.Accept=`application/vnd.pgrst.plan+${o}; for="${u}"; options=${a};`,o==="json"?this:this}rollback(){var e;return((e=this.headers.Prefer)!==null&&e!==void 0?e:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}class li extends yg{eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}in(e,t){const n=t.map(r=>typeof r=="string"&&new RegExp("[,()]").test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(e,`in.(${n})`),this}contains(e,t){return typeof t=="string"?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(",")}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t=="string"?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(",")}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t=="string"?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(",")}}`),this}textSearch(e,t,{config:n,type:r}={}){let s="";r==="plain"?s="pl":r==="phrase"?s="ph":r==="websearch"&&(s="w");const o=n===void 0?"":`(${n})`;return this.url.searchParams.append(e,`${s}fts${o}.${t}`),this}match(e){return Object.entries(e).forEach(([t,n])=>{this.url.searchParams.append(t,`eq.${n}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t}={}){const n=t?`${t}.or`:"or";return this.url.searchParams.append(n,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}}class bg{constructor(e,{headers:t={},schema:n,fetch:r}){this.url=e,this.headers=t,this.schema=n,this.fetch=r}select(e,{head:t=!1,count:n}={}){const r=t?"HEAD":"GET";let s=!1;const o=(e??"*").split("").map(a=>/\s/.test(a)&&!s?"":(a==='"'&&(s=!s),a)).join("");return this.url.searchParams.set("select",o),n&&(this.headers.Prefer=`count=${n}`),new li({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(e,{count:t}={}){const n="POST",r=[],s=e;if(t&&r.push(`count=${t}`),this.headers.Prefer&&r.unshift(this.headers.Prefer),this.headers.Prefer=r.join(","),Array.isArray(e)){const o=e.reduce((a,u)=>a.concat(Object.keys(u)),[]);if(o.length>0){const a=[...new Set(o)].map(u=>`"${u}"`);this.url.searchParams.set("columns",a.join(","))}}return new li({method:n,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:this.fetch,allowEmpty:!1})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:r}={}){const s="POST",o=[`resolution=${n?"ignore":"merge"}-duplicates`];t!==void 0&&this.url.searchParams.set("on_conflict",t);const a=e;return r&&o.push(`count=${r}`),this.headers.Prefer&&o.unshift(this.headers.Prefer),this.headers.Prefer=o.join(","),new li({method:s,url:this.url,headers:this.headers,schema:this.schema,body:a,fetch:this.fetch,allowEmpty:!1})}update(e,{count:t}={}){const n="PATCH",r=[],s=e;return t&&r.push(`count=${t}`),this.headers.Prefer&&r.unshift(this.headers.Prefer),this.headers.Prefer=r.join(","),new li({method:n,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:this.fetch,allowEmpty:!1})}delete({count:e}={}){const t="DELETE",n=[];return e&&n.push(`count=${e}`),this.headers.Prefer&&n.unshift(this.headers.Prefer),this.headers.Prefer=n.join(","),new li({method:t,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}const Mg="1.1.1",Sg={"X-Client-Info":`postgrest-js/${Mg}`};class wg{constructor(e,{headers:t={},schema:n,fetch:r}={}){this.url=e,this.headers=Object.assign(Object.assign({},Sg),t),this.schema=n,this.fetch=r}from(e){const t=new URL(`${this.url}/${e}`);return new bg(t,{headers:Object.assign({},this.headers),schema:this.schema,fetch:this.fetch})}rpc(e,t={},{head:n=!1,count:r}={}){let s;const o=new URL(`${this.url}/rpc/${e}`);let a;n?(s="HEAD",Object.entries(t).forEach(([c,l])=>{o.searchParams.append(c,`${l}`)})):(s="POST",a=t);const u=Object.assign({},this.headers);return r&&(u.Prefer=`count=${r}`),new li({method:s,url:o,headers:u,schema:this.schema,body:a,fetch:this.fetch,allowEmpty:!1})}}var Ps,sl;function Tg(){if(sl)return Ps;sl=1;var i=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};return Ps=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return i()}try{return __global__||i()}finally{delete Object.prototype.__global__}}(),Ps}const Eg="websocket",Ag="Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",Cg=["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],Lg="Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",Pg=["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],Rg="1.0.34",Dg={type:"git",url:"https://github.com/theturtle32/WebSocket-Node.git"},Ig="https://github.com/theturtle32/WebSocket-Node",Og={node:">=4.0.0"},Fg={bufferutil:"^4.0.1",debug:"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2",yaeti:"^0.0.6"},Ng={"buffer-equal":"^1.0.0",gulp:"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1",jshint:"^2.0.0",tape:"^4.9.1"},Ug={verbose:!1},kg={test:"tape test/unit/*.js",gulp:"gulp"},zg="index",Bg={lib:"./lib"},Gg="lib/browser.js",Vg="Apache-2.0",Hg={name:Eg,description:Ag,keywords:Cg,author:Lg,contributors:Pg,version:Rg,repository:Dg,homepage:Ig,engines:Og,dependencies:Fg,devDependencies:Ng,config:Ug,scripts:kg,main:zg,directories:Bg,browser:Gg,license:Vg};var Wg=Hg.version,Cn;if(typeof globalThis=="object")Cn=globalThis;else try{Cn=Tg()}catch{}finally{if(!Cn&&typeof window<"u"&&(Cn=window),!Cn)throw new Error("Could not determine global this")}var Yi=Cn.WebSocket||Cn.MozWebSocket,$g=Wg;function xc(i,e){var t;return e?t=new Yi(i,e):t=new Yi(i),t}Yi&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(i){Object.defineProperty(xc,i,{get:function(){return Yi[i]}})});var jg={w3cwebsocket:Yi?xc:null,version:$g};const qg="2.1.0",Xg={"X-Client-Info":`realtime-js/${qg}`},Yg="1.0.0",yc=1e4,Jg=1e3;var Vi;(function(i){i[i.connecting=0]="connecting",i[i.open=1]="open",i[i.closing=2]="closing",i[i.closed=3]="closed"})(Vi||(Vi={}));var Mt;(function(i){i.closed="closed",i.errored="errored",i.joined="joined",i.joining="joining",i.leaving="leaving"})(Mt||(Mt={}));var zt;(function(i){i.close="phx_close",i.error="phx_error",i.join="phx_join",i.reply="phx_reply",i.leave="phx_leave",i.access_token="access_token"})(zt||(zt={}));var qs;(function(i){i.websocket="websocket"})(qs||(qs={}));var Ln;(function(i){i.Connecting="connecting",i.Open="open",i.Closing="closing",i.Closed="closed"})(Ln||(Ln={}));class bc{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}class Zg{constructor(){this.HEADER_LENGTH=1}decode(e,t){return e.constructor===ArrayBuffer?t(this._binaryDecode(e)):t(typeof e=="string"?JSON.parse(e):{})}_binaryDecode(e){const t=new DataView(e),n=new TextDecoder;return this._decodeBroadcast(e,t,n)}_decodeBroadcast(e,t,n){const r=t.getUint8(1),s=t.getUint8(2);let o=this.HEADER_LENGTH+2;const a=n.decode(e.slice(o,o+r));o=o+r;const u=n.decode(e.slice(o,o+s));o=o+s;const c=JSON.parse(n.decode(e.slice(o,e.byteLength)));return{ref:null,topic:a,event:u,payload:c}}}class Rs{constructor(e,t,n={},r=yc){this.channel=e,this.event=t,this.payload=n,this.timeout=r,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null,this.rateLimited=!1}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){if(this._hasReceived("timeout"))return;this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()})==="rate limited"&&(this.rateLimited=!0)}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var n;return this._hasReceived(e)&&t((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=t=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=t,this._matchReceive(t)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(n=>n.status===e).forEach(n=>n.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var ol;(function(i){i.SYNC="sync",i.JOIN="join",i.LEAVE="leave"})(ol||(ol={}));class Hi{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(t==null?void 0:t.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},r=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Hi.syncState(this.state,r,s,o),this.pendingDiffs.forEach(u=>{this.state=Hi.syncDiff(this.state,u,s,o)}),this.pendingDiffs=[],a()}),this.channel._on(n.diff,{},r=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=Hi.syncDiff(this.state,r,s,o),a())}),this.onJoin((r,s,o)=>{this.channel._trigger("presence",{event:"join",key:r,currentPresences:s,newPresences:o})}),this.onLeave((r,s,o)=>{this.channel._trigger("presence",{event:"leave",key:r,currentPresences:s,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,n,r){const s=this.cloneDeep(e),o=this.transformState(t),a={},u={};return this.map(s,(c,l)=>{o[c]||(u[c]=l)}),this.map(o,(c,l)=>{const h=s[c];if(h){const d=l.map(f=>f.presence_ref),m=h.map(f=>f.presence_ref),_=l.filter(f=>m.indexOf(f.presence_ref)<0),p=h.filter(f=>d.indexOf(f.presence_ref)<0);_.length>0&&(a[c]=_),p.length>0&&(u[c]=p)}else a[c]=l}),this.syncDiff(s,{joins:a,leaves:u},n,r)}static syncDiff(e,t,n,r){const{joins:s,leaves:o}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return n||(n=()=>{}),r||(r=()=>{}),this.map(s,(a,u)=>{var c;const l=(c=e[a])!==null&&c!==void 0?c:[];if(e[a]=this.cloneDeep(u),l.length>0){const h=e[a].map(m=>m.presence_ref),d=l.filter(m=>h.indexOf(m.presence_ref)<0);e[a].unshift(...d)}n(a,l,u)}),this.map(o,(a,u)=>{let c=e[a];if(!c)return;const l=u.map(h=>h.presence_ref);c=c.filter(h=>l.indexOf(h.presence_ref)<0),e[a]=c,r(a,c,u),c.length===0&&delete e[a]}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{const r=e[n];return"metas"in r?t[n]=r.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):t[n]=r,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var ze;(function(i){i.abstime="abstime",i.bool="bool",i.date="date",i.daterange="daterange",i.float4="float4",i.float8="float8",i.int2="int2",i.int4="int4",i.int4range="int4range",i.int8="int8",i.int8range="int8range",i.json="json",i.jsonb="jsonb",i.money="money",i.numeric="numeric",i.oid="oid",i.reltime="reltime",i.text="text",i.time="time",i.timestamp="timestamp",i.timestamptz="timestamptz",i.timetz="timetz",i.tsrange="tsrange",i.tstzrange="tstzrange"})(ze||(ze={}));const al=(i,e,t={})=>{var n;const r=(n=t.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(e).reduce((s,o)=>(s[o]=Kg(o,i,e,r),s),{})},Kg=(i,e,t,n)=>{const r=e.find(a=>a.name===i),s=r==null?void 0:r.type,o=t[i];return s&&!n.includes(s)?Mc(s,o):Xs(o)},Mc=(i,e)=>{if(i.charAt(0)==="_"){const t=i.slice(1,i.length);return n0(e,t)}switch(i){case ze.bool:return Qg(e);case ze.float4:case ze.float8:case ze.int2:case ze.int4:case ze.int8:case ze.numeric:case ze.oid:return e0(e);case ze.json:case ze.jsonb:return t0(e);case ze.timestamp:return i0(e);case ze.abstime:case ze.date:case ze.daterange:case ze.int4range:case ze.int8range:case ze.money:case ze.reltime:case ze.text:case ze.time:case ze.timestamptz:case ze.timetz:case ze.tsrange:case ze.tstzrange:return Xs(e);default:return Xs(e)}},Xs=i=>i,Qg=i=>{switch(i){case"t":return!0;case"f":return!1;default:return i}},e0=i=>{if(typeof i=="string"){const e=parseFloat(i);if(!Number.isNaN(e))return e}return i},t0=i=>{if(typeof i=="string")try{return JSON.parse(i)}catch(e){return console.log(`JSON parse error: ${e}`),i}return i},n0=(i,e)=>{if(typeof i!="string")return i;const t=i.length-1,n=i[t];if(i[0]==="{"&&n==="}"){let s;const o=i.slice(1,t);try{s=JSON.parse("["+o+"]")}catch{s=o?o.split(","):[]}return s.map(a=>Mc(e,a))}return i},i0=i=>typeof i=="string"?i.replace(" ","T"):i;var ll=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})},cl;(function(i){i.ALL="*",i.INSERT="INSERT",i.UPDATE="UPDATE",i.DELETE="DELETE"})(cl||(cl={}));var ul;(function(i){i.BROADCAST="broadcast",i.PRESENCE="presence",i.POSTGRES_CHANGES="postgres_changes"})(ul||(ul={}));var hl;(function(i){i.SUBSCRIBED="SUBSCRIBED",i.TIMED_OUT="TIMED_OUT",i.CLOSED="CLOSED",i.CHANNEL_ERROR="CHANNEL_ERROR"})(hl||(hl={}));class mo{constructor(e,t={config:{}},n){this.topic=e,this.params=t,this.socket=n,this.bindings={},this.state=Mt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""}},t.config),this.timeout=this.socket.timeout,this.joinPush=new Rs(this,zt.join,this.params,this.timeout),this.rejoinTimer=new bc(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Mt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Mt.closed,this.socket._remove(this)}),this._onError(r=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,r),this.state=Mt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Mt.errored,this.rejoinTimer.scheduleTimeout())}),this._on(zt.reply,{},(r,s)=>{this._trigger(this._replyEventName(s),r)}),this.presence=new Hi(this)}subscribe(e,t=this.timeout){var n,r;if(this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:s,presence:o}}=this.params;this._onError(c=>e&&e("CHANNEL_ERROR",c)),this._onClose(()=>e&&e("CLOSED"));const a={},u={broadcast:s,presence:o,postgres_changes:(r=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(c=>c.filter))!==null&&r!==void 0?r:[]};this.socket.accessToken&&(a.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:u},a)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",({postgres_changes:c})=>{var l;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),c===void 0){e&&e("SUBSCRIBED");return}else{const h=this.bindings.postgres_changes,d=(l=h==null?void 0:h.length)!==null&&l!==void 0?l:0,m=[];for(let _=0;_<d;_++){const p=h[_],{filter:{event:f,schema:g,table:w,filter:M}}=p,E=c&&c[_];if(E&&E.event===f&&E.schema===g&&E.table===w&&E.filter===M)m.push(Object.assign(Object.assign({},p),{id:E.id}));else{this.unsubscribe(),e&&e("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=m,e&&e("SUBSCRIBED");return}}).receive("error",c=>{e&&e("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(c).join(", ")||"error")))}).receive("timeout",()=>{e&&e("TIMED_OUT")})}return this}presenceState(){return this.presence.state}track(e,t={}){return ll(this,void 0,void 0,function*(){return yield this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)})}untrack(e={}){return ll(this,void 0,void 0,function*(){return yield this.send({type:"presence",event:"untrack"},e)})}on(e,t,n){return this._on(e,t,n)}send(e,t={}){return new Promise(n=>{var r,s,o;const a=this._push(e.type,e,t.timeout||this.timeout);a.rateLimited&&n("rate limited"),e.type==="broadcast"&&!(!((o=(s=(r=this.params)===null||r===void 0?void 0:r.config)===null||s===void 0?void 0:s.broadcast)===null||o===void 0)&&o.ack)&&n("ok"),a.receive("ok",()=>n("ok")),a.receive("timeout",()=>n("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=Mt.leaving;const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(zt.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(n=>{const r=new Rs(this,zt.leave,{},e);r.receive("ok",()=>{t(),n("ok")}).receive("timeout",()=>{t(),n("timed out")}).receive("error",()=>{n("error")}),r.send(),this._canPush()||r.trigger("ok",{})})}_push(e,t,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let r=new Rs(this,e,t,n);return this._canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}_onMessage(e,t,n){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,n){var r,s;const o=e.toLocaleLowerCase(),{close:a,error:u,leave:c,join:l}=zt;if(n&&[a,u,c,l].indexOf(o)>=0&&n!==this._joinRef())return;let d=this._onMessage(o,t,n);if(t&&!d)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(r=this.bindings.postgres_changes)===null||r===void 0||r.filter(m=>{var _,p,f;return((_=m.filter)===null||_===void 0?void 0:_.event)==="*"||((f=(p=m.filter)===null||p===void 0?void 0:p.event)===null||f===void 0?void 0:f.toLocaleLowerCase())===o}).map(m=>m.callback(d,n)):(s=this.bindings[o])===null||s===void 0||s.filter(m=>{var _,p,f,g,w,M;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in m){const E=m.id,S=(_=m.filter)===null||_===void 0?void 0:_.event;return E&&((p=t.ids)===null||p===void 0?void 0:p.includes(E))&&(S==="*"||(S==null?void 0:S.toLocaleLowerCase())===((f=t.data)===null||f===void 0?void 0:f.type.toLocaleLowerCase()))}else{const E=(w=(g=m==null?void 0:m.filter)===null||g===void 0?void 0:g.event)===null||w===void 0?void 0:w.toLocaleLowerCase();return E==="*"||E===((M=t==null?void 0:t.event)===null||M===void 0?void 0:M.toLocaleLowerCase())}else return m.type.toLocaleLowerCase()===o}).map(m=>{if(typeof d=="object"&&"ids"in d){const _=d.data,{schema:p,table:f,commit_timestamp:g,type:w,errors:M}=_;d=Object.assign(Object.assign({},{schema:p,table:f,commit_timestamp:g,eventType:w,new:{},old:{},errors:M}),this._getPayloadRecords(_))}m.callback(d,n)})}_isClosed(){return this.state===Mt.closed}_isJoined(){return this.state===Mt.joined}_isJoining(){return this.state===Mt.joining}_isLeaving(){return this.state===Mt.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,n){const r=e.toLocaleLowerCase(),s={type:r,filter:t,callback:n};return this.bindings[r]?this.bindings[r].push(s):this.bindings[r]=[s],this}_off(e,t){const n=e.toLocaleLowerCase();return this.bindings[n]=this.bindings[n].filter(r=>{var s;return!(((s=r.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===n&&mo.isEqual(r.filter,t))}),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(zt.close,{},e)}_onError(e){this._on(zt.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Mt.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=al(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=al(e.columns,e.old_record)),t}}var r0=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};const s0=()=>{};class o0{constructor(e,t){var n;this.accessToken=null,this.channels=[],this.endPoint="",this.headers=Xg,this.params={},this.timeout=yc,this.transport=jg.w3cwebsocket,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=s0,this.conn=null,this.sendBuffer=[],this.serializer=new Zg,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.eventsPerSecondLimitMs=100,this.inThrottle=!1,this.endPoint=`${e}/${qs.websocket}`,t!=null&&t.params&&(this.params=t.params),t!=null&&t.headers&&(this.headers=Object.assign(Object.assign({},this.headers),t.headers)),t!=null&&t.timeout&&(this.timeout=t.timeout),t!=null&&t.logger&&(this.logger=t.logger),t!=null&&t.transport&&(this.transport=t.transport),t!=null&&t.heartbeatIntervalMs&&(this.heartbeatIntervalMs=t.heartbeatIntervalMs);const r=(n=t==null?void 0:t.params)===null||n===void 0?void 0:n.eventsPerSecond;r&&(this.eventsPerSecondLimitMs=Math.floor(1e3/r)),this.reconnectAfterMs=t!=null&&t.reconnectAfterMs?t.reconnectAfterMs:s=>[1e3,2e3,5e3,1e4][s-1]||1e4,this.encode=t!=null&&t.encode?t.encode:(s,o)=>o(JSON.stringify(s)),this.decode=t!=null&&t.decode?t.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new bc(()=>r0(this,void 0,void 0,function*(){this.disconnect(),this.connect()}),this.reconnectAfterMs)}connect(){this.conn||(this.conn=new this.transport(this._endPointURL(),[],null,this.headers),this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e)))}disconnect(e,t){this.conn&&(this.conn.onclose=function(){},e?this.conn.close(e,t??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}removeChannel(e){return e.unsubscribe().then(t=>(this.channels.length===0&&this.disconnect(),t))}removeAllChannels(){return Promise.all(this.channels.map(e=>e.unsubscribe())).then(e=>(this.disconnect(),e))}log(e,t,n){this.logger(e,t,n)}connectionState(){switch(this.conn&&this.conn.readyState){case Vi.connecting:return Ln.Connecting;case Vi.open:return Ln.Open;case Vi.closing:return Ln.Closing;default:return Ln.Closed}}isConnected(){return this.connectionState()===Ln.Open}channel(e,t={config:{}}){this.isConnected()||this.connect();const n=new mo(`realtime:${e}`,t,this);return this.channels.push(n),n}push(e){const{topic:t,event:n,payload:r,ref:s}=e;let o=()=>{this.encode(e,a=>{var u;(u=this.conn)===null||u===void 0||u.send(a)})};if(this.log("push",`${t} ${n} (${s})`,r),this.isConnected())if(["broadcast","presence","postgres_changes"].includes(n)){if(this._throttle(o)())return"rate limited"}else o();else this.sendBuffer.push(o)}setAuth(e){this.accessToken=e,this.channels.forEach(t=>{e&&t.updateJoinPayload({access_token:e}),t.joinedOnce&&t._isJoined()&&t._push(zt.access_token,{access_token:e})})}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find(n=>n.topic===e&&(n._isJoined()||n._isJoining()));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t._joinRef()!==e._joinRef())}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:Yg}))}_onConnMessage(e){this.decode(e.data,t=>{let{topic:n,event:r,payload:s,ref:o}=t;(o&&o===this.pendingHeartbeatRef||r===(s==null?void 0:s.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${s.status||""} ${n} ${r} ${o&&"("+o+")"||""}`,s),this.channels.filter(a=>a._isMember(n)).forEach(a=>a._trigger(r,s,o)),this.stateChangeCallbacks.message.forEach(a=>a(t))})}_onConnOpen(){this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs),this.stateChangeCallbacks.open.forEach(e=>e())}_onConnClose(e){this.log("transport","close",e),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(t=>t(e))}_onConnError(e){this.log("transport",e.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(t=>t(e))}_triggerChanError(){this.channels.forEach(e=>e._trigger(zt.error))}_appendParams(e,t){if(Object.keys(t).length===0)return e;const n=e.match(/\?/)?"&":"?",r=new URLSearchParams(t);return`${e}${n}${r}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_sendHeartbeat(){var e;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(e=this.conn)===null||e===void 0||e.close(Jg,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}_throttle(e,t=this.eventsPerSecondLimitMs){return()=>this.inThrottle?!0:(e(),this.inThrottle=!0,setTimeout(()=>{this.inThrottle=!1},t),!1)}}class Sc extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function mt(i){return typeof i=="object"&&i!==null&&"__isStorageError"in i}class a0 extends Sc{constructor(e,t){super(e),this.name="StorageApiError",this.status=t}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class l0 extends Sc{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}}var wc=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};const Tc=i=>{let e;return i?e=i:typeof fetch>"u"?e=(...t)=>wc(void 0,void 0,void 0,function*(){return yield(yield Br(()=>Promise.resolve().then(()=>Gr),void 0)).fetch(...t)}):e=fetch,(...t)=>e(...t)},c0=()=>wc(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Br(()=>Promise.resolve().then(()=>Gr),void 0)).Response:Response});var Si=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};const dl=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),u0=(i,e)=>Si(void 0,void 0,void 0,function*(){const t=yield c0();i instanceof t?i.json().then(n=>{e(new a0(dl(n),i.status||500))}):e(new l0(dl(i),i))}),h0=(i,e,t,n)=>{const r={method:i,headers:(e==null?void 0:e.headers)||{}};return i==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json"},e==null?void 0:e.headers),r.body=JSON.stringify(n),Object.assign(Object.assign({},r),t))};function Vr(i,e,t,n,r,s){return Si(this,void 0,void 0,function*(){return new Promise((o,a)=>{i(t,h0(e,n,r,s)).then(u=>{if(!u.ok)throw u;return n!=null&&n.noResolveJson?u:u.json()}).then(u=>o(u)).catch(u=>u0(u,a))})})}function Ys(i,e,t,n){return Si(this,void 0,void 0,function*(){return Vr(i,"GET",e,t,n)})}function Pn(i,e,t,n,r){return Si(this,void 0,void 0,function*(){return Vr(i,"POST",e,n,r,t)})}function d0(i,e,t,n,r){return Si(this,void 0,void 0,function*(){return Vr(i,"PUT",e,n,r,t)})}function Ec(i,e,t,n,r){return Si(this,void 0,void 0,function*(){return Vr(i,"DELETE",e,n,r,t)})}var $t=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};const f0={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},p0={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class m0{constructor(e,t={},n,r){this.url=e,this.headers=t,this.bucketId=n,this.fetch=Tc(r)}uploadOrUpdate(e,t,n,r){return $t(this,void 0,void 0,function*(){try{let s;const o=Object.assign(Object.assign({},p0),r),a=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(o.upsert)});typeof Blob<"u"&&n instanceof Blob?(s=new FormData,s.append("cacheControl",o.cacheControl),s.append("",n)):typeof FormData<"u"&&n instanceof FormData?(s=n,s.append("cacheControl",o.cacheControl)):(s=n,a["cache-control"]=`max-age=${o.cacheControl}`,a["content-type"]=o.contentType);const u=this._removeEmptyFolders(t),c=this._getFinalPath(u),l=yield this.fetch(`${this.url}/object/${c}`,{method:e,body:s,headers:a});return l.ok?{data:{path:u},error:null}:{data:null,error:yield l.json()}}catch(s){if(mt(s))return{data:null,error:s};throw s}})}upload(e,t,n){return $t(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,t,n)})}update(e,t,n){return $t(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,t,n)})}move(e,t){return $t(this,void 0,void 0,function*(){try{return{data:yield Pn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t},{headers:this.headers}),error:null}}catch(n){if(mt(n))return{data:null,error:n};throw n}})}copy(e,t){return $t(this,void 0,void 0,function*(){try{return{data:{path:(yield Pn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t},{headers:this.headers})).Key},error:null}}catch(n){if(mt(n))return{data:null,error:n};throw n}})}createSignedUrl(e,t,n){return $t(this,void 0,void 0,function*(){try{let r=this._getFinalPath(e),s=yield Pn(this.fetch,`${this.url}/object/sign/${r}`,Object.assign({expiresIn:t},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const o=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return s={signedUrl:encodeURI(`${this.url}${s.signedURL}${o}`)},{data:s,error:null}}catch(r){if(mt(r))return{data:null,error:r};throw r}})}createSignedUrls(e,t,n){return $t(this,void 0,void 0,function*(){try{const r=yield Pn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:t,paths:e},{headers:this.headers}),s=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:r.map(o=>Object.assign(Object.assign({},o),{signedUrl:o.signedURL?encodeURI(`${this.url}${o.signedURL}${s}`):null})),error:null}}catch(r){if(mt(r))return{data:null,error:r};throw r}})}download(e,t){return $t(this,void 0,void 0,function*(){const r=typeof(t==null?void 0:t.transform)<"u"?"render/image/authenticated":"object",s=this.transformOptsToQueryString((t==null?void 0:t.transform)||{}),o=s?`?${s}`:"";try{const a=this._getFinalPath(e);return{data:yield(yield Ys(this.fetch,`${this.url}/${r}/${a}${o}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if(mt(a))return{data:null,error:a};throw a}})}getPublicUrl(e,t){const n=this._getFinalPath(e),r=[],s=t!=null&&t.download?`download=${t.download===!0?"":t.download}`:"";s!==""&&r.push(s);const a=typeof(t==null?void 0:t.transform)<"u"?"render/image":"object",u=this.transformOptsToQueryString((t==null?void 0:t.transform)||{});u!==""&&r.push(u);let c=r.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}${c}`)}}}remove(e){return $t(this,void 0,void 0,function*(){try{return{data:yield Ec(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(t){if(mt(t))return{data:null,error:t};throw t}})}list(e,t,n){return $t(this,void 0,void 0,function*(){try{const r=Object.assign(Object.assign(Object.assign({},f0),t),{prefix:e||""});return{data:yield Pn(this.fetch,`${this.url}/object/list/${this.bucketId}`,r,{headers:this.headers},n),error:null}}catch(r){if(mt(r))return{data:null,error:r};throw r}})}_getFinalPath(e){return`${this.bucketId}/${e}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[];return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),t.join("&")}}const _0="2.1.0",g0={"X-Client-Info":`storage-js/${_0}`};var si=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};class v0{constructor(e,t={},n){this.url=e,this.headers=Object.assign(Object.assign({},g0),t),this.fetch=Tc(n)}listBuckets(){return si(this,void 0,void 0,function*(){try{return{data:yield Ys(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(e){if(mt(e))return{data:null,error:e};throw e}})}getBucket(e){return si(this,void 0,void 0,function*(){try{return{data:yield Ys(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(t){if(mt(t))return{data:null,error:t};throw t}})}createBucket(e,t={public:!1}){return si(this,void 0,void 0,function*(){try{return{data:yield Pn(this.fetch,`${this.url}/bucket`,{id:e,name:e,public:t.public},{headers:this.headers}),error:null}}catch(n){if(mt(n))return{data:null,error:n};throw n}})}updateBucket(e,t){return si(this,void 0,void 0,function*(){try{return{data:yield d0(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:t.public},{headers:this.headers}),error:null}}catch(n){if(mt(n))return{data:null,error:n};throw n}})}emptyBucket(e){return si(this,void 0,void 0,function*(){try{return{data:yield Pn(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(t){if(mt(t))return{data:null,error:t};throw t}})}deleteBucket(e){return si(this,void 0,void 0,function*(){try{return{data:yield Ec(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(mt(t))return{data:null,error:t};throw t}})}}class x0 extends v0{constructor(e,t={},n){super(e,t,n)}from(e){return new m0(this.url,this.headers,e,this.fetch)}}const y0="2.2.3",b0={"X-Client-Info":`supabase-js/${y0}`};var M0=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};const S0=i=>{let e;return i?e=i:typeof fetch>"u"?e=po:e=fetch,(...t)=>e(...t)},w0=()=>typeof Headers>"u"?vi.Headers:Headers,T0=(i,e,t)=>{const n=S0(t),r=w0();return(s,o)=>M0(void 0,void 0,void 0,function*(){var a;const u=(a=yield e())!==null&&a!==void 0?a:i;let c=new r(o==null?void 0:o.headers);return c.has("apikey")||c.set("apikey",i),c.has("Authorization")||c.set("Authorization",`Bearer ${u}`),n(s,Object.assign(Object.assign({},o),{headers:c}))})};function E0(i){return i.replace(/\/$/,"")}function A0(i,e){const{db:t,auth:n,realtime:r,global:s}=i,{db:o,auth:a,realtime:u,global:c}=e;return{db:Object.assign(Object.assign({},o),t),auth:Object.assign(Object.assign({},a),n),realtime:Object.assign(Object.assign({},u),r),global:Object.assign(Object.assign({},c),s)}}var Hr=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};function C0(i){return Math.round(Date.now()/1e3)+i}function L0(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){const e=Math.random()*16|0;return(i=="x"?e:e&3|8).toString(16)})}const On=()=>typeof document<"u";function Dt(i,e){var t;e||(e=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.href)||""),i=i.replace(/[\[\]]/g,"\\$&");const n=new RegExp("[?&#]"+i+"(=([^&#]*)|&|#|$)"),r=n.exec(e);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}const Ac=i=>{let e;return i?e=i:typeof fetch>"u"?e=(...t)=>Hr(void 0,void 0,void 0,function*(){return yield(yield Br(()=>Promise.resolve().then(()=>Gr),void 0)).fetch(...t)}):e=fetch,(...t)=>e(...t)},P0=i=>typeof i=="object"&&i!==null&&"status"in i&&"ok"in i&&"json"in i&&typeof i.json=="function",R0=(i,e,t)=>Hr(void 0,void 0,void 0,function*(){yield i.setItem(e,JSON.stringify(t))}),fl=(i,e)=>Hr(void 0,void 0,void 0,function*(){const t=yield i.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return t}}),D0=(i,e)=>Hr(void 0,void 0,void 0,function*(){yield i.removeItem(e)}),I0=i=>{try{return decodeURIComponent(atob(i.replace(/[-]/g,"+").replace(/[_]/g,"/")).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""))}catch(e){if(e instanceof ReferenceError)return Buffer.from(i,"base64").toString("utf-8");throw e}};class Wr{constructor(){this.promise=new Wr.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}Wr.promiseConstructor=Promise;function pl(i){const e=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,t=i.split(".");if(t.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!e.test(t[1]))throw new Error("JWT is not valid: payload is not in base64url format");const n=t[1];return JSON.parse(I0(n))}class _o extends Error{constructor(e){super(e),this.__isAuthError=!0,this.name="AuthError"}}function Ne(i){return typeof i=="object"&&i!==null&&"__isAuthError"in i}class O0 extends _o{constructor(e,t){super(e),this.name="AuthApiError",this.status=t}toJSON(){return{name:this.name,message:this.message,status:this.status}}}function F0(i){return Ne(i)&&i.name==="AuthApiError"}class Cc extends _o{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class $r extends _o{constructor(e,t,n){super(e),this.name=t,this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Ii extends $r{constructor(){super("Auth session missing!","AuthSessionMissingError",400)}}class Ds extends $r{constructor(e){super(e,"AuthInvalidCredentialsError",400)}}class an extends $r{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Nr extends $r{constructor(e,t){super(e,"AuthRetryableFetchError",t)}}var go=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})},N0=globalThis&&globalThis.__rest||function(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t};const wr=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),U0=(i,e)=>go(void 0,void 0,void 0,function*(){const t=[502,503,504];P0(i)?t.includes(i.status)?e(new Nr(wr(i),i.status)):i.json().then(n=>{e(new O0(wr(n),i.status||500))}).catch(n=>{e(new Cc(wr(n),n))}):e(new Nr(wr(i),0))}),k0=(i,e,t,n)=>{const r={method:i,headers:(e==null?void 0:e.headers)||{}};return i==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),r.body=JSON.stringify(n),Object.assign(Object.assign({},r),t))};function Be(i,e,t,n){var r;return go(this,void 0,void 0,function*(){const s=Object.assign({},n==null?void 0:n.headers);n!=null&&n.jwt&&(s.Authorization=`Bearer ${n.jwt}`);const o=(r=n==null?void 0:n.query)!==null&&r!==void 0?r:{};n!=null&&n.redirectTo&&(o.redirect_to=n.redirectTo);const a=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",u=yield z0(i,e,t+a,{headers:s,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(u):{data:Object.assign({},u),error:null}})}function z0(i,e,t,n,r,s){return go(this,void 0,void 0,function*(){return new Promise((o,a)=>{i(t,k0(e,n,r,s)).then(u=>{if(!u.ok)throw u;return n!=null&&n.noResolveJson?u:u.json()}).then(u=>o(u)).catch(u=>U0(u,a))})})}function oi(i){var e;let t=null;H0(i)&&(t=Object.assign({},i),t.expires_at=C0(i.expires_in));const n=(e=i.user)!==null&&e!==void 0?e:i;return{data:{session:t,user:n},error:null}}function Rn(i){var e;return{data:{user:(e=i.user)!==null&&e!==void 0?e:i},error:null}}function B0(i){return{data:i,error:null}}function G0(i){const{action_link:e,email_otp:t,hashed_token:n,redirect_to:r,verification_type:s}=i,o=N0(i,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:e,email_otp:t,hashed_token:n,redirect_to:r,verification_type:s},u=Object.assign({},o);return{data:{properties:a,user:u},error:null}}function V0(i){return i}function H0(i){return i.access_token&&i.refresh_token&&i.expires_in}var jt=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})},W0=globalThis&&globalThis.__rest||function(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t};class $0{constructor({url:e="",headers:t={},fetch:n}){this.url=e,this.headers=t,this.fetch=Ac(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}signOut(e){return jt(this,void 0,void 0,function*(){try{return yield Be(this.fetch,"POST",`${this.url}/logout`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(t){if(Ne(t))return{data:null,error:t};throw t}})}inviteUserByEmail(e,t={}){return jt(this,void 0,void 0,function*(){try{return yield Be(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Rn})}catch(n){if(Ne(n))return{data:{user:null},error:n};throw n}})}generateLink(e){return jt(this,void 0,void 0,function*(){try{const{options:t}=e,n=W0(e,["options"]),r=Object.assign(Object.assign({},n),t);return"newEmail"in n&&(r.new_email=n==null?void 0:n.newEmail,delete r.newEmail),yield Be(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:G0,redirectTo:t==null?void 0:t.redirectTo})}catch(t){if(Ne(t))return{data:{properties:null,user:null},error:t};throw t}})}createUser(e){return jt(this,void 0,void 0,function*(){try{return yield Be(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Rn})}catch(t){if(Ne(t))return{data:{user:null},error:t};throw t}})}listUsers(e){var t,n,r,s,o,a,u;return jt(this,void 0,void 0,function*(){try{const c={nextPage:null,lastPage:0,total:0},l=yield Be(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&n!==void 0?n:"",per_page:(s=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:V0});if(l.error)throw l.error;const h=yield l.json(),d=(o=l.headers.get("x-total-count"))!==null&&o!==void 0?o:0,m=(u=(a=l.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&u!==void 0?u:[];return m.length>0&&(m.forEach(_=>{const p=parseInt(_.split(";")[0].split("=")[1].substring(0,1)),f=JSON.parse(_.split(";")[1].split("=")[1]);c[`${f}Page`]=p}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(Ne(c))return{data:{users:[]},error:c};throw c}})}getUserById(e){return jt(this,void 0,void 0,function*(){try{return yield Be(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Rn})}catch(t){if(Ne(t))return{data:{user:null},error:t};throw t}})}updateUserById(e,t){return jt(this,void 0,void 0,function*(){try{return yield Be(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Rn})}catch(n){if(Ne(n))return{data:{user:null},error:n};throw n}})}deleteUser(e){return jt(this,void 0,void 0,function*(){try{return yield Be(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Rn})}catch(t){if(Ne(t))return{data:{user:null},error:t};throw t}})}_listFactors(e){return jt(this,void 0,void 0,function*(){try{const{data:t,error:n}=yield Be(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:t,error:n}}catch(t){if(Ne(t))return{data:null,error:t};throw t}})}_deleteFactor(e){return jt(this,void 0,void 0,function*(){try{return{data:yield Be(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(Ne(t))return{data:null,error:t};throw t}})}}const j0="2.6.1",q0="http://localhost:9999",X0="supabase.auth.token",Y0={"X-Client-Info":`gotrue-js/${j0}`},Is=10,Tr={MAX_RETRIES:10,RETRY_INTERVAL:2},J0={getItem:i=>On()?globalThis.localStorage.getItem(i):null,setItem:(i,e)=>{On()&&globalThis.localStorage.setItem(i,e)},removeItem:i=>{On()&&globalThis.localStorage.removeItem(i)}};function Z0(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}var Fe=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};Z0();const K0={url:q0,storageKey:X0,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Y0};class Q0{constructor(e){this.stateChangeEmitters=new Map,this.networkRetries=0,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0;const t=Object.assign(Object.assign({},K0),e);this.inMemorySession=null,this.storageKey=t.storageKey,this.autoRefreshToken=t.autoRefreshToken,this.persistSession=t.persistSession,this.storage=t.storage||J0,this.admin=new $0({url:t.url,headers:t.headers,fetch:t.fetch}),this.url=t.url,this.headers=t.headers,this.fetch=Ac(t.fetch),this.detectSessionInUrl=t.detectSessionInUrl,this.initialize(),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)}}initialize(){return this.initializePromise||(this.initializePromise=this._initialize()),this.initializePromise}_initialize(){return Fe(this,void 0,void 0,function*(){if(this.initializePromise)return this.initializePromise;try{if(this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:e,error:t}=yield this._getSessionFromUrl();if(t)return yield this._removeSession(),{error:t};const{session:n,redirectType:r}=e;return yield this._saveSession(n),this._notifyAllSubscribers("SIGNED_IN",n),r==="recovery"&&this._notifyAllSubscribers("PASSWORD_RECOVERY",n),{error:null}}return yield this._recoverAndRefresh(),{error:null}}catch(e){return Ne(e)?{error:e}:{error:new Cc("Unexpected error during initialization",e)}}finally{this._handleVisibilityChange()}})}signUp(e){var t,n;return Fe(this,void 0,void 0,function*(){try{yield this._removeSession();let r;if("email"in e){const{email:c,password:l,options:h}=e;r=yield Be(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:h==null?void 0:h.emailRedirectTo,body:{email:c,password:l,data:(t=h==null?void 0:h.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:oi})}else if("phone"in e){const{phone:c,password:l,options:h}=e;r=yield Be(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:c,password:l,data:(n=h==null?void 0:h.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:oi})}else throw new Ds("You must provide either an email or phone number and a password");const{data:s,error:o}=r;if(o||!s)return{data:{user:null,session:null},error:o};const a=s.session,u=s.user;return s.session&&(yield this._saveSession(s.session),this._notifyAllSubscribers("SIGNED_IN",a)),{data:{user:u,session:a},error:null}}catch(r){if(Ne(r))return{data:{user:null,session:null},error:r};throw r}})}signInWithPassword(e){var t,n;return Fe(this,void 0,void 0,function*(){try{yield this._removeSession();let r;if("email"in e){const{email:a,password:u,options:c}=e;r=yield Be(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:a,password:u,data:(t=c==null?void 0:c.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}},xform:oi})}else if("phone"in e){const{phone:a,password:u,options:c}=e;r=yield Be(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:a,password:u,data:(n=c==null?void 0:c.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}},xform:oi})}else throw new Ds("You must provide either an email or phone number and a password");const{data:s,error:o}=r;return o||!s?{data:{user:null,session:null},error:o}:(s.session&&(yield this._saveSession(s.session),this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:s,error:o})}catch(r){if(Ne(r))return{data:{user:null,session:null},error:r};throw r}})}signInWithOAuth(e){var t,n,r;return Fe(this,void 0,void 0,function*(){return yield this._removeSession(),this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(n=e.options)===null||n===void 0?void 0:n.scopes,queryParams:(r=e.options)===null||r===void 0?void 0:r.queryParams})})}signInWithOtp(e){var t,n,r,s;return Fe(this,void 0,void 0,function*(){try{if(yield this._removeSession(),"email"in e){const{email:o,options:a}=e,{error:u}=yield Be(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(t=a==null?void 0:a.data)!==null&&t!==void 0?t:{},create_user:(n=a==null?void 0:a.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},redirectTo:a==null?void 0:a.emailRedirectTo});return{data:{user:null,session:null},error:u}}if("phone"in e){const{phone:o,options:a}=e,{error:u}=yield Be(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(r=a==null?void 0:a.data)!==null&&r!==void 0?r:{},create_user:(s=a==null?void 0:a.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}}});return{data:{user:null,session:null},error:u}}throw new Ds("You must provide either an email or phone number.")}catch(o){if(Ne(o))return{data:{user:null,session:null},error:o};throw o}})}verifyOtp(e){var t,n;return Fe(this,void 0,void 0,function*(){try{yield this._removeSession();const{data:r,error:s}=yield Be(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:(t=e.options)===null||t===void 0?void 0:t.captchaToken}}),redirectTo:(n=e.options)===null||n===void 0?void 0:n.redirectTo,xform:oi});if(s)throw s;if(!r)throw"An error occurred on token verification.";const o=r.session,a=r.user;return o!=null&&o.access_token&&(yield this._saveSession(o),this._notifyAllSubscribers("SIGNED_IN",o)),{data:{user:a,session:o},error:null}}catch(r){if(Ne(r))return{data:{user:null,session:null},error:r};throw r}})}signInWithSSO(e){var t,n,r;return Fe(this,void 0,void 0,function*(){try{return yield this._removeSession(),yield Be(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(n=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&n!==void 0?n:void 0}),!((r=e==null?void 0:e.options)===null||r===void 0)&&r.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0}),headers:this.headers,xform:B0})}catch(s){if(Ne(s))return{data:null,error:s};throw s}})}getSession(){return Fe(this,void 0,void 0,function*(){yield this.initializePromise;let e=null;if(this.persistSession){const s=yield fl(this.storage,this.storageKey);s!==null&&(this._isValidSession(s)?e=s:yield this._removeSession())}else e=this.inMemorySession;if(!e)return{data:{session:null},error:null};if(!(e.expires_at?e.expires_at<=Date.now()/1e3:!1))return{data:{session:e},error:null};const{session:n,error:r}=yield this._callRefreshToken(e.refresh_token);return r?{data:{session:null},error:r}:{data:{session:n},error:null}})}getUser(e){var t,n;return Fe(this,void 0,void 0,function*(){try{if(!e){const{data:r,error:s}=yield this.getSession();if(s)throw s;e=(n=(t=r.session)===null||t===void 0?void 0:t.access_token)!==null&&n!==void 0?n:void 0}return yield Be(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Rn})}catch(r){if(Ne(r))return{data:{user:null},error:r};throw r}})}updateUser(e){return Fe(this,void 0,void 0,function*(){try{const{data:t,error:n}=yield this.getSession();if(n)throw n;if(!t.session)throw new Ii;const r=t.session,{data:s,error:o}=yield Be(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,body:e,jwt:r.access_token,xform:Rn});if(o)throw o;return r.user=s.user,yield this._saveSession(r),this._notifyAllSubscribers("USER_UPDATED",r),{data:{user:r.user},error:null}}catch(t){if(Ne(t))return{data:{user:null},error:t};throw t}})}_decodeJWT(e){return pl(e)}setSession(e){return Fe(this,void 0,void 0,function*(){try{if(!e.access_token||!e.refresh_token)throw new Ii;const t=Date.now()/1e3;let n=t,r=!0,s=null;const o=pl(e.access_token);if(o.exp&&(n=o.exp,r=n<=t),r){const{session:a,error:u}=yield this._callRefreshToken(e.refresh_token);if(u)return{data:{user:null,session:null},error:u};if(!a)return{data:{user:null,session:null},error:null};s=a}else{const{data:a,error:u}=yield this.getUser(e.access_token);if(u)throw u;s={access_token:e.access_token,refresh_token:e.refresh_token,user:a.user,token_type:"bearer",expires_in:n-t,expires_at:n},yield this._saveSession(s)}return{data:{user:s.user,session:s},error:null}}catch(t){if(Ne(t))return{data:{session:null,user:null},error:t};throw t}})}refreshSession(e){var t;return Fe(this,void 0,void 0,function*(){try{if(!e){const{data:s,error:o}=yield this.getSession();if(o)throw o;e=(t=s.session)!==null&&t!==void 0?t:void 0}if(!(e!=null&&e.refresh_token))throw new Ii;const{session:n,error:r}=yield this._callRefreshToken(e.refresh_token);return r?{data:{user:null,session:null},error:r}:n?{data:{user:n.user,session:n},error:null}:{data:{user:null,session:null},error:null}}catch(n){if(Ne(n))return{data:{user:null,session:null},error:n};throw n}})}_getSessionFromUrl(){return Fe(this,void 0,void 0,function*(){try{if(!On())throw new an("No browser detected.");if(!this._isImplicitGrantFlow())throw new an("Not a valid implicit grant flow url.");const e=Dt("error_description");if(e){const p=Dt("error_code");if(!p)throw new an("No error_code detected.");const f=Dt("error");throw f?new an(e,{error:f,code:p}):new an("No error detected.")}const t=Dt("provider_token"),n=Dt("provider_refresh_token"),r=Dt("access_token");if(!r)throw new an("No access_token detected.");const s=Dt("expires_in");if(!s)throw new an("No expires_in detected.");const o=Dt("refresh_token");if(!o)throw new an("No refresh_token detected.");const a=Dt("token_type");if(!a)throw new an("No token_type detected.");const c=Math.round(Date.now()/1e3)+parseInt(s),{data:l,error:h}=yield this.getUser(r);if(h)throw h;const d=l.user,m={provider_token:t,provider_refresh_token:n,access_token:r,expires_in:parseInt(s),expires_at:c,refresh_token:o,token_type:a,user:d},_=Dt("type");return window.location.hash="",{data:{session:m,redirectType:_},error:null}}catch(e){if(Ne(e))return{data:{session:null,redirectType:null},error:e};throw e}})}_isImplicitGrantFlow(){return On()&&(Boolean(Dt("access_token"))||Boolean(Dt("error_description")))}signOut(){var e;return Fe(this,void 0,void 0,function*(){const{data:t,error:n}=yield this.getSession();if(n)return{error:n};const r=(e=t.session)===null||e===void 0?void 0:e.access_token;if(r){const{error:s}=yield this.admin.signOut(r);if(s&&!(F0(s)&&(s.status===404||s.status===401)))return{error:s}}return yield this._removeSession(),this._notifyAllSubscribers("SIGNED_OUT",null),{error:null}})}onAuthStateChange(e){const t=L0(),n={id:t,callback:e,unsubscribe:()=>{this.stateChangeEmitters.delete(t)}};return this.stateChangeEmitters.set(t,n),{data:{subscription:n}}}resetPasswordForEmail(e,t={}){return Fe(this,void 0,void 0,function*(){try{return yield Be(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(n){if(Ne(n))return{data:null,error:n};throw n}})}_refreshAccessToken(e){return Fe(this,void 0,void 0,function*(){try{return yield Be(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:oi})}catch(t){if(Ne(t))return{data:{session:null,user:null},error:t};throw t}})}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}_handleProviderSignIn(e,t={}){const n=this._getUrlForProvider(e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return On()&&(window.location.href=n),{data:{provider:e,url:n},error:null}}_recoverAndRefresh(){var e;return Fe(this,void 0,void 0,function*(){try{const t=yield fl(this.storage,this.storageKey);if(!this._isValidSession(t)){t!==null&&(yield this._removeSession());return}const n=Math.round(Date.now()/1e3);if(((e=t.expires_at)!==null&&e!==void 0?e:1/0)<n+Is)if(this.autoRefreshToken&&t.refresh_token){this.networkRetries++;const{error:r}=yield this._callRefreshToken(t.refresh_token);if(r){if(console.log(r.message),r instanceof Nr&&this.networkRetries<Tr.MAX_RETRIES){this.refreshTokenTimer&&clearTimeout(this.refreshTokenTimer),this.refreshTokenTimer=setTimeout(()=>this._recoverAndRefresh(),Math.pow(Tr.RETRY_INTERVAL,this.networkRetries)*100);return}yield this._removeSession()}this.networkRetries=0}else yield this._removeSession();else this.persistSession&&(yield this._saveSession(t)),this._notifyAllSubscribers("SIGNED_IN",t)}catch(t){console.error(t);return}})}_callRefreshToken(e){var t,n;return Fe(this,void 0,void 0,function*(){if(this.refreshingDeferred)return this.refreshingDeferred.promise;try{if(this.refreshingDeferred=new Wr,!e)throw new Ii;const{data:r,error:s}=yield this._refreshAccessToken(e);if(s)throw s;if(!r.session)throw new Ii;yield this._saveSession(r.session),this._notifyAllSubscribers("TOKEN_REFRESHED",r.session);const o={session:r.session,error:null};return this.refreshingDeferred.resolve(o),o}catch(r){if(Ne(r)){const s={session:null,error:r};return(t=this.refreshingDeferred)===null||t===void 0||t.resolve(s),s}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(r),r}finally{this.refreshingDeferred=null}})}_notifyAllSubscribers(e,t){this.stateChangeEmitters.forEach(n=>n.callback(e,t))}_saveSession(e){return Fe(this,void 0,void 0,function*(){this.persistSession||(this.inMemorySession=e);const t=e.expires_at;if(t){const n=Math.round(Date.now()/1e3),r=t-n,s=r>Is?Is:.5;this._startAutoRefreshToken((r-s)*1e3)}this.persistSession&&e.expires_at&&(yield this._persistSession(e))})}_persistSession(e){return R0(this.storage,this.storageKey,e)}_removeSession(){return Fe(this,void 0,void 0,function*(){this.persistSession?yield D0(this.storage,this.storageKey):this.inMemorySession=null,this.refreshTokenTimer&&clearTimeout(this.refreshTokenTimer)})}_startAutoRefreshToken(e){this.refreshTokenTimer&&clearTimeout(this.refreshTokenTimer),!(e<=0||!this.autoRefreshToken)&&(this.refreshTokenTimer=setTimeout(()=>Fe(this,void 0,void 0,function*(){this.networkRetries++;const{data:{session:t},error:n}=yield this.getSession();if(!n&&t){const{error:r}=yield this._callRefreshToken(t.refresh_token);r||(this.networkRetries=0),r instanceof Nr&&this.networkRetries<Tr.MAX_RETRIES&&this._startAutoRefreshToken(Math.pow(Tr.RETRY_INTERVAL,this.networkRetries)*100)}}),e),typeof this.refreshTokenTimer.unref=="function"&&this.refreshTokenTimer.unref())}_handleVisibilityChange(){if(!On()||!(window!=null&&window.addEventListener))return!1;try{window==null||window.addEventListener("visibilitychange",()=>Fe(this,void 0,void 0,function*(){document.visibilityState==="visible"&&(yield this.initializePromise,yield this._recoverAndRefresh())}))}catch(e){console.error("_handleVisibilityChange",e)}}_getUrlForProvider(e,t){const n=[`provider=${encodeURIComponent(e)}`];if(t!=null&&t.redirectTo&&n.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`),t!=null&&t.scopes&&n.push(`scopes=${encodeURIComponent(t.scopes)}`),t!=null&&t.queryParams){const r=new URLSearchParams(t.queryParams);n.push(r.toString())}return`${this.url}/authorize?${n.join("&")}`}_unenroll(e){var t;return Fe(this,void 0,void 0,function*(){try{const{data:n,error:r}=yield this.getSession();return r?{data:null,error:r}:yield Be(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(t=n==null?void 0:n.session)===null||t===void 0?void 0:t.access_token})}catch(n){if(Ne(n))return{data:null,error:n};throw n}})}_enroll(e){var t,n;return Fe(this,void 0,void 0,function*(){try{const{data:r,error:s}=yield this.getSession();if(s)return{data:null,error:s};const{data:o,error:a}=yield Be(this.fetch,"POST",`${this.url}/factors`,{body:{friendly_name:e.friendlyName,factor_type:e.factorType,issuer:e.issuer},headers:this.headers,jwt:(t=r==null?void 0:r.session)===null||t===void 0?void 0:t.access_token});return a?{data:null,error:a}:(!((n=o==null?void 0:o.totp)===null||n===void 0)&&n.qr_code&&(o.totp.qr_code=`data:image/svg+xml;utf-8,${o.totp.qr_code}`),{data:o,error:null})}catch(r){if(Ne(r))return{data:null,error:r};throw r}})}_verify(e){var t;return Fe(this,void 0,void 0,function*(){try{const{data:n,error:r}=yield this.getSession();if(r)return{data:null,error:r};const{data:s,error:o}=yield Be(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:{code:e.code,challenge_id:e.challengeId},headers:this.headers,jwt:(t=n==null?void 0:n.session)===null||t===void 0?void 0:t.access_token});return o?{data:null,error:o}:(yield this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+s.expires_in},s)),this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",s),{data:s,error:o})}catch(n){if(Ne(n))return{data:null,error:n};throw n}})}_challenge(e){var t;return Fe(this,void 0,void 0,function*(){try{const{data:n,error:r}=yield this.getSession();return r?{data:null,error:r}:yield Be(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{headers:this.headers,jwt:(t=n==null?void 0:n.session)===null||t===void 0?void 0:t.access_token})}catch(n){if(Ne(n))return{data:null,error:n};throw n}})}_challengeAndVerify(e){return Fe(this,void 0,void 0,function*(){const{data:t,error:n}=yield this._challenge({factorId:e.factorId});return n?{data:null,error:n}:yield this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})})}_listFactors(){return Fe(this,void 0,void 0,function*(){const{data:{user:e},error:t}=yield this.getUser();if(t)return{data:null,error:t};const n=(e==null?void 0:e.factors)||[],r=n.filter(s=>s.factor_type==="totp"&&s.status==="verified");return{data:{all:n,totp:r},error:null}})}_getAuthenticatorAssuranceLevel(){var e,t;return Fe(this,void 0,void 0,function*(){const{data:{session:n},error:r}=yield this.getSession();if(r)return{data:null,error:r};if(!n)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const s=this._decodeJWT(n.access_token);let o=null;s.aal&&(o=s.aal);let a=o;((t=(e=n.user.factors)===null||e===void 0?void 0:e.filter(l=>l.status==="verified"))!==null&&t!==void 0?t:[]).length>0&&(a="aal2");const c=s.amr||[];return{data:{currentLevel:o,nextLevel:a,currentAuthenticationMethods:c},error:null}})}}class ev extends Q0{constructor(e){super(e)}}var tv=globalThis&&globalThis.__awaiter||function(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(l){try{c(n.next(l))}catch(h){o(h)}}function u(l){try{c(n.throw(l))}catch(h){o(h)}}function c(l){l.done?s(l.value):r(l.value).then(a,u)}c((n=n.apply(i,e||[])).next())})};const nv={headers:b0},iv={schema:"public"},rv={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0},sv={};class ov{constructor(e,t,n){var r,s,o,a,u,c,l,h;if(this.supabaseUrl=e,this.supabaseKey=t,!e)throw new Error("supabaseUrl is required.");if(!t)throw new Error("supabaseKey is required.");const d=E0(e);if(this.realtimeUrl=`${d}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${d}/auth/v1`,this.storageUrl=`${d}/storage/v1`,d.match(/(supabase\.co)|(supabase\.in)/)){const g=d.split(".");this.functionsUrl=`${g[0]}.functions.${g[1]}.${g[2]}`}else this.functionsUrl=`${d}/functions/v1`;const _=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,p={db:iv,realtime:sv,auth:Object.assign(Object.assign({},rv),{storageKey:_}),global:nv},f=A0(n??{},p);this.storageKey=(s=(r=f.auth)===null||r===void 0?void 0:r.storageKey)!==null&&s!==void 0?s:"",this.headers=(a=(o=f.global)===null||o===void 0?void 0:o.headers)!==null&&a!==void 0?a:{},this.auth=this._initSupabaseAuthClient((u=f.auth)!==null&&u!==void 0?u:{},this.headers,(c=f.global)===null||c===void 0?void 0:c.fetch),this.fetch=T0(t,this._getAccessToken.bind(this),(l=f.global)===null||l===void 0?void 0:l.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},f.realtime)),this.rest=new wg(`${d}/rest/v1`,{headers:this.headers,schema:(h=f.db)===null||h===void 0?void 0:h.schema,fetch:this.fetch}),this._listenForAuthEvents()}get functions(){return new pg(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new x0(this.storageUrl,this.headers,this.fetch)}from(e){return this.rest.from(e)}rpc(e,t={},n){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var e,t;return tv(this,void 0,void 0,function*(){const{data:n}=yield this.auth.getSession();return(t=(e=n.session)===null||e===void 0?void 0:e.access_token)!==null&&t!==void 0?t:null})}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,storageKey:s},o,a){const u={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new ev({url:this.authUrl,headers:Object.assign(Object.assign({},u),o),storageKey:s,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,fetch:a})}_initRealtimeClient(e){return new o0(this.realtimeUrl,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e==null?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,n)=>{this._handleTokenChanged(t,n==null?void 0:n.access_token,"CLIENT")})}_handleTokenChanged(e,t,n){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==t?(this.realtime.setAuth(t??null),this.changedAccessToken=t):(e==="SIGNED_OUT"||e==="USER_DELETED")&&(this.realtime.setAuth(this.supabaseKey),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const av=(i,e,t)=>new ov(i,e,t),lv="https://dzyuodzipruqsgfvjyna.supabase.co",cv="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6eXVvZHppcHJ1cXNnZnZqeW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI1MTM0MzcsImV4cCI6MTk4ODA4OTQzN30.ASY_-PiZ_Tm4_JxkQDH8clOLQRlhfXnsrXDDvN8Mg4Q",uv=av(lv,cv);async function vo(){let{data:i,error:e}=await uv.from("posts").select("*");return i.sort((t,n)=>new Date(n.id).valueOf()-new Date(t.id).valueOf())}function hv(i){const[e,t]=Vt(0),[n,r]=Vt(""),[s,o]=Vt(""),[a,u]=Vt("");return Zi(()=>{async function c(){const l=await vo();t(l[0].id),r(l[0].title),o(l[0].header),u(l[0].body)}gc(),c()},[]),le(Ct,{children:[le("canvas",{id:"bg"}),le(to,{}),le("main",{className:"",children:[le("header",{className:"",children:[le("h1",{className:"font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2",children:"Welcome To My Website!"}),le("p",{children:"Enjoy Your Stay"})]}),le("section",{className:"left",children:[le("h1",{className:"text-2xl",children:"Posts"}),le("a",{href:"/posts",className:"text-teal-400 underline",children:"All Posts"}),le("h2",{className:"text-xl",children:"Most Recent Post"}),le("a",{href:"/post/"+e,children:le(vc,{title:n,header:s,body:a})})]}),le("section",{children:[le("h1",{className:"text-2xl",children:"About Me"}),le("p",{children:["Hello my name is Apollo_Dot I'm trans and Non-Binary.",le("br",{}),"I like making games, videos and I just enjoy programing in general.",le("br",{}),"I also enjoy Drawing sometimes and may post what I'm working on from time to time.",le("br",{}),"My Favorite Food is Street Tacos and a bit specific but my Favorite Color is Royal Blue.",le("br",{}),"Oh and I almost Forgot my Pronouns are She/They."]})]}),le("section",{className:"left",children:[le("h1",{className:"text-2xl",children:"About Website"}),le("p",{children:["So this is v4 of my personal Website I remake it when I want to add a large feature this time it was a post Database using supabase and moving to github and setting up a github action. The source code can be found ",le("a",{href:"https://github.com/Apollo-Dot/apollo-dot.github.io",target:"_blank",className:"text-teal-400 underline",children:"here"})]})]})]})]})}function dv(i){const[e,t]=Vt(0),[n,r]=Vt(""),[s,o]=Vt(""),[a,u]=Vt("");return Zi(()=>{async function c(){const l=await vo();t(l[0].id),r(l[0].title),o(l[0].header),u(l[0].body)}c()},[]),le(Ct,{children:[le(to,{}),le("h1",{className:"text-white text-2xl",children:e}),le("h1",{className:"text-white text-2xl",children:n}),le("h2",{className:"text-white text-xl",children:s}),le("p",{className:"text-white",children:a})]})}function fv(){const[i,e]=Vt([]);return Zi(()=>{async function t(){e(await vo())}gc(),t()},[]),le(Ct,{children:[le("canvas",{id:"bg"}),le(to,{}),le("div",{id:"main",children:[le("div",{className:"sm:w-80 sm:m-4 sm:float-right"}),le("div",{id:"bio",className:"w-[90%] mx-[5%] p-4 bg-slate-500 border-b-4 border-r-4 border-slate-700 sm:w-80 sm:m-4 sm:fixed sm:right-0 sm:top-12",children:le("p",{children:["Hello my name is Apollo_Dot I'm trans and Non-Binary.",le("br",{}),"I like making games, videos and I just enjoy programing in general.",le("br",{}),"I also enjoy Drawing sometimes and may post what I'm working on from time to time.",le("br",{}),"My Favorite Food is Street Tacos and a bit specific but my Favorite Color is Royal Blue.",le("br",{}),"Oh and I almost Forgot my Pronouns are She/They."]})}),le("div",{id:"posts",className:"sm:grid sm:grid-cols-3 sm:gap-4 p-4",children:i.map(t=>le(Ct,{children:le("a",{href:"/post/"+t.id,children:le(vc,{title:t.title,header:t.header,body:t.body})})}))})]})]})}const pv=()=>le(Ol,{children:[le(hv,{path:"/"}),le(fv,{path:"/posts"}),le(dv,{path:"/post/:Num"})]});di(le(pv,{}),document.getElementById("app"));
