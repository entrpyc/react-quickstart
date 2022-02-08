import './styles/global.css';
import { ProductListing } from './components/ProductListing'
import { CheckoutSection } from './components/CheckoutSection'
import { GlobalProvider } from './context/GlobalContext'

function App() {
  // if there arent any products, show a (message?)

  return (
    <GlobalProvider>
      <div className="App">
        <ProductListing />
        <CheckoutSection />
      </div>
    </GlobalProvider>
  );
}

export default App;
