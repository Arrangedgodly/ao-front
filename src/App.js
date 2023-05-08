import './App.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import {useState} from 'react';

function App() {
  const [activePage, setActivePage] = useState('welcome');

  const changePage = (page) => {
    setActivePage(page);
  }

  return (
    <div className="App">
      {activePage !== 'welcome' && <Header />}
      {activePage === 'welcome' && <Welcome changePage={changePage} />}
      {activePage === 'shop' && <Shop />}
      {activePage === 'gallery' && <Gallery />}
    </div>
  );
}

export default App;
