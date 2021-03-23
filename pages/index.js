import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout/layout";
import SelectorTypeRoutine from "../components/selector-type-routine";
import SelectorLevelRoutine from "../components/selector-level-routine";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import LoadingSpinner from "../components/loading-spinner";
import VisualizerRoutine from "../components/visualizer-routine";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [routineGenerate, setRoutineGenerate] = useState(null);
  const currentOptions = useSelector(({ levelTraining, typeTraining }) => {
    return {
      level: levelTraining.level,
      type: typeTraining.type
    };
  });
  const startRoutine = async () => {
    setLoading(true);
    const res = await fetch(`/api/generateRandomRoutine`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...currentOptions
      })
    });
    const data = await res.json();
    console.log(data);
    setRoutineGenerate(data);
    setLoading(false);
  };
  return (
    <Layout>
      <Head>
        <title>Acalisthenics Workout Generator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.HomePageWrapper}>
        {loading ? (
          <div className={styles.LoadingSpinner}>
            <LoadingSpinner></LoadingSpinner>
          </div>
        ) : !routineGenerate ? (
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
            <button
              onClick={startRoutine}
              className={`btn btn-primary ${styles.StartButton}`}
            >
              VUAMOS
            </button>
          </div>
        ) : (
          <div className={styles.VisualizerRoutine}>
            <VisualizerRoutine {...routineGenerate} />
          </div>
        )}
      </div>
    </Layout>
  );
}
