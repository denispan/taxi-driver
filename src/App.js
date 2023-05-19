import './App.css';
import Header from './components/Header/Header';
import DriverStatus from './components/DriverStatus/DriverStatus';
import DriverPopup from './components/DriverPopup/DriverPopup';


const ORDER = {
  id: '3',
  address: 'Некрасова, 19'
}

function App() {

  const isOpenDriverPopUp = true;

  return (
    <div className="container">
      <Header />
      <main className="main">
        <DriverStatus />
        {isOpenDriverPopUp && <DriverPopup address={ORDER.address} orderId={ORDER.id}/>}
      </main>
    </div>
  );
}

export default App;
