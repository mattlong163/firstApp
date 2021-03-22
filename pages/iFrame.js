import styles from '../styles/Home.module.css' 

const iFrame = () => {
    return (
        <div className={styles.container}>
        <h1>Here we have a basic youtube iFrame</h1>
        <iframe src='https://www.youtube.com/embed/Fuj4UQTHHks'
        width="50%"
        height="600"
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        />
        <a href="/" className={styles.HomeButton}>
        <h2>Home</h2>
        </a>
        </div>
    )
}

export default iFrame;