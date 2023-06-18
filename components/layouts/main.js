import Head from 'next/head';
import NavBar from '@/components/navigation/NavBar';

export default function Main({ title, description, className, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavBar />
      <main className={className}>
        {children}
      </main>
    </>
  );
}
