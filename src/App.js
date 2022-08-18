import './App.css';
import { Blogs } from './components/Blogs/Blogs';
import { Category } from './components/category/Category';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/footer/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
