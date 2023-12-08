import './App.css';
import Header from './components/Header/header.jsx';
import AnimalsList from './components/Animals/AnimalsList';
import Homepage from './pages/Homepage/homepage.jsx'
import { Route, Routes } from "react-router-dom";
import UpdateAnimal from './components/Animals/UpdateAnimal.jsx';
import FoodList from './components/Food/FoodList';
import Adopt from './pages/Adopt/Adopt';
import ShowAnimal from './pages/Show/show';
import NewFoodForm from './components/Food/NewFoodForm';
import Footer from './components/Footer/Footer';
import WelcomePage from './components/Welcome/Welcome.jsx';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/animals" element={<AnimalsList />} />
        <Route path="/animals/:id" element={<ShowAnimal />} />
        <Route path="/animals/:id/update" element={<UpdateAnimal />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/newfood" element={<NewFoodForm />} />
        <Route path="/foodlist" element={<FoodList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
