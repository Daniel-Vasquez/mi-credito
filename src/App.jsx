import Navbar from './components/Navbar'
import Header from './components/Header'
import FeaturesDesigned from './components/FeaturesDesigned'
import EasyApi from './components/EasyApi'
import FlexiblePricing from './components/FlexiblePricing'
import WorldExperts from './components/WorldExperts'
import Questions from './components/Questions'


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
    </main>
  );
}

export default App;
