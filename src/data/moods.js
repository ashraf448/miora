export const moods = [
  { id: "unsure", label: "مش عارف", emoji: "💬", tone: "accent-blue", tip: "مفيش مشكلة إنك مش عارف. الكتابة الحرة أو نفَس هادي ممكن يوضّحوا الصورة." },
  { id: "tired", label: "مرهق", emoji: "🌙", tone: "accent-purple", tip: "جسمك وعقلك بيطلبوا راحة. جرّب استراحة قصيرة من غير شاشات." },
  { id: "sad", label: "حزين", emoji: "♡", tone: "accent-blue", tip: "الحزن شعور مؤقت ومقبول. اكتب اللي جواك أو كلّم حد بتثق فيه." },
  { id: "anxious", label: "قلقان", emoji: "⚠️", tone: "accent-orange", tip: "القلق بيهدى لما نبطّأ التنفس. جرّب تمرين تنفس لدقيقتين." },
  { id: "tense", label: "متوتر", emoji: "💨", tone: "accent-orange", tip: "التوتر بيتراكم في الجسم. شدّ عضلاتك وسيبها، أو خد نفس عميق وبطيء." },
  { id: "hopeful", label: "متفائل", emoji: "✨", tone: "accent-green", tip: "جميل! سجّل اللي مبسّطك النهارده عشان ترجعله وقت ما تحتاج." },
  { id: "calm", label: "هادي", emoji: "🍃", tone: "accent-green", tip: "استمتع بالهدوء ده، وممكن تكتب إيه اللي ساعدك توصله." },
  { id: "happy", label: "مبسوط", emoji: "☀️", tone: "accent-green", tip: "رائع! خد لحظة تلاحظ إيه اللي عمل اليوم ده حلو." },
];

export const getMood = (id) => moods.find((m) => m.id === id);

/** هل الشعور ممكن يستفيد من تمرين تنفس؟ */
export const needsCalm = (id) => ["anxious", "tense", "tired", "sad", "unsure"].includes(id);

export const todayKey = (d = new Date()) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};
