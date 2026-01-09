import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

import { ModalProvider } from './context/ModalContext';
import ProjectModal from './components/ProjectModal';

function App() {
  return (
    <ModalProvider>
      <Router>
        <ScrollToTop />
        <ProjectModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;
