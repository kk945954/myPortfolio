import React from 'react'
import ProfolioContainer from './components/ProfolioContainer';
import './app.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ProfolioContainer />
    </div>
  );
};

export default App
