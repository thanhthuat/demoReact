import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Carousel from './Component/Carousel/Carousel';
import Smartphone from './Component/Smartphone/Smartphone';
import Laptop from './Component/Laptop/Laptop';
import Promotion from './Component/Promotopn/Promotion';
function App() {
  return (
    <div className="bg-dark">
     <Header/>
     <Carousel />
     <Smartphone/>
     <Laptop/>
     <Promotion/>
    </div>
  );
}

export default App;
