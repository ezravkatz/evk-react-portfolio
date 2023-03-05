import { TypeAnimation } from "react-type-animation";

const Greeting = () => {
  return (
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={[
        "Hello! I'm Ezra Katz, a Front-End Developer.",
        1000,
        "Hello! I'm Ezra Katz, a UI/UX Designer.",
        1000,
        "Hello! I'm Ezra Katz, a Copywriter.",
        1000,
        "Hello! I'm Ezra Katz, a Content Creator.",
        1000,
      ]}
      speed={50}
      wrapper="span"
      repeat={Infinity}
      style={{ fontSize: "1.5em" }}
      className="greeting"
    />
  );
};

export default Greeting;
