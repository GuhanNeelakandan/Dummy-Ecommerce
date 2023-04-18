import './App.css';
import Topbar from './Components/Topbar';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProductSlides from './Components/ProductSlides';
import Products from './Components/Products';

function App() {
  return (
    <div>
      <Topbar/>
      <ProductSlides/>
      <Products/>
    </div>
  );
}

export default App;
