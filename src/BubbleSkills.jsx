import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Canvas from "./Canvas";
import { useRef } from "react";
import { Physics, useBox } from "@react-three/cannon";
import { Canvas as ThreeCanvas } from "@react-three/fiber";

const skills = [
  "Industrial Design", "Embedded Systems", "Complex Engineering Analysis",
  "Public Speaking", "Engineering System Design", "SolidWorks", "Product Design",
  "Embedded Software", "Rapid Prototyping", "Computer-Aided Design (CAD)",
  "Autodesk Fusion 360", "Product Development", "Product Testing", "Engineering Design", "3D Modeling", "Mechatronics",
  "Manufacturing", "Robotics", "Research", "Computer Vision", "User-centered Design",
  "Digital Signal Processing", "Image Processing", "Machine Learning",
  "Analytical Skills", "Data Analysis", "Machine Design", "Automation",
  "Computational Fluid Dynamics (CFD)", "Finite Element Analysis (FEA)",
  "Geometric Dimensioning & Tolerancing", "GD&T", "ISO 14001", "ISO 45001",
  "ASME Standards", "British Standards", "Mechanical Design"
];


const BubbleSkills = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "20px", justifyContent: "center", alignItems: "center" }}>
      {skills.map((skill, index) => (
        <div
          key={index}
          style={{
            borderRadius: "5px",
            padding: "10px 15px",
            backgroundColor: "#0B0F2A",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s, transform 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#141A3F";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#0B0F2A";
            e.target.style.transform = "scale(1)";
          }}
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default BubbleSkills;