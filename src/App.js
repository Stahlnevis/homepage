import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Residencies from './components/pages/Residencies';
import OurValue from './components/pages/OurValue';
import ContactUs from './components/pages/ContactUs';
import GetStarted from './components/pages/GetStarted';
import Home from './components/pages/Home';

    

const App = () => {
  return (
   <Router>
    <div className="App">
    <Header />
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/residencies" element={<Residencies/>} />
        <Route path="/our-value" element={<OurValue/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/get-started" element={<GetStarted/>} />
     </Routes>
  </div>
   </Router>
  );
}

export default App;
