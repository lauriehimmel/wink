import logo from './logo.svg';
import './App.css';
import Header from '/Users/lauriehimmel/sei/projects/wink/frontend/src/components/Header/header.jsx';
// import Main from '/Users/lauriehimmel/sei/projects/wink/frontend/src/components/Nav/nav.jsx';
import AnimalsList from './components/Animals/AnimalsList';
import Homepage from './pages/Homepage/homepage.jsx'
import { Link, Route, Routes } from "react-router-dom";
import Animal from './components/Animals/Animal.jsx'
import NewAnimalForm from './components/Animals/NewAnimalForm';
import UpdateAnimal from './components/Animals/UpdateAnimal.jsx';
import FoodList from './components/Food/FoodList';
import Adopt from './pages/Adopt/Adopt';
import ShowAnimal from './pages/Show/show';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/animals" element={<AnimalsList />} />
        <Route path="/animals/:id" element={<ShowAnimal />} />
        <Route path="/animals/:id/update" element={<UpdateAnimal />} />
        <Route path="/adopt" element={<Adopt />} />
      </Routes>
    </div>
  );
}

export default App;
