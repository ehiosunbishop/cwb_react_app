import './App.css';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';

function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">
        <ProductCard />
      </header>

      <Footer />
    </div>
  );
}

export default App;
