import apiSupport from '../apiSupport'
import Btn from './Btn'
import './styles/CardSupport.css'

const CardSupport = () => {
  return (
    <>
      {apiSupport.map((element) => {
        return (
          <div key={element.title} className='CardSupport'>
            <section className='CardSupport_icon'>
              <img src={element.img} alt={element.title} loading="lazy"/>
            </section>
            <section className='CardSupport_info'>
              <h2 className='CardSupport_info-title'>{element.title}</h2>
              <div className='line'></div>
              <p className='CardSupport_info-text'>{element.text}</p>
              <Btn color='purple' className='CardSupport_info-btn'>{element.correo}</Btn>
            </section>
          </div>
        )
      })}
    </>
  )
}

export default CardSupport
