import { useEffect, useState } from "react";
import Button from "./Button";

const people = ["yourself", "Men", "Women", "Kids"].map((person) => (
  <span className="fadeIn_animation" key={person}>
    {person}
  </span>
));

// const lastIndex = people.length - 1;

// useEffect(() => {
//   let intervalID = setInterval(() => {
//     if (activeIndex < lastIndex) {
//       setActiveIndex(activeIndex + 1);
//     } else {
//       setActiveIndex(0);
//     }
//   }, 3000);
//   return () => clearInterval(intervalID);
// }, [activeIndex, lastIndex]);

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="container">
        <div className="d-flex justify-content-center flex-column w-100 text-center">
          <h2 className="fs-3 fw-normal mb-3">Your body deserves comfort</h2>
          <h1
            className="fw-bold mb-5"
            style={{ fontSize: 60 }}
          >
            Get the best for {people[activeIndex]}
          </h1>
          <div className="d-flex gap-3 justify-content-center">
            <Button title="Get Started" buttonType="normal" isBlack={false} />
            <Button title="Learn more" buttonType="outline" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
