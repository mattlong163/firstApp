import styles from '../styles/Home.module.css' 

const iFrame = () => {
    return (
        <div className={styles.container}>
        <h1>WEATHER</h1>
        <a href="/" className={styles.HomeButton}>
        <h2>Home</h2>
        </a>
        </div>
    )
}

export default iFrame;