import logo from './logo.svg';
import './App.css';
import PersonalDetails from './component/PersonalDetails';
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Router>
        <Route path="/"exact element={<PersonalDetails/>}/>
        <Route path="/details" exact element={<BookingApp/>}/>
      </Router>
      </BrowserRouter>


    
    </div>
  );
}

export default App;
