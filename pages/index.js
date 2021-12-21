import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Sidebar */}
        <Sidebar />

        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}
