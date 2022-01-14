import Navbar from './components/Navbar'
import Header from './components/Header'
import FeaturesDesigned from './components/FeaturesDesigned'
import EasyApi from './components/EasyApi'
import FlexiblePricing from './components/FlexiblePricing'
import WorldExperts from './components/WorldExperts'
import Questions from './components/Questions'
import Support from './components/Support'
import Clients from './components/Clients'
import StartBusiness from './components/StartBusiness'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <main className='MainContainer'>
      <Navbar/>
      <Header/>
      <FeaturesDesigned/>
      <EasyApi/>
      <FlexiblePricing/>
      <WorldExperts/>
      <Questions/>
      <Support/>
      <Clients />
      <StartBusiness/>
      <Footer/>
    </main>
  );
}

export default App;
