import Navbar from './components/Navbar'
import Header from './components/Header'
import FeaturesDesigned from './components/FeaturesDesigned'
import EasyApi from './components/EasyApi'
import FlexiblePricing from './components/FlexiblePricing'
import WorldExperts from './components/WorldExperts'


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
    </main>
  );
}

export default App;
