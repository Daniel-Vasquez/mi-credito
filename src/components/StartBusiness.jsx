import Btn from "./Btn";
import './styles/StartBusiness.css'

function StartBusiness() {
  return (
    <div className='StartBusiness'>
      <section className='StartBusiness_text'>
        <p className='StartBusiness_text-title'>Start <strong>growing</strong> your bussiness.</p>
        <p className='StartBusiness_text-text'>
          Your issue is our main priority. Our 24/7 support team is here to help
          you and make sure our product is up to date. Have a presale question
          about our products and features? Or looking for a refund? We would
          love to hear what you concern is. Online awards and publications.
        </p>
      </section>
      <section className='StartBusiness_btn'>
        <Btn title='GET STARTED NOW!' color='cyan'/>
      </section>
    </div>
  );
}

export default StartBusiness;
