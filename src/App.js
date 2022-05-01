// @packages
import { Routes, Route } from "react-router-dom";

// @app
import Layout from './components/Layout';
import Footer from './components/Footer';
import About from './components/About';

// @own
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/d8musica" element={null} />
        </Routes>        
        <div className="App-header">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
