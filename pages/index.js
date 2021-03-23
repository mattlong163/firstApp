import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Cyber Zoo
        </h1>

        <div className={styles.grid}>
          <a href="/iFrame" className={styles.card}>
            <h3>iFrames</h3>
            <p>Starting off easy with a youtube iFrame</p>
          </a>

          <a href="/APIWeather" className={styles.card}>
            <h3>Basic weather API</h3>
            <p>How is the weather up there? Find out Here!</p>
          </a>

          <a href="/currencyConverter" className={styles.card}>
            <h3>Currency Converter</h3>
            <p>How much is your money worth overseas</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Facebook log in</h3>
            <p>Whoooooo are you? Lets log in to find out</p>
          </a>

          <a href="/iFrame" className={styles.card}>
            <h3>Session expiration page</h3>
            <p>You better keep active here or we will kick you out</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Some sort of API list </h3>
            <p>maybe let it be a weather or map or something</p>
          </a>

        </div>
      </main>
    </div>
  )
}
