import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Nexark Studio</h1>
          <p className={styles.heroSubtitle}>
            Creating innovative digital experiences with cutting-edge technology and design.
          </p>
          <div className={styles.heroImage}>
             <img src="/hero.jpeg" alt="Hero Image" />
          </div>
          <div className={styles.heroCta}>
            <a href="/contact" className="btn btn-primary btn-lg">
              Get in Touch
            </a>
            <a href="/services" className="btn btn-outline-primary btn-lg">
              Our Services
            </a>
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>What We Offer</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Web Development</h3>
            <p>
              We create responsive, modern websites and web applications using the latest technologies and best practices.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>UI/UX Design</h3>
            <p>
              Our design team creates beautiful, intuitive interfaces that provide exceptional user experiences.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Mobile Development</h3>
            <p>
              We build cross-platform mobile applications that work seamlessly on iOS and Android devices.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Digital Marketing</h3>
            <p>
              Focuses on overall strategies for growth, including brand awareness and conversions.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>SEO (Search Engine Optimization)</h3>
            <p>
             Highlights improving search engine rankings and targeting the right audience.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>SMM (Social Media Marketing)</h3>
            <p>
             Emphasizes building trust and engagement through social media campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h2>About Us</h2>
          <p>
            Nexark Studio is a team of passionate designers and developers dedicated to creating exceptional digital experiences.
            We combine creativity with technical expertise to deliver solutions that exceed expectations.
          </p>
          <a href="/about" className="btn btn-outline-primary">
            Learn More About Us
          </a>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={styles.cta}>
        <h2>Ready to Start Your Project?</h2>
        <p>Let's work together to bring your ideas to life.</p>
        <a href="/contact" className="btn btn-primary btn-lg">
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default Home;