import './App.css';
import Header from '/Users/lauriehimmel/sei/projects/wink/frontend/src/components/Header/header.jsx';
import AnimalsList from './components/Animals/AnimalsList';
import Homepage from './pages/Homepage/homepage.jsx'
import { Link, Route, Routes } from "react-router-dom";
import Animal from './components/Animals/Animal.jsx'
import NewAnimalForm from './components/Animals/NewAnimalForm';
import UpdateAnimal from './components/Animals/UpdateAnimal.jsx';
import FoodList from './components/Food/FoodList';
import Adopt from './pages/Adopt/Adopt';
import ShowAnimal from './pages/Show/show';
import NewFoodForm from './components/Food/NewFoodForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/animals" element={<AnimalsList />} />
        <Route path="/animals/:id" element={<ShowAnimal />} />
        <Route path="/animals/:id/update" element={<UpdateAnimal />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/newfood" element={<NewFoodForm />} />
        <Route path="/foodlist" element={<FoodList />} />
      </Routes>
    </div>
  );
}

export default App;
