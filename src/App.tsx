import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FacilityProvider } from './context/FacilityContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Book from './pages/Book';

function App() {
  return (
    <FacilityProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </FacilityProvider>
  );
}

export default App;
