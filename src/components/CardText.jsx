import './styles/CardText.css'

const CardText = ({title, description}) => {
  return (
    <div className="CardText">
      {title}
      <div className="CardText_line"></div>
      <p className="CardText_text">
        {description}
      </p>
    </div>
  )
}

export default CardText
