const { WebClient } = require('@slack/web-api');
require("dotenv").config();


console.log("SLACK_TOKEN :", process.env.SLACK_TOKEN);
console.log('Getting started with Node Slack SDK');

if (process.env.SLACK_TOKEN == undefined) {
  console.log("Need SLACK_TOKEN in .env");
  process.exit(9);
}
// The current webclient
const web = new WebClient(process.env.SLACK_TOKEN);
// The current date
const currentTime = new Date().toTimeString();

(async () => {
  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: '#일반',
      text: `The current time is ${currentTime}`,
    });
    console.log('Message posted!');
  } catch (error) {
    console.log(error);
  }

})();