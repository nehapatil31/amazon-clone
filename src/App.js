import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

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
  },[])

  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />}>
          </Route>
          <Route path='/checkout' element={<><Header /><Checkout /></>}>
          </Route>
          <Route path='/' element={<><Header /><Home /></>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
