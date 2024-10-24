import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for all your needs.</p>
        <a href="/about" className={styles.ctaButton}>
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
