import logo from "../assets/images/logo-teal.svg";

const Header = ({ data }) => {
  return (
    <header>
      <div className="top-bar">
        <div className="top-bar-center">
          <img className="logo" src={logo} alt="Logo of Deliveroo" />
        </div>
      </div>
      <div className="infos-restos">
        <div className="infos-restos-center">
          <div className="infos-restos-text">
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <img
            className="infos-restos-img"
            src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
