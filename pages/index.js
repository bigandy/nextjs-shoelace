import Head from 'next/head';
import styles from '../styles/Home.module.css';

import dynamic from 'next/dynamic';

// import { SlButton } from '@shoelace-style/shoelace/dist/react';

const SlButton = dynamic(
  () =>
    import('../node_modules/@shoelace-style/shoelace/dist/react').then(
      (mod) => mod.SlButton
    ),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <SlButton size="small">small</SlButton>
        <SlButton size="medium">medium</SlButton>
        <SlButton size="large">large</SlButton>
      </main>
    </div>
  );
}
