// pages/index.tsx

import Head from 'next/head';
import TopHeader from './TopHeader/page';
import Footer from './Footer/page';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
      </Head>
      <header>
      <TopHeader />
        <h1>Welcome to my Next.js App</h1>

      </header>
      <main>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
};

export default Home;
