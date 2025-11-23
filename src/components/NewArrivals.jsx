import newArrivalsOne from "../assets/images/new-arrivals-1.png";
import newArrivalsTwo from "../assets/images/new-arrivals-2.png";
import newArrivalsThree from "../assets/images/new-arrivals-3.png";

const newArrivalInfo = [
  {
    image: newArrivalsOne,
    title: "Mens Underwears",
    subtitle: "Parturient Venenatis Etiam",
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
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="mb-4 w-100">
        <img src={imageUrl} alt="" className="w-100" />
      </div>
      <h4 className="h3 text-capitalize mb-1">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const NewArrivals = () => {
  return (
    <section className="my-5 ">
      <div className="container">
        <h2 className="pt-5  mb-5 text-center">Check out BYC New Arrivals</h2>
        <div className="row">
          {newArrivalInfo.map((info) => (
            <NewArrivalsCard
              key={info.title}
              title={info.title}
              description={info.subtitle}
              imageUrl={info.image}
            />
          ))}{" "}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
