
/* =========================================
   PT LEARN PORTUGUESE 🇵🇹
   European Portuguese: Beginner to Advanced
========================================= */

const vocabulary = [
["Olá","Hello","Greetings","A1"],
["Bom dia","Good morning","Greetings","A1"],
["Boa tarde","Good afternoon","Greetings","A1"],
["Boa noite","Good evening / Good night","Greetings","A1"],
["Adeus","Goodbye","Greetings","A1"],
["Até amanhã","See you tomorrow","Greetings","A1"],
["Por favor","Please","Greetings","A1"],
["Obrigado","Thank you (male speaker)","Greetings","A1"],
["Obrigada","Thank you (female speaker)","Greetings","A1"],
["Desculpa","Sorry","Greetings","A1"],
["Com licença","Excuse me","Greetings","A1"],
["Sim","Yes","Basics","A1"],
["Não","No","Basics","A1"],
["Talvez","Maybe","Basics","A1"],
["Sempre","Always","Time","A1"],
["Nunca","Never","Time","A1"],
["Hoje","Today","Time","A1"],
["Ontem","Yesterday","Time","A1"],
["Amanhã","Tomorrow","Time","A1"],
["Agora","Now","Time","A1"],
["Depois","Later / Afterwards","Time","A1"],
["Antes","Before","Time","A1"],
["Casa","House / Home","Daily life","A1"],
["Escola","School","Education","A1"],
["Professor","Teacher (male)","Education","A1"],
["Professora","Teacher (female)","Education","A1"],
["Aluno","Student (male)","Education","A1"],
["Aluna","Student (female)","Education","A1"],
["Livro","Book","Education","A1"],
["Caderno","Notebook","Education","A1"],
["Caneta","Pen","Education","A1"],
["Lápis","Pencil","Education","A1"],
["Amigo","Friend (male)","People","A1"],
["Amiga","Friend (female)","People","A1"],
["Família","Family","People","A1"],
["Mãe","Mother","People","A1"],
["Pai","Father","People","A1"],
["Água","Water","Food","A1"],
["Pão","Bread","Food","A1"],
["Leite","Milk","Food","A1"],
["Comida","Food","Food","A1"],
["Pequeno","Small","Adjectives","A1"],
["Grande","Big","Adjectives","A1"],
["Feliz","Happy","Feelings","A1"],
["Triste","Sad","Feelings","A1"],
["Cansado","Tired (male)","Feelings","A1"],
["Cansada","Tired (female)","Feelings","A1"],
["Rápido","Fast","Adjectives","A1"],
["Devagar","Slowly","Adjectives","A1"],
["Dinheiro","Money","Daily life","A2"],
["Trabalho","Work","Daily life","A2"],
["Saúde","Health","Daily life","A2"],
["Viagem","Journey / Trip","Travel","A2"],
["Comboio","Train","Travel","A2"],
["Autocarro","Bus","Travel","A2"],
["Bilhete","Ticket","Travel","A2"],
["Morada","Address","Daily life","A2"],
["Experiência","Experience","General","B1"],
["Conhecimento","Knowledge","General","B1"],
["Desenvolvimento","Development","General","B1"],
["Oportunidade","Opportunity","General","B1"],
["Comportamento","Behaviour","General","B1"],
["Consequência","Consequence","General","B2"],
["Embora","Although","Grammar","B2"],
["Contudo","However","Grammar","B2"],
["Portanto","Therefore","Grammar","B2"],
["Apesar de","Despite","Grammar","B2"],
["Todavia","Nevertheless","Grammar","C1"],
["Consequentemente","Consequently","Grammar","C1"]
];

const verbs = [
{
pt:"ser",en:"to be (identity / characteristics)",
present:["sou","és","é","somos","sois","são"],
past:["fui","foste","foi","fomos","fostes","foram"],
future:["serei","serás","será","seremos","sereis","serão"]
},
{
pt:"estar",en:"to be (state / location)",
present:["estou","estás","está","estamos","estais","estão"],
past:["estive","estiveste","esteve","estivemos","estivestes","estiveram"],
future:["estarei","estarás","estará","estaremos","estareis","estarão"]
},
{
pt:"ter",en:"to have",
present:["tenho","tens","tem","temos","tendes","têm"],
past:["tive","tiveste","teve","tivemos","tivestes","tiveram"],
future:["terei","terás","terá","teremos","tereis","terão"]
},
{
pt:"ir",en:"to go",
present:["vou","vais","vai","vamos","ides","vão"],
past:["fui","foste","foi","fomos","fostes","foram"],
future:["irei","irás","irá","iremos","ireis","irão"]
},
{
pt:"fazer",en:"to do / to make",
present:["faço","fazes","faz","fazemos","fazeis","fazem"],
past:["fiz","fizeste","fez","fizemos","fizestes","fizeram"],
future:["farei","farás","fará","faremos","fareis","farão"]
},
{
pt:"falar",en:"to speak",
present:["falo","falas","fala","falamos","falais","falam"],
past:["falei","falaste","falou","falámos","falastes","falaram"],
future:["falarei","falarás","falará","falaremos","falareis","falarão"]
},
{
pt:"comer",en:"to eat",
present:["como","comes","come","comemos","comeis","comem"],
past:["comi","comeste","comeu","comemos","comestes","comeram"],
future:["comerei","comerás","comerá","comeremos","comereis","comerão"]
},
{
pt:"beber",en:"to drink",
present:["bebo","bebes","bebe","bebemos","bebeis","bebem"],
past:["bebi","bebeste","bebeu","bebemos","bebestes","beberam"],
future:["beberei","beberás","beberá","beberemos","bebereis","beberão"]
},
{
pt:"estudar",en:"to study",
present:["estudo","estudas","estuda","estudamos","estudais","estudam"],
past:["estudei","estudaste","estudou","estudámos","estudastes","estudaram"],
future:["estudarei","estudarás","estudará","estudaremos","estudareis","estudarão"]
},
{
pt:"aprender",en:"to learn",
present:["aprendo","aprendes","aprende","aprendemos","aprendeis","aprendem"],
past:["aprendi","aprendeste","aprendeu","aprendemos","aprendestes","aprenderam"],
future:["aprenderei","aprenderás","aprenderá","aprenderemos","aprendereis","aprenderão"]
},
{
pt:"querer",en:"to want",
present:["quero","queres","quer","queremos","quereis","querem"],
past:["quis","quiseste","quis","quisemos","quisestes","quiseram"],
future:["quererei","quererás","quererá","quereremos","querereis","quererão"]
},
{
pt:"poder",en:"can / to be able to",
present:["posso","podes","pode","podemos","podeis","podem"],
past:["pude","pudeste","pôde","pudemos","pudestes","puderam"],
future:["poderei","poderás","poderá","poderemos","podereis","poderão"]
},
{
pt:"dizer",en:"to say / to tell",
present:["digo","dizes","diz","dizemos","dizeis","dizem"],
past:["disse","disseste","disse","dissemos","dissestes","disseram"],
future:["direi","dirás","dirá","diremos","direis","dirão"]
},
{
pt:"ver",en:"to see",
present:["vejo","vês","vê","vemos","vedes","veem"],
past:["vi","viste","viu","vimos","vistes","viram"],
future:["verei","verás","verá","veremos","vereis","verão"]
},
{
pt:"gostar",en:"to like",
present:["gosto","gostas","gosta","gostamos","gostais","gostam"],
past:["gostei","gostaste","gostou","gostámos","gostastes","gostaram"],
future:["gostarei","gostarás","gostará","gostaremos","gostareis","gostarão"]
},
{
pt:"saber",en:"to know a fact / know how",
present:["sei","sabes","sabe","sabemos","sabeis","sabem"],
past:["soube","soubeste","soube","soubemos","soubestes","souberam"],
future:["saberei","saberás","saberá","saberemos","sabereis","saberão"]
},
{
pt:"conhecer",en:"to know / be familiar with",
present:["conheço","conheces","conhece","conhecemos","conheceis","conhecem"],
past:["conheci","conheceste","conheceu","conhecemos","conhecestes","conheceram"],
future:["conhecerei","conhecerás","conhecerá","conheceremos","conhecereis","conhecerão"]
},
{
pt:"ter de",en:"to have to",
present:["tenho de","tens de","tem de","temos de","tendes de","têm de"],
past:["tive de","tiveste de","teve de","tivemos de","tivestes de","tiveram de"],
future:["terei de","terás de","terá de","teremos de","tereis de","terão de"]
},
{
pt:"vir",en:"to come",
present:["venho","vens","vem","vimos","vindes","vêm"],
past:["vim","vieste","veio","viemos","viestes","vieram"],
future:["virei","virás","virá","viremos","vireis","virão"]
},
{
pt:"pôr",en:"to put",
present:["ponho","pões","põe","pomos","pondes","põem"],
past:["pus","puseste","pôs","pusemos","pusestes","puseram"],
future:["porei","porás","porá","poremos","poreis","porão"]
}
];

const sentences = [
["Olá, como estás?","Hello, how are you?","A1"],
["Chamo-me Ibrahim.","My name is Ibrahim.","A1"],
["Sou da Serra Leoa.","I am from Sierra Leone.","A1"],
["Moro em Portugal.","I live in Portugal.","A1"],
["Não compreendo. Podes repetir, por favor?","I don't understand. Can you repeat, please?","A1"],
["Podes falar mais devagar, por favor?","Can you speak more slowly, please?","A1"],
["Onde fica a casa de banho?","Where is the toilet?","A1"],
["Tenho de ir para a escola.","I have to go to school.","A1"],
["Vou estudar depois do jantar.","I'm going to study after dinner.","A2"],
["Ainda não terminei os trabalhos de casa.","I haven't finished my homework yet.","A2"],
["Já almoçaste?","Have you had lunch yet?","A2"],
["O que estás a fazer neste momento?","What are you doing right now?","A2"],
["Gostava de aprender a falar melhor português.","I would like to learn to speak Portuguese better.","B1"],
["Embora seja difícil, vou continuar a praticar.","Although it is difficult, I will continue practising.","B2"],
["Se tivesse mais tempo, estudaria todos os dias.","If I had more time, I would study every day.","C1"],
["É fundamental que todos compreendam as instruções.","It is essential that everyone understands the instructions.","C1"],
["Caso surja algum problema, entrarei em contacto contigo.","If a problem arises, I will contact you.","C2"]
];

const conversations = [
{
title:"Conhecer alguém / Meeting someone",level:"A1",
lines:[
["A","Olá! Como te chamas?","Hello! What's your name?"],
["B","Chamo-me João. E tu?","My name is João. And you?"],
["A","Chamo-me Ibrahim. Muito prazer!","My name is Ibrahim. Nice to meet you!"],
["B","Igualmente! De onde és?","Likewise! Where are you from?"],
["A","Sou da Serra Leoa, mas moro em Portugal.","I'm from Sierra Leone, but I live in Portugal."]
]},
{
title:"Na escola / At school",level:"A1",
lines:[
["A","Desculpe, onde fica a sala de aula?","Excuse me, where is the classroom?"],
["B","Fica no primeiro andar.","It's on the first floor."],
["A","A que horas começa a aula?","What time does the lesson start?"],
["B","Começa às nove horas.","It starts at nine o'clock."]
]},
{
title:"Na pastelaria / At the café",level:"A2",
lines:[
["A","Bom dia. Queria um pão e um sumo, por favor.","Good morning. I'd like a bread roll and a juice, please."],
["B","Mais alguma coisa?","Anything else?"],
["A","Não, obrigado. Quanto custa?","No, thank you. How much is it?"],
["B","São três euros.","That's three euros."],
["A","Aqui tem. Obrigado!","Here you go. Thank you!"]
]},
{
title:"Fazer planos / Making plans",level:"B1",
lines:[
["A","O que vais fazer este fim de semana?","What are you going to do this weekend?"],
["B","Ainda não decidi. Tens alguma sugestão?","I haven't decided yet. Do you have any suggestions?"],
["A","Podíamos ir ao parque jogar basquetebol.","We could go to the park and play basketball."],
["B","Parece-me uma ótima ideia!","That sounds like a great idea!"]
]},
{
title:"Dar uma opinião / Giving an opinion",level:"B2",
lines:[
["A","Achas que aprender línguas é importante?","Do you think learning languages is important?"],
["B","Sim, porque nos permite comunicar com pessoas de outros países.","Yes, because it allows us to communicate with people from other countries."],
["A","Concordo, embora exija dedicação.","I agree, although it requires dedication."]
]}
];

const wordDifferences = [
["Que","Which / What","Que livro queres? — Which book do you want?","Que bonito! — How beautiful!"],
["O que","What","O que queres? — What do you want?","O que estás a fazer? — What are you doing?"],
["Para","To / For / In order to","Vou para a escola. — I'm going to school.","Isto é para ti. — This is for you."],
["Por","Through / Because of / In exchange for","Passei pelo parque. — I went through the park.","Obrigado pela ajuda. — Thank you for the help."],
["Ser","To be: identity / characteristics","Sou estudante. — I am a student.","Ela é simpática. — She is friendly."],
["Estar","To be: state / location","Estou cansado. — I am tired.","Onde estás? — Where are you?"],
["Saber","To know a fact / know how","Sei a resposta. — I know the answer.","Sei nadar. — I know how to swim."],
["Conhecer","To know / be familiar with","Conheço o professor. — I know the teacher.","Conheces Lisboa? — Do you know Lisbon?"],
["Já","Already / yet","Já almocei. — I've already had lunch.","Já fizeste os trabalhos? — Have you done the homework yet?"],
["Ainda","Still / yet","Ainda estou aqui. — I'm still here.","Ainda não terminei. — I haven't finished yet."],
["Mas","But","Quero sair, mas está a chover. — I want to go out, but it's raining."],
["Mais","More","Quero mais água. — I want more water."],
["Muito","Very / Much / A lot","Estou muito feliz. — I'm very happy.","Tenho muitos livros. — I have many books."],
["Bem","Well","Falo português bem. — I speak Portuguese well."],
["Bom / Bem","Good / Well","É um bom livro. — It's a good book.","Ela canta bem. — She sings well."],
["Porque","Because","Fiquei em casa porque estava doente. — I stayed home because I was ill."],
["Onde","Where","Onde moras? — Where do you live?"],
["Aonde","Where to","Aonde vais? — Where are you going?"],
["Ir / Vir","To go / To come","Vou à escola. — I'm going to school.","Venho da escola. — I'm coming from school."],
["Levar / Trazer","To take / To bring","Vou levar o livro. — I'll take the book.","Vou trazer o livro. — I'll bring the book."],
["Ficar / Tornar-se","To stay / To become","Fico em casa. — I stay at home.","Ele tornou-se professor. — He became a teacher."],
["Desde / Há","Since / For","Moro aqui desde janeiro. — I've lived here since January.","Moro aqui há dois anos. — I've lived here for two years."]
];

const grammar = [
["Articles","o, a, os, as = the; um, uma, uns, umas = a / an / some","O livro é novo. — The book is new."],
["Negation","Use não before the verb.","Não compreendo. — I don't understand."],
["Questions","Use quem, onde, quando, como, porquê, o que.","Onde moras? — Where do you live?"],
["Present tense","For routines and things happening now.","Estudo português. — I study Portuguese."],
["Past tense","Use the past to talk about completed events.","Ontem estudei. — Yesterday I studied."],
["Near future","ir + infinitive","Vou estudar. — I'm going to study."],
["Reflexive verbs","Many actions use me, te, se, nos, vos, se.","Chamo-me João. — My name is João."],
["Por vs Para","Por often expresses route, cause or exchange; para often expresses destination, recipient or purpose.","Estudo para aprender. — I study in order to learn."],
["Ser vs Estar","Ser for identity or characteristics; estar for states or location.","Sou estudante. Estou cansado."],
["Personal pronouns","eu, tu, ele/ela, nós, vocês, eles/elas","Eu estudo. — I study."],
["Connectors","porque = because; mas = but; embora = although; portanto = therefore","Estudo porque quero aprender."]
];

const quizQuestions = [
{q:"Como se diz 'Good morning'?",options:["Boa noite","Bom dia","Adeus"],correct:1},
{q:"What does 'O que queres?' mean?",options:["Where are you going?","What do you want?","Who are you?"],correct:1},
{q:"Complete: Eu ___ estudante.",options:["sou","estou","és"],correct:0},
{q:"What does 'Ainda não' mean?",options:["Not yet","Already","Always"],correct:0},
{q:"Translate: 'I have to study.'",options:["Quero estudar.","Tenho de estudar.","Sei estudar."],correct:1},
{q:"Which means 'I am tired'?",options:["Sou cansado.","Estou cansado.","Tenho cansado."],correct:1},
{q:"What does 'embora' mean?",options:["Because","Although","Therefore"],correct:1},
{q:"Complete: Amanhã ___ estudar.",options:["vou","fui","sou"],correct:0},
{q:"What does 'Conheces Lisboa?' mean?",options:["Do you know Lisbon?","Can you go to Lisbon?","Are you in Lisbon?"],correct:0},
{q:"What does 'por favor' mean?",options:["Excuse me","Please","Sorry"],correct:1}
];

/* ---------- WEBSITE DESIGN ---------- */

document.documentElement.lang = "pt";

document.body.innerHTML = `
<header class="pt-header">
    <h1>🇵🇹 PT Learn Portuguese</h1>
    <p>Aprende português europeu do nível A1 ao C2.</p>
    <p>Learn European Portuguese from beginner to advanced.</p>
    <button id="themeButton">☀️ Modo claro / Light mode</button>
</header>

<nav class="pt-nav">
    <button data-page="home">Início / Home</button>
    <button data-page="vocabulary">Vocabulário / Vocabulary</button>
    <button data-page="verbs">Verbos / Verbs</button>
    <button data-page="sentences">Frases / Sentences</button>
    <button data-page="conversations">Conversas / Conversations</button>
    <button data-page="differences">Diferenças / Word differences</button>
    <button data-page="grammar">Gramática / Grammar</button>
    <button data-page="quiz">Prática / Quiz</button>
</nav>

<main id="pt-main"></main>

<footer>
    <p>Continua a praticar! / Keep practising! 💙</p>
    <p>PT Learn Portuguese · Português Europeu</p>
</footer>
`;

const style = document.createElement("style");
style.textContent = `
:root {
    --bg:#081329;
    --panel:#101f40;
    --card:#183968;
    --text:#f1f5ff;
    --muted:#c9d7ee;
    --blue:#1677ff;
    --border:#3479e8;
}
body.light {
    --bg:#eef4ff;
    --panel:#ffffff;
    --card:#e0ecff;
    --text:#102344;
    --muted:#435776;
    --blue:#1767d1;
    --border:#8cb8f8;
}
* {box-sizing:border-box}
body {
    margin:0;
    background:var(--bg);
    color:var(--text);
    font-family:Arial,sans-serif;
    line-height:1.6;
    transition:background .2s,color .2s;
}
.pt-header {
    max-width:1000px;
    margin:0 auto;
    padding:30px 16px 15px;
    text-align:center;
}
.pt-header h1 {color:#54a9ff;font-size:clamp(28px,5vw,42px)}
.pt-header p {margin:5px;color:var(--muted)}
.pt-nav {
    width:min(1000px,100%);
    margin:15px auto;
    padding:10px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:10px;
}
button {
    background:var(--blue);
    color:white;
    border:1px solid var(--border);
    border-radius:10px;
    padding:12px 16px;
    font-size:15px;
    font-weight:bold;
    cursor:pointer;
}
button:hover {filter:brightness(1.13)}
button:focus,input:focus,select:focus {outline:2px solid #75c8ff}
#pt-main {
    width:min(1000px,100%);
    margin:0 auto;
    padding:12px 18px 40px;
    min-height:350px;
}
.pt-panel {
    background:var(--panel);
    border:1px solid var(--border);
    border-radius:18px;
    padding:24px;
    margin:18px 0;
    box-shadow:0 8px 24px #0002;
}
.pt-panel h2 {color:#54a9ff}
.pt-card {
    background:var(--card);
    border:1px solid var(--border);
    border-radius:12px;
    padding:16px;
    margin:12px 0;
    overflow-wrap:anywhere;
}
.pt-grid {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(210px,1fr));
    gap:12px;
}
.pt-grid .pt-card {margin:0}
.pt-muted {color:var(--muted)}
.pt-levels {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(90px,1fr));
    gap:10px;
}
.pt-level {
    background:var(--card);
    border:1px solid var(--border);
    border-radius:12px;
    padding:14px 8px;
    text-align:center;
}
.pt-level strong {display:block;font-size:24px;color:#54a9ff}
.pt-progress {
    height:14px;
    background:var(--card);
    border-radius:20px;
    overflow:hidden;
    margin:12px 0;
}
.pt-progress-fill {
    height:100%;
    width:0;
    background:linear-gradient(90deg,#1677ff,#54c7ff);
    transition:width .3s;
}
input,select {
    max-width:100%;
    padding:12px;
    margin:6px 5px 12px 0;
    border:1px solid var(--border);
    border-radius:8px;
    background:var(--panel);
    color:var(--text);
}
.pt-example {
    border-left:3px solid #54a9ff;
    padding:8px 12px;
    margin:10px 0;
    background:var(--bg);
    border-radius:5px;
}
.pt-translation {color:var(--muted)}
.pt-small {font-size:13px;color:var(--muted)}
footer {text-align:center;padding:25px;color:var(--muted)}
@media(max-width:600px) {
    .pt-panel {padding:16px}
    .pt-nav button {flex:1 1 42%;padding:10px 6px}
    #pt-main {padding:8px 12px 28px}
}
`;
document.head.appendChild(style);

const main = document.getElementById("pt-main");
let currentLevel = "Todos";
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizOrder = [...quizQuestions.keys()];

function safe(text) {
    return String(text).replace(/[&<>"']/g, c => ({
        "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    })[c]);
}

function getProgress() {
    return Number(localStorage.getItem("ptLearnProgress") || 0);
}
function setProgress() {
    const p = Math.min(100, getProgress() + 1);
    localStorage.setItem("ptLearnProgress",p);
}
function progressHTML() {
    const p = getProgress();
    return `<p>O teu progresso / Your progress: <strong>${p}%</strong></p>
    <div class="pt-progress"><div class="pt-progress-fill" style="width:${p}%"></div></div>`;
}
function panel(title,content) {
    return `<section class="pt-panel"><h2>${title}</h2>${content}</section>`;
}
function example(pt,en) {
    return `<div class="pt-example"><strong>${safe(pt)}</strong>
    <div class="pt-translation">${safe(en)}</div></div>`;
}

function showHome() {
    main.innerHTML = `
    <section class="pt-panel">
        <h2>Bem-vindo! / Welcome!</h2>
        <p>Aprende palavras, verbos, gramática e conversação em português europeu.</p>
        <p class="pt-muted">Learn words, verbs, grammar and conversation in European Portuguese.</p>
        ${progressHTML()}
        <h3>Escolhe o teu nível / Choose your level</h3>
        <div class="pt-levels">
            ${["A1","A2","B1","B2","C1","C2"].map((l,i)=>`
            <button class="pt-level" data-level="${l}">
                <strong>${l}</strong>${["Iniciante","Elementar","Intermédio","Intermédio superior","Avançado","Proficiente"][i]}
            </button>`).join("")}
        </div>
    </section>
    ${panel("Começa a aprender / Start learning",`
        <div class="pt-grid">
            ${[
                ["vocabulary","📚 Vocabulário","Words and meanings"],
                ["verbs","🔤 Verbos","Conjugations"],
                ["sentences","💬 Frases","Useful sentences"],
                ["conversations","🗣️ Conversas","Real-life dialogues"],
                ["differences","🔎 Diferenças","Confusing words"],
                ["grammar","📖 Gramática","Grammar lessons"],
                ["quiz","🎯 Questionário","Test your knowledge"]
            ].map(x=>`<button data-page="${x[0]}">${x[1]}<br><span class="pt-small">${x[2]}</span></button>`).join("")}
        </div>
    `)}`;
}

function showVocabulary() {
    main.innerHTML = panel("Vocabulário / Vocabulary",`
        <p>Pesquisa palavras em português ou inglês. / Search in Portuguese or English.</p>
        <input id="vSearch" placeholder="Pesquisar / Search..." aria-label="Search vocabulary">
        <select id="vLevel"><option>Todos</option>${["A1","A2","B1","B2","C1","C2"].map(x=>`<option>${x}</option>`).join("")}</select>
        <select id="vTopic"><option>Todos os temas</option>${[...new Set(vocabulary.map(x=>x[2]))].map(x=>`<option>${safe(x)}</option>`).join("")}</select>
        <p id="vCount"></p><div id="vResults" class="pt-grid"></div>
    `);
    const render = () => {
        const q=document.getElementById("vSearch").value.toLowerCase();
        const l=document.getElementById("vLevel").value;
        const t=document.getElementById("vTopic").value;
        const results=vocabulary.filter(x=>
            (l==="Todos"||x[3]===l)&&(t==="Todos os temas"||x[2]===t)&&
            x.slice(0,3).some(v=>v.toLowerCase().includes(q)));
        document.getElementById("vCount").textContent=`${results.length} palavras encontradas / words found`;
        document.getElementById("vResults").innerHTML=results.map(x=>`
            <article class="pt-card"><span class="pt-small">${safe(x[2])} · ${x[3]}</span>
            <h3>${safe(x[0])}</h3><p>${safe(x[1])}</p>
            <button data-learn="vocabulary">Aprendi / Learned ✓</button></article>`).join("")||"Não foram encontradas palavras. / No words found.";
    };
    document.getElementById("vSearch").addEventListener("input",render);
    document.getElementById("vLevel").addEventListener("change",render);
    document.getElementById("vTopic").addEventListener("change",render);
    render();
}

function showVerbs() {
    main.innerHTML=panel("Verbos / Verbs",`
        <p>Escolhe um verbo para ver as conjugações. / Choose a verb to see its conjugations.</p>
        <input id="verbSearch" placeholder="Pesquisar verbo / Search verb">
        <div id="verbResults"></div>`);
    const render=()=>{
        const q=document.getElementById("verbSearch").value.toLowerCase();
        const found=verbs.filter(v=>(v.pt+" "+v.en).toLowerCase().includes(q));
        document.getElementById("verbResults").innerHTML=found.map((v,i)=>`
        <details class="pt-card"><summary><strong>${safe(v.pt)}</strong> — ${safe(v.en)}</summary>
        ${["present","past","future"].map((tense,j)=>`
        <h4>${["Presente / Present","Pretérito perfeito / Past","Futuro / Future"][j]}</h4>
        <div class="pt-grid">${v[tense].map((form,k)=>`
        <div class="pt-example">${["Eu","Tu","Ele/Ela","Nós","Vós","Eles/Elas"][k]}<br><strong>${safe(form)}</strong></div>`).join("")}</div>`).join("")}
        <button data-learn="verbs">Aprendi / Learned ✓</button></details>`).join("")||"Verbo não encontrado / Verb not found.";
    };
    document.getElementById("verbSearch").addEventListener("input",render);
    render();
}

function showSentences() {
    main.innerHTML=panel("Frases / Sentences",`
        <p>Frases úteis em português europeu. / Useful European Portuguese sentences.</p>
        <input id="sSearch" placeholder="Pesquisar / Search">
        <select id="sLevel"><option>Todos</option>${["A1","A2","B1","B2","C1","C2"].map(x=>`<option>${x}</option>`).join("")}</select>
        <div id="sResults"></div>`);
    const render=()=>{
        const q=document.getElementById("sSearch").value.toLowerCase();
        const l=document.getElementById("sLevel").value;
        document.getElementById("sResults").innerHTML=sentences.filter(x=>
        (l==="Todos"||x[2]===l)&&x.join(" ").toLowerCase().includes(q)).map(x=>`
        <article class="pt-card"><span class="pt-small">${x[2]}</span>${example(x[0],x[1])}
        <button data-learn="sentences">Aprendi / Learned ✓</button></article>`).join("")||"Nenhuma frase encontrada / No sentences found.";
    };
    document.getElementById("sSearch").addEventListener("input",render);
    document.getElementById("sLevel").addEventListener("change",render);
    render();
}

function showConversations() {
    main.innerHTML=panel("Conversas / Conversations",`
    <p>Pratica conversas reais. / Practise real conversations.</p>
    <select id="cLevel"><option>Todos</option>${["A1","A2","B1","B2","C1","C2"].map(x=>`<option>${x}</option>`).join("")}</select>
    <div id="cResults"></div>`);
    const render=()=>{
        const l=document.getElementById("cLevel").value;
        document.getElementById("cResults").innerHTML=conversations.filter(c=>l==="Todos"||c.level===l).map(c=>`
        <details class="pt-card" open><summary><strong>${safe(c.title)}</strong> · ${c.level}</summary>
        ${c.lines.map(line=>`<div class="pt-example"><strong>${line[0]}: ${safe(line[1])}</strong><div class="pt-translation">${safe(line[2])}</div></div>`).join("")}
        <button data-learn="conversations">Pratiquei / Practised ✓</button></details>`).join("");
    };
    document.getElementById("cLevel").addEventListener("change",render);
    render();
}

function showDifferences() {
    main.innerHTML=panel("Diferenças entre palavras / Word Differences",`
    <p>Aprende palavras parecidas com usos diferentes. / Learn similar words with different uses.</p>
    <input id="dSearch" placeholder="Pesquisar / Search">
    <div id="dResults"></div>`);
    const render=()=>{
        const q=document.getElementById("dSearch").value.toLowerCase();
        const found=wordDifferences.filter(x=>x.join(" ").toLowerCase().includes(q));
        document.getElementById("dResults").innerHTML=found.map(x=>`
        <article class="pt-card"><h3>${safe(x[0])}</h3><p>${safe(x[1])}</p>
        ${x.slice(2).map(e=>`<div class="pt-example">${safe(e)}</div>`).join("")}
        <button data-learn="differences">Aprendi / Learned ✓</button></article>`).join("")||"Nenhum resultado / No results.";
    };
    document.getElementById("dSearch").addEventListener("input",render);
    render();
}

function showGrammar() {
    main.innerHTML=panel("Gramática / Grammar",`
    <p>Regras simples com exemplos. / Simple rules with examples.</p>
    ${grammar.map(g=>`<details class="pt-card"><summary><strong>${safe(g[0])}</strong></summary>
    <p>${safe(g[1])}</p><div class="pt-example">${safe(g[2])}</div>
    <button data-learn="grammar">Aprendi / Learned ✓</button></details>`).join("")}`);
}

function showQuiz() {
    quizIndex=0;quizScore=0;quizAnswered=false;
    quizOrder=[...quizQuestions.keys()].sort(()=>Math.random()-.5);
    renderQuiz();
}
function renderQuiz() {
    if(quizIndex>=quizOrder.length) {
        main.innerHTML=panel("Resultado / Result",`
        <h3>Terminaste! / You finished!</h3>
        <p>Resultado / Score: ${quizScore} / ${quizOrder.length}</p>
        <p>${Math.round(quizScore/quizOrder.length*100)}%</p>
        <button data-page="quiz">Tentar novamente / Try again</button>
        <button data-page="home">Início / Home</button>`);
        return;
    }
    const q=quizQuestions[quizOrder[quizIndex]];
    main.innerHTML=panel("Prática / Quiz",`
    <p>Pergunta / Question ${quizIndex+1} de ${quizOrder.length}</p>
    <div class="pt-progress"><div class="pt-progress-fill" style="width:${quizIndex/quizOrder.length*100}%"></div></div>
    <h3>${safe(q.q)}</h3>
    <div class="pt-grid">${q.options.map((o,i)=>`<button data-answer="${i}">${safe(o)}</button>`).join("")}</div>
    <p id="quizFeedback"></p>
    <button id="nextQuestion" hidden>Próxima / Next →</button>`);
    main.querySelectorAll("[data-answer]").forEach(btn=>btn.addEventListener("click",()=>{
        if(quizAnswered)return;
        quizAnswered=true;
        const chosen=Number(btn.dataset.answer);
        const correct=chosen===q.correct;
        if(correct){quizScore++;setProgress();}
        document.getElementById("quizFeedback").textContent=correct
        ?"Correto! Muito bem! / Correct! Well done! 💙"
        :`Não é essa. / Not quite. Resposta correta / Correct answer: ${q.options[q.correct]}`;
        main.querySelectorAll("[data-answer]").forEach(b=>b.disabled=true);
        document.getElementById("nextQuestion").hidden=false;
    }));
    document.getElementById("nextQuestion").addEventListener("click",()=>{
        quizIndex++;quizAnswered=false;renderQuiz();
    });
}

function showPage(page) {
    if(page==="home")showHome();
    else if(page==="vocabulary")showVocabulary();
    else if(page==="verbs")showVerbs();
    else if(page==="sentences")showSentences();
    else if(page==="conversations")showConversations();
    else if(page==="differences")showDifferences();
    else if(page==="grammar")showGrammar();
    else if(page==="quiz")showQuiz();
    window.scrollTo({top:0,behavior:"smooth"});
}

document.addEventListener("click",e=>{
    const page=e.target.closest("[data-page]");
    if(page)showPage(page.dataset.page);

    const learned=e.target.closest("[data-learn]");
    if(learned){
        setProgress();
        learned.textContent="Aprendido! / Learned! ✓";
        learned.disabled=true;
    }

    const level=e.target.closest("[data-level]");
    if(level){
        currentLevel=level.dataset.level;
        showVocabulary();
        const select=document.getElementById("vLevel");
        if(select)select.value=currentLevel;
        select?.dispatchEvent(new Event("change"));
    }
});

document.getElementById("themeButton").addEventListener("click",()=>{
    document.body.classList.toggle("light");
    const light=document.body.classList.contains("light");
    document.getElementById("themeButton").textContent=
        light?"🌙 Modo escuro / Dark mode":"☀️ Modo claro / Light mode";
    localStorage.setItem("ptLearnTheme",light?"light":"dark");
});

if(localStorage.getItem("ptLearnTheme")==="light"){
    document.body.classList.add("light");
    document.getElementById("themeButton").textContent="🌙 Modo escuro / Dark mode";
}

showHome();
