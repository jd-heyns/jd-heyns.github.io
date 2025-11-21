// Nebula.jsx
import { useMemo } from "react";

export default function Nebula({ style: customStyle = {}, ...props }) {
  const style = useMemo(() => ({
    background: `
      radial-gradient(40% 20% at 20% 30%, rgba(130,30,200,0.16), transparent 15%),
      radial-gradient(30% 18% at 70% 70%, rgba(20,140,180,0.08), transparent 18%),
      radial-gradient(28% 28% at 50% 40%, rgba(255,140,200,0.06), transparent 20%)
    `,
    filter: "blur(18px) saturate(120%)",
    opacity: 0.95,
    mixBlendMode: "screen",
    position: "fixed",
    top: 0,
    left: 0,
    width: "20vw",
    height: "20vh",
    pointerEvents: "none",
    zIndex: 0,
    borderRadius: "50%",
    ...customStyle,
  }), [customStyle]);

  return <div className="nebula" style={style} {...props}></div>;
}
