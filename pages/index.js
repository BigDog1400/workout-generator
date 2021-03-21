import Head from "next/head";
import Layout from "../components/layout/layout";
import SelectorTypeRoutine from "../components/selector-type-routine";
import SelectorLevelRoutine from "../components/selector-level-routine";

import styles from "./index.module.scss";

export default function Home() {
  const startRoutine = () => {
    console.log("start routine");
  };
  return (
    <Layout>
      <Head>
        <title>Acalisthenics Workout Generator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.HomePageWrapper}>
        <div className={styles.RoutineControlsSection}>
          <h1>
            <span>Workout Generator</span>
          </h1>
          <div className={styles.RoutineControlsSectionOptions}>
            <div className={styles.RoutineControlsSectionOption}>
              <SelectorLevelRoutine></SelectorLevelRoutine>
            </div>
            <div className={styles.RoutineControlsSectionOption}>
              <SelectorTypeRoutine></SelectorTypeRoutine>
            </div>
          </div>
          <div className={styles.StartButton}>
            <h2 onClick={startRoutine}>
              <span>VUAMOS</span>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
