(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{429:function(t,e,s){},517:function(t,e,s){"use strict";s(429)},543:function(t,e,s){"use strict";s.r(e);var n={name:"",data:()=>({strs:[{title:"以梦为马，不负韶华，流年笑掷，未来可期，不负初心，方得始终。",stop:[5,10,15,20,25,30]},{title:"远赴人间惊鸿宴,一睹人间盛世颜。",stop:[8,16]},{title:"往日暗沉不可追，来日之路光明灿烂。",stop:[8,,17]},{title:"少年遥想得山田，请赶在日落下山前 ，日落下山得山田，归来仍是那少年。",stop:[8,,16,24,32]},{title:"北方有佳人，绝世而独立。一顾倾人城，再顾情人过。宁不知倾城与倾国，佳人在难得。",stop:[6,12,18,24,33,39]},{title:"古之立大事者,不惟有超世之才,亦必有坚忍不拔之志。",stop:[7,15,25]}],currentIndex:0,spans:null,el:null,titleEl:null}),mounted(){if(this.el)this.init();else{const t=setInterval(()=>{this.el=document.querySelector(".hero .description"),this.titleEl=document.querySelector(".hero  h1"),this.el&&(this.titleEl.style.fontWeight="bold",t&&clearInterval(t),this.init())},100)}},methods:{init(){this.currentIndex==this.strs.length&&(this.currentIndex=0);const t=this.strs[this.currentIndex];this.el.innerHTML=t instanceof Object?t.title:t,this.el.innerHTML=this.el.textContent.replace(/\S/g,"<span>$&</span>");let e=0;this.spans=[...document.querySelectorAll(".hero .description span")],this.spans.forEach((s,n)=>{e+=.1,t.hasOwnProperty("stop")&&(t.stop instanceof Array?t.stop.includes(n)&&(e+=.3):t.stop==n&&(e+=.3)),s.style.setProperty("--delay",e+"s")}),this.el.addEventListener("animationend",this.lastEnd)},lastEnd(t){t.target==document.querySelector(".hero .description span:last-child")&&(this.el.classList.add("ended"),setTimeout(()=>{this.el.removeEventListener("animationend",this.lastEnd);let t=0;this.spans.reverse().forEach((e,s)=>{this.el.classList.remove("ended"),e.style.width="2ch",e.style.animation="0.1s text-out ease-in-out forwards",t+=.05,e.style.animationDelay=t+"s"}),this.el.addEventListener("animationend",this.firstEnd)},1500))},firstEnd(t){t.target==document.querySelector(".hero .description span:first-child")&&(this.spans.forEach(t=>{t.remove()}),this.el.removeEventListener("animationend",this.firstEnd),this.currentIndex++,this.init())}}},i=(s(517),s(1)),l=Object(i.a)(n,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=l.exports}}]);