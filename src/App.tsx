import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import HeroImage from "./components/HeroImage";
import Img from "./components/Img";
import Label from "./components/Label";
import Text from "./components/Text";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
} from "./components/Table";
import { styles } from "./style"; // Import styles from the new file

function Portfolio() {
  const [disabled, setDisabled] = useState(false);

  // --- Portfolio Data ---
  const profileData = {
    name: "jithu Bijeesh",
    title: "Full Stack Web Developer",
    bio: "I build responsive, accessible web applications with modern JavaScript frameworks. Focused on creating intuitive user experiences with clean, maintainable code.",
    contact: {
      email: "jithubijeesh33@gmail.com",
      location: "Winnipeg, MA",
    },
  };

  const workData = [
    {
      id: "work1",
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce site with custom CMS, payment integration, and responsive UI.",
      image:
        "https://cdn.dribbble.com/userupload/4151708/file/original-b0885f83d06b2420311f99990de50e95.png?resize=1024x768",
      link: "#",
      techList: ["Ruby", "Rails", "SQL", "Bootstrap"],
    },
    {
      id: "work2",
      title: "Attendence Management Tool",
      description:
        "An attendence management tool for office to manage, track, and communicate effectively.",
      image:
        "https://cdn.dribbble.com/userupload/12973167/file/original-2c35f992383c267e88c1c68d83c3e62f.png?resize=1024x768",
      link: "#",
      techList: ["python", "Django", "Bootstrap", "SQL"],
    },
    {
      id: "work3",
      title: "Movie Management System",
      description:
        "PHP based web app to manage, search, and display movies with responsive design and database integration.",
      image: "images/movie-management-system.png",
      link: "https://yourdomain.com/movie-management-system",
      techList: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
    },
  ];

  const skillsData = {
    languages: ["JavaScript ", "Python", "HTML5", "CSS3/Sass", "Php", "Ruby"],
    frameworks: ["React", "rails", "Django", "bootstrap", "OpenCV"],
    tools: [
      "Git & GitHub",
      "Postman",
      "Docker",
      "Figma",
      "Zap",
      "SQL",
      "MS office",
    ],
  };

  const resourcesData = [
    {
      id: "res1",
      title: "React Documentation",
      summary: "Official React documentation for learning and reference.",
      image:
        "https://676a898cdfa6e90ee258d96d.storage.fermion.app/public-cached/digital-product-thumbnail/fermion-digital-product-id/67d7ccf3dd5914c3eaad7dcf/thumbnail-unique-id/r4ascl6f8pkuggzkjdwy8",
      link: "https://react.dev/",
    },
    {
      id: "res2",
      title: "MDN Web Docs",
      summary:
        "Comprehensive resource for open web standards including HTML, CSS, and JavaScript.",
      image:
        "https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/03/moz_blog_header_MDN-Intro.jpg",
      link: "https://developer.mozilla.org/",
    },
    {
      id: "res3",
      title: "Frontend Masters",
      summary: "In-depth courses on modern frontend development techniques.",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQEeG7oJTTK1Ew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1680514548971?e=2147483647&v=beta&t=ZflFgTlsj2QryThKQ9JiTbBZ3SyYxPoPY2NLv8-Aa3o",
      link: "https://frontendmasters.com/",
    },
  ];

  const experienceData = {
    headers: ["Period", "Company", "Role", "Technologies"],
    rows: [
      {
        id: "exp1",
        period: "2022-2023",
        company: "Zoople Technologies.",
        role: "Intern Fullstack Web developer",
        tech: "Python, Django, SQL , HTML, CSS ,Js",
      },
      {
        id: "exp2",
        period: "2022-2024",
        company: "Vinayaka Transport",
        role: "System Administrator",
        tech: "JavaScript, java, React",
      },
    ],
  };

  const handleContactClick = () => {
    window.location.href = `mailto:${profileData.contact.email}`;
  };

  return (
    <div style={styles.portfolioContainer}>
      {/* --- 1. Hero Section --- */}
      <HeroImage
        imageUrl="https://rapyd.cloud/blog/wp-content/uploads/2024/05/02-6-1024x544.png"
        heading={`${profileData.name} - ${profileData.title}`}
        subheading={profileData.bio}
        disabled={disabled}
      />

      <div style={styles.heroButtonsContainer}>
        <Button
          label="Contact Me"
          disabled={disabled}
          onClick={handleContactClick}
        />
        <Button
          label="View GitHub"
          disabled={disabled}
          onClick={() => window.open("https://github.com/jbBoss", "_blank")}
        />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* --- 2. Work Section --- */}
        <section style={styles.section}>
          <Text content="Featured Projects" size="large" disabled={disabled} />
          <div style={styles.workGrid}>
            {workData.map((project) => (
              <div key={project.id}>
                <Card
                  title={project.title}
                  description={project.description}
                  imageSrc={project.image}
                  disabled={disabled}
                />
                <div style={styles.techContainer}>
                  <Label text="Technologies Used:" disabled={disabled} />
                  <div style={styles.techList}>
                    {project.techList.map((tech) => (
                      <span key={tech} style={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  label="View Project"
                  disabled={disabled}
                  onClick={() => window.open(project.link, "_blank")}
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. Skills Section --- */}
        <section style={styles.largeSection}>
          <Text content="Technical Skills" size="large" disabled={disabled} />
          <div style={styles.skillsGrid}>
            <div>
              <Label text="Languages" disabled={disabled} />
              <ul style={styles.skillList}>
                {skillsData.languages.map((lang) => (
                  <li key={lang} style={styles.skillListItem}>
                    <Text content={lang} disabled={disabled} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Label text="Frameworks & Libraries" disabled={disabled} />
              <ul style={styles.skillList}>
                {skillsData.frameworks.map((fw) => (
                  <li key={fw} style={styles.skillListItem}>
                    <Text content={fw} disabled={disabled} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Label text="Tools & Platforms" disabled={disabled} />
              <ul style={styles.skillList}>
                {skillsData.tools.map((tool) => (
                  <li key={tool} style={styles.skillListItem}>
                    <Text content={tool} disabled={disabled} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- 4. Experience Table --- */}
        <section style={styles.largeSection}>
          <Text
            content="Professional Experience"
            size="large"
            disabled={disabled}
          />
          <div style={styles.tableContainer}>
            <Table disabled={disabled}>
              <TableHeader
                headers={experienceData.headers}
                disabled={disabled}
              />
              <tbody>
                {experienceData.rows.map((row) => (
                  <TableRow key={row.id} disabled={disabled}>
                    <TableCell content={row.period} disabled={disabled} />
                    <TableCell content={row.company} disabled={disabled} />
                    <TableCell content={row.role} disabled={disabled} />
                    <TableCell content={row.tech} disabled={disabled} />
                  </TableRow>
                ))}
              </tbody>
              <TableFooter
                content={`${experienceData.rows.length} positions listed`}
                disabled={disabled}
              />
            </Table>
          </div>
        </section>

        {/* --- 5. Resources Section --- */}
        <section style={styles.largeSection}>
          <Text content="Learning Resources" size="large" disabled={disabled} />
          <Text
            content="Here are some resources I recommend for developers"
            disabled={disabled}
          />
          <div style={styles.resourcesGrid}>
            {resourcesData.map((resource) => (
              <div key={resource.id}>
                <Card
                  title={resource.title}
                  description={resource.summary}
                  imageSrc={resource.image}
                  disabled={disabled}
                />
                <Button
                  label="Visit Resource"
                  disabled={disabled}
                  onClick={() => window.open(resource.link, "_blank")}
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- Contact Footer --- */}
        <footer style={styles.footer}>
          <Img
            src="https://media.licdn.com/dms/image/v2/D5603AQHP6MeX4MgtAA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697166491513?e=1758153600&v=beta&t=Ji2IoNOhU0dyP9mMru_eOCLQPxp4JnmdOWQNkPL8VgM"
            alt="Profile"
            width="80px"
            disabled={disabled}
          />
          <div style={styles.footerName}>
            <Text content={profileData.name} size="large" disabled={disabled} />
          </div>
          <div style={styles.footerEmail}>
            <Text content={profileData.contact.email} disabled={disabled} />
          </div>
          <div style={styles.footerLocation}>
            <Text content={profileData.contact.location} disabled={disabled} />
          </div>
          <div style={styles.footerButtonsContainer}>
            <Button
              label="LinkedIn"
              disabled={disabled}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jithubijeesh/",
                  "_blank",
                )
              }
            />
            <Button
              label="GitHub"
              disabled={disabled}
              onClick={() => window.open("https://github.com/jbBoss", "_blank")}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Portfolio;
