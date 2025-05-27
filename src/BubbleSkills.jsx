import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  "Industrial Design", "Embedded Systems", "Complex Engineering Analysis",
  "Public Speaking", "Engineering System Design", "SolidWorks", "Product Design",
  "Embedded Software", "Rapid Prototyping", "Computer-Aided Design (CAD)",
  "Autodesk Fusion 360", "Product Development", "Product Testing",
  "Computer Literacy", "Engineering Design", "3D Modeling", "Mechatronics",
  "Manufacturing", "Robotics", "Research", "Computer Vision", "User-centered Design",
  "Digital Signal Processing", "Image Processing", "Machine Learning",
  "Analytical Skills", "Data Analysis", "Machine Design", "Automation",
  "Computational Fluid Dynamics (CFD)", "Finite Element Analysis (FEA)",
  "Geometric Dimensioning & Tolerancing", "GD&T", "ISO 14001", "ISO 45001",
  "ASME Standards", "British Standards", "Mechanical Design", "Inspection"
];

const getRandomPosition = () => ({
  top: `${Math.random() * 80 + 10}%`,
  left: `${Math.random() * 80 + 10}%`
});

export default function BubbleSkills() {
  const [positions, setPositions] = useState(() =>
    skills.map(() => getRandomPosition())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(skills.map(() => getRandomPosition()));
    }, 5000); // re-randomize positions every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-gradient-to-br from-blue-50 to-blue-200 rounded-xl p-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          initial={positions[i]}
          animate={positions[i]}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="absolute flex items-center justify-center text-sm font-medium bg-blue-500 text-white rounded-full shadow-lg cursor-pointer"
          style={{
            width: `${Math.max(8, skill.length * 0.6)}rem`,
            height: "3rem"
          }}
          whileHover={{ scale: 1.2 }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}
