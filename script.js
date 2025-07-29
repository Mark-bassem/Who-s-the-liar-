const riddles = [
    {
        story: "في أحد الأيام، تم كسر تمثال في المتحف الساعة 3 مساءً.",
        liar: "ahmed",
        statements: {
            ahmed: "👨‍🦰 أحمد: كنت في البيت الساعة 3، عندي تسجيل من الكاميرا.",
            sara: "👩‍🦱 سارة: أنا كنت في المتحف، بس ما سمعت أي صوت.",
            sami: "👨‍🦳 سامي: كنت مع سارة في الكافيتيريا وقتها.",
            nada: "👩‍🦰 ندى: أنا شفت أحمد في المتحف الساعة 3."
        }
    },
    {
        story: "تمت سرقة هاتف في الفصل الدراسي أثناء الاستراحة.",
        liar: "sami",
        statements: {
            ahmed: "👨‍🦰 أحمد: كنت عند المدير وقتها.",
            sara: "👩‍🦱 سارة: كنت ألعب مع ندى في الساحة.",
            sami: "👨‍🦳 سامي: ما كنت في المدرسة أصلاً.",
            nada: "👩‍🦰 ندى: شفت سامي داخل الفصل وقت السرقة."
        }
    },
    {
        story: "ضاعت مفاتيح المعمل بعد انتهاء الحصة الأخيرة.",
        liar: "nada",
        statements: {
            ahmed: "👨‍🦰 أحمد: كنت في الحصة مع الأستاذ للنهاية.",
            sara: "👩‍🦱 سارة: المفاتيح كانت مع ندى طول اليوم.",
            sami: "👨‍🦳 سامي: خرجت من المعمل قبل النهاية بخمس دقائق.",
            nada: "👩‍🦰 ندى: أنا ما لمست المفاتيح أصلاً."
        }
    },
    {
    story: "انطفأت الأنوار فجأة في المسرح خلال عرض كبير.",
    liar: "sara",
    statements: {
        ahmed: "👨‍🦰 أحمد: كنت في غرفة التحكم أراجع الإضاءة.",
        sara: "👩‍🦱 سارة: ما كنت موجودة، جيت بعد ما النور رجع.",
        sami: "👨‍🦳 سامي: سارة كانت أقرب وحدة لغرفة الكهرباء.",
        nada: "👩‍🦰 ندى: شفت أحمد يخرج من الغرفة قبل الانطفاء بدقائق."
    }
},
{
    story: "اختفى مشروع أحد الطلاب من على الحاسوب في معمل المدرسة.",
    liar: "nada",
    statements: {
        ahmed: "👨‍🦰 أحمد: كنت أشتغل على مشروعي جنب الجهاز.",
        sara: "👩‍🦱 سارة: ندى كانت تمسك الفلاش ميموري قبل الاختفاء.",
        sami: "👨‍🦳 سامي: الجهاز عمل إعادة تشغيل فجأة.",
        nada: "👩‍🦰 ندى: ما لمستش أي جهاز في المعمل."
    }
},
{
    story: "تم العثور على دفتر درجات الأستاذ ملقى بجانب سلة المهملات.",
    liar: "sami",
    statements: {
        ahmed: "👨‍🦰 أحمد: شفت سامي يفتح درج المكتب.",
        sara: "👩‍🦱 سارة: شفت ندى تمشي بالقرب من المكتب.",
        sami: "👨‍🦳 سامي: ما دخلتش المكتب أصلاً.",
        nada: "👩‍🦰 ندى: أنا كنت في الفصل مع سارة."
    }
},
{
    story: "اختفى الطعام من ثلاجة المدرسة في الليل.",
    liar: "ahmed",
    statements: {
        ahmed: "👨‍🦰 أحمد: أنا أصلاً كنت في البيت وما جيتش المدرسة.",
        sara: "👩‍🦱 سارة: شفت ندى وهي تدخل المطبخ.",
        sami: "👨‍🦳 سامي: كنت نايم في غرفة الحارس.",
        nada: "👩‍🦰 ندى: أنا فقط دخلت لأخذ الماء، لم أفتح الثلاجة."
    }
},
{
    story: "تخرب أحد المشاريع الفنية قبل عرضه بدقائق.",
    liar: "nada",
    statements: {
        ahmed: "👨‍🦰 أحمد: كنت أساعد سارة في ترتيب الطاولات.",
        sara: "👩‍🦱 سارة: ندى كانت وحدها في القاعة قبل التخريب.",
        sami: "👨‍🦳 سامي: شفت أحمد يخرج ومعاه أدوات الرسم.",
        nada: "👩‍🦰 ندى: ما دخلتش القاعة خالص."
    }
},
{
    story: "أُرسل بريد مجهول للمدير يحتوي على صور شخصية.",
    liar: "sami",
    statements: {
        ahmed: "👨‍🦰 أحمد: سامي كان يستخدم الكمبيوتر في وقت الإرسال.",
        sara: "👩‍🦱 سارة: ما شفتش مين دخل غرفة الحاسوب.",
        sami: "👨‍🦳 سامي: ما استخدمتش الكمبيوتر أصلاً.",
        nada: "👩‍🦰 ندى: شفت أحمد يفتح الإيميل الخاص بالإدارة."
    }
},
{
    story: "انكسر زجاج أحد النوافذ خلال الاستراحة.",
    liar: "sara",
    statements: {
        ahmed: "👨‍🦰 أحمد: كنت في الفناء ألعب كرة.",
        sara: "👩‍🦱 سارة: أنا كنت في المكتبة طول الاستراحة.",
        sami: "👨‍🦳 سامي: شفت سارة قرب النافذة قبل الكسر.",
        nada: "👩‍🦰 ندى: النافذة اتكسرت بعد دقيقة من دخول سارة."
    }
},
{
    story: "عُثر على دفتر داخل خزانة أحد الطلاب بدون إذن.",
    liar: "ahmed",
    statements: {
        ahmed: "👨‍🦰 أحمد: ما قربتش من خزائن الطلبة.",
        sara: "👩‍🦱 سارة: شفت أحمد يفتح الخزانة دي.",
        sami: "👨‍🦳 سامي: كان في دفتر مش بتاعه فعلاً.",
        nada: "👩‍🦰 ندى: الخزانة دي أصلاً بتكون مقفولة دائمًا."
    }
},
{
    story: "شُوهت لوحة جدارية برسومات غير لائقة.",
    liar: "sami",
    statements: {
        ahmed: "👨‍🦰 أحمد: كنت في الفصل وقتها.",
        sara: "👩‍🦱 سارة: شفت سامي معاه ألوان.",
        sami: "👨‍🦳 سامي: ما كنتش موجود في المدرسة.",
        nada: "👩‍🦰 ندى: كنت وسارة بنرسم بعيد عن الجدار ده."
    }
},
{
    story: "أُحرقت أوراق مهمة في غرفة المعلمين.",
    liar: "nada",
    statements: {
        ahmed: "👨‍🦰 أحمد: كنت واقف برا الغرفة وشميت ريحة الحريق.",
        sara: "👩‍🦱 سارة: ندى دخلت الغرفة قبل الحريق.",
        sami: "👨‍🦳 سامي: شفت أحمد يحاول يطفّي النار.",
        nada: "👩‍🦰 ندى: ما قربتش من الغرفة خالص."
    }
},
{
    story: "نُشرت إشاعة خاطئة في الجروب المدرسي.",
    liar: "sara",
    statements: {
        ahmed: "👨‍🦰 أحمد: ما كتبتش أي حاجة في الجروب.",
        sara: "👩‍🦱 سارة: سمعت الشائعة من حد تاني.",
        sami: "👨‍🦳 سامي: سارة أول وحدة نشرتها.",
        nada: "👩‍🦰 ندى: شفت سارة تكتبها بنفسها."
    }
},
{
    story: "انفجرت عبوة ماء غازي في المقصف.",
    liar: "ahmed",
    statements: {
        ahmed: "👨‍🦰 أحمد: ما اشتريتش أي مشروب.",
        sara: "👩‍🦱 سارة: أحمد كان يهز العبوة قبل ما تنفجر.",
        sami: "👨‍🦳 سامي: كنت واقف جنبه وقت الانفجار.",
        nada: "👩‍🦰 ندى: العبوة كانت في إيده فعلاً."
    }
},
{
    story: "عُثر على هاتف أستاذ في درج أحد الطلاب.",
    liar: "sami",
    statements: {
        ahmed: "👨‍🦰 أحمد: ما قربتش من درج الأستاذ.",
        sara: "👩‍🦱 سارة: سامي كان آخر واحد خرج من المكتب.",
        sami: "👨‍🦳 سامي: ما دخلتش المكتب أساساً.",
        nada: "👩‍🦰 ندى: شفت سامي يفتش الأدراج."
    }
},
{
    "story": "اختفى الطعام من ثلاجة المدرسة في الليل.",
    "liar": "ahmed",
    "statements": {
      "ahmed": "👨‍🦰 أحمد: أنا أصلاً كنت في البيت وما جيتش المدرسة.",
      "sara": "👩‍🦱 سارة: شفت ندى وهي تدخل المطبخ.",
      "sami": "👨‍🦳 سامي: كنت نايم في غرفة الحارس.",
      "nada": "👩‍🦰 ندى: أنا فقط دخلت لأخذ الماء، لم أفتح الثلاجة."
    }
  },
  {
    "story": "تخرب أحد المشاريع الفنية قبل عرضه بدقائق.",
    "liar": "nada",
    "statements": {
      "ahmed": "👨‍🦰 أحمد: كنت أساعد سارة في ترتيب الطاولات.",
      "sara": "👩‍🦱 سارة: ندى كانت وحدها في القاعة قبل التخريب.",
      "sami": "👨‍🦳 سامي: شفت أحمد يخرج ومعاه أدوات الرسم.",
      "nada": "👩‍🦰 ندى: ما دخلتش القاعة خالص."
    }
  },
  {
    "story": "أُرسل بريد مجهول للمدير يحتوي على صور شخصية.",
    "liar": "sami",
    "statements": {
      "ahmed": "👨‍🦰 أحمد: سامي كان يستخدم الكمبيوتر في وقت الإرسال.",
      "sara": "👩‍🦱 سارة: ما شفتش مين دخل غرفة الحاسوب.",
      "sami": "👨‍🦳 سامي: ما استخدمتش الكمبيوتر أصلاً.",
      "nada": "👩‍🦰 ندى: شفت أحمد يفتح الإيميل الخاص بالإدارة."
    }
  },
  {
    "story": "انكسر زجاج أحد النوافذ خلال الاستراحة.",
    "liar": "sara",
    "statements": {
      "ahmed": "👨‍🦰 أحمد: كنت في الفناء ألعب كرة.",
      "sara": "👩‍🦱 سارة: أنا كنت في المكتبة طول الاستراحة.",
      "sami": "👨‍🦳 سامي: شفت سارة قرب النافذة قبل الكسر.",
      "nada": "👩‍🦰 ندى: النافذة اتكسرت بعد دقيقة من دخول سارة."
    }
  },
  {
    "story": "عُثر على دفتر داخل خزانة أحد الطلاب بدون إذن.",
    "liar": "ahmed",
    "statements": {
      "ahmed": "👨‍🦰 أحمد: ما قربتش من خزائن الطلبة.",
      "sara": "👩‍🦱 سارة: شفت أحمد يفتح الخزانة دي.",
      "sami": "👨‍🦳 سامي: كان في دفتر مش بتاعه فعلاً.",
      "nada": "👩‍🦰 ندى: الخزانة دي أصلاً بتكون مقفولة دائمًا."
    }
  },
  {
    "story": "شُوهت لوحة جدارية برسومات غير لائقة.",
    "liar": "sami",
    "statements": {
      "ahmed": "👨‍🦰 أحمد: كنت في الفصل وقتها.",
      "sara": "👩‍🦱 سارة: شفت سامي معاه ألوان.",
      "sami": "👨‍🦳 سامي: ما كنتش موجود في المدرسة.",
      "nada": "👩‍🦰 ندى: كنت وسارة بنرسم بعيد عن الجدار ده."
    }
  },
  {
    "story": "أُحرقت أوراق مهمة في غرفة المعلمين.",
    "liar": "nada",
    "statements": {
      "ahmed": "👨‍🦰 أحمد: كنت واقف برا الغرفة وشميت ريحة الحريق.",
      "sara": "👩‍🦱 سارة: ندى دخلت الغرفة قبل الحريق.",
      "sami": "👨‍🦳 سامي: شفت أحمد يحاول يطفّي النار.",
      "nada": "👩‍🦰 ندى: ما قربتش من الغرفة خالص."
    }
  },
  {
    "story": "نُشرت إشاعة خاطئة في الجروب المدرسي.",
    "liar": "sara",
    "statements": {
      "ahmed": "👨‍🦰 أحمد: ما كتبتش أي حاجة في الجروب.",
      "sara": "👩‍🦱 سارة: سمعت الشائعة من حد تاني.",
      "sami": "👨‍🦳 سامي: سارة أول وحدة نشرتها.",
      "nada": "👩‍🦰 ندى: شفت سارة تكتبها بنفسها."
    }
  },
  {
    "story": "انفجرت عبوة ماء غازي في المقصف.",
    "liar": "ahmed",
    "statements": {
      "ahmed": "👨‍🦰 أحمد: ما اشتريتش أي مشروب.",
      "sara": "👩‍🦱 سارة: أحمد كان يهز العبوة قبل ما تنفجر.",
      "sami": "👨‍🦳 سامي: كنت واقف جنبه وقت الانفجار.",
      "nada": "👩‍🦰 ندى: العبوة كانت في إيده فعلاً."
    }
  },
  {
    "story": "عُثر على هاتف أستاذ في درج أحد الطلاب.",
    "liar": "sami",
    "statements": {
      "ahmed": "👨‍🦰 أحمد: ما قربتش من درج الأستاذ.",
      "sara": "👩‍🦱 سارة: سامي كان آخر واحد خرج من المكتب.",
      "sami": "👨‍🦳 سامي: ما دخلتش المكتب أساساً.",
      "nada": "👩‍🦰 ندى: شفت سامي يفتش الأدراج."
    }
  },
];

let currentRiddleIndex = 0;
let currentRiddle = null;
let attempts = 3;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let timerInterval;
let timeLeft = 30;

function playSound(id) {
    const sound = document.getElementById(id);
    if (sound) sound.play();
}

function displayRiddle(index) {
    document.body.classList.remove('shake');
    clearInterval(timerInterval);
    timeLeft = 30;
    attempts = 3;

    const story = document.getElementById('story');
    const characters = document.getElementById('characters');
    const feedback = document.getElementById('feedback');
    const timer = document.getElementById('timer');
    const tries = document.getElementById('tries');
    const scoreDisplay = document.getElementById('score');
    const highScoreDisplay = document.getElementById('highScore');

    story.classList.remove("fade-in");
    void story.offsetWidth;
    story.classList.add("fade-in");

    feedback.innerText = "";
    currentRiddle = riddles[index];
    story.innerText = "🧠 القصة: " + currentRiddle.story;
    characters.innerHTML = "";
    playSound("startSound");

    Object.keys(currentRiddle.statements).forEach(name => {
        const btn = document.createElement("button");
        btn.innerHTML = `<strong>${name}</strong>: "${currentRiddle.statements[name]}"`;
        btn.onclick = () => checkAnswer(name, btn);
        characters.appendChild(btn);
    });

    tries.innerText = `🌀 المحاولات المتبقية: ${attempts}`;
    scoreDisplay.innerText = `🌟 نتيجتك: ${score}`;
    highScoreDisplay.innerText = `🏆 أعلى نتيجة: ${highScore}`;

    timer.innerText = `⏱ الوقت المتبقي: ${timeLeft} ثانية`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timer.innerText = `⏱ الوقت المتبقي: ${timeLeft} ثانية`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            feedback.innerText = "⏰ انتهى الوقت! الإجابة كانت: " + currentRiddle.liar;
            feedback.style.color = "orange";
            setTimeout(nextRiddle, 3000);
        }
    }, 1000);
}

function checkAnswer(selected, btn) {
    const feedback = document.getElementById("feedback");
    const tries = document.getElementById("tries");

    if (selected === currentRiddle.liar) {
        playSound("correctSound");
        feedback.innerText = "✅ إجابة صحيحة!";
        feedback.style.color = "green";
        score += 10;
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
        }
        clearInterval(timerInterval);
        setTimeout(nextRiddle, 2000);
    } else {
        playSound("wrongSound");
        document.body.classList.add("shake");
        attempts--;
        feedback.innerText = `❌ إجابة خاطئة! المحاولات المتبقية: ${attempts}`;
        feedback.style.color = "red";
        btn.disabled = true;
        if (attempts <= 0) {
            clearInterval(timerInterval);
            feedback.innerText = "❌ خسرت اللغز! الشخص الكاذب كان: " + currentRiddle.liar;
            setTimeout(nextRiddle, 3000);
        }
    }

    tries.innerText = `🌀 المحاولات المتبقية: ${attempts}`;
}

function nextRiddle() {
    currentRiddleIndex = (currentRiddleIndex + 1) % riddles.length;
    displayRiddle(currentRiddleIndex);
}

function restartGame() {
    currentRiddleIndex = 0;
    score = 0;
    displayRiddle(currentRiddleIndex);
}

window.onload = () => {
    displayRiddle(currentRiddleIndex);
};