import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Banner from '../components/Banner';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AirBnB</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto'>
        <section>
          <h2>Explore Nearby</h2>
        </section>
      </main>
    </div>
  );
};

export default Home;
