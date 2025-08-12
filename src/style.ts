import { CSSProperties } from "react";

export const styles = {
  // ====== LAYOUT STYLES ======
  portfolioContainer: {
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    minHeight: "100vh",
    lineHeight: 1.6,
  } as CSSProperties,

  section: {
    padding: "4rem 0",
    borderBottom: "1px solid #e2e8f0",
  } as CSSProperties,

  largeSection: {
    padding: "5rem 0",
    borderBottom: "1px solid #e2e8f0",
  } as CSSProperties,

  // ====== HERO SECTION ======
  heroButtonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "-1.5rem",
    position: "relative",
    zIndex: 10,
  } as CSSProperties,

  // ====== WORK SECTION ======
  workGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "2.5rem",
    marginTop: "2rem",
  } as CSSProperties,

  techContainer: {
    margin: "1.5rem 0",
  } as CSSProperties,

  techList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "0.5rem",
  } as CSSProperties,

  techTag: {
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    borderRadius: "9999px",
    padding: "0.25rem 0.75rem",
    fontSize: "0.75rem",
    fontWeight: 600,
  } as CSSProperties,

  // ====== SKILLS SECTION ======
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "3rem",
    marginTop: "2rem",
  } as CSSProperties,

  skillList: {
    listStyle: "none",
    padding: 0,
    margin: "1rem 0 0 0",
  } as CSSProperties,

  skillListItem: {
    position: "relative",
    paddingLeft: "1.5rem",
    marginBottom: "0.75rem",
    "&::before": {
      content: '"▹"',
      position: "absolute",
      left: 0,
      color: "#3b82f6",
    },
  } as CSSProperties,

  // ====== TABLE SECTION ======
  tableContainer: {
    overflowX: "auto",
    marginTop: "2rem",
    borderRadius: "0.5rem",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  } as CSSProperties,

  // ====== RESOURCES SECTION ======
  resourcesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  } as CSSProperties,

  // ====== FOOTER ======
  footer: {
    padding: "4rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#eff6ff",
    borderRadius: "1rem",
    marginTop: "3rem",
  } as CSSProperties,

  footerName: {
    margin: "1.5rem 0 0.5rem",
  } as CSSProperties,

  footerEmail: {
    color: "#3b82f6",
    fontWeight: 500,
    marginBottom: "0.25rem",
  } as CSSProperties,

  footerLocation: {
    color: "#64748b",
    marginBottom: "1.5rem",
  } as CSSProperties,

  footerButtonsContainer: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  } as CSSProperties,

  // ====== ANIMATIONS ======
  "@global": {
    "@keyframes fadeIn": {
      from: { opacity: 0, transform: "translateY(10px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    section: {
      animation: "fadeIn 0.6s ease-out forwards",
    },
    ".card-hover": {
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  } as any,
};
