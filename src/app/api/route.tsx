import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';
import { Email } from '../components/Email';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? '');

export const POST = async () => {
  const html = await render(
    <Email
      previewText={'A new comment was added'}
      comment={{
        userName: 'SyrupIsLyfe',
        text: `Thank you for making the maple bacon waffle, it's changed my life!!!!`,
      }}
    />,
  );

  const options = {
    from: 'you@example.com',
    to: 'user@gmail.com',
    subject: 'hello world',
    html: html,
  };

  sendgrid.send(options);

  // send the email
};
