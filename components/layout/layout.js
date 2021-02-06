import Head from "next/head";
import styles from "./styles.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.containerLayout}>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans:wght@800&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Generador de rutinas para atletas de Calistenia'
        />
      </Head>
      <main>{children}</main>
    </div>
  );
}
