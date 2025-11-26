import { useState } from "react";

const categories = [
  {
    key: "women",
    label: "For Women",
    subCategories: ["bra", "pants", "underwears", "lorem"],
  },
  {
    key: "men",
    label: "For Men",
    subCategories: ["t-shirt", "singlet", "pants", "boxers"],
  },
  {
    key: "kids",
    label: "For Women",
    subCategories: ["diapers", "underwears", "lorem", "More Lorem"],
  },
];

const ShopByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('women')
  return (
    <section>
      <div className="container">
        <h2 className="h1 text-center mb-5"> Shop by Category</h2>
        <div className="d-flex justify-content-center  mb-3">
          {categories.map((category) => (
            <button className={`btn fs-4 ${selectedCategory===category.key&& ' text-decoration-underline'}`} >{category.label}</button>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
