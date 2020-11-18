import './App.css';
import { Provider } from 'react-redux';
import store from '../../redux/Store';
import Routes from '../../rotues/Routes';
import { BrowserRouter, Link } from 'react-router-dom';
import CreateNew from '../Planets/CreateNew';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const handelModal = () => {
    if(openModal) {
      setOpenModal(false)
    } else {
      setOpenModal(true)
    }
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <h1>Star Wars Planets</h1><button onClick={handelModal} >Create New</button>
        </div>
        {openModal ? <CreateNew handelModal={handelModal} /> : null}
        <Routes />
      </BrowserRouter>
    </Provider>
  );
} 

export default App;
