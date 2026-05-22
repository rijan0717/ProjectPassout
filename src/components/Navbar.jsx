import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Hero", "projects", "pricing", "contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        alignContent:"center",
        top: 0,
        width: "100%",
        zIndex: 999,
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled ? "rgba(10,10,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124,58,237,0.2)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* LOGO */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{ fontSize: "1.4rem", fontWeight: 800, cursor: "pointer" }}
      >
        <span style={{ color: "#7c3aed" }}>Project</span>
        <span style={{ color: "#ffffff" }}>Passout</span>
      </motion.div>

      {/* DESKTOP LINKS */}
      <div style={{ display: "flex", gap: "32px" }} className="desktop-nav">
        {links.map((link) => (
          <Link
            key={link}
            to={link}
            smooth={true}
            duration={600}
            offset={-70}
            style={{
              textTransform: "capitalize",
              cursor: "pointer",
              fontSize: "0.95rem",
              color: "#ccc",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#7c3aed")}
            onMouseLeave={(e) => (e.target.style.color = "#ccc")}
          >
            {link}
          </Link>
        ))}
      </div>

      {/* CTA BUTTON
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        style={{
          background: "#7c3aed",
          color: "white",
          border: "none",
          padding: "10px 22px",
          borderRadius: "30px",
          fontWeight: 600,
          cursor: "pointer",
          fontSize: "0.9rem",
        }}
      >
        Submit Project
      </motion.button> */}
    </motion.nav>
  );
}

export default Navbar;