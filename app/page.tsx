// pages/index.tsx
import Head from "next/head";
// import TopHeader from './home/TopHeader';
// import Footer from './home/Footer';
import Homee from "./home/home";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
      </Head>
      <header>{/* <TopHeader /> */}</header>
      <main>
        <Homee />
      </main>
      <footer>{/* <Footer/> */}</footer>
    </div>
  );
};

export default Home;
