import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="d-flex justify-content-center flex-column w-100 text-center">
          <h2 className="fs-3 fw-normal mb-3">Your body deserves comfort</h2>
          <h1 className="fw-bold mb-5" style={{fontSize:60}}>Get the best for yourself</h1>
          <div className="d-flex gap-3 justify-content-center">
            <Button title="Get Started" buttonType="normal" />
            <Button title="Learn more" buttonType="outline" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
