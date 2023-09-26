import logo from './logo.svg';
import './App.css';
import Header from '/Users/lauriehimmel/sei/projects/wink/frontend/src/components/Header/header.jsx';
// import Main from '/Users/lauriehimmel/sei/projects/wink/frontend/src/components/Nav/nav.jsx';
import AnimalsList from './components/Animals/AnimalsList';
import Homepage from './pages/Homepage/homepage.jsx'
import { Link, Route, Routes } from "react-router-dom";
import Animal from './components/Animals/Animal.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/animals/:id" element={<Animal />} />
      </Routes>
    </div>
  );
}

export default App;
