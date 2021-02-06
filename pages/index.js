import Head from "next/head";
import Layout from "../components/layout/layout";
export default function Home() {
  return (
    <Layout>
      <div className='container-home-page'>
        <Head>
          <title>Acalisthenics Workout Generator</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='container-home-page__controls'>
          <div className='container-home-page__start-routine-button'>
            <h1 className='primary-color'>VUAMOS</h1>
          </div>
          <div className='container-home-page__options'>
            <div className='container-home-page__option-level'></div>
            <div className='container-home-page__option-body-target'></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container-home-page {
          display: flex;
          flex: 0 0 96%;
          margin: auto;
          height: 84vh;
          background-color: #e5e5e5;
        }
        .container-home-page__controls {
          flex: 1 0 100%;
          margin: 0 auto;
          display: flex;
          flex-flow: column;
        }
        .container-home-page__start-routine-button {
          margin: 0 auto;
          font-size: 4rem;
          font-weight: bold;
        }
        .container-home-page__start-routine-button h1 {
          font-family: "Open Sans", sans-serif;
          font-weight: bold;
        }
        .container-home-page__start-routine-button h1:hover {
          cursor: pointer;
          color: white;
        }
        .container-home-page__options {
          display: flex;
          flex: 1 0 auto;
          background-color: gray;
        }
        .container-home-page__option-level,
        .container-home-page__option-body-target {
          flex: 1 0 auto;
          background-color: white;
        }
      `}</style>
    </Layout>
  );
}
