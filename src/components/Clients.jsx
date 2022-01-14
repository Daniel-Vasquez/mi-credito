import './styles/Clients.css'
import sindevo from '../Assets/clients/Sindevo.png'
import mobilex from '../Assets/clients/Mobilex.png'
import lateral from '../Assets/clients/Lateral.png'
import blixMobile from '../Assets/clients/BlixMobile.png'
import templateX from '../Assets/clients/TemplateX.png'

const Clients = () => {
  return (
    <div className='Clients'>
      <img className='Clients_img' src={sindevo} alt="" />
      <img className='Clients_img' src={mobilex} alt="" />
      <img className='Clients_img' src={lateral} alt="" />
      <img className='Clients_img' src={blixMobile} alt="" />
      <img className='Clients_img' src={templateX} alt="" />
    </div>
  )
}

export default Clients
