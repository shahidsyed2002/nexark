import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles.services}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Our Services</h1>
          <p className={styles.heroSubtitle}>
            We offer a comprehensive range of digital services to help your business succeed online.
          </p>
        </div>
      </section>

      <section className={styles.servicesList}>
        <div className="container">
          <div className={styles.service}>
            <div className={styles.serviceContent}>
              <h2>Web Development</h2>
              <p>
                We create responsive, modern websites and web applications that look great on any device and provide 
                exceptional user experiences. Our development process focuses on performance, accessibility, and SEO 
                to ensure your website reaches its full potential.
              </p>
              <h3>What we offer:</h3>
              <ul>
                <li>Custom website development</li>
                <li>E-commerce solutions</li>
                <li>Content management systems</li>
                <li>Web application development</li>
                <li>Website maintenance and support</li>
              </ul>
            </div>
            <div className={styles.serviceImage}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.serviceImage}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                </svg>
              </div>
            </div>
            <div className={styles.serviceContent}>
              <h2>UI/UX Design</h2>
              <p>
                Our design team creates beautiful, intuitive interfaces that provide exceptional user experiences. 
                We focus on understanding your users' needs and behaviors to create designs that are not only visually 
                appealing but also functional and easy to use.
              </p>
              <h3>What we offer:</h3>
              <ul>
                <li>User research and analysis</li>
                <li>Wireframing and prototyping</li>
                <li>User interface design</li>
                <li>User experience optimization</li>
                <li>Design systems and style guides</li>
              </ul>
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.serviceContent}>
              <h2>Mobile Development</h2>
              <p>
                We build cross-platform mobile applications that work seamlessly on iOS and Android devices. 
                Our mobile development approach ensures your app is fast, reliable, and provides a native-like 
                experience while maintaining a single codebase.
              </p>
              <h3>What we offer:</h3>
              <ul>
                <li>Native iOS and Android development</li>
                <li>Cross-platform development</li>
                <li>Progressive web apps</li>
                <li>App store optimization</li>
                <li>App maintenance and updates</li>
              </ul>
            </div>
            <div className={styles.serviceImage}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.serviceImage}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                </svg>
              </div>
            </div>
            <div className={styles.serviceContent}>
              <h2>Digital Marketing</h2>
              <p>
                We help you reach your target audience and grow your business through strategic digital marketing. 
                Our data-driven approach ensures your marketing efforts are effective and provide a strong return 
                on investment.
              </p>
              <h3>What we offer:</h3>
              <ul>
                <li>Search engine optimization (SEO)</li>
                <li>Social media marketing</li>
                <li>Content marketing</li>
                <li>Email marketing</li>
                <li>Analytics and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>1</div>
              <h3>Discovery</h3>
              <p>We start by understanding your business, goals, and requirements to ensure we deliver the right solution.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>2</div>
              <h3>Planning</h3>
              <p>We create a detailed plan and strategy for your project, including timelines, milestones, and deliverables.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>3</div>
              <h3>Design & Development</h3>
              <p>Our team designs and develops your solution, keeping you involved throughout the process.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>4</div>
              <h3>Testing & Launch</h3>
              <p>We thoroughly test your solution to ensure it meets our quality standards before launching it.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processStepNumber}>5</div>
              <h3>Support & Growth</h3>
              <p>We provide ongoing support and help you grow and evolve your digital presence over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to discuss your project and how we can help you achieve your goals.</p>
        <a href="/contact" className="btn btn-primary btn-lg">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Services;
