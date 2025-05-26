import React, { useRef, useState, useEffect } from "react";

const PENDULUM_LENGTH = 100;
const NODE_RADIUS = 20;
const GRAVITY = 9.81;
const DAMPING = 0.9995;

function toXY(origin, angle, length) {
    return {
        x: origin.x + length * Math.sin(angle),
        y: origin.y + length * Math.cos(angle),
    };
}

function QuadPendulum() {
    const canvasRef = useRef(null);
    const [angles, setAngles] = useState([Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2]);
    const [angularVels, setAngularVels] = useState([0, 0, 0, 0]);
    const [masses, setMasses] = useState([1, 1, 1, 1]);
    const [dragging, setDragging] = useState(null); // index of node being dragged
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    // Calculate positions of each node
    const getPositions = () => {
        const origin = { x: 300, y: 50 };
        let positions = [origin];
        let current = origin;
        let totalAngle = 0;
        for (let i = 0; i < 4; i++) {
            totalAngle += angles[i];
            current = toXY(current, totalAngle, PENDULUM_LENGTH);
            positions.push(current);
        }
        return positions;
    };

    // Physics simulation (simplified for demonstration)
    useEffect(() => {
        if (dragging !== null) return; // Pause simulation while dragging
        let animationId;
        const step = () => {
            setAngles(prevAngles => {
                let newAngles = [...prevAngles];
                let newAngularVels = [...angularVels];
                // Simple independent pendulum physics for each stage
                for (let i = 0; i < 4; i++) {
                    // Only gravity, no coupling for simplicity
                    const torque = -GRAVITY / PENDULUM_LENGTH * Math.sin(newAngles[i]);
                    newAngularVels[i] += torque / masses[i];
                    newAngularVels[i] *= DAMPING;
                    newAngles[i] += newAngularVels[i];
                }
                setAngularVels(newAngularVels);
                return newAngles;
            });
            animationId = requestAnimationFrame(step);
        };
        animationId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationId);
        // eslint-disable-next-line
    }, [dragging, masses]);

    // Mouse events for dragging
    const handleMouseDown = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const mouse = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        const positions = getPositions();
        for (let i = 1; i < positions.length; i++) {
            const dx = mouse.x - positions[i].x;
            const dy = mouse.y - positions[i].y;
            if (dx * dx + dy * dy < NODE_RADIUS * NODE_RADIUS) {
                setDragging(i - 1);
                setDragOffset({ x: dx, y: dy });
                return;
            }
        }
    };

    const handleMouseMove = (e) => {
        if (dragging === null) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const mouse = {
            x: e.clientX - rect.left - dragOffset.x,
            y: e.clientY - rect.top - dragOffset.y,
        };
        const positions = getPositions();
        const prev = positions[dragging];
        const dx = mouse.x - prev.x;
        const dy = mouse.y - prev.y;
        const angle = Math.atan2(dx, dy);
        setAngles(prevAngles => {
            const newAngles = [...prevAngles];
            newAngles[dragging] = angle - prevAngles.slice(0, dragging).reduce((a, b) => a + b, 0);
            return newAngles;
        });
        setAngularVels(prev => {
            const newVels = [...prev];
            newVels[dragging] = 0;
            return newVels;
        });
    };

    const handleMouseUp = () => {
        setDragging(null);
    };

    // Draw pendulum
    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, 600, 600);
        const positions = getPositions();
        // Draw rods
        ctx.strokeStyle = "#333";
        ctx.lineWidth = 4;
        for (let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.moveTo(positions[i].x, positions[i].y);
            ctx.lineTo(positions[i + 1].x, positions[i + 1].y);
            ctx.stroke();
        }
        // Draw nodes
        for (let i = 1; i < positions.length; i++) {
            ctx.beginPath();
            ctx.arc(positions[i].x, positions[i].y, NODE_RADIUS, 0, 2 * Math.PI);
            ctx.fillStyle = dragging === i - 1 ? "#ff9800" : "#2196f3";
            ctx.fill();
            ctx.strokeStyle = "#333";
            ctx.stroke();
            // Draw mass label
            ctx.fillStyle = "#fff";
            ctx.font = "16px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(masses[i - 1].toFixed(1), positions[i].x, positions[i].y);
        }
    }, [angles, masses, dragging]);

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={600}
                height={600}
                style={{ background: "#f5f5f5", border: "1px solid #ccc", cursor: dragging !== null ? "grabbing" : "pointer" }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            />
            <div style={{ marginTop: 20 }}>
                {masses.map((mass, i) => (
                    <div key={i} style={{ marginBottom: 10 }}>
                        <label>
                            Mass {i + 1}:&nbsp;
                            <input
                                type="range"
                                min={0.5}
                                max={5}
                                step={0.1}
                                value={mass}
                                onChange={e => {
                                    const newMasses = [...masses];
                                    newMasses[i] = parseFloat(e.target.value);
                                    setMasses(newMasses);
                                }}
                            />
                            &nbsp;{mass.toFixed(1)}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuadPendulum;