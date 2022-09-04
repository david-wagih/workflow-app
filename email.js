const sgMail = require('@sendgrid/mail');
let recipient = "nakul.indus@gmail.com"
let code = getCode();
sgMail.setApiKey('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');
const msg = {
  to: `${recipient}`,
  from: 'josephmcgold@gmail.com', // Use the email address or domain you verified above
  subject: 'Verification Code',
  text: `Here is your verification code: ${code}`,
  html: `<p>Here is your verification code: </p><strong>${code}</strong>`,
};
//ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();

function getCode()
{
  return Math.trunc((Math.random()*100000));
}