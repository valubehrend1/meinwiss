import React from "react";
import { motion, useAnimation } from "framer-motion";
import theme from "../../../../theme";

export default function Spinner() {
  const controls = useAnimation();
  const [direction, setDirection] = React.useState(1);

  React.useEffect(() => {
    controls.start({
      rotate: [0, 360 * direction],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    });

    // Cambia la dirección del giro cada 3 segundos
    const timer = setTimeout(() => {
      setDirection(-1 * direction);
    }, 3000);

    return () => clearTimeout(timer);
  }, [direction, controls]);

  const containerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const spinnerStyle = {
    width: "110px",
    height: "110px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "16px",
  };

  return (
    <div style={containerStyle}>
      <motion.div animate={controls}>
        <div style={spinnerStyle} />
      </motion.div>
    </div>
  );
}
