import './App.css';
import { Category } from './components/category/Category';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Marcas } from './components/marcas/Marcas';
import { Products } from './components/products/Products';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Category />
      <Products />
      <Marcas />
    </div>
  );
}

export default App;
