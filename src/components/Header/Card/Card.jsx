import { CardContainer, TitleContainer, TextContainer } from "./Card.styles";
import "./card.css";
const Card = (props) => {
  return (
    <div className="CardContainer" style={{"--width" :props.width , "--height" :props.height }}>
      <h1 className="TitleContainer ">{props.heading}</h1>
      <p className="TextContainer">{props.text}
        
      </p>
    </div>
  );
};

export default Card;
// What's your dream?
// Log in now and learn the skills to help make it happen.