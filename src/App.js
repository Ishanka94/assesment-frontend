// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    {/* <Route path="products" element={<Products />} /> */}
                </Route>
                {/* <Route path="/register" element={<Register />} /> */}
            </Routes>
      </Router>
  );
}

export default App;
