import apiSaaS from '../apiSaas'
import './styles/Card.css'

function Card() {
  return (
    <div className='Card'>
      {apiSaaS.map((element) => {
          return (
            <div className='Card_element' key={element.id}>
              <img className='Card_element-img' src={element.icon} alt={element.title}/>
              <p className='Card_element-title'>{element.title} <code>{element.codeInit} {element.codeEnd}</code></p>
              <div className='line'></div>
              <p className='Card_element-description'>{element.description}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Card
