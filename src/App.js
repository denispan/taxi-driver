import './App.css';
import Header from './components/Header/Header';
import CarNumber from './components/CarNumber/CarNumber';
import DriverStatus from './components/DriverStatus/DriverStatus';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <DriverStatus />
      </main>
    </div>
  );
}

export default App;
