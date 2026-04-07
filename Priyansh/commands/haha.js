const fs = require("fs");
module.exports.config = {
  name: "haha",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "virat saini", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("haha") ||
react.includes("😂😂")) {
    var msg = {
        body: ``,attachment: fs.createReadStream(__dirname + `/noprefix/haha.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
