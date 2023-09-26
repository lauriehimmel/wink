import { Link } from "react-router-dom";
import AnimalsList from "../../components/Animals/AnimalsList";
import NewAnimalForm from "../../components/Animals/NewAnimalForm";
import Header from "../../components/Header/header";
import "./homepage.css";

export default function Home() {
  return (
    <>
      <div className="homepage">
        <div className="home-animallist">
          <AnimalsList />
        </div>
        <NewAnimalForm />
      </div>
    </>
  );
}
