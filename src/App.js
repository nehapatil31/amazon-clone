import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import Orders from './Orders';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NySWaSDUZMaMoBjVsRWAeh5ZjSP5XJZfEnLeDnV2gcspS0NmCdflpf5TttEugGbUoViBzHNXbjH3W9kRpybKObI00SNdSsOPq');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("User:", authUser)

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />}>
          </Route>
          <Route path='/orders' element={<><Header /><Orders /></>}>
          </Route>
          <Route path='/checkout' element={<><Header /><Checkout /></>}>
          </Route>
          <Route path='/payment' element={
            <>
              <Header />
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </>
          }>
          </Route>
          <Route path='/' element={<><Header /><Home /></>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
