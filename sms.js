const accountSid = "xxxxx";
const authToken = "xxxxx";
const client = require('twilio')(accountSid, authToken);
let recipient = "+14083686126";
let code = getCode()
client.messages
  .create({
     body: `Here is your verification code: ${code}`,
     from: '+16188512034',
     to: `${recipient}`
   })
  .then(message => console.log(message.sid));


  function getCode()
  {
    return Math.trunc((Math.random()*100000));
  }
