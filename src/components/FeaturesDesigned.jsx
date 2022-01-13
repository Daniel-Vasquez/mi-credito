import Card from './Card'
import '../components/styles/FeaturesDesigned.css'

function FeaturesDesigned() {
  return (
    <div className='FeaturesDesigned'>
      <h1 className='FeaturesDesigned-title'>
        Feactures designed for you
      </h1>
      <div className='FeaturesDesigned-line'></div>
      <p className='FeaturesDesigned-text'>
        We believe we have created the most efficient SaaS landing page for your users.
        Landing page with features that will convince you use it for your SaaS business.
      </p>
      <section className='FeaturesDesigned-Card'>
        <Card/>
      </section>
    </div>
  )
}

export default FeaturesDesigned
