import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1>Welcome! The House of Flowers. </h1>
            <h3>Best flowers will love you forever.!</h3>
            <button className={styles.button}>
                <a href="#about">Flowers</a>
            </button>
        </section>
    );
};

export default Hero;
