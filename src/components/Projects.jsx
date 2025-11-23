import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ 
              backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>E-commerce Test Automation</h3>
          <p>
            Comprehensive test automation framework for an e-commerce platform using
            Selenium and Python. Includes API testing, UI testing, and CI/CD integration
            with 95% test coverage.
          </p>
          <div className="project-tech">
            <span>Selenium</span>
            <span>Python</span>
            <span>Pytest</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>API Testing Suite</h3>
          <p>
            Automated API testing solution with comprehensive test scenarios covering
            authentication, data validation, and performance testing using Postman and
            Newman.
          </p>
          <div className="project-tech">
            <span>Postman</span>
            <span>JavaScript</span>
            <span>Newman</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Mobile App Testing</h3>
          <p>
            End-to-end mobile application testing framework using Appium and Cypress.
            Covers functional testing, usability testing, and cross-platform compatibility.
          </p>
          <div className="project-tech">
            <span>Appium</span>
            <span>Cypress</span>
            <span>TypeScript</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
