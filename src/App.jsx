
import "./App.css";

const skills = [
  "Java",
  "React",
  "SQL",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Spring Boot",
  "GitHub",
  "Machine Learning",
];

const internships = [
  {
    role: "Product Management Intern",
    company: "Karix Mobile Pvt. Ltd. (Tanla Platforms)",
    duration: "Oct 2026 – June 2027",
    points: [
      "Gaining hands-on exposure to CPaaS products and enterprise communication solutions across SMS, WhatsApp Business, RCS, RCM, and Email Marketing.",
      "Analyzing product workflows, customer requirements, business use cases, and multi-channel communication journeys.",
      "Exploring WhatsApp Business Platform, Meta APIs, application configuration, and messaging integrations.",
      "Understanding RCS, RCM, and email marketing workflows, campaign automation, and customer engagement capabilities.",
      "Studying ConnectOne infrastructure, network redundancy, and high-availability architecture.",
      "Contributing to product requirement analysis, user stories, functional specifications, and acceptance criteria.",
    ],
    tags: [
      "Product Management",
      "CPaaS",
      "WhatsApp Business",
      "RCS & RCM",
      "Email Marketing",
      "Meta APIs",
      "ConnectOne",
    ],
  },
  {
    role: "Web Development Intern (MERN Stack)",
    company: "SmartBridge",
    duration: "Virtual Internship",
    points: [
      "Developed a MERN stack-based Freelancing Platform with features supporting freelancer and client interactions.",
      "Built responsive frontend components using React.js to create an interactive and user-friendly interface.",
      "Worked with Node.js and Express.js to implement backend functionality and integrate REST APIs.",
      "Used MongoDB for data storage and management, connecting frontend operations with backend services.",
    ],
    tags: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    link: "https://github.com/KrishnaVamsi28/Freelancing-Application-MERN",
  },
];

const projects = [
  {
    title: "Employee Attrition Prediction",
    description:
      "Machine learning project to predict employee attrition using classification algorithms and genetic algorithm-based feature selection.",
    link: "https://github.com/KrishnaVamsi28/Employee_Attrition_Prediction",
  },
  {
    title: "Smart ContactVault",
    description:
      "Desktop-based Contact Management System developed using Java Swing and MySQL with CRUD operations, real-time search, and database integration.",
    link: "https://github.com/KrishnaVamsi28/SmartContactVault",
  },
  {
    title: "AI Based Language Translator",
    description:
      "AI-powered multilingual translation system using adaptive engine selection, Gemini API integration, and fallback translation services.",
    link: "https://github.com/KrishnaVamsi28/LanguageTranslator-Adaptive-Engine-Selection-",
  },
  {
    title: "Collaborative Drawing Canvas",
    description:
      "Collaborative drawing platform enabling multiple users to work together using live drawing synchronization, cursor tracking, and interactive collaboration features.",
    link: "https://github.com/KrishnaVamsi28/Collaborative-Canvas",
  },
  {
    title: "Campus Notifications System",
    description:
      "Campus notification platform designed to display real-time campus updates through REST APIs, category-based filtering, responsive components, and integrated backend logging.",
    link: "https://github.com/KrishnaVamsi28/Campus-Notifications-System",
  },
];

const certifications = [
  {
    title: "NxtWave",
    description: "CCBP 4.0 Intensive Training Program.",
    link: "https://drive.google.com/file/d/18lRK7FY6mRFIsqh_MB9Ou28sFcWzmr1Q/view?usp=drive_link",
  },
  {
    title: "SQL for Data Science",
    description: "Database management, SQL queries, and data analysis fundamentals.",
    link: "https://drive.google.com/file/d/1QD74Skm1JPG03ZQTGnrZTgFMZ2PHqzQp/view?usp=drive_link",
  },
  {
    title: "VaultofCodes",
    description: "Internship certification in Java Programming.",
    link: "https://drive.google.com/file/d/1w45Uuj9b2qpT3LsXQqYPmhJtbefWNc2N/view?usp=drive_link",
  },
  {
    title: "Generative AI with Gemini",
    description: "Generative AI concepts and practical applications using Google's Gemini AI tools.",
    link: "https://drive.google.com/file/d/1rKGuJIuuY-EjCmqI1NbwJzG3PFpI2FBT/view?usp=drive_link",
  },
  {
    title: "Agentic AI - Oracle",
    description: "Certification covering Agentic AI concepts and intelligent AI agent technologies.",
    link: "https://drive.google.com/file/d/1kKgPo5C6fBVYNfEMvGQ54-cvXHk6JeoF/view?usp=drive_link",
  },
  {
    title: "Cloud Infrastructure Foundations Associate",
    description: "Foundational knowledge of cloud infrastructure, computing, and Oracle Cloud services.",
    link: "https://drive.google.com/file/d/1k6tFtFjVulNKjY0E_s2leshKiJS-OM0z/view?usp=sharing",
  },
  {
    title: "Cybersecurity Analyst - Forage",
    description: "Practical cybersecurity experience covering security analysis and risk assessment.",
    link: "https://drive.google.com/file/d/18STCYtot7LkB6fhYLMf4yI07Y7rfG862/view?usp=sharing",
  },
  {
    title: "Data Analytics - Deloitte",
    description: "Practical exposure to data analytics, data interpretation, and business insights.",
    link: "https://drive.google.com/file/d/1R5XuPSk3s9Yh-sktKCoVXO1XFHrOCkwt/view?usp=sharing",
  },
  {
    title: "MongoDB Associate Developer",
    description: "Database development concepts, document-oriented data modeling, and MongoDB operations.",
    link: "https://drive.google.com/file/d/17eL7x8tTD9eJP9dudxvYFTCXWR0PDK7W/view?usp=sharing",
  },
];

function SectionTitle({ children, subtitle }) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="brand">
          Venkata Krishna Vamsi
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#internship">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hero-intro">Hello, I'm</p>
            <h1>Vamsi</h1>
            <h2>Product Management Intern</h2>

            <p className="hero-description">
              Building meaningful digital products through technology,
              innovation and problem-solving.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>

              <a
                href="https://drive.google.com/file/d/1CKVqhgCT96Rqg29GaebU-Sifv2J4fnvl/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                View Resume
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/KrishnaVamsi28" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/venkata-krishna-vamsi-rachamadugu/?originalSubdomain=in"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src="/Passport size pic.jpeg"
              alt="Venkata Krishna Vamsi"
              className="profile-image"
            />
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <SectionTitle>About Me</SectionTitle>

          <p className="about-description">
            Software Engineering student and Product Management Intern at
            Karix (Tanla Platforms), with experience in full-stack development,
            Java, Python, SQL, and AI-driven applications. Interested in
            building scalable digital products by combining technical
            expertise, product thinking, and problem-solving.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <SectionTitle>Skills</SectionTitle>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Internship */}
        <section id="internship" className="section">
          <SectionTitle>Internship Experience</SectionTitle>

          <div className="internship-list">
            {internships.map((internship) => (
              <article className="internship-card" key={internship.role}>
                <h3>{internship.role}</h3>

                <p className="internship-meta">
                  {internship.company} <span>•</span> {internship.duration}
                </p>

                <ul className="experience-points">
                  {internship.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div className="tags">
                  {internship.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                {internship.link && (
                  <a
                    href={internship.link}
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    View Project →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <SectionTitle>Projects</SectionTitle>

          <div className="content-grid">
            {projects.map((project) => (
              <article className="content-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  View Project →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="section">
          <SectionTitle>Certifications</SectionTitle>

          <div className="content-grid">
            {certifications.map((certificate) => (
              <article className="content-card" key={certificate.title}>
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  View Certificate →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section">
          <SectionTitle>Contact</SectionTitle>

          <p>Have an opportunity or project in mind? Let's connect.</p>

          <a href="mailto:rvkvamsi28@gmail.com" className="contact-email">
            rvkvamsi28@gmail.com
          </a>

          <div className="contact-links">
            <a href="https://github.com/KrishnaVamsi28" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/venkata-krishna-vamsi-rachamadugu/?originalSubdomain=in"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Vamsi. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
