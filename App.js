import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';


function App() {
  return (
    <BrowserRouter>
      <CustomerRouters />
    </BrowserRouter>
    

  );
}

export default App;
