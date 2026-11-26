(function(){
const T = {
 en:{tagline:"Dhaka's problems, seen by everyone",tabFeed:"Live feed",tabReport:"Report",tabMap:"Areas",
  open:"Open",ack:"Acknowledged",solved:"Solved",allAreas:"All areas",sort:"Sort",newest:"Newest",mostConfirmed:"Most confirmed",
  confirm:"I see it too",confirmed:"You confirmed",notTrue:"Not true",details:"Details & updates",verified:"Verified",
  people:"confirm",sample:"Example",empty:"No problems reported here yet. Tap Report to post the first one.",
  loading:"Loading reports…",slow:"Can't reach the reports right now. Showing what we have.",
  demo:"Preview mode: not connected to the database yet, so reports stay on this screen only.",
  signIn:"Sign in",signOut:"Sign out",loginTitle:"Sign in to BD Eye",loginSub:"Sign in to post, confirm and comment. Reading is open to everyone.",
  withFb:"Continue with Facebook",emailLabel:"Or get a sign-in link by email",emailPh:"you@example.com",sendLink:"Email me a link",
  linkSent:"Check your email and tap the link to sign in.",badEmail:"Enter a valid email address.",signedOut:"Signed out",
  yourName:"Your name (shown on your posts)",saveName:"Save",nameSaved:"Name saved",
  installTitle:"Add BD Eye to your home screen",installSub:"Opens like an app, no Play Store needed.",install:"Install",
  reportTitle:"Report a problem",reportSub:"Takes under a minute. Others nearby can confirm it.",
  fCat:"What kind of problem?",fTitle:"Short headline",fTitlePh:"e.g. Road under knee-deep water",fDesc:"What's happening?",fDescPh:"When did it start, how bad is it, who is affected?",
  fArea:"Area",fPlace:"Nearest landmark or road",fPlacePh:"e.g. Mirpur 10 roundabout",fPhoto:"Photos (optional, up to 3)",fPhotoHint:"Take a photo or choose from gallery",photoMax:"You can add up to 3 photos.",removePhoto:"Remove photo",share:"Share",shareTitle:"Share this problem",shareSub:"More people seeing it means faster action.",copyLink:"Copy link",copied:"Link copied",msgCopied:"Link copied. Open Messenger and paste it in a chat.",copyFail:"Couldn't copy. Select the link below and copy it.",photosN:"photos",fbTitle:"Follow BD Eye on Facebook",fbSub:"Every new report here is also posted on our page.",fbSoon:"Page coming soon",fbFollow:"Follow",
  submit:"Post report",posting:"Posting…",posted:"Report posted",needCat:"Choose a kind of problem.",needTitle:"Write a short headline.",needArea:"Choose an area.",
  mapTitle:"Problems by area",mapSub:"Bigger circle, more open problems. Tap an area to see its reports.",
  legendR:"Mostly new",legendA:"Being handled",legendS:"All solved",openN:"open",
  status:"Status",changeStatus:"Update the status",addUpdate:"Add an update",updatePh:"Write a comment or update…",send:"Send",convoEmpty:"No comments yet. Start the conversation.",reply:"Reply",replyingTo:"Replying to",cancel:"Cancel",flag:"Report",flagged:"Reported",flagDone:"Thanks. We'll review this comment.",hiddenMsg:"Hidden after several people reported it.",del:"Delete",comments:"comments",
  close:"Close",reportedBy:"Reported by",someone:"Someone",you:"You",ago:"ago",justNow:"just now",
  sMin:"m",sHr:"h",sDay:"d",st_reported:"Reported",st_acknowledged:"Acknowledged",st_solved:"Solved",
  statusSet:"Status changed to",noWrite:"You can view reports but not post here.",saveFail:"Couldn't save. Check your connection and try again.",
  disputed:"say not true",history:"Conversation"},
 bn:{tagline:"ঢাকার সমস্যা, সবার চোখে",tabFeed:"লাইভ ফিড",tabReport:"রিপোর্ট",tabMap:"এলাকা",
  open:"চলমান",ack:"স্বীকৃত",solved:"সমাধান",allAreas:"সব এলাকা",sort:"সাজান",newest:"নতুন আগে",mostConfirmed:"বেশি নিশ্চিত",
  confirm:"আমিও দেখেছি",confirmed:"আপনি নিশ্চিত করেছেন",notTrue:"সত্য নয়",details:"বিস্তারিত ও আপডেট",verified:"যাচাইকৃত",
  people:"জন নিশ্চিত",sample:"নমুনা",empty:"এই এলাকায় এখনো কোনো সমস্যা নেই। প্রথম রিপোর্ট দিতে রিপোর্ট চাপুন।",
  loading:"রিপোর্ট লোড হচ্ছে…",slow:"এখন রিপোর্টগুলো আনা যাচ্ছে না। যা আছে দেখানো হচ্ছে।",
  demo:"প্রিভিউ মোড: এখনো ডেটাবেসে যুক্ত হয়নি, তাই রিপোর্ট শুধু এই স্ক্রিনেই থাকবে।",
  signIn:"সাইন ইন",signOut:"সাইন আউট",loginTitle:"BD Eye-এ সাইন ইন করুন",loginSub:"পোস্ট, নিশ্চিত ও মন্তব্য করতে সাইন ইন করুন। পড়তে সবার জন্য খোলা।",
  withFb:"ফেসবুক দিয়ে চালিয়ে যান",emailLabel:"অথবা ইমেইলে সাইন-ইন লিংক নিন",emailPh:"you@example.com",sendLink:"লিংক পাঠান",
  linkSent:"ইমেইল দেখুন এবং লিংকে চাপ দিয়ে সাইন ইন করুন।",badEmail:"সঠিক ইমেইল ঠিকানা দিন।",signedOut:"সাইন আউট হয়েছে",
  yourName:"আপনার নাম (পোস্টে দেখাবে)",saveName:"সংরক্ষণ",nameSaved:"নাম সংরক্ষিত",
  installTitle:"BD Eye হোম স্ক্রিনে যোগ করুন",installSub:"অ্যাপের মতো খুলবে, প্লে স্টোর লাগবে না।",install:"ইনস্টল",
  reportTitle:"সমস্যা জানান",reportSub:"এক মিনিটের কম লাগে। আশেপাশের মানুষ নিশ্চিত করতে পারবেন।",
  fCat:"কী ধরনের সমস্যা?",fTitle:"ছোট শিরোনাম",fTitlePh:"যেমন: রাস্তায় হাঁটু পানি",fDesc:"কী হচ্ছে?",fDescPh:"কখন শুরু, কতটা খারাপ, কারা ভুগছেন?",
  fArea:"এলাকা",fPlace:"কাছের চিহ্ন বা রাস্তা",fPlacePh:"যেমন: মিরপুর ১০ গোলচত্বর",fPhoto:"ছবি (ঐচ্ছিক, ৩টি পর্যন্ত)",fPhotoHint:"ছবি তুলুন বা গ্যালারি থেকে বাছুন",photoMax:"সর্বোচ্চ ৩টি ছবি দেওয়া যাবে।",removePhoto:"ছবি সরান",share:"শেয়ার",shareTitle:"সমস্যাটি শেয়ার করুন",shareSub:"যত বেশি মানুষ দেখবে, তত দ্রুত ব্যবস্থা হবে।",copyLink:"লিংক কপি",copied:"লিংক কপি হয়েছে",msgCopied:"লিংক কপি হয়েছে। মেসেঞ্জার খুলে চ্যাটে পেস্ট করুন।",copyFail:"কপি হয়নি। নিচের লিংকটি বেছে কপি করুন।",photosN:"ছবি",fbTitle:"ফেসবুকে BD Eye ফলো করুন",fbSub:"এখানে দেওয়া প্রতিটি নতুন রিপোর্ট আমাদের পেজেও যাবে।",fbSoon:"পেজ শিগগিরই আসছে",fbFollow:"ফলো",
  submit:"রিপোর্ট পোস্ট করুন",posting:"পোস্ট হচ্ছে…",posted:"রিপোর্ট পোস্ট হয়েছে",needCat:"সমস্যার ধরন বেছে নিন।",needTitle:"একটি ছোট শিরোনাম লিখুন।",needArea:"এলাকা বেছে নিন।",
  mapTitle:"এলাকাভিত্তিক সমস্যা",mapSub:"বড় বৃত্ত মানে বেশি চলমান সমস্যা। এলাকায় চাপ দিয়ে রিপোর্ট দেখুন।",
  legendR:"বেশিরভাগ নতুন",legendA:"কাজ চলছে",legendS:"সব সমাধান",openN:"চলমান",
  status:"অবস্থা",changeStatus:"অবস্থা হালনাগাদ করুন",addUpdate:"আপডেট দিন",updatePh:"মন্তব্য বা আপডেট লিখুন…",send:"পাঠান",convoEmpty:"এখনো কোনো মন্তব্য নেই। আলোচনা শুরু করুন।",reply:"উত্তর",replyingTo:"উত্তর দিচ্ছেন",cancel:"বাতিল",flag:"রিপোর্ট",flagged:"রিপোর্ট করা হয়েছে",flagDone:"ধন্যবাদ। মন্তব্যটি দেখা হবে।",hiddenMsg:"কয়েকজন রিপোর্ট করায় লুকানো হয়েছে।",del:"মুছুন",comments:"মন্তব্য",
  close:"বন্ধ",reportedBy:"রিপোর্ট করেছেন",someone:"একজন",you:"আপনি",ago:"আগে",justNow:"এইমাত্র",
  sMin:" মি.",sHr:" ঘ.",sDay:" দিন",st_reported:"রিপোর্ট হয়েছে",st_acknowledged:"স্বীকৃত",st_solved:"সমাধান হয়েছে",
  statusSet:"অবস্থা বদলেছে:",noWrite:"আপনি রিপোর্ট দেখতে পারবেন, কিন্তু পোস্ট করতে পারবেন না।",saveFail:"সংরক্ষণ হয়নি। সংযোগ দেখে আবার চেষ্টা করুন।",
  disputed:"জন বলছেন সত্য নয়",history:"আলোচনা"}
};
const CATS = [
 {id:"traffic",en:"Traffic jam",bn:"যানজট",icon:'<path d="M5 17h14M7 17V9l2-4h6l2 4v8M7 13h10"/><circle cx="8.5" cy="19" r="1.5"/><circle cx="15.5" cy="19" r="1.5"/>'},
 {id:"water",en:"Waterlogging",bn:"জলাবদ্ধতা",icon:'<path d="M3 15c2 0 2-1.5 4.5-1.5S9.5 15 12 15s2-1.5 4.5-1.5S19 15 21 15M3 19c2 0 2-1.5 4.5-1.5S9.5 19 12 19s2-1.5 4.5-1.5S19 19 21 19M12 3s-3.5 4-3.5 6.5a3.5 3.5 0 0 0 7 0C15.5 7 12 3 12 3Z"/>'},
 {id:"outage",en:"Power, gas or water cut",bn:"বিদ্যুৎ/গ্যাস/পানি বন্ধ",icon:'<path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z"/>'},
 {id:"safety",en:"Safety & security",bn:"নিরাপত্তা",icon:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/>'},
 {id:"prices",en:"Necessities & prices",bn:"নিত্যপণ্য ও দাম",icon:'<path d="M3 4h2l2.5 11h11L21 7H7"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/>'},
 {id:"service",en:"Poor public service",bn:"সেবায় অবহেলা",icon:'<path d="M4 21V10l8-6 8 6v11M9 21v-6h6v6"/>'},
 {id:"other",en:"Something else",bn:"অন্যান্য",icon:'<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.01"/>'}
];
// Schematic Dhaka: x,y in a 300 x 380 drawing (north at top)
const AREAS = [
 {id:"uttara",en:"Uttara",bn:"উত্তরা",x:170,y:40},
 {id:"mirpur",en:"Mirpur",bn:"মিরপুর",x:95,y:105},
 {id:"bashundhara",en:"Bashundhara",bn:"বসুন্ধরা",x:220,y:110},
 {id:"banani",en:"Banani",bn:"বনানী",x:158,y:138},
 {id:"gulshan",en:"Gulshan",bn:"গুলশান",x:200,y:158},
 {id:"badda",en:"Badda",bn:"বাড্ডা",x:248,y:180},
 {id:"mohammadpur",en:"Mohammadpur",bn:"মোহাম্মদপুর",x:58,y:205},
 {id:"tejgaon",en:"Tejgaon & Farmgate",bn:"তেজগাঁও ও ফার্মগেট",x:152,y:196},
 {id:"rampura",en:"Rampura",bn:"রামপুরা",x:222,y:222},
 {id:"dhanmondi",en:"Dhanmondi",bn:"ধানমন্ডি",x:104,y:266},
 {id:"khilgaon",en:"Khilgaon",bn:"খিলগাঁও",x:228,y:268},
 {id:"motijheel",en:"Motijheel",bn:"মতিঝিল",x:176,y:290},
 {id:"oldDhaka",en:"Old Dhaka",bn:"পুরান ঢাকা",x:128,y:322},
 {id:"jatrabari",en:"Jatrabari",bn:"যাত্রাবাড়ী",x:222,y:330}
];
const STATUSES = ["reported","acknowledged","solved"];
const VERIFY_AT = 3;

let lang = "en"; try{ lang = localStorage.getItem("bdeye-lang") || "en"; }catch(e){}
let tab = "feed", areaFilter = "all", statusFilter = "open", sortBy = "new";
let reports = [], votes = [], updates = [], flags = [], photos = {}, replyTo = null;
const HIDE_AT = 2;
let me = null, db = null, userApi = null, names = {}, mode = "loading", slow = false;
let detailId = null, pendingDetail = null, draft = {cat:null, photos:[]};
const CFG = window.BDEYE_CONFIG || {};
const FB_PAGE = CFG.facebookPage || "";
const APP_URL = (CFG.siteUrl || (location.origin + location.pathname)).replace(/#.*$/,""), MAX_PHOTOS = 3;
let sb = null, installEvt = null;
const photoKeys = r => !r.hasPhoto ? [] : Array.from({length:Math.max(1, Math.min(MAX_PHOTOS, r.photoCount||1))}, (_,i)=> i ? r.id+"_"+i : r.id);
const linkFor = id => APP_URL + "#r-" + id;
const photoImg = k => `<img class="photo" data-photo="${esc(k)}" alt="" ${photos[k]?`src="${esc(photos[k])}"`:""}>`;
const IC = {fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8Z"/></svg>',
 wa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 20l1.3-4A8 8 0 1 1 8.4 19L4 20Z"/><path d="M9 9.5c.3 2 2.2 4.2 4.8 5l1.2-1.2-1.6-.9-.8.8c-1-.4-2-1.4-2.4-2.4l.8-.8-.9-1.6L9 9.5Z" fill="currentColor" stroke-width="1"/></svg>',
 ms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3C7 3 3 6.7 3 11.4c0 2.6 1.2 4.9 3.2 6.4V21l3-1.6c.9.2 1.8.4 2.8.4 5 0 9-3.7 9-8.4S17 3 12 3Z"/><path d="m7 13.5 3.2-3.4 2.4 2 3.4-3.6-3.2 3.4-2.4-2Z" fill="currentColor" stroke-width="1"/></svg>',
 cp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>'};

const $ = s => document.querySelector(s);
const t = k => (T[lang][k] ?? T.en[k] ?? k);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const catOf = id => CATS.find(c=>c.id===id) || CATS[CATS.length-1];
const areaOf = id => AREAS.find(a=>a.id===id);
const nm = o => o ? (lang==="bn" ? o.bn : o.en) : "";
const bnDigits = s => lang==="bn" ? String(s).replace(/\d/g, d=>"০১২৩৪৫৬৭৮৯"[d]) : String(s);
function ago(ts){ const m = Math.max(0, Math.round((Date.now()-ts)/60000));
  if(m<1) return t("justNow");
  const v = m<60 ? m+t("sMin") : m<1440 ? Math.round(m/60)+t("sHr") : Math.round(m/1440)+t("sDay");
  return bnDigits(v)+" "+t("ago"); }
function toast(msg){ const el=$("#toast"); el.textContent=msg; el.hidden=false; clearTimeout(toast.h); toast.h=setTimeout(()=>el.hidden=true,2400); }

function tally(id){ let c=0,f=0,mine=null; for(const v of votes){ if(v.reportId!==id) continue; if(v.kind==="confirm") c++; else if(v.kind==="false") f++; if(me && v.uid===me) mine=v.kind; } return {c,f,mine}; }
function visible(){
  let list = reports.slice();
  if(areaFilter!=="all") list = list.filter(r=>r.area===areaFilter);
  if(statusFilter==="open") list = list.filter(r=>r.status!=="solved");
  else if(statusFilter!=="all") list = list.filter(r=>r.status===statusFilter);
  if(sortBy==="confirmed") list.sort((a,b)=>tally(b.id).c-tally(a.id).c || b.createdAt-a.createdAt);
  else list.sort((a,b)=>b.createdAt-a.createdAt);
  return list;
}

/* ---------- Rendering ---------- */
function render(){
  document.documentElement.lang = lang; renderUser();
  $("#tagline").textContent = t("tagline");
  $("#lang-bn").setAttribute("aria-pressed", lang==="bn"); $("#lang-en").setAttribute("aria-pressed", lang==="en");
  document.querySelectorAll("[data-t]").forEach(el=>el.textContent=t(el.dataset.t));
  document.querySelectorAll("nav.tabs button").forEach(b=>{ if(b.dataset.tab===tab) b.setAttribute("aria-current","page"); else b.removeAttribute("aria-current"); });
  const v = $("#view");
  if(tab==="feed") v.innerHTML = feedHTML();
  else if(tab==="map") v.innerHTML = mapHTML();
  else if(tab==="report") { if(!v.querySelector("#report-form")){ v.innerHTML = formHTML(); showDraftPhoto(); } else refreshFormText(); }
  if(tab==="feed") loadPhotos();
  if(detailId) renderDetail(); else openPending();
}
function renderUser(){
  const box = $("#userbox"); if(!box) return;
  if(!sb){ box.innerHTML=""; return; }
  box.innerHTML = me ? `<button type="button" class="userchip" id="open-account">${esc(names[me] || t("you"))}</button>` : `<button type="button" class="userchip" id="open-login">${esc(t("signIn"))}</button>`;
}
function openLogin(){
  const sh=$("#sheet"); detailId=null;
  sh.innerHTML = `<div class="panel" role="dialog" aria-modal="true" aria-labelledby="l-h">
    <div class="row" style="margin:0"><h2 id="l-h" style="margin:0;flex:1">${esc(t("loginTitle"))}</h2><button type="button" class="btn" id="d-close">${esc(t("close"))}</button></div>
    <p class="sub">${esc(t("loginSub"))}</p>
    <div class="login-opts">
      ${CFG.facebookLogin?`<button type="button" class="btn fb" id="login-fb">${IC.fb}${esc(t("withFb"))}</button>`:""}
      <form id="login-form" class="field" novalidate><span>${esc(t("emailLabel"))}</span>
        <input type="text" inputmode="email" autocomplete="email" id="login-email" placeholder="${esc(t("emailPh"))}">
        <button type="submit" class="btn primary wide">${esc(t("sendLink"))}</button>
        <div class="note" id="login-msg" hidden></div></form>
    </div></div>`;
  sh.hidden=false;
}
function openAccount(){
  const sh=$("#sheet"); detailId=null;
  sh.innerHTML = `<div class="panel" role="dialog" aria-modal="true" aria-labelledby="a-h">
    <div class="row" style="margin:0"><h2 id="a-h" style="margin:0;flex:1">${esc(names[me]||t("you"))}</h2><button type="button" class="btn" id="d-close">${esc(t("close"))}</button></div>
    <form id="name-form" class="field" style="margin-top:14px"><span>${esc(t("yourName"))}</span><input type="text" id="my-name" maxlength="60" value="${esc(names[me]||"")}"><button type="submit" class="btn primary wide">${esc(t("saveName"))}</button></form>
    <button type="button" class="btn wide" id="sign-out" style="margin-top:16px;width:100%">${esc(t("signOut"))}</button></div>`;
  sh.hidden=false;
}
function needLogin(){ if(sb && !me){ openLogin(); const e = new Error("login"); e.code="login"; throw e; } }
function bannerHTML(){
  if(mode==="demo") return `<div class="banner">${esc(t("demo"))}</div>`;
  if(slow) return `<div class="banner">${esc(t("slow"))}</div>`;
  return "";
}
function feedHTML(){
  const open = reports.filter(r=>r.status==="reported").length, ack = reports.filter(r=>r.status==="acknowledged").length, sol = reports.filter(r=>r.status==="solved").length;
  const sChips = [["open",t("open")],["acknowledged",t("ack")],["solved",t("solved")],["all",lang==="bn"?"সব":"All"]]
    .map(([k,l])=>`<button type="button" class="chip" data-status="${k}" aria-pressed="${statusFilter===k}">${esc(l)}</button>`).join("");
  const areaOpts = `<option value="all">${esc(t("allAreas"))}</option>` + AREAS.map(a=>`<option value="${a.id}" ${areaFilter===a.id?"selected":""}>${esc(nm(a))}</option>`).join("");
  const list = visible();
  let cards;
  if(mode==="loading" && !reports.length) cards = `<div class="empty">${esc(t("loading"))}</div>`;
  else if(!list.length) cards = `<div class="empty">${esc(t("empty"))}</div>`;
  else cards = list.map(cardHTML).join("");
  return `${bannerHTML()}
  <div class="pulse">
    <div class="r"><b>${bnDigits(open)}</b><span>${esc(t("st_reported"))}</span></div>
    <div class="a"><b>${bnDigits(ack)}</b><span>${esc(t("st_acknowledged"))}</span></div>
    <div class="s"><b>${bnDigits(sol)}</b><span>${esc(t("st_solved"))}</span></div>
  </div>
  ${installEvt?`<div class="install"><div><b>${esc(t("installTitle"))}</b><br><span class="note">${esc(t("installSub"))}</span></div><button type="button" class="btn primary" id="do-install">${esc(t("install"))}</button></div>`:""}
  <div class="fbcard"><span class="fbicon">${IC.fb}</span><div><b>${esc(t("fbTitle"))}</b><span>${esc(t("fbSub"))}</span></div>
    ${/^https:\/\/(www\.|m\.)?facebook\.com\//.test(FB_PAGE)?`<a class="btn primary" target="_blank" rel="noopener" href="${esc(FB_PAGE)}">${esc(t("fbFollow"))}</a>`:`<button type="button" class="btn" disabled>${esc(t("fbSoon"))}</button>`}</div>
  <div class="filters" role="group" aria-label="${esc(t("status"))}">${sChips}</div>
  <div class="row"><select id="area-filter" aria-label="${esc(t("fArea"))}">${areaOpts}</select>
    <label for="sort-by">${esc(t("sort"))}</label><select id="sort-by"><option value="new" ${sortBy==="new"?"selected":""}>${esc(t("newest"))}</option><option value="confirmed" ${sortBy==="confirmed"?"selected":""}>${esc(t("mostConfirmed"))}</option></select></div>
  <div class="feed">${cards}</div>`;
}
function cardHTML(r){
  const {c,f,mine} = tally(r.id);
  const cat = catOf(r.category), area = areaOf(r.area);
  return `<article class="card" data-s="${esc(r.status)}"><div class="stripe"></div><div class="body">
    <div class="meta"><span class="cat">${esc(nm(cat))}</span><span>·</span><span>${esc(nm(area))}${r.place?", "+esc(r.place):""}</span><span>·</span><span>${esc(ago(r.createdAt))}</span></div>
    <h3>${esc(r.title)}</h3>
    ${r.hasPhoto?`<div class="photo-wrap">${photoImg(r.id)}${photoKeys(r).length>1?`<span class="photo-more">${bnDigits(photoKeys(r).length)} ${esc(t("photosN"))}</span>`:""}</div>`:""}
    ${r.desc?`<p>${esc(r.desc.length>160?r.desc.slice(0,157)+"…":r.desc)}</p>`:""}
    <div class="meta"><span class="pill ${esc(r.status)}">${esc(t("st_"+r.status))}</span>
      ${c>=VERIFY_AT?`<span class="pill verified">✓ ${esc(t("verified"))}</span>`:""}
      ${r.sample?`<span class="pill sample">${esc(t("sample"))}</span>`:""}
      <span class="count">${bnDigits(c)} ${esc(t("people"))}</span>${f?`<span class="count">· ${bnDigits(f)} ${esc(t("disputed"))}</span>`:""}${(()=>{const n=updates.filter(u=>u.reportId===r.id&&u.text).length; return n?`<span class="count">· 💬 ${bnDigits(n)} ${esc(t("comments"))}</span>`:"";})()}</div>
    <div class="actions">
      <button type="button" class="btn" data-vote="confirm" data-id="${esc(r.id)}" aria-pressed="${mine==="confirm"}">👁 ${esc(mine==="confirm"?t("confirmed"):t("confirm"))}</button>
      <button type="button" class="btn" data-vote="false" data-id="${esc(r.id)}" aria-pressed="${mine==="false"}">${esc(t("notTrue"))}</button>
      <button type="button" class="btn" data-open="${esc(r.id)}">${esc(t("details"))}</button>
      <button type="button" class="btn" data-open="${esc(r.id)}" data-goshare="1">${IC.cp}${esc(t("share"))}</button>
    </div></div></article>`;
}
function mapHTML(){
  const stats = AREAS.map(a=>{ const rs = reports.filter(r=>r.area===a.id); const open = rs.filter(r=>r.status!=="solved");
    const newer = open.filter(r=>r.status==="reported").length; return {a,total:rs.length,open:open.length,newer}; });
  const max = Math.max(1,...stats.map(s=>s.open));
  const colorOf = s => s.open===0 ? "var(--green)" : (s.newer*2>=s.open ? "var(--red)" : "var(--amber)");
  const bubbles = stats.map(s=>{ const r = s.total? 8 + 13*Math.sqrt(s.open/max) : 5;
    return `<g class="area" data-area="${s.a.id}" style="cursor:pointer" role="button" tabindex="0" aria-label="${esc(nm(s.a))}: ${s.open} ${esc(t("openN"))}">
      <circle cx="${s.a.x}" cy="${s.a.y}" r="${r.toFixed(1)}" fill="${s.total?colorOf(s):"var(--muted)"}" fill-opacity="${s.total?0.85:0.35}" stroke="var(--surface)" stroke-width="2"/>
      ${s.open?`<text x="${s.a.x}" y="${s.a.y+4}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--surface)">${bnDigits(s.open)}</text>`:""}
      <text x="${s.a.x}" y="${s.a.y+r+12}" text-anchor="middle" font-size="10.5" fill="var(--fg)">${esc(nm(s.a).replace(/ (&|ও) .*/,""))}</text></g>`; }).join("");
  const list = stats.slice().sort((x,y)=>y.open-x.open||y.total-x.total).map(s=>`<button type="button" data-area="${s.a.id}">
    <span class="nm">${esc(nm(s.a))}</span><span class="bar" style="width:${Math.round(60*s.open/max)}px;background:${colorOf(s)}"></span><span class="n">${bnDigits(s.open)} ${esc(t("openN"))}</span></button>`).join("");
  return `${bannerHTML()}<h2>${esc(t("mapTitle"))}</h2><p class="sub">${esc(t("mapSub"))}</p>
  <div class="mapbox"><svg viewBox="0 0 300 380" role="img" aria-label="${esc(t("mapTitle"))}">
    <path d="M300 0 L300 380 L0 380 L0 0 Z" fill="var(--sunk)" opacity=".5"/>
    <path d="M30 0 C 40 60, 20 120, 35 170 S 20 260, 60 300 S 110 360, 170 362 S 260 350, 300 372" fill="none" stroke="var(--water)" stroke-width="16" stroke-linecap="round"/>
    <path d="M300 60 C 285 130, 292 200, 278 260 S 270 330, 280 380" fill="none" stroke="var(--water)" stroke-width="9"/>
    <text x="16" y="250" font-size="9" fill="var(--muted)" transform="rotate(-78 16 250)">${lang==="bn"?"তুরাগ":"Turag"}</text>
    <text x="70" y="352" font-size="9" fill="var(--muted)">${lang==="bn"?"বুড়িগঙ্গা":"Buriganga"}</text>
    <text x="284" y="20" font-size="10" fill="var(--muted)" text-anchor="middle">N ↑</text>
    ${bubbles}
  </svg>
  <div class="legend"><span><i style="background:var(--red)"></i>${esc(t("legendR"))}</span><span><i style="background:var(--amber)"></i>${esc(t("legendA"))}</span><span><i style="background:var(--green)"></i>${esc(t("legendS"))}</span></div></div>
  <div class="arealist">${list}</div>`;
}
function formHTML(){
  return `${bannerHTML()}<h2 id="f-h">${esc(t("reportTitle"))}</h2><p class="sub" id="f-sub">${esc(t("reportSub"))}</p>
  <form id="report-form" novalidate>
    <div class="field"><span id="l-cat">${esc(t("fCat"))}</span><div class="cats" id="cats">${CATS.map(c=>`<button type="button" data-cat="${c.id}" aria-pressed="${draft.cat===c.id}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${c.icon}</svg><span>${esc(nm(c))}</span></button>`).join("")}</div></div>
    <label class="field"><span id="l-title">${esc(t("fTitle"))}</span><input type="text" id="f-title" maxlength="90" placeholder="${esc(t("fTitlePh"))}"></label>
    <div class="field"><span id="l-photo">${esc(t("fPhoto"))}</span><div class="thumbs" id="thumbs"></div><label class="photo-pick" id="photo-pick"><input type="file" id="f-photo" accept="image/*" multiple hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4Z"/><circle cx="12" cy="13" r="3.5"/></svg><span id="photo-hint">${esc(t("fPhotoHint"))}</span></label></div>
    <label class="field"><span id="l-desc">${esc(t("fDesc"))}</span><textarea id="f-desc" maxlength="600" placeholder="${esc(t("fDescPh"))}"></textarea></label>
    <label class="field"><span id="l-area">${esc(t("fArea"))}</span><select id="f-area"><option value="">—</option>${AREAS.map(a=>`<option value="${a.id}">${esc(nm(a))}</option>`).join("")}</select></label>
    <label class="field"><span id="l-place">${esc(t("fPlace"))}</span><input type="text" id="f-place" maxlength="80" placeholder="${esc(t("fPlacePh"))}"></label>
    <div class="err" id="f-err" hidden></div>
    <button type="submit" class="btn primary" id="f-submit" style="justify-content:center;padding:12px">${esc(t("submit"))}</button>
  </form>`;
}
function refreshFormText(){ // re-label on language switch without losing what was typed
  const keep = {title:$("#f-title").value, desc:$("#f-desc").value, area:$("#f-area").value, place:$("#f-place").value};
  $("#view").innerHTML = formHTML();
  $("#f-title").value=keep.title; $("#f-desc").value=keep.desc; $("#f-area").value=keep.area; $("#f-place").value=keep.place;
  showDraftPhoto();
}
function showDraftPhoto(){ const box=$("#thumbs"), pick=$("#photo-pick"); if(!box) return;
  box.innerHTML = draft.photos.map((p,i)=>`<div><img alt="" src="${esc(p)}"><button type="button" data-rmphoto="${i}" aria-label="${esc(t("removePhoto"))}">×</button></div>`).join("");
  box.hidden = !draft.photos.length; pick.hidden = draft.photos.length>=MAX_PHOTOS; }

function shareText(r){ const a=areaOf(r.area); return r.title+" ("+nm(a)+(r.place?", "+r.place:"")+") | BD Eye\n"+linkFor(r.id); }
function routeHash(){ const m = /^#r-([A-Za-z0-9_-]{1,60})$/.exec(location.hash||""); if(m){ pendingDetail=m[1]; openPending(); } }
function openPending(){ if(pendingDetail && reports.some(r=>r.id===pendingDetail)){ detailId=pendingDetail; pendingDetail=null; renderDetail(); } }
function closeDetail(){ detailId=null; replyTo=null; $("#sheet").hidden=true; if(/^#r-/.test(location.hash)) try{ history.replaceState(null,"",location.pathname+location.search); }catch(e){} }
function renderDetail(){
  const r = reports.find(x=>x.id===detailId); const sh=$("#sheet");
  if(!r){ sh.hidden=true; detailId=null; return; }
  const {c,f,mine}=tally(r.id); const cat=catOf(r.category), area=areaOf(r.area);
  const ups = updates.filter(u=>u.reportId===r.id).sort((a,b)=>a.at-b.at);
  const who = id => id && id===me ? t("you") : (names[id] || t("someone"));
  const draftTxt = sh.querySelector("#u-text")?.value || "";
  const oldPanel = sh.querySelector(".panel"), keepScroll = oldPanel && oldPanel.dataset.id===r.id ? oldPanel.scrollTop : 0, hadFocus = document.activeElement?.id==="u-text";
  const flagCount = id => { const u = updates.find(x=>x.id===id); return Math.max(u && u.flagCount || 0, flags.filter(x=>x.updateId===id).length); }, myFlag = id => flags.some(x=>x.updateId===id && x.uid===me);
  const initial = n => (n||"?").trim().charAt(0).toUpperCase();
  function msgHTML(u){
    if(u.status && !u.text) return `<div class="sysline">${esc(who(u.uid))}: <b>${esc(t("statusSet"))} ${esc(t("st_"+u.status))}</b> · ${esc(ago(u.at))}</div>`;
    const mine = u.uid && u.uid===me, hide = !mine && flagCount(u.id)>=HIDE_AT, parent = u.replyTo && ups.find(x=>x.id===u.replyTo);
    return `<div class="msg ${mine?"mine":""}"><span class="avatar" aria-hidden="true">${esc(initial(who(u.uid)))}</span><div class="bubble ${hide?"hidden":""}">
      <b>${esc(who(u.uid))}</b>${parent?`<div class="replyto">↪ ${esc(who(parent.uid))}</div>`:""}
      ${u.status?`<div class="replyto">${esc(t("statusSet"))} ${esc(t("st_"+u.status))}</div>`:""}
      <p>${esc(hide?t("hiddenMsg"):u.text)}</p>
      <div class="msgfoot"><span>${esc(ago(u.at))}</span>${hide?"":`<button type="button" data-reply="${esc(u.id)}">${esc(t("reply"))}</button>`}
      ${mine?`<button type="button" data-delmsg="${esc(u.id)}">${esc(t("del"))}</button>`:`<button type="button" data-flag="${esc(u.id)}" aria-pressed="${myFlag(u.id)}">${esc(myFlag(u.id)?t("flagged"):t("flag"))}</button>`}</div></div></div>`;
  }
  sh.innerHTML = `<div class="panel" role="dialog" aria-modal="true" aria-labelledby="d-title">
    <div class="row" style="margin:0"><span class="pill ${esc(r.status)}">${esc(t("st_"+r.status))}</span>${c>=VERIFY_AT?`<span class="pill verified">✓ ${esc(t("verified"))}</span>`:""}${r.sample?`<span class="pill sample">${esc(t("sample"))}</span>`:""}<span class="spacer"></span><button type="button" class="btn" id="d-close">${esc(t("close"))}</button></div>
    <div class="meta" style="margin-top:10px"><span class="cat">${esc(nm(cat))}</span><span>·</span><span>${esc(nm(area))}${r.place?", "+esc(r.place):""}</span></div>
    <h2 id="d-title" style="margin-top:4px">${esc(r.title)}</h2>
    ${r.hasPhoto?`<div class="gallery">${photoKeys(r).map(photoImg).join("")}</div>`:""}
    ${r.desc?`<p style="margin:10px 0">${esc(r.desc)}</p>`:""}
    <div class="meta">${esc(t("reportedBy"))} ${esc(r.sample?t("sample"):who(r.uid))} · ${esc(ago(r.createdAt))} · <span class="count">${bnDigits(c)} ${esc(t("people"))}</span>${f?` · ${bnDigits(f)} ${esc(t("disputed"))}`:""}</div>
    <div class="actions"><button type="button" class="btn" data-vote="confirm" data-id="${esc(r.id)}" aria-pressed="${mine==="confirm"}">👁 ${esc(mine==="confirm"?t("confirmed"):t("confirm"))}</button>
      <button type="button" class="btn" data-vote="false" data-id="${esc(r.id)}" aria-pressed="${mine==="false"}">${esc(t("notTrue"))}</button></div>
    <h3 id="d-share" style="font-family:var(--f-display);margin:18px 0 0;font-size:16px">${esc(t("shareTitle"))}</h3>
    <p class="sub" style="margin:0">${esc(t("shareSub"))}</p>
    <div class="share">
      <a class="btn" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(linkFor(r.id))}">${IC.fb}Facebook</a>
      <a class="btn" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(shareText(r))}">${IC.wa}WhatsApp</a>
      <button type="button" class="btn" data-copy="ms">${IC.ms}Messenger</button>
      <button type="button" class="btn" data-copy="link">${IC.cp}${esc(t("copyLink"))}</button>
    </div>
    <input class="linkbox" id="share-link" readonly aria-label="${esc(t("copyLink"))}" value="${esc(linkFor(r.id))}">
    <h3 style="font-family:var(--f-display);margin:18px 0 4px;font-size:16px">${esc(t("changeStatus"))}</h3>
    <div class="steps">${STATUSES.map(s=>`<button type="button" data-setstatus="${s}" class="${s} ${r.status===s?"on":""}" aria-pressed="${r.status===s}">${esc(t("st_"+s))}</button>`).join("")}</div>
    <h3 style="font-family:var(--f-display);margin:18px 0 4px;font-size:16px">${esc(t("history"))}</h3>
    <div class="convo">${ups.map(msgHTML).join("") || `<div class="sub" style="margin:0">${esc(t("convoEmpty"))}</div>`}</div>
    ${replyTo && ups.some(u=>u.id===replyTo)?`<div class="replying">↪ ${esc(t("replyingTo"))} <b>${esc(who(ups.find(u=>u.id===replyTo).uid))}</b><button type="button" id="cancel-reply">${esc(t("cancel"))}</button></div>`:""}
    <form id="u-form" style="margin-top:8px"><input type="text" id="u-text" maxlength="500" placeholder="${esc(t("updatePh"))}" aria-label="${esc(t("updatePh"))}" style="flex:1;min-width:0;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:9px 12px"><button type="submit" class="btn primary">${esc(t("send"))}</button></form>
  </div>`;
  sh.querySelector("#u-text").value = draftTxt;
  const np = sh.querySelector(".panel"); np.dataset.id = r.id; sh.hidden=false; np.scrollTop = keepScroll; if(hadFocus) sh.querySelector("#u-text").focus({preventScroll:true}); loadPhotos();
}

/* ---------- Data layer: shared store, or in-memory demo ---------- */
const sbStore = {
  async addReport(r, list){
    const urls = [];
    for(const dataUrl of list){
      const blob = await (await fetch(dataUrl)).blob();
      const path = me + "/" + (crypto.randomUUID ? crypto.randomUUID() : Date.now()+"-"+Math.random().toString(36).slice(2)) + ".jpg";
      const up = await sb.storage.from("photos").upload(path, blob, {contentType:"image/jpeg", upsert:false}); if(up.error) throw up.error;
      urls.push(sb.storage.from("photos").getPublicUrl(path).data.publicUrl);
    }
    const {error} = await sb.from("reports").insert({category:r.category, title:r.title, description:r.desc||"", area:r.area, place:r.place||"", lang:r.lang, photos:urls});
    if(error) throw error; await load();
  },
  async vote(reportId, kind){
    const mine = votes.find(v=>v.reportId===reportId && v.uid===me);
    const q = mine && mine.kind===kind ? sb.from("votes").delete().match({report_id:reportId, user_id:me})
      : sb.from("votes").upsert({report_id:reportId, user_id:me, kind});
    const {error} = await q; if(error) throw error; await load();
  },
  async setStatus(reportId, status){ const {error} = await sb.rpc("set_report_status", {p_report:reportId, p_status:status}); if(error) throw error; await load(); },
  async flag(updateId){ const {error} = await sb.from("flags").insert({comment_id:updateId}); if(error && error.code!=="23505") throw error; await load(); },
  async delMsg(id){ const {error} = await sb.from("comments").delete().eq("id", id); if(error) throw error; await load(); },
  async addUpdate(reportId, text, reply){ const row={report_id:reportId, body:text}; if(reply) row.reply_to=reply; const {error} = await sb.from("comments").insert(row); if(error) throw error; await load(); }
};
const store = {
  async addReport(r, list){
    if(sb){ needLogin(); return sbStore.addReport(r, list); }
    const id = "r"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
    for(let i=0;i<list.length;i++){ const k = i ? id+"_"+i : id; if(db) await db.doc("photos/"+k).set({data:list[i]}); photos[k]=list[i]; }
    const doc = {...r, uid:me, createdAt:Date.now(), status:"reported", hasPhoto:list.length>0, photoCount:list.length};
    if(db) await db.doc("reports/"+id).set(doc); else { reports.push({id,...doc}); render(); }
  },
  async vote(reportId, kind){
    if(sb){ needLogin(); return sbStore.vote(reportId, kind); }
    const key = reportId+"__"+me; const existing = votes.find(v=>v.id===key);
    if(existing && existing.kind===kind){ if(db) await db.doc("votes/"+key).delete(); else { votes=votes.filter(v=>v.id!==key); render(); } return; }
    const v = {reportId, uid:me, kind, at:Date.now()};
    if(db) await db.doc("votes/"+key).set(v); else { votes=votes.filter(x=>x.id!==key); votes.push({id:key,...v}); render(); }
  },
  async setStatus(reportId, status){
    if(sb){ needLogin(); return sbStore.setStatus(reportId, status); }
    const u = {reportId, uid:me, status, text:"", at:Date.now()};
    if(db){ await db.doc("reports/"+reportId).update({status, updatedAt:Date.now()}); await db.collection("updates").add(u); }
    else { const r=reports.find(x=>x.id===reportId); r.status=status; updates.push({id:"u"+Date.now(),...u}); render(); }
  },
  async flag(updateId){
    if(sb){ needLogin(); return sbStore.flag(updateId); }
    const key = updateId+"__"+me; if(flags.some(f=>f.id===key)) return;
    const f = {updateId, uid:me, at:Date.now()};
    if(db) await db.doc("flags/"+key).set(f); else { flags.push({id:key,...f}); render(); }
  },
  async delMsg(id){ if(sb){ needLogin(); return sbStore.delMsg(id); } if(db) await db.doc("updates/"+id).delete(); else { updates=updates.filter(u=>u.id!==id); render(); } },
  async addUpdate(reportId, text, reply){
    if(sb){ needLogin(); return sbStore.addUpdate(reportId, text, reply); }
    const u = {reportId, uid:me, text, at:Date.now()}; if(reply) u.replyTo = reply;
    if(db) await db.collection("updates").add(u); else { updates.push({id:"u"+Date.now(),...u}); render(); }
  }
};
async function loadPhotos(){
  const need = [...document.querySelectorAll("img[data-photo]")].map(i=>i.dataset.photo).filter(id=>!(id in photos));
  for(const id of new Set(need)){
    photos[id] = null;
    if(!db) continue;
    try{ const s = await db.doc("photos/"+id).get(); const d = s.exists ? s.data().data : null;
      if(typeof d==="string" && d.startsWith("data:image/")){ photos[id]=d; document.querySelectorAll(`img[data-photo="${id}"]`).forEach(i=>i.src=d); } }catch(e){}
  }
}
async function resolveNames(){
  if(!userApi) return;
  const ids = [...new Set([...reports.map(r=>r.uid), ...updates.map(u=>u.uid)].filter(Boolean))].filter(id=>!(id in names));
  if(!ids.length) return;
  try{ const ps = await userApi.profiles(ids); let changed=false; for(const id of ids){ const n = ps?.[id]?.name || ""; if(n){ names[id]=n; changed=true; } else names[id]=""; } if(changed && detailId) renderDetail(); }catch(e){}
}
function startDemo(){
  mode="demo"; me="demo-me"; names={x1:"Rahim",x2:"Farhana",x3:"Nusrat",x4:"Tanvir"}; const now=Date.now(), H=3600000;
  reports = [
   {id:"d1",sample:true,category:"water",area:"mirpur",place:"Mirpur 10 roundabout",title:"Knee-deep water after last night's rain",desc:"Rickshaws can't pass. Shops on the east side are flooded and the drain near the bus stand is blocked.",status:"reported",createdAt:now-2*H},
   {id:"d2",sample:true,category:"outage",area:"mohammadpur",place:"Tajmahal Road",title:"No electricity since 6 AM",desc:"Whole block is dark. DESCO helpline is busy.",status:"acknowledged",createdAt:now-5*H},
   {id:"d3",sample:true,category:"traffic",area:"tejgaon",place:"Farmgate",title:"Signal not working, jam reaching Karwan Bazar",desc:"Traffic police not present. Buses stuck for 40 minutes.",status:"reported",createdAt:now-0.6*H},
   {id:"d4",sample:true,category:"safety",area:"dhanmondi",place:"Road 8A lake side",title:"Street lights out along the lake path",desc:"Very dark after 7 PM. Two phone snatchings this week.",status:"reported",createdAt:now-26*H},
   {id:"d5",sample:true,category:"service",area:"oldDhaka",place:"Lalbagh",title:"Garbage not collected for 4 days",desc:"Bins overflowing on the main lane.",status:"solved",createdAt:now-60*H}
  ];
  votes = [["d1",5],["d2",3],["d3",2],["d4",1]].flatMap(([id,n])=>Array.from({length:n},(_,i)=>({id:id+"__x"+i,reportId:id,uid:"x"+i,kind:"confirm"})));
  updates = [{id:"u1",reportId:"d2",uid:"x1",status:"acknowledged",text:"",at:now-3*H},{id:"u3",reportId:"d1",uid:"x3",text:"Same on the west side. Bus stand is under water too.",at:now-1.5*H},{id:"u4",reportId:"d1",uid:"x4",text:"Does anyone have the ward councillor's number?",at:now-H},{id:"u5",reportId:"d1",uid:"x3",replyTo:"u4",text:"Call the city corporation hotline. They came within a day last time.",at:now-0.5*H},{id:"u2",reportId:"d5",uid:"x2",status:"solved",text:"City corporation truck came this morning.",at:now-20*H}];
  render();
}
let loading = null, reloadTimer = null;
async function load(){
  if(loading) return loading;
  loading = (async()=>{
    const {data:rs, error} = await sb.from("report_feed").select("*").order("created_at",{ascending:false}).limit(300);
    if(error) throw error;
    const ids = rs.map(r=>r.id);
    const [vs, cs, fs] = await Promise.all([
      ids.length ? sb.from("votes").select("report_id,user_id,kind").in("report_id", ids) : {data:[]},
      ids.length ? sb.from("comments").select("id,report_id,user_id,body,status,reply_to,flag_count,created_at,profiles(name)").in("report_id", ids).order("created_at") : {data:[]},
      me ? sb.from("flags").select("comment_id").eq("user_id", me) : {data:[]}
    ]);
    if(me && !names[me]){ const p = await sb.from("profiles").select("name").eq("id", me).maybeSingle(); if(p.data) names[me] = p.data.name; }
    reports = rs.map(r=>{ (r.photos||[]).forEach((u,i)=>{ if(/^https:\/\//.test(u)) photos[i ? r.id+"_"+i : r.id] = u; }); names[r.user_id] = r.author_name || names[r.user_id] || "";
      return {id:r.id, uid:r.user_id, category:r.category, title:r.title, desc:r.description, area:r.area, place:r.place, status:r.status,
        createdAt:Date.parse(r.created_at), hasPhoto:(r.photos||[]).length>0, photoCount:(r.photos||[]).length}; });
    votes = (vs.data||[]).map(v=>({id:v.report_id+"__"+v.user_id, reportId:v.report_id, uid:v.user_id, kind:v.kind}));
    updates = (cs.data||[]).map(c=>{ if(c.profiles && c.profiles.name) names[c.user_id]=c.profiles.name;
      return {id:c.id, reportId:c.report_id, uid:c.user_id, text:c.body, status:c.status||null, replyTo:c.reply_to||null, flagCount:c.flag_count||0, at:Date.parse(c.created_at)}; });
    flags = (fs.data||[]).map(f=>({id:f.comment_id+"__"+me, updateId:f.comment_id, uid:me}));
    mode="live"; slow=false; render();
  })().catch(e=>{ console.error(e); slow=true; render(); }).finally(()=>{ loading=null; });
  return loading;
}
const scheduleLoad = () => { clearTimeout(reloadTimer); reloadTimer = setTimeout(load, 400); };
async function connect(){
  if(!CFG.supabaseUrl || !CFG.supabaseAnonKey || !window.supabase){ startDemo(); return; }
  sb = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey);
  const {data:{session}} = await sb.auth.getSession();
  me = session ? session.user.id : null;
  sb.auth.onAuthStateChange((evt, sess)=>{ const id = sess ? sess.user.id : null; if(id!==me){ me=id; if(/access_token|code=/.test(location.href)) try{ history.replaceState(null,"",location.pathname); }catch(e){} scheduleLoad(); } });
  const timer = setTimeout(()=>{ if(mode==="loading"){ slow=true; render(); } }, 10000);
  await load(); clearTimeout(timer);
  sb.channel("live").on("postgres_changes",{event:"*",schema:"public",table:"reports"},scheduleLoad)
    .on("postgres_changes",{event:"*",schema:"public",table:"votes"},scheduleLoad)
    .on("postgres_changes",{event:"*",schema:"public",table:"comments"},scheduleLoad).subscribe();
}
const failed = e => { if(e && e.code==="login") return; console.error(e); toast(e && (e.code==="permission_denied"||e.code==="not_granted") ? t("noWrite") : t("saveFail")); };

/* ---------- Events ---------- */
$("#lang-bn").onclick = ()=>{ lang="bn"; try{localStorage.setItem("bdeye-lang","bn")}catch(e){} render(); };
$("#lang-en").onclick = ()=>{ lang="en"; try{localStorage.setItem("bdeye-lang","en")}catch(e){} render(); };
document.querySelectorAll("nav.tabs button").forEach(b=>b.onclick=()=>{ tab=b.dataset.tab; $("#view").innerHTML=""; render(); window.scrollTo(0,0); });

document.addEventListener("click", async e=>{
  const el = e.target.closest("button,[data-area]"); if(!el) return;
  if(el.dataset.status){ statusFilter=el.dataset.status; render(); return; }
  if(el.dataset.area && !el.closest("#view select")){ areaFilter=el.dataset.area; statusFilter="all"; tab="feed"; render(); window.scrollTo(0,0); return; }
  if(el.dataset.vote){ el.disabled=true; try{ await store.vote(el.dataset.id, el.dataset.vote); }catch(err){ failed(err); } el.disabled=false; return; }
  if(el.dataset.open){ detailId=el.dataset.open; replyTo=null; renderDetail(); if(el.dataset.goshare) $("#d-share")?.scrollIntoView({block:"start"}); return; }
  if(el.id==="d-close"){ closeDetail(); return; }
  if(el.id==="open-login"){ openLogin(); return; }
  if(el.id==="open-account"){ openAccount(); return; }
  if(el.id==="login-fb"){ sb.auth.signInWithOAuth({provider:"facebook", options:{redirectTo:APP_URL}}); return; }
  if(el.id==="sign-out"){ await sb.auth.signOut(); closeDetail(); toast(t("signedOut")); return; }
  if(el.id==="do-install" && installEvt){ installEvt.prompt(); try{ await installEvt.userChoice; }catch(e){} installEvt=null; render(); return; }
  if(el.dataset.reply){ replyTo=el.dataset.reply; renderDetail(); $("#u-text").focus(); return; }
  if(el.id==="cancel-reply"){ replyTo=null; renderDetail(); return; }
  if(el.dataset.flag){ if(el.getAttribute("aria-pressed")==="true") return; try{ await store.flag(el.dataset.flag); toast(t("flagDone")); }catch(err){ failed(err); } return; }
  if(el.dataset.delmsg){ try{ await store.delMsg(el.dataset.delmsg); }catch(err){ failed(err); } return; }
  if(el.dataset.rmphoto){ draft.photos.splice(+el.dataset.rmphoto,1); showDraftPhoto(); return; }
  if(el.dataset.copy){ const inp=$("#share-link"); const kind=el.dataset.copy;
    try{ await navigator.clipboard.writeText(inp.value); toast(kind==="ms"?t("msgCopied"):t("copied")); }
    catch(err){ inp.focus(); inp.select(); toast(t("copyFail")); } return; }
  if(el.dataset.setstatus && detailId){ const r=reports.find(x=>x.id===detailId); if(r && r.status!==el.dataset.setstatus){ try{ await store.setStatus(detailId, el.dataset.setstatus); toast(t("statusSet")+" "+t("st_"+el.dataset.setstatus)); }catch(err){ failed(err); } } return; }
  if(el.dataset.cat){ draft.cat=el.dataset.cat; document.querySelectorAll("#cats button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.cat===draft.cat)); return; }
});
document.addEventListener("keydown", e=>{
  if(e.key==="Escape" && detailId) closeDetail();
  const g = e.target.closest && e.target.closest("g[data-area]");
  if(g && (e.key==="Enter"||e.key===" ")){ e.preventDefault(); g.dispatchEvent(new MouseEvent("click",{bubbles:true})); }
});
$("#sheet").addEventListener("click", e=>{ if(e.target.id==="sheet") closeDetail(); });
document.addEventListener("change", async e=>{
  if(e.target.id==="area-filter"){ areaFilter=e.target.value; render(); }
  if(e.target.id==="sort-by"){ sortBy=e.target.value; render(); }
  if(e.target.id==="f-photo"){ const files=[...e.target.files]; e.target.value=""; const room=MAX_PHOTOS-draft.photos.length;
    if(files.length>room) toast(t("photoMax"));
    for(const f of files.slice(0,room)){ try{ draft.photos.push(await shrink(f)); }catch(err){} }
    showDraftPhoto(); }
});
document.addEventListener("submit", async e=>{
  e.preventDefault();
  if(e.target.id==="login-form"){ const email=$("#login-email").value.trim(), msg=$("#login-msg");
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ msg.textContent=t("badEmail"); msg.hidden=false; return; }
    const {error} = await sb.auth.signInWithOtp({email, options:{emailRedirectTo:APP_URL}});
    msg.textContent = error ? (error.message || t("saveFail")) : t("linkSent"); msg.hidden=false; return; }
  if(e.target.id==="name-form"){ const n=$("#my-name").value.trim().slice(0,60); if(!n) return;
    const {error} = await sb.from("profiles").update({name:n}).eq("id", me); if(error){ failed(error); return; }
    names[me]=n; closeDetail(); toast(t("nameSaved")); load(); return; }
  if(e.target.id==="u-form"){ const inp=$("#u-text"); const txt=inp.value.trim(); if(!txt||!detailId) return; const rt=replyTo; replyTo=null; inp.value=""; try{ await store.addUpdate(detailId, txt, rt); renderDetail(); }catch(err){ failed(err); replyTo=rt; renderDetail(); $("#u-text").value=txt; } return; }
  if(e.target.id!=="report-form") return;
  const title=$("#f-title").value.trim(), desc=$("#f-desc").value.trim(), area=$("#f-area").value, place=$("#f-place").value.trim();
  const err=$("#f-err"); const msg = !draft.cat ? t("needCat") : !title ? t("needTitle") : !area ? t("needArea") : "";
  if(msg){ err.textContent=msg; err.hidden=false; return; } err.hidden=true;
  const btn=$("#f-submit"); btn.disabled=true; btn.textContent=t("posting");
  try{ await store.addReport({category:draft.cat,title,desc,area,place,lang}, draft.photos);
    draft={cat:null,photos:[]}; areaFilter="all"; statusFilter="open"; sortBy="new"; tab="feed"; $("#view").innerHTML=""; render(); window.scrollTo(0,0); toast(t("posted"));
  }catch(ex){ failed(ex); btn.disabled=false; btn.textContent=t("submit"); }
});
function shrink(file){ return new Promise((res,rej)=>{ const fr=new FileReader(); fr.onerror=rej; fr.onload=()=>{ const img=new Image(); img.onerror=rej; img.onload=()=>{
  let w=img.width,h=img.height; const max=900; if(w>max||h>max){ const k=max/Math.max(w,h); w=Math.round(w*k); h=Math.round(h*k); }
  const cv=document.createElement("canvas"); cv.width=w; cv.height=h; cv.getContext("2d").drawImage(img,0,0,w,h);
  let q=.72, out=cv.toDataURL("image/jpeg",q); while(out.length>180000 && q>.3){ q-=.12; out=cv.toDataURL("image/jpeg",q); } res(out); }; img.src=fr.result; }; fr.readAsDataURL(file); }); }

setInterval(()=>{ if(tab==="feed" && !document.querySelector("#view input:focus")) render(); }, 60000);
window.addEventListener("hashchange", routeHash);
window.addEventListener("beforeinstallprompt", e=>{ e.preventDefault(); installEvt=e; render(); });
if("serviceWorker" in navigator && location.protocol==="https:") navigator.serviceWorker.register("sw.js").catch(()=>{});
render(); routeHash(); connect();
})();
