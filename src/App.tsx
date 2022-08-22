import './styles/globals.scss';
import Background from './components/Background/Background';
import Profile from './components/Profile/Profile';
import Billing from './components/Billing/Billing';
import PaymentConfirmation from './components/PaymentConfirmation/PaymentConfirmation';
import PurchaseComplete from './components/PurchaseComplete/PurchaseComplete';


import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  
  return (
    <Background>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Profile />}/>
          <Route path='/billing' element={<Billing />}/>
          <Route path='/payment-confirmation' element={<PaymentConfirmation />}/>
          <Route path='/payment-complete' element={<PurchaseComplete />} />
        </Routes>
      </HashRouter>
    </Background>
  );
}

export default App;
