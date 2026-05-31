import './App.css'
import BankingSystem from './components/BankingSystem';
import CaseStudiesSection from './components/CaseStudiesSection';
import FintechInsightsSection from './components/FintechInsightsSection';
import N7Footer from './components/Footer';
import Hero from './components/Hero'
import Solution from './components/Solution';
import "@fontsource/archivo/500.css";
import Core3 from './components/ui/Core3';
import FintechLandingSection from './components/FintechLandingSection';
import StripLayout from './components/StripLayout';

function App() {

  return (
    <>
    <div className="w-full h-screen">
       <Hero/>
       <Solution/>
       <BankingSystem/>
       <StripLayout/>
       <FintechLandingSection/>
       <FintechInsightsSection/>
       <CaseStudiesSection/>
       <Core3 backGroundImage = "false" paddingX = "3" />
       <N7Footer/>
    </div>
    </>
  );
}

export default App;