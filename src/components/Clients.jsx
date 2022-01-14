import './styles/Clients.css'
import sindevo from '../Assets/clients/Sindevo.png'
import mobilex from '../Assets/clients/Mobilex.png'
import lateral from '../Assets/clients/Lateral.png'
import blixMobile from '../Assets/clients/BlixMobile.png'
import templateX from '../Assets/clients/TemplateX.png'

const Clients = () => {
  return (
    <div className='Clients'>
      <img className='Clients_img' src={sindevo} alt="Icon sindevo" loading="lazy"/>
      <img className='Clients_img' src={mobilex} alt="Icon mobilex" loading="lazy"/>
      <img className='Clients_img' src={lateral} alt="Icon lateral" loading="lazy"/>
      <img className='Clients_img' src={blixMobile} alt="Icon blixMobile" loading="lazy"/>
      <img className='Clients_img' src={templateX} alt="Icon templateX" loading="lazy"/>
    </div>
  )
}

export default Clients
