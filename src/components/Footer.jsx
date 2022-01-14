import twitter from '../Assets/social/twitter.png'
import facebook from '../Assets/social/facebook.png'
import linkedin from '../Assets/social/linkedin.png'


import './styles/Footer.css'

function Footer() {
  return (
    <footer className='Footer'>
      <section className='Footer_duty'>
        <p className='Footer_duty-title'>LATERAL</p>
        <p className='Footer_duty-text'> Copryright c 2018 LATERAL.</p>
        <p className='Footer_duty-text'>All Rights Reserved. Proudly mande in EU.</p>
        <div className='Footer_duty-icons'>
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </section>
      <section className='Footer_contact'>
        <div>
          <p className='Footer_contact-title'>Coompany</p>
          <ul className='Footer_contact-ul'>
            <li>About</li>
            <li>Carrers</li>
            <li>Awards</li>
            <li>Users Program</li>
            <li>Locations</li>
          </ul>
        </div>
        <div>
          <p className='Footer_contact-title'>Products</p>
          <ul className='Footer_contact-ul'>
            <li>Integrations</li>
            <li>API</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Release Notes</li>
          </ul>
        </div>
        <div>
          <p className='Footer_contact-title'>Support</p>
          <ul className='Footer_contact-ul'>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Press</li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer
