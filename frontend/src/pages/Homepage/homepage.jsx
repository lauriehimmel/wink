import { Link, useNavigate } from "react-router-dom";
import AnimalsList from "../../components/Animals/AnimalsList";
import NewAnimalForm from "../../components/Animals/NewAnimalForm";
import Header from "../../components/Header/header";
import AnimalOfTheDay from "../../components/Animals/animalOfTheDay"
import dog from '../../assets/dog-02.png'
import "./homepage.css";


export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="homepage">
        <div>
          <h1>Visit the Pets</h1>
        <div className="home-animallist">
          <AnimalsList />
        </div>
        </div>
        <div>
          <h1>Pet of the Day</h1>
        <div className="home-animalofday">
          <AnimalOfTheDay />
        </div>
        </div>
        <div>
          <h1>Adopt a Pet</h1>
        <div onClick={() => navigate('/adopt')} className="home-adopt">
          <img src={dog} />
        </div>
        </div>
      </div>
    </>
  );
}
