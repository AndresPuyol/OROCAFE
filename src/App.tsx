/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Cooperative from './pages/Cooperative';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="productos" element={<Products />} />
            <Route path="cooperativa" element={<Cooperative />} />
            <Route path="sostenibilidad" element={<Sustainability />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
