import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About Nexark Studio</h1>
          <p className={styles.heroSubtitle}>
            We are a team of passionate designers and developers dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyContent}>
          <h2 className="section-title">Our Story</h2>
          <p>
            Founded in 2020, Nexark Studio began with a simple mission: to create digital experiences that are both beautiful and functional. 
            Our founders, with backgrounds in design and development, saw a gap in the market for truly integrated digital solutions that 
            prioritize both aesthetics and performance.
          </p>
          <p>
            Since then, we've grown into a diverse team of designers, developers, and strategists who share a passion for creating 
            exceptional digital products. We've worked with clients across various industries, from startups to established enterprises, 
            helping them achieve their goals through thoughtful design and robust development.
          </p>
        </div>
        <div className={styles.storyImage}>
          <img src="/about.jpeg" alt="Nexark Studio Team" />
        </div>
      </section>

      <section className={styles.values}>
        <h2 className="section-title">Our Values</h2>
        <div className="grid grid-3">
          <div className={styles.valueCard}>
            <h3>Quality</h3>
            <p>
              We believe in doing things right the first time. Our commitment to quality means we never cut corners and always 
              deliver solutions that exceed expectations.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>
              We stay at the forefront of technology and design trends, constantly exploring new ways to solve problems and create 
              better experiences.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3>Collaboration</h3>
            <p>
              We believe the best results come from working closely with our clients and each other, sharing ideas and expertise 
              to achieve common goals.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <h2 className="section-title">Our Team</h2>
        <div className="grid grid-3">
          <div className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <img src="/placeholder-team1.jpg" alt="Team Member" />
            </div>
            <h3>Bharath kumar</h3>
            <p className={styles.teamMemberRole}> founder & Ceo & Creative Director</p>
            <p>
              With over 10 years of experience in design, Bharath kumar leads our creative team with vision and expertise.
            </p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <img src="/placeholder-team2.jpg" alt="Team Member" />
            </div>
            <h3>shahid</h3>
            <p className={styles.teamMemberRole}>Lead Developer</p>
            <p>
              shahid brings technical excellence and innovation to every project, ensuring our solutions are robust and scalable.
            </p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <img src="/placeholder-team3.jpg" alt="Team Member" />
            </div>
            <h3> Abdus Sami</h3>
            <p className={styles.teamMemberRole}>Manger</p>
            <p>
              Abdus Sami's passion for mangement of Nexark Studio helps us create experiences that are intuitive, accessible, and delightful.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Work With Us?</h2>
        <p>Let's create something amazing together.</p>
        <a href="/contact" className="btn btn-primary btn-lg">
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default About;
