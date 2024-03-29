import "./Header.css";
import Card from "./Card/Card";
import headerBanner from "../../images/header/bggreen.jpg";

const Header = () => {
  return (
    <div className="HeaderContainer">
      
      <img id="header-img" src={headerBanner} alt="header img" />
      <div className="header-card-container">
        <Card
          heading="What's your dream?"
          text="Log in now and learn the skills to help make it happen."
          width ="40vw"
          
        />
      </div>
    </div>
  );
};

export default Header;
