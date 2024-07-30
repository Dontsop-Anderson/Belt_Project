// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Form from './views/Form';
import Present from './views/Present';
import Show from './views/Show';
import Option from './views/Option';
import Now from './views/Now';
import Account from './pages4/Account';
import Edit from './pages5/Edit'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main /> } path='/' default/>
          <Route element={<Form /> } path='/signup' />
          <Route element={<Present /> } path='/Dashboard' />
          <Route element={<Show /> } path='/user/:id' />
          <Route element={<Option /> } path='/new' />
          <Route element={<Now /> } path='/search' />
          <Route element={<Account />} path='/event/:id'/>
          <Route element={<Edit />} path='/event/edit/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
