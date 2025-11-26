import { useState } from "react";
import newArrivalsOne from "../assets/images/new-arrivals-1.png";
import newArrivalsTwo from "../assets/images/new-arrivals-2.png";
import newArrivalsThree from "../assets/images/new-arrivals-3.png";

const newArrivalInfo = [
  {
    image: newArrivalsOne,
    title: "Mens Underwears",
    subtitle: "Men's clothing Venenatis Etiam",
  },
  {
    image: newArrivalsTwo,
    title: "Womens Underwears",
    subtitle: "Parturient Venenatis Etiam",
  },
  {
    image: newArrivalsThree,
    title: "Underwears",
    subtitle: "Parturient Venenatis Etiam",
  },
];

const NewArrivalsCard = ({ title, description, imageUrl }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div
        className="mb-4 w-100 position-relative"
        onClick={() => setShowOverlay(true)}
      >
        <img src={imageUrl} alt="" className="w-100" />
        {showOverlay && (
          <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-light bg-opacity-50 d-flex align-items-center justify-content-center">
            <h2>Clicked</h2>
          </div>
        )}
      </div>
      <h4 className="h3 text-capitalize mb-1">{title}</h4>
      <div className="">
        <p>{description}</p>
        {showOverlay && (
          <button
            className="btn btn-primary"
            onClick={() => setShowOverlay(false)}
          >
            remove Overlay
          </button>
        )}
      </div>
    </div>
  );
};

const NewArrivals = () => {
  return (
    <section className="my-5 ">
      <div className="container">
        <h2 className="pt-5  mb-5 text-center">Check out BYC New Arrivals</h2>
        <div className="row">
          {newArrivalInfo.map((arrivalInfo, index) => (
            <NewArrivalsCard
              key={index}
              title={arrivalInfo.title}
              imageUrl={arrivalInfo.image}
              description={arrivalInfo.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
