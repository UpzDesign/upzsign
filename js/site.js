const m=document.querySelector('.menu'),n=document.querySelector('#nav');m?.addEventListener('click',()=>{let o=n.classList.toggle('open');m.setAttribute('aria-expanded',String(o));m.textContent=o?'CLOSE −':'MENU +'});n?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');m.setAttribute('aria-expanded','false');m.textContent='MENU +'}));document.querySelector('#year').textContent=new Date().getFullYear();
const themeButton=document.querySelector('.theme-toggle');let saved=null;try{saved=localStorage.getItem('upzsign-theme')}catch(e){}function setTheme(t){document.documentElement.dataset.theme=t;themeButton?.setAttribute('aria-label',t==='dark'?'Switch to light mode':'Switch to dark mode')}setTheme(saved==='dark'||saved==='light'?saved:'light');themeButton?.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';setTheme(next);try{localStorage.setItem('upzsign-theme',next)}catch(e){}});

/* Prepare an email locally; no inquiry is submitted or stored by the website. */
const inquiryForm=document.getElementById('inquiry-form');
inquiryForm?.addEventListener('submit',event=>{
 event.preventDefault();
 if(!inquiryForm.reportValidity())return;
 const data=new FormData(inquiryForm);
 const get=key=>String(data.get(key)||'').trim();
 const lines=['New UPZ SIGNS project inquiry','', 'Project address: '+get('address'),'Work type: '+get('work'),'Production: '+get('production'),'Approximate size: '+get('size'),'Timing: '+get('timing'),'','Contact name: '+get('name'),'Contact email: '+get('email'),'','Additional details: '+(get('notes')||'None provided')];
 const subject='UPZ SIGNS inquiry — '+get('work');
 const link='mailto:info@upzdesign.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n'));
 const status=document.getElementById('inquiry-status');
 if(status)status.textContent='Your email app should open with the details ready to review. Please press Send there to complete your inquiry.';
 window.location.href=link;
});
