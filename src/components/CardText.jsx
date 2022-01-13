import './styles/CardText.css'

const CardText = ({title, description}) => {
  return (
    <div className="CardText">
      <h1 className="CardText_title">{title}</h1>
      <div className="CardText_line"></div>
      <p className="CardText_text">
        {description}
      </p>
    </div>
  )
}

export default CardText
