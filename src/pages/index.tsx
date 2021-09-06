import Head from 'next/head';
import { Container } from '../styles/pages/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <h1>Boilerplate ReactJS with NextJS</h1>
        <p>
          Template by <a href="https://github.com/elianbecali">Elian Becali</a>.
        </p>
      </Container>
    </>
  );
}
