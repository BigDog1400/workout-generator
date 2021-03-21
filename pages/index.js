import Head from "next/head";
import Layout from "../components/layout/layout";
import SelectorTypeRoutine from "../components/selector-type-routine";
import SelectorLevelRoutine from "../components/selector-level-routine";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Acalisthenics Workout Generator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.HomePageWrapper}>
        <div className={styles.RoutineControlsSection}>
          <div className={styles.RoutineControlsSectionOptions}>
            <div className={styles.RoutineControlsSectionOption}>
              <SelectorLevelRoutine></SelectorLevelRoutine>
            </div>
            <div className={styles.RoutineControlsSectionOption}>
              <SelectorTypeRoutine></SelectorTypeRoutine>
            </div>
          </div>
          <div className={styles.StartButton}>
            <h1>
              <span>VUAMOS</span>
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
