// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './pages/Dashboard';
import Reviews from './pages/Reviews';
import Login from './pages/Login';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
                {/* <Route path="/register" element={<Register />} /> */}
            </Routes>
      </Router>
  );
}

export default App;
