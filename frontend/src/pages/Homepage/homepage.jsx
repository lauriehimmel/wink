import { Link } from "react-router-dom";
import AnimalsList from "../../components/Animals/AnimalsList";
import NewAnimalForm from "../../components/Animals/NewAnimalForm";
import Header from "../../components/Header/header";
import AnimalOfTheDay from "../../components/Animals/animalOfTheDay"
import "./homepage.css";

export default function Home() {
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
        <div className="home-animalform">
          <NewAnimalForm />
        </div>
        </div>
      </div>
    </>
  );
}
