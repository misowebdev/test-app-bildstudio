import { useSpring, animated } from "react-spring";

function Animate({ children, delay }) {
  const animation = useSpring({
    from: { opacity: 0, transform: "scale(1.4)" },
    to: { opacity: 1, transform: "scale(1)" },
    delay: delay || 0,
    config: { duration: 300 },
  });

  return <animated.div style={animation}>{children}</animated.div>;
}

export default Animate;
