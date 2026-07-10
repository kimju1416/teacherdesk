
(function(){
  window.customPrompt = function(msg, onOk) {
    var ov = document.createElement('div');
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:999999;display:flex;align-items:center;justify-content:center;';
    var box = document.createElement('div');
    box.style.cssText = 'background:#1a1d2a;color:#f1f5f9;border:1px solid rgba(139,92,246,0.35);border-radius:16px;padding:28px 32px;max-width:380px;width:90%;text-align:center;font-family:"Noto Sans KR",sans-serif;box-shadow:0 20px 60px rgba(0,0,0,0.6);';
    box.innerHTML = '<div style="font-size:14px;line-height:1.7;white-space:pre-line;margin-bottom:16px;">'+msg.replace(/</g,'&lt;')+'</div><input type="text" class="cp-inp" style="width:100%;background:rgba(255,255,255,0.07);border:1px solid rgba(139,92,246,0.4);border-radius:8px;padding:10px 14px;color:#f1f5f9;font-size:14px;font-family:Noto Sans KR,sans-serif;outline:none;margin-bottom:18px;" /><div style="display:flex;gap:10px;justify-content:center;"><button class="cp-cancel" style="padding:10px 24px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);border-radius:8px;color:#94a3b8;font-size:14px;font-weight:600;cursor:pointer;font-family:Noto Sans KR,sans-serif;">취소</button><button class="cp-ok" style="padding:10px 24px;background:linear-gradient(135deg,#8b5cf6,#6d28d9);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;font-family:Noto Sans KR,sans-serif;">확인</button></div>';
    function doOk(){ var val=box.querySelector('.cp-inp').value; document.body.removeChild(ov); if(onOk) onOk(val); }
    function doCancel(){ document.body.removeChild(ov); if(onOk) onOk(null); }
    box.querySelector('.cp-ok').onclick = doOk;
    box.querySelector('.cp-cancel').onclick = doCancel;
    box.querySelector('.cp-inp').addEventListener('keydown', function(e){ if(e.key==='Enter') doOk(); if(e.key==='Escape') doCancel(); });
    ov.onclick = function(e){ if(e.target===ov) doCancel(); };
    ov.appendChild(box);
    document.body.appendChild(ov);
    setTimeout(function(){ box.querySelector('.cp-inp').focus(); }, 50);
  };
  window.customConfirm = function(msg, onOk, onCancel) {
    var ov = document.createElement('div');
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:999999;display:flex;align-items:center;justify-content:center;';
    var box = document.createElement('div');
    box.style.cssText = 'background:#1a1d2a;color:#f1f5f9;border:1px solid rgba(139,92,246,0.35);border-radius:16px;padding:28px 32px;max-width:360px;width:90%;text-align:center;font-family:"Noto Sans KR",sans-serif;box-shadow:0 20px 60px rgba(0,0,0,0.6);';
    box.innerHTML = '<div style="font-size:14px;line-height:1.7;white-space:pre-line;margin-bottom:20px;">'+msg.replace(/</g,'&lt;')+'</div><div style="display:flex;gap:10px;justify-content:center;"><button class="cc-cancel" style="padding:10px 24px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);border-radius:8px;color:#94a3b8;font-size:14px;font-weight:600;cursor:pointer;font-family:Noto Sans KR,sans-serif;">취소</button><button class="cc-ok" style="padding:10px 24px;background:linear-gradient(135deg,#8b5cf6,#6d28d9);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;font-family:Noto Sans KR,sans-serif;">확인</button></div>';
    box.querySelector('.cc-ok').onclick = function(){ document.body.removeChild(ov); if(onOk) onOk(); };
    box.querySelector('.cc-cancel').onclick = function(){ document.body.removeChild(ov); if(onCancel) onCancel(); };
    ov.onclick = function(e){ if(e.target===ov){ document.body.removeChild(ov); if(onCancel) onCancel(); }};
    ov.appendChild(box);
    document.body.appendChild(ov);
  };
})();
var TEMPLATE_VERSION = "1.7.0"; // 🔁 생성기의 dash-data(templateVersion)와 자동 동기화
var DID = "1783684986666"; function getDKey(k){return k+"_"+DID;}
function lsGet(k){try{return localStorage.getItem(k);}catch(e){return null;}} function lsSet(k,v){try{localStorage.setItem(k,v);}catch(e){}} function lsDel(k){try{localStorage.removeItem(k);}catch(e){}} function lsGetJ(k,def){try{var v=localStorage.getItem(k);return v?JSON.parse(v):def;}catch(e){return def;}} function g(id){return document.getElementById(id);} function pad(n){return String(n).padStart(2,"0");} function tToM(t){if(!t)return 0;var p=t.split(":");return parseInt(p[0])*60+parseInt(p[1]);}

var curYear = new Date().getFullYear();
var TIMETABLE = /*TT*/{"월":["체육","수학","","","","",""],"화":[],"수":[],"목":[],"금":[]};
var DEFAULT_EVENTS = /*EV*/[{"date":"2026-07-20","title":"여름방학식"}];
var DEFAULT_PERIODS=[{label:"1교시",start:"08:50",end:"09:35"},{label:"2교시",start:"09:45",end:"10:30"},{label:"3교시",start:"10:40",end:"11:25"},{label:"4교시",start:"11:35",end:"12:20"},{label:"점심",start:"12:20",end:"13:20"},{label:"5교시",start:"13:20",end:"14:05"},{label:"6교시",start:"14:15",end:"15:00"},{label:"7교시",start:"15:10",end:"15:55"}];
var SUBJ_DEF={국어:"#FF8FAB",수학:"#7EC8E3",영어:"#FFB347",과학:"#90EE90",체육:"#FF7F7F",음악:"#DDA0DD",미술:"#FFA07A",사회:"#87CEEB",도덕:"#98FB98",창체:"#F0E68C"};
var WD=["월","화","수","목","금"],DAYS=["일","월","화","수","목","금","토"];
var FONTS=[{name:"Gmarket Sans",label:"지마켓산스",preview:"바탕화면"},{name:"Noto Sans KR",label:"노토산스",preview:"바탕화면"},{name:"Nanum Gothic",label:"나눔고딕",preview:"바탕화면"},{name:"Do Hyeon",label:"도현체",preview:"바탕화면"},{name:"Black Han Sans",label:"블랙한산스",preview:"바탕화면"},{name:"Nanum Myeongjo",label:"나눔명조",preview:"바탕화면"},{name:"Jua",label:"주아체",preview:"바탕화면"},{name:"Space Mono",label:"Space Mono",preview:"12:34"}];
var THEME_FONTS={1:{head:"Gmarket Sans",body:"Noto Sans KR"},2:{head:"Do Hyeon",body:"Noto Sans KR"},3:{head:"Nanum Gothic",body:"Nanum Gothic"},4:{head:"Black Han Sans",body:"Noto Sans KR"},5:{head:"Nanum Myeongjo",body:"Nanum Myeongjo"},6:{head:"Jua",body:"Jua"},7:{head:"Do Hyeon",body:"Noto Sans KR"},8:{head:"Space Mono",body:"Noto Sans KR"},9:{head:"Nanum Myeongjo",body:"Nanum Myeongjo"},10:{head:"Gmarket Sans",body:"Noto Sans KR"},11:{head:"Gmarket Sans",body:"Noto Sans KR"},12:{head:"Nanum Myeongjo",body:"Noto Sans KR"}};

var theme=parseInt(lsGet("theme")||"2"), layout=parseInt(lsGet("layout")||"4"), skin=lsGet(getDKey("skin"))||"bento", evRange="week",evOff=0,ttEditDay="월",ttEditing={}, mealOff=0;
var ROSTER_DATA = /*ROSTER*/null, EXT_DATA = /*EXT*/null, tTotal=0, tRun=false, tTarget=0, cfgEvts=[], evPage=1, evLimit=5, cfgDdays=[], ddPage=1, ddLimit=5, tempWLoc=null;

// 🖥️ 화면 꽉 채움: zoom은 가로 기준(w/1920)으로 잡고, 세로는 zoom 환산 실제 높이를 동적 반영
//    → 16:9가 아닌 화면에서도 상하 빈 띠(레터박스) 없이 카드 grid의 1fr 행이 남는 세로를 흡수한다.
function resizeScale(){var app=g('app-container'),zoom=window.innerWidth/1920; app.style.zoom=zoom; app.style.transform="none"; app.style.height=Math.max(600,Math.round(window.innerHeight/zoom))+"px";} window.addEventListener('resize',resizeScale);
// 편집모드·드래그 클램프용 현재 무대 높이(1920 기준 좌표계의 세로값)
function getStageH(){var app=g('app-container'),h=parseInt(app.style.height);return (h&&h>0)?h:1080;}
function applyFonts(themeN,fH,fB){var s=lsGetJ("customFonts",null),d=THEME_FONTS[themeN]||THEME_FONTS[1],h=fH||(s&&s.head)||d.head,b=fB||(s&&s.body)||d.body;document.documentElement.style.setProperty("--fh","'"+h+"'");document.documentElement.style.setProperty("--fb","'"+b+"'");document.body.style.fontFamily="'"+b+"',sans-serif";}

// 📢 스마트 전광판 초고속 실시간 로직 (v9.4)
var lastSignboardText = ""; 
var isFirstSignboardLoad = true; 

// 🎵 맑고 부드러운 알림음 재생 함수
function playDing() {
    try {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        var ctx = new AudioContext();
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine'; 
        osc.frequency.setValueAtTime(880, ctx.currentTime); 
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05); 
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8); 
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.8);
    } catch(e) { console.log("알림음 재생 실패", e); }
}

function getCsvUrl(input) {
    if(!input) return "";
    input = input.trim();
    if(input.includes("output=csv") || input.includes("export?format=csv")) return input;
    if(input.includes("/pubhtml")) return input.replace("/pubhtml", "/pub?output=csv");
    if(input.includes("/d/e/")) {
        var eMatch = input.match(/\/d\/e\/([a-zA-Z0-9-_]+)/);
        if(eMatch) return "https://docs.google.com/spreadsheets/d/e/" + eMatch[1] + "/pub?output=csv";
    }
    // 일반 공유 링크(edit 등)를 실시간 CSV 다운로드 링크(export)로 강제 변환
    var match = input.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if(match) return "https://docs.google.com/spreadsheets/d/" + match[1] + "/export?format=csv";
    // 시트 ID만 달랑 넣었을 경우
    if(/^[a-zA-Z0-9-_]{30,}$/.test(input)) return "https://docs.google.com/spreadsheets/d/" + input + "/export?format=csv";
    return input;
}

function renderSignboard(txt) {
    var wrap = g("signboard-wrap"), inner = g("signboard-text");
    if(!wrap || !inner) return;

    // 🔥 설정에서 알림음을 켰을 때만 소리 재생
    if (txt !== lastSignboardText) {
        var isSoundOn = lsGetJ(getDKey("sb_sound"), true); // 기본값: 켬
        if (!isFirstSignboardLoad && isSoundOn) playDing();
        lastSignboardText = txt;
        isFirstSignboardLoad = false;
    }

    wrap.classList.add("show");
    inner.classList.remove("marquee");
    inner.style.animation = "none";
    inner.textContent = "📢 " + txt;
    void inner.offsetWidth; // Force Reflow
    if(inner.scrollWidth > wrap.clientWidth - 40) {
        inner.classList.add("marquee");
        var dur = Math.max(15, txt.length * 0.15); 
        inner.style.animation = "marquee " + dur + "s linear infinite";
    }
}

function fetchSignboard() {
    var on = lsGetJ(getDKey("sb_on"), false);
    var urlStr = lsGet(getDKey("sb_url")) || "";
    var wrap = g("signboard-wrap");
    if(!on || !urlStr) { if(wrap) wrap.classList.remove("show"); return; }
    var url = getCsvUrl(urlStr);
    if(!url.startsWith("http")) return;
    
    // 🔥 [핵심 수정] 브라우저 캐시 무시! 무조건 최신 데이터를 강제로 가져오는 꼬리표
    var noCacheUrl = url + (url.includes("?") ? "&" : "?") + "nocache=" + new Date().getTime();
    
    fetch(noCacheUrl, { cache: "no-store" }).then(function(r){ return r.text(); }).then(function(txt){
        var lines = txt.split("\n"); if(!lines.length) return;
        var firstLine = lines[0];
        var a1 = "";
        if (firstLine.startsWith('"')) {
            var endQuote = firstLine.indexOf('"', 1);
            a1 = endQuote > -1 ? firstLine.substring(1, endQuote) : firstLine.substring(1);
        } else {
            a1 = firstLine.split(",")[0];
        }
        a1 = a1.trim();
        renderSignboard(a1 || "등록된 공지사항이 없습니다.");
    }).catch(function(e){
        renderSignboard("⚠️ 전광판 연결 오류 (링크가 '보기 권한'으로 공유되었는지 확인하세요)");
    });
}

function tick(){
  var n=new Date(),h=pad(n.getHours()),m=pad(n.getMinutes()),ds=n.getFullYear()+"년 "+(n.getMonth()+1)+"월 "+n.getDate()+"일";
  // ✨ 값이 바뀔 때만 DOM 갱신 — 초마다 같은 텍스트를 다시 써서 생기는 리페인트·깜빡임 제거
  var ct=h+":"+m;
  if(g("clock").textContent!==ct){g("clock").textContent=ct; g("cdate").innerHTML=ds+'<span class="day-badge">'+DAYS[n.getDay()]+'요일</span>';}
  // 🎨 수채 스킨 인사 헤더 날짜 갱신
  var gd=g("skin-greet-date");
  if(gd){var gs=(n.getMonth()+1)+"월 "+n.getDate()+"일 "+DAYS[n.getDay()]+"요일,";if(gd.textContent!==gs)gd.textContent=gs;}
  updateNow(n);
  
  if(tRun && tTarget > 0){
      var remain = Math.ceil((tTarget - Date.now()) / 1000);
      if(remain <= 0) {
          tRun = false; tTotal = 0; tTarget = 0;
          renderTimer();
          g("timer-toggle").textContent="▶";
          g("timer-disp").style.color="var(--ac)";
          setTimeout(function(){g("timer-disp").style.color="var(--tx2)";}, 3000);
      } else {
          tTotal = remain;
          renderTimer();
      }
  }
}
function toggleTimer(){if(tTotal<=0)return; tRun=!tRun; if(tRun){tTarget = Date.now() + tTotal*1000; g("timer-toggle").textContent="⏸";}else{tTarget = 0; g("timer-toggle").textContent="▶";}} function renderTimer(){g("timer-disp").textContent=pad(Math.floor(tTotal/60))+":"+pad(tTotal%60);}

function updateNow(n){
  var dow = n.getDay();
  if(dow === 0 || dow === 6){
    g("now-period").textContent="주말";
    g("now-subj").textContent="오늘은 쉬는 날이에요 🌿";
    g("now-time").textContent="푹 쉬세요!";
    g("now-prog").style.width="0%";
    return;
  }
  var periods=lsGetJ(getDKey("periods"),DEFAULT_PERIODS), tot=n.getHours()*60+n.getMinutes(), day=DAYS[n.getDay()], tt=lsGetJ(getDKey("tt_saved"),TIMETABLE), subj=tt[day]||[], nonLunch=periods.filter(function(p){return p.label!=="점심";}), cur=null;
  for(var i=0;i<periods.length;i++){if(tot>=tToM(periods[i].start)&&tot<tToM(periods[i].end)){cur=periods[i];break;}}
  if(!cur){
    var wS=tToM(lsGet(getDKey("work_start"))||"08:30"), wE=tToM(lsGet(getDKey("work_end"))||"16:30");
    var firstP=periods[0], lastP=periods[periods.length-1];
    var firstStart=firstP?tToM(firstP.start):wS, lastEnd=lastP?tToM(lastP.end):wE;
    if(tot<wS){
      g("now-period").textContent="출근 전";g("now-subj").textContent="오늘도 화이팅! 💪";
      g("now-time").textContent="출근: "+(lsGet(getDKey("work_start"))||"08:30");
    }else if(tot>=wS&&tot<firstStart){
      var nextLabel=firstP?firstP.label:"1교시",nextTime=firstP?firstP.start:"--:--";
      g("now-period").textContent="업무 준비";g("now-subj").textContent="차 한잔의 여유 ☕";
      g("now-time").textContent=nextLabel+": "+nextTime;
    }else{
      var isBreak=false,nextP=null;for(var j=0;j<periods.length;j++){if(tot<tToM(periods[j].start)){isBreak=true;nextP=periods[j];break;}}
      if(isBreak&&nextP){
        g("now-period").textContent="쉬는 시간";g("now-subj").textContent="휴식 중 🎵";g("now-time").textContent="다음: "+nextP.label;
      }else if(tot>=lastEnd&&tot<wE){
        g("now-period").textContent="업무 마무리";g("now-subj").textContent="퇴근 준비 중 📝";
        g("now-time").textContent="퇴근: "+(lsGet(getDKey("work_end"))||"16:30");
      }else{
        g("now-period").textContent="일과 종료";g("now-subj").textContent="퇴근하세요! 🏃‍♂️";g("now-time").textContent="";
      }
    }
    g("now-prog").style.width="0%";return;
  }
  var pct=Math.round((tot-tToM(cur.start))/(tToM(cur.end)-tToM(cur.start))*100);
  if(cur.label==="점심"){g("now-period").textContent="점심";g("now-subj").textContent="점심시간 🍚";g("now-time").textContent=cur.start+" ~ "+cur.end;}else{var nlIdx=nonLunch.indexOf(cur),nm=(subj[nlIdx]&&subj[nlIdx]!=="-"?subj[nlIdx]:"공강");g("now-period").textContent=cur.label;g("now-subj").textContent=nm==="공강"?"공강 시간 ☕":nm+" 수업중";g("now-time").textContent=cur.start+" ~ "+cur.end;} g("now-prog").style.width=pct+"%";
}

function renderTT(){
  var grid=g("tt-grid");if(!grid)return; var tt=lsGetJ(getDKey("tt_saved"),TIMETABLE), periods=lsGetJ(getDKey("periods"),DEFAULT_PERIODS), colors=lsGetJ(getDKey("subj_colors"),SUBJ_DEF), nonLunch=periods.filter(function(p){return p.label!=="점심";}), today=DAYS[new Date().getDay()], tot=new Date().getHours()*60+new Date().getMinutes();
  grid.style.gridTemplateColumns="65px repeat(5,1fr)"; var html="<div class='tt-hd'></div>";
  WD.forEach(function(d){var isT=d===today;html+="<div class='tt-hd' style='color:"+(isT?"var(--ac)":"")+"'>"+d+(isT?"<br><span style='font-size:10px'>오늘</span>":"")+"</div>";});
  nonLunch.forEach(function(p,i){html+="<div class='tt-period-lbl'>"+p.label+"<span>"+p.start+"</span></div>";WD.forEach(function(d){var subj=(tt[d]&&tt[d][i])||"-",isT=d===today,isNow=isT&&tot>=tToM(p.start)&&tot<tToM(p.end),cls="tt-cell"+(isT?" today":"")+(isNow?" now-cell":""),col=colors[subj]||"",cellStyle=(col&&!isT&&!isNow)?" style='background-color:"+col+"4D;border-color:"+col+";color:var(--tx);font-weight:700;'":"";html+="<div class='"+cls+"'"+cellStyle+">"+(subj==='-'?'':subj)+"</div>";});}); grid.innerHTML=html;
}

function fetchWeather(){
  var loc=lsGetJ("weatherLoc",null); if(loc&&loc.lat){g("wloc").textContent=loc.name;doWeather(loc.lat,loc.lon);return;}
  fetchByIP();
}
function fetchByIP(){
  fetch("https://ipapi.co/json/").then(function(r){return r.json();}).then(function(d){if(d.error)throw new Error("API Error");var lat=d.latitude,lon=d.longitude,city=d.city||d.region||"";fetch("https://nominatim.openstreetmap.org/search?q="+encodeURIComponent(city)+"&countrycodes=kr&format=json&limit=1&accept-language=ko",{headers:{"User-Agent":"TeacherDashboard/1.0"}}).then(function(r){return r.json();}).then(function(geo){var name=geo&&geo.length>0?geo[0].display_name.split(",")[0].trim():city;g("wloc").textContent=name+" (자동)";doWeather(lat,lon);}).catch(function(){g("wloc").textContent=city+" (자동)";doWeather(lat,lon);});}).catch(function(e){fetch("https://get.geojs.io/v1/ip/geo.json").then(function(r){return r.json();}).then(function(d){g("wloc").textContent=(d.city||"위치 확인불가")+" (자동)";doWeather(d.latitude,d.longitude);}).catch(function(){g("wloc").textContent="서울 (기본)";doWeather(37.5665,126.9780);});});
}
function doWeather(lat,lon){
  fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lon+"&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSeoul&forecast_days=1").then(function(r){return r.json();}).then(function(d){var t=Math.round(d.current_weather.temperature),max=Math.round(d.daily.temperature_2m_max[0]),min=Math.round(d.daily.temperature_2m_min[0]),wi=wCode(d.current_weather.weathercode);g("wemoji").textContent=wi.e;g("wtemp").textContent=t+"°";g("wdesc").textContent=wi.d+" 최저 "+min+"° / 최고 "+max+"°";}).catch(function(){});
  fetch("https://air-quality-api.open-meteo.com/v1/air-quality?latitude="+lat+"&longitude="+lon+"&current=pm10,pm2_5&timezone=Asia%2FSeoul").then(function(r){return r.json();}).then(function(d){var p10=Math.round((d.current&&d.current.pm10)||0),p25=Math.round((d.current&&d.current.pm2_5)||0),a10=airGrade(p10,"pm10"),a25=airGrade(p25,"pm25");g("wair").innerHTML="<div class='air-chip "+a10.cls+"'>미세 "+p10+" <b>"+a10.lbl+"</b></div><div class='air-chip "+a25.cls+"'>초미세 "+p25+" <b>"+a25.lbl+"</b></div>";}).catch(function(){g("wair").innerHTML="<div class='air-chip' style='font-size:11px;background:transparent;border:none;'>미세먼지 일시 지연</div>";});
}
function wCode(c){if(c===0)return{e:"☀️",d:"맑음"};if(c<=3)return{e:"⛅",d:"구름조금"};if(c<=48)return{e:"🌫️",d:"안개"};if(c<=67)return{e:"🌧️",d:"비"};if(c<=77)return{e:"❄️",d:"눈"};if(c<=82)return{e:"🌦️",d:"소나기"};return{e:"⛈️",d:"뇌우"};}
function airGrade(v,t){var a=t==="pm10"?[30,80,150]:[15,35,75];if(v<=a[0])return{cls:"air-good",lbl:"좋음"};if(v<=a[1])return{cls:"air-normal",lbl:"보통"};if(v<=a[2])return{cls:"air-bad",lbl:"나쁨"};return{cls:"air-worse",lbl:"매우나쁨"};}

function fetchMeal(){
  var off=(typeof window!=='undefined'&&window.SCHOOL_CONFIG&&window.SCHOOL_CONFIG.off)?window.SCHOOL_CONFIG.off:lsGet("officeCode"), sch=(typeof window!=='undefined'&&window.SCHOOL_CONFIG&&window.SCHOOL_CONFIG.sch)?window.SCHOOL_CONFIG.sch:lsGet("schoolCode"), key=getNeisKey(); // 🔑 API 키 헬퍼로 일원화
  if(!key){g("meal-list").innerHTML="<li class='meal-item'><span class='meal-dot'></span>설정(⚙️) → 🔑 API 키 탭에서 NEIS 키를 입력하세요.</li>";g("meal-kcal").textContent="";return;}
  if(!off||!sch){g("meal-list").innerHTML="<li class='meal-item'><span class='meal-dot'></span>학교를 설정하세요.</li>";g("meal-kcal").textContent="";return;}
  var n=new Date();n.setDate(n.getDate()+mealOff); var ymd=n.getFullYear()+pad(n.getMonth()+1)+pad(n.getDate()),dow=n.getDay(),lbl="오늘";if(mealOff===1)lbl="내일";else if(mealOff===-1)lbl="어제";else if(mealOff!==0)lbl=(n.getMonth()+1)+"/"+n.getDate(); g("meal-date-lbl").textContent=lbl;
  if(dow===0||dow===6){g("meal-list").innerHTML="<li class='meal-item'><span class='meal-dot'></span>해당일은 주말입니다 🏠</li>";g("meal-kcal").textContent="";return;}
  var types=getMealTypes();
  if(!types.length){g("meal-list").innerHTML="<li class='meal-item'><span class='meal-dot'></span>설정(⚙️ 날씨·급식 탭)에서 표시할 끼니를 선택하세요.</li>";g("meal-kcal").textContent="";return;}
  fetch("https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&ATPT_OFCDC_SC_CODE="+off+"&SD_SCHUL_CODE="+sch+"&MLSV_FROM_YMD="+ymd+"&MLSV_TO_YMD="+ymd+"&KEY="+key).then(function(r){return r.json();}).then(function(d){
    var rows=d&&d.mealServiceDietInfo&&d.mealServiceDietInfo[1]&&d.mealServiceDietInfo[1].row;
    if(!rows||!rows.length){g("meal-list").innerHTML="<li class='meal-item'><span class='meal-dot'></span>급식 정보 없음</li>";g("meal-kcal").textContent="";return;}
    // 끼니 코드(1=조식, 2=중식, 3=석식)별로 그룹핑 — 한 번의 요청으로 모두 처리
    var byCode={}; for(var i=0;i<rows.length;i++){byCode[String(rows[i].MMEAL_SC_CODE)]=rows[i];}
    var MEAL_NM={"1":"🌅 아침","2":"🍱 점심","3":"🌙 저녁"}, MEAL_TXT={"1":"아침","2":"점심","3":"저녁"};
    var multi=types.length>1, html="", kcals=[], shown=0;
    types.forEach(function(c){
      var m=byCode[c];
      if(multi)html+="<li class='meal-sec'>"+MEAL_NM[c]+"</li>";
      if(!m){ if(multi)html+="<li class='meal-compact'>정보 없음</li>"; return; }
      shown++;
      var items=m.DDISH_NM.split("<br/>").map(function(s){return s.replace(/\d+\.\s*/g,"").replace(/\([\d.,]*\)/g,"").replace(/\*/g,"").trim();}).filter(function(s){return s.length>0;});
      if(multi){ html+="<li class='meal-compact'>"+items.join(" · ")+"</li>"; } // 여러 끼니면 컴팩트하게 한 줄로
      else { html+=items.map(function(it){return "<li class='meal-item'><span class='meal-dot'></span>"+it+"</li>";}).join(""); }
      if(m.CAL_INFO)kcals.push((multi?MEAL_TXT[c]+" ":"")+m.CAL_INFO);
    });
    if(!shown&&!multi){html="<li class='meal-item'><span class='meal-dot'></span>해당 끼니 급식 정보 없음</li>";}
    g("meal-list").innerHTML=html;
    g("meal-kcal").textContent=kcals.length?("열량: "+kcals.join(" / ")):"";
  }).catch(function(){g("meal-list").innerHTML="<li class='meal-item'>정보를 가져올 수 없습니다.</li>";g("meal-kcal").textContent="";});
}
// 🍱 표시할 끼니 코드 목록 (localStorage, 기본값: 점심만)
function getMealTypes(){var t=lsGetJ(getDKey("meal_types"),["2"]);if(!t||Object.prototype.toString.call(t)!=="[object Array]")t=["2"];return t;}

function getTodoBadge(deadline){
  if(!deadline) return "";
  var p=deadline.split("-"); if(p.length!==3) return "";
  var d=new Date(parseInt(p[0]),parseInt(p[1])-1,parseInt(p[2])); d.setHours(0,0,0,0);
  var n=new Date(); n.setHours(0,0,0,0);
  var diff=Math.round((d-n)/864e5);
  var label=parseInt(p[1])+"/"+parseInt(p[2]);
  if(diff<0) return "<span class='todo-badge overdue'>"+label+"</span>";
  if(diff===0) return "<span class='todo-badge fire'>"+label+"</span>";
  return "<span class='todo-badge dday'>"+label+"</span>";
}
function todoSortKey(t){
  if(!t.deadline) return t.done?99999:9999;
  var p=t.deadline.split("-"); if(p.length!==3) return t.done?99999:9999;
  var d=new Date(parseInt(p[0]),parseInt(p[1])-1,parseInt(p[2])); d.setHours(0,0,0,0);
  var n=new Date(); n.setHours(0,0,0,0);
  var diff=Math.round((d-n)/864e5);
  if(t.done) return 50000+diff;
  if(diff<0) return 1000+Math.abs(diff);
  return diff;
}
function renderTodos(){ 
  var todos=lsGetJ(getDKey("todos"),[]), list=g("todo-list"), clist=g("c-todo-list");
  if(list) list.innerHTML=""; if(clist) clist.innerHTML="";
  var sorted=todos.map(function(t,i){return {t:t,i:i};});
  sorted.sort(function(a,b){return todoSortKey(a.t)-todoSortKey(b.t);});
  sorted.forEach(function(obj){
    var t=obj.t, i=obj.i;
    var badge=t.done?"":getTodoBadge(t.deadline);
    var li=document.createElement("li"); li.className="todo-item"+(t.done?" done":"");
    if(badge){li.innerHTML=badge;} 
    var span=document.createElement("span"); span.className="todo-txt"; span.textContent=t.text;
    li.appendChild(span);
    li.addEventListener("click",function(){ t.done=!t.done; lsSet(getDKey("todos"),JSON.stringify(todos)); renderTodos(); });
    if(list) list.appendChild(li);

    var cli=document.createElement("li"); cli.className="todo-item"+(t.done?" done":"");
    cli.style.justifyContent="space-between";
    var cBadge=t.done?"":getTodoBadge(t.deadline);
    var dlStr=t.deadline?" <span style='font-size:10px;color:var(--tx3);margin-left:4px;'>("+t.deadline+")</span>":"";
    cli.innerHTML=cBadge+"<span class='todo-txt' style='flex:1'></span>"+dlStr+"<button class='del-btn' style='width:24px;height:24px;font-size:12px;'>✕</button>";
    cli.querySelector(".todo-txt").textContent=t.text;
    
    cli.querySelector(".todo-txt").addEventListener("click",function(){ t.done=!t.done; lsSet(getDKey("todos"),JSON.stringify(todos)); renderTodos(); });
    cli.querySelector(".del-btn").addEventListener("click",function(e){ e.stopPropagation(); todos.splice(i,1); lsSet(getDKey("todos"),JSON.stringify(todos)); renderTodos(); });
    if(clist) clist.appendChild(cli);
  }); 
}
function addTodoCfg(){
  var v = g("c-todo-inp").value.trim(), dl = g("c-todo-date")?g("c-todo-date").value.trim():"";
  if(v) { var t=lsGetJ(getDKey("todos"),[]); var item={text:v,done:false}; if(dl)item.deadline=dl; t.push(item); lsSet(getDKey("todos"),JSON.stringify(t)); g("c-todo-inp").value=""; if(g("c-todo-date"))g("c-todo-date").value=""; renderTodos(); }
}

/* 🤖 AI 메신저 분석 비서 로직 */
var aiResultData=[];
function openAI(){g("ai-page").classList.add("open");g("ai-msg-inp").value="";g("ai-results").style.display="none";g("ai-doc-results").style.display="none";g("ai-status").style.display="none";aiResultData=[];setTimeout(function(){g("ai-msg-inp").focus();},100);}
function closeAI(){g("ai-page").classList.remove("open");resizeScale();}
// 🔑 API 키 일원화 헬퍼 — 설정창(🔑 API 키 탭)의 localStorage 값을 최우선, 없으면 생성 시 주입된 SCHOOL_CONFIG, 마지막으로 레거시 키
function getGemKey(){return lsGet(getDKey("api_gem"))||lsGet(getDKey("gem_key"))||((typeof window!=="undefined"&&window.SCHOOL_CONFIG&&window.SCHOOL_CONFIG.gem)?window.SCHOOL_CONFIG.gem:"")||"";}
function getNeisKey(){return lsGet(getDKey("api_neis"))||((typeof window!=="undefined"&&window.SCHOOL_CONFIG&&window.SCHOOL_CONFIG.neis)?window.SCHOOL_CONFIG.neis:"")||lsGet("neisKey")||"";}

function doAIAnalyze(){
  var msg=g("ai-msg-inp").value.trim();
  if(!msg){g("ai-status").style.display="flex";g("ai-status").classList.remove("ok");g("ai-status").classList.add("err");g("ai-status-msg").textContent="메신저 텍스트를 붙여넣기 해주세요.";return;}
  var gemKey=getGemKey();
  if(!gemKey){alert("Gemini API 키가 없습니다.\n설정(⚙️) → 🔑 API 키 탭에서 입력하거나,\n지금 바로 입력할 수도 있어요.");promptGemKey();return;}

  var n=new Date();
  var todayStr=n.getFullYear()+"-"+pad(n.getMonth()+1)+"-"+pad(n.getDate());
  var dayNames=["일","월","화","수","목","금","토"];
  var todayDay=dayNames[n.getDay()]+"요일";
  
  var prompt="너는 학교 교무실 메신저 공지사항을 분석하는 비서야.\n아래 메신저 텍스트에서 처리해야 할 업무와 마감일을 추출해줘.\n\n오늘 날짜: "+todayStr+" ("+todayDay+")\n\n규칙:\n1. \"내일\" → 오늘+1일, \"모레\" → 오늘+2일\n2. \"이번주 금요일\" → 이번주 해당 요일 날짜 계산\n3. \"다음주 월요일\" → 다음주 해당 요일 날짜 계산\n4. \"3/28\", \"3월 28일\" → 올해 "+n.getFullYear()+"-03-28 형식\n5. 마감일을 특정할 수 없으면 deadline을 null로\n6. 업무가 아닌 인사말, 이모지, 감사 표현 등은 무시\n7. 하나의 메시지에 여러 업무가 있으면 각각 분리\n\n순수 JSON 배열로만 응답해 (설명 없이 JSON만):\n[{\"text\":\"업무 내용\",\"deadline\":\"YYYY-MM-DD 또는 null\"}]\n\n메신저 텍스트:\n"+msg;
  
  g("ai-status").style.display="flex";g("ai-status").classList.remove("ok","err");g("ai-status-msg").innerHTML="AI가 메신저를 분석 중입니다<span class='ld-dots'><span></span><span></span><span></span></span>";g("ai-results").style.display="none";g("ai-doc-results").style.display="none";
  
  fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="+gemKey,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:prompt}]}]})})
  .then(function(r){return r.ok?r.json():r.json().then(function(e){throw new Error(e.error&&e.error.message||"API 오류");});})
  .then(function(d){
    var text=d.candidates[0].content.parts[0].text;
    var bt=String.fromCharCode(96);var codeBlockRe=new RegExp(bt+"{3}(?:json)?\s*([\s\S]*?)\s*"+bt+"{3}","i");var m=text.match(codeBlockRe);var jsonStr=m?m[1]:text;
    var sIdx=jsonStr.indexOf("["), eIdx=jsonStr.lastIndexOf("]");
    if(sIdx!==-1&&eIdx!==-1)jsonStr=jsonStr.substring(sIdx,eIdx+1);
    var parsed=JSON.parse(jsonStr);
    if(!Array.isArray(parsed)||parsed.length===0){g("ai-status").classList.add("err");g("ai-status-msg").textContent="❌ 추출된 업무가 없습니다. 텍스트를 확인해주세요.";return;}
    aiResultData=parsed;
    g("ai-status").classList.add("ok");g("ai-status-msg").textContent="✅ "+parsed.length+"개 업무 추출 완료!";
    renderAIResults();
  }).catch(function(e){g("ai-status").classList.add("err");var msg=e.message||"";if(msg.indexOf("quota")>-1||msg.indexOf("Quota")>-1||msg.indexOf("rate")>-1||msg.indexOf("429")>-1){g("ai-status-msg").textContent="⏳ API 요청 한도 초과! 1분 후 다시 시도해주세요. (무료 티어 제한)";}else if(msg.indexOf("API key")>-1||msg.indexOf("API_KEY")>-1){g("ai-status-msg").textContent="🔑 API 키가 유효하지 않습니다. 키를 다시 확인해주세요.";}else{g("ai-status-msg").textContent="❌ 분석 실패: "+msg;}});
}

function promptGemKey(){
  var key=prompt("Gemini API 키를 입력하세요:\n(aistudio.google.com에서 무료 발급)");
  if(key&&key.trim()){lsSet(getDKey("gem_key"),key.trim());doAIAnalyze();}
}

function renderAIResults(){
  var list=g("ai-result-list"); list.innerHTML="";
  g("ai-results").style.display="block";
  if(g("ai-check-all"))g("ai-check-all").checked=true;
  aiResultData.forEach(function(item,i){
    var card=document.createElement("div"); card.className="ai-result-card";
    var dlVal=item.deadline||"";
    var dateHtml=dlVal?"<div class='ai-r-date-wrap'><span class='ai-r-date-lbl'>📅 마감:</span><input type='text' class='ai-r-date' data-idx='"+i+"' value='"+dlVal+"'></div>":"<div class='ai-r-date-wrap'><span class='ai-r-no-date'>📅 마감일 미지정</span><input type='text' class='ai-r-date' data-idx='"+i+"' value='' placeholder='YYYY-MM-DD' style='width:110px;'></div>";
    card.innerHTML="<input type='checkbox' checked data-idx='"+i+"'><div class='ai-r-body'><div class='ai-r-text'></div>"+dateHtml+"</div>";
    card.querySelector(".ai-r-text").textContent=item.text;
    list.appendChild(card);
  });
}

function registerAITodos(){
  var todos=lsGetJ(getDKey("todos"),[]);
  var cards=document.querySelectorAll("#ai-result-list .ai-result-card");
  var count=0;
  cards.forEach(function(card){
    var cb=card.querySelector("input[type='checkbox']");
    if(!cb||!cb.checked) return;
    var idx=parseInt(cb.getAttribute("data-idx"));
    var item=aiResultData[idx]; if(!item) return;
    var dateInp=card.querySelector(".ai-r-date");
    var dl=dateInp?dateInp.value.trim():"";
    var newTodo={text:item.text,done:false};
    if(dl) newTodo.deadline=dl;
    todos.push(newTodo);
    count++;
  });
  lsSet(getDKey("todos"),JSON.stringify(todos));
  renderTodos();
  closeAI();
  if(count>0){
    var btn=g("ai-btn"); if(btn){btn.textContent="✅";setTimeout(function(){btn.textContent="🤖";},1500);}
  }
}

/* 📝 공문서 수정 AI 로직 */
function doAIDoc(){
  var msg=g("ai-msg-inp").value.trim();
  if(!msg){g("ai-status").style.display="flex";g("ai-status").classList.remove("ok");g("ai-status").classList.add("err");g("ai-status-msg").textContent="공문서 내용을 붙여넣기 해주세요.";return;}
  var gemKey=getGemKey();
  if(!gemKey){alert("Gemini API 키가 없습니다.\n설정(⚙️) → 생성기에서 입력하거나,\nAI 비서 최초 사용 시 키를 입력해주세요.");promptGemKey();return;}

  var docPrompt="너는 대한민국 공문서 작성 전문가야. 아래 '공문서 작성 규칙'을 철저히 지켜서 사용자가 입력한 공문서 내용을 수정해줘.\n\n"+
  "【공문서 작성 핵심 규칙】\n"+
  "■ 항목 기호 체계: 1. → 가. → 1) → 가) → (1) → (가) → ① → ㉮\n"+
  "■ 첫째 항목 기호는 왼쪽 기본선에서 시작. 둘째 항목부터 바로 위 항목에서 오른쪽으로 2타씩 옮겨 시작\n"+
  "■ 항목 기호와 내용 사이에 1타(한 칸) 띄움\n"+
  "■ 항목이 하나만 있으면 항목 기호를 부여하지 않음\n"+
  "■ 항목이 두 줄 이상이면 둘째 줄부터 항목 내용의 첫 글자에 맞추어 정렬\n"+
  "■ 1.번과 2.번 사이를 띄우지 않고 바로 이어서 작성 (한 줄 띄우기 금지)\n"+
  "■ 날짜 표기: 2024년 7월 10일 → 2024. 7. 10.(수) / 월,일 표기 시 '0' 생략\n"+
  "■ 시간 표기: 24시간제, 시:분 형식 (예: 15:20)\n"+
  "■ 금액 표기: 아라비아 숫자 + 괄호 한글 병기. 예) 금113,560원(금일십일만삼천오백육십원)\n"+
  "■ '천 원' 단위 → '만 원' 단위로 환산 (예: 21,345천 원 → 2,134만 5천 원)\n"+
  "■ 기간/범위 물결표(~) 원칙, 붙임표(-) 허용. 앞뒤말에 붙여 씀\n"+
  "■ 관련 근거: 관련: 총무과-1980(2023. 2. 1.)호에 따라\n"+
  "■ 본문 끝 표시: 마지막 글자에서 한 글자(2타) 띄우고 '끝' 표시\n"+
  "■ 본문이 표로 끝나면 표 아래 왼쪽 기본선에서 한 글자(2타) 띄우고 '끝'\n"+
  "■ 붙임: 본문 다음에 '붙임  계획서 1부.  끝.' 형식. 붙임 뒤에 쌍점(:) 안 찍음\n"+
  "■ 첨부물 두 가지 이상이면 항목 구분 (붙임  1. ○○계획서 1부. / 2. ○○서류 1부.  끝.)\n"+
  "■ 외국 문자는 괄호 안에 병기: 업무 협정(MOU), 정보 기술(IT)\n"+
  "■ 외래어를 쉬운 우리말로: 매뉴얼→지침서, 홈페이지→누리집, 리플릿→홍보지\n"+
  "■ 6하 원칙: 언제(일시), 어디서(장소), 누가(대상/참석자), 무엇을/어떻게(안건/주요 내용), 왜(목적/이유)\n"+
  "■ 수신: 기관명+직위 (예: 수신  ○○○장관(○○○과장))\n\n"+
  "【쉬운 표현 교정 규칙】\n"+
  "■ 의거하여→따라/따라서, 규정에 의하여→규정에 따라\n"+
  "■ 기(旣) 통보한→이미 알려 드린, 통보→알림\n"+
  "■ (홈페이지에) 탑재하다→(누리집에) 올리다, 게시하다\n"+
  "■ 제고하고→높이고, 실시하다→하다\n"+
  "■ 지체 없이→바로, 곧바로\n"+
  "■ 만전을 기하여→허술함이 없도록 하여\n"+
  "■ 기일을 엄수하여→날짜를 지켜, 엄수하기 바랍니다→꼭 지켜 주시기 바랍니다\n"+
  "■ 작성할 것→작성해 주십시오, 요망→바랍니다, 즉시 제출 바람→제출해 주십시오\n"+
  "■ 적극 협조 바랍니다→적극적으로 협조해 주시기 바랍니다\n"+
  "■ 계획(안)→계획, 상기→위의, 향후→앞으로, 당초→기존\n"+
  "■ 소관→담당, 익일/익월/익년→다음 날/다음 달/다음 해\n"+
  "■ ~에 대하여/~에 있어서 → 자연스러운 조사로 교체\n"+
  "■ ~로 인하여→~로, 구체화시켜→구체화해, 불필요한 사동 표현 삭제\n"+
  "■ 과도한 명사화 구성 피하기 (조사나 어미를 써서 의미 명확히)\n"+
  "■ 차별적 표현 금지: 결손가정→한 부모 가족, 학부형→학부모\n"+
  "■ 동(同)→이, 본(本)→이, 귀사/귀교→기관명\n"+
  "■ 워크숍(Workshop)→공동 연수/공동 수련\n\n"+
  "【띄어쓰기 핵심 규칙】\n"+
  "■ 문장의 각 단어는 띄어 쓸 것 (개선 방안, 검토 사항, 추진 계획 등)\n"+
  "■ '있다','없다'는 앞말과 띄어 씀 (관심 있는, 차질 없이)\n"+
  "■ '중(中)','내(內)','외(外)','간(間)' 등은 앞말과 띄어 씀\n"+
  "■ 수(數), 상(上), 시(時)는 앞말에 붙여 씀 (학생 수, 기본계획상, 계약 시→계약할 때)\n"+
  "■ '관련'은 앞말과 띄어 씀 (관련 법령, 복지 관련 시설)\n"+
  "■ 단위 명사(원, 명, 톤, 개)는 앞말과 띄어 씀 (5천억 원, 50만 명)\n"+
  "■ 법령명은 법제처 등재 표기 그대로, 홑낫표(「」)로 묶음\n\n"+
  "【문장 부호 규칙】\n"+
  "■ 쌍점(:): 표제 다음에 해당 항목을 들거나 설명을 붙일 때 1타 띄움\n"+
  "■ 큰따옴표: 말이나 글을 직접 인용, 책 제목이나 신문 이름\n"+
  "■ 작은따옴표(' '): 강조할 부분 표시, 소제목\n"+
  "■ 성과 이름은 붙여 씀, 관직명은 띄어 씀 (홍길동 씨 / 행정안전부 장관)\n"+
  "■ 용언 명사형이나 명사로 끝나는 문장은 마침표(.)를 쓰는 것이 원칙, 쓰지 않는 것도 허용\n\n"+
  "【수정 지침】\n"+
  "1. 원문의 파일명은 수정하지 않을 것\n"+
  "2. 1.번과 2.번 사이를 띄우지 않고 바로 이어서 작성할 것\n"+
  "3. 가독성을 위한 한 줄 띄우기를 사용하지 말고 바로 이어서 본문 내용을 붙일 것\n"+
  "4. 지출 금액 부분에 숫자와 한글을 병기할 것 (예: 금50,000원(금오만원))\n"+
  "5. 수정된 결과만 출력하고 설명은 붙이지 말 것\n"+
  "6. 원문 형식(수신, 제목, 본문, 붙임 등)을 그대로 유지할 것\n\n"+
  "아래 공문서 내용을 위 규칙에 따라 수정해줘. 수정된 공문서 전문만 출력해:\n\n"+msg;

  g("ai-status").style.display="flex";g("ai-status").classList.remove("ok","err");g("ai-status-msg").innerHTML="AI가 공문서를 수정 중입니다<span class='ld-dots'><span></span><span></span><span></span></span>";g("ai-results").style.display="none";g("ai-doc-results").style.display="none";

  fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="+gemKey,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:docPrompt}]}],generationConfig:{maxOutputTokens:8192}})})
  .then(function(r){return r.ok?r.json():r.json().then(function(e){throw new Error(e.error&&e.error.message||"API 오류");});})
  .then(function(d){
    var text=d.candidates[0].content.parts[0].text;
    var bt=String.fromCharCode(96);var codeBlockRe=new RegExp(bt+"{3}[a-z]*\s*([\s\S]*?)\s*"+bt+"{3}","i");var m=text.match(codeBlockRe);
    var result=m?m[1]:text;
    result=result.trim();
    g("ai-status").classList.add("ok");g("ai-status-msg").textContent="✅ 공문서 수정 완료!";
    g("ai-doc-output").textContent=result;
    g("ai-doc-results").style.display="block";
  }).catch(function(e){g("ai-status").classList.add("err");var msg=e.message||"";if(msg.indexOf("quota")>-1||msg.indexOf("Quota")>-1||msg.indexOf("rate")>-1||msg.indexOf("429")>-1){g("ai-status-msg").textContent="⏳ API 요청 한도 초과! 1분 후 다시 시도해주세요.";}else if(msg.indexOf("API key")>-1||msg.indexOf("API_KEY")>-1){g("ai-status-msg").textContent="🔑 API 키가 유효하지 않습니다.";}else{g("ai-status-msg").textContent="❌ 수정 실패: "+msg;}});
}

function copyDocResult(){
  var text=g("ai-doc-output").textContent;
  if(!text)return;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){
      var btn=g("ai-doc-copy-btn");btn.textContent="✅ 복사 완료!";setTimeout(function(){btn.textContent="📋 복사하기";},2000);
    }).catch(function(){fallbackCopy(text);});
  }else{fallbackCopy(text);}
}
function fallbackCopy(text){
  var ta=document.createElement("textarea");ta.value=text;ta.style.cssText="position:fixed;left:-9999px;";document.body.appendChild(ta);ta.select();
  try{document.execCommand("copy");var btn=g("ai-doc-copy-btn");btn.textContent="✅ 복사 완료!";setTimeout(function(){btn.textContent="📋 복사하기";},2000);}catch(e){}
  document.body.removeChild(ta);
}

/* 🖊️ 생기부 도우미 -------------------------------------------------------- */
var SGB_TYPES={subj:{nm:"과목별 세부능력 및 특기사항",limit:500},personal:{nm:"개인별 세부능력 및 특기사항",limit:500},behavior:{nm:"행동특성 및 종합의견",limit:500},auto:{nm:"자율·자치활동 특기사항",limit:500},club:{nm:"동아리활동 특기사항",limit:500},career:{nm:"진로활동 특기사항",limit:700}};
// 나이스 기재 금지·주의 표현 목록 [패턴, 사유]
var SGB_BANNED=[
  [/토익|TOEIC/i,"공인어학시험명·점수 기재 금지 (토익)"],
  [/토플|TOEFL/i,"공인어학시험명·점수 기재 금지 (토플)"],
  [/텝스|TEPS/i,"공인어학시험명·점수 기재 금지 (텝스)"],
  [/HSK/i,"공인어학시험명·점수 기재 금지 (HSK)"],
  [/JLPT/i,"공인어학시험명·점수 기재 금지 (JLPT)"],
  [/오픽|OPIc/i,"공인어학시험명·점수 기재 금지 (오픽)"],
  [/아이엘츠|IELTS/i,"공인어학시험명·점수 기재 금지 (아이엘츠)"],
  [/올림피아드/,"교외 대회 참가·수상 실적 기재 금지"],
  [/경시대회/,"교외 대회 참가·수상 실적 기재 금지"],
  [/전국 ?대회/,"교외 대회 참가·수상 실적 기재 금지"],
  [/[가-힣]{2,}대학교/,"특정 대학명 기재 금지"],
  [/서울대|연세대|고려대|성균관대|한양대|이화여대|카이스트|KAIST|포스텍|POSTECH/i,"특정 대학명(축약 포함) 기재 금지"],
  [/(아버지|어머니|아빠|엄마|부모)[^.,]{0,8}(직업|직장|회사|의사|변호사|교수|사업)/,"부모의 사회경제적 지위 기재 금지"],
  [/해외 ?봉사|해외 ?연수|해외 ?탐방|해외 ?활동|어학연수/,"해외 활동 기재 금지"],
  [/논문/,"논문(소논문 포함) 기재 금지"],
  [/특허/,"특허 기재 금지"],
  [/출판/,"도서 출판 기재 금지"],
  [/(강사|교수)[^.,]{0,6}(초청|특강|강의)/,"특정 강사·기관명 기재 주의"]
];
var sgbDrafts=[];
function sgbTypeInfo(){var s=g("sgb-type");return SGB_TYPES[s?s.value:"subj"]||SGB_TYPES.subj;}
function sgbTone(){var b=document.querySelector("#sgb-page .sz-btn.on[data-tone]");return b?b.getAttribute("data-tone"):"구체적 서술형";}
// 나이스 바이트 계산: 한글·한자 등 비ASCII 3바이트, 영문/숫자/공백/기호 1바이트
function sgbByte(s){var b=0;for(var i=0;i<s.length;i++){b+=(s.charCodeAt(i)>127)?3:1;}return b;}
function openSgb(){
  g("sgb-page").classList.add("open");
  sgbToggleSubj(); sgbUpdateGauge(); sgbRenderHistory();
  var key=getGemKey(), btn=g("sgb-gen"), nk=g("sgb-nokey");
  if(!key){btn.disabled=true;btn.style.opacity="0.4";btn.style.cursor="not-allowed";nk.style.display="block";}
  else{btn.disabled=false;btn.style.opacity="";btn.style.cursor="";nk.style.display="none";}
}
function closeSgb(){g("sgb-page").classList.remove("open");resizeScale();}
function sgbToggleSubj(){var w=g("sgb-subj-wrap");if(w)w.style.visibility=(g("sgb-type").value==="subj")?"visible":"hidden";}
function sgbUpdateGauge(){
  var ta=g("sgb-editor"); if(!ta)return;
  var v=ta.value, t=sgbTypeInfo(), chars=v.length, bytes=sgbByte(v), limitC=t.limit, limitB=t.limit*3;
  var over=chars>limitC||bytes>limitB;
  var cnt=g("sgb-count");
  cnt.textContent=chars+"자/"+limitC+"자 · "+bytes+"byte/"+limitB+"byte"+(over?" ⚠️ 초과":"");
  cnt.style.color=over?"#ef4444":"var(--tx2)";
  cnt.style.fontWeight=over?"700":"400";
  var pct=Math.min(100,Math.round(Math.max(bytes/limitB,chars/limitC)*100));
  var bar=g("sgb-gauge");
  bar.style.width=pct+"%";
  bar.style.background=over?"#ef4444":(pct>85?"#f59e0b":"var(--ac)");
  sgbCheckBanned(v);
}
function sgbCheckBanned(v){
  var box=g("sgb-banned"); if(!box)return;
  var hits=[];
  SGB_BANNED.forEach(function(p){var m=v.match(p[0]);if(m&&m[0])hits.push("<b>"+escH(m[0])+"</b> — "+p[1]);});
  if(!hits.length){box.style.display="none";box.innerHTML="";return;}
  box.style.display="block";
  box.innerHTML="🚫 기재 금지·주의 표현이 발견됐어요:<br>"+hits.join("<br>");
}
// ✂️ 종결어미 → 명사형(~함/~임/~됨/~음) 로컬 변환 (코어: 문자열 → 문자열, AI 응답 후처리에도 재사용)
function sgbNounizeText(v){
  var pairs=[["하였습니다","함"],["했습니다","함"],["하였다","함"],["했다","함"],["합니다","함"],["한다","함"],["되었습니다","됨"],["됐습니다","됨"],["되었다","됨"],["됐다","됨"],["됩니다","됨"],["된다","됨"],["입니다","임"],["있습니다","있음"],["있었다","있었음"],["있다","있음"],["보였습니다","보임"],["보였다","보임"],["보인다","보임"],["줍니다","줌"],["이다","임"]];
  pairs.forEach(function(p){v=v.replace(new RegExp(p[0]+"(?=[^가-힣]|$)","g"),p[1]);});
  // 일반 규칙: 받침 ㅆ(과거형 축약 포함: 었/았/웠/냈/갔/왔...) + '다' 종결 → '~음' (예: 키웠다→키웠음)
  v=v.replace(/([가-힣])다(?=[^가-힣]|$)/g,function(m0,ch){var j=(ch.charCodeAt(0)-44032)%28;return (j===20)?ch+"음":m0;});
  return v;
}
function sgbNounize(){
  var ta=g("sgb-editor"); if(!ta)return;
  ta.value=sgbNounizeText(ta.value); sgbUpdateGauge();
  var b=g("sgb-nounize"),o=b.textContent; b.textContent="✅ 변환 완료"; setTimeout(function(){b.textContent=o;},1200);
}
// 🕵️ 사람 이름 의심 패턴 감지 — 성씨+2글자 이름 / '~이가·~이는·~군·~양' 호칭 패턴 (생기부에 실명이 남는 사고 방지용 경고)
function sgbDetectName(v){
  var hits=[];
  var re1=/[김이박최정강조윤장임한오서신권황안송류전홍][가-힣]{2}(?:이가|이는|이의|이와|에게|은|는|이|가|을|를|의|와|과)(?=[^가-힣]|$)/g;
  var re2=/[가-힣]{2,3}(?:이가|이는|이의|군|양)(?=[^가-힣]|$)/g;
  var m;
  while((m=re1.exec(v))!==null){if(hits.indexOf(m[0])===-1)hits.push(m[0]);}
  while((m=re2.exec(v))!==null){if(hits.indexOf(m[0])===-1)hits.push(m[0]);}
  return hits;
}
function sgbCopyText(text,btn){
  if(!text)return;
  function ok(){if(btn){var o=btn.textContent;btn.textContent="✅ 복사됨";setTimeout(function(){btn.textContent=o;},1500);}}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(ok).catch(function(){sgbLegacyCopy(text);ok();});}
  else{sgbLegacyCopy(text);ok();}
}
function sgbLegacyCopy(text){var ta=document.createElement("textarea");ta.value=text;ta.style.cssText="position:fixed;left:-9999px;";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");}catch(e){}document.body.removeChild(ta);}
function sgbSetStatus(type,msg){
  var st=g("sgb-status"); st.style.display="flex"; st.classList.remove("ok","err");
  if(type==="load"){g("sgb-status-msg").innerHTML=msg+"<span class='ld-dots'><span></span><span></span><span></span></span>";}
  else{g("sgb-status-msg").textContent=msg;}
  if(type==="ok")st.classList.add("ok"); if(type==="err")st.classList.add("err");
}
function sgbItemName(){
  var t=sgbTypeInfo(), subj=g("sgb-subject").value.trim();
  return (g("sgb-type").value==="subj"&&subj)?(subj+" "+t.nm):t.nm;
}
function sgbGenerate(){
  var key=getGemKey(); if(!key)return;
  var kw=g("sgb-keywords").value.trim();
  if(!kw){sgbSetStatus("err","관찰 키워드를 먼저 입력해주세요.");return;}
  // 🔒 전송 전 개인정보 가드 — 이름 패턴 자동감지는 오탐이 많아, 전송 직전 교사 확인을 받는다
  customConfirm("전송 전 확인 ✋\n\n입력한 키워드에 학생 실명 등\n개인정보가 들어있지 않은지 확인했어요.\n(이름 대신 '해당 학생'으로 쓰세요)",function(){sgbDoFetch(key,kw);});
}
function sgbDoFetch(key,kw){
  var t=sgbTypeInfo(), tone=sgbTone(), itemNm=sgbItemName();
  var prompt="너는 학교생활기록부 작성을 돕는 전문 보조 작가야. 아래 교사의 관찰 키워드를 바탕으로 '"+itemNm+"' 초안 3개를 작성해줘.\n\n"+
  "【작성 규칙 — 학교생활기록부 기재요령 준수】\n"+
  "1. 모든 문장은 명사형 어미(~함/~임/~됨/~음)로 종결할 것\n"+
  "2. 사람 이름(성+이름, 예: 김철수)을 절대 출력하지 말 것 — 관찰 키워드에 이름이 섞여 있어도 '해당 학생'으로 대체하고, 주어는 가급적 생략할 것\n"+
  "3. 교사가 직접 관찰한 사실에 기반해 서술할 것\n"+
  "4. 추상적 칭찬('성실하다','우수하다','뛰어나다' 등)만 나열하는 것 금지 — 반드시 관찰 가능한 구체적 행동·변화·결과로 서술할 것\n"+
  "5. 세 초안은 서로 다른 구성으로 쓸 것: 초안1=사실나열형(활동과 행동을 병렬로 서술), 초안2=성장서사형(변화 전 → 계기 → 변화 후의 흐름), 초안3=역량중심형(핵심 역량을 축으로 근거 행동 제시)\n"+
  "6. 서술 톤: "+tone+"\n"+
  "7. 각 초안은 공백 포함 "+t.limit+"자 이내로 작성할 것\n\n"+
  "【품질 기준 예시 — 이 수준의 구체성을 참고하되, 문장을 그대로 베끼지 말 것】\n"+
  "(체육 세특 예시) 농구 단원에서 2대2 공격 전술의 공간 창출 원리를 이해하고 스크린 플레이를 팀 연습에 먼저 제안함. 체력이 부족한 팀원에게 역할을 조정해주는 배려가 돋보였으며, 수업 후 자발적으로 슈팅 연습을 지속하여 자유투 성공률을 크게 향상시킴.\n"+
  "(행동특성 예시) 학급 내 갈등 상황에서 양쪽의 입장을 끝까지 들은 뒤 절충안을 제시하는 등 공동체 문제를 자기 일로 여기는 태도가 뚜렷함. 학기 초 발표를 어려워했으나 학급 회의 서기를 자원해 기록을 도맡으며 자신감을 얻었고, 이후 토론 사회를 맡아 회의를 안정적으로 진행하는 성장을 보임.\n\n"+
  "【기재 금지 — 절대 포함하지 말 것】\n"+
  "- 공인어학시험명·점수 (토익, 토플, 텝스, HSK, JLPT, 오픽 등)\n"+
  "- 교외 대회 참가 사실·수상 실적 (올림피아드, 경시대회 등)\n"+
  "- 특정 대학·기관·강사명\n"+
  "- 부모의 사회경제적 지위 (직업, 직장 등)\n"+
  "- 해외 활동 (해외 봉사, 어학연수 등)\n"+
  "- 논문·출판·특허\n\n"+
  "순수 JSON 배열로만 응답해 (설명·마크다운 없이 JSON만):\n[\"초안1\",\"초안2\",\"초안3\"]\n\n"+
  "관찰 키워드:\n"+kw;
  sgbSetStatus("load","AI가 '"+itemNm+"' 초안을 작성 중입니다");
  g("sgb-drafts").style.display="none";
  fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="+key,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:prompt}]}],generationConfig:{maxOutputTokens:8192}})})
  .then(function(r){return r.ok?r.json():r.json().then(function(e){throw new Error(e.error&&e.error.message||"API 오류");});})
  .then(function(d){
    var text=d.candidates[0].content.parts[0].text;
    var bt=String.fromCharCode(96);var codeBlockRe=new RegExp(bt+"{3}(?:json)?[^]*?"+bt+"{3}","i");
    var mm=text.match(codeBlockRe); if(mm)text=mm[0].replace(new RegExp(bt+"{3}(?:json)?","gi"),"");
    var sIdx=text.indexOf("["), eIdx=text.lastIndexOf("]");
    if(sIdx!==-1&&eIdx!==-1)text=text.substring(sIdx,eIdx+1);
    var parsed=JSON.parse(text);
    if(!Array.isArray(parsed)||!parsed.length)throw new Error("초안 형식 오류");
    // 🛠️ 응답 후처리: 종결어미 명사형(~함/~임) 자동 보정 — AI가 규칙을 어겨도 로컬에서 한 번 더 다듬는다
    parsed=parsed.slice(0,3).map(function(x){return sgbNounizeText(String(x));});
    sgbDrafts=parsed;
    sgbSetStatus("ok","✅ 초안 "+parsed.length+"개 생성 완료! 마음에 드는 초안을 편집칸으로 내려 다듬으세요.");
    sgbRenderDrafts(parsed);
    sgbSaveHistory({ts:Date.now(),nm:itemNm,kw:kw,drafts:parsed});
  }).catch(function(e){
    var msg=e.message||"";
    if(msg.indexOf("quota")>-1||msg.indexOf("Quota")>-1||msg.indexOf("rate")>-1||msg.indexOf("429")>-1){sgbSetStatus("err","⏳ API 요청 한도 초과! 1분 후 다시 시도해주세요. (무료 티어 제한)");}
    else if(msg.indexOf("API key")>-1||msg.indexOf("API_KEY")>-1){sgbSetStatus("err","🔑 API 키가 유효하지 않습니다. 키를 다시 확인해주세요.");}
    else{sgbSetStatus("err","❌ 생성 실패: "+msg);}
  });
}
function sgbRenderDrafts(drafts){
  var box=g("sgb-drafts"); box.innerHTML=""; box.style.display="flex";
  drafts.forEach(function(d,i){
    var card=document.createElement("div");
    var nameHits=sgbDetectName(d); // 🕵️ 실명 의심 패턴 감지
    card.style.cssText="background:rgba(255,255,255,0.04);border:1px solid "+(nameHits.length?"rgba(239,68,68,0.45)":"rgba(255,255,255,0.12)")+";border-radius:10px;padding:12px 14px;";
    var warnHtml=nameHits.length?"<div class='sgb-d-warn' style='margin-top:8px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:8px;padding:8px 10px;font-size:11px;color:#f87171;line-height:1.7;'>⚠️ 사람 이름으로 의심되는 표현이 있어요: <b></b><br>실명이면 반드시 '해당 학생'으로 바꿔주세요. (기재 금지)</div>":"";
    card.innerHTML="<div style='display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;gap:8px;'><b style='font-size:12px;color:var(--ac);white-space:nowrap;'>초안 "+(i+1)+" <span style='font-weight:400;color:var(--tx3);'>("+d.length+"자 · "+sgbByte(d)+"byte)</span>"+(nameHits.length?" <span style='color:#f87171;'>⚠️ 이름 의심</span>":"")+"</b><span style='display:flex;gap:6px;flex-shrink:0;'><button class='btn-cancel sgb-d-copy' style='margin:0;padding:5px 10px;font-size:11px;'>📋 복사</button><button class='btn-cancel sgb-d-edit' style='margin:0;padding:5px 10px;font-size:11px;background:var(--cb);color:var(--ac);border-color:var(--ac);'>⬇ 편집칸으로</button></span></div><div class='sgb-d-text' style='font-size:13px;color:var(--tx);line-height:1.8;white-space:pre-wrap;word-break:break-all;'></div>"+warnHtml;
    card.querySelector(".sgb-d-text").textContent=d;
    if(nameHits.length){var wb=card.querySelector(".sgb-d-warn b");if(wb)wb.textContent=nameHits.join(", ");}
    card.querySelector(".sgb-d-copy").addEventListener("click",function(){sgbCopyText(d,this);});
    card.querySelector(".sgb-d-edit").addEventListener("click",function(){g("sgb-editor").value=d;sgbUpdateGauge();g("sgb-editor").focus();});
    box.appendChild(card);
  });
}
function sgbSaveHistory(entry){
  var h=lsGetJ(getDKey("sgb_history"),[]);
  if(Object.prototype.toString.call(h)!=="[object Array]")h=[];
  h.unshift(entry);
  if(h.length>20)h=h.slice(0,20);
  lsSet(getDKey("sgb_history"),JSON.stringify(h));
  sgbRenderHistory();
}
function sgbRenderHistory(){
  var list=g("sgb-hist-list"); if(!list)return;
  var h=lsGetJ(getDKey("sgb_history"),[]);
  if(Object.prototype.toString.call(h)!=="[object Array]")h=[];
  if(!h.length){list.innerHTML="<div style='font-size:12px;color:var(--tx3);padding:6px 0;'>아직 생성 기록이 없습니다.</div>";return;}
  list.innerHTML="";
  h.forEach(function(e2){
    var row=document.createElement("div");
    row.style.cssText="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--tx2);padding:7px 2px;border-bottom:1px solid var(--cb);cursor:pointer;";
    var dObj=new Date(e2.ts||0);
    row.innerHTML="<span style='color:var(--tx3);font-family:Space Mono,monospace;flex-shrink:0;'>"+(dObj.getMonth()+1)+"/"+dObj.getDate()+" "+pad(dObj.getHours())+":"+pad(dObj.getMinutes())+"</span><b style='color:var(--ac);flex-shrink:0;'>"+escH(e2.nm||"")+"</b><span class='sgb-h-prev' style='flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'></span><span style='color:var(--tx3);flex-shrink:0;'>불러오기 ↥</span>";
    row.querySelector(".sgb-h-prev").textContent=(e2.drafts&&e2.drafts[0])?e2.drafts[0]:"";
    row.addEventListener("click",function(){
      sgbDrafts=e2.drafts||[];
      sgbRenderDrafts(sgbDrafts);
      sgbSetStatus("ok","🕘 저장된 기록을 불러왔어요. ("+(e2.nm||"")+")");
    });
    list.appendChild(row);
  });
}
/* -------------------------------------------------------------------------- */

function renderEvents(){
  var list=g("ev-list");if(!list)return; var evts=lsGetJ(getDKey("events"),DEFAULT_EVENTS), n=new Date();n.setHours(0,0,0,0);
  var vD=new Date();vD.setHours(0,0,0,0); if(evRange==="week")vD.setDate(vD.getDate()+(evOff*7));else{vD.setDate(1);vD.setMonth(vD.getMonth()+evOff);}
  g("ev-title").textContent=evRange==="week"?"("+(vD.getMonth()+1)+"월 "+Math.ceil((vD.getDate()+new Date(vD.getFullYear(),vD.getMonth(),1).getDay())/7)+"주차)":"("+(vD.getMonth()+1)+"월 전체)";
  var sW=new Date(vD.getTime());sW.setDate(vD.getDate()-vD.getDay());sW.setHours(0,0,0,0); var eW=new Date(sW.getTime());eW.setDate(sW.getDate()+6);eW.setHours(23,59,59,999);
  var filtered=evts.filter(function(e){var isD=/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e.date);if(!isD)return true;var p=e.date.split("-"),d=new Date(parseInt(p[0]),parseInt(p[1])-1,parseInt(p[2]));d.setHours(0,0,0,0);return evRange==="week"?(d>=sW&&d<=eW):(d.getMonth()===vD.getMonth()&&d.getFullYear()===vD.getFullYear());});
  filtered.sort(function(a,b){return new Date(a.date)-new Date(b.date);}); var todayStr=new Date().getFullYear()+"-"+pad(new Date().getMonth()+1)+"-"+pad(new Date().getDate());
  list.innerHTML=filtered.map(function(e){var isT=e.date===todayStr,isD=/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e.date),dD="📌",dM=e.date;if(isD){var p=e.date.split("-");dD=parseInt(p[2]);dM=parseInt(p[1])+"월";}return "<div class='ev-chip"+(isT?" today-ev":"")+"'><div class='ev-d' style='font-size:"+(isD?"24px":"18px")+"'>"+dD+"</div><div><div class='ev-t'>"+e.title+"</div><div class='ev-m'>"+dM+"</div></div></div>";}).join("")||"<div style='font-size:14px;color:var(--tx3);text-align:center;padding:20px 0;'>일정이 없습니다</div>";
}
function renderDday(){
  var items=lsGetJ(getDKey("ddays"),[]),zone=g("dday-zone"),card=g("dday-card");if(!zone)return; if(!items.length){card.style.display="none";return;}card.style.display="flex";var n=new Date();n.setHours(0,0,0,0);
  zone.innerHTML=items.map(function(i){if(!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(i.date))return "<div class='dday-chip'><div class='dday-num' style='font-size:18px;letter-spacing:0;'>"+i.date+"</div><div class='dday-lbl'>"+i.label+"</div></div>";var p=i.date.split("-"),d=new Date(parseInt(p[0]),parseInt(p[1])-1,parseInt(p[2]));d.setHours(0,0,0,0);var diff=Math.round((d-n)/864e5),num=diff===0?"D-DAY":diff>0?"D-"+diff:"D+"+Math.abs(diff);return "<div class='dday-chip'><div class='dday-num'>"+num+"</div><div class='dday-lbl'>"+i.label+"</div></div>";}).join("");
}
function renderMemo(){g("memo-text").textContent=lsGet("memo")||"바탕화면에 메모를 띄울 수 있습니다.\n설정(우측 상단 톱니바퀴)에서 내용을 입력하세요.";}
// 📁 v1.7.0 빠른 폴더 런처 — 탐색기에서 드롭해 담고, 클릭하면 팬아웃으로 펼쳐 여는 진짜 런처
//    (window.tdesk가 없는 브라우저/Lively 환경에서는 기존 장식 박스 + 안내 문구로 폴백)
function TDA(){return (typeof window!=="undefined"&&window.tdesk&&window.tdesk.isApp)?window.tdesk:null;}
function getFolderItems(){var m=lsGetJ(getDKey("folder_items"),{});return (m&&typeof m==="object"&&Object.prototype.toString.call(m)!=="[object Array]")?m:{};}
function setFolderItems(m){lsSet(getDKey("folder_items"),JSON.stringify(m));}
function fbEmo(name){var s=String(name||""),d=s.lastIndexOf(".");return (d>0&&s.length-d<=6)?"📄":"📁";}
function fxOff(){if(document.body.classList.contains("no-fx"))return true;try{return !!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);}catch(e){return false;}}
function tdNotice(msg){
  var ov=document.createElement("div");
  ov.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:999999;display:flex;align-items:center;justify-content:center;";
  var box=document.createElement("div");
  box.style.cssText="background:#1a1d2a;color:#f1f5f9;border:1px solid rgba(139,92,246,0.35);border-radius:16px;padding:26px 30px;max-width:420px;width:90%;text-align:center;font-family:'Noto Sans KR',sans-serif;box-shadow:0 20px 60px rgba(0,0,0,0.6);";
  box.innerHTML="<div style='font-size:14px;line-height:1.7;white-space:pre-line;word-break:break-all;margin-bottom:18px;'>"+String(msg).replace(/</g,"&lt;")+"</div><button class='tdn-ok' style='padding:10px 28px;background:linear-gradient(135deg,#8b5cf6,#6d28d9);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;font-family:Noto Sans KR,sans-serif;'>확인</button>";
  box.querySelector(".tdn-ok").onclick=function(){document.body.removeChild(ov);};
  ov.onclick=function(e){if(e.target===ov)document.body.removeChild(ov);};
  ov.appendChild(box); document.body.appendChild(ov);
}
function renderFolders(){
  var folders=lsGetJ(getDKey("folders"),[{name:"긴급 (여기에 아이콘 배치)",size:"XL"},{name:"진행중 업무",size:"L"},{name:"나중에 볼 파일",size:"M"}]);var zone=g("folder-zone");if(!zone)return;
  var sm={S:{w:"140px",h:"100px"},M:{w:"200px",h:"140px"},L:{w:"280px",h:"180px"},XL:{w:"100%",h:"220px"}};
  var TD=TDA(), map=getFolderItems();
  zone.innerHTML="";
  folders.filter(function(f){return f.name&&f.name.trim();}).forEach(function(f,bi){
    var sz=sm[f.size||"M"], items=map[String(bi)]||[];
    var box=document.createElement("div");
    box.className="folder-box"+(TD?" fb-live":""); box.setAttribute("data-fidx",String(bi));
    box.style.width=sz.w; box.style.minHeight=sz.h;
    var h="<div class='folder-title'>📁 "+escH(f.name)+((TD&&items.length)?"<span class='fb-badge'>"+items.length+"</span>":"")+"</div>";
    if(TD){
      if(items.length){
        h+="<div class='fb-stack'>"+items.slice(0,4).map(function(it){return it.icon?"<img class='fb-mini' src='"+it.icon+"' alt=''>":"<span class='fb-mini fb-mini-emo'>"+fbEmo(it.name)+"</span>";}).join("")+(items.length>4?"<span class='fb-more'>+"+(items.length-4)+"</span>":"")+"</div>";
      }else{
        h+="<div class='fb-hint'>여기에 폴더를 끌어다 놓으세요</div>";
      }
    }else{
      h+="<div class='fb-note'>💡 TeacherDesk 앱에서는 실제 폴더를 담을 수 있어요</div>";
    }
    box.innerHTML=h;
    if(TD)bindFolderBox(box,bi);
    zone.appendChild(box);
  });
}
function bindFolderBox(box,bi){
  box.addEventListener("dragover",function(e){e.preventDefault();e.stopPropagation();box.classList.add("fb-dragover");});
  box.addEventListener("dragleave",function(e){if(e.relatedTarget&&box.contains(e.relatedTarget))return;box.classList.remove("fb-dragover");});
  box.addEventListener("drop",function(e){e.preventDefault();e.stopPropagation();box.classList.remove("fb-dragover");handleFolderDrop(e,bi,box);});
  box.addEventListener("click",function(e){
    if(document.body.classList.contains("editing"))return; // 편집모드에서는 팬아웃 금지
    e.stopPropagation();
    toggleFan(bi,box);
  });
}
function handleFolderDrop(e,bi,box){
  var TD=TDA(); if(!TD)return;
  var files=e.dataTransfer&&e.dataTransfer.files; if(!files||!files.length)return;
  var map=getFolderItems(), key=String(bi), arr=map[key]||[], added=[];
  for(var i=0;i<files.length;i++){
    var p=""; try{p=TD.getPathForFile(files[i])||"";}catch(err){p="";}
    if(!p)continue;
    var dup=false; for(var j=0;j<arr.length;j++){if(arr[j].path===p){dup=true;break;}}
    if(dup)continue; // 같은 경로 중복 등록 방지
    var nm=files[i].name||String(p).split("\\").pop()||p;
    var it={name:nm,path:p,icon:null};
    arr.push(it); added.push(it);
  }
  if(!added.length)return;
  map[key]=arr; setFolderItems(map);
  playAbsorb(e,box); // 🫧 쏙 들어가는 애니메이션
  renderFolders(); renderFolderItemsCfg();
  // 실제 파일 아이콘은 비동기로 받아와 캐시(저장) 후 다시 그림
  added.forEach(function(it){
    try{
      TD.getFileIcon(it.path).then(function(ic){
        if(!ic)return;
        var m2=getFolderItems(), a2=m2[key]||[];
        for(var k=0;k<a2.length;k++){if(a2[k].path===it.path)a2[k].icon=ic;}
        m2[key]=a2; setFolderItems(m2); renderFolders(); renderFolderItemsCfg();
      }).catch(function(){});
    }catch(err2){}
  });
}
function playAbsorb(e,box){
  box.classList.add("fb-gulp"); setTimeout(function(){box.classList.remove("fb-gulp");},220);
  if(fxOff())return;
  var app=g("app-container"); if(!app)return;
  var zoom=getZoom(), ar=app.getBoundingClientRect(), br=box.getBoundingClientRect();
  var x=(e.clientX-ar.left)/zoom, y=(e.clientY-ar.top)/zoom;
  var cx=(br.left-ar.left+br.width/2)/zoom, cy=(br.top-ar.top+br.height/2)/zoom;
  var gh=document.createElement("div"); gh.className="fb-ghost"; gh.textContent="📄";
  gh.style.left=x+"px"; gh.style.top=y+"px";
  app.appendChild(gh);
  void gh.offsetWidth; // 강제 리플로우 후 목표 상태로 전환 (rAF는 숨김 탭에서 안 돌아 사용 금지)
  gh.style.transform="translate("+(cx-x)+"px,"+(cy-y)+"px) scale(0.1)"; gh.style.opacity="0";
  setTimeout(function(){if(gh.parentNode)gh.parentNode.removeChild(gh);},480);
}
// 🌸 팬아웃(펼치기) — 카드 overflow에 안 잘리게 app-container 직속 오버레이 레이어에 렌더
var fanState=null;
function toggleFan(bi,box){
  if(fanState&&fanState.bi===bi){closeFan();return;}
  if(fanState)closeFan(true);
  openFan(bi,box);
}
function openFan(bi,box){
  var TD=TDA(); if(!TD)return;
  var items=getFolderItems()[String(bi)]||[]; if(!items.length)return;
  var app=g("app-container"); if(!app)return;
  var zoom=getZoom(), ar=app.getBoundingClientRect(), br=box.getBoundingClientRect();
  var bx=(br.left-ar.left)/zoom, by=(br.top-ar.top)/zoom, bw=br.width/zoom, bh=br.height/zoom;
  var cx=bx+bw/2, cy=by+bh/2;
  var ov=document.createElement("div"); ov.id="folder-fan";
  ov.addEventListener("click",function(e){e.stopPropagation();});
  var GW=118, GH=104, n=items.length;
  var cols=(n===1)?1:Math.max(2,Math.min(4,Math.ceil(Math.sqrt(n))));
  var rows=Math.ceil(n/cols), stH=getStageH();
  var sx=bx+bw+18; // 기본: 박스 오른쪽으로 펼침
  if(sx+cols*GW>1910)sx=bx-18-cols*GW; // 안 되면 왼쪽
  if(sx<10)sx=Math.max(10,Math.min(1910-cols*GW,cx-cols*GW/2)); // 그래도 안 되면 중앙 클램프
  var sy=Math.max(10,Math.min(by,stH-14-rows*GH));
  var anim=!fxOff();
  items.forEach(function(it,i){
    var x=sx+(i%cols)*GW, y=sy+Math.floor(i/cols)*GH;
    var el=document.createElement("div"); el.className="fan-item";
    el.style.left=x+"px"; el.style.top=y+"px"; el.style.width=(GW-14)+"px";
    var ico=it.icon?"<img src='"+it.icon+"' alt=''>":"<span class='fan-emo'>"+fbEmo(it.name)+"</span>";
    el.innerHTML="<button class='fan-x' title='목록에서 제거'>✕</button><div class='fan-ico'>"+ico+"<span class='fan-warn' style='display:none'>⚠️</span></div><div class='fan-nm'>"+escH(it.name)+"</div>";
    var back="translate("+Math.round(cx-x-(GW-14)/2)+"px,"+Math.round(cy-y-40)+"px) scale(0.15)";
    el.setAttribute("data-back",back);
    if(anim){el.style.transitionDelay=(i*0.03)+"s"; el.style.transform=back; el.style.opacity="0";}
    el.addEventListener("click",function(e2){e2.stopPropagation();openFanItem(it,el);});
    el.querySelector(".fan-x").addEventListener("click",function(e2){e2.stopPropagation();removeFanItem(bi,it.path);});
    try{TD.pathExists(it.path).then(function(ok){if(!ok){el.classList.add("missing");el.querySelector(".fan-warn").style.display="";}}).catch(function(){});}catch(err){}
    ov.appendChild(el);
  });
  app.appendChild(ov);
  fanState={bi:bi,ov:ov};
  if(anim){
    void ov.offsetWidth; // 강제 리플로우 — 초기(수납) 상태를 확정한 뒤 목표 상태로 전환 (rAF는 숨김 탭에서 안 돌아 사용 금지)
    ov.querySelectorAll(".fan-item").forEach(function(el){el.style.transform="";el.style.opacity="";});
  }
}
function closeFan(instant){
  if(!fanState)return;
  var ov=fanState.ov; fanState=null;
  if(instant===true||fxOff()){if(ov.parentNode)ov.parentNode.removeChild(ov);return;}
  var els=ov.querySelectorAll(".fan-item");
  for(var i=0;i<els.length;i++){
    var el=els[i];
    el.style.transitionDelay=((els.length-1-i)*0.02)+"s";
    el.style.transform=el.getAttribute("data-back")||"scale(0.15)";
    el.style.opacity="0"; el.style.pointerEvents="none";
  }
  setTimeout(function(){if(ov.parentNode)ov.parentNode.removeChild(ov);},430);
}
function openFanItem(it,el){
  var TD=TDA(); if(!TD)return;
  try{
    TD.openPath(it.path).then(function(res){
      if(res){ // '' 이외 = 실패 (이동/삭제 등)
        el.classList.add("missing"); var w=el.querySelector(".fan-warn"); if(w)w.style.display="";
        tdNotice("경로를 찾을 수 없어요 — 이동/삭제됐을 수 있습니다.\n\n"+it.path);
      }
    }).catch(function(){tdNotice("열기에 실패했어요. 잠시 후 다시 시도해주세요.");});
  }catch(err){tdNotice("열기에 실패했어요. 잠시 후 다시 시도해주세요.");}
}
function removeFanItem(bi,path){
  var map=getFolderItems(), key=String(bi);
  map[key]=(map[key]||[]).filter(function(x){return x.path!==path;});
  setFolderItems(map); renderFolders(); renderFolderItemsCfg();
  if(fanState&&fanState.bi===bi){
    closeFan(true);
    if(map[key].length){var box=document.querySelector(".folder-box[data-fidx='"+key+"']");if(box)openFan(bi,box);}
  }
}
// ⚙️ 설정창 — 박스별 등록 목록 (개별 삭제)
function renderFolderItemsCfg(){
  var sec=g("folder-items-sec"), listEl=g("folder-items-list"); if(!sec||!listEl)return;
  if(!TDA()){sec.style.display="none";return;}
  sec.style.display="";
  var folders=lsGetJ(getDKey("folders"),[{name:"긴급 (여기에 아이콘 배치)",size:"XL"},{name:"진행중 업무",size:"L"},{name:"나중에 볼 파일",size:"M"}]).filter(function(f){return f.name&&f.name.trim();});
  var map=getFolderItems();
  listEl.innerHTML="";
  folders.forEach(function(f,bi){
    var arr=map[String(bi)]||[];
    var wrap=document.createElement("div"); wrap.className="fi-grp";
    var hd=document.createElement("div"); hd.className="fi-hd"; hd.textContent="📁 "+f.name+" ("+arr.length+")"; wrap.appendChild(hd);
    if(!arr.length){var em=document.createElement("div"); em.className="fi-empty"; em.textContent="비어 있음 — 바탕화면 박스에 끌어다 놓으면 등록돼요"; wrap.appendChild(em);}
    arr.forEach(function(it){
      var row=document.createElement("div"); row.className="fi-row";
      row.innerHTML=(it.icon?"<img src='"+it.icon+"' alt=''>":"<span class='fi-emo'>"+fbEmo(it.name)+"</span>")+"<b></b><i></i><button class='del-btn'>✕</button>";
      row.querySelector("b").textContent=it.name;
      row.querySelector("i").textContent=it.path; row.querySelector("i").title=it.path;
      row.querySelector(".del-btn").addEventListener("click",function(){removeFanItem(bi,it.path);});
      wrap.appendChild(row);
    });
    listEl.appendChild(wrap);
  });
}

function renderDock() {
  var items = lsGetJ(getDKey("dockItems"), [{name:"업무포털", url:"https://gbe.eduptl.kr", emo:"🏫"}, {name:"유튜브", url:"https://youtube.com", emo:"▶️"}]);
  var inline = g("dock-inline");
  var html = items.map(function(i){ return "<a href='"+i.url+"' target='_blank' class='dock-item'>"+(i.emo||"🔗")+"<span class='tooltip'>"+i.name+"</span></a>"; }).join("");
  inline.innerHTML = html; 
}

var calD=new Date(); function renderCal(){var y=calD.getFullYear(),m=calD.getMonth();g("cal-my").textContent=y+"년 "+(m+1)+"월";var fD=new Date(y,m,1).getDay(),lD=new Date(y,m+1,0).getDate(),pL=new Date(y,m,0).getDate(),h="";
  // 날짜별 일정/할일 수집
  var evts=lsGetJ(getDKey("events"),DEFAULT_EVENTS), todos=lsGetJ(getDKey("todos"),[]), ddays=lsGetJ(getDKey("ddays"),[]);
  var calMap={};
  evts.forEach(function(e){if(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e.date)){var p=e.date.split("-");if(parseInt(p[0])===y&&parseInt(p[1])-1===m){var day=parseInt(p[2]);if(!calMap[day])calMap[day]={ev:[],td:[]};calMap[day].ev.push(e.title);}}});
  todos.forEach(function(t){if(t.deadline&&!t.done){var p=t.deadline.split("-");if(p.length===3&&parseInt(p[0])===y&&parseInt(p[1])-1===m){var day=parseInt(p[2]);if(!calMap[day])calMap[day]={ev:[],td:[]};calMap[day].td.push("📌 "+t.text);}}});
  ddays.forEach(function(d){if(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(d.date)){var p=d.date.split("-");if(parseInt(p[0])===y&&parseInt(p[1])-1===m){var day=parseInt(p[2]);if(!calMap[day])calMap[day]={ev:[],td:[]};calMap[day].td.push("⏳ "+d.label);}}});
  
  ["일","월","화","수","목","금","토"].forEach(function(d,i){h+="<div class='cal-day-hd"+(i===0?" sun":i===6?" sat":"")+"'>"+d+"</div>";});var todayDate=new Date(),iT=(y===todayDate.getFullYear()&&m===todayDate.getMonth());for(var i=0;i<fD;i++)h+="<div class='cal-day other-month'>"+(pL-fD+1+i)+"</div>";for(var i=1;i<=lD;i++){var dw=(fD+i-1)%7;var info=calMap[i];var dots="",tooltip="";if(info){dots="<div class='cal-dots'>";if(info.ev.length)dots+="<div class='cal-dot ev-dot'></div>";if(info.td.length)dots+="<div class='cal-dot todo-dot'></div>";dots+="</div>";var allItems=info.ev.concat(info.td);tooltip="<div class='cal-tooltip'>"+allItems.map(function(s){return "<div>"+s+"</div>";}).join("")+"</div>";}h+="<div class='cal-day"+(dw===0?" sun":dw===6?" sat":"")+(iT&&i===todayDate.getDate()?" today":"")+"'>"+i+dots+tooltip+"</div>";}for(var i=1;i<=(42-(fD+lD));i++)h+="<div class='cal-day other-month'>"+i+"</div>";g("cal-grid").innerHTML=h;}
function renderPopups(){
  var rData=lsGetJ(getDKey("roster_data"),ROSTER_DATA);
  var eData=lsGetJ(getDKey("ext_data"),EXT_DATA);
  if(rData&&rData.length>0){g("roster-wrap").style.display="block";bMP(rData,"roster-list");}
  if(eData&&eData.length>0){g("ext-wrap").style.display="block";bMP(eData,"ext-list");}
}
function bMP(d,id){var h="<div class='popup-cols'>";d.forEach(function(gObj){h+="<div class='popup-g-blk'><div class='popup-g-tit'>"+gObj.group+"</div>";if(gObj.items)gObj.items.forEach(function(i){h+="<div class='popup-item'>"+i+"</div>";});h+="</div>";});g(id).innerHTML=h+"</div>";}

function applyTheme(n){theme=n;document.body.setAttribute("data-theme",n);lsSet("theme",n);document.querySelectorAll("#theme-picks .tp").forEach(function(el){el.classList.toggle("on",parseInt(el.getAttribute("data-theme"))===n);});}
function applyLayout(n){layout=n;document.body.setAttribute("data-layout",n);lsSet("layout",n);document.querySelectorAll("#layout-picks-dash .lo").forEach(function(el){el.classList.toggle("on",parseInt(el.getAttribute("data-layout"))===n);});
  // 📅 레이아웃 4(달력 중심형) 선택 시 달력이 숨김 상태면 자동으로 표시 켜기
  if(n===4){var _h=lsGetJ(getDKey("wg_hidden"),[]),_ci=_h.indexOf("cal");if(_ci>-1){_h.splice(_ci,1);lsSet(getDKey("wg_hidden"),JSON.stringify(_h));if(g("wg-vis-rows")&&typeof renderWidgetTab==="function")renderWidgetTab();if(typeof renderCalCfgTab==="function")renderCalCfgTab();}}
  applyWidgetLayout();
  if(typeof renderCalCard==="function")renderCalCard(); // 레이아웃별 달력 라벨 개수(2↔3) 갱신
}
// 🎨 디자인 스킨 적용 (classic|bento|aqua|water|focus) — 즉시 저장·즉시 반영
var SKINS=["classic","bento","aqua","water","focus"];
function applySkin(s){
  if(SKINS.indexOf(s)===-1)s="classic";
  skin=s; document.body.setAttribute("data-skin",s); lsSet(getDKey("skin"),s);
  document.querySelectorAll("#skin-picks .sp").forEach(function(el){el.classList.toggle("on",el.getAttribute("data-skin")===s);});
  applyWidgetLayout(); if(typeof renderCalCard==="function")renderCalCard();
}

// 🧩 위젯 배치(표시/숨김 + 위치 교환) --------------------------------------
var CARD_DEFS=[
  {k:"folder",sel:".folder-card",nm:"📁 폴더"},
  {k:"clock",sel:".clock-card",nm:"⏰ 시계"},
  {k:"weather",sel:".weather-card",nm:"🌤️ 날씨"},
  {k:"now",sel:".now-card",nm:"🕐 지금 이 시간"},
  {k:"timetable",sel:".timetable-card",nm:"📋 시간표"},
  {k:"meal",sel:".meal-card",nm:"🍱 급식"},
  {k:"todo",sel:".todo-card",nm:"✅ 할 일"},
  {k:"events",sel:".events-card",nm:"📅 학사일정"},
  {k:"bottom",sel:".bottom-widgets",nm:"⏳ 하단 (D-Day·메모)"},
  {k:"cal",sel:".cal-card",nm:"📅 달력"}
];
function findCard(k){for(var i=0;i<CARD_DEFS.length;i++){if(CARD_DEFS[i].k===k)return CARD_DEFS[i];}return null;}
function applyWidgetLayout(){
  // 1) 인라인 스타일 초기화 (레이아웃 CSS의 원래 grid-area로 복귀 + 자유배치 흔적 제거)
  CARD_DEFS.forEach(function(c){var el=document.querySelector(c.sel);if(el){el.style.gridArea="";el.style.display="";el.style.position="";el.style.left="";el.style.top="";el.style.width="";el.style.height="";el.style.margin="";el.style.zIndex="";}});
  var curSkin=document.body.getAttribute("data-skin")||"classic";
  var free=lsGetJ(getDKey("free_layout"),null);
  if(curSkin==="focus")free=null; // 🎯 포커스 스킨은 자체 고정 배치가 강해 자유배치를 무시
  // 1.5) 클래식 스킨에서 달력을 숨기면 주변 카드가 달력 자리까지 확장 (빈 구멍 방지)
  var hiddenPre=lsGetJ(getDKey("wg_hidden"),[]);
  if(curSkin==="classic"&&!free&&hiddenPre.indexOf("cal")>-1){
    var _fc=document.querySelector(".folder-card"),_nc=document.querySelector(".now-card"),_ec=document.querySelector(".events-card");
    if(layout===1){if(_nc)_nc.style.gridArea="1 / 4 / 3 / 5";if(_ec)_ec.style.gridArea="3 / 4 / 5 / 5";}
    else if(layout===2){if(_fc)_fc.style.gridArea="1 / 4 / 4 / 5";}
    else if(layout===3){if(_fc)_fc.style.gridArea="1 / 1 / 4 / 2";}
    else if(layout===4){if(_fc)_fc.style.gridArea="1 / 1 / 6 / 3";} // 달력 중심형에서 달력 숨김 시 폴더가 좌측 전체 차지
  }
  // 2) 자유배치(free_layout)가 없을 때만 교환 이력 재적용 (자유배치가 있으면 좌표가 우선)
  if(!free){
    var swaps=lsGetJ(getDKey("wg_swaps"),[]);
    swaps.forEach(function(p){
      if(p[0]==="cal"||p[1]==="cal")return; // 달력 카드는 절대배치라 교환 대상에서 제외
      var a=findCard(p[0]),b=findCard(p[1]); if(!a||!b)return;
      var ea=document.querySelector(a.sel),eb=document.querySelector(b.sel); if(!ea||!eb)return;
      var ga=getComputedStyle(ea).gridArea, gb=getComputedStyle(eb).gridArea;
      ea.style.gridArea=gb; eb.style.gridArea=ga;
    });
  }
  // 3) 숨김 처리 (자리는 비워둠)
  var hidden=lsGetJ(getDKey("wg_hidden"),[]);
  hidden.forEach(function(k){var c=findCard(k);if(!c)return;var el=document.querySelector(c.sel);if(el)el.style.display="none";});
  // 4) 저장된 자유배치 좌표 적용
  if(free)applyFreeLayout();
}
function renderSwapLog(){
  var log=g("wg-swap-log"); if(!log)return;
  var swaps=lsGetJ(getDKey("wg_swaps"),[]);
  if(!swaps.length){log.textContent="교환 이력 없음 (원래 배치 상태)";return;}
  log.innerHTML=swaps.map(function(p,i){var a=findCard(p[0]),b=findCard(p[1]);return (i+1)+". "+(a?a.nm:p[0])+" ↔ "+(b?b.nm:p[1]);}).join("<br>");
}
function renderWidgetTab(){
  var rows=g("wg-vis-rows"); if(!rows)return;
  var hidden=lsGetJ(getDKey("wg_hidden"),[]);
  rows.innerHTML="";
  CARD_DEFS.forEach(function(c){
    var lb=document.createElement("label");
    lb.style.cssText="display:flex;align-items:center;gap:6px;font-size:13px;text-transform:none;letter-spacing:0;color:var(--tx);cursor:pointer;margin:0;font-weight:500;";
    var cb=document.createElement("input"); cb.type="checkbox"; cb.checked=hidden.indexOf(c.k)===-1;
    cb.addEventListener("change",function(){
      var h=lsGetJ(getDKey("wg_hidden"),[]),idx=h.indexOf(c.k);
      if(cb.checked){if(idx>-1)h.splice(idx,1);}else{if(idx===-1)h.push(c.k);}
      lsSet(getDKey("wg_hidden"),JSON.stringify(h)); applyWidgetLayout(); renderCalCfgTab(); renderCalCard();
    });
    lb.appendChild(cb); lb.appendChild(document.createTextNode(" "+c.nm));
    rows.appendChild(lb);
  });
  var sa=g("wg-swap-a"),sb=g("wg-swap-b");
  if(sa&&sb){
    var opts=CARD_DEFS.filter(function(c){return c.k!=="cal";}).map(function(c){return "<option value='"+c.k+"'>"+c.nm+"</option>";}).join("");
    sa.innerHTML=opts; sb.innerHTML=opts; sb.selectedIndex=1;
  }
  renderSwapLog();
}

// 🧩 바탕화면 직접 편집 모드 (드래그 이동 + 크기 조절) ----------------------
var editMode=false;
function getZoom(){var z=parseFloat(g("app-container").style.zoom);return (z&&z>0)?z:1;}
function snap10(v){return Math.round(v/10)*10;}
function setCardBox(el,b){el.style.position="absolute";el.style.left=b.l+"px";el.style.top=b.t+"px";el.style.width=b.w+"px";el.style.height=b.h+"px";el.style.gridArea="auto";el.style.margin="0";el.style.zIndex="6";}
function applyFreeLayout(){
  var fl=lsGetJ(getDKey("free_layout"),null); if(!fl)return false;
  var dash=document.querySelector(".dashboard"); if(dash)dash.style.position="relative";
  CARD_DEFS.forEach(function(c){var b=fl[c.k];if(!b)return;var el=document.querySelector(c.sel);if(!el)return;setCardBox(el,b);});
  return true;
}
function enterEditMode(){
  if(editMode)return;
  if((document.body.getAttribute("data-skin")||"classic")==="focus"){alert("🎯 '오늘 포커스' 스킨은 자체 고정 배치를 사용해서 직접 편집을 지원하지 않아요.\n설정(⚙️) → 디자인에서 다른 스킨으로 바꾼 뒤 편집해주세요.");return;}
  editMode=true;
  if(fanState)closeFan(true); // 📁 펼쳐진 폴더 팬아웃은 편집 진입 시 즉시 닫기
  document.body.classList.add("editing"); // ⚡ 카드 transition 차단 + 텍스트 선택 방지 (드래그 떨림 방지 핵심)
  var dash=document.querySelector(".dashboard"), zoom=getZoom(), dr=dash.getBoundingClientRect();
  // 1) 표시 중인 카드들의 현재 위치·크기를 zoom 환산(1920x1080 기준)으로 먼저 모두 캡처
  var caps=[];
  CARD_DEFS.forEach(function(c){
    var el=document.querySelector(c.sel); if(!el)return;
    if(getComputedStyle(el).display==="none")return;
    var r=el.getBoundingClientRect();
    caps.push({el:el,l:Math.round((r.left-dr.left)/zoom),t:Math.round((r.top-dr.top)/zoom),w:Math.round(r.width/zoom),h:Math.round(r.height/zoom)});
  });
  // 2) 캡처가 끝난 뒤 한꺼번에 절대배치로 전환 (중간 전환에 따른 레이아웃 밀림 방지)
  dash.style.position="relative";
  caps.forEach(function(cp){setCardBox(cp.el,cp);attachEditUI(cp.el);});
  buildEditToolbar();
}
function attachEditUI(el){
  el.classList.add("card-editing");
  var ov=document.createElement("div"); ov.className="edit-ov"; el.appendChild(ov); // 카드 내부 버튼과의 이벤트 충돌 차단용 오버레이
  var grip=document.createElement("div"); grip.className="edit-grip"; grip.title="드래그해서 이동"; el.appendChild(grip);
  var hd=document.createElement("div"); hd.className="rs-handle"; hd.textContent="↘"; hd.title="드래그해서 크기 조절"; el.appendChild(hd);
  ov.addEventListener("mousedown",function(e){startCardDrag(e,el,false);});
  grip.addEventListener("mousedown",function(e){e.stopPropagation();startCardDrag(e,el,false);});
  hd.addEventListener("mousedown",function(e){e.stopPropagation();startCardDrag(e,el,true);});
}
function startCardDrag(e,el,isResize){
  // ⚡ 안정화 원칙: mousedown 시점의 시작 마우스 좌표·시작 카드 상태를 "고정" 저장하고,
  //    이후에는 (현재 마우스 - 시작 마우스)/zoom 델타를 시작값에 더하기만 한다.
  //    mousemove마다 rect를 다시 읽지 않으므로 피드백 루프에 의한 떨림이 없다.
  //    DOM 반영은 requestAnimationFrame으로 스로틀 → 프레임당 1회만 스타일 갱신.
  e.preventDefault();
  var zoom=getZoom(), sx=e.clientX, sy=e.clientY, stH=getStageH(); // 🖥️ 세로 한계는 동적 무대 높이 기준
  var sl=parseInt(el.style.left)||0, st=parseInt(el.style.top)||0, sw=parseInt(el.style.width)||160, sh=parseInt(el.style.height)||100;
  var lx=sx, ly=sy, raf=null;
  el.style.willChange=isResize?"width,height":"left,top";
  function apply(){
    raf=null;
    var dx=(lx-sx)/zoom, dy=(ly-sy)/zoom; // ⚠️ zoom 배율 환산 필수
    if(isResize){
      var nw=snap10(Math.max(160,sw+dx)), nh=snap10(Math.max(100,sh+dy));
      if(nw>1920)nw=1920; if(nh>stH)nh=stH;
      el.style.width=nw+"px"; el.style.height=nh+"px";
    }else{
      var nl=snap10(sl+dx), nt=snap10(st+dy);
      if(nl<0)nl=0; if(nt<0)nt=0;
      if(nl>1920-100)nl=1920-100; if(nt>stH-80)nt=stH-80;
      el.style.left=nl+"px"; el.style.top=nt+"px";
    }
  }
  function mv(ev){
    ev.preventDefault(); // 드래그 중 텍스트 선택·기본 드래그 동작 방지
    lx=ev.clientX; ly=ev.clientY;
    if(raf===null)raf=requestAnimationFrame(apply);
  }
  function up(){
    if(raf!==null){cancelAnimationFrame(raf);apply();}
    el.style.willChange="";
    document.removeEventListener("mousemove",mv,true);
    document.removeEventListener("mouseup",up,true);
  }
  // document 레벨에서 캡처 단계로 수신 — 커서가 카드를 벗어나거나 다른 요소 위를 지나도 계속 추적
  document.addEventListener("mousemove",mv,true); document.addEventListener("mouseup",up,true);
}
function buildEditToolbar(){
  if(g("edit-toolbar"))return;
  var tb=document.createElement("div"); tb.id="edit-toolbar"; tb.className="edit-toolbar";
  tb.innerHTML="<span>🧩 편집 모드 — 카드를 드래그해 옮기고 우하단 모서리로 크기 조절</span><button class='edit-tb-btn save' id='edit-save-btn'>✅ 완료 저장</button><button class='edit-tb-btn' id='edit-reset-btn'>↺ 원래대로</button>";
  document.body.appendChild(tb);
  g("edit-save-btn").addEventListener("click",saveFreeLayout);
  g("edit-reset-btn").addEventListener("click",function(){
    customConfirm("자유 배치를 삭제하고 원래 격자 배치로 되돌릴까요?",function(){lsDel(getDKey("free_layout"));location.reload();});
  });
}
function removeEditUI(){
  document.body.classList.remove("editing");
  var tb=g("edit-toolbar"); if(tb&&tb.parentNode)tb.parentNode.removeChild(tb);
  document.querySelectorAll(".card-editing").forEach(function(el){
    el.classList.remove("card-editing");
    ["edit-ov","edit-grip","rs-handle"].forEach(function(cls){var x=el.querySelector("."+cls);if(x&&x.parentNode)x.parentNode.removeChild(x);});
  });
  editMode=false;
}
function saveFreeLayout(){
  var out={};
  CARD_DEFS.forEach(function(c){
    var el=document.querySelector(c.sel); if(!el||!el.classList.contains("card-editing"))return;
    out[c.k]={l:parseInt(el.style.left)||0,t:parseInt(el.style.top)||0,w:parseInt(el.style.width)||160,h:parseInt(el.style.height)||100};
  });
  lsSet(getDKey("free_layout"),JSON.stringify(out));
  removeEditUI(); // 편집 UI만 제거하고 절대배치는 그대로 유지
}

// 📅 달력 카드 (월간 달력 + 개인 일정) --------------------------------------
var calCardD=new Date();
var CAL_COLORS=["#f472b6","#38bdf8","#34d399","#fbbf24","#a78bfa"];
function escH(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}
function calCfg(){var c=lsGetJ(getDKey("cal_cfg"),null)||{};return {weekStart:(c.weekStart===1?1:0),showSchool:c.showSchool!==false,dotColor:c.dotColor||CAL_COLORS[0],fadePast:c.fadePast!==false};}
function saveCalCfg(patch){var c=calCfg();for(var k in patch){if(Object.prototype.hasOwnProperty.call(patch,k))c[k]=patch[k];}lsSet(getDKey("cal_cfg"),JSON.stringify(c));renderCalCard();}
function getCalEvents(){var v=lsGetJ(getDKey("cal_events"),[]);return Object.prototype.toString.call(v)==="[object Array]"?v:[];}
function setCalEvents(v){lsSet(getDKey("cal_events"),JSON.stringify(v));}
function fmtYMD(y,m,d){return y+"-"+pad(m+1)+"-"+pad(d);}
function renderCalCard(){
  var grid=g("calc-grid"); if(!grid)return;
  var cfg=calCfg(), y=calCardD.getFullYear(), m=calCardD.getMonth();
  if(g("calc-my"))g("calc-my").textContent=y+"년 "+(m+1)+"월";
  var ws=cfg.weekStart;
  var names=ws===1?["월","화","수","목","금","토","일"]:["일","월","화","수","목","금","토"];
  var lead=(new Date(y,m,1).getDay()-ws+7)%7, lastDate=new Date(y,m+1,0).getDate(), prevLast=new Date(y,m,0).getDate();
  var evMap={}, myMap={};
  if(cfg.showSchool){
    lsGetJ(getDKey("events"),DEFAULT_EVENTS).forEach(function(e2){
      if(!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e2.date))return;
      var p=e2.date.split("-"); if(parseInt(p[0])!==y||parseInt(p[1])-1!==m)return;
      var d=parseInt(p[2]); (evMap[d]=evMap[d]||[]).push(e2.title);
    });
  }
  getCalEvents().forEach(function(e2){
    if(!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e2.date))return;
    var p=e2.date.split("-"); if(parseInt(p[0])!==y||parseInt(p[1])-1!==m)return;
    var d=parseInt(p[2]); (myMap[d]=myMap[d]||[]).push(e2);
  });
  var today=new Date(); today.setHours(0,0,0,0);
  var h="";
  names.forEach(function(nm){h+="<div class='calc-hd"+(nm==="일"?" sun":nm==="토"?" sat":"")+"'>"+nm+"</div>";});
  var cells=0;
  for(var i=0;i<lead;i++){h+="<div class='calc-day other'><div class='calc-num'>"+(prevLast-lead+1+i)+"</div></div>";cells++;}
  for(var d=1;d<=lastDate;d++){
    var dt=new Date(y,m,d); dt.setHours(0,0,0,0);
    var dw=dt.getDay(), isToday=dt.getTime()===today.getTime();
    var cls="calc-day"+(dw===0?" sun":dw===6?" sat":"")+(isToday?" today":"")+((cfg.fadePast&&dt<today)?" past":"");
    var evs=evMap[d]||[], mine=myMap[d]||[], dots="", lbs="";
    if(evs.length||mine.length){
      dots="<div class='calc-dots'>";
      if(evs.length)dots+="<span class='calc-dot' style='background:var(--ac)'></span>";
      mine.slice(0,3).forEach(function(me){dots+="<span class='calc-dot' style='background:"+(me.color||cfg.dotColor)+"'></span>";});
      dots+="</div>";
      // 📅 셀당 라벨: 레이아웃 4(달력 중심형)는 셀이 커서 3개, 그 외 2개까지 표시하고 넘치면 +N
      var maxLb=(document.body.getAttribute("data-layout")==="4")?3:2, allLb=[];
      evs.forEach(function(t){allLb.push({t:t,mine:false,c:null});});
      mine.forEach(function(me){allLb.push({t:me.title,mine:true,c:me.color||cfg.dotColor});});
      allLb.slice(0,maxLb).forEach(function(it){lbs+="<div class='calc-lb"+(it.mine?" mine":"")+"'"+(it.c?" style='color:"+it.c+"'":"")+">"+escH(it.t)+"</div>";});
      if(allLb.length>maxLb)lbs+="<div class='calc-lb calc-more'>+"+(allLb.length-maxLb)+"</div>";
    }
    h+="<div class='"+cls+"' data-d='"+fmtYMD(y,m,d)+"'><div class='calc-num'>"+d+"</div>"+dots+lbs+"</div>";
    cells++;
  }
  for(var j=1;cells<42;j++,cells++){h+="<div class='calc-day other'><div class='calc-num'>"+j+"</div></div>";}
  grid.innerHTML=h;
}
// 📅 날짜 클릭 → 개인 일정 추가/수정/삭제 팝업 (기존 커스텀 팝업 스타일)
function openCalDayPopup(dateStr){
  var ov=document.createElement("div");
  ov.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:999999;display:flex;align-items:center;justify-content:center;";
  var box=document.createElement("div");
  box.style.cssText="background:var(--card);color:var(--tx);border:1px solid var(--cb);border-radius:14px;padding:20px 22px;width:360px;max-width:92%;max-height:70vh;overflow-y:auto;font-family:var(--fb),sans-serif;box-shadow:0 20px 60px rgba(0,0,0,0.55);backdrop-filter:blur(20px);";
  ov.appendChild(box); document.body.appendChild(ov);
  function close(){if(ov.parentNode)ov.parentNode.removeChild(ov);}
  ov.addEventListener("click",function(e){if(e.target===ov)close();});
  var editIdx=-1;
  function rebuild(){
    var cfg=calCfg(), all=getCalEvents(), mine=[];
    all.forEach(function(e2,i){if(e2.date===dateStr)mine.push({ev:e2,gi:i});});
    var schools=[];
    if(cfg.showSchool)lsGetJ(getDKey("events"),DEFAULT_EVENTS).forEach(function(e2){if(e2.date===dateStr)schools.push(e2.title);});
    var p=dateStr.split("-");
    var h="<div style='display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;'><div style='font-size:15px;font-weight:800;'>📅 "+parseInt(p[1])+"월 "+parseInt(p[2])+"일 일정</div><button class='cdp-x' style='background:transparent;border:none;color:var(--tx3);font-size:16px;cursor:pointer;outline:none;'>✖</button></div>";
    if(schools.length){
      h+="<div style='font-size:11px;font-weight:700;color:var(--tx3);margin-bottom:4px;'>학사일정</div>";
      schools.forEach(function(t){h+="<div style='display:flex;align-items:center;gap:8px;font-size:13px;padding:5px 0;border-bottom:1px solid var(--cb);'><span style='width:8px;height:8px;border-radius:50%;background:var(--ac);flex-shrink:0;'></span><span>"+escH(t)+"</span></div>";});
      h+="<div style='height:10px'></div>";
    }
    h+="<div style='font-size:11px;font-weight:700;color:var(--tx3);margin-bottom:4px;'>개인 일정</div>";
    if(!mine.length)h+="<div style='font-size:12px;color:var(--tx3);padding:6px 0;'>등록된 개인 일정이 없습니다.</div>";
    mine.forEach(function(o,i){
      if(i===editIdx){
        h+="<div style='display:flex;gap:6px;align-items:center;padding:5px 0;'><input type='text' class='cdp-edit-inp' value='"+escH(o.ev.title)+"' style='flex:1;background:rgba(255,255,255,0.07);border:1px solid var(--ac);border-radius:6px;padding:7px 10px;color:var(--tx);font-size:13px;outline:none;font-family:var(--fb),sans-serif;'><button class='cdp-edit-save' data-gi='"+o.gi+"' style='padding:7px 12px;background:var(--ac);border:none;border-radius:6px;color:#fff;font-size:12px;font-weight:700;cursor:pointer;'>저장</button></div>";
      }else{
        h+="<div style='display:flex;align-items:center;gap:8px;font-size:13px;padding:5px 0;border-bottom:1px solid var(--cb);'><span style='width:8px;height:8px;border-radius:50%;background:"+(o.ev.color||cfg.dotColor)+";flex-shrink:0;'></span><span style='flex:1;word-break:break-all;'>"+escH(o.ev.title)+"</span><button class='cdp-edit' data-i='"+i+"' title='수정' style='background:transparent;border:none;cursor:pointer;font-size:13px;outline:none;'>✏️</button><button class='cdp-del' data-gi='"+o.gi+"' title='삭제' style='background:transparent;border:none;cursor:pointer;font-size:13px;outline:none;'>🗑</button></div>";
      }
    });
    h+="<div style='display:flex;gap:6px;margin-top:12px;'><input type='text' class='cdp-add-inp' placeholder='새 일정 제목 입력' style='flex:1;background:rgba(255,255,255,0.07);border:1px solid var(--cb);border-radius:6px;padding:8px 10px;color:var(--tx);font-size:13px;outline:none;font-family:var(--fb),sans-serif;'><button class='cdp-add' style='padding:8px 14px;background:var(--ac);border:none;border-radius:6px;color:#fff;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;'>＋ 일정 추가</button></div>";
    box.innerHTML=h;
    box.querySelector(".cdp-x").addEventListener("click",close);
    var addBtn=box.querySelector(".cdp-add"), addInp=box.querySelector(".cdp-add-inp");
    function doAdd(){var v=addInp.value.trim();if(!v)return;var arr=getCalEvents();arr.push({date:dateStr,title:v,color:calCfg().dotColor});setCalEvents(arr);editIdx=-1;rebuild();renderCalCard();}
    addBtn.addEventListener("click",doAdd);
    addInp.addEventListener("keydown",function(e){if(e.key==="Enter")doAdd();});
    box.querySelectorAll(".cdp-edit").forEach(function(b){b.addEventListener("click",function(){editIdx=parseInt(b.getAttribute("data-i"));rebuild();});});
    box.querySelectorAll(".cdp-del").forEach(function(b){b.addEventListener("click",function(){var gi=parseInt(b.getAttribute("data-gi"));var arr=getCalEvents();arr.splice(gi,1);setCalEvents(arr);editIdx=-1;rebuild();renderCalCard();});});
    var esBtn=box.querySelector(".cdp-edit-save");
    if(esBtn){
      var esInp=box.querySelector(".cdp-edit-inp");
      var doSaveEdit=function(){var gi=parseInt(esBtn.getAttribute("data-gi"));var v=esInp.value.trim();var arr=getCalEvents();if(arr[gi]&&v){arr[gi].title=v;setCalEvents(arr);}editIdx=-1;rebuild();renderCalCard();};
      esBtn.addEventListener("click",doSaveEdit);
      esInp.addEventListener("keydown",function(e){if(e.key==="Enter")doSaveEdit();});
      setTimeout(function(){esInp.focus();},30);
    }
  }
  rebuild();
}
// 📅 달력 설정 탭 (표시 여부는 배치 탭 wg_hidden과 연동)
function setCalShown(show){
  var h=lsGetJ(getDKey("wg_hidden"),[]), i=h.indexOf("cal");
  if(show&&i>-1)h.splice(i,1);
  if(!show&&i===-1)h.push("cal");
  lsSet(getDKey("wg_hidden"),JSON.stringify(h));
  applyWidgetLayout(); renderWidgetTab(); renderCalCfgTab(); renderCalCard();
}
function renderCalCfgTab(){
  if(!g("cal-show-on"))return;
  var cfg=calCfg(), hidden=lsGetJ(getDKey("wg_hidden"),[]), shown=hidden.indexOf("cal")===-1;
  function onoff(a,b,cond){var ea=g(a),eb=g(b);if(ea)ea.classList.toggle("on",!!cond);if(eb)eb.classList.toggle("on",!cond);}
  onoff("cal-show-on","cal-show-off",shown);
  onoff("cal-ws-mon","cal-ws-sun",cfg.weekStart===1);
  onoff("cal-sch-on","cal-sch-off",cfg.showSchool);
  onoff("cal-fade-on","cal-fade-off",cfg.fadePast);
  var row=g("cal-color-row");
  if(row){
    row.innerHTML="";
    CAL_COLORS.forEach(function(c){
      var b=document.createElement("div");
      b.className="sc-color-btn"+(c.toLowerCase()===cfg.dotColor.toLowerCase()?" on":"");
      b.style.backgroundColor=c;
      b.addEventListener("click",function(){saveCalCfg({dotColor:c});renderCalCfgTab();});
      row.appendChild(b);
    });
  }
}
// --------------------------------------------------------------------------

function openCfg(){
  g("cfg-page").classList.add("open");
  g("m-memo").value=lsGet("memo")||"";
  var ws=lsGet(getDKey("work_start")),we=lsGet(getDKey("work_end"));
  if(g("work-start"))g("work-start").value=ws||"08:30";
  if(g("work-end"))g("work-end").value=we||"16:30";
  
  // 📢 전광판 설정 불러오기
  var sbOn = lsGetJ(getDKey("sb_on"), false);
  if(g("sb-on")) g("sb-on").classList.toggle("on", sbOn);
  if(g("sb-off")) g("sb-off").classList.toggle("on", !sbOn);
  
  // 🔥 알림음 설정 불러오기
  var sbSoundOn = lsGetJ(getDKey("sb_sound"), true);
  if(g("sb-sound-on")) g("sb-sound-on").classList.toggle("on", sbSoundOn);
  if(g("sb-sound-off")) g("sb-sound-off").classList.toggle("on", !sbSoundOn);

  if(g("sb-sheet-url")) g("sb-sheet-url").value = lsGet(getDKey("sb_url")) || "";

  // 🔑 API 키 탭 값 로딩
  if(g("api-gem-inp")) g("api-gem-inp").value = lsGet(getDKey("api_gem")) || "";
  if(g("api-neis-inp")) g("api-neis-inp").value = lsGet(getDKey("api_neis")) || "";
  if(g("api-save-msg")) g("api-save-msg").textContent = "";
  // ✨ 애니메이션 효과 토글 상태 로딩
  var fxOn = lsGetJ(getDKey("fx"), true) !== false;
  if(g("fx-on")) g("fx-on").classList.toggle("on", fxOn);
  if(g("fx-off")) g("fx-off").classList.toggle("on", !fxOn);

  document.querySelectorAll("#theme-picks .tp").forEach(function(el){el.classList.toggle("on",parseInt(el.getAttribute("data-theme"))===theme);});
  document.querySelectorAll("#skin-picks .sp").forEach(function(el){el.classList.toggle("on",el.getAttribute("data-skin")===(document.body.getAttribute("data-skin")||"classic"));});
  document.querySelectorAll("#layout-picks-dash .lo").forEach(function(el){el.classList.toggle("on",parseInt(el.getAttribute("data-layout"))===layout);});
  cfgEvts=lsGetJ(getDKey("events"),DEFAULT_EVENTS);evPage=1;cfgDdays=lsGetJ(getDKey("ddays"),[]);ddPage=1;
  var w=lsGetJ("weatherLoc",null);
  if(w&&w.lat){tempWLoc=w;g("w-loc-q").value=w.name;g("w-loc-sel").textContent="현재 고정된 위치: "+w.name;}else{tempWLoc=null;g("w-loc-q").value="";g("w-loc-sel").textContent="현재 고정된 위치: 없음 (자동 모드)";}g("w-loc-res").innerHTML=""; 
  renderPeriodRows();renderScGrid();renderDdayRowsPaging();renderFolderRows();renderFolderItemsCfg();renderEventRowsPaging();renderFontGrids();renderDockRows();renderWidgetTab();renderCalCfgTab();
  // 🍱 급식 끼니 체크박스 상태 로딩
  var mts=getMealTypes();
  ["1","2","3"].forEach(function(c){var el=g("meal-t-"+c);if(el)el.checked=mts.indexOf(c)>-1;});
  switchTab(lsGet("lastCfgTab")||"design");
}
function closeCfg(){g("cfg-page").classList.remove("open");resizeScale();}
function switchTab(n){document.querySelectorAll(".msec").forEach(function(e){e.classList.remove("on");});document.querySelectorAll(".mtab").forEach(function(e){e.classList.remove("on");});var s=g("tab-"+n);if(s)s.classList.add("on");document.querySelectorAll(".mtab").forEach(function(el){if(el.getAttribute("data-tab")===n)el.classList.add("on");});lsSet("lastCfgTab",n);if(n==="roster")initRosterTab();if(n==="ext")initExtTab();}

function renderPeriodRows(){var ps=lsGetJ(getDKey("periods"),DEFAULT_PERIODS);g("period-rows").innerHTML="";ps.forEach(function(p){addPeriodRow(p.label,p.start,p.end);});}
function addPeriodRow(l,s,e){var r=document.createElement("div");r.className="period-row pr-row";r.innerHTML="<input type='text' class='pr-lbl' placeholder='교시명' value='"+(l||"")+"'><input type='text' class='pr-st' value='"+(s||"")+"'><input type='text' class='pr-en' value='"+(e||"")+"'><button class='del-btn'>✕</button>";r.querySelector(".del-btn").addEventListener("click",function(){r.remove();});g("period-rows").appendChild(r);}
function renderScGrid(){var cs=lsGetJ(getDKey("subj_colors"),SUBJ_DEF),tt=lsGetJ(getDKey("tt_saved"),TIMETABLE),st={};WD.forEach(function(d){(tt[d]||[]).forEach(function(s){if(s&&s!=="-")st[s]=1;});});var gd=g("sc-grid");gd.innerHTML="";var P=["#FF8FAB","#FFB347","#F0E68C","#90EE90","#7EC8E3","#DDA0DD","#FFA07A","#87CEEB","#98FB98","#B0C4DE"];Object.keys(st).forEach(function(s){var r=document.createElement("div");r.className="sc-row";var cC=cs[s]||SUBJ_DEF[s]||P[0],pH="<div class='sc-palette'>";P.forEach(function(c){pH+="<div class='sc-color-btn"+(c.toUpperCase()===cC.toUpperCase()?" on":"")+"' data-color='"+c+"' style='background-color:"+c+"'></div>";});r.innerHTML="<label>"+s+"</label>"+pH+"</div>";r.querySelectorAll(".sc-color-btn").forEach(function(btn){btn.addEventListener("click",function(){r.querySelectorAll(".sc-color-btn").forEach(function(b){b.classList.remove("on");});btn.classList.add("on");});});gd.appendChild(r);});}
function renderEventRowsPaging(){var mP=Math.ceil(cfgEvts.length/evLimit)||1;if(evPage>mP)evPage=mP;if(evPage<1)evPage=1;var st=(evPage-1)*evLimit,en=st+evLimit,sl=cfgEvts.slice(st,en);g("event-rows").innerHTML="";sl.forEach(function(i,idx){addEventRow(i.title,i.date,st+idx);});g("ev-page-lbl").textContent=evPage+" / "+mP;}
function addEventRow(l,dt,idx){var r=document.createElement("div");r.className="dyn-row ev-row";r.innerHTML="<input type='text' placeholder='일정명' value='"+(l||"")+"'><input type='text' placeholder='YYYY-MM-DD' value='"+(dt||"")+"'><button class='del-btn'>✕</button>";var inps=r.querySelectorAll("input");inps[0].addEventListener("input",function(){cfgEvts[idx].title=this.value;});inps[1].addEventListener("input",function(){cfgEvts[idx].date=this.value;});r.querySelector(".del-btn").addEventListener("click",function(){cfgEvts.splice(idx,1);renderEventRowsPaging();});g("event-rows").appendChild(r);}
function renderDdayRowsPaging(){var mP=Math.ceil(cfgDdays.length/ddLimit)||1;if(ddPage>mP)ddPage=mP;if(ddPage<1)ddPage=1;var st=(ddPage-1)*ddLimit,en=st+ddLimit,sl=cfgDdays.slice(st,en);g("dday-rows").innerHTML="";sl.forEach(function(i,idx){addDdayRow(i.label,i.date,st+idx);});g("dd-page-lbl").textContent=ddPage+" / "+mP;}
function addDdayRow(l,dt,idx){var r=document.createElement("div");r.className="dyn-row dd-row";r.innerHTML="<input type='text' placeholder='D-Day 이름' value='"+(l||"")+"'><input type='text' placeholder='YYYY-MM-DD' value='"+(dt||"")+"'><button class='del-btn'>✕</button>";var inps=r.querySelectorAll("input");inps[0].addEventListener("input",function(){cfgDdays[idx].label=this.value;});inps[1].addEventListener("input",function(){cfgDdays[idx].date=this.value;});r.querySelector(".del-btn").addEventListener("click",function(){cfgDdays.splice(idx,1);renderDdayRowsPaging();});g("dday-rows").appendChild(r);}
function renderFolderRows(){var fs=lsGetJ(getDKey("folders"),[{name:"긴급 (여기에 아이콘 배치)",size:"XL"},{name:"진행중 업무",size:"L"},{name:"나중에 볼 파일",size:"M"}]);g("folder-rows").innerHTML="";fs.forEach(function(f,i){addFolderRow(f.name,f.size,i);});}
function addFolderRow(n,sz,oidx){var r=document.createElement("div");r.className="dyn-row fr-row";if(typeof oidx==="number")r.setAttribute("data-oidx",String(oidx));var sH=["S","M","L","XL"].map(function(s){return "<button class='sz-btn"+(s===(sz||"M")?" on":"")+"' data-sz='"+s+"'>"+s+"</button>";}).join("");r.innerHTML="<input type='text' class='fr-nm' placeholder='폴더명' value='"+(n||"")+"'><div class='sz-toggle'>"+sH+"</div><button class='del-btn'>✕</button>";r.querySelectorAll(".sz-btn").forEach(function(btn){btn.addEventListener("click",function(){r.querySelectorAll(".sz-btn").forEach(function(b){b.classList.remove("on");});btn.classList.add("on");});});r.querySelector(".del-btn").addEventListener("click",function(){r.remove();});g("folder-rows").appendChild(r);}
function renderFontGrids(){var s=lsGetJ("customFonts",null),d=THEME_FONTS[theme]||THEME_FONTS[1];buildFontGrid(g("font-head-grid"),(s&&s.head)||d.head,function(f){document.documentElement.style.setProperty("--fh","'"+f+"'");});buildFontGrid(g("font-body-grid"),(s&&s.body)||d.body,function(f){document.documentElement.style.setProperty("--fb","'"+f+"'");});}
function buildFontGrid(c,cur,onP){if(!c)return;c.innerHTML="";FONTS.forEach(function(f){var b=document.createElement("button");b.className="font-btn"+(f.name===cur?" on":"");b.setAttribute("data-font",f.name);b.innerHTML="<div class='font-preview' style='font-family:\""+f.name+"\",sans-serif'>"+f.preview+"</div><div class='font-name'>"+f.label+"</div>";b.addEventListener("click",function(){c.querySelectorAll(".font-btn").forEach(function(x){x.classList.remove("on");});b.classList.add("on");onP(f.name);});c.appendChild(b);});}

function renderDockRows(){
  var items=lsGetJ(getDKey("dockItems"), [{name:"업무포털", url:"https://gbe.eduptl.kr", emo:"🏫"}, {name:"유튜브", url:"https://youtube.com", emo:"▶️"}]);
  g("dock-rows").innerHTML=""; items.forEach(function(i){ addDockRow(i.emo, i.name, i.url); });
}
function addDockRow(e,n,u){
  var r=document.createElement("div"); r.className="dyn-row dock-row";
  var ems = ["🔗","🏫","📑","📊","📅","📝","▶️","✉️","📁","💻","🖨️","💡","⭐","🚀","🍎","🎨","🎵","⚽","🏆","💬"];
  var opts = "";
  var found = false;
  ems.forEach(function(x){
      if(e===x) found=true;
      opts += "<option value='"+x+"' "+(e===x?"selected":"")+">"+x+"</option>";
  });
  if(e && !found) opts += "<option value='"+e+"' selected>"+e+"</option>";
  
  r.innerHTML="<select class='dk-emo' style='width:70px;flex:none;background:rgba(255,255,255,0.05);color:white;border:1px solid rgba(255,255,255,0.15);border-radius:6px;padding:8px;outline:none;cursor:pointer;font-size:15px;text-align:center;'>"+opts+"</select><input type='text' class='dk-nm' placeholder='이름' value='"+(n||"")+"'><input type='text' class='dk-url' placeholder='URL (https://...)' value='"+(u||"")+"'><button class='del-btn'>✕</button>";
  
  r.querySelector(".del-btn").addEventListener("click",function(){r.remove();}); 
  g("dock-rows").appendChild(r);
}

// ===== 👥 명렬 편집 =====
var rosterEditData=null, extEditData=null, rosterGrpIdx=0, extGrpIdx=0;

function initRosterTab(){
  rosterEditData=JSON.parse(JSON.stringify(lsGetJ(getDKey("roster_data"),ROSTER_DATA||[])));
  rosterGrpIdx=0;
  renderRosterGrpBtns(); renderRosterItemRows();
}
function saveCurrentRosterItems(){
  if(!rosterEditData||!rosterEditData[rosterGrpIdx])return;
  var items=[];
  document.querySelectorAll("#roster-item-rows .ri-val").forEach(function(inp){var v=inp.value.trim();if(v)items.push(v);});
  rosterEditData[rosterGrpIdx].items=items;
}
function renderRosterGrpBtns(){
  var c=g("roster-grp-btns"); if(!c)return; c.innerHTML="";
  (rosterEditData||[]).forEach(function(gObj,i){
    var btn=document.createElement("button");
    btn.className="sz-btn"+(i===rosterGrpIdx?" on":"");
    btn.textContent=gObj.group;
    btn.style.cssText="font-size:11px;padding:5px 9px;white-space:nowrap;";
    btn.addEventListener("click",function(){saveCurrentRosterItems();rosterGrpIdx=i;renderRosterGrpBtns();renderRosterItemRows();});
    c.appendChild(btn);
  });
}
function renderRosterItemRows(){
  var grp=rosterEditData&&rosterEditData[rosterGrpIdx];
  if(!grp){if(g("roster-grp-label"))g("roster-grp-label").textContent="";if(g("roster-item-rows"))g("roster-item-rows").innerHTML="";return;}
  g("roster-grp-label").textContent="✏️ "+grp.group+" ("+grp.items.length+"명)";
  var rows=g("roster-item-rows"); rows.innerHTML="";
  grp.items.forEach(function(item){addRosterItemRow(item);});
}
function addRosterItemRow(val){
  var r=document.createElement("div"); r.className="dyn-row";
  var inp=document.createElement("input"); inp.type="text"; inp.className="ri-val"; inp.value=val||""; inp.placeholder="예: 1번 홍길동";
  inp.style.cssText="flex:1;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);border-radius:6px;padding:8px 10px;color:var(--tx);font-size:12px;outline:none;font-family:'Noto Sans KR',sans-serif;";
  inp.addEventListener("focus",function(){this.style.borderColor="var(--ac)";});
  inp.addEventListener("blur",function(){this.style.borderColor="rgba(255,255,255,0.15)";});
  var del=document.createElement("button"); del.className="del-btn"; del.textContent="✕";
  del.addEventListener("click",function(){r.remove();});
  r.appendChild(inp); r.appendChild(del);
  g("roster-item-rows").appendChild(r);
}

// ===== 📞 내선번호 편집 =====
function initExtTab(){
  extEditData=JSON.parse(JSON.stringify(lsGetJ(getDKey("ext_data"),EXT_DATA||[])));
  extGrpIdx=0;
  renderExtGrpBtns(); renderExtItemRows();
}
function saveCurrentExtItems(){
  if(!extEditData||!extEditData[extGrpIdx])return;
  var items=[];
  document.querySelectorAll("#ext-item-rows .ei-val").forEach(function(inp){var v=inp.value.trim();if(v)items.push(v);});
  extEditData[extGrpIdx].items=items;
}
function renderExtGrpBtns(){
  var c=g("ext-grp-btns"); if(!c)return; c.innerHTML="";
  (extEditData||[]).forEach(function(gObj,i){
    var btn=document.createElement("button");
    btn.className="sz-btn"+(i===extGrpIdx?" on":"");
    btn.textContent=gObj.group;
    btn.style.cssText="font-size:11px;padding:5px 9px;white-space:nowrap;";
    btn.addEventListener("click",function(){saveCurrentExtItems();extGrpIdx=i;renderExtGrpBtns();renderExtItemRows();});
    c.appendChild(btn);
  });
}
function renderExtItemRows(){
  var grp=extEditData&&extEditData[extGrpIdx];
  if(!grp){if(g("ext-grp-label"))g("ext-grp-label").textContent="";if(g("ext-item-rows"))g("ext-item-rows").innerHTML="";return;}
  g("ext-grp-label").textContent="✏️ "+grp.group;
  var rows=g("ext-item-rows"); rows.innerHTML="";
  grp.items.forEach(function(item){addExtItemRow(item);});
}
function addExtItemRow(val){
  var r=document.createElement("div"); r.className="dyn-row";
  var inp=document.createElement("input"); inp.type="text"; inp.className="ei-val"; inp.value=val||""; inp.placeholder="예: 홍길동: 501";
  inp.style.cssText="flex:1;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);border-radius:6px;padding:8px 10px;color:var(--tx);font-size:12px;outline:none;font-family:'Noto Sans KR',sans-serif;";
  inp.addEventListener("focus",function(){this.style.borderColor="var(--ac)";});
  inp.addEventListener("blur",function(){this.style.borderColor="rgba(255,255,255,0.15)";});
  var del=document.createElement("button"); del.className="del-btn"; del.textContent="✕";
  del.addEventListener("click",function(){r.remove();});
  r.appendChild(inp); r.appendChild(del);
  g("ext-item-rows").appendChild(r);
}

function saveCfg(){
  lsSet("memo",g("m-memo").value);
  if(g("work-start"))lsSet(getDKey("work_start"),g("work-start").value);
  if(g("work-end"))lsSet(getDKey("work_end"),g("work-end").value);
  var ps=[];document.querySelectorAll(".pr-row").forEach(function(r){var l=r.querySelector(".pr-lbl").value.trim(),s=r.querySelector(".pr-st").value.trim(),e=r.querySelector(".pr-en").value.trim();if(l)ps.push({label:l,start:s,end:e});}); if(ps.length)lsSet(getDKey("periods"),JSON.stringify(ps));
  var cs={};document.querySelectorAll(".sc-row").forEach(function(r){var l=r.querySelector("label").textContent,b=r.querySelector(".sc-color-btn.on");var c=b?b.getAttribute("data-color"):"#B0C4DE";if(l&&c)cs[l]=c;}); lsSet(getDKey("subj_colors"),JSON.stringify(cs));
  lsSet(getDKey("events"),JSON.stringify(cfgEvts.filter(function(i){return i.title.trim()&&i.date.trim();}))); lsSet(getDKey("ddays"),JSON.stringify(cfgDdays.filter(function(i){return i.label.trim()&&i.date.trim();})));
  var fs=[],fiOld=getFolderItems(),fiNew={};document.querySelectorAll(".fr-row").forEach(function(r){var n=r.querySelector(".fr-nm").value.trim(),b=r.querySelector(".sz-btn.on");if(n){var oi=r.getAttribute("data-oidx");if(oi!==null&&fiOld[oi]&&fiOld[oi].length)fiNew[String(fs.length)]=fiOld[oi];fs.push({name:n,size:b?b.getAttribute("data-sz"):"M"});}}); lsSet(getDKey("folders"),JSON.stringify(fs)); setFolderItems(fiNew); // 📁 박스 순서·삭제에 맞춰 등록 항목 인덱스 리매핑
  
  var dk=[]; document.querySelectorAll(".dock-row").forEach(function(r){ var e=r.querySelector(".dk-emo").value.trim(), n=r.querySelector(".dk-nm").value.trim(), u=r.querySelector(".dk-url").value.trim(); if(n && u) dk.push({emo:e, name:n, url:u}); });
  lsSet(getDKey("dockItems"), JSON.stringify(dk));

  if(tempWLoc)lsSet("weatherLoc",JSON.stringify(tempWLoc));else lsSet("weatherLoc",null);

  // 📢 전광판 설정 저장
  if(g("sb-on")) lsSet(getDKey("sb_on"), g("sb-on").classList.contains("on"));
  // 🔥 알림음 설정 저장
  if(g("sb-sound-on")) lsSet(getDKey("sb_sound"), g("sb-sound-on").classList.contains("on"));
  
  if(g("sb-sheet-url")) lsSet(getDKey("sb_url"), g("sb-sheet-url").value.trim());

  var hB=g("font-head-grid")?g("font-head-grid").querySelector(".font-btn.on"):null,bB=g("font-body-grid")?g("font-body-grid").querySelector(".font-btn.on"):null;
  if(hB||bB){var d=THEME_FONTS[theme]||THEME_FONTS[1],cf={head:hB?hB.getAttribute("data-font"):d.head,body:bB?bB.getAttribute("data-font"):d.body};lsSet("customFonts",JSON.stringify(cf));applyFonts(theme,cf.head,cf.body);}
  if(rosterEditData){saveCurrentRosterItems();lsSet(getDKey("roster_data"),JSON.stringify(rosterEditData));}
  if(extEditData){saveCurrentExtItems();lsSet(getDKey("ext_data"),JSON.stringify(extEditData));}
  
  closeCfg(); renderAll(); fetchWeather(); fetchMeal(); 
  fetchSignboard(); // 저장 직후 전광판 새로고침
}

function openTTEdit(){g("tt-page").classList.add("open");var tt=lsGetJ(getDKey("tt_saved"),TIMETABLE);ttEditing=JSON.parse(JSON.stringify(tt));ttEditDay="월";renderTTEditDay();}
function closeTTEdit(){g("tt-page").classList.remove("open");resizeScale();}
function renderTTEditDay(){
  var ps=lsGetJ(getDKey("periods"),DEFAULT_PERIODS),nL=ps.filter(function(p){return p.label!=="점심";}),rs=g("tt-edit-rows");
  document.querySelectorAll(".day-tab").forEach(function(b){b.classList.toggle("on",b.getAttribute("data-day")===ttEditDay);}); rs.innerHTML="";
  nL.forEach(function(p,i){var r=document.createElement("div");r.className="tt-edit-row";var v=(ttEditing[ttEditDay]&&ttEditing[ttEditDay][i])||"";r.innerHTML="<div class='tt-edit-lbl'>"+p.label+"</div><input type='text' class='tt-edit-inp' data-idx='"+i+"' placeholder='과목 입력' value='"+v+"'>";rs.appendChild(r);});
}
function saveTTEditDayInputs(){document.querySelectorAll(".tt-edit-inp").forEach(function(inp){var idx=parseInt(inp.getAttribute("data-idx"));if(!ttEditing[ttEditDay])ttEditing[ttEditDay]=[];ttEditing[ttEditDay][idx]=inp.value.trim()||"-";});}
function saveTTEdit(){saveTTEditDayInputs();lsSet(getDKey("tt_saved"),JSON.stringify(ttEditing));closeTTEdit();renderTT();}

function bindEvents(){
  resizeScale();
  g("cfg-btn").addEventListener("click",openCfg); g("cfg-cancel").addEventListener("click",closeCfg); g("cfg-x-btn").addEventListener("click",closeCfg);
  /* 🤖 AI 비서 이벤트 */
  g("ai-btn").addEventListener("click",openAI); g("ai-x-btn").addEventListener("click",closeAI);
  g("ai-analyze-btn").addEventListener("click",doAIAnalyze);
  g("ai-doc-btn").addEventListener("click",doAIDoc);
  g("ai-doc-copy-btn").addEventListener("click",copyDocResult);
  g("ai-register-btn").addEventListener("click",registerAITodos);
  g("ai-page").addEventListener("click",function(e){if(e.target===this)closeAI();});
  g("ai-check-all").addEventListener("change",function(){var chk=this.checked;document.querySelectorAll("#ai-result-list input[type='checkbox']").forEach(function(c){c.checked=chk;});});
  g("cfg-save").addEventListener("click", saveCfg);

  /* 🖊️ 생기부 도우미 이벤트 */
  if(g("sgb-btn"))g("sgb-btn").addEventListener("click",openSgb);
  if(g("sgb-x-btn"))g("sgb-x-btn").addEventListener("click",closeSgb);
  if(g("sgb-page"))g("sgb-page").addEventListener("click",function(e){if(e.target===this)closeSgb();});
  if(g("sgb-type"))g("sgb-type").addEventListener("change",function(){sgbToggleSubj();sgbUpdateGauge();});
  document.querySelectorAll("#sgb-page .sz-btn[data-tone]").forEach(function(b){b.addEventListener("click",function(){document.querySelectorAll("#sgb-page .sz-btn[data-tone]").forEach(function(x){x.classList.remove("on");});b.classList.add("on");});});
  if(g("sgb-gen"))g("sgb-gen").addEventListener("click",sgbGenerate);
  if(g("sgb-editor"))g("sgb-editor").addEventListener("input",sgbUpdateGauge);
  if(g("sgb-nounize"))g("sgb-nounize").addEventListener("click",sgbNounize);
  if(g("sgb-copy-final"))g("sgb-copy-final").addEventListener("click",function(){sgbCopyText(g("sgb-editor").value,this);});
  if(g("sgb-hist-toggle"))g("sgb-hist-toggle").addEventListener("click",function(){var l=g("sgb-hist-list");var show=l.style.display==="none";l.style.display=show?"block":"none";this.textContent=show?"🕘 최근 생성 기록 ▲":"🕘 최근 생성 기록 ▼";});
  
  // 🔑 API 키 저장 — 즉시 localStorage 저장 후 급식·생기부에 바로 반영
  if(g("api-save-btn"))g("api-save-btn").addEventListener("click",function(){
    var gv=g("api-gem-inp")?g("api-gem-inp").value.trim():"", nv=g("api-neis-inp")?g("api-neis-inp").value.trim():"";
    if(gv)lsSet(getDKey("api_gem"),gv);else lsDel(getDKey("api_gem"));
    if(nv)lsSet(getDKey("api_neis"),nv);else lsDel(getDKey("api_neis"));
    fetchMeal(); // 급식 카드 즉시 갱신
    if(g("sgb-page")&&g("sgb-page").classList.contains("open"))openSgb(); // 생기부 창이 열려있으면 활성 상태 갱신
    var m=g("api-save-msg"); if(m){m.textContent="✅ 저장했어요! 생기부 도우미·AI 비서·급식 정보에 바로 적용됩니다."; setTimeout(function(){m.textContent="";},4000);}
  });
  // 🖊️ 생기부 → API 키 탭 바로가기
  if(g("sgb-goto-key"))g("sgb-goto-key").addEventListener("click",function(){closeSgb();openCfg();switchTab("apikey");});
  // ✨ 애니메이션 효과 토글 — 즉시 저장·즉시 반영
  if(g("fx-on"))g("fx-on").addEventListener("click",function(){this.classList.add("on");g("fx-off").classList.remove("on");lsSet(getDKey("fx"),"true");document.body.classList.remove("no-fx");});
  if(g("fx-off"))g("fx-off").addEventListener("click",function(){this.classList.add("on");g("fx-on").classList.remove("on");lsSet(getDKey("fx"),"false");document.body.classList.add("no-fx");});

  // 전광판 토글 버튼 이벤트 추가
  if(g("sb-on")) g("sb-on").addEventListener("click", function(){ this.classList.add("on"); g("sb-off").classList.remove("on"); });
  if(g("sb-off")) g("sb-off").addEventListener("click", function(){ this.classList.add("on"); g("sb-on").classList.remove("on"); });
  
  // 🔥 알림음 버튼 이벤트 추가 (켜기 버튼 누르면 미리듣기 재생)
  if(g("sb-sound-on")) g("sb-sound-on").addEventListener("click", function(){ this.classList.add("on"); g("sb-sound-off").classList.remove("on"); playDing(); });
  if(g("sb-sound-off")) g("sb-sound-off").addEventListener("click", function(){ this.classList.add("on"); g("sb-sound-on").classList.remove("on"); });

  document.addEventListener("keydown", function(e) { if (e.key === "Escape") { if(g("ai-page")&&g("ai-page").classList.contains("open")) closeAI(); if(g("sgb-page")&&g("sgb-page").classList.contains("open")) closeSgb(); if(g("cfg-page").classList.contains("open")) closeCfg(); if(g("tt-page").classList.contains("open")) closeTTEdit(); } });
  g("cfg-page").addEventListener("click", function(e) { if(e.target === this && e.clientX < this.clientWidth) closeCfg(); });
  g("tt-page").addEventListener("click", function(e) { if(e.target === this && e.clientX < this.clientWidth) closeTTEdit(); });

  g("cal-prev").addEventListener("click",function(){calD.setMonth(calD.getMonth()-1);renderCal();}); g("cal-next").addEventListener("click",function(){calD.setMonth(calD.getMonth()+1);renderCal();}); renderCal();
  document.querySelectorAll(".mtab").forEach(function(btn){btn.addEventListener("click",function(){switchTab(btn.getAttribute("data-tab"));});});
  document.querySelectorAll("#theme-picks .tp").forEach(function(btn){btn.addEventListener("click",function(){var n=parseInt(btn.getAttribute("data-theme"));applyTheme(n);lsSet("customFonts","");applyFonts(n);});});
  document.querySelectorAll("#skin-picks .sp").forEach(function(btn){btn.addEventListener("click",function(){applySkin(btn.getAttribute("data-skin"));});});
  document.querySelectorAll("#layout-picks-dash .lo").forEach(function(btn){btn.addEventListener("click",function(){applyLayout(parseInt(btn.getAttribute("data-layout")));});});
  
  g("add-period-btn").addEventListener("click",function(){addPeriodRow("","","");}); g("add-folder-btn").addEventListener("click",function(){addFolderRow("","M");});
  g("add-dock-btn").addEventListener("click", function(){ addDockRow("🔗","",""); });

  // 🍱 급식 끼니 체크박스 — 변경 즉시 저장 + 리렌더
  ["1","2","3"].forEach(function(c){
    var el=g("meal-t-"+c); if(!el)return;
    el.addEventListener("change",function(){
      var t=[]; ["1","2","3"].forEach(function(k){var e2=g("meal-t-"+k);if(e2&&e2.checked)t.push(k);});
      lsSet(getDKey("meal_types"),JSON.stringify(t)); fetchMeal();
    });
  });

  // 🧩 위젯 위치 교환 / 배치 초기화
  if(g("wg-swap-btn"))g("wg-swap-btn").addEventListener("click",function(){
    var a=g("wg-swap-a").value, b=g("wg-swap-b").value;
    if(a===b){g("wg-swap-log").textContent="⚠️ 같은 위젯끼리는 바꿀 수 없습니다. 서로 다른 위젯을 선택하세요.";return;}
    var swaps=lsGetJ(getDKey("wg_swaps"),[]); swaps.push([a,b]);
    lsSet(getDKey("wg_swaps"),JSON.stringify(swaps));
    applyWidgetLayout(); renderSwapLog();
  });
  if(g("wg-reset-btn"))g("wg-reset-btn").addEventListener("click",function(){
    lsSet(getDKey("wg_swaps"),"[]"); lsSet(getDKey("wg_hidden"),"[]");
    lsDel(getDKey("free_layout")); // 🧩 자유배치도 함께 초기화
    applyWidgetLayout(); renderWidgetTab(); renderCalCfgTab(); renderCalCard();
  });

  // 🧩 바탕화면 직접 편집 모드 진입 버튼
  if(g("edit-btn"))g("edit-btn").addEventListener("click",function(){if(!editMode)enterEditMode();});
  if(g("wg-free-edit-btn"))g("wg-free-edit-btn").addEventListener("click",function(){closeCfg();if(!editMode)enterEditMode();});

  // 📅 달력 카드 내비게이션 + 날짜 클릭(위임)
  if(g("calc-prev"))g("calc-prev").addEventListener("click",function(){calCardD.setMonth(calCardD.getMonth()-1);renderCalCard();});
  if(g("calc-next"))g("calc-next").addEventListener("click",function(){calCardD.setMonth(calCardD.getMonth()+1);renderCalCard();});
  if(g("calc-grid"))g("calc-grid").addEventListener("click",function(e){
    var el=e.target, grid=this;
    while(el&&el!==grid&&!(el.getAttribute&&el.getAttribute("data-d")))el=el.parentNode;
    if(el&&el!==grid&&el.getAttribute&&el.getAttribute("data-d"))openCalDayPopup(el.getAttribute("data-d"));
  });

  // 📅 달력 설정 탭 — 변경 즉시 저장·리렌더
  if(g("cal-show-on"))g("cal-show-on").addEventListener("click",function(){setCalShown(true);});
  if(g("cal-show-off"))g("cal-show-off").addEventListener("click",function(){setCalShown(false);});
  if(g("cal-ws-sun"))g("cal-ws-sun").addEventListener("click",function(){saveCalCfg({weekStart:0});renderCalCfgTab();});
  if(g("cal-ws-mon"))g("cal-ws-mon").addEventListener("click",function(){saveCalCfg({weekStart:1});renderCalCfgTab();});
  if(g("cal-sch-on"))g("cal-sch-on").addEventListener("click",function(){saveCalCfg({showSchool:true});renderCalCfgTab();});
  if(g("cal-sch-off"))g("cal-sch-off").addEventListener("click",function(){saveCalCfg({showSchool:false});renderCalCfgTab();});
  if(g("cal-fade-on"))g("cal-fade-on").addEventListener("click",function(){saveCalCfg({fadePast:true});renderCalCfgTab();});
  if(g("cal-fade-off"))g("cal-fade-off").addEventListener("click",function(){saveCalCfg({fadePast:false});renderCalCfgTab();});

  g("btn-auto-period").addEventListener("click",function(){
     var sS=g("auto-p-start").value.trim()||"08:50",dur=parseInt(g("auto-p-dur").value)||45,brk=parseInt(g("auto-p-break").value)||10,lun=parseInt(g("auto-p-lunch").value)||60;
     var pts=sS.split(":"),cM=parseInt(pts[0])*60+parseInt(pts[1]),nP=[];
     for(var i=1;i<=7;i++){
        var st=pad(Math.floor(cM/60))+":"+pad(cM%60); cM+=dur; var en=pad(Math.floor(cM/60))+":"+pad(cM%60); nP.push({label:i+"교시",start:st,end:en});
        if(i===4){var lS=pad(Math.floor(cM/60))+":"+pad(cM%60); cM+=lun; var lE=pad(Math.floor(cM/60))+":"+pad(cM%60); nP.push({label:"점심",start:lS,end:lE});}else if(i<7){cM+=brk;}
     }
     g("period-rows").innerHTML=""; nP.forEach(function(p){addPeriodRow(p.label,p.start,p.end);});
     // 즉시 localStorage에 저장 (닫기 버튼으로 나가도 유지)
     lsSet(getDKey("periods"),JSON.stringify(nP));
     if(g("work-start")&&g("work-start").value) lsSet(getDKey("work_start"),g("work-start").value);
     if(g("work-end")&&g("work-end").value) lsSet(getDKey("work_end"),g("work-end").value);
     var b=g("btn-auto-period"),o=b.textContent; b.textContent="✅ 저장 완료!"; b.style.background="rgba(16,185,129,0.15)"; b.style.color="var(--green)";
     setTimeout(function(){b.textContent=o;b.style.background="";b.style.color="";},2000);
  });

  g("w-loc-btn").addEventListener("click",function(){
     var q=g("w-loc-q").value.trim();if(!q)return;
     var res=g("w-loc-res");res.innerHTML="<div style='padding:10px;font-size:12px;color:var(--tx2);'>검색 중...</div>";
     fetch("https://nominatim.openstreetmap.org/search?q="+encodeURIComponent(q)+"&countrycodes=kr&format=json&limit=10&accept-language=ko",{headers:{"User-Agent":"TeacherDashboard/1.0"}})
     .then(function(r){return r.json();}).then(function(d){
          if(!d||d.length===0){res.innerHTML="<div style='padding:10px;font-size:12px;color:#ef4444;'>결과 없음 — 더 구체적으로 입력해보세요 (예: 군산시, 강남구, 화전동)</div>";return;}
          res.innerHTML="";
          d.forEach(function(i){
              var div=document.createElement("div");
              div.style.padding="10px";div.style.borderBottom="1px solid rgba(255,255,255,0.05)";div.style.cursor="pointer";div.style.fontSize="13px";
              var parts=i.display_name.split(",");
              var shortName=parts.slice(0,3).join(",").trim();
              var firstName=parts[0].trim();
              div.textContent="📍 "+shortName;
              div.addEventListener("click",function(){
                  tempWLoc={name:firstName,lat:parseFloat(i.lat),lon:parseFloat(i.lon)};
                  g("w-loc-q").value=firstName;
                  g("w-loc-sel").textContent="선택: "+shortName+" (저장 시 적용됨)";
                  res.innerHTML="";
              });
              div.addEventListener("mouseover",function(){this.style.background="rgba(255,255,255,0.05)";});
              div.addEventListener("mouseout",function(){this.style.background="transparent";});
              res.appendChild(div);
          });
     }).catch(function(){res.innerHTML="<div style='padding:10px;font-size:12px;color:#ef4444;'>오류 발생 — 잠시 후 다시 시도해주세요</div>";});
  });
  g("w-loc-q").addEventListener("keydown",function(e){if(e.key==="Enter")g("w-loc-btn").click();});
  g("w-loc-clear").addEventListener("click",function(){tempWLoc=null;g("w-loc-q").value="";g("w-loc-sel").textContent="현재 고정: 없음 (자동)";});

  g("ev-pg-prev").addEventListener("click",function(){evPage--;renderEventRowsPaging();}); g("ev-pg-next").addEventListener("click",function(){evPage++;renderEventRowsPaging();});
  g("add-event-btn").addEventListener("click",function(){cfgEvts.push({title:"",date:""});evPage=Math.ceil(cfgEvts.length/evLimit);renderEventRowsPaging();});
  g("dd-pg-prev").addEventListener("click",function(){ddPage--;renderDdayRowsPaging();}); g("dd-pg-next").addEventListener("click",function(){ddPage++;renderDdayRowsPaging();});
  g("add-dday-btn").addEventListener("click",function(){cfgDdays.push({label:"",date:""});ddPage=Math.ceil(cfgDdays.length/ddLimit);renderDdayRowsPaging();});

  g("ev-w").addEventListener("click",function(){evRange="week";evOff=0;g("ev-w").classList.add("on");g("ev-m").classList.remove("on");renderEvents();});
  g("ev-m").addEventListener("click",function(){evRange="month";evOff=0;g("ev-m").classList.add("on");g("ev-w").classList.remove("on");renderEvents();});
  g("ev-prev").addEventListener("click",function(){evOff--;renderEvents();}); g("ev-next").addEventListener("click",function(){evOff++;renderEvents();});
  g("meal-prev").addEventListener("click",function(){mealOff--;fetchMeal();}); g("meal-next").addEventListener("click",function(){mealOff++;fetchMeal();});
  
  g("timer-add-5").addEventListener("click",function(){tTotal+=5*60; if(tRun){tTarget = Date.now() + tTotal*1000;} renderTimer();}); 
  g("timer-reset").addEventListener("click",function(){tTotal=0; tRun=false; tTarget=0; g("timer-toggle").textContent="▶"; renderTimer();}); 
  g("timer-toggle").addEventListener("click",toggleTimer);
  
  g("c-todo-add").addEventListener("click", addTodoCfg);
  g("c-todo-inp").addEventListener("keydown", function(e){ if(e.key==="Enter") addTodoCfg(); });

  g("tt-edit-btn").addEventListener("click",openTTEdit); g("tt-cancel").addEventListener("click",closeTTEdit); g("tt-x-btn").addEventListener("click",closeTTEdit);
  g("tt-save").addEventListener("click", saveTTEdit); 
  document.querySelectorAll(".day-tab").forEach(function(btn){btn.addEventListener("click",function(){saveTTEditDayInputs();ttEditDay=btn.getAttribute("data-day");renderTTEditDay();});});

  // 👥 명렬 버튼 이벤트
  g("add-roster-item-btn").addEventListener("click",function(){addRosterItemRow("");});
  g("add-roster-grp-btn").addEventListener("click",function(){
    saveCurrentRosterItems();
    customPrompt("새 반(그룹) 이름을 입력하세요:", function(name){
      if(!name||!name.trim())return;
      if(!rosterEditData)rosterEditData=[];
      rosterEditData.push({group:name.trim(),items:[]});
      rosterGrpIdx=rosterEditData.length-1;
      renderRosterGrpBtns(); renderRosterItemRows();
    });
  });
  g("del-roster-grp-btn").addEventListener("click",function(){
    if(!rosterEditData||!rosterEditData.length)return;
    customConfirm('"'+rosterEditData[rosterGrpIdx].group+'" 반을 삭제할까요?', function(){
      rosterEditData.splice(rosterGrpIdx,1);
      if(rosterGrpIdx>=rosterEditData.length)rosterGrpIdx=Math.max(0,rosterEditData.length-1);
      renderRosterGrpBtns(); renderRosterItemRows();
    });
  });
  // 📞 내선번호 버튼 이벤트
  g("add-ext-item-btn").addEventListener("click",function(){addExtItemRow("");});
  g("add-ext-grp-btn").addEventListener("click",function(){
    saveCurrentExtItems();
    customPrompt("새 그룹 이름을 입력하세요:", function(name){
      if(!name||!name.trim())return;
      if(!extEditData)extEditData=[];
      extEditData.push({group:name.trim(),items:[]});
      extGrpIdx=extEditData.length-1;
      renderExtGrpBtns(); renderExtItemRows();
    });
  });
  g("del-ext-grp-btn").addEventListener("click",function(){
    if(!extEditData||!extEditData.length)return;
    customConfirm('"'+extEditData[extGrpIdx].group+'" 그룹을 삭제할까요?', function(){
      extEditData.splice(extGrpIdx,1);
      if(extGrpIdx>=extEditData.length)extGrpIdx=Math.max(0,extEditData.length-1);
      renderExtGrpBtns(); renderExtItemRows();
    });
  });

  document.querySelectorAll('.cal-wrap').forEach(function(wrap) {
    var btn = wrap.querySelector('.cfg-btn');
    var popup = wrap.querySelector('.cal-popup, .popup-mega');
    if(btn && popup) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelectorAll('.cal-popup.show, .popup-mega.show').forEach(function(p) {
          if(p !== popup) p.classList.remove('show');
        });
        popup.classList.toggle('show');
      });
      popup.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  });
  document.addEventListener('click', function() {
    document.querySelectorAll('.cal-popup.show, .popup-mega.show').forEach(function(p) {
      p.classList.remove('show');
    });
    if(fanState)closeFan(); // 📁 바깥 클릭 시 폴더 팬아웃 역방향 수납
  });
  // 📁 창 전체의 기본 파일 열기(드롭 시 브라우저/웹뷰가 파일을 열어버리는 것) 차단 — 필수
  document.addEventListener('dragover', function(e){ e.preventDefault(); });
  document.addEventListener('drop', function(e){ e.preventDefault(); });
}

function renderAll(){renderTT();renderEvents();renderDday();renderMemo();renderFolders();renderTodos();renderPopups();renderDock();renderCal();renderCalCard();}
function init(){
  // 📅 달력 카드는 v1.4.0부터 기본 표시 (숨김 시드 제거 — 시드 플래그만 기록해 호환 유지)
  if(!lsGet(getDKey("cal_seeded")))lsSet(getDKey("cal_seeded"),"1");
  applyTheme(theme);applySkin(skin);applyLayout(layout);applyFonts(theme);
  // ✨ 애니메이션 효과 상태 적용 (기본 켬) — 켜져 있으면 1회성 카드 스태거 등장
  if(lsGetJ(getDKey("fx"),true)===false){document.body.classList.add("no-fx");}
  else{document.body.classList.add("fx-in");setTimeout(function(){document.body.classList.remove("fx-in");},700);}
  bindEvents();
  tick();renderAll();
  fetchWeather();fetchMeal();fetchSignboard(); // 📢 초기 로딩 시 전광판 가져오기
  
  setInterval(tick,1000);
  setInterval(fetchSignboard, 15000); // 📢 15초마다 초고속 실시간 전광판 새로고침!
  setInterval(renderTT,60000);
  setInterval(fetchWeather,1800000);
  setInterval(fetchMeal,3600000);
}
init();
