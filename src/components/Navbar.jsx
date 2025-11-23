import searchIcon from "../assets/icons/search.png";
import heartIcon from "../assets/icons/heart.png";
import profileIcon from "../assets/icons/profile.png";
import cartIcon from "../assets/icons/cart.png";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-body">
          <ul className="nav-list d-flex justify-content-between align-items-center list-unstyled">
            <div className="d-flex">
              <li>
                <a href="">Shop Products</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </div>
            <img
              src="/logo.png"
              alt="logo"
              style={{ width: 72, aspectRatio: 218 / 132 }}
              className="object-fit-contain"
            />
            <div className="d-flex align-items-center">
              <li>
                <a href="" className="">
                  About us{" "}
                </a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <div className="icon-buttons">
                <button className="btn">
                  <img src={searchIcon} alt="" />
                </button>
                <button className="btn">
                  <img src={heartIcon} alt="" />
                </button>
                <button className="btn">
                  <img src={profileIcon} alt="" />
                </button>
                <button className="btn">
                  <img src={cartIcon} alt="" />
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
