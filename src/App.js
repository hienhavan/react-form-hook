import logo from './logo.svg';
import './App.css';
import MyForm from './component/formHook';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/form' element={<MyForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
