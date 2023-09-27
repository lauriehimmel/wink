import { useState } from "react";
import NewAnimalForm from "../../components/Animals/NewAnimalForm";
import NewFoodForm from "../../components/Food/NewFoodForm";
import { createFood } from "../../utilities/food-service";
import { useNavigate } from "react-router";
import { createAnimal } from "../../utilities/animal-service";

export default function Adopt() {
  let foodInitState = {
    name: "",
    category: ""
  };

  let animalInitState = {
    name: "",
    type: ""
  };
  const navigate = useNavigate();
  const [animalForm, setNewAnimalForm] = useState(animalInitState);
  const [foodForm, setFoodForm] = useState(foodInitState);

  async function handleSubmit(e) {
    e.preventDefault();
    e.currentTarget.disabled = true;
    console.log('foodForm', foodForm)
    await createFood(foodForm);
    console.log('animalForm', animalForm)
    await createAnimal(animalForm);
    setFoodForm(foodInitState);
    console.log('foodForm', foodForm)
    setNewAnimalForm(animalInitState);
    console.log('animalForm', animalForm)
    navigate("/animals");
  }


  return (
    <>
      <form  onSubmit={handleSubmit}>
        <NewAnimalForm animalForm={animalForm} />
        <NewFoodForm foodForm={foodForm} />
        <input type="submit" value="Adopt!" />
      </form>
    </>
  );
}
