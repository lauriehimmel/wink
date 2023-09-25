import {Routes, Route } from "react-router-dom";
import AnimalsList from "../../components/Animals/AnimalsList";
import NewAnimalForm from "../../components/Animals/NewAnimalForm";

export default function Home() {
  return (
    <main>
      <Routes>
        <Route path="/animals" element={<AnimalsList />} />
      </Routes>
    </main>
  )
}