const $=s=>document.querySelector(s);
const tools=["HTML5","CSS3","JavaScript","PHP","MySQL","Python","Java","C++","Git & GitHub"];
$('#track').innerHTML=[...tools,...tools].map(t=>`<span>${t}</span>`).join('');
const sk=[["HTML5",90],["CSS3",85],["JavaScript",80],["PHP",75],["MySQL",80],["Python",85],["Java",65],["C++",70],["Responsive",85]];
$('#skgrid').innerHTML=sk.map(([n,p])=>`<div class="sk">${n}<div class="bar2"><i style="width:${p}%"></i></div><small>${p}%</small></div>`).join('');
const P=[
["Virtual Departmen","PHP","virtual-departmen","نظام قسم افتراضي مبني بـ PHP وMySQL.","Virtual department system built with PHP and MySQL.","project-1.jpg"],
["Spacetoon Old Song","JavaScript","spacetoon_old-song","مشغّل لأغاني سبيستون القديمة.","Player for classic Spacetoon songs.","project-2.jpg"],
["Age Calculator","HTML","age-calculator","حاسبة عمر بسيطة وسريعة.","A simple, fast age calculator.","project-3.jpg"],
["Book Flip","CSS","Book-flip","تأثير تقليب كتاب بـ CSS.","Book flip effect built with CSS.","project-4.jpg"],
["Real Estate Site","HTML","real-estate-site","موقع عقارات متجاوب.","Responsive real estate website.",""],
["Resort Website","HTML","resort_website","موقع منتجع بتصميم عصري.","Resort website with a modern layout.",""],
["Fly To Maldef Booking","HTML","fly-to-maldef-booking","واجهة حجز رحلات سياحية.","Travel booking interface.",""],
["Food Site","HTML","food-site","موقع مطعم وعرض وجبات.","Restaurant and menu website.",""],
["Micharlet","HTML","micharlet","موقع بتصميم HTML.","A website built with HTML.",""],
["PerfilCard HTML/CSS","HTML","PerfilCard-HtmlCss","بطاقة تعريف شخصية بـ HTML وCSS.","Profile card built with HTML and CSS.",""],
["WebGL Liquid Masking","JavaScript","WebGL-Liquid-Masking","تأثير بصري WebGL بقناع سائل.","WebGL liquid masking visual effect.",""],
["Sunfolk Valley","CSS","Sunfolk-Valley","صفحة بتأثيرات CSS متقدمة.","Page with advanced CSS effects.",""],
["Panda Login Page","CSS","panda-login-page","صفحة تسجيل دخول بتصميم الباندا.","Panda-themed login page.",""],
["Smoke Effect CSS","CSS","Smoke-Effect-css","تأثير دخان بـ CSS.","Smoke effect with CSS.",""],
["Portfolio","CSS","portfolio","نسخة سابقة من البورتفوليو.","An earlier portfolio version.",""],
["Yasir","CSS","yasir","مشروع تصميم بـ CSS.","A CSS design project.",""],
["Yasirmohammed11","Other","yasirmohammed11","ملف التعريف على GitHub.","GitHub profile repository.",""]];
let lang=localStorage.getItem('lang')||'ar';
let cur='All';
function pj(){const cats=['All',...new Set(P.map(p=>p[1]))];
$('#flt').innerHTML=cats.map(c=>`<button class="ib${c==cur?' on':''}" data-c="${c}">${c=='All'&&lang=='ar'?'الكل':c}</button>`).join('');
$('#pj').innerHTML=P.filter(p=>cur=='All'||p[1]==cur).map(p=>`<div class="pc">${p[5]?`<img class="cv" src="assets/images/${p[5]}" alt="${p[0]}" loading="lazy">`:`<div class="cv ph2" style="--h:${(p[0].length*47)%360}">${p[0].slice(0,2).toUpperCase()}</div>`}<span class="t">${p[1]}</span><h3>${p[0]}</h3><p>${lang=='en'?p[4]:p[3]}</p><a href="https://github.com/yasirmohammed11/${p[2]}" target="_blank" rel="noopener">${lang=='en'?'Project on GitHub':'المشروع على GitHub'}</a></div>`).join('')}
$('#flt').onclick=e=>{const c=e.target.dataset.c;if(c){cur=c;pj()}};
document.querySelectorAll('[data-en]').forEach(e=>e.dataset.ar=e.innerHTML);
function setLang(l){lang=l;localStorage.setItem('lang',l);const h=document.documentElement;h.lang=l;h.dir=l=='ar'?'rtl':'ltr';
 document.querySelectorAll('[data-en]').forEach(e=>e.innerHTML=l=='en'?e.dataset.en:e.dataset.ar);
 $('#lang').textContent=l=='ar'?'EN':'ع';document.title=l=='ar'?'ياسر محمد - Portfolio':'Yasir Mohammed - Portfolio';pj()}
$('#lang').onclick=()=>setLang(lang=='ar'?'en':'ar');
let th=localStorage.getItem('theme')||'dark';
function setTh(t){th=t;localStorage.setItem('theme',t);document.documentElement.dataset.theme=t;$('#theme').textContent=t=='dark'?'☀':'☾'}
$('#theme').onclick=()=>setTh(th=='dark'?'light':'dark');
$('#menu').onclick=()=>$('#nav').classList.toggle('open');
$('#nav').onclick=()=>$('#nav').classList.remove('open');
$('#up').onclick=()=>scrollTo({top:0,behavior:'smooth'});
addEventListener('scroll',()=>{const m=document.documentElement.scrollHeight-innerHeight;$('#ring').style.strokeDashoffset=151*(1-(m>0?scrollY/m:0))},{passive:true});
$('#f').onsubmit=e=>{e.preventDefault();const b=encodeURIComponent($('#m').value+'\n\n'+$('#n').value+' <'+$('#e').value+'>');location.href='mailto:yasirmhammed28@gmail.com?subject='+encodeURIComponent('Portfolio message')+'&body='+b};
setTh(th);setLang(lang);
