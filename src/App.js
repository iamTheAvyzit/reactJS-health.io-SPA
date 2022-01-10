import './App.css';
import Benefits from './components/Benefits/Benefits';
import { Contact } from './components/Contact/Contact';
import Hero from './components/HeroSection/Hero';
import { Plans } from './components/Plans/Plans';
import { Waitlist } from './components/Waitlist/Waitlist';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Benefits/>
      <Plans/>
      <Waitlist/>
      <Contact/>
    </div>
  );
}

export default App;
