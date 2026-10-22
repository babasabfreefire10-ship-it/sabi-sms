```javascript

const HTML_LOGIN = `<!DOCTYPE html>

<html lang="sq">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>SABI-SMS</title>

<style>

*{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',system-ui,sans-serif}

body{background:#0a0a0f;color:#e4e4e7;min-height:100vh;display:flex;align-items:center;justify-content:center}

.box{background:#13131a;border:1px solid #27272a;border-radius:20px;padding:48px;width:90%;max-width:420px;text-align:center}

.logo{width:80px;height:80px;margin:0 auto 20px;border-radius:20px;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:40px}

.box h1{font-size:26px;margin-bottom:8px;background:linear-gradient(135deg,#6366f1,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}

.box p{color:#71717a;margin-bottom:28px}

input{width:100%;background:#0a0a0f;border:1px solid #27272a;border-radius:12px;padding:14px 18px;color:#e4e4e7;font-size:16px;outline:none;text-align:center}

input:focus{border-color:#6366f1;box-shadow:0 0 0 3px rgba(99,102,241,.15)}

button{cursor:pointer;border:none;border-radius:12px;padding:14px;width:100%;font-size:16px;font-weight:600;margin-top:16px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff}

button:hover{opacity:.9;transform:translateY(-1px)}

</style>

</head>

<body>

<div class="box">

<div class="logo">📱</div>

<h1>SABI-SMS</h1>

<p>Fut fjalëkalimin për të hyrë</p>

<form method="POST" action="/login">

<input type="password" name="password" placeholder="••••••••" autofocus>

<button type="submit">Hyr</button>

</form>

</div>

</body>

</html>`;

function HTML_APP(token) {

return `<!DOCTYPE html>

<html lang="sq">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>SABI-SMS</title>

<style>

:root{--bg:#0a0a0f;--card:#13131a;--accent:#6366f1;--accent2:#8b5cf6;--text:#e4e4e7;--muted:#71717a;--border:#27272a;--success:#22c55e;--error:#ef4444;--warn:#f59e0b}

*{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',system-ui,sans-serif}

body{background:var(--bg);color:var(--text);min-height:100vh}

.nav{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;border-bottom:1px solid var(--border);background:var(--card);position:sticky;top:0;z-index:100}

.nav-brand{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:700;background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}

.nav-logo{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;font-size:20px}

.nav-links{display:flex;gap:8px;flex-wrap:wrap}

.nav-btn{background:transparent;border:1px solid var(--border);color:var(--muted);padding:8px 16px;border-radius:8px;font-size:14px;cursor:pointer}

.nav-btn.active{background:var(--accent);color:#fff;border-color:var(--accent)}

.container{max-width:900px;margin:0 auto;padding:24px}

.card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;margin-bottom:20px}

.card h2{font-size:18px;margin-bottom:16px}

label{display:block;font-size:13px;color:var(--muted);margin-bottom:6px;margin-top:14px}

input,textarea{width:100%;background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:12px 16px;color:var(--text);font-size:15px;outline:none}

input:focus,textarea:focus{border-color:var(--accent)}

textarea{resize:vertical;min-height:80px}

.btn{cursor:pointer;border:none;border-radius:10px;padding:12px 24px;font-size:15px;font-weight:600;background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;width:100%}

.btn:hover{opacity:.9}

.btn:disabled{opacity:.5}

.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px}

.stat{background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:16px;text-align:center}

.stat-num{font-size:26px;font-weight:700}

.stat-label{font-size:11px;color:var(--muted);margin-top:4px}

.hi{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:10px;display:flex;justify-content:space-between}

.hi-info{flex:1}

.hi-phone{font-weight:600;font-size:14px}

.hi-msg{font-size:13px;color:var(--muted);margin-top:4px}

.hi-time{font-size:12px;color:var(--muted);white-space:nowrap;margin-left:12px}

.badge{display:inline-block;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:600}

.b-s{background:rgba(34,197,94,.15);color:var(--success)}

.b-e{background:rgba(239,68,68,.15);color:var(--error)}

.chip{display:inline-block;background:var(--bg);border:1px solid var(--border);border-radius:20px;padding:6px 14px;font-size:13px;cursor:pointer;margin:4px}

.chip:hover{border-color:var(--accent);color:var(--accent)}

.empty{text-align:center;color:var(--muted);padding:40px}

.cc{font-size:12px;color:var(--muted);text-align:right;margin-top:4px}

#result{margin-top:16px;padding:14px;border-radius:10px;display:none;font-size:14px}

.r-ok{background:rgba(34,197,94,.1);color:var(--success);border:1px solid rgba(34,197,94,.3)}

.r-err{background:rgba(239,68,68,.1);color:var(--error);border:1px solid rgba(239,68,68,.3)}

</style>

</head>

<body>

<nav class="nav">

<div style="display:flex;align-items:center;gap:10px">

<div class="nav-logo">📱</div>

<span class="nav-brand">SABI-SMS</span>

</div>

<div class="nav-links">

<button class="nav-btn active" onclick="show('send')">Dërgo</button>

<button class="nav-btn" onclick="show('history')">Historiku</button>

<button class="nav-btn" onclick="show('dash')">Dashboard</button>

<button class="nav-btn" onclick="location.href='/logout'">Dil</button>

</div>

</nav>

<div class="container">

<div id="send">

<div class="card">

<h2>📨 Dërgo SMS</h2>

<label>Numri i telefonit</label>

<input type="text" id="phone" placeholder="+355691234567">

<label>Shumë numra (një për rresht)</label>

<textarea id="phones" placeholder="+355691234567&#10;+355692345678" style="min-height:50px"></textarea>

<label>Mesazhi</label>

<textarea id="msg" placeholder="Shkruaj mesazhin..." oninput="cc()"></textarea>

<div class="cc"><span id="cnt">0</span>/160</div>

<label>Templates</label>

<div>

<span class="chip" onclick="tpl('Pershendetje!')">👋 Përshëndetje</span>

<span class="chip" onclick="tpl('Kujdes! Mos harro takimin.')">⏰ Kujtues</span>

<span class="chip" onclick="tpl('Faleminderit!')">🤝 Falënderim</span>

</div>

<button class="btn" id="sbtn" style="margin-top:20px" onclick="send()">Dërgo SMS</button>

<div id="result"></div>

</div>

</div>

<div id="history" style="display:none">

<div class="card">

<h2>📋 Historiku</h2>

<div id="hlist"><div class="empty">Ngarkohet...</div></div>

</div>

</div>

<div id="dash" style="display:none">

<div class="card">

<h2>📊 Dashboard</h2>

<div class="stats" id="sg"></div>

</div>

</div>

</div>

</div>

<script>

const T="${token}";

function show(t){document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));event.target.classList.add('active');document.getElementById('send').style.display=t==='send'?'block':'none';document.getElementById('history').style.display=t==='history'?'block':'none';document.getElementById('dash').style.display=t==='dash'?'block':'none';if(t==='history')loadH();if(t==='dash')loadD();}

function tpl(m){document.getElementById('msg').value=m;cc();}

function cc(){document.getElementById('cnt').textContent=document.getElementById('msg').value.length;}

function showR(msg,ok){const r=document.getElementById('result');r.className=ok?'r-ok':'r-err';r.style.display='block';r.textContent=msg;setTimeout(()=>r.style.display='none',5000);}

async function send(){

const ph=document.getElementById('phone').value.trim();

const pht=document.getElementById('phones').value.trim();

const m=document.getElementById('msg').value.trim();

if(!m){showR('Shkruaj mesazhin!',false);return;}

let ps=[];

if(pht)ps=pht.split('\\n').map(p=>p.trim()).filter(p=>p);

if(ph)ps.unshift(ph);

if(!ps.length){showR('Vendos numër!',false);return;}

document.getElementById('sbtn').disabled=true;

document.getElementById('sbtn').textContent='Duke dërguar...';

try{

const res=await fetch('/api/send',{method:'POST',headers:{'Content-Type':'application/json','X-Token':T},body:JSON.stringify({phones:ps,message:m})});

const d=await res.json();

if(d.results){

const s=d.results.filter(r=>r.success).length;

const f=d.results.filter(r=>!r.success).length;

showR(s+' SMS u dërguan'+(f?', '+f+' dështuan':''),f===0);

if(f===0){document.getElementById('phone').value='';document.getElementById('phones').value='';document.getElementById('msg').value='';cc();}

loadH();

}else{showR(d.error||'Gabim!',false);}

}catch(e){showR('Gabim në rrjet!',false);}

document.getElementById('sbtn').disabled=false;

document.getElementById('sbtn').textContent='Dërgo SMS';

}

async function loadH(){

try{

const res=await fetch('/api/history',{headers:{'X-Token':T}});

const d=await res.json();

const l=document.getElementById('hlist');

if(!d.history||!d.history.length){l.innerHTML='<div class="empty">Nuk ka SMS ende</div>';return;}

l.innerHTML=d.history.map(h=>'<div class="hi"><div class="hi-info"><div class="hi-phone">'+h.phone+' <span class="badge '+(h.success?'b-s':'b-e')+'">'+(h.success?'✓':'✕')+'</span></div><div class="hi-msg">'+h.message+'</div></div><div class="hi-time">'+new Date(h.timestamp).toLocaleString('sq-AL')+'</div></div>').join('');

}catch(e){document.getElementById('hlist').innerHTML='<div class="empty">Gabim</div>';}

}

async function loadD(){

try{

const res=await fetch('/api/stats',{headers:{'X-Token':T}});

const d=await res.json();

document.getElementById('sg').innerHTML='<div class="stat"><div class="stat-num" style="color:var(--accent)">'+d.total+'</div><div class="stat-label">Gjithsej</div></div><div class="stat"><div class="stat-num" style="color:var(--success)">'+d.success+'</div><div class="stat-label">Sukses</div></div><div class="stat"><div class="stat-num" style="color:var(--error)">'+d.failed+'</div><div class="stat-label">Dështuar</div></div><div class="stat"><div class="stat-num" style="color:var(--warn)">'+d.today+'</div><div class="stat-label">Sot</div></div><div class="stat"><div class="stat-num" style="color:var(--accent2)">'+d.recipients+'</div><div class="stat-label">Numra</div></div>';

}catch(e){document.getElementById('sg').innerHTML='<div class="empty">Gabim</div>';}

}

loadH();

</script>

</body>

</html>`;

}

export default {

  async fetch(request, env) {

    const url = new URL(request.url);

    const path = url.pathname;

    if (path === '/' && request.method === 'GET') {

      return new Response(HTML_LOGIN, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });

    }

    if (path === '/login' && request.method === 'POST') {

      const formData = await request.formData();

      const password = formData.get('password');

      if (password === env.APP_PASSWORD) {

        const token = btoa(env.APP_PASSWORD + ':' + Date.now());

        return new Response(HTML_APP(token), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });

      }

      return new Response(HTML_LOGIN, { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 401 });

    }

    if (path === '/logout') {

      return Response.redirect(new URL('/', request.url).toString(), 302);

    }

    if (path === '/api/send' && request.method === 'POST') return handleSend(request, env);

    if (path === '/api/history' && request.method === 'GET') return handleHistory(request, env);

    if (path === '/api/stats' && request.method === 'GET') return handleStats(request, env);

    return new Response('Not Found', { status: 404 });

  }

};

function authOk(request, env) {

  const token = request.headers.get('X-Token') || '';

  try { return atob(token).startsWith(env.APP_PASSWORD + ':'); } catch { return false; }

}

async function handleSend(request, env) {

  if (!authOk(request, env)) return jsonResponse({ error: 'Pa autorizim' }, 401);

  const { phones, message } = await request.json();

  if (!phones || !Array.isArray(phones) || !phones.length) return jsonResponse({ error: 'Numra mungojnë' }, 400);

  if (!message || message.length > 160) return jsonResponse({ error: 'Mesazh i pavlefshëm' }, 400);

  const results = [];

  for (const phone of phones) {

    try {

      const res = await fetch('https://textbelt.com/text', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone, message, key: 'textbelt' }) });

      const data = await res.json();

      results.push({ phone, success: data.success === true });

      await env.SMS_HISTORY.put('sms:' + Date.now() + ':' + Math.random().toString(36).slice(2,8), JSON.stringify({ phone, message, success: data.success === true, timestamp: Date.now() }));

    } catch (err) { results.push({ phone, success: false }); }

  }

  return jsonResponse({ results });

}

async function handleHistory(request, env) {

  if (!authOk(request, env)) return jsonResponse({ error: 'Pa autorizim' }, 401);

  const list = await env.SMS_HISTORY.list({ limit: 100 });

  const history = [];

  for (const key of list.keys.reverse()) { const v = await env.SMS_HISTORY.get(key.name); if (v) history.push(JSON.parse(v)); }

  return jsonResponse({ history });

}

async function handleStats(request, env) {

  if (!authOk(request, env)) return jsonResponse({ error: 'Pa autorizim' }, 401);

  const list = await env.SMS_HISTORY.list({ limit: 1000 });

  let total=0, success=0, failed=0, today=0; const recipients=new Set();

  const now=new Date();

  for (const key of list.keys) {

    const v = await env.SMS_HISTORY.get(key.name); if (!v) continue;

    const e = JSON.parse(v); total++;

    if (e.success) success++; else failed++;

    recipients.add(e.phone);

    if (new Date(e.timestamp).toDateString()===now.toDateString()) today++;

  }

  return jsonResponse({ total, success, failed, today, recipients: recipients.size });

}

function jsonResponse(data, status=200) { return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } }); }

```
