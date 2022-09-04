export const config = {
  secret: String(process.env.SECRET),
  host: String(process.env.NEXT_PUBLIC_HOST),
  accountSid: String(process.env.accountSid),
  authToken: String(process.env.authToken),
};
