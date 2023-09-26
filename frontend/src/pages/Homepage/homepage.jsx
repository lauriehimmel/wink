import { Link } from "react-router-dom";
import AnimalsList from "../../components/Animals/AnimalsList";
import NewAnimalForm from "../../components/Animals/NewAnimalForm";
import Header from "../../components/Header/header";


export default function Home() {
  return (
    <>
    <h1>Homepage</h1>
    <AnimalsList />
    <NewAnimalForm />
    </>
  )
}