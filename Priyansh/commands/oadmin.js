module.exports.config = {
  name: "admin",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "Auto reply when someone mentions owner",
  commandCategory: "system",
  usages: "",
  cooldowns: 0
};

const OWNER_UID = "61572149661168";

module.exports.handleEvent = async function ({ api, event }) {

  // Ignore bot's own message
  if (event.senderID == api.getCurrentUserID()) return;

  if (!event.mentions || Object.keys(event.mentions).length == 0) return;

  const mentionIDs = Object.keys(event.mentions);

  if (!mentionIDs.includes(OWNER_UID)) return;

  // 🔥 Stylish Reply Messages
  const messages = [
    "🙄 Arey yaar… mujhse baat karo na, boss ko kyun disturb kar rahe ho?",
    "😏 Kya hua? Mere boss ko kyun bula rahe ho?",
    "🤭 Boss shayad abhi busy mode me hain.",
    "😴 Mera boss shayad abhi sona kar rahe honge.",
    "👀 Lagta hai kisi ko boss ki yaad aa rahi hai?",
    "💅 Jo kaam hai mujhe batao, main forward kar dungi.",
    "📴 Boss abhi offline lag rahe hain.",
    "😐✌️ Boss busy hain… thoda sabr karo.",
    "🔥 Boss ko mention karne se pehle permission li thi kya?"
  ];

  const randomReply = messages[Math.floor(Math.random() * messages.length)];

  // 😏 Reaction bhi milega
  api.setMessageReaction("😏", event.messageID, () => {}, true);

  return api.sendMessage(randomReply, event.threadID, event.messageID);
};

module.exports.run = async function () {};
