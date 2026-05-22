import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Basic",
    price: "Rs. 500",
    description: "Perfect for simple projects",
    features: [
      "1 ready-made project",
      "Source code included",
      "Basic documentation",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "Rs. 1,500",
    description: "Most popular choice",
    features: [
      "Custom project development",
      "Full source code",
      "Complete documentation",
      "PPT & Report included",
      "3 revisions",
      "WhatsApp support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Rs. 3,000",
    description: "For complex final year projects",
    features: [
      "Advanced custom project",
      "Full source code",
      "Complete documentation",
      "PPT, Report & Viva prep",
      "Unlimited revisions",
      "Priority support",
      "Live demo setup",
    ],
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" style={{ padding: "100px 40px", maxWidth: "1100px", margin: "0 auto" }}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <p style={{ color: "#7c3aed", fontWeight: 600, marginBottom: "10px", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem" }}>
          Pricing
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800 }}>
          Simple &{" "}
          <span style={{ background: "linear-gradient(135deg,#7c3aed,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Affordable
          </span>
        </h2>
        <p style={{ color: "#888", marginTop: "14px", maxWidth: "460px", margin: "14px auto 0", lineHeight: 1.7 }}>
          No hidden charges. Pick the plan that fits your project needs and budget.
        </p>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "24px",
        alignItems: "center",
      }}>
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -6 }}
            style={{
              background: plan.highlighted
                ? "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(109,40,217,0.15))"
                : "rgba(255,255,255,0.03)",
              border: plan.highlighted
                ? "2px solid #7c3aed"
                : "1px solid rgba(124,58,237,0.15)",
              borderRadius: "20px",
              padding: plan.highlighted ? "36px 28px" : "28px",
              position: "relative",
              boxShadow: plan.highlighted ? "0 0 40px rgba(124,58,237,0.2)" : "none",
            }}
          >
            {plan.highlighted && (
              <div style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                color: "white",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "4px 16px",
                borderRadius: "20px",
                whiteSpace: "nowrap",
              }}>
                ⭐ Most Popular
              </div>
            )}

            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "6px" }}>{plan.name}</h3>
              <p style={{ color: "#888", fontSize: "0.88rem" }}>{plan.description}</p>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <span style={{ fontSize: "2.2rem", fontWeight: 900, color: plan.highlighted ? "#a78bfa" : "#fff" }}>
                {plan.price}
              </span>
              <span style={{ color: "#666", fontSize: "0.85rem" }}> / project</span>
            </div>

            <ul style={{ listStyle: "none", marginBottom: "28px" }}>
              {plan.features.map((feature) => (
                <li key={feature} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#bbb",
                  fontSize: "0.9rem",
                  marginBottom: "10px",
                }}>
                  <FiCheck size={16} color="#7c3aed" />
                  {feature}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: plan.highlighted ? "none" : "2px solid rgba(124,58,237,0.5)",
                background: plan.highlighted
                  ? "linear-gradient(135deg,#7c3aed,#6d28d9)"
                  : "transparent",
                color: "white",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
              }}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
<div
        className="pricing-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px",
          alignItems: "center",
        }}
      ></div>
export default Pricing;