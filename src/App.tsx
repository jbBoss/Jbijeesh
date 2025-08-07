import React from "react";

// Import the components we'll use for the portfolio
import Button from "./components/Button";
import Card from "./components/Card";
import HeroImage from "./components/HeroImage";
import Label from "./components/Label";

// Note: Dropdown, RadioButton, Img, and Table components are not used in this portfolio layout.

function App() {
  // --- Data for the Portfolio Sections ---

  // 1. Basic Information Data
  const basicInfo = {
    name: "Alex Doe",
    title: "Full-Stack Web Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", // A professional-looking hero image
  };

  // 2. Work (Projects) Data
  const workData = [
    {
      id: "proj1",
      title: "E-commerce Platform",
      description:
        "A full-featured online store built with the MERN stack, including payment gateway integration.",
      imageSrc:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop",
      link: "#", // Placeholder for actual project link
      techList: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    },
    {
      id: "proj2",
      title: "Project Management Dashboard",
      description:
        "A collaborative tool for teams to track tasks, deadlines, and project progress in real-time.",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      link: "#",
      techList: ["Vue.js", "Firebase", "Vuetify"],
    },
  ];

  // 3. Skills Data
  const skillsData = {
    description:
      "I specialize in building responsive and scalable web applications from the ground up, with a strong focus on user experience and clean code.",
    languages: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3/Sass",
      "Python",
    ],
    tools: ["Git & GitHub", "Webpack", "Docker", "Jest", "Figma"],
  };

  // 4. Resources Data
  const resourcesData = [
    {
      id: "res1",
      title: "MDN Web Docs",
      summary:
        "The ultimate resource for web standards and documentation for HTML, CSS, and JavaScript.",
      imageSrc:
        "https://i.pinimg.com/originals/c3/b5/96/c3b59683c31671151a44c231a45778ba.png", // Using an icon-like image
      link: "https://developer.mozilla.org/",
    },
    {
      id: "res2",
      title: "React Official Docs",
      summary:
        "The best place to learn React, from the basics to advanced concepts, directly from the source.",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2h8-p2I-_oWrKq51noFSIZ0t02G9t4f3a_A&s",
      link: "https://react.dev/",
    },
  ];

  // --- Inline Styles for Layout ---
  const styles = {
    page: { padding: "0 0 4rem 0", backgroundColor: "#f9f9f9" },
    content: { maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" },
    section: { margin: "4rem 0" },
    sectionTitle: {
      fontSize: "2.5rem",
      marginBottom: "2rem",
      borderBottom: "2px solid #ddd",
      paddingBottom: "0.5rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "2rem",
    },
    skillsContainer: { display: "flex", flexDirection: "column", gap: "1rem" },
    skillsList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      padding: "0",
      listStyle: "none",
    },
    skillItem: {
      backgroundColor: "#e0e0e0",
      padding: "5px 12px",
      borderRadius: "15px",
      fontSize: "0.9rem",
    },
    cardFooter: { marginTop: "1rem" },
    cardTech: { margin: "1rem 0", fontStyle: "italic", color: "#555" },
  };

  return (
    <div style={styles.page}>
      {/* 1. Basic Information Section */}
      <HeroImage
        imageUrl={basicInfo.imageUrl}
        heading={basicInfo.name}
        subheading={basicInfo.title}
      />

      <div style={styles.content}>
        {/* 2. Work Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Work</h2>
          <div style={styles.grid}>
            {workData.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
              >
                {/* Custom content passed as children to the Card component */}
                <div style={styles.cardFooter}>
                  <p style={styles.cardTech}>
                    <strong>Tech:</strong> {project.techList.join(", ")}
                  </p>
                  <Button
                    label="View Project"
                    onClick={() => window.open(project.link, "_blank")}
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. Skills Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <div style={styles.skillsContainer}>
            <p>{skillsData.description}</p>
            <div>
              <Label text="Languages / Frameworks" />
              <ul style={styles.skillsList}>
                {skillsData.languages.map((lang) => (
                  <li key={lang} style={styles.skillItem}>
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Label text="Tools" />
              <ul style={styles.skillsList}>
                {skillsData.tools.map((tool) => (
                  <li key={tool} style={styles.skillItem}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Resources Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Resources</h2>
          <div style={styles.grid}>
            {resourcesData.map((resource) => (
              <Card
                key={resource.id}
                title={resource.title}
                description={resource.summary} // Using description prop for summary
                imageSrc={resource.imageSrc}
              >
                <div style={styles.cardFooter}>
                  <Button
                    label="Learn More"
                    onClick={() => window.open(resource.link, "_blank")}
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
