import './styles/global.css';
import { Header } from './components/Header'
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          body
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
