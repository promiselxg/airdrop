import GlobalStyle from '../styles/globals.style';

function MyApp({ Component, ...pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
