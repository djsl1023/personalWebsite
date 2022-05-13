import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import styles from '../styles/info.module.css';

export default function Info() {
  return (
    <div>
      <Head>
        <title>Daniel Lee</title>
        <meta name="description" content="Personal Website Main Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.infoContainer}>
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}
