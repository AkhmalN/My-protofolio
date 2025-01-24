import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div style={{ fontSize: "30px", color: "#fff", textAlign: "center" }}>
      <Typewriter
        options={{
          strings: [
            "Frontend Developer",
            "Passionate Web & Mobile Developer",
            "Always Learning",
            "Working Hard :)",
            "think about things that need to be thought about :)",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          cursor: "|",
          delay: 100,
          wrapperClassName: "typewriter-wrapper",
          cursorClassName: "typewriter-cursor",
        }}
      />
      <style jsx>{`
        .typewriter-wrapper {
          font-family: "Courier New", Courier, monospace;
          font-weight: bold;
        }
        .typewriter-cursor {
          color: #00f9ff;
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Type;
