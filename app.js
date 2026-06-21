(() => {
  "use strict";
  // 영어 앱이나 같은 GitHub Pages 계정의 다른 앱과 겹치지 않는 전용 저장 키입니다.
  const KEY = "favorite-card-battle-lab-ko-family-v2";
  const TYPES = ["Shadow","Speed","Monster","Mystery","Tech","Brain","Builder","Funny","Detective","Glitch"];
  const PACKS = [
    {id:"doors",name:"DOORS Original Character Pack",icon:"👁️",color:"#7b4cff",blurb:"DOORS 대표 엔티티 10종 · 전 카드 일러스트",source:"Roblox DOORS",fan:true,names:["Seek","Figure","Rush","Screech","Eyes","Halt","Ambush","Timothy","Jack","Guiding Light"],types:["Shadow","Monster"]},
    {id:"scp",name:"SCP Character Files Pack",icon:"◉",color:"#d7b267",blurb:"대표 SCP 10종 · 어린이용 비유혈 팬아트",source:"SCP Foundation",fan:true,names:["SCP-173","SCP-096","SCP-999","SCP-049","SCP-131","SCP-682","SCP-3008-2","SCP-2295","SCP-529","SCP-1762"],types:["Mystery","Monster"]},
    {id:"brainrot",name:"Brainrot Original Legends Pack",icon:"🌀",color:"#ff5e93",blurb:"유명 브레인랏 캐릭터 10종 · 전 카드 일러스트",source:"Internet Brainrot",fan:true,names:["Tralalero Tralala","Bombardiro Crocodilo","Ballerina Cappuccina","Tung Tung Tung Sahur","Cappuccino Assassino","Lirili Larila","Chimpanzini Bananini","Bombombini Gusini","Brr Brr Patapim","La Vaca Saturno Saturnita"],types:["Funny","Glitch"]}
  ];
  const RULES = [
    {name:"Speed Race",stat:"speed",bonus:"Speed"},{name:"Dark Hallway",stat:"power",bonus:"Shadow"},{name:"Puzzle Room",stat:"brain",bonus:"Brain"},{name:"Secret File Test",stat:"brain",bonus:"Mystery"},{name:"Chase Round",stat:"speed",bonus:"Monster"},{name:"Detective Round",stat:"brain",bonus:"Detective"},{name:"Build Defense",stat:"shield",bonus:"Builder"},{name:"Glitch Zone",stat:"brain",bonus:"Glitch"},{name:"Funny Meme Battle",stat:"speed",bonus:"Funny"},{name:"Boss Door",stat:"power",bonus:"Monster"},{name:"Quiet Room",stat:"brain",bonus:"Mystery"},{name:"Bright Light Room",stat:"shield",bonus:"Tech"}
  ];
  const ART = {
    "Seek":"assets/seek-v2.webp","Shy Guy":"assets/scp-096-v2.webp","Figure":"assets/doors-figure.webp","Rush":"assets/doors-rush-v2.webp","Screech":"assets/doors-screech.webp",
    "Eyes":"assets/doors-eyes.webp","Halt":"assets/doors-halt.webp","Ambush":"assets/doors-ambush.webp","Timothy":"assets/doors-timothy.webp","Jack":"assets/doors-jack.webp","Guiding Light":"assets/doors-guiding-light.webp",
    "SCP-173":"assets/scp-173-v2.webp","SCP-096":"assets/scp-096-v2.webp","SCP-999":"assets/scp-999.webp","SCP-049":"assets/scp-049.webp","SCP-131":"assets/scp-131.webp","SCP-682":"assets/scp-682.webp","SCP-3008-2":"assets/scp-3008-2.webp","SCP-2295":"assets/scp-2295.webp","SCP-529":"assets/scp-529.webp","SCP-1762":"assets/scp-1762.webp",
    "Tralalero Tralala":"assets/brainrot-tralalero-v2.webp","Bombardiro Crocodilo":"assets/brainrot-bombardiro.webp","Ballerina Cappuccina":"assets/brainrot-ballerina.webp","Tung Tung Tung Sahur":"assets/brainrot-tung-tung-v2.webp","Cappuccino Assassino":"assets/brainrot-cappuccino.webp","Lirili Larila":"assets/brainrot-lirili.webp","Chimpanzini Bananini":"assets/brainrot-chimpanzini.webp","Bombombini Gusini":"assets/brainrot-bombombini.webp","Brr Brr Patapim":"assets/brainrot-patapim.webp","La Vaca Saturno Saturnita":"assets/brainrot-vaca-saturno.webp"
  };
  const FAN_DETAILS = {
    "Seek":["Hallway Rush","Eye Trail","Bright Puzzle Room","You cannot hide forever."],
    "Figure":["Sound Hunt","Library Echo","Silent Sneak","I hear every step."],
    "Rush":["Lights Flicker","Hallway Sweep","Safe Wardrobe","Ready or not—whoosh!"],
    "Screech":["Psst Surprise","Dark Corner","Quick Look","Psst! Found you!"],
    "Eyes":["Many-Eye Glow","Staring Field","Look Away","Eyes everywhere!"],
    "Halt":["Turn Around","Blue Corridor","Follow the Signal","Go back!"],
    "Ambush":["Rebound Rush","Double Return","Patient Hiding","I'm coming back!"],
    "Timothy":["Drawer Pop","Tiny Scuttle","Open Carefully","Tiny but surprising!"],
    "Jack":["Room Surprise","Closet Trick","Calm Explorer","Wrong room!"],
    "Guiding Light":["Helpful Glow","Puzzle Hint","Deep Darkness","Follow my light."],
    "SCP-173":["Blink Step","Statue Still","Team Watching","Don't blink—solve it!"],
    "SCP-096":["Shy Shield","Quiet Dash","Calm Room","Please look away."],
    "SCP-999":["Joy Bounce","Tickle Wave","Cold Silence","Happiness incoming!"],
    "SCP-049":["Mystery Diagnosis","Potion Study","Bright Laughter","I have a curious theory."],
    "SCP-131":["Eye Pod Scout","Friendly Roll","Tall Stairs","We'll keep watch!"],
    "SCP-682":["Adapt Armor","Reptile Roar","Teamwork Puzzle","I always adapt."],
    "SCP-3008-2":["Endless Aisle","Closing Time","Daylight Exit","The store is now closed."],
    "SCP-2295":["Patchwork Fix","Bear Hug Shield","Missing Thread","I can repair that."],
    "SCP-529":["Half-Cat Hop","Josie Purr","High Shelf","Half a cat, full courage!"],
    "SCP-1762":["Paper Dragon","Here Be Magic","Wet Paper","The dragons are back!"],
    "Tralalero Tralala":["Triple Sneaker Sprint","Shark Song","Tangled Laces","Tralalero, let's go!"],
    "Bombardiro Crocodilo":["Crocodile Cruise","Sky Loop","Soft Cloud","Crocodilo on patrol!"],
    "Ballerina Cappuccina":["Foam Pirouette","Café Spotlight","Wobbly Saucer","Dance to the last drop!"],
    "Tung Tung Tung Sahur":["Dawn Rhythm","Tung Beat","Quiet Cushion","Tung tung—wake up!"],
    "Cappuccino Assassino":["Espresso Dash","Cup Spin","Decaf Zone","Fast, foamy, focused!"],
    "Lirili Larila":["Cactus Clock","Desert Drift","Rainy Day","Lirili, time to wander!"],
    "Chimpanzini Bananini":["Banana Boogie","Jungle Joke","Empty Peel","Banana power!"],
    "Bombombini Gusini":["Goose Jet","Feather Formation","Strong Headwind","Gusini takes flight!"],
    "Brr Brr Patapim":["Forest Stomp","Patapim Echo","Smooth Floor","Brr brr—here I come!"],
    "La Vaca Saturno Saturnita":["Saturn Ring","Cosmic Moo","Tiny Door","Moo to the moon!" ]
  };
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const esc = value => String(value ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  const uid = () => `card-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;
  const safeImage = src => typeof src === "string" && (/^assets\/[\w.-]+$/.test(src) || /^data:image\/(png|jpeg|webp);base64,/.test(src)) ? src : "";
  const today = () => new Date().toISOString().slice(0,10);

  function normalCard(pack, name, index, globalIndex) {
    const rarityCycle = ["Common","Common","Uncommon","Common","Rare","Uncommon","Rare","Epic","Uncommon","Mythic"];
    const primary = pack.types[index % 2], secondary = TYPES[(globalIndex * 3 + index) % TYPES.length];
    const rarity = rarityCycle[index], bump = ["Rare","Epic","Mythic"].includes(rarity) ? 2 : 0;
    const fan = FAN_DETAILS[name];
    return {id:`${pack.id}-${index}`,name,source:pack.source,pack:pack.name,rarity,type1:primary,type2:secondary===primary?"Brain":secondary,power:4+(globalIndex+index)%4+bump,speed:3+(globalIndex*2+index)%5,brain:3+(globalIndex+index*2)%5,shield:3+(globalIndex*3+index)%5,specialSkill1:fan?.[0],specialSkill2:fan?.[1],weakness:fan?.[2],catchphrase:fan?.[3],description:`${pack.source}의 ${name} 핵심 외형을 알아볼 수 있게 새로 제작한 비공식 팬 카드입니다. 8세 어린이가 볼 수 있도록 비유혈 장면으로 표현했으며 공식 상품이 아닙니다.`,icon:pack.icon,image:ART[name],level:1,xp:0,isFavoriteBoss:false,isHandmade:false,isFavorite:false,isFanCard:true,evolutionStage:"Base"};
  }
  const CARD_DB = PACKS.flatMap((p, pi) => p.names.map((n,i) => normalCard(p,n,i,pi)));
  const BOSSES = [
    {id:"boss-seek",name:"Seek",source:"Roblox DOORS Fan",pack:"Favorite Boss Vault",rarity:"Favorite Boss",type1:"Shadow",type2:"Speed",power:8,speed:10,brain:6,shield:6,specialSkill1:"Hallway Rush",specialSkill2:"Eye Trail",weakness:"Bright Puzzle Room",catchphrase:"You cannot hide forever.",description:"DOORS의 Seek를 8세 어린이용으로 재해석한 비공식 팬 카드. 눈 모양 빛을 따라 미지의 복도를 달리는 그림자 챔피언입니다.",icon:"👁️",image:ART.Seek,level:1,xp:0,isFavoriteBoss:true,isHandmade:false,isFavorite:true,isFanCard:true,evolutionStage:"Shadow Runner"},
    {id:"boss-shy",name:"Shy Guy",source:"SCP Foundation Fan",pack:"Favorite Boss Vault",rarity:"Favorite Boss",type1:"Mystery",type2:"Monster",power:10,speed:7,brain:5,shield:8,specialSkill1:"Don't Look",specialSkill2:"Panic Chase",weakness:"Calm Room",catchphrase:"Do not stare.",description:"SCP-096의 아주 길고 마른 모습과 얼굴을 가린 자세를 알아볼 수 있게 살린 비공식 팬 카드. 어린이가 볼 수 있도록 공격 장면 없이 순화했어요.",icon:"◻️",image:ART["Shy Guy"],level:1,xp:0,isFavoriteBoss:true,isHandmade:false,isFavorite:true,isFanCard:true,evolutionStage:"Quiet Guardian"}
  ];
  const defaultState = () => ({version:5,collection:BOSSES.map(c=>({...c})),stories:[],settings:{limitOn:false,dailyLimit:3},opened:{date:today(),count:0},buildRewards:{}});
  let state;
  const savedText = localStorage.getItem(KEY);
  try { state = {...defaultState(), ...JSON.parse(savedText || "null")}; } catch { state = defaultState(); }
  if (!Array.isArray(state.collection)) state = defaultState();
  if ((state.version||1)<5) {
    const freshCards=[...CARD_DB,...BOSSES], allowed=new Set(freshCards.map(c=>c.id));
    state.collection=state.collection.filter(c=>c.isHandmade||allowed.has(c.id));
    freshCards.forEach(fresh=>{ const old=state.collection.find(c=>c.id===fresh.id); if(old){ const progress={level:old.level,xp:old.xp,isFavorite:old.isFavorite,power:old.power,speed:old.speed,brain:old.brain,shield:old.shield,evolutionStage:old.evolutionStage}; Object.assign(old,fresh,progress); } });
    state.version=5;
    localStorage.setItem(KEY, JSON.stringify(state));
  }
  // 최초 실행 데이터도 전용 공간에만 기록합니다. 다른 앱의 저장 키는 읽거나 수정하지 않습니다.
  if (!localStorage.getItem(KEY)) localStorage.setItem(KEY, JSON.stringify(state));
  let currentScreen = "home", currentCardId = null, imageData = "", buildMode = "roblox", editingBack = "collection";
  const save = () => localStorage.setItem(KEY, JSON.stringify(state));
  function toast(msg){ const el=$("#toast"); el.textContent=msg; el.classList.add("show"); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove("show"),1800); }
  function artStyle(card){ const img=safeImage(card.image); return img?`background-image:url('${img}')`:`--art1:${typeColor(card.type1)};--art2:${typeColor(card.type2)}`; }
  function typeColor(type){ return ({Shadow:"#282352",Speed:"#126a82",Monster:"#653044",Mystery:"#543878",Tech:"#176273",Brain:"#4c417d",Builder:"#85601e",Funny:"#a04070",Detective:"#74522a",Glitch:"#6b2e8d"})[type]||"#343967"; }
  function evolution(card){ return card.level>=6 ? (card.isFavoriteBoss?"ULTIMATE BOSS":"Ultimate") : card.level>=3 ? (card.isFavoriteBoss?"POWERED BOSS":"Powered") : (card.evolutionStage||"Base"); }
  function cardHTML(card, boss=false){
    const cls = card.isFavoriteBoss?"favorite-boss":card.isHandmade?"handmade-card":"";
    return `<article class="game-card ${cls}" data-id="${esc(card.id)}"><div class="card-art" style="${artStyle(card)}">${safeImage(card.image)?"":`<span class="art-icon">${esc(card.icon)}</span>`}<span class="rarity-tag">${esc(card.rarity)}</span><span class="level-tag">L${card.level}</span><button class="favorite-star" data-favorite="${esc(card.id)}" aria-label="즐겨찾기">${card.isFavorite?"★":"☆"}</button></div><div class="card-body"><h3>${esc(card.name)}</h3><div class="type-line">${esc(card.type1)} · ${esc(card.type2)} · ${esc(evolution(card))}</div><div class="mini-stats"><span>POW <b>${card.power}</b></span><span>SPD <b>${card.speed}</b></span><span>BRN <b>${card.brain}</b></span><span>SHD <b>${card.shield}</b></span></div>${boss?`<p class="type-line">“${esc(card.catchphrase)}”</p>`:""}</div></article>`;
  }
  function findCard(id){ return state.collection.find(c=>c.id===id) || CARD_DB.find(c=>c.id===id) || BOSSES.find(c=>c.id===id); }
  function updateSelectors(){
    const opts=state.collection.map(c=>`<option value="${esc(c.id)}">${esc(c.name)} · L${c.level}</option>`).join("");
    ["#battleCard","#storyCard1","#storyCard2"].forEach(s=>$(s).innerHTML=opts||"<option>카드가 없어요</option>");
    if(state.collection.length>1) $("#storyCard2").selectedIndex=1;
  }
  function renderHome(){
    const featured=[BOSSES[0],CARD_DB.find(c=>c.name==="Tralalero Tralala"),BOSSES[1]];
    $("#heroCards").innerHTML=featured.map(c=>`<div class="hero-mini" style="${artStyle(c)}"><span>${esc(c.name)}</span></div>`).join("");
    const bosses=state.collection.filter(c=>c.isFavoriteBoss).length;
    $("#labStatus").innerHTML=`<div class="status-bit"><b>${state.collection.length}</b><small>MY CARDS</small></div><div class="status-bit"><b>${bosses}</b><small>BOSSES</small></div><div class="status-bit"><b>${state.stories.length}</b><small>STORIES</small></div>`;
    $("#homeCollectionCount").textContent=`${state.collection.length}장 →`;
  }
  function renderPacks(){ $("#packGrid").innerHTML=PACKS.map(p=>`<button class="pack" data-pack="${p.id}" style="--pack:${p.color}"><span class="pack-icon">${p.icon}</span><span class="pack-copy"><b>${p.name}</b><small>${p.blurb}</small></span><span class="pack-arrow">→</span></button>`).join(""); }
  function renderCollection(){
    const q=$("#searchCards").value.trim().toLowerCase(), f=$("#filterCards").value;
    const cards=state.collection.filter(c=>(!q||c.name.toLowerCase().includes(q)) && (f==="all"||(f==="fan"&&c.isFanCard)||(f==="favorite"&&c.isFavorite)||c.rarity===f));
    $("#collectionGrid").innerHTML=cards.map(c=>cardHTML(c)).join(""); $("#collectionEmpty").hidden=cards.length>0;
  }
  function renderBosses(){ const b=state.collection.filter(c=>c.isFavoriteBoss); $("#bossGrid").innerHTML=b.map(c=>cardHTML(c,true)).join(""); }
  function renderStories(){ $("#storyList").innerHTML=state.stories.length?state.stories.slice().reverse().map(s=>`<div class="story-small"><b>${esc(s.title)}</b><small>${esc(s.date)}</small></div>`).join(""):"<p class='lead'>아직 저장된 이야기가 없어요.</p>"; }
  function renderSettings(){ $("#limitToggle").checked=!!state.settings.limitOn; $("#dailyLimit").value=state.settings.dailyLimit||3; $("#limitRow").hidden=!state.settings.limitOn; }
  function renderAll(){ renderHome();renderPacks();renderCollection();renderBosses();renderStories();renderSettings();updateSelectors(); }
  function go(screen){
    currentScreen=screen; $$(".screen").forEach(x=>x.classList.toggle("active",x.dataset.screen===screen));
    $$(".bottom-nav button").forEach(x=>x.classList.toggle("active",x.dataset.go===screen));
    $("#backButton").hidden=screen==="home"; window.scrollTo({top:0,behavior:"smooth"});
    if(screen==="collection")renderCollection(); if(screen==="bosses")renderBosses(); if(screen==="story")renderStories(); if(screen==="settings")renderSettings();
  }
  function openPack(id){
    if(state.opened.date!==today()) state.opened={date:today(),count:0};
    if(state.settings.limitOn && state.opened.count>=state.settings.dailyLimit){toast("오늘의 발견을 모두 마쳤어요 🌙");return;}
    const pool=CARD_DB.filter(c=>c.id.startsWith(id+"-")), draw=[...pool].sort(()=>Math.random()-.5).slice(0,3);
    draw.forEach(c=>{ const old=state.collection.find(x=>x.id===c.id); if(old) gainXP(old,4,false); else state.collection.push({...c}); });
    state.opened.count++;save();
    const area=$("#revealArea"); area.innerHTML=`<span class="eyebrow">NEW DISCOVERIES</span><h2>새 친구를 찾았어요!</h2><div class="reveal-cards">${draw.map(c=>cardHTML(c)).join("")}</div><button class="primary huge" id="keepCards">컬렉션에 보관하기</button>`;area.hidden=false;renderAll();
  }
  function gainXP(card, amount, notify=true){
    const before=card.level||1; card.xp=(card.xp||0)+amount; card.level=Math.floor(card.xp/30)+1;
    if(card.level>before){ for(let l=before+1;l<=card.level;l++){ const stat=["power","speed","brain","shield"][(l-2)%4]; card[stat]++; } if(notify)toast(`레벨 업! ${card.name} → L${card.level}`); }
    card.evolutionStage=evolution(card);
  }
  function score(card, rule){
    let n=card[rule.stat]*2+(card.power+card.speed+card.brain+card.shield)*.18;
    if(card.type1===rule.bonus||card.type2===rule.bonus)n+=4;
    if(rule.name==="Bright Light Room"&&[card.type1,card.type2].includes("Shadow"))n-=3;
    if(rule.name==="Quiet Room"&&[card.type1,card.type2].includes("Monster"))n-=2;
    if((card.weakness||"").toLowerCase().includes(rule.name.split(" ")[0].toLowerCase()))n-=3;
    return n+Math.random()*4;
  }
  function battle(){
    const mine=findCard($("#battleCard").value); if(!mine){toast("먼저 카드를 발견해 주세요");return;}
    let pool=[...CARD_DB,...BOSSES].filter(c=>c.name!==mine.name);
    if($("#battleMode").value==="boss") pool=pool.filter(c=>["Mythic","Favorite Boss"].includes(c.rarity));
    const foe={...pool[Math.floor(Math.random()*pool.length)]}, rule=RULES[Math.floor(Math.random()*RULES.length)], a=score(mine,rule),b=score(foe,rule),won=a>=b;
    gainXP(mine,won?10:4);save();renderAll();
    const rounds=$("#battleMode").value==="boss"?[
      `1라운드 · ${mine.name}의 ${mine.specialSkill1}! ${foe.name}도 방어 자세를 잡습니다.`,
      `2라운드 · ${foe.name}의 ${foe.specialSkill2}! ${rule.bonus} 타입이 힘을 얻습니다.`,
      `마지막 · ${rule.stat.toUpperCase()} 대결 ${Math.round(a)} : ${Math.round(b)}!`
    ]:[`${mine.name}이(가) ${mine.specialSkill1}을 사용했어요!`,`${foe.name}은(는) ${foe.specialSkill2}로 맞섰어요.`,`점수 ${Math.round(a)} : ${Math.round(b)} — 카드가 사라지거나 다치지는 않아요.`];
    $("#battleSetup").hidden=true;const ar=$("#battleArena");ar.hidden=false;ar.innerHTML=`<div class="battle-stage"><div class="versus"><div class="fighter"><div class="fighter-art" style="${artStyle(mine)}">${safeImage(mine.image)?"":mine.icon}</div><h3>${esc(mine.name)}</h3></div><div class="vs">VS</div><div class="fighter"><div class="fighter-art" style="${artStyle(foe)}">${safeImage(foe.image)?"":foe.icon}</div><h3>${esc(foe.name)}</h3></div></div><div class="battle-rule">✦ ${rule.name}</div><div class="battle-log">${rounds.map((x,i)=>`<div class="log-line" style="animation-delay:${i*.18}s">${esc(x)}</div>`).join("")}</div><div class="winner">${won?`🏆 ${esc(mine.name)} 승리!`:`✨ ${esc(foe.name)} 승리!`}</div><button class="primary huge" id="battleAgain">다시 대결하기 · +${won?10:4} XP</button></div>`;
  }
  function storyBattle(){
    const a=findCard($("#storyCard1").value),b=findCard($("#storyCard2").value);if(!a||!b||a.id===b.id){toast("서로 다른 카드 2장을 골라 주세요");return;}
    const places=["끝없이 움직이는 퍼즐 도서관","별빛이 흐르는 블록 도시","문이 백 개 달린 비밀 학교","구름 위의 글리치 정원"], problems=["출구의 색이 모두 사라졌어요","작은 길잡이 로봇이 집을 잃었어요","시간을 멈춘 수수께끼가 나타났어요","웃음을 먹는 회색 안개가 찾아왔어요"];
    const place=places[Math.floor(Math.random()*places.length)],problem=problems[Math.floor(Math.random()*problems.length)];
    const title=`${a.name} & ${b.name}: 비밀의 문`;const text=`무대는 ${place}. 갑자기 ${problem}. ${a.name}은(는) “${a.catchphrase}”라고 외치며 ${a.specialSkill1}을 펼쳤어요. ${b.name}은(는) ${b.specialSkill2}로 새로운 길을 만들었죠. 둘은 힘이 아니라 아이디어를 합쳐 수수께끼를 해결했고, 서로의 약점도 지켜 주는 최고의 팀이 되었답니다.`;
    state.stories.push({id:uid(),title,text,date:new Date().toLocaleDateString("ko-KR")}); gainXP(a,8);gainXP(b,8);save();renderAll();
    $("#storyResult").innerHTML=`<article class="story-card"><span class="eyebrow">SAVED STORY</span><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`;
  }
  function detail(id){
    const c=findCard(id);if(!c)return;currentCardId=id;go("detail");
    const xp=(c.xp||0)%30; $("#detailView").innerHTML=`<div class="detail-hero"><div class="detail-art" style="${artStyle(c)}">${safeImage(c.image)?"":esc(c.icon)}</div><div class="detail-copy"><span class="rarity-tag">${esc(c.rarity)}</span><h2>${esc(c.name)}</h2><div class="type-line">${esc(c.type1)} · ${esc(c.type2)} · ${esc(evolution(c))}</div><p class="catch">“${esc(c.catchphrase)}”</p></div></div><div class="detail-stats">${[["POWER",c.power],["SPEED",c.speed],["BRAIN",c.brain],["SHIELD",c.shield]].map(x=>`<div class="detail-stat"><b>${x[1]}</b><small>${x[0]}</small></div>`).join("")}</div><div class="detail-box"><b>LEVEL ${c.level}</b><span style="float:right;color:#9ea5c7">${xp} / 30 XP</span><div class="xp-track"><i style="width:${xp/30*100}%"></i></div></div><div class="detail-box"><div class="skill-row"><span class="skill-chip">✦ ${esc(c.specialSkill1)}</span><span class="skill-chip">✦ ${esc(c.specialSkill2)}</span></div><p>${esc(c.description)}</p><small style="color:#ff9cab">약점 · ${esc(c.weakness)}</small></div><div class="detail-actions"><button data-use-battle="${esc(c.id)}">⚔ 이 카드로 대결</button><button data-power="${esc(c.id)}">⚡ 연습 +5 XP</button><button data-build="roblox">◆ Roblox로 만들기</button><button data-build="minecraft">▦ Minecraft로 만들기</button>${c.isHandmade?`<button data-edit="${esc(c.id)}">✎ 카드 고치기</button>`:""}<button data-favorite="${esc(c.id)}">${c.isFavorite?"★ 즐겨찾기 해제":"☆ 즐겨찾기"}</button><button class="delete wide" data-delete="${esc(c.id)}">이 카드 삭제</button></div>`;
  }
  function fillForm(card=null){
    $("#cardForm").reset(); $("#editId").value=card?.id||""; $("#formTitle").textContent=card?"내 카드 고치기":"내 카드 만들기"; imageData=card?.image||"";
    const values={cardName:card?.name||"",cardSource:card?.source||"",type1:card?.type1||"Brain",type2:card?.type2||"Speed",skill1:card?.specialSkill1||"",skill2:card?.specialSkill2||"",weakness:card?.weakness||"",catchphrase:card?.catchphrase||"",description:card?.description||""};Object.entries(values).forEach(([k,v])=>$("#"+k).value=v);
    ["power","speed","brain","shield"].forEach(k=>{ $("#stat-"+k).value=card?.[k]||5; $("#out-"+k).value=card?.[k]||5; });$("#makeBoss").checked=!!card?.isFavoriteBoss;showPreview();updateBalance();
  }
  function showPreview(){const p=$("#photoPreview");p.style.backgroundImage=safeImage(imageData)?`url('${imageData}')`:"";p.innerHTML=safeImage(imageData)?"":"<span>🎨</span>";}
  function updateBalance(){ const total=["power","speed","brain","shield"].reduce((n,k)=>n+Number($("#stat-"+k).value),0),limit=$("#makeBoss").checked?36:28;$("#statTotal").textContent=`${total} / ${limit}`;$("#balanceFill").style.width=`${Math.min(100,total/limit*100)}%`;$("#balanceMessage").textContent=total<=limit?"좋은 균형이에요!":"아주 강해요! Favorite Boss로 해볼까요?";$("#balanceMessage").style.color=total>limit?"#ff8cab":""; }
  function saveCustom(e){
    e.preventDefault();const editId=$("#editId").value,total=["power","speed","brain","shield"].reduce((n,k)=>n+Number($("#stat-"+k).value),0),isBoss=$("#makeBoss").checked;
    if(total>(isBoss?36:28) && !confirm(`능력치 합계가 ${total}이에요. 아주 강한 카드로 그대로 만들까요?`))return;
    const old=state.collection.find(c=>c.id===editId);const c={id:old?.id||uid(),name:$("#cardName").value.trim(),source:$("#cardSource").value.trim()||"My Imagination",pack:"My Own Characters",rarity:isBoss?"Favorite Boss":"Handmade",type1:$("#type1").value,type2:$("#type2").value,power:+$("#stat-power").value,speed:+$("#stat-speed").value,brain:+$("#stat-brain").value,shield:+$("#stat-shield").value,specialSkill1:$("#skill1").value.trim()||"Imagination Spark",specialSkill2:$("#skill2").value.trim()||"Team Power",weakness:$("#weakness").value.trim()||"Needs a Friend",catchphrase:$("#catchphrase").value.trim()||"Let's make something amazing!",description:$("#description").value.trim()||"우리 가족의 상상에서 태어난 특별한 캐릭터.",icon:"🎨",image:safeImage(imageData),level:old?.level||1,xp:old?.xp||0,isFavoriteBoss:isBoss,isHandmade:true,isFavorite:old?.isFavorite||false,evolutionStage:old?.evolutionStage||"Base"};
    if(old)Object.assign(old,c);else state.collection.push(c);save();renderAll();toast("내 카드가 완성됐어요! ✨");detail(c.id);
  }
  function compressImage(file){
    const reader=new FileReader();reader.onload=()=>{const img=new Image();img.onload=()=>{const max=900,scale=Math.min(1,max/img.width,max/img.height),canvas=document.createElement("canvas");canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);imageData=canvas.toDataURL("image/jpeg",.82);showPreview();};img.src=reader.result;};reader.readAsDataURL(file);
  }
  const ROBLOX=["간단한 몸이나 모델 만들기","주요 색 2~3개 고르기","얼굴 또는 상징 하나 넣기","특별한 아이템 하나 만들기","캐릭터의 작은 방 만들기","간단한 능력 아이디어 넣기","약점 아이디어 하나 넣기","Play를 눌러 테스트하기"];
  const MINECRAFT=["캐릭터 조각상 만들기","캐릭터의 홈 베이스 짓기","능력을 설명하는 표지판 달기","비밀 방 만들기","도전 구역 만들기","안전 구역 만들기"];
  function buildView(mode){buildMode=mode;go("build");renderBuild();}
  function renderBuild(){const c=findCard(currentCardId),items=buildMode==="roblox"?ROBLOX:MINECRAFT,key=`${c.id}-${buildMode}`,done=state.buildRewards[key]||false;$("#buildView").innerHTML=`<div class="build-head"><div class="build-icon">${buildMode==="roblox"?"◆":"▦"}</div><span class="eyebrow">BUILD LAB · +15 XP</span><h2>${esc(c.name)} 만들기</h2><p class="lead">완벽할 필요 없어요. 만들고, 눌러 보고, 바꿔 보는 게 진짜 게임 제작이에요.</p></div><div class="build-tabs"><button data-buildtab="roblox" class="${buildMode==="roblox"?"active":""}">Roblox</button><button data-buildtab="minecraft" class="${buildMode==="minecraft"?"active":""}">Minecraft</button></div><div class="checklist">${items.map((x,i)=>`<label class="check-item"><input type="checkbox" data-check="${i}" ${done?"checked":""}><span>${x}</span></label>`).join("")}</div><button class="primary huge" id="finishBuild" ${done?"disabled":""}>${done?"완료했어요 ✓":"체크리스트 완료 · +15 XP"}</button>`;}
  function finishBuild(){const checks=$$("[data-check]");if(!checks.every(x=>x.checked)){toast("한 단계씩 체크해 보세요!");return;}const c=findCard(currentCardId),key=`${c.id}-${buildMode}`;if(!state.buildRewards[key]){state.buildRewards[key]=true;gainXP(c,15);save();renderAll();toast("빌드 미션 완료! +15 XP");renderBuild();}}
  function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`favorite-card-lab-${today()}.json`;a.click();URL.revokeObjectURL(a.href);}
  function importData(file){
    const r=new FileReader();
    r.onload=()=>{try{
      const d=JSON.parse(r.result); if(!Array.isArray(d.collection))throw Error();
      const catalog=new Map([...CARD_DB,...BOSSES].map(c=>[c.id,c]));
      d.collection=d.collection.filter(c=>c.isHandmade||catalog.has(c.id)).map(c=>{
        c.image=safeImage(c.image); if(c.isHandmade)return c;
        const fresh=catalog.get(c.id), progress={level:c.level,xp:c.xp,isFavorite:c.isFavorite,power:c.power,speed:c.speed,brain:c.brain,shield:c.shield,evolutionStage:c.evolutionStage};
        return {...fresh,...progress};
      });
      state={...defaultState(),...d,version:5}; save(); renderAll(); toast("백업을 불러왔어요"); go("home");
    }catch{toast("올바른 백업 파일이 아니에요");}};
    r.readAsText(file);
  }

  document.addEventListener("click",e=>{
    const goBtn=e.target.closest("[data-go]");if(goBtn){if(goBtn.dataset.go==="create")fillForm();go(goBtn.dataset.go);return;}
    const card=e.target.closest(".game-card");if(card&&!e.target.closest("[data-favorite]")){detail(card.dataset.id);return;}
    const fav=e.target.closest("[data-favorite]");if(fav){e.stopPropagation();const c=state.collection.find(x=>x.id===fav.dataset.favorite);if(c){c.isFavorite=!c.isFavorite;save();renderAll();if(currentScreen==="detail")detail(c.id);}return;}
    const pack=e.target.closest("[data-pack]");if(pack)openPack(pack.dataset.pack);
    if(e.target.id==="keepCards"){$("#revealArea").hidden=true;go("collection");}
    if(e.target.id==="battleButton")battle(); if(e.target.id==="battleAgain"){$("#battleArena").hidden=true;$("#battleSetup").hidden=false;}
    if(e.target.id==="storyButton")storyBattle();
    const use=e.target.closest("[data-use-battle]");if(use){go("battle");$("#battleCard").value=use.dataset.useBattle;}
    const power=e.target.closest("[data-power]");if(power){const c=state.collection.find(x=>x.id===power.dataset.power);gainXP(c,5);save();renderAll();detail(c.id);toast("즐거운 연습! +5 XP");}
    const build=e.target.closest("[data-build]");if(build)buildView(build.dataset.build);
    const tab=e.target.closest("[data-buildtab]");if(tab){buildMode=tab.dataset.buildtab;renderBuild();}
    if(e.target.id==="finishBuild")finishBuild();
    const edit=e.target.closest("[data-edit]");if(edit){fillForm(state.collection.find(c=>c.id===edit.dataset.edit));go("create");}
    const del=e.target.closest("[data-delete]");if(del&&confirm("이 카드를 컬렉션에서 지울까요? 백업이 있다면 다시 불러올 수 있어요.")){state.collection=state.collection.filter(c=>c.id!==del.dataset.delete);save();renderAll();toast("카드를 정리했어요");go("collection");}
    if(e.target.id==="newBossButton"){fillForm();$("#makeBoss").checked=true;updateBalance();go("create");}
    if(e.target.id==="printButton"){$$("#collectionGrid .game-card").forEach(x=>x.classList.add("print-selected"));window.print();}
    if(e.target.id==="exportButton")exportData();
    if(e.target.id==="resetButton"&&confirm("정말 모든 카드와 이야기를 처음으로 되돌릴까요? 먼저 백업을 추천해요.")){state=defaultState();save();renderAll();toast("처음 상태로 돌아왔어요");go("home");}
  });
  $("#backButton").addEventListener("click",()=>{if(["detail","build"].includes(currentScreen))go("collection");else go("home");});
  $("#searchCards").addEventListener("input",renderCollection);$("#filterCards").addEventListener("change",renderCollection);
  $("#cardForm").addEventListener("submit",saveCustom);$("#imageInput").addEventListener("change",e=>e.target.files[0]&&compressImage(e.target.files[0]));
  $("#makeBoss").addEventListener("change",updateBalance);
  $("#limitToggle").addEventListener("change",e=>{state.settings.limitOn=e.target.checked;$("#limitRow").hidden=!e.target.checked;save();});
  $("#dailyLimit").addEventListener("change",e=>{state.settings.dailyLimit=Math.max(1,Math.min(20,+e.target.value||3));save();});
  $("#importInput").addEventListener("change",e=>e.target.files[0]&&importData(e.target.files[0]));
  const typeOptions=TYPES.map(t=>`<option>${t}</option>`).join("");$("#type1").innerHTML=typeOptions;$("#type2").innerHTML=typeOptions;
  $("#statsEditor").innerHTML=[["power","POWER"],["speed","SPEED"],["brain","BRAIN"],["shield","SHIELD"]].map(([k,n])=>`<div class="stat-edit"><label>${n}<output id="out-${k}">5</output></label><input id="stat-${k}" type="range" min="1" max="10" value="5"></div>`).join("");
  $$("#statsEditor input").forEach(x=>x.addEventListener("input",()=>{$("#out-"+x.id.slice(5)).value=x.value;updateBalance();}));
  renderAll();fillForm();go("home");
})();
