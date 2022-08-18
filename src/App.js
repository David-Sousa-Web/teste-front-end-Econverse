import './App.css';
import { Blogs } from './components/Blogs/Blogs';
import { Category } from './components/category/Category';
import { Contact } from './components/Contact/Contact';
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
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
