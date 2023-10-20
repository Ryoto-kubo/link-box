import Head from 'next/head';

export const CustomHead = ({ title = '' }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
