import { Email } from './components/Email';

export default function Home() {
  return (
    <Email
      previewText={'A new comment was added'}
      comment={{
        userName: 'SyrupIsLyfe',
        text: `Thank you for making the maple bacon waffle, it's changed my life!!!!`,
      }}
    />
  );
}
