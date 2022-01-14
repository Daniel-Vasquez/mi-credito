import "./styles/CardQuestions.css";
import {Link} from 'react-router-dom'

const CardQuestions = (props) => {
  return (
    <>
      <section id={props.id} className="CardQuestions">
        <button className="CardQuestions_title">{props.title}</button>
        <img src={props.url} alt="Icon drap down" />
      </section>
    </>
  );
};

export default CardQuestions;
