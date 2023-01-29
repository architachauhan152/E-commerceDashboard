import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Product Page</h1>}/>
        <Route path="/add" element={<h1>Add Product Page</h1>}/>
        <Route path="/update" element={<h1> Update Product Page</h1>}/>
        <Route path="/logout" element={<h1>Logout Page</h1>}/>
        <Route path="/profile" element={<h1>Profile Page</h1>}/>

      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
