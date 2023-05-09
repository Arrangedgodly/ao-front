import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import {useState} from 'react';

function App() {
  const [activePage, setActivePage] = useState('shop');

  const changePage = (page) => {
    setActivePage(page);
  }

  return (
    <div className="App">
      <Header changePage={changePage} />
      {activePage === 'shop' && <Shop />}
      {activePage === 'gallery' && <Gallery />}
    </div>
  );
}

export default App;
