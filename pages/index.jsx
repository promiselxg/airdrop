import Head from 'next/head';
import Header from '../components/header/Header';
import About from '../components/section/About';

const Home = () => {
  return (
    <>
      <Head>
        <title>Demo App</title>
      </Head>
      <Header />
      <About />
    </>
  );
};

export default Home;
